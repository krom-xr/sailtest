# -*- coding: utf-8 -*-
from django.http import HttpResponse
import json
import random

def home(request):
    return HttpResponse('OK')


def unread_feed(request):
    callbacknf = request.GET.get('callback')
    user_id = request.GET.get('user_id')

    result_json = json.dumps({
        'userId': user_id,
        'activityType': random.choice(['badge', 'extraPoints']),
        'pic': random.choice(['http://python.jpg.to', 'http://something.jpg.to', 'http://example.jpg.to']),
        'message': random.choice([u'Maximum damage', u'Tipple kill', u'Ccccombo!']),
        'points': random.randrange(100)
    })

    result = "{0}({1})".format(callbacknf, result_json)
    return HttpResponse(result)
