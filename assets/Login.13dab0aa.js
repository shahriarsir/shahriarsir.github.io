import{_ as u}from"./index.7c00ffae.js";import{r as o,o as l,c,a as e,b as s,w as _,n as m,M as p,N as b,d as v}from"./vendor.68213b21.js";const x={data(){return{schema:{email:"required|email|min:3,max:100",password:"required|min:6|max:100"},login_in_submission:!1,login_show_alert:!1,login_alert_variant:"bg-blue-500",login_alert_msg:"Please wait! Untill your registration has been completed."}},methods:{async login(i){this.login_show_alert=!0,this.login_in_submission=!0,this.login_alert_variant="bg-blue-500",this.login_alert_msg="Please wait! Untill your registration has been completed";try{await this.$store.dispatch("login",{values:i,router:this.$router})}catch(a){console.log(a),this.login_in_submission=!1,this.login_alert_variant="bg-red-500",this.login_alert_msg=a.message;return}this.login_alert_variant="bg-green-500",this.login_alert_msg="Success! Your account has been registered."}}},f={class:"container mx-auto"},w={class:"max-w-lg mx-auto mt-10 text-center card"},y=e("div",{class:"card-title"},"Login With Credetials",-1),k={class:"card-body"},C={class:"form-control"},N=e("label",{class:"label"},[e("span",{class:"label-text"},"Email or Phone")],-1),P={class:"form-control"},E=e("label",{class:"label"},[e("span",{class:"label-text"},"Password")],-1),S={class:"card-actions"},V={class:"mt-5"},B=v("Don't have an account? Register");function L(i,a,M,j,t,d){const n=o("vee-field"),r=o("ErrorMessage"),g=o("router-link"),h=o("vee-form");return l(),c("div",f,[e("div",w,[y,s(h,{"validation-schema":t.schema,onSubmit:d.login},{default:_(()=>[e("div",k,[e("div",C,[N,s(n,{type:"email",name:"email",placeholder:"example@example.com",class:"input input-primary input-bordered"}),s(r,{class:"text-red-600",name:"email"})]),e("div",P,[E,s(n,{type:"password",name:"password",placeholder:"Password",class:"input input-primary input-bordered"}),s(r,{class:"text-red-600",name:"password"})]),t.login_show_alert?(l(),c("div",{key:0,class:m([t.login_alert_variant,"p-5 my-4 font-bold text-center text-white"])},p(t.login_alert_msg),3)):b("",!0)]),e("div",S,[e("button",{class:m(["mx-auto btn btn-primary",{loading:t.login_in_submission}]),type:"submit"}," Login ",2)]),e("div",V,[s(g,{to:"/login",class:"text-blue-400"},{default:_(()=>[B]),_:1})])]),_:1},8,["validation-schema","onSubmit"])])])}var U=u(x,[["render",L]]);export{U as default};
