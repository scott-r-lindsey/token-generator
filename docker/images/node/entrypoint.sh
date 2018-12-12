#!/bin/bash

if [ $NODE_ENV=development ]; then
    echo "NODE_ENV is development";
    npm install
fi

node app.js
