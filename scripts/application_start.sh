#!/bin/bash

chmod -R 777 /home/ubuntu/netflix-clone

cd /home/ubuntu/netflix-clone

if [ "$DEPLOYMENT_GROUP_NAME" == "development" ]; then
pm2 restart ecosystem.config.js --only "app-dev"
mkdir test
echo "Dev Running"
fi

if [ "$DEPLOYMENT_GROUP_NAME" == "staging" ]; then
rm .env.local
cp /home/ubuntu/.env.local .env.local
pm2 restart ecosystem.config.js --only "app-staging"
echo "Staging Running"
fi

if [ "$DEPLOYMENT_GROUP_NAME" == "production" ]; then
npm run build
pm2 restart ecosystem.config.js --only "app-prod"
echo "Production Running"
fi

echo "Application Started"