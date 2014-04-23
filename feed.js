


var feed = {
    generateCallbackName: function() {
        return 'callb_' + new Date().getTime();
    },
    getFeed: function(user_id, callback) {
        var data;
        var callback_name = this.generateCallbackName();

        window[callback_name] = function(_data) { data = _data; };

        var script = document.createElement('script');
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(script);

        script.onload = function() { callback(data); };
        script.src = 'http://localhost:8000/js-api/unread-feed-item/?callback=' + callback_name + '&user_id=' + user_id;
    }


};

feed.getFeed(15, function(data) {
    console.log(data);
});
