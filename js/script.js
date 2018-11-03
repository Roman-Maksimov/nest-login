var googleUser = {};

var startApp = function() {
    gapi.load('auth2', function(){
        auth2 = gapi.auth2.init({
            client_id: '542471590977-1mcbrdd3g7jmr1v4artceagt2d8t9ih4.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
        });
        attachSignin(document.getElementById('button'));
    });
};

var toggle = false;

function showWelcome(googleUser) {
    var button = document.getElementById('button');
    var welcome = document.getElementById('welcome');

    document.getElementById('welcome-name').innerText = googleUser.getBasicProfile().getName();

    button.style.display = 'none';
    welcome.style.display = 'block';
}

function showError(error) {
    var hint = document.getElementById('hint');

    hint.classList.add('hint_error');
    hint.innerText = error;
}

function attachSignin(element) {
    auth2.attachClickHandler(element, {},
        function(googleUser) {
            if (toggle) {
                showWelcome(googleUser);
            } else {
                showError('Please login with authorized account');
            }

            toggle = !toggle;
        }, function(error) {
            showError(error.error);
        });
}

startApp();