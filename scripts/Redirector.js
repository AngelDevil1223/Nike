// ==UserScript==
// @name         NIKE Redirector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirector
// @match        https://www.nike.com
// @match        https://www.nike.com/
// @match        https://www.nike.com/*/
// @match        https://www.nike.*/*/
// @exclude      https://www.nike.*/register
// @exclude      https://www.nike.com/register
// @exclude      https://www.nike.com/register/*
// @exclude      https://www.nike.com/*/register
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

setTimeout(function redirect(){document.location.href="https://www.nike.com/member/settings";}, 5000)
//setTimeout(function langselect(){document.querySelector("a[data-lang-region='en_US']").click(); langselect.onload(document.location.href="https://www.nike.com/register");}, 5000);
//setTimeout(function cleanclear(){document.querySelector("button[data-path='myAccount:log out']").click(); cleanclear.onload(document.location.href="https://www.nike.com/register");}, 10000);