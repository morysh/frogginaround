#!/bin/bash

file=/home/backups/backup-$(date +%F).tar.xz
# For testing every minute
# file=/home/backups/backup-$(date +%H-%M-%S).tar.xz

tar -cJf $file -C /mnt backup
mega-put $file

if [ `mega-ls | wc -l` -gt 3 ]
then
  # Delete the oldest backup if more than 3 are present
  rm /home/backups/$(ls /home/backups | sort | head -n 1)
  mega-rm $(mega-ls | sort | head -n 1)
fi
