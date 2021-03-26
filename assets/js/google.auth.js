
var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

function initClient() {
    gapi.client.init({
        'apiKey':'AIzaSyC2NdhxgiXmYCDECHe1pIL_VKI64D8Jmu4',
        'clientId': '320426734823-du3a7075fbmsbmjspp68u81pe00fpm5r.apps.googleusercontent.com',
        'scope': 'https://www.googleapis.com/auth/analytics.readonly',
    }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    });
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
      if(document.getElementById("page_views") !== null) {
            makeApiCall(document.URL.split("/").slice(-2)[0]);
      }
    } else {
      authorizeButton.style.display = 'block';
      signoutButton.style.display = 'none';
    }
}

function makeApiCall(path) {
    var request = 'https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A176589224&start-date=2018-09-01&end-date=today&metrics=ga%3Apageviews&filters=ga%3ApagePath%3D%40' + path;
    console.log(request);
    gapi.client.request({
            'path': request,
    }).then(function(response) {
        document.getElementById("page_views").textContent = String(response.result.totalsForAllResults["ga:pageviews"]) + ' reads';
    }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
    });
}

function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

function handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', initClient);
}
