/**
 * Spotlight.js v0.4.0 (CDN)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/spotlight
 */
function k(a,b,c,d){a=ca(a);if("string"===typeof b)for(var e=0;e<a.length;e++){var g=a[e],m=g.b;m||(g.b=m={});m[b]!==c&&(m[b]=c,g.style.setProperty(aa[b]||(aa[b]=b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),c,d||null))}else for(e=Object.keys(b),g=0;g<e.length;g++){m=e[g];c=b[m];for(var n=0;n<a.length;n++)k(a[n],m,c,d)}}var da=0;function ea(a,b,c){k(a,"transition","none");k(a,b,c);da||(da=a.clientTop&&0);k(a,"transition","")}
function ca(a){if(a.constructor===Array){for(var b=0;b<a.length;b++){var c=a[b];a[b]="string"===typeof c?document.querySelector(c):c}return a}return"string"===typeof a?document.querySelectorAll(a):[a]}function l(a,b){return(b||document).getElementsByClassName(a)};function fa(a,b,c,d){ha("add",a,b,c,d)}function ia(a,b,c,d){ha("remove",a,b,c,d)}function ha(a,b,c,d,e){b[a+"EventListener"](c||"click",d,"undefined"===typeof e?!0:e)}function p(a,b){a||(a=window.event);a&&(b||a.preventDefault(),a.stopImmediatePropagation(),a.returnValue=!1);return!1};var ja=document.createElement("link");ja.rel="stylesheet";ja.href="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/css/spotlight.css";document.getElementsByTagName("head")[0].appendChild(ja);var q="theme fullscreen autofit zoom-in zoom-out page title description player".split(" "),r,t,ka,la,u,v,w,x,y,z=!1,A=!1,B=!1,D=!1,E=!1,F=!1,G,H,I,J,K,L,M,N,O,P,ma,na,oa,pa,Q,qa,R,S=null,T=null,U=null,V,ra;
function sa(a,b){if(H=a.length){M||(M=l("pane",O));for(var c=M.length,d=I.title,e=I.description,g=0;g<H;g++){var m=a[g];if(g<c)var n=M[g];else n=M[0].cloneNode(!0),k(n,"left",100*g+"%"),M[0].parentNode.appendChild(n);var C=void 0;n=n.dataset;n.src=m.href||m.src;var Y=m.dataset;"false"!==d&&(n.title=m.title||Y&&Y.title||(C=(m||document).getElementsByTagName("img")).length&&C[0].alt||d||"");"false"!==e&&(n.description=m.description||Y&&Y.description||e||"")}ea(K,"transform","translateX(-"+100*((b||
1)-1)+"%)");ta(b||1);W()}}
function ua(a,b){I={};b&&va(b);va(a);a.description&&(I.description=b?b.description:!1);a.title&&(I.title=b?b.title:!1);J=I.infinite;if((a=I.zoom)||""===a)I["zoom-in"]=I["zoom-out"]=a,delete I.zoom;if((a=I.control)||""===a){a="string"===typeof a?a.split(","):a;for(b=0;b<q.length;b++)I[q[b]]="false";for(b=0;b<a.length;b++){var c=a[b].trim();"zoom"===c?I["zoom-in"]=I["zoom-out"]="true":I[c]="true"}}for(a=0;a<q.length;a++)b=q[a],k(l(b,O)[0],"display","false"===I[b]?"none":"table-cell");"white"===(F=I.theme)&&
wa()}function va(a){for(var b=I,c=Object.keys(a),d=0;d<c.length;d++){var e=c[d];b[e]=""+a[e]}}function ta(a){L=M[a-1];N=L.firstElementChild;G=a;return N?!0:(f(O,"loading"),N=new Image,N.onload=function(){h(O,"loading");k(this,{visibility:"visible",opacity:1,transform:""})},N.onerror=function(){L.removeChild(N)},L.appendChild(N),N.src=L.dataset.src,!1)}
fa(document,"DOMContentLoaded",function(){O=document.createElement("div");O.id="spotlight";O.innerHTML='<div class=preloader style="background-image:url(https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/preloader.svg)"></div><div class=scene><div class=pane></div></div><table class=header><tr><td class=page><td style="width:90%"><td class=fullscreen><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/maximize.svg"><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/minimize.svg"><td class=autofit><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/autofit.svg"><td class=zoom-out><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/zoom-out.svg"><td class=zoom-in><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/zoom-in.svg"><td class=theme><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/theme.svg"><td class=player><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/play.svg"><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/pause.svg"><td class=close><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/close.svg"></table><div class="arrow arrow-left"><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/arrow.svg"></div><div class="arrow arrow-right"><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/arrow.svg"></div><table class=footer><tr><td class=title><tr><td class=description></table>';k(O,
"transition","none");document.body.appendChild(O);K=l("scene",O)[0];P=l("footer",O)[0];ma=l("title",P)[0];na=l("description",P)[0];oa=l("arrow-left",O)[0];pa=l("arrow-right",O)[0];Q=l("fullscreen",O)[0];qa=l("page",O)[0];R=l("player",O)[0];V=document.documentElement||document.body;document.cancelFullScreen||(document.cancelFullScreen=document.exitFullscreen||document.webkitCancelFullScreen||document.webkitExitFullscreen||document.mozCancelFullScreen||function(){});V.requestFullScreen||(V.requestFullScreen=
V.webkitRequestFullScreen||V.msRequestFullScreen||V.mozRequestFullScreen||k(Q,"display","none")||function(){});ra=[[window,"keydown",xa],[window,"wheel",ya],[window,"hashchange",za],[K,"mousedown",Aa],[K,"mouseleave",Ba],[K,"mouseup",Ba],[K,"mousemove",Ca],[K,"touchstart",Aa,{passive:!0}],[K,"touchcancel",Ba],[K,"touchend",Ba],[K,"touchmove",Ca,{passive:!0}],[Q,"",Da],[oa,"",Ea],[pa,"",X],[R,"",Fa],[l("autofit",O)[0],"",Ga],[l("zoom-in",O)[0],"",Ha],[l("zoom-out",O)[0],"",Ia],[l("close",O)[0],"",
Ja],[l("theme",O)[0],"",wa]];fa(window,"",Ka)},{once:!0});function La(a){for(var b=0;b<ra.length;b++){var c=ra[b];(a?ia:fa)(c[0],c[1],c[2],c[3])}}function Ka(a){var b=Ma.call(a.target,".spotlight");if(b){var c=Ma.call(b,".spotlight-group"),d=l("spotlight",c);ua(b.dataset,c&&c.dataset);for(c=0;c<d.length;c++)if(d[c]===b){sa(d,c+1);break}Na();return p(a)}}
function xa(a){if(L)switch(a.keyCode){case 8:Ga();break;case 32:"false"!==I.player&&Fa();break;case 37:Ea();break;case 39:X();break;case 38:case 107:case 187:Ha();break;case 40:case 109:case 189:Ia()}}function ya(a){L&&(a=a.deltaY,0>.5*(0>a?1:a?-1:0)?Ia():Ha())}function za(){L&&"#spotlight"===location.hash&&Ja(!0)}function Fa(a){("boolean"===typeof a?a:!S)?S||(S=setInterval(X,1*I.player||5E3),f(R,"on")):S&&(S=clearInterval(S),h(R,"on"));return S}
function Z(){U?clearTimeout(U):f(O,"menu");var a=I.autohide;U="false"!==a?setTimeout(function(){h(O,"menu");U=null},1*a||2E3):1}function Oa(a){"boolean"===typeof a&&(U=a?U:0);U?(U=clearTimeout(U),h(O,"menu")):Z();return p(a)}function Aa(a){z=!0;A=!1;var b=Pa(a);u=document.body.clientWidth;v=document.body.clientHeight;w=N.width*y;x=N.height*y;B=w<=u;ka=b.x;la=b.y;return p(a,!0)}
function Ba(a){if(z&&!A)return z=!1,Oa(a);B&&A&&(ea(K,"transform","translateX("+-(100*(G-1)-r/u*100)+"%)"),r<-(v/10)&&X()||r>v/10&&Ea()||k(K,"transform","translateX(-"+100*(G-1)+"%)"),r=0,B=!1,k(L,"transform",""));z=!1;return p(a)}function Ca(a){if(z){T||(T=requestAnimationFrame(Qa));var b=Pa(a),c=(w-u)/2;A=!0;B=w<=u;r-=ka-(ka=b.x);B?D=!0:r>c?r=c:0<u-r-w+c?r=u-w+c:D=!0;x>v&&(c=(x-v)/2,t-=la-(la=b.y),t>c?t=c:0<v-t-x+c?t=v-x+c:D=!0)}else Z();return p(a,!0)}
function Pa(a){var b=a.touches;b&&(b=b[0]);return{x:b?b.clientX:a.pageX,y:b?b.clientY:a.pageY}}function Qa(a){D?(a&&(T=requestAnimationFrame(Qa)),k(L,"transform","translate("+r+"px, "+t+"px)")):T=null;D=!1}function Da(a){(a="boolean"===typeof a?a:document.isFullScreen||document.webkitIsFullScreen||document.mozFullScreen)?(document.cancelFullScreen(),h(Q,"on")):(V.requestFullScreen(),f(Q,"on"));return!a}
function Ga(a){"boolean"===typeof a&&(E=!a);E=1===y&&!E;k(N,{maxHeight:E?"none":"",maxWidth:E?"none":"",transform:""});y=1;t=r=0;D=!0;Qa();Z()}function Ha(a){Ra(y/=.65);a||Z()}function Ra(a){k(N,"transform","translate(-50%, -50%) scale("+(a||1)+")")}function Ia(a){var b=.65*y;1>b&&(b=1);b!==y&&(Ra(y=b),t=r=0,D=!0,Qa());a||Z()}function Na(){location.hash="spotlight";location.hash="show";La();k(O,"transition","");f(V,"hide-scrollbars");f(O,"show");Z()}
function Ja(a){La(!0);history.go(!0===a?-1:-2);h(V,"hide-scrollbars");h(O,"show");S&&Fa(!1);N.parentNode.removeChild(N);N=L=null}function Ea(){S||Z();if(1<G)return G--,W(!1),!0;if(S||J)return Sa(H)}function X(){S||Z();if(G<H)return G++,W(!0),!0;if(S||J)return Sa(1)}function Sa(a){if(a!==G){S||Z();var b=a>G;G=a;W(b);return!0}}function wa(a){"boolean"===typeof a?F=a:(F=!F,Z());F?f(O,"white"):h(O,"white")}
function W(a){t=r=0;y=1;var b=I.animation,c=!0,d=!0,e=!0,g=!1;if(b||""===b){g=e=d=c=!1;b=b.split(",");for(var m=0;m<b.length;m++){var n=b[m].trim();"scale"===n?c=!0:"fade"===n?d=!0:"slide"===n?e=!0:"rotate"===n&&(g=!0)}}k(K,"transition",e?"":"none");k(K,"transform","translateX(-"+100*(G-1)+"%)");k(L,"transform","");k(N,{opacity:d?0:1,transform:""});var C=N;setTimeout(function(){C&&N!==C&&C.parentNode&&C.parentNode.removeChild(C)},800);e=ta(G);ea(N,{opacity:d?0:1,transform:"translate(-50%, -50%)"+
(c?" scale(0.8)":"")+(g&&"undefined"!==typeof a?" rotateY("+(a?"":"-")+"135deg)":""),maxHeight:"",maxWidth:""});e&&k(N,{opacity:1,transform:""});k(L,"transform","");k(oa,"visibility",J||1!==G?"":"hidden");k(pa,"visibility",J||G!==H?"":"hidden");a=L.dataset;if(c=a.title||a.description)ma.textContent=a.title||"",na.textContent=a.description||"";k(P,"visibility",c?"visible":"hidden");qa.textContent=G+" / "+H}
var Ma=Element.prototype.closest||function(a){var b=this;for(a=a.substring(1);b&&1===b.nodeType;){if(b.classList.contains(a))return b;b=b.parentNode}};window.Spotlight={theme:wa,fullscreen:Da,autofit:Ga,next:X,prev:Ea,"goto":Sa,close:Ja,zoom:Ra,menu:Oa,show:function(a,b){setTimeout(function(){a?(b?ua(b):b={},sa(a,b.index)):I={};Na()})},play:Fa};}).call(this);