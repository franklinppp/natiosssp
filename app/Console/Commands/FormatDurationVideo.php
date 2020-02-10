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

class FormatDurationVideo extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'video:fortmatDuration';


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
		$videoUploads = VideoModel::where('website','upload')->get();
		foreach ($videoUploads as $video) {
			$video->duration = floatval($video->duration);
			if($video->save()) {
				$this->info("Fortmat Success: " . $video->string_Id);
			} else {
				$this->info("Fortmat Fail: " . $video->string_Id);
			}
		}
	}


}
