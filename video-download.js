var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function myFunction(url) {
  return url + "hexa";
}

function change(input, target) {
    var obj = document.getElementById(target);
    if (input.checkValidity() && input.value.length > 0) {
        obj.href = myFunction(input.value);
        obj.innerHTML = "Download";
    } else {
        obj.href = null;
        obj.innerHTML = null;
    }
}
