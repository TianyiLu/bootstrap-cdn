(function() {
    'use strict';

    (function () {
        var el = window.document.querySelectorAll('.input-group-btn > button');

        function toggleCode (index) {
            var name = el[index].getAttribute('data-el');
            var btnIcon = el[index].querySelector('span');

            el[index].addEventListener('click', function() {
                window.document.getElementById(name).classList.toggle('hidden');
                btnIcon.classList.toggle('caret-open');
            });
        }

        if (el) {
            for (var i = 0, len = el.length; i < len; i++) {
                toggleCode(i);
            }
        }
    })();

    (function () {
        var el = window.document.querySelectorAll('input[type="text"');

        if (el) {
            for (var i = 0, len = el.length; i < len; i++) {
                el[i].addEventListener('focus', function() {
                    this.select();
                });
                el[i].addEventListener('mouseup', function(a) {
                    a.preventDefault();
                });
            }
        }
    })();


    (function () {
        function gaEvent(e) {
            if (typeof e.target !== 'undefined') {
                var action = e.target.getAttribute('data-ga-action');
                var category = e.target.getAttribute('data-ga-category');
                var label = e.target.getAttribute('data-ga-label');
                var value = parseInt(e.target.getAttribute('data-ga-value'), 10);

                if (typeof ga !== 'undefined' && typeof category !== 'undefined' && typeof action !== 'undefined') {
                    window.ga('send', 'event', category, action, label, value, {});
                }
            }
        }

        /* eslint-disable */
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-32253110-1', 'bootstrapcdn.com');
        ga('send', 'pageview');
        window.document.addEventListener('click', gaEvent);
        /* eslint-enable */
    })();


    (function(win, doc) {
        /* eslint func-style: 0 */
        var init = function() {
            var script = doc.createElement('script');

            script.type = 'text/javascript';

            if (typeof script.setAttribute !== 'undefined') {
                script.setAttribute('async', 'async');
            }

            script.src = '//' + (win.location.protocol === 'https:' ? 's3.amazonaws.com/cdx-radar/' : 'radar.cedexis.com/') + '01-10956-radar10.min.js';
            doc.body.appendChild(script);
        };

        if (win.addEventListener) {
            win.addEventListener('load', init, false);
        } else if (win.attachEvent) {
            win.attachEvent('onload', init);
        }

    })(window, document);

    /* eslint-disable */
    window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };

        return t;
    }(document, "script", "twitter-wjs"));
    /* eslint-enable */

})();
