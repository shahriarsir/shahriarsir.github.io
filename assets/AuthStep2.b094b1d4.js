var k=Object.defineProperty,f=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var _=(s,t,o)=>t in s?k(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,u=(s,t)=>{for(var o in t||(t={}))v.call(t,o)&&_(s,o,t[o]);if(d)for(var o of d(t))w.call(t,o)&&_(s,o,t[o]);return s},b=(s,t)=>f(s,y(t));import{_ as S}from"./index.234b47e9.js";import{r as c,o as m,c as h,b as r,w as g,a as e,n as C,M as N,N as q}from"./vendor.68213b21.js";const E={name:"RegisterFrom",beforeRouteEnter(s,t,o){if(localStorage.getItem("ssrb")==null){o();return}o({path:"/"})},data(){return{schema:{name:"required|min:3|max:100",email:"required|min:3|max:100|email",phone:"required|min:11|max:15",college:"required|min:4|max:100",ssc_board:"required",ssc_roll:"required:min:4",ssc_reg:"required|min:5",facebook_link:"required"},userData:{phone:this.$route.query.phone},reg_in_submission:!1,reg_show_alert:!1,reg_alert_variant:"bg-blue-500",reg_alert_msg:"Please wait! Untill your registration has been completed."}},methods:{async register(s){this.reg_show_alert=!0,this.reg_in_submission=!0,this.reg_alert_variant="bg-blue-500",this.reg_alert_msg="Please wait! Untill your registration has been completed";let t=s.phone.length,o=s.phone.substring(t-10,t);try{this.$store.dispatch("register",{body:JSON.stringify(b(u({},s),{phone:o})),router:this.$router,phone:o})}catch(i){console.log(i),this.reg_in_submission=!1,this.reg_alert_variant="bg-red-500",this.reg_alert_msg="An Unexpected error occurred. Please try again later.";return}this.reg_alert_variant="bg-green-500",this.reg_alert_msg="Success! Your account has been registered."}}},R={class:"mt-10 mx-2 md:w-1/2 md:mx-auto poppins pb-10"},j={class:"mb-3"},D=e("label",{class:"inline-block mb-2 dark:text-white"},"Name",-1),B={class:"mb-3"},M=e("label",{class:"inline-block mb-2 dark:text-white"},"Email",-1),P={class:"mb-3"},F=e("label",{class:"inline-block mb-2 dark:text-white"},"Phone Number",-1),I={class:"mb-3"},U=e("label",{class:"inline-block mb-2 dark:text-white"},"College",-1),V={class:"mb-3"},A=e("label",{class:"inline-block mb-2 dark:text-white"},"SSC Board",-1),J=e("option",{value:"barisal"},"Barisal",-1),L=e("option",{value:"chittagong"},"Chittagong",-1),O=e("option",{value:"comilla"},"Comilla",-1),z=e("option",{value:"dhaka"},"Dhaka",-1),T=e("option",{value:"dinajpur"},"Dinajpur",-1),Y=e("option",{value:"jessore"},"Jessore",-1),G=e("option",{value:"madrasah"},"Madrasah",-1),H=e("option",{value:"rajshahi"},"Rajshahi",-1),K=e("option",{value:"sylhet"},"Sylhet",-1),Q=e("option",{value:"mymensingh"},"Mymensingh",-1),W=e("option",{value:"tec"},"Technical",-1),X={class:"mb-3"},Z=e("label",{class:"inline-block mb-2 dark:text-white"},"SSC Roll",-1),$={class:"mb-3"},ee=e("label",{class:"inline-block mb-2 dark:text-white"},"SSC Registration",-1),te={class:"mb-3"},oe=e("label",{class:"inline-block mb-2 dark:text-white"},"Facebook ID Link",-1),re=["disabled"];function se(s,t,o,i,l,p){const a=c("vee-field"),n=c("ErrorMessage"),x=c("vee-form");return m(),h("div",R,[r(x,{"validation-schema":l.schema,onSubmit:p.register,"initial-values":l.userData},{default:g(()=>[e("div",j,[D,r(a,{type:"text",name:"name",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Name"}),r(n,{class:"dark:text-red-500 text-red-600",name:"name"})]),e("div",B,[M,r(a,{type:"email",name:"email",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Email"}),r(n,{class:"dark:text-red-500 text-red-600",name:"email"})]),e("div",P,[F,r(a,{type:"tel",name:"phone",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"e.g. 01612345678"}),r(n,{class:"dark:text-red-500 text-red-600",name:"phone"})]),e("div",I,[U,r(a,{type:"college",name:"college",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"College Name"}),r(n,{class:"dark:text-red-500 text-red-600",name:"college"})]),e("div",V,[A,r(a,{as:"select",name:"ssc_board",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Board"},{default:g(()=>[J,L,O,z,T,Y,G,H,K,Q,W]),_:1}),r(n,{class:"dark:text-red-500 text-red-600",name:"ssc_board"})]),e("div",X,[Z,r(a,{type:"tel",name:"ssc_roll",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"SSC Roll"}),r(n,{class:"dark:text-red-500 text-red-600",name:"ssc_roll"})]),e("div",$,[ee,r(a,{type:"tel",name:"ssc_reg",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"SSC Registration NO"}),r(n,{class:"dark:text-red-500 text-red-600",name:"ssc_reg"})]),e("div",te,[oe,r(a,{type:"text",name:"facebook_link",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Facebook ID Link"}),r(n,{class:"dark:text-red-500 text-red-600",name:"ssc_reg"})]),l.reg_show_alert?(m(),h("div",{key:0,class:C([l.reg_alert_variant,"text-white text-center font-bold p-5 my-4"])},N(l.reg_alert_msg),3)):q("",!0),e("button",{type:"submit",class:"block w-full bg-red-500 text-white py-1.5 px-3 rounded transition hover:bg-red-600",disabled:l.reg_in_submission}," Register ",8,re)]),_:1},8,["validation-schema","onSubmit","initial-values"])])}var ie=S(E,[["render",se]]);export{ie as default};
