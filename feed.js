/*global BASE_URL*/
var feed = function(dom_el_id, user_id, fn, options) {

    if (!dom_el_id) { throw new Error('you must set element id'); }
    if (!user_id) { throw new Error('you must set user_id'); }

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
        getContainer: function() {
            if (!this._container) {
                var el = document.getElementById(dom_el_id);
                var ul = document.createElement('ul');
                this._container = ul;
                el.appendChild(ul);
            }
            return this._container;
        },
        render: function(data) {
            if (!data) { return; }
            var it = feed_ob;
            var container = it.getContainer(); 
            var li = document.createElement('li');

            li.innerHTML = 'tessst' + new Date().getTime();

            container.insertBefore(li, container.firstChild);
        }
    };

    options = options || {};    

    feed_ob.check_timeout = options.check_timeout || 5000;
    feed_ob.url = options.url || "/js-api/unread-feed-item/";

    feed_ob.startChecking();
    return feed_ob;
}
