sailtest
========

##install

    git clone https://github.com/krom-xr/sailtest.git
    cd sailtest

    #запустить две сессии терминала
    #в первой
    python remote_srv/manage.py runserver 8000

    #во второй
    python -m CGIHTTPServer 8080


Набрать в браузере
localhost:8080


## using
**feed(dom_element_id, user_id, [callback_fn], [settings]);**
#####example:
index.html

    <div id='feed'></div>

js
    var user_id = 332;
    feed('feed', user_id);

    //or
    feed('feed', user_id, function() { user_notice_fn('congratulations'); });

    //or
    feed('feed', user_id, function() {}, {
        url: "http://my_site.com/myproxy_way/undread-feed-items/";
        check_timeout: 1000; //by default 5000
    });


Протестировано в браузерах
chrome, firefox, opera, safari

##NB
Идет проверка данных через setInterval. Можно было организовать long polling,
но в условиях задачи не было про это сказано, то есть непонятно, поддерживает ли
сервер long polling
