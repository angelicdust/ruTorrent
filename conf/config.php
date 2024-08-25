<?php
    // snoopy client
    $httpUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
    $httpTimeOut = 30;
    $httpUseGzip = true;
    $httpIP = null; // string or `null`
    $httpProxy = array
    (
        'use'   => false,
        'proto' => 'http', // 'http' or 'https'
        'host'  => 'localhost',
        'port'  => 3128
    );

    // RPC
    $rpcTimeOut = 5;
    $rpcLogCalls = false;
    $rpcLogFaults = true;

    // for php
    $canUseXSendFile = true;
    $phpUseGzip = false;
    $phpGzipLevel = 2;
    $locale = "UTF8";

    // paths
    $log_file = '/var/log/rtorrent/rutorrent/errors.log';
    $localhosts = array(
        "127.0.0.1",
        "::1",
        "localhost",
        "localhost.localdomain",
    );
    $pathToExternals = array(
        "php"     => '/usr/bin/php',
        "curl"    => '/usr/bin/curl',
        "gzip"    => '/usr/bin/gzip',
        "id"      => '/usr/bin/id',
        "stat"    => '/usr/bin/stat',
        "python"  => '/usr/bin/python3',
        "python3" => '/usr/bin/python3',
    );
    $profilePath = '../../share';
    $profileMask = 0770;
    $scgi_host = "unix:///run/rtorrent/rpc.sock";
    $scgi_port = 0;
    $tempDirectory = '/tmp/rutorrent/';
    $topDirectory = '/mnt/data/rtorrent/downloads/';
    $XMLRPCMountPoint = "plugins/httprpc/action.php"; // this gets changed by `httprpc` plugin anyways

    // ruTorrent options
    $schedule_rand = 10; // rand for schedulers start, +0..X seconds
    $saveUploadedTorrents = false; // Save uploaded torrents to profile/torrents directory or not
    $overwriteUploadedTorrents = false; // Overwrite existing uploaded torrents in profile/torrents directory or make unique name
    $forbidUserSettings = true;
    $localHostedMode = true;
    $cachedPluginLoading = true;

    // debug
    $do_diagnostic = true; // Diagnose ruTorrent. Recommended to keep enabled, unless otherwise required.
    $al_diagnostic = true; // Diagnose autoloader. Set to "false" to make composer plugins work.

    // only use these two if you know what you are doing
    $enableCSRFCheck = false;
    $enabledOrigins = array();
