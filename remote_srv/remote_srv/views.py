# -*- coding: utf-8 -*-
from django.http import HttpResponse
import json

def home(request):
    return HttpResponse('OK')


def unread_feed(request):
    callbacknf = request.GET.get('callback')
    user_id = request.GET.get('user_id')

    result_json = json.dumps({
        'userId': user_id,
        'activityType': 'badge',
        'pic': 'http://python.jpg.to',
        'message': u'Новое cообщение',
    })

    result = "{0}({1})".format(callbacknf, result_json)
    return HttpResponse(result)
