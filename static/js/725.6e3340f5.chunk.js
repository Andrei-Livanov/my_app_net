"use strict";(self.webpackChunkmy_app_net=self.webpackChunkmy_app_net||[]).push([[725],{3382:function(t,n,e){e.r(n),e.d(n,{default:function(){return T}});var r=e(1413),s=e(5671),o=e(3144),i=e(136),u=e(2882),a=e(2791),c="ProfileInfo_descriptionBlock__9zEgp",l=e(2495),d=e.p+"static/media/myphoto.428529085f14851d5402.png",f=e(885),p=e(184),h=function(t){var n=(0,a.useState)(!1),e=(0,f.Z)(n,2),r=e[0],s=e[1],o=(0,a.useState)(t.status),i=(0,f.Z)(o,2),u=i[0],c=i[1];(0,a.useEffect)((function(){c(t.status)}),[t.status]);return(0,p.jsxs)("div",{children:[!r&&(0,p.jsx)("div",{children:(0,p.jsx)("span",{onDoubleClick:function(){s(!0)},children:t.status||"----"})}),r&&(0,p.jsx)("div",{children:(0,p.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(u)},value:u})})]})},m=function(t){var n=t.profile,e=t.status,r=t.updateStatus;return n?(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("img",{src:n.photos.large||d,alt:"Photo"}),(0,p.jsx)(h,{status:e,updateStatus:r})]})}):(0,p.jsx)(l.Z,{})},x=e(6070),j=e(2982),v="MyPosts_postsBlock__SM2a6",Z="MyPosts_posts__rvA+S",g="Post_item__9MhxP",_=function(t){return(0,p.jsxs)("div",{className:g,children:[(0,p.jsx)("img",{src:"https://avatars.mds.yandex.net/i?id=90baeefbf60fd8427e5b14ae9b5ed3c6-4936646-images-thumbs&n=13&exp=1",alt:""}),t.message,(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{children:"like"})," ",t.likesCount]})]})},P=e(6139),C=e(704),S=e(5304),y=e(9086),k=a.memo((function(t){console.log("RENDER");var n=(0,j.Z)(t.posts).reverse().map((function(t){return(0,p.jsx)(_,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("h3",{children:"My posts"}),(0,p.jsx)(b,{onSubmit:function(n){t.addPost(n.newPostText)}}),(0,p.jsx)("div",{className:Z,children:n})]})})),b=(0,C.Z)({form:"ProfileAddNewPostForm"})((function(t){return(0,p.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,p.jsx)("div",{children:(0,p.jsx)(P.Z,{component:y.gx,name:"newPostText",placeholder:"Post message",validate:[S.C,(0,S.D)(10)]})}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:"Add post"})})]})})),A=k,w=e(8687),N=(0,w.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(n){t((0,x.Wl)(n))}}}))(A),D=function(t){return(0,p.jsxs)("div",{children:[(0,p.jsx)(m,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,p.jsx)(N,{})]})},E=e(7781),F=e(6547),I=e(1548),M=function(t){(0,i.Z)(e,t);var n=(0,u.Z)(e);function e(){return(0,s.Z)(this,e),n.apply(this,arguments)}return(0,o.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return(0,p.jsx)(D,(0,r.Z)({},this.props))}}]),e}(a.Component),T=(0,E.qC)((0,w.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:x.et,getUserStatus:x.Tq,updateStatus:x.Nf}),F.E,I.D)(M)},9086:function(t,n,e){e.d(n,{Gr:function(){return p},II:function(){return f},gx:function(){return d}});var r=e(1413),s=e(5987),o=e(9234),i=e(6139),u=e(184),a=["input","meta","child"],c=["input","meta","child"],l=function(t){var n=t.meta,e=n.touched,r=n.error,s=t.children,i=e&&r;return(0,u.jsxs)("div",{className:o.Z.formControl+" "+(i?o.Z.error:""),children:[(0,u.jsx)("div",{children:s}),i&&(0,u.jsx)("span",{children:r})]})},d=function(t){var n=t.input,e=(t.meta,t.child,(0,s.Z)(t,a));return(0,u.jsx)(l,(0,r.Z)((0,r.Z)({},t),{},{children:(0,u.jsx)("textarea",(0,r.Z)((0,r.Z)({},n),e))}))},f=function(t){var n=t.input,e=(t.meta,t.child,(0,s.Z)(t,c));return(0,u.jsx)(l,(0,r.Z)((0,r.Z)({},t),{},{children:(0,u.jsx)("input",(0,r.Z)((0,r.Z)({},n),e))}))},p=function(t,n,e,s){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,u.jsxs)("div",{children:[(0,u.jsx)(i.Z,(0,r.Z)({placeholder:t,name:n,validate:e,component:s},o)),a]})}},1548:function(t,n,e){e.d(n,{D:function(){return p}});var r=e(1413),s=e(5671),o=e(3144),i=e(136),u=e(2882),a=e(2791),c=e(6871),l=e(8687),d=e(184),f=function(t){return{isAuth:t.auth.isAuth}},p=function(t){var n=function(n){(0,i.Z)(a,n);var e=(0,u.Z)(a);function a(){return(0,s.Z)(this,a),e.apply(this,arguments)}return(0,o.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(t,(0,r.Z)({},this.props)):(0,d.jsx)(c.Fg,{to:"/login"})}}]),a}(a.Component);return(0,l.$j)(f)(n)}},5304:function(t,n,e){e.d(n,{C:function(){return r},D:function(){return s}});var r=function(t){if(!t)return"Field is required"},s=function(t){return function(n){if(n.length>t)return"Max length is ".concat(t," symbols")}}},9234:function(t,n){n.Z={formControl:"FormsControls_formControl__P3At6",error:"FormsControls_error__ORnv4",formSummaryError:"FormsControls_formSummaryError__2S3wj"}}}]);
//# sourceMappingURL=725.6e3340f5.chunk.js.map