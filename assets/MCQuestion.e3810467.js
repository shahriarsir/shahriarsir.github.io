var f=Object.defineProperty,k=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var _=(s,t,o)=>t in s?f(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,y=(s,t)=>{for(var o in t||(t={}))M.call(t,o)&&_(s,o,t[o]);if(b)for(var o of b(t))L.call(t,o)&&_(s,o,t[o]);return s},v=(s,t)=>k(s,w(t));import{_ as T}from"./index.234b47e9.js";import{o as i,c as d,a as n,M as g,F as p,O as x,N as a,n as u,P as C,Q as H}from"./vendor.68213b21.js";const $={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090}},methods:{endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0,fetch(`https://script.google.com/macros/s/AKfycbxtnaJX2p5uLwvRoONEUFY8xEs-tVXcGSE168zqPT3A2Cp-9zETcQ4e_pEwW7L2yjaFYg/exec?type=${this.$route.params.slug}&id=${this.$route.query.id}`).then(s=>s.json()).then(s=>{if(new Date(s.exam.start)>Date.now()){this.$router.push("/");return}this.url="https://script.google.com/macros/s/AKfycby5uppC3TtM4hcHHrJxXMMbuGDOXehF0bCWgF7ZdFVWLVZBFIjItPgwuqxk_VxTT5-ymg/exec?sheet="+s.exam.exam,this.ended=new Date(s.exam.end).getTime(),this.solutionpdf=s.exam.solve_sheet,fetch(this.url+"&type=question").then(t=>t.json()).then(t=>{this.questions=t.map(m=>v(y({},m),{selected:""}));let o=this.questions.length;this.inttime=o*6e4,this.end=o*6e4,this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit()})})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let s=this.solution.reduce((t,o)=>(o.correct==o.selected&&(t+=1),t),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${s}`}).then(()=>{this.$router.replace(`/leaderboard/${this.$route.params.slug}?id=${this.$route.query.id}`)})},submitAns(){this.eload=!0;let s=this.questions.reduce((t,o)=>(o.correct==o.selected&&(t+=1),t),0);clearTimeout(this.timing),this.eload=!1,this.$swal({icon:"success",title:"Success",text:`You Scored ${s}`}).then(()=>{this.$router.replace(`/leaderboard/${this.$route.params.slug}?id=${this.$route.query.id}`)})},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(s){this.show=!0;const t=setInterval(()=>{const o=s-Date.now();if(o<0){clearInterval(t);return}const m=Math.floor(o/this._days),r=Math.floor(o%this._days/this._hours),c=Math.floor(o%this._hours/this._minutes),e=Math.floor(o%this._minutes/this._seconds);this.second=e<10?"0"+e:e,this.minute=c<10?"0"+c:c,this.hours=r<10?"0"+r:r,this.days=m<10?"0"+m:m},1e3)}},created(){this.getQuestionLink()},computed:{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},user(){return this.$store.getters.getUser}}},S=s=>(C("data-v-54dbb042"),s=s(),H(),s),D={key:0},j={key:0,class:"pb-10"},A={class:"py-4 text-center"},E={class:"text-2xl font-bold text-gray-900"},F={class:"mx-2 md:w-2/3 md:mx-auto text-gray-900"},I=["innerHTML"],R={class:"mt-3"},Q=["innerHTML","onClick"],V=["innerHTML","onClick"],B=["innerHTML","onClick"],z=["innerHTML","onClick"],N={class:"mb-10 text-center"},W={key:1,class:"pb-10"},X={class:"py-4 text-center"},Y={class:"text-2xl font-bold text-gray-900"},O={class:"mx-2 md:w-2/3 md:mx-auto"},P=["innerHTML"],G={class:"mt-3"},J=["innerHTML","onClick"],K=["innerHTML","onClick"],U=["innerHTML","onClick"],Z=["innerHTML","onClick"],q={class:"mb-10 text-center"},ee=["disabled"],te={key:2,class:"white--text fixed__timer"},se={class:"text-white bg-blue-500 shadow border border-white"},oe={key:1,class:"flex items-center justify-center w-full h-screen"},re=S(()=>n("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[n("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),n("div",{class:"text-lg"},"Loading ...")],-1)),ne=[re];function ie(s,t,o,m,r,c){return r.loading?(i(),d("div",oe,ne)):(i(),d("div",D,[r.retake?(i(),d("div",j,[n("div",A,[n("h1",E," Exam - "+g(this.$route.params.id),1)]),n("div",F,[(i(!0),d(p,null,x(r.solution,(e,l)=>(i(),d("div",{key:l,class:"p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-gray-50 kalpurush text-gray-900"},[n("div",{innerHTML:e.question},null,8,I),n("div",R,[e.a?(i(),d("div",{key:0,innerHTML:e.a,onClick:h=>r.solution[l].selected=e.a,class:u(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,Q)):a("",!0),e.b?(i(),d("div",{key:1,innerHTML:e.b,onClick:h=>r.solution[l].selected=e.b,class:u(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,V)):a("",!0),e.c?(i(),d("div",{key:2,innerHTML:e.c,onClick:h=>r.solution[l].selected=e.c,class:u(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,B)):a("",!0),e.d?(i(),d("div",{key:3,innerHTML:e.d,onClick:h=>r.solution[l].selected=e.d,class:u(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,z)):a("",!0)])]))),128)),n("div",N,[n("button",{onClick:t[0]||(t[0]=(...e)=>c.retakeResult&&c.retakeResult(...e)),class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"}," Submit ")])])])):a("",!0),r.questions.length>0?(i(),d("div",W,[n("div",X,[n("h1",Y," Exam - "+g(this.$route.params.id),1)]),n("div",O,[(i(!0),d(p,null,x(r.questions,(e,l)=>(i(),d("div",{key:l,class:"p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-gray-50 kalpurush"},[n("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,P),n("div",G,[e.a?(i(),d("div",{key:0,innerHTML:e.a,onClick:h=>r.questions[l].selected=e.a,class:u(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-gray-900 text-black  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,J)):a("",!0),e.b?(i(),d("div",{key:1,innerHTML:e.b,onClick:h=>r.questions[l].selected=e.b,class:u(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,K)):a("",!0),e.c?(i(),d("div",{key:2,innerHTML:e.c,onClick:h=>r.questions[l].selected=e.c,class:u(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,U)):a("",!0),e.d?(i(),d("div",{key:3,innerHTML:e.d,onClick:h=>r.questions[l].selected=e.d,class:u(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,Z)):a("",!0)])]))),128)),n("div",q,[n("button",{onClick:t[1]||(t[1]=(...e)=>c.submitAns&&c.submitAns(...e)),disabled:r.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},g(r.eload?"Loading...":"Submit"),9,ee)])])])):a("",!0),r.show?(i(),d("div",te,[n("div",se,g(r.minute)+" : "+g(r.second),1)])):a("",!0)]))}var ce=T($,[["render",ie],["__scopeId","data-v-54dbb042"]]);export{ce as default};
