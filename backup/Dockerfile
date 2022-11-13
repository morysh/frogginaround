FROM ubuntu:22.10

ADD megacmd-xUbuntu_22.10_amd64.deb /tmp/megacmd.deb
ADD backup.sh /home/
ADD cron-job.sh /home/

RUN apt-get update -y &&\
  apt-get install -y /tmp/megacmd.deb &&\
	apt-get install -y xz-utils &&\
  apt-get install -y cron

RUN chmod +x /home/backup.sh /home/cron-job.sh
RUN mkdir /home/backups

# Redirects stdout/stderr to the stdout/stderr of the entry process
RUN echo '0 12 * * 1 root /home/cron-job.sh > /proc/1/fd/1 2>/proc/1/fd/2' >> /etc/crontab
# For testing every minute
# RUN echo '* * * * * root /home/cron-job.sh > /proc/1/fd/1 2>/proc/1/fd/2' >> /etc/crontab

CMD ["/home/backup.sh"]
