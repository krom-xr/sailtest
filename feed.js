/*global BASE_URL*/
var feed = function(dom_el_id, user_id, fn, options) {

    var feed_ob = {
        generateCallbackName: function() {
            return 'callb_' + new Date().getTime();
        },
        getFeed: function(url, user_id, callback) {
            var data;
            var callback_name = this.generateCallbackName();

            window[callback_name] = function(_data) { data = _data; };

            var script = document.createElement('script');
            if (!this.head) {
                 this.head = document.getElementsByTagName('head')[0];
            }
            this.head.appendChild(script);

            script.onload = function() {
                callback(data);
                script.remove();
                delete window[callback_name];
            };
            script.onerror = function(e) { console.error(e); };
            script.src = BASE_URL + url + '?callback=' + callback_name + '&user_id=' + user_id;
        },
        startChecking: function(timeout) {
            var it = this;
            it.getFeed(it.url, it.user_id, it.render);
            it.interval = setInterval(function() {
                it.getFeed(it.url, it.user_id, it.render);
            }, it.check_timeout);
        },
        stopChecking: function() {
            clearInterval(this.interval);
        },
        render: function(data) {
            console.log(data);
        }
    };

    options = options || {};    

    feed_ob.check_timeout = options.check_timeout || 5000;
    feed_ob.url = options.url || "/js-api/unread-feed-item/";

    feed_ob.startChecking();
    return feed_ob;
}

feed('feed', 534, function() {

}, {
    check_timeout: 1000,
    url: "/js-api/unread-feed-item/",
});

//feed().setSettings({
    //user_id: 534,
    //check_timeout: 1000
//}).startChecking();

//setTimeout(function() {
    //feed.stopChecking();
//}, 10000);
