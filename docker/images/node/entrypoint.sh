#!/bin/bash

if [ $NODE_ENV=development ]; then
    echo "NODE_ENV is development";
    npm install
    npm run dev
else
    node app.js
fi

