import{_}from"./index.7c00ffae.js";import{r as u,o as s,c as o,F as h,O as m,a as e,M as i,b as p,w as f,d as b}from"./vendor.68213b21.js";const x={data(){return{courses:[]}},methods:{async getCourses(){let r=await(await fetch("https://script.google.com/macros/s/AKfycbwROJBLBfQQTLamRdegV668LFMMj_rbc4b9TxPrE_SqUjDmaxHii9CLAmikWnlAGTnB/exec?type=free")).json();this.courses=r.routines.filter(c=>c.id)}},created(){this.getCourses()}},g={class:"container"},v=e("div",{class:"py-3"},[e("h1",{class:"text-3xl font-bold text-center sm:hidden"},"Free Contents")],-1),y={key:0,class:"flex flex-wrap items-center justify-center lg:gap-5"},w={class:"overflow-hidden transition border-2 border-gray-200 rounded-lg glass hover:scale-105 hover:shadow-md"},j=["src"],k={class:"p-3"},B={class:"mb-1 text-xs font-semibold tracking-widest text-red-500"},C=e("div",{class:"flex flex-wrap items-center justify-between py-1 border-t border-zinc-300"},[e("div",{class:"text-lg font-bold text-blue-500"},"Free")],-1),F={key:1,class:"mt-5 text-center"},L=e("button",{class:"btn btn-lg btn-circle loading btn-primary"},null,-1),T=[L];function V(l,r,c,A,n,M){const a=u("router-link");return s(),o("section",g,[v,n.courses.length>0?(s(),o("div",y,[(s(!0),o(h,null,m(n.courses,(t,d)=>(s(),o("div",{class:"p-4 aspect-auto w-[350px]",key:d},[e("div",w,[e("img",{class:"object-cover object-left-top w-full lg:h-48 md:h-36",src:"https://drive.google.com/uc?id="+t.thumbnail.substr(32,33),alt:"blog"},null,8,j),e("div",k,[e("h2",B,i(t.subject),1),p(a,{to:"/course/"+t.course_link+"?cid="+t.id,class:"mb-3 text-lg font-medium text-gray-900 cursor-pointer title-font hover:text-blue-700 hover:text-clip"},{default:f(()=>[b(i(t.topic),1)]),_:2},1032,["to"]),C])])]))),128))])):(s(),o("div",F,T))])}var E=_(x,[["render",V]]);export{E as default};
