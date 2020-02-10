<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        \App\Console\Commands\Inspire::class,
        \App\Console\Commands\ConvertVideo::class,
        \App\Console\Commands\ChangeDomain::class,
        \App\Console\Commands\removeVideoCategoryEmptyCatId::class,
        \App\Console\Commands\removeVideoNotExitVideoCategory::class,
        \App\Console\Commands\ReConvertPreviewVideo::class,
        \App\Console\Commands\FormatDurationVideo::class,
        \App\Console\Commands\ChangeHTTPS::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('inspire')
                 ->hourly();

        $schedule->command('videosConvert')
                 ->everyMinute();
    }
}
