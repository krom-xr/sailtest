sailtest
========

####install

    git clone https://github.com/krom-xr/sailtest.git
    cd sailtest

    #запустить две сессии терминала
    #в первой
    python remote_srv/manage.py runserver 8000

    #во второй
    python -m CGIHTTPServer 8080


Набрать в браузере
localhost:8080

Протестировано в браузерах
chrome, firefox, opera, safari

####NB
Идет проверка данных через setInterval. Можно было организовать long polling,
но в условиях задачи не было про это сказано, то есть непонятно, поддерживает ли
сервер long polling
