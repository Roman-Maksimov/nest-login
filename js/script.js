var toggle = false;

function showWelcome(googleUser) {
    var button = document.getElementById('button');
    var welcome = document.getElementById('welcome');

    document.getElementById('welcome-name').innerText = googleUser.getBasicProfile().getName();

    button.style.display = 'none';
    welcome.style.display = 'block';
}

function showError(error) {
    var button = document.getElementById('button');
    var buttonError = document.getElementById('button-error');

    button.classList.add('login-container_error');
    buttonError.innerText = error;
}

function onSuccess(googleUser) {
    if (toggle) {
        showWelcome(googleUser);
    } else {
        showError('Your account is not authorized');
    }

    toggle = !toggle;
}

function onFailure(error) {
    showError(error);
}

function renderButton() {
    gapi.signin2.render('custom-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}