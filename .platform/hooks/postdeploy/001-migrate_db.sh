#!/bin/bash

# Run Migration

echo "Current Directory: "$(pwd)
echo "Running PHP Artisan Migrate"

$(which php) artisan migrate --force
