(function(){var h=/ip(hone|od)|(android).+mobile|opera m(ob|in)i/i.test(navigator.userAgent)||/Android/.test(navigator.userAgent)||/iPhone/.test(navigator.userAgent)||/iPad/.test(navigator.userAgent);var c="c.evidon.com";var b;b="r230822";var a={},d=document.getElementsByTagName("SCRIPT"),l=window.location.href.indexOf("http://")===0?"http://":"https://",e=l+c;window.BAPStart=function(s){try{BAP.start(s)}catch(q){var o=window._bab||[];var r={};for(var t in s){if(s.hasOwnProperty(t)){r[t]=s[t]}}o.push(r);window._bab=o}};function i(o){return true}function m(){try{return window.localStorage&&window.postMessage}catch(o){return false}}function j(p,o,w){if(h){var q=document.URL.indexOf("http://")===-1&&document.URL.indexOf("https://")===-1;if(q){return 1}var v=window.navigator.userAgent.toLowerCase();if(/android/.test(v)){var r=document.documentElement;var x=Math.abs(parseInt(p,10)-r.clientWidth)<10;var s=Math.abs(parseInt(o,10)-r.clientHeight)<5;return x&&s&&!w?1:0}else{var u=window.navigator.standalone;var t=/safari/.test(v);if(!u&&!t){return 1}else{return 0}}}else{return 0}}function n(p,r){var q=false;function s(t){if(!i(t.origin)){return}var u=document.createElement("script");u.text=t.data;p.parentNode.insertBefore(u,p);o();window.BAPStart(r)}if(window.addEventListener){window.addEventListener("message",s,false)}else{window.attachEvent("onmessage",s)}function o(){q=true;if(window.removeEventListener){window.removeEventListener("message",s,false)}else{window.detachEvent("onmessage",s)}}window.setTimeout(function(){if(q){return}o();k(p,r)},3000)}function k(r,t){var s=false,p=document.createElement("script");p.id="ba.js";p.src=e+"/geo/ba.js?"+b;console.log("loadBaJsViaDom");if(navigator.userAgent.indexOf("MSIE ")>-1){p.onreadystatechange=function(){if(!s&&(this.readyState==="loaded"||this.readyState==="complete")){s=true;p.onload();p.onload=null}}}function q(w){if(!w||"object"!==typeof w){return w}var v=w.constructor();for(var u in w){if(w.hasOwnProperty(u)){v[u]=w[u]}}return v}var o=q(t);p.onload=function(){window.BAPStart(o)};r.parentNode.insertBefore(p,r)}function f(q,p){var o=document.createElement("IMG");o.src=e+"/a/4.gif";o.style.display="none";o.id="bap-pixel-"+p;if(q){q.parentNode.insertBefore(o,q.nextSibling)}else{document.body.appendChild(o)}}function g(){for(var x=0;x<d.length;x++){var w=d[x];if(!w.src){continue}if(w._durly){continue}var s=w.src,q=i(s)||/^https?:\/\/a248.e.akamai.net/.test(s);if(s.match("durly.js")&&q){w._durly=1;var u=false,r=Math.floor(Math.random()*100000),p=s.split(";");a.uqid=r;p=p.splice(1,p.length);for(var y=0;y<p.length;y++){if(p[y]==="r=0"){return}var o=p[y].split("=");a[o[0]]=unescape(o[1]);if(o[0]==="nowrite"){u=true}}a.icon_display="expandable";a.order=x;if(h&&!a.in_app){a.in_app=j(a.ad_w,a.ad_h,a.vpaid)}this._bao=a;if(u&&!h){f(w,r);if(!document.getElementById("ba.js")){if(m()){n(w,a);var t=document.createElement("iframe");t.style.display="none";t.id="ba.html";t.src=e+"/ba.html?"+b;w.parentNode.insertBefore(t,w)}else{k(w,a)}}else{window.BAPStart(a)}}else{if(h){f(w,r);if(a.in_app===1){(function(){var C=document.getElementsByTagName("SCRIPT");for(var A=0;A<C.length;A++){if(!C[A].src){continue}if(/mraid.js/.test(C[A].src)){return}}var B=document.createElement("script");B.async=false;B.src="mraid.js";document.body.appendChild(B)})()}if(document.getElementById("ba.js")===null){var z=document.createElement("SCRIPT");z.setAttribute("id","ba.js");z.async=!(a.in_app===1);z.setAttribute("src",e+"/mobile-64.js");document.body.appendChild(z)}window.BAPStart(a)}else{f(null,r);var v=document.createElement("SCRIPT");v.setAttribute("id","ba.js");v.setAttribute("src",e+"/geo/ba.js?"+b);document.body.appendChild(v);window.BAPStart(a)}}}}}if(document.body){g()}else{window.onload=g}})();