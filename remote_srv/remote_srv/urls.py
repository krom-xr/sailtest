from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'remote_srv.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^js-api/unread-feed-item/$', 'remote_srv.views.unread_feed', name="unread_feed"),

    url(r'^admin/', include(admin.site.urls)),
)
