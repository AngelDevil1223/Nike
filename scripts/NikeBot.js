// ==UserScript==
// @name         Nike Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Nike Account Registration Bot
// @match        https://www.nike.com/register
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nike.com
// @grant        none
// ==/UserScript==


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 1; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const characters2 ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function generateString2(length) {
    let result = '';
    const charactersLength = characters2.length;
    for ( let i = 1; i < length; i++ ) {
        result += characters2.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


var vx_email=generateString(80)+'@gmail.com'
var vx_password=generateString(30)+'3Qs@'
var vx_fname=generateString2(5)
var vx_lname=generateString2(6)


function main(){
setTimeout(function register(){
document.querySelector("button[data-type='click_geoMismatchDismiss']").click();

document.querySelector("input[name='emailAddress']").value=vx_email;
document.querySelector("input[name='password']").value=vx_password;
document.querySelector("input[name='firstName']").focus();
document.querySelector("input[name='firstName']").value=vx_fname;
document.querySelector("input[name='lastName']").value=vx_lname;
document.querySelector("input[name='dateOfBirth']").value='1999-06-06';
document.querySelector("input[name='gender']").value='M';
var vv_email=document.querySelector("input[name='emailAddress']").value;
var vv_password=document.querySelector("input[name='password']").value;
var vv_fname=document.querySelector("input[name='firstName']").value;
var vv_lname=document.querySelector("input[name='lastName']").value;


function saveData(){
var a = document.createElement("a");
a.href = window.URL.createObjectURL(new Blob([vv_email+","+vv_password+","+vv_fname+","+vv_lname], {type: "text/plain"}));
document.body.appendChild(a);
a.download = "data.txt";
a.click();
}
saveData();
window.scrollBy(0, 400);
document.querySelector("input[value='JOIN US']").focus();
setTimeout(function clickbutton(){document.querySelector("input[value='JOIN US']").click();}, 3000);
setTimeout(function chckerredir(){
    if(document.querySelector("input[value='Dismiss this error']")){
        document.querySelector("input[value='Dismiss this error']").click();
if(document.querySelector("div[class='duplicate-email']").style.display == 'block'){
location.reload();
} else{
  setTimeout(function nextclick(){
      var ell = document.querySelector("input[value='JOIN US']");
      ell.dispatchEvent(new Event('click', { bubbles: true }));
  }, 5000);
if(setTimeout(function xyzxyz(){document.querySelector("input[value='Dismiss this error']")},5000)){location.reload();}
}}
}, 10000);}, 10000);
}

main();