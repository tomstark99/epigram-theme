
function start() {
    gapi.client.init({
        'apiKey':'AIzaSyCvlcaOsLBvG4oMg1CBnA2IVWoJN0YDC_M',
        'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        'clientId': '    320426734823-du3a7075fbmsbmjspp68u81pe00fpm5r.apps.googleusercontent.com',
        'scope': 'https://www.googleapis.com/auth/analytics',
    }).then(function() {
        return gapi.client.request({
            'path': 'https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A176589224&start-date=2018-09-01&end-date=today&metrics=ga%3Apageviews&filters=ga%3ApagePath%3D%40fashion-and-feminism',
        })
    }).then(function(response) {
        console.log(response.result);
    }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
};
gapi.load('client', start);
