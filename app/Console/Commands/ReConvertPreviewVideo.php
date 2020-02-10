<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;
use App\Models\VideoModel;
use DateTime;
use Log;

class ReConvertPreviewVideo extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'video:convertPreview';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Re-Convert preview image from to 1 to 10 image (start at 10% 15%...) and re-convert thumnail video.';

	protected $ffmpegPath;
	protected $ffprobePath;

	protected $videoInput;

	protected $get_path_date;
	protected $thumbnailPath;
	protected $previewFolder;
	protected $videoDurian;
	protected $imageExtension;

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct() {
		parent::__construct();
		$this->ffmpegPath = env('FFMPEG_PATH', '/usr/local/bin/ffmpeg');
		$this->ffprobePath = env('FFPROBE_PATH', '/usr/local/bin/ffprobe');
		$this->imageExtension = '.jpg';
	}

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function fire() {
		//
	}

	/**
	 * Get the console command arguments.
	 *
	 * @return array
	 */
	protected function getArguments() {
		return [];
	}

	/**
	 * Get the console command options.
	 *
	 * @return array
	 */
	protected function getOptions() {
		return [];
	}

	public function handle()
	{
		$videoUploads = VideoModel::where('website','upload')
								  ->orderBy('id', 'desc')
								  ->get();

		foreach ($videoUploads as $video) {
			$video_src = $video->video_src;

			$this->info('Checking Video: '. $video->string_Id);
			//check if source file null
			if(!empty($video_src)) {
				// Get file name
				$explodeName = explode("/",$video_src);
				$fileName = end($explodeName);
				$this->videoInput = base_path() . DIRECTORY_SEPARATOR . 'videos'.DIRECTORY_SEPARATOR.$fileName;

				// Check source file exist
				if(\File::exists($this->videoInput)) {
					$this->get_path_date= date_format(new DateTime($video->created_at), 'Y-m-d');
					$this->thumbnailPath = base_path() . DIRECTORY_SEPARATOR . 'videos'.DIRECTORY_SEPARATOR.'_'.$this->get_path_date.'-'.$video->string_Id.'.jpg';
					$this->previewFolder = base_path() . DIRECTORY_SEPARATOR . 'videos'.DIRECTORY_SEPARATOR.$video->string_Id. DIRECTORY_SEPARATOR;

					//Start Convert
					$durian = $video->duration;
					$second10Percent = $durian / 10;

					//Convert thumbnail video
					$getThumbnail = $this->getThumbnail($video, $this->videoInput, $second10Percent);
					if($getThumbnail !== false) {
						$video->poster = $getThumbnail;
					}

					//Convert Preview video
					$getPreviews = $this->getPreviewImage($video, $this->videoInput, $second10Percent);
					if(!empty($getPreviews)) {
						$video->preview = $getPreviews;
					}
					// $video->ableconvert = 0;
					if($video->save()) {
						Log::info('Re-convert thumbnail and preview video Success: '.$video->string_Id);
						$this->info('Re-convert thumbnail and preview video Success: '.$video->string_Id);
					}else {
						Log::error('Cannot re-convert thumbnail and preview video: '.$video->string_Id);
						$this->info('Cannot re-convert thumbnail and preview video: '.$video->string_Id);
					}
				} else {
					$this->info('Video Source not found:' . $this->videoInput);
				}
			} else {
				$this->info('Video Source File empty: ' . $video->string_Id);
			}
		}
	}


	//Get thubnail video
	public function getThumbnail($model,$video, $seconds)
	{
		$command = $this->ffmpegPath. ' -deinterlace -an -ss '.$seconds.' -y -i ' . $video .' -f mjpeg -t 1 -r 1 -y -s 640x360 '.$this->thumbnailPath.' 2>&1'; // create thumbnail
		$process = new Process($command); // start process
		$process->setTimeout(7200);
		$process->run(function ($type, $buffer) {
			if (Process::ERR === $type) {
				Log::error('ERR > ' . $buffer);
				echo 'ERR > ' . $buffer;
			} else {
				echo 'OUT > ' . $buffer;
			}
		});
		if ($process->isSuccessful()) {
			$poster = asset('videos'. '/_' .$this->get_path_date.'-'.$model->string_Id.'.jpg');
			return $poster;
		}
		return false;
	}

	//Get preview image video
	public function getPreviewImage($model, $video, $seconds)
	{
		if (!file_exists($this->previewFolder)) {
		    \File::makeDirectory($this->previewFolder);
		}
		$previews = '';
		$increaseSecond = $seconds / 2; // Will get video at 10% 15% 20% 25% 30% ...
		$startSeconds = $seconds;

		for($i = 0; $i < 10; $i++) {
			$fileName = '_'.$this->get_path_date.'-'.$model->string_Id .'-'.($i+1).$this->imageExtension;
			$command = $this->ffmpegPath. ' -deinterlace -an -ss '.$startSeconds.' -y -i ' . $video .' -f mjpeg -t 1 -r 1 -y -s 640x360 '.$this->previewFolder.$fileName.' 2>&1'; // create thumbnail

			$processPreview = new Process($command);
			$processPreview->setTimeout(7200);
			$processPreview->run(function ($type, $buffer) {
				if (Process::ERR === $type) {
					Log::error('ERR > ' . $buffer);
					echo 'ERR Prev > ' . $buffer;
				} else {
					echo 'OUT ERR Prev> ' . $buffer;
				}
			});
			if($processPreview->isSuccessful()) {
				$startSeconds += $increaseSecond;
				$previews .= asset('videos/'.$model->string_Id.'/'.$fileName);
				$previews = $i==9 ? $previews : $previews.',';
			}
		}
		return $previews;
	}

}
