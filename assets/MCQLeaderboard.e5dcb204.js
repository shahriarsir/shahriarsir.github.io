import{o as i,c as a,a as t,M as n,S as h,U as m,F as _,O as g,n as p,P as f,Q as b}from"./vendor.68213b21.js";import{_ as y}from"./index.7c00ffae.js";const v={data(){return{search:"",testResults:[],allresult:[],results:[]}},methods:{modeltestResults(){fetch(`https://script.google.com/macros/s/AKfycbwvwOv6OKjK8qTJdFcQF4v_AthQddTji1NEJhinBkD1XfvDggrYW8Dn4rBsXNNne61ktg/exec?id=${this.$route.query.id}`).then(e=>e.json()).then(e=>{fetch(e.exam.question).then(l=>l.json()).then(l=>{let c=l;this.testResults=c.sort((o,s)=>o.duration-s.duration).sort((o,s)=>s.score-o.score).map((o,s)=>({position:s+1,name:o.name,school:o.school,duration:(o.duration/6e4).toFixed(2),score:o.score})),this.allresult=this.testResults})})},searchResult(){this.testResults=this.allresult.filter(e=>{if(e.school.toLowerCase().includes(this.search.toLowerCase())||e.name.toLowerCase().includes(this.search.toLowerCase()))return e})},getStyle(e){return e==1?"success":e==2?"orange darken-2":e==3?"indigo":""},getborderStyle(e){return e==1?"s singleResult mb-2":e==2?"f singleResult mb-2":e==3?"d singleResult mb-2":"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)}},x=e=>(f("data-v-62c15114"),e=e(),b(),e),w={class:"leaderboard"},R={class:"text-center text-3xl font-bold my-4 text-gray-900"},L={class:"md:w-1/2 md:mx-auto mx-1 rounded p-5 bg-gray-50 bg-opacity-40"},S={class:"form-control"},j={class:"mt-4"},k={key:0},C={class:"h-10 w-10 text-white bg-gradient-to-t from-indigo-400 to-indigo-600 rounded-full flex justify-center items-center font-semibold"},B={class:"flex-1 ml-2 md:ml-4 text-gray-900"},D={class:"text-lg font-semibold"},F={class:"p-2 border-2 border-blue-400 text-gray-900"},N={key:1,class:"text-center"},Q=x(()=>t("button",{class:"btn loader btn-primary"},"Loading...",-1)),q=[Q];function I(e,l,c,o,s,d){return i(),a("div",w,[t("div",null,[t("h1",R," Leaderboard-"+n(this.$route.params.slug)+"-"+n(this.$route.query.id),1),t("div",L,[t("div",S,[h(t("input",{"onUpdate:modelValue":l[0]||(l[0]=r=>s.search=r),placeholder:"Search by Name/College",onKeyup:l[1]||(l[1]=(...r)=>d.searchResult&&d.searchResult(...r)),class:"input input-primary input-bordered"},null,544),[[m,s.search]])]),t("div",j,[s.allresult.length>0?(i(),a("div",k,[(i(!0),a(_,null,g(s.testResults,(r,u)=>(i(),a("div",{key:u,class:p(`${d.getborderStyle(r.position)} flex justify-between items-center p-5 rounded bg-gray-100 shadow-md`)},[t("span",C,n(r.position),1),t("div",B,[t("h2",D,n(r.name),1),t("p",null,n(r.school),1)]),t("div",F,n(r.score),1)],2))),128))])):(i(),a("div",N,q))])])])])}var T=y(v,[["render",I],["__scopeId","data-v-62c15114"]]);export{T as default};
