"use strict";
const ua = document.querySelector("#user-agent");
const lang = document.querySelector("#language");
const platform = document.querySelector("#platform");
const inOnline = document.querySelector("#online-status");
if (ua) {
    ua.textContent = window.navigator.userAgent;
}
if (lang) {
    lang.textContent = navigator.language;
}
if (platform) {
    platform.textContent = navigator.userAgentData.platform;
}
if (inOnline) {
    inOnline.textContent = navigator.onLine ? "온라인" : "오프라인";
}
console.log(navigator);
