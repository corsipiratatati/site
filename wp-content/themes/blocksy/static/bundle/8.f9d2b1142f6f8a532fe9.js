(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{13:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return l});var o=0,r=!1;try{var i=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,i)}catch(e){}var c=function(e){var t=e.target,n=window.innerWidth/window.document.documentElement.clientWidth;if(!(e.touches.length>1||1!==n)){for(;t!==document.body&&t!==document;){var r=window.getComputedStyle(t);if(!r)break;if("INPUT"===t.nodeName&&"range"===t.getAttribute("type"))return;var i=r.getPropertyValue("-webkit-overflow-scrolling"),c=r.getPropertyValue("overflow-y"),u=parseInt(r.getPropertyValue("height"),10),d="touch"===i&&("auto"===c||"scroll"===c),s=t.scrollHeight>t.offsetHeight;if(d&&s){var l=e.touches?e.touches[0].screenY:e.screenY,a=o<=l&&0===t.scrollTop,v=o>=l&&t.scrollHeight-t.scrollTop===u;return void((a||v)&&e.preventDefault())}t=t.parentNode}e.preventDefault()}},u=function(e){o=e.touches?e.touches[0].screenY:e.screenY},d=function(){var e=document.createElement("div");document.documentElement.appendChild(e),e.style.WebkitOverflowScrolling="touch";var t="getComputedStyle"in window&&"touch"===window.getComputedStyle(e)["-webkit-overflow-scrolling"];return document.documentElement.removeChild(e),t},s=function(){d()&&(window.addEventListener("touchstart",u,!!r&&{passive:!1}),window.addEventListener("touchmove",c,!!r&&{passive:!1}),!0)},l=function(){d()&&(window.removeEventListener("touchstart",u,!1),window.removeEventListener("touchmove",c,!1),!1)}},52:function(e,t,n){"use strict";n.r(t),n.d(t,"mount",function(){return o}),n.d(t,"handleClick",function(){return r});n(13);var o=function(e){e.hash};var r=function(e,t,n){};ctEvents.on("ct:offcanvas:force-close",function(e){e.$el,e.settings})}}]);