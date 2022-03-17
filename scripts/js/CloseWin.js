// ==UserScript==
// @name         NIKE Close Win
// @namespace    http://tampermonkey.net/
// @description  Redirector
// @match       https://www.nike.*/login
// @match       https://www.nike.com/login
// @match       https://www.nike.com/login/*
// @match       https://www.nike.com/*/login
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

setTimeout(function closewin(){window.close();}, 5000)