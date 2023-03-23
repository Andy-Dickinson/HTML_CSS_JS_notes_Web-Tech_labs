// Returns cookie named in arguments
function getCookie(cookie_name) {
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i<ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if(c.indexOf(name) == 0) {
            return c.substring(name.lengh, c.length);
        }
    }
    return "";
}

// deletes username cookie
function deleteCookieUsername() {
    
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    var text = document.createTextNode("Deleted username\n");
    document.body.appendChild(text);
}

// sets cookie named in arguments to value passed and expiry number of days from now
function setCookie(name, value, expiry) {
    var d = new Date();

    // Adds 'expiry' number of days to d date
    d.setDate(d.getDate() + expiry);
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;
}