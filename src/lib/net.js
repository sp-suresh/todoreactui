function getRequest(url, cb) {
  var xhttp = new XMLHttpRequest();
  xhttp.withCredentials = true;
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4)
     cb(this);
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function postRequest(url, body, cb){
  var xhttp = new XMLHttpRequest();
  xhttp.withCredentials = true;
  var data = JSON.stringify(body);
  xhttp.open("POST", url, true);
  xhttp.onreadystatechange = function(){
    if(this.readyState === 4) cb(this);
  }
  xhttp.send(data);
}

function patchRequest(url, body, cb){
  var xhttp = new XMLHttpRequest();
  xhttp.withCredentials = true;
  var data = JSON.stringify(body);
  xhttp.open("PATCH", url, true);
  xhttp.onreadystatechange = function(){
    if(this.readyState === 4) cb(this);
  }
  xhttp.send(data);
}

function putRequest(url, body, cb){
  var xhttp = new XMLHttpRequest();
  xhttp.withCredentials = true;
  var data = JSON.stringify(body);
  xhttp.open("PUT", url, true);
  xhttp.onreadystatechange = function(){
    if(this.readyState === 4 ) cb(this);
  }
  xhttp.send(data);
}

function deleteRequest(url, body, cb) {
  var xhttp = new XMLHttpRequest();
  xhttp.withCredentials = true;
  var data = JSON.stringify(body);
  xhttp.open("DELETE", url, true);
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
      cb(this);
    }
  };
  xhttp.send(data);
}

module.exports = {
  getRequest,
  postRequest,
  patchRequest,
  putRequest,
  deleteRequest
}