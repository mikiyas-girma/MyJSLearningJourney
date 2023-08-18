
function easyHTTP() {

  this.htttp = new XMLHttpRequest(); 
}

// make HTTP GET request
// easyHTTP.prototype.get = function (url, callback) {
  
//   this.htttp.open('GET', url, true);
  
//   let self = this;
//   this.htttp.onload = function () {
//   if(self.htttp.status === 200) {
//     callback(null, self.htttp.responseText);
//   } else {
//     callback('Error '  + self.htttp.status);
//   }

//   }

//   this.htttp.send();
// }


// Make an HTTP POST Request


easyHTTP.prototype.post = function (url, data, callback) {
  this.htttp.open('POST', url, true);
  this.htttp.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.htttp.onload = function () {
      callback(null, self.htttp.responseText);
    }

    this.htttp.send(JSON.stringify(data));
  }










// Make an HTTP PUT Request

// Make an HTTP DELETE Request
