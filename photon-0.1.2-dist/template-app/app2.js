// for Electron
const electron = require('electron');

// for node-twitter-api
const twitterAPI = require('node-twitter-api');
const twitter = new twitterAPI({
    consumerKey: 'FXySudMGKkdFsprtuyn9alihg',
    consumerSecret: 'Qbv8pJhGJyYVbjrnPI0DKd3otBFp96OF2HC5hR655hTxGmFx7t',
    callback: 'http://www.google.co.jp/'
});

var twitter_accessToken;
var twitter_accessTokenSecret;

electron.app.on('ready', function () {
    const mainWindow = new electron.BrowserWindow({width:800, height:600, webPrefences:{webSecurity: false}});
    twitter.getRequestToken(function (error, requestToken, requestTokenSecret, results) {
        var url = twitter.getAuthUrl(requestToken);
        mainWindow.webContents.on('will-navigate', function (event, url) {
            var matched;
            if(matched = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/)){
                twitter.getAccessToken(requestToken, requestTokenSecret, matched[2], function (error, accessToken, accessTokenSecret, results) {
                    twitter_accessToken = accessToken;
                    twitter_accessTokenSecret = accessTokenSecret;

                    twitter.verifyCredentials(twitter_accessToken, twitter_accessTokenSecret, {}, function (error, data, respons) {
                        mainWindow.loadURL('file://' + __dirname + '/html/index.html');
                    });
                });
            }
            event.preventDefault();
        });
        mainWindow.loadURL(url);
    });
});