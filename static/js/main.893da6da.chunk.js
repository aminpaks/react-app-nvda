(this["webpackJsonpnvda-iframe"]=this["webpackJsonpnvda-iframe"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),l=a.n(r),o=(a(9),a(1)),u=(a(10),function(e){var t=e.title,a=e.onClick,r=Object(n.useCallback)((function(e){e.preventDefault(),a()}),[a]);return i.a.createElement("a",{href:"#link-to-page-".concat(t.toLowerCase()),onClick:r},t)});var c=function(){var e=function(){var e=Object(n.useState)("/frame"),t=Object(o.a)(e,2),a=t[0],i=t[1];return[a,Object(n.useCallback)((function(e){i("/loading"),setTimeout((function(){i(e)}),1e3)}),[])]}(),t=Object(o.a)(e,2),a=t[0],r=t[1];return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("h1",{tabIndex:"0"},"NVDA not working well with iframes"),i.a.createElement("p",null,"Click on apps to dynamically replace the iframe content.")),i.a.createElement("nav",{className:"Nav"},i.a.createElement(u,{onClick:function(){return r("/frame")},title:"App 1"}),i.a.createElement(u,{onClick:function(){return r("/app2")},title:"App 2"}),i.a.createElement(u,{onClick:function(){return r("/app3")},title:"App 3"})),i.a.createElement("div",{className:"CurrentApp"},"Current app: ",i.a.createElement("strong",null,function(e){var t,a=null===(t=e.split("/"))||void 0===t?void 0:t[1];return"loading"===a?"unknown":a}(a))),i.a.createElement("div",{className:"FrameWrapper"},"/loading"===a?"Loading application...":i.a.createElement("iframe",{width:"800",height:"500",src:a,title:"Some title"})))},s=(a(11),function(e){var t=e.children,a=n.Children.only(t),i=Object(n.useRef)();return Object(n.useEffect)((function(){var e=setTimeout((function(){i.current.focus()}),200);return function(){clearTimeout(e)}}),[a]),Object(n.cloneElement)(a,{tabIndex:"-1",ref:i})}),m=0,p=["Curabitur nec leo arcu. In laoreet nisl vitae condimentum rhoncus. Nullam fringilla nulla non nisi vestibulum tincidunt. Aliquam erat volutpat. Curabitur dictum ligula ullamcorper dui consectetur, sed elementum risus dictum. Donec finibus, nibh ac lacinia consequat, est leo tincidunt leo, a pharetra ligula libero a est. Nam purus nisi, feugiat in felis eget, condimentum ultrices urna. Mauris pretium ut est nec consequat. Etiam eu ultrices ligula. Maecenas malesuada, ex vel pretium posuere, orci nisl elementum odio, at sodales risus enim at neque. Integer non nibh nisi. Duis placerat nisl id lectus pulvinar, sed posuere felis consectetur. Aenean laoreet pellentesque tortor, mollis convallis libero elementum vel. Cras non mollis mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam interdum sed massa vel tincidunt.","Fusce quis laoreet orci. Morbi mollis, ante ut rhoncus interdum, est velit egestas purus, nec facilisis eros sem ut elit. Duis varius ex vitae iaculis tempus. Nullam rutrum, nunc non faucibus mattis, nulla nisi fermentum dolor, eget volutpat justo est at velit. Sed interdum tristique urna, nec pulvinar metus sodales nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer id mauris volutpat, maximus tellus ac, posuere libero. Cras eget pharetra eros. Etiam dictum odio sit amet libero posuere, non suscipit augue auctor. Vivamus aliquet vel urna sit amet euismod. Sed facilisis ante felis, sit amet blandit diam rutrum et. Donec elit sem, mollis et viverra nec, tempor ut felis.",'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],d=function(e){var t=e.title;return i.a.createElement("div",null,i.a.createElement(s,null,i.a.createElement("h1",null,t)),i.a.createElement("div",null,i.a.createElement("p",null,p[m++%3])))},f=function(e){switch(e.page){case"one":return i.a.createElement(d,{title:"Page One"});case"two":return i.a.createElement(d,{title:"Page Two"});case"three":return i.a.createElement(d,{title:"Page Three"});default:return i.a.createElement("div",null,"Loading...")}},v=function(e){var t=e.title,a=e.onClick,r=Object(n.useCallback)((function(e){e.preventDefault(),a()}),[a]);return i.a.createElement("a",{href:"#link-to-page-".concat(t.toLowerCase()),onClick:r},t)};var h,b=function(){var e=function(){var e=Object(n.useState)("one"),t=Object(o.a)(e,2),a=t[0],i=t[1];return[a,Object(n.useCallback)((function(e){i("loading"),setTimeout((function(){i(e)}),1e3)}),[])]}(),t=Object(o.a)(e,2),a=t[0],r=t[1];return i.a.createElement("div",{className:"App"},i.a.createElement("nav",{className:"Nav"},i.a.createElement(v,{onClick:function(){return r("one")},title:"One"}),i.a.createElement(v,{onClick:function(){return r("two")},title:"Two"}),i.a.createElement(v,{onClick:function(){return r("three")},title:"Three"})),i.a.createElement(f,{page:a}))},E=(a(12),function(e){var t=e.appName;return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement(s,null,i.a.createElement("h1",{tabIndex:"0"},"NVDA not working well with iframes")),i.a.createElement("p",null,"Load multiple apps to dynamically replace the iframe content")),i.a.createElement("div",null,"App name: ",t))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=null===(h=window.location.pathname.split("/"))||void 0===h?void 0:h[1],C=globalThis.self!==globalThis.top;switch(g){case"frame":l.a.render(i.a.createElement(b,null),document.getElementById("root"));break;case"app1":case"app2":case"app3":l.a.render(i.a.createElement(E,{appName:g}),document.getElementById("root"));break;default:!1===C&&l.a.render(i.a.createElement(c,null),document.getElementById("root"))}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.893da6da.chunk.js.map