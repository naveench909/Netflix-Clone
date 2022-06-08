#!/bin/bash

curl --silent -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs

npm install -g pm2
pm2 update