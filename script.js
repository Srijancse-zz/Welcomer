(function () {
            // set background
    var url = 'https://unsplash.it/' + window.innerWidth + '/' + window.innerHeight + '/?random';
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(' + url + ')';

    // set quote
    var quoteUrl = 'http://quotesondesign.com/api/3.0/api-3.0.json';
    getQuote(quoteUrl, function (json) {
        console.log(json.quote);
        console.log(json.author);
        var quote = document.getElementById('quote');
        var author = document.getElementById('author');
        quote.innerText = json.quote.replace(/&amp;/g, "&");
        author.innerText = json.author;
    });

}) ();

function getQuote(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}
