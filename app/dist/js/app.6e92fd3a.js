(function(e){function t(t){for(var r,u,o=t[0],a=t[1],c=t[2],p=0,m=[];p<o.length;p++)u=o[p],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&m.push(n[u][0]),n[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],r=!0,o=1;o<i.length;o++){var a=i[o];0!==n[a]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=i[0]))}return e}var r={},n={app:0},s=[];function u(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.m=e,u.c=r,u.d=function(e,t,i){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(i,r,function(t){return e[t]}.bind(null,r));return i},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=a;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var r=i("85ec"),n=i.n(r);n.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e._m(0),i("PrimeNumberCheck",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"jumbotron"},[i("h1",{staticClass:"display-4"},[i("span",{staticStyle:{color:"#E97B22"}},[e._v("Check")]),e._v("Prime"),i("span",{staticStyle:{color:"#E97B22"}},[e._v("CC")])]),i("p",{staticClass:"lead"},[e._v("This is a simple application for checking if a number is a prime number or not built using AWS Lambda.")]),i("hr",{staticClass:"my-4"}),i("p",[e._v("The application allows you to check if a number is a prime number or not. If it is, you will get a notification. If it is not, you will get one of the numbers by which it is divisible.")]),i("p",[e._v("This functionality is achieved via two Lambda functions, one which attempts to check is a number is a prime number, and the other (called by the first one) which checks if the number is divisible by a given number.")])])}],u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"row d-flex justify-content-center"},[i("div",{staticClass:"col-12 col-md-8"},[i("div",{staticClass:"input-group"},[i("div",{staticClass:"custom-file"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.inputNumber,expression:"inputNumber"}],staticClass:"number-input-field",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"Enter number to check",name:"inputNumber"},domProps:{value:e.inputNumber},on:{input:function(t){t.target.composing||(e.inputNumber=t.target.value)}}})])])]),i("div",{staticClass:"col-12 col-md-1"},[i("button",{staticClass:"btn btn-primary",attrs:{disabled:e.disabled},on:{click:function(t){return e.checkPrimeNumber()}}},[e.disabled?i("span",[i("span",{staticClass:"spinner-border",staticStyle:{width:"20px",height:"20px"},attrs:{role:"status"}})]):i("span",[e._v("Check")])])])]),i("div",{staticClass:"row d-flex justify-content-center"},[e.numberNotPrime?i("div",{staticClass:"col-12 col-md-9"},[e._v("Number "+e._s(this.previousInputNumber)+" is not a prime number because it is divisible by "+e._s(this.previousInputNumberDivisibleBy)+" ")]):e._e(),e.numberIsPrime?i("div",{staticClass:"col-12 col-md-9"},[e._v("Number "+e._s(this.previousInputNumber)+" is a prime number ")]):e._e()])])},o=[],a=i("7338"),c=i.n(a),l=i("c07d"),p=i.n(l);i("300f");r["default"].use(p.a);var m={name:"inputNumber",props:{msg:String},data:function(){return{inputNumber:"",numberNotPrime:!1,numberIsPrime:!1,previousInputNumber:"",previousInputNumberDivisibleBy:"",disabled:!1}},mounted:function(){},methods:{checkPrimeNumber:function(){var e=this;if(e.numberNotPrime=!1,e.numberIsPrime=!1,e.previousInputNumber="",e.previousInputNumberDivisibleBy="",""!==e.inputNumber){e.disabled=!0;var t=JSON.stringify({number:this.inputNumber});c.a.post("/check",t,{headers:{"Content-Type":"application/json"}}).then((function(t){e.previousInputNumber=e.inputNumber,e.inputNumber="",t.data.number_is_prime?(e.numberNotPrime=!1,e.numberIsPrime=!0,r["default"].$toast.success("It is a prime number.",{position:"top-right"})):(e.numberNotPrime=!0,e.numberIsPrime=!1,e.previousInputNumberDivisibleBy=t.data.divisible_by,r["default"].$toast.info("It is not a prime number",{position:"top-right"})),e.disabled=!1})).catch((function(t){e.numberNotPrime=!1,e.numberIsPrime=!1,console.log("Error: ",t),r["default"].$toast.error("Check if number is a prime number failed.",{position:"top-right"}),e.disabled=!1}))}else r["default"].$toast.error("You did not specify a number.",{position:"top-right"})}}},b=m,d=i("2877"),f=Object(d["a"])(b,u,o,!1,null,"734970cc",null),v=f.exports,h={name:"app",components:{PrimeNumberCheck:v}},y=h,N=(i("034f"),Object(d["a"])(y,n,s,!1,null,null,null)),g=N.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,i){}});
//# sourceMappingURL=app.6e92fd3a.js.map