var email;
var pawwHash;
var uniqId;
var prevLogTime;
var login;
var emailUn;
var pawwHashUn;
var uniqIdUn;
var prevLogTimeUn;
var loginUn;
var text;
var txt;
var sg;
function readSave() {
text = document.getElementById("saveLog").value;
var result = text.split("Fe12NAfA3R6z4k0z");
    //console.log(result[0].length);
    text = "";
for (var i = 0; i < result[0].length; i += 2)
      text += result[0][i];
    data = JSON.parse(atob(text));
    console.log(data);
    //wipe();
		 email = data.email;
     pawwHash = data.passwordHash;
     uniqId = data.uniqueId;
     prevLogTime = data.prevLoginTimestamp;
     login = data.loginValidated;
     
		document.getElementById("email").value  = email;
 		document.getElementById("pawwHash").value = pawwHash;
		document.getElementById("uniqId").value = uniqId;
		document.getElementById("prevLogTime").value = prevLogTime;
		document.getElementById("login").value = login;
    }
function readSaveUn() {
txt = document.getElementById("saveLogUn").value;
var result = txt.split("Fe12NAfA3R6z4k0z");
    //console.log(result[0].length);
    txt = "";
    for (var i = 0; i < result[0].length; i += 2)
      txt += result[0][i];
    data = JSON.parse(atob(txt));
    console.log(data);
    //wipe();
		 emailUn = data.email;
     pawwHashUn = data.passwordHash;
     uniqIdUn = data.uniqueId;
     prevLogTimeUn = data.prevLoginTimestamp;
     loginUn = data.loginValidated;
     
		document.getElementById("emailUn").value  = emailUn;
 		document.getElementById("pawwHashUn").value = pawwHashUn;
		document.getElementById("uniqIdUn").value = uniqIdUn;
		document.getElementById("prevLogTimeUn").value = prevLogTimeUn;
		document.getElementById("loginUn").value = loginUn;
    }
function transfer(){
		document.getElementById("emailUn").value  = email;
 		document.getElementById("pawwHashUn").value = pawwHash;
		document.getElementById("uniqIdUn").value = uniqId;
		document.getElementById("prevLogTimeUn").value = prevLogTime;
		document.getElementById("loginUn").value = login;
}
    
function clip(){
document.getElementById("newSave").focus();
document.getElementById("newSave").select();
document.execCommand("copy");   
}
function encode(){
	readSaveUn();
  transfer();
  data.email = document.getElementById("emailUn").value;
  data.passwordHash = document.getElementById("pawwHashUn").value;
  data.uniqueId = document.getElementById("uniqIdUn").value;
  data.prevLoginTimestamp = document.getElementById("prevLogTimeUn").value;
  data.loginValidated = document.getElementById("loginUn").value;
  console.log(data);
  var letters = "0123456789abcdefghijklmnopqrstuvwxyz"
    var newdata = btoa(JSON.stringify(data));
    var newsprinkle = "";
    for (var x = 0; x < newdata.length; x++) {
      newsprinkle+= newdata[x] + letters[Math.floor(Math.random()*letters.length)];
    }
    var newtxt = "";
    for (var z = 0; z < newsprinkle.length; z += 2) {
      newtxt += newsprinkle[z];
    }
    var newencode=newsprinkle + "Fe12NAfA3R6z4k0z" + getHash(newtxt);
    document.getElementById("newSave").value =newencode;

}
function getHash(string) {
	var salt = 'af0ik392jrmt0nsfdghy0'
	var charaters = string.split();
	charaters.sort();
	var sortedCharaters = charaters.join();
	return CryptoJS.MD5(sortedCharaters + salt);
}
