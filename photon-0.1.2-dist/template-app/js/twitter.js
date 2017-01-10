    var twitter = require('twitter');
    var print = require('util').log;

    var bot = new twitter({
        consumer_key            :   'FXySudMGKkdFsprtuyn9alihg',
        consumer_secret         :   'Qbv8pJhGJyYVbjrnPI0DKd3otBFp96OF2HC5hR655hTxGmFx7t',
        access_token_key       :    '470636943-mJFJzWlhoKPUIxw8i0ywPbCQ65YMEnnRtO6Cggyh',
        access_token_secret     :   'r4H7r8NOf4C6pBtmvB30cDMizfXeYKhlb7InOtQ1zbNW9'
    });

    // client.post('statuses/update', {status: 'てす'}, function(error, tweet, response){
    //     if(!error){
    //         console.log(tweet);
    //     }
    // });

    bot.updateStatus('てす', function(data){
        if(data.data){
            var err = JSON.parse(data.data);
            var str = err.errors[0].code + "-" + err.errors[0].message;
            print("[error]" + str);
        }
    });