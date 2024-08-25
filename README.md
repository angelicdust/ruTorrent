# angelicdust/ruTorrent

Specifically customized fork of ruTorrent for the Fat Cats Jacuzzi media server setup.

## Screenshots

[![](https://github.com/Novik/ruTorrent/wiki/images/scr1_small.jpg)](https://github.com/Novik/ruTorrent/wiki/images/scr1_big.jpg)
[![](https://github.com/Novik/ruTorrent/wiki/images/scr2_small.jpg)](https://github.com/Novik/ruTorrent/wiki/images/scr2_big.jpg)
[![](https://github.com/Novik/ruTorrent/wiki/images/scr3_small.jpg)](https://github.com/Novik/ruTorrent/wiki/images/scr3_big.jpg)

## What to know

This fork REQUIRES that you are running an NGINX + php-fpm web stack. You still need to go through ALL the configuration files including whats in [conf/](conf) and [share/](share) and modify them as required.

The servers that this fork is intended to run on uses:

* AlmaLinux 9 with the paid nginx-plus web stack and php-fpm 8.x
  * php-fpm is configured with a second pool named `rutorrent` that runs within the `nginx` user and `rtorrent` group.
* rTorrent's home directory is in `/var/lib/rtorrent` (this contains `rtorrent.rc` and the session folder that has the `*.lock` files)
* rTorrent's base download directory is in `/mnt/data/rtorrent/downloads`
* rTorrent's RPC socket is at `/run/rtorrent/rpc.sock`
* rTorrent is set to log to `/var/log/rtorrent`
  * `/var/log/rtorrent/rutorrent` should exist and have the permissions set to `nginx:rtorrent`
* ruTorrent is located in `/srv/www/rutorrent`
* rTorrent runs under its own user and group
  * nginx's user needs to be added to rTorrent's group
* You are using the "DarkBetter" theme
* You are a certified American (the default config uses date defaults for en-US)
* You use the [\*arr](https://wiki.servarr.com/) stack for automatically downloading and sorting media
* [Unpackerr](https://unpackerr.zip/) is used for automatically unpacking archives instead of the default `unpack` plugin.
