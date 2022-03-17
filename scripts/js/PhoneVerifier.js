// ==UserScript==
// @name         Phone Verifier
// @namespace    http://tampermonkey.net/
// @description  Phone Verification Bot
// @match        https://www.nike.com/member/settings
// @match        https://www.nike.*/member/settings
// @match        https://www.nike.*/*/member/settings
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var ver_id;
var phonenumber;

// function to random generate values for array

function randomgenerate(){
var arr = [7,52,78,48];
function random(mn, mx) {
            return Math.random() * (mx - mn) + mn;
        }
 return arr[Math.floor(random(1, 5))-1];
}

var c_code = randomgenerate()

function repeat(){
    changenum();
}
function changenum(){
if(c_code == 7){
document.querySelector("select[class='country']").value="MY";
} else if(c_code == 52){
document.querySelector("select[class='country']").value="TH";
} else if(c_code == 78){
document.querySelector("select[class='country']").value="FR";
} else{
document.querySelector("select[class='country']").value="NL";
}
var url = 'https://api.sms-man.com/stubs/handler_api.php?api_key=Ij6k4J16j1rbtFFw32u3cCUjlZ27HUNc&action=getNumber&service=ew&operator=any&country='+c_code;
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
       var chkres = xhr.responseText;
       if(chkres == 'NO_NUMBERS'){
           repeat();
       }
function getNumber(str) {
    return str.split(':')[2];
}
phonenumber = getNumber(xhr.responseText);

function getId(str) {
    return str.split(':')[1];
}

       ver_id = getId(xhr.responseText);

document.querySelector("input[data-componentname='phoneNumber']").value = phonenumber.substring(2);
      setTimeout(function clicksend(){document.querySelector("input[class='sendCodeButton']").click()
                                         setTimeout(function chk_err(){
    if(document.querySelector("input[value='Dismiss this error']")){
        document.querySelector("input[value='Dismiss this error']").click();
        repeat();
    }}, 5000); }, 2000);
       }};
xhr.send();}


setTimeout(function addphone(){ document.querySelector("button[aria-label='Add Mobile Number']").click();
setTimeout(function exc1(){
   changenum();
   setTimeout(function exc2(){
   var url = "https://api.sms-man.com/stubs/handler_api.php?api_key=Ij6k4J16j1rbtFFw32u3cCUjlZ27HUNc&action=getStatus&id="+ver_id;
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
function getSms(str) {
    return str.split(':')[1];
}
var sms = getSms(xhr.responseText);
    if(sms >= 0){
    document.querySelector("input[placeholder='Enter Code']").value=sms;}
    else{
        document.querySelector("button[data-path='myAccount:log out']").click();
         setTimeout(function closewin(){window.close()},4000)
    }
    document.querySelector("label[class='checkbox']").click();
    setTimeout(function continueclick(){document.querySelector("input[value='CONTINUE']").click();
        setTimeout(function smsave(){
            var getbotdata = localStorage.getItem("Nike-Bot-Data");
           function saveData(){
var a = document.createElement("a");
a.href = window.URL.createObjectURL(new Blob([getbotdata+","+phonenumber], {type: "text/plain"}));
document.body.appendChild(a);
a.download = "data.txt";
a.click();
}
saveData();
    //Webhook For sending Email & Password into user's discord channel
    function sendMessage() {
      var request = new XMLHttpRequest
          request.open("POST", "https://discord.com/api/webhooks/918490496320544789/M0znFbYKp5xuKUeg2fWZo2nP9Apn-W4C0HrgIXfBewdkOdaAeFozS7-GwK3aNm5rRioC");//Webhook is able to modify by user in GUI

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "Success Generated With CodeSupply Account Generator!",
        avatar_url: "https://img.favpng.com/4/16/15/samurai-mask-oni-kabuto-demon-png-favpng-cEXUHXgQtDwXGS51FThcMuuy4.jpg",
        content: getbotdata.split(',')[0]+":"+getbotdata.split(',')[1]
      }

      request.send(JSON.stringify(params));
    }
sendMessage(); //send to personal discord channel


    //For public Success msg
    function sendMessageSuccess() {
          var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/949769986224849006/sARyIisMW2YE87SubbOA6ePjlLDh8mnGnkvy50TjgGXh1vCMK7vDOgVAq2LJdOQ4SjGK");//Not able to modify by user

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "CodeSupply Account Generator!",
        avatar_url: "https://img.favpng.com/4/16/15/samurai-mask-oni-kabuto-demon-png-favpng-cEXUHXgQtDwXGS51FThcMuuy4.jpg",
        content: "```?? Success Generated ??```"
      }

      request.send(JSON.stringify(params));
    }
sendMessageSuccess(); //send to public discord channel
        }, 5000);
    //setTimeout(function registerredirect(){document.location.href="https://www.nike.com/register"}, 5000);
        }, 2000);
}};

xhr.send();
       ;}, 60000);
    }, 10000); }, 10000);
