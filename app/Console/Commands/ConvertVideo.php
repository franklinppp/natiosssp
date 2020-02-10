<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;
use App\Models\VideoModel;
use DateTime;
use App\Helper\VideoHelper;
use Log;

class ConvertVideo extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'videosConvert';

	private $timeout = null;
	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Command description.';

	protected $ffmpegPath;
	protected $ffprobePath;

	protected $get_path_date;
	protected $videoInput;
	protected $videoOutput;
	protected $videoSD;
	protected $thumbnailPath;
	protected $previewPath;
	protected $previewFolder;
	protected $model;
	protected $videoDurian;
	protected $imageExtension;

	protected $mapPath;
	protected $mapName;

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
		//find video which is being converted;
		$model = VideoModel::where('status', '=', VideoModel::IN_PROCESS)->first();
		//return false if there is processing video;
		if ($model) {
			Log::error('Converter in progress.');
			echo 'Converter in progress.';
			return false;
		}
		//find new video;
		$model = VideoModel::whereRaw('( status="'.VideoModel::CONVERT_STATUS.'" OR ( status="'.VideoModel::STATUS_FAILED.'" and convertCount <= 3 ))')->first();

		if (!$model) {
			Log::error('No video found');
			echo 'No video found';
			return false;
		}

		$model->status = VideoModel::IN_PROCESS;
		if (!$model->save()) {
			return false;
		}

		//Get Path of video
		$this->get_path_date= date_format(new DateTime($model->created_at), 'Y-m-d');

		$this->model = $model;
		$this->videoInput = base_path() . DIRECTORY_SEPARATOR . 'videos'.DIRECTORY_SEPARATOR.$this->model->string_Id.'.'.$this->model->extension;
		$this->videoOutput = base_path() . DIRECTORY_SEPARATOR . 'videos'.DIRECTORY_SEPARATOR.$this->model->string_Id.'.mp4';

		$this->videoSD = base_path() . DIRECTORY_SEPARATOR . 'videos'.DIRECTORY_SEPARATOR.'_'.$this->get_path_date.'-'.$this->model->string_Id.'-SD.mp4';

		$this->thumbnailPath = base_path() . DIRECTORY_SEPARATOR . 'videos'.DIRECTORY_SEPARATOR.'_'.$this->get_path_date.'-'.$this->model->string_Id.'.jpg';
		$this->previewFolder = base_path() . DIRECTORY_SEPARATOR . 'videos'.DIRECTORY_SEPARATOR.$this->model->string_Id. DIRECTORY_SEPARATOR;

		try {
			$tmpVideo = null;
			// Check extension
			if($this->model->extension != 'mp4'){
				//First convert video to mp4
				$convertToMp4Cmd = $this->ffmpegPath. ' -y -i '.$this->videoInput.' -c:v libx264 '.$this->videoOutput;

				$processConvert = new Process($convertToMp4Cmd);
				$processConvert->setTimeout($this->timeout);
				$processConvert->run();
				if ($processConvert->isSuccessful()) {
					$tmpVideo = $this->videoInput;
					$this->videoInput = $this->videoOutput;
				}
			}

			//Get Durian Video
			$durian = $this->getDurianVideo($this->videoInput);

			//Get Thumbnail Video
			$second10Percent = $durian / 10;
			$this->getThumbnail($this->videoInput, $second10Percent);
			//Get Preview image video
			$this->getPreviewImage($this->videoInput, $second10Percent);

			//Convert Video
			if($this->convertVideoQuality($this->videoInput) !== false) {
				$this->model->status = VideoModel::STATUS_COMPLETED;

				if ( $this->model->website == "upload" && !is_null($this->model->user_id) ){
					$this->model->status = VideoModel::BLOCKED;
				}

				if ($this->model->save()) {
					if($tmpVideo != null) {
						@unlink($tmpVideo);
					}
					VideoHelper::removeDetailCache($this->model->id);
					return true;
				}
			}
		} catch(ProcessFailedException $e) {

			Log::error('ERR: ' . $e);

			//change status if video convert fail.
			$model->status = VideoModel::STATUS_FAILED;
			$curentFailed = $model->convertCount;
			$model->convertCount =  $curentFailed + 1;
			$model->save();
			VideoHelper::removeDetailCache($this->model->id);
			return false;
		}
	}

	/**
	 * Get dirian video (video length)
	 *
	 *
	**/
	public function getDurianVideo($video)
	{
		// get durian video
		$durationCommand = $this->ffprobePath. " -v quiet -of csv=p=0 -show_entries format=duration ".$video ; // get video duration
		$processDuration = new Process($durationCommand); // start  process
		$processDuration->setTimeout($this->timeout);
		$processDuration->run(function ($type, $buffer) {
			if (Process::ERR === $type) {
				Log::error('ERR > ' . $buffer);
				echo 'ERR > ' . $buffer;
			} else {
				echo 'OUT > ' . $buffer;
			}
		});
		if ($processDuration->isSuccessful()) {
			$this->model->duration = floatval($processDuration->getOutput()); // add out put duration to model field
			return $this->model->duration;
		}
		return 0;
	}

	/**
	*	Convert video to sd video
	*
	*
	**/
	public function convertVideoQuality($video)
	{
		$command = $this->ffmpegPath. ' -y -i ' . $video . ' -s 480X320  -threads '.env('FFMPEG_THREADS', 2). ' ' . $this->videoSD;
		$process = new Process($command);
		$process->setTimeout($this->timeout);
		$process->run(function ($type, $buffer) {
			if (Process::ERR === $type) {
				Log::error('ERR > ' . $buffer);
				echo 'ERR > ' . $buffer;
			} else {
				echo 'OUT > ' . $buffer;
			}
		});
		if ($process->isSuccessful()) {
			$uploadName = ['SD' => '_'.$this->get_path_date.'-'.$this->model->string_Id.'-SD.mp4', 'HD' => $this->model->string_Id.'.mp4'];
			$this->model->uploadName = json_encode($uploadName);
			$this->model->video_sd = asset('videos'. '/_' .$this->get_path_date.'-'.$this->model->string_Id.'-SD.mp4');
			$this->model->video_src = asset('videos'. '/'.$this->model->string_Id.'.mp4');
			return $this->model->uploadName;
		} else {
			Log::error('ERR: ' . $process->getOutput());
			echo $process->getOutput();
			throw new ProcessFailedException($process);
			return false;
		}

	}

	//Get thubnail video
	public function getThumbnail($video, $seconds)
	{
		$command = $this->ffmpegPath. ' -deinterlace -an -ss '.$seconds.' -y -i ' . $video .' -f mjpeg -t 1 -r 1 -y -s 640x360 '.$this->thumbnailPath.' 2>&1'; // create thumbnail
		$process = new Process($command); // start process
		$process->setTimeout($this->timeout);
		$process->run(function ($type, $buffer) {
			if (Process::ERR === $type) {
				Log::error('ERR > ' . $buffer);
				echo 'ERR > ' . $buffer;
			} else {
				echo 'OUT > ' . $buffer;
			}
		});
		if ($process->isSuccessful()) {
			$this->model->poster = asset('videos'. '/_' .$this->get_path_date.'-'.$this->model->string_Id.'.jpg');
			return $this->model->poster;
		}
		return false;
	}

	//Get preview image video
	public function getPreviewImage($video, $seconds)
	{
		if (!file_exists($this->previewFolder)) {
		    \File::makeDirectory($this->previewFolder);
		}
		$previews = '';
		$increaseSecond = $seconds / 2; // Will get video at 10% 15% 20% 25% 30% ...
		$startSeconds = $seconds;

		for($i = 0; $i < 10; $i++) {
			$fileName = '_'.$this->get_path_date.'-'.$this->model->string_Id .'-'.($i+1).$this->imageExtension;
			$command = $this->ffmpegPath. ' -deinterlace -an -ss '.$startSeconds.' -y -i ' . $video .' -f mjpeg -t 1 -r 1 -y -s 640x360 '.$this->previewFolder.$fileName.' 2>&1'; // create thumbnail

			$processPreview = new Process($command);
			$processPreview->setTimeout($this->timeout);
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
				$previews .= asset('videos/'.$this->model->string_Id.'/'.$fileName);
				$previews = $i==9 ? $previews : $previews.',';
			}
		}
		$this->model->preview = $previews;
		return $this->model->preview;

		// $getFrame = $this->ffprobePath." -i ".$video." -show_frames 2>&1 | grep -c media_type=video";
		// $processFrame = new Process($getFrame);
		// $processFrame->setTimeout($this->timeout);
		// $processFrame->run(function ($type, $buffer) {
		// 	if (Process::ERR === $type) {
		// 		Log::error('ERR > ' . $buffer);
		// 		echo 'ERR > ' . $buffer;
		// 	} else {
		// 		echo 'OUT > ' . $buffer;
		// 	}
		// });
		// if ($processFrame->isSuccessful()) {
		// 	$frame = floatval($processFrame->getOutput())/100;
		// 	$imagePreview = $this->ffmpegPath.' -y -i '.$video.' -ss '.$seconds.' -frames 1 -q:v 1 -vf "select=not(mod(n\,'.intval($frame).')),scale=-1:145,tile=10x1" '.$this->previewPath;
		// 	$processPreview = new Process($imagePreview);
		// 	$processPreview->setTimeout($this->timeout);
		// 	$processPreview->run(function ($type, $buffer) {
		// 		if (Process::ERR === $type) {
		// 			Log::error('ERR > ' . $buffer);
		// 			echo 'ERR Prev > ' . $buffer;
		// 		} else {
		// 			echo 'OUT ERR Prev> ' . $buffer;
		// 		}
		// 	});
		// 	if($processPreview->isSuccessful()) {
		// 	   $this->model->preview = asset('videos/_'.$this->get_path_date.'-'.$this->model->string_Id.'-preview.jpg');
		// 	   echo 'Preview: ' . $this->model->preview;
		// 	   return $this->model->preview;
		// 	}
		// 	return false;
		// }
		// return false;
	}

}
