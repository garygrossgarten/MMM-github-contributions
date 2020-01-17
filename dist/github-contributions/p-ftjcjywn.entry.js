import{r as n,h as e}from"./p-462dc198.js";var t=["#eee","#d6e685","#8cc665","#44a340","#1e6823"],r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a=function(n,e){var t=0,a=[];if(Array.isArray(n))for(;t<n.length&&!1!==e(n[t],t,n);++t);else if("object"===(void 0===n?"undefined":r(n))&&null!==n)for(a=Object.keys(n);t<a.length&&!1!==e(n[a[t]],a[t],n);++t);};function u(n,e){return"string"==typeof n?"<"===n.charAt(0)?(n=document.createElement(n.slice(1,-1)),a(e||{},(function(e,t){switch(t){case"text":return void(n.textContent=e);case"html":return void(n.innerHTML=e)}n.setAttribute(t,e)})),n):(e=e||document).querySelector(n):n}u.$$=function(n,e){return"string"==typeof n?function(n){var e=[],t=n.length;if(0===t)return e;for(;t-- >0;)e[t-0]=n[t];return e}((e=e||document).querySelectorAll(n)):[n]};var o=u;function i(n){return function e(t,r,a){switch(r*=n,a){case"years":case"year":t.setFullYear(t.getFullYear()+r);break;case"months":case"month":t.setMonth(t.getMonth()+r);break;case"weeks":case"week":return e(t,7*r,"days");case"days":case"day":t.setDate(t.getDate()+r);break;case"hours":case"hour":t.setHours(t.getHours()+r);break;case"minutes":case"minute":t.setMinutes(t.getMinutes()+r);break;case"seconds":case"second":t.setSeconds(t.getSeconds()+r);break;case"milliseconds":case"millisecond":t.setMilliseconds(t.getMilliseconds()+r);break;default:throw new Error("Invalid range: "+a)}return t}}var s={add:i(1),subtract:i(-1)};function c(n,e){return n(e={exports:{}},e.exports),e.exports}var d=c((function(n){
/*!
 * months <https://github.com/datetime/months>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
n.exports=["January","February","March","April","May","June","July","August","September","October","November","December"],n.exports.abbr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n.exports.it=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],n.exports.abbr.it=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],n.exports.de=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],n.exports.abbr.de=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]})),l=c((function(n){
/*!
 * days <https://github.com/jonschlinkert/days>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
n.exports.en=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n.exports.en.abbr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n.exports.en.short=["Su","Mo","Tu","We","Th","Fr","Sa"],n.exports.fr=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],n.exports.fr.abbr=["dim","lun","mar","mer","jeu","ven","sam"],n.exports.fr.short=["di","lu","ma","me","je","ve","sa"],n.exports.es=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"],n.exports.es.abbr=["dom","lun","mar","mir","jue","vie","sab"],n.exports.es.short=["do","lu","ma","mi","ju","vi","sa"],n.exports.it=["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"],n.exports.it.abbr=["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],n.exports.it.short=["D","L","Ma","Me","G","V","S"],n.exports=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n.exports.abbr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n.exports.short=["Su","Mo","Tu","We","Th","Fr","Sa"]})),f=function(n,e,t){t=t||"0";var r=(e=e||2)-(n=n.toString()).length;return(r<=0?"":t.repeat(r))+n};function m(n){return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}m.proto=function(){return RegExp.escape=m,m};var b=m,M=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),p=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.obj=e||{},this.re=new RegExp("^("+Object.keys(e).map(b).join("|")+")")}return M(n,[{key:"run",value:function(n,e){var t="";e=e||[];do{var r=n.match(this.re),a=r&&r[1],u=a||n.charAt(0);if(a){var o=this.obj[a];"function"==typeof o&&(o=o.apply(this,e)),t+=o}else t+=u;n=n.substring(u.length)}while(n);return t}}]),n}();var y={YYYY:function(n,e){return e?n.getUTCFullYear():n.getFullYear()},YY:function(n,e){return y.YYYY(n,e)%100},MMMM:function(n,e){return e?d[n.getUTCMonth()]:d[n.getMonth()]},MMM:function(n,e){return e?d.abbr[n.getUTCMonth()]:d.abbr[n.getMonth()]},MM:function(n,e){return f(e?n.getUTCMonth()+1:n.getMonth()+1)},M:function(n,e){return e?n.getUTCMonth()+1:n.getMonth()+1},dddd:function(n,e){return l[y.d(n,e)]},ddd:function(n,e){return l.abbr[y.d(n,e)]},dd:function(n,e){return l.short[y.d(n,e)]},d:function(n,e){return e?n.getUTCDay():n.getDay()},DD:function(n,e){return f(y.D(n,e))},D:function(n,e){return e?n.getUTCDate():n.getDate()},A:function(n,e){return y.a(n,e).toUpperCase()},a:function(n,e){return y.H(n,e)>=12?"pm":"am"},hh:function(n,e){return f(y.h(n,e))},h:function(n,e){return y.H(n,e)%12||12},HH:function(n,e){return f(y.H(n,e))},H:function(n,e){return e?n.getUTCHours():n.getHours()},mm:function(n,e){return f(y.m(n,e))},m:function(n,e){return e?n.getUTCMinutes():n.getMinutes()},ss:function(n,e){return f(y.s(n,e))},s:function(n,e){return e?n.getUTCSeconds():n.getSeconds()},S:function(n,e){return Math.round(y.s(n,e)/60*10)},SS:function(n,e){return f(y.s(n,e)/60*100)},SSS:function(n,e){return f(y.s(n,e)/60*1e3,3)},Z:function(n){var e=-n.getTimezoneOffset();return(e>=0?"+":"-")+f(parseInt(e/60))+":"+f(e%60)},ZZ:function(n){var e=-n.getTimezoneOffset();return(e>=0?"+":"-")+f(parseInt(e/60))+f(e%60)}},h=new(function(n,e,t){return new p(e).run(n,t)}.Parser=p)(y),v=function(n,e){return h.run(e,[n,n._useUTC])};function g(n){return n+" "+(1===n?"day":"days")}const S=class{constructor(e){n(this,e)}componentDidLoad(){var n,e,r;e=this.username,r={responsive:!0,summary_text:"",global_stats:""},n=o(n=".calendar"),(r=r||{}).summary_text=r.summary_text||'Summary of pull requests, issues opened, and commits made by <a href="https://github.com/'+e+'" target="blank">@'+e+"</a>",!1===r.global_stats&&(n.style.minHeight="175px"),r.proxy=r.proxy||function(n){return"https://urlreq.appspot.com/req?method=GET&url="+n},function a(){return fetch(r.proxy("https://github.com/users/"+e+"/contributions")).then((function(n){return n.text()})).then((function(e){var u=document.createElement("div");u.innerHTML=e;var i,c,d,l,f=u.querySelector(".js-yearly-contributions");if(o(".position-relative h2",f).remove(),f.querySelector(".float-left.text-gray").innerHTML=r.summary_text,f.querySelector("include-fragment"))setTimeout(a,500);else{if(!0===r.responsive){var m=f.querySelector("svg.js-calendar-graph-svg"),b=m.getAttribute("width"),M=m.getAttribute("height");m.removeAttribute("height"),m.setAttribute("width","100%"),m.setAttribute("viewBox","0 0 "+b+" "+M)}if(!1!==r.global_stats){var p=(i=o("svg",f).outerHTML,c={last_year:0,longest_streak:-1,longest_streak_range:[],current_streak:0,current_streak_range:[],weeks:[],days:[],last_contributed:null},d=[],l=function(){c.current_streak>c.longest_streak&&(c.longest_streak=c.current_streak,c.longest_streak_range[0]=c.current_streak_range[0],c.longest_streak_range[1]=c.current_streak_range[1])},i.split("\n").slice(2).map((function(n){return n.trim()})).forEach((function(n){if(n.startsWith("<g transform"))return d.length&&c.weeks.push(d)&&(d=[]);var e=n.match(/fill="(#[a-z0-9]+)"/),r=n.match(/data-date="([0-9\-]+)"/),a=n.match(/data-count="([0-9]+)"/);if(r=r&&r[1],a=a&&+a[1],e=e&&e[1]){var u={fill:e,date:new Date(r),count:a,level:t.indexOf(e)};0===c.current_streak&&(c.current_streak_range[0]=u.date),u.count?(++c.current_streak,c.last_year+=u.count,c.last_contributed=u.date,c.current_streak_range[1]=u.date):(l(),c.current_streak=0),d.push(u),c.days.push(u)}})),l(),c),y=p.current_streak?v(p.current_streak_range[0],"MMMM D")+" &ndash; "+v(p.current_streak_range[1],"MMMM D"):p.last_contributed?"Last contributed in "+v(p.last_contributed,"MMMM D")+".":"Rock - Hard Place",h=p.longest_streak?v(p.longest_streak_range[0],"MMMM D")+" &ndash; "+v(p.longest_streak_range[1],"MMMM D"):p.last_contributed?"Last contributed in "+v(p.last_contributed,"MMMM D")+".":"Rock - Hard Place",S=o("<div>",{class:"contrib-column contrib-column-first table-column",html:'<span class="text-muted">Contributions in the last year</span>\n                               <span class="contrib-number">'+p.last_year+' total</span>\n                               <span class="text-muted">'+v(s.add(s.subtract(new Date,1,"year"),1,"day"),"MMM D, YYYY")+" &ndash; "+v(new Date,"MMM D, YYYY")+"</span>"}),D=o("<div>",{class:"contrib-column table-column",html:'<span class="text-muted">Longest streak</span>\n                               <span class="contrib-number">'+g(p.longest_streak)+'</span>\n                               <span class="text-muted">'+h+"</span>"}),k=o("<div>",{class:"contrib-column table-column",html:'<span class="text-muted">Current streak</span>\n                               <span class="contrib-number">'+g(p.current_streak)+'</span>\n                               <span class="text-muted">'+y+"</span>"});f.appendChild(S),f.appendChild(D),f.appendChild(k)}n.innerHTML=f.innerHTML}})).catch((function(n){return console.error(n)}))}()}render(){return e("div",{class:"calendar"})}static get style(){return"github-contributions{display:block;background:#000}.calendar{font-family:Helvetica,arial;text-align:center;margin:0 auto;-webkit-filter:invert(1) grayscale(1);filter:invert(1) grayscale(1)}.calendar-graph text.month,.calendar-graph text.wday{font-size:10px;fill:#000}.contrib-legend{text-align:right;padding:0 14px 10px 0;float:right}.contrib-legend .legend{display:inline-block;list-style:none;margin:0 5px;position:relative;bottom:-1px;padding:0}.contrib-legend .legend li{display:inline-block;width:10px;height:10px}.text-small{font-size:12px;color:#767676}.calendar-graph{padding:5px 0 0;text-align:center}.contrib-column{padding:15px 0;text-align:center;font-size:11px;display:none}.contrib-column-first{border-left:0}.table-column{width:1%;padding-right:10px;padding-left:10px;vertical-align:top;display:none}.contrib-number{font-weight:300;line-height:1.3em;font-size:24px;display:block;color:#333}.calendar img.spinner{width:70px;margin-top:50px;min-height:70px}.monospace{text-align:center;color:#000;font-family:monospace}.monospace a{color:#1d75ab;text-decoration:none}.contrib-footer{font-size:11px;padding:0 10px 12px;text-align:left;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;height:26px}.left.text-muted{float:left;margin-left:9px;color:#767676}.left.text-muted a{color:#4078c0;text-decoration:none}.left.text-muted a:hover,.monospace a:hover{text-decoration:underline}h2.f4.text-normal.mb-3{display:none}.float-left.text-gray{float:left;display:none}#user-activity-overview{display:none}"}};export{S as github_contributions};