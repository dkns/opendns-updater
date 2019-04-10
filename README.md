# Introduction

This is a short script to help you update your ip address on OpenDNS settings website. There used to be (official?) perl script that was supposed to do it but:

a) I can't seem to find it anymore and OpenDNS site only mentions Windows and Mac solutions for dynamic IPs
b) I couldn't never get it to work

What this script does is it runs headless chrome browser that logs into your opendns account and clicks 'synch ip' button for you.

# Installation

    git clone https://github.com/dkns/opendns-updater
    cd opendns-updater
    npm i

# Configuration

    cp .env.example .env

Then edit .env file and put in there your password and login for OpenDNS website.

After that type `node index.js` and you should see it doing its job.

# Additional configuration

If you want to automatically update your IP edit cron and put there something like this:

    */10 * * * * /usr/bin/node $HOME/myprojects/opendns-updater/index.js

    @reboot /usr/bin/node $HOME/myprojects/opendns-updater/index.js
