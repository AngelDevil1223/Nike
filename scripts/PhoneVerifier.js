// ==UserScript==
// @name         Phone Verifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Phone Verification Bot
// @author       Angel Devil
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
        exc1();
    }
    document.querySelector("label[class='checkbox']").click();
    setTimeout(function continueclick(){document.querySelector("input[value='CONTINUE']").click();
    setTimeout(function registerredirect(){document.location.href="https://www.nike.com/register"}, 5000);
        }, 2000);
}};

xhr.send();
       ;}, 40000);
    }, 10000); }, 10000);
