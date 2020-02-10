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

class ChangeHTTPS extends Command {

    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'videos:changeToHttps';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'change http to https at poster and preview of videos table';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
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

    public function handle() {
        $videos = VideoModel::where('website', 'upload')->get();
        foreach ($videos as $video) {
            $this->info('Start replace video to HTTPS:'. $video->string_Id);
            \Log::info('Start replace video to HTTPS:'. $video->string_Id);

            $video->poster =  str_replace( 'http://', 'https://', $video->poster );
            $video->preview =  str_replace( 'http://', 'https://', $video->preview );
            $video->video_src =  str_replace( 'http://', 'https://', $video->video_src );
            $video->video_sd =  str_replace( 'http://', 'https://', $video->video_sd );
            $video->save();
        }
        $this->info('Done!');
    }


}