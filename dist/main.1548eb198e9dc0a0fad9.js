webpackJsonp([0],[,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return c("users")}function u(e){return a("users/"+e)}function c(e){return fetch(f+e).then(i,d)}function a(e){var t=new Request(f+e,{method:"DELETE"});return fetch(t).then(i,d)}function i(e){return e.json()}function d(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=o,t.deleteUser=u,n(0);var s=n(4),l=r(s),f=(0,l.default)()},function(e,t){},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(){return o("useMockApi")?"http://localhost:3001/":"/"}function o(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";(function(e){n(2);var t=n(1);(0,t.getUsers)().then(function(n){var r="";n.forEach(function(e){r+='<tr>\n      <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n      <td>'+e.id+"</td>\n      <td>"+e.firstName+"</td>\n      <td>"+e.lastName+"</td>\n      <td>"+e.email+"</td>\n      </tr>"}),e.document.getElementById("users").innerHTML=r;var o=e.document.getElementsByClassName("deleteUser");Array.from(o,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,n(3))}],[5]);
//# sourceMappingURL=main.1548eb198e9dc0a0fad9.js.map