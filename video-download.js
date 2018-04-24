// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

function myFunction(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.responseType = document;
    xhttp.send();
    return url + "hexa" + this.response;
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
