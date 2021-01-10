#!/bin/bash

# CREATE .env file
touch .env

# SET ENVIRONMENT VARIABLES

envraw=$( /opt/elasticbeanstalk/bin/get-config environment )

for k in $(echo $envraw | jq '. | keys | .[]' ); do
    key=$(echo $k | tr -d '"')
    echo $key=$(/opt/elasticbeanstalk/bin/get-config environment -k $key ) >> .env
done

## DB RDS
echo DB_HOST=$(/opt/elasticbeanstalk/bin/get-config environment -k RDS_HOSTNAME ) >> .env
echo DB_USERNAME=$( /opt/elasticbeanstalk/bin/get-config environment -k RDS_USERNAME ) >> .env
echo DB_PASSWORD=$( /opt/elasticbeanstalk/bin/get-config environment -k RDS_PASSWORD ) >> .env
echo DB_DATABASE=$( /opt/elasticbeanstalk/bin/get-config environment -k RDS_DB_NAME ) >> .env

echo "Current Directory: "$(pwd)
echo "Environment Variables"
cat .env
