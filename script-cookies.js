$(document).ready(function () {
    if (getCookie("mmf_cookie_consent") === "" || getCookie("mmf_cookie_consent") === "false") {
        $('#customSwitch').prop('checked', false);
    } else {
        $('#customSwitch').prop('checked', true);
    }

    $('#customSwitch').change(function() {
        if (this.checked) {
            setCookie("mmf_cookie_consent", true, 3600);
        } else {
            deleteCookies();
            setCookie("mmf_cookie_consent", false, 3600);
        }
    });
});

function setCookie(name, value, ex_days) {
    var date = new Date();
    date.setTime(date.getTime() + (ex_days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    var name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}