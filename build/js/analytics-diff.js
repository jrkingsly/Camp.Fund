function piResponse() {
piSetCookie('visitor_id95672', '20961061', 3650);

if (document.location.protocol != "https:") {
var analytics_link = "http://" + "www2.wealthforge.com/analytics?";
pi.tracker.visitor_id='20961061'
var variables = 'conly=true';
for (property in pi.tracker) {
	variables += "&"+property+"="+pi.tracker[property];
}
var headID = document.getElementsByTagName("head")[0];
piScriptObj[piScriptNum] = document.createElement('script');
piScriptObj[piScriptNum].type = 'text/javascript';
piScriptObj[piScriptNum].src = analytics_link + variables;
headID.appendChild(piScriptObj[piScriptNum]);
piScriptObj[piScriptNum].onload = function() { return; }
}
}
piResponse();




(function(){"use strict";function e(){"undefined"!=typeof wistiaPlaylist?(wistiaPlaylist.ready(function(){i(wistiaPlaylist.currentVideo(),t)}),wistiaPlaylist.bind("afterembed",function(){i(wistiaPlaylist.currentVideo(),t)})):n(function(){void 0!==window.wistiaEmbeds&&window.wistiaEmbeds.onFind(function(e){e.ready(function(){i(e,t)})})})}function i(e,t){e.getVisitorKey()?t(e):setTimeout(function(){i(e,t)},500)}function t(e){"playing"===e.state()||e.params.autoPlay?r(e):e.bind("play",function(){return r(e),this.unbind}),e.bind("conversion",function(i,t){d(i,t,e)})}function n(e){if(f)return e();for(var i=document.getElementsByTagName("script"),t=/embed_shepherd.*\.js/,n=0;i.length>n;n++)if(t.test(i[n].src))return f=!0,e();o("//fast.wistia.com/static/embed_shepherd-v1.js",function(){f=!0,e()})}function o(e,i){var t=document.head||document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("script");n.async="async",n.src=e,n.onload=n.onreadystatechange=function(e,o){(o||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,t&&n.parentNode&&t.removeChild(n),n=void 0,o||i())},t.insertBefore(n,t.firstChild)}function a(e){var i={account_id:piAId,campaign_id:piCId,provider:"wistia"};"undefined"!=typeof pi?i.visitor_id=pi.tracker.visitor_id:"undefined"!=typeof pardot&&(i.visitor_id=pardot.tracker.visitor_id),""===i.visitor_id&&(i.visitor_id=piGetCookie("visitor_id"+(piAId-1e3)));var t=c(s(i,e)),n="//"+u+"/video/analytics?"+t;o(n,function(){})}function r(e){a({video_name:e.name(),wistia_visitor_key:e.getVisitorKey(),wistia_event_key:e.getEventKey(),hashed_id:e.hashedId(),type:"play"})}function d(e,i,t){a({video_name:t.name(),wistia_visitor_key:t.getVisitorKey(),wistia_event_key:t.getEventKey(),hashed_id:t.hashedId(),type:"conversion",email:i})}function s(){for(var e,i=arguments[0],t=1;arguments.length>t;t++)for(e in arguments[t])i[e]=arguments[t][e];return i}function c(e){var i="";for(var t in e)e.hasOwnProperty(t)&&(i+=encodeURIComponent(t)+"="+encodeURIComponent(e[t])+"&");return i.substring(0,i.length-1)}if("undefined"!=typeof piAId||"undefined"!=typeof piCId){var u="pi.pardot.com";"string"!=typeof piTUrl||-1===piTUrl.indexOf("localhost")&&-1===piTUrl.indexOf("app.dev.pardot")||(u=piTUrl);var f=!1;return e()}})();