(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,s){},114:function(e,t,s){},117:function(e,t,s){},118:function(e,t,s){},119:function(e,t,s){},120:function(e,t,s){},121:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),i=s(15),n=s.n(i),r=s(6),l=s(1);var o=function(e){var t=Object(a.useState)(),s=Object(r.a)(t,2),c=s[0],i=s[1];return Object(a.useEffect)((function(){return e.queryFlag>1024?i(!0):i(!1)}),[e.queryFlag]),Object(l.jsx)(a.Fragment,{children:c&&Object(l.jsx)("nav",{className:"nav",children:Object(l.jsx)("div",{className:"nav__menu-list",children:["home","about","freelance","portfolio","resume","contact"].map((function(e,t){return Object(l.jsx)("a",{href:"#".concat(e),className:"nav__link",children:e},t)}))})})})};s(65);var d=function(e){return e.queryFlag>1024&&Object(l.jsx)("div",{className:"scroll__box",children:Object(l.jsx)("div",{className:"scroll__mouse",children:Object(l.jsx)("a",{href:"#about",children:Object(l.jsx)("div",{className:"scroll__wheel"})})})})},j=s(48),m=s(49),b=s(54),h=s(53),u=s(74),x=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(m.a)(s,[{key:"render",value:function(){return Object(l.jsx)(u.a,{steps:[2e3,"Hi, I'm Rom\xe1n"],loop:1,wrapper:"h1",className:"header-content__title"})}}]),s}(c.a.Component),O=s(138);function p(){return{width:window.innerWidth}}function f(){var e=Object(a.useState)(p()),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){c(p())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),s}var g=s.p+"static/media/home-bg.456332f2.jpg";s(88),s(89),s(44);var v=function(){var e=f().width;return Object(l.jsxs)("div",{className:"home",id:"home",children:[Object(l.jsxs)("div",{className:"home__Bg",children:[Object(l.jsx)("img",{src:g,alt:"home-background",className:"home__Bg__img"}),Object(l.jsx)("div",{className:"home__Bg--filtered-layer"})]}),Object(l.jsx)(o,{queryFlag:e}),Object(l.jsxs)("div",{className:"header-content",children:[Object(l.jsx)(x,{}),Object(l.jsxs)("h4",{className:"header-content__subtitle",children:["I'm a ",Object(l.jsx)("span",{children:" Full Stack Web Developer"})," based in Argentina."]}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)(O.a,{variant:"contained",color:"secondary",className:"button",children:Object(l.jsx)("a",{href:"#portfolio",children:"checkout my work"})}),Object(l.jsx)(O.a,{variant:"contained",color:"secondary",className:"button",children:Object(l.jsx)("a",{href:"#contact",children:"hire me"})})]})]}),Object(l.jsx)(d,{queryFlag:e})]})};s(94);var _=function(e){var t=function(e){switch(e){case"about me":return{titleText:"Roman Luporini",subtitleText:"about me"};case"freelance":return{titleText:e,subtitleText:"services"};case"portfolio":return{titleText:e,subtitleText:"my work"};case"resume":return{titleText:e,subtitleText:"my experience"};case"contact":return{titleText:e,subtitleText:"get in touch"};default:return{titleText:"",subtitleText:""}}};return Object(l.jsxs)("div",{className:e.inView?"title contact__title--visible":"title",children:[Object(l.jsx)("h1",{children:t(e.section).titleText}),Object(l.jsx)("h6",{children:t(e.section).subtitleText}),Object(l.jsx)("hr",{})]})},y=s.p+"static/media/profile-photo.aaa6e47e.png",N=s(33);var w=function(){var e=Object(N.a)({threshold:.6,triggerOnce:!0}),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(l.jsxs)("div",{className:"about-me",id:"about",ref:s,children:[Object(l.jsxs)("div",{inView:a,className:a?"about-me__header visible":"about-me__header",children:[Object(l.jsx)("div",{className:"about-me__profile-photo",children:Object(l.jsx)("img",{src:y,alt:"profile"})}),Object(l.jsx)(_,{section:"about me"})]}),Object(l.jsx)("div",{inView:a,className:a?"about-me__text visible":"about-me__text",children:Object(l.jsxs)("p",{children:["I'm a FSWD graduated from Ac\xe1mica. I'm currently working at Sentate as a Full Stack Web Developer as well as I'm part-time freelancer.",Object(l.jsx)("br",{}),"The most relevant technologies I use are: React-redux, JavaScript, MongoDB, CSS/Sass-SassCript (BEM - methodology), HTML5, GIT. Modules like Express, Axios, bcrypt, Jason Web Token, just to name a few."]})})]})},k=s(26),S=s.p+"static/media/bluedot.d9141c90.png",T=s.p+"static/media/gifos.6aafbb53.png",F=s.p+"static/media/delilah.c2423794.png",q=s.p+"static/media/egeria.17c19e7c.jpg",B=s.p+"static/media/sentate.430268f6.png",C=s(14),I=s(18);s(98);var E=function(e){var t=Object(a.useState)(!1),s=Object(r.a)(t,2),c=s[0],i=s[1];return Object(a.useEffect)((function(e){return i(!e)}),[e.gallerySrc]),Object(l.jsx)(a.Fragment,{children:c&&Object(l.jsx)("div",{className:"gallery",children:Object(l.jsx)("div",{className:"gallery__filtered-layer",children:Object(l.jsx)("div",{className:"gallery__content",children:Object(l.jsxs)("div",{className:"gallery__iframe",children:[Object(l.jsx)("a",{href:e.gallerySrc,target:"_blank",className:"iframe__external-link",children:Object(l.jsx)(C.a,{icon:I.d})}),Object(l.jsx)("iframe",{src:e.gallerySrc,frameBorder:"0"})]})})})})})},M=(s(99),function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).state={queryFlag:e.queryFlag,gallerySrc:"",showGallery:!1,openBlank:"",externalOpen:"",title:e.title},a.handleClose=a.handleClose.bind(Object(k.a)(a)),a.handleOpen=a.handleOpen.bind(Object(k.a)(a)),a.cardType=a.cardType.bind(Object(k.a)(a)),a.handleOnClick=a.handleOnClick.bind(Object(k.a)(a)),a}return Object(m.a)(s,[{key:"componentWillMount",value:function(){this.state.queryFlag>=1024?this.setState({queryFlag:!0}):this.setState({queryFlag:!1,openBlank:"_blank"})}},{key:"componentWillReceiveProps",value:function(e){e.queryFlag>=1024&&!0!==this.state.queryFlag&&"_blank"===this.state.openBlank?this.setState({queryFlag:!0,openBlank:""}):e.queryFlag<1024&&!1!==this.state.queryFlag&&""===this.state.openBlank&&this.setState({queryFlag:!1,showGallery:!1,openBlank:"_blank"})}},{key:"handleOpen",value:function(e){e&&!0===this.state.queryFlag&&""===this.state.openBlank?this.setState({gallerySrc:e,showGallery:!0,externalOpen:""}):e&&!1===this.state.queryFlag&&"_blank"===this.state.openBlank&&this.setState({externalOpen:e})}},{key:"handleClose",value:function(){this.setState({gallerySrc:"",showGallery:!1})}},{key:"handleOnClick",value:function(e){""===this.state.openBlank&&e.preventDefault(),this.handleOpen(this.cardType(this.state.title).href)}},{key:"cardType",value:function(e){switch(e){case"bluedot-podcast":return{title:"Bluedot Podcast",shortText:"Podcast playing site",text:"Objectives: layout, styling and deploy of a static web page with embebed content.",note:"*Note: this is a non-commercial project",img:S,href:"https://luporinibluedotpodcast.netlify.app"};case"gifos":return{title:"GifOs",shortText:"Enjoy best gifs and make your own!",text:"Objectives: GIPHY's API conection, API querying, light/dark theme change, javascript ES6 (async/await) and media devices conection.",note:"*Note: this is a non-commercial project",img:T,href:"https://romanluporini-gifos.netlify.app"};case"delilah-resto":return{title:"Delilah Resto",shortText:"Restaurant order management",text:"Objectives: API programming, SQL database creation and querying, user authentication with JWT, folder structure for project scaling.",note:"*Note: this is a non-commercial project",img:F,href:"https://github.com/romanluporini/DelilahResto---TPn3-Acamica"};case"egeria":return{title:"Egeria",shortText:"International E-commerce",text:"UX/UI design of international e-commerce",img:q,href:"https://egeriaonlinetesting.netlify.app"};case"sentate":return{title:"Sentate",shortText:"travel booking platform",text:"front-end development of a travel booking platform",img:B,href:"https://sentate.com.ar/"}}}},{key:"render",value:function(){var e=this;return Object(l.jsxs)(a.Fragment,{children:[this.state.showGallery&&Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("span",{className:"iframe-x",show:this.state.showGallery,onClick:function(){return e.handleClose()},children:"x"}),Object(l.jsx)(E,{gallerySrc:this.state.gallerySrc})]}),Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"card__img-wrapper",children:[Object(l.jsx)("img",{src:this.cardType(this.state.title).img,alt:this.cardType(this.state.title).title,className:"card__img"}),Object(l.jsx)("div",{className:"card__button-box",children:Object(l.jsx)(O.a,{variant:"contained",color:"secondary",className:"button card__button",children:Object(l.jsx)("a",{target:this.state.openBlank,href:this.state.externalOpen,onClick:function(t){return e.handleOnClick(t)},children:this.state.queryFlag?"open":Object(l.jsx)(C.a,{icon:I.d})})})})]}),Object(l.jsxs)("div",{className:"card__content",children:[Object(l.jsx)("h3",{className:"card__title",children:this.cardType(this.state.title).title}),Object(l.jsx)("p",{children:this.state.queryFlag?this.cardType(this.state.title).text:this.cardType(this.state.title).shortText}),Object(l.jsx)("p",{children:this.cardType(this.state.title).note})]})]})]})}}]),s}(c.a.Component)),A=s(141);s(100);var D=function(){var e=Object(N.a)({threshold:.2,triggerOnce:!0}),t=Object(r.a)(e,2),s=t[0],a=t[1],c=f().width;return Object(l.jsxs)("div",{className:"portfolio",id:"portfolio",inView:a,children:[Object(l.jsxs)("div",{className:"portfolio__Bg",children:[Object(l.jsx)("div",{className:"stars1"}),Object(l.jsx)("div",{className:"stars2"}),Object(l.jsx)("div",{className:"stars3"})]}),Object(l.jsx)("div",{className:"portfolio__Bg--filtered-layer"}),Object(l.jsx)(_,{section:"portfolio"}),Object(l.jsx)("div",{className:"portfolio__cards",ref:s,children:Object(l.jsx)(A.a,{container:!0,spacing:6,direction:"column",justify:"center",children:["bluedot-podcast","gifos","delilah-resto","egeria","sentate"].map((function(e,t){return Object(l.jsx)(A.a,{item:!0,xs:12,className:a?"portfolio__cards-item visited":"portfolio__cards-item",children:Object(l.jsx)(M,{title:e,queryFlag:c},t)},t)}))})})]})},V=s(72),R=s.n(V),W=s(142);s(67);function P(e){var t=[{img:e.img.slide1,title:"interactive prototyping",text:"Interactive prototyping is a trend in design. It allows the client to see the final product and to make changes before jump into code which make things a lot easier, speed up the work flow and deliver times."},{img:e.img.slide2,title:"front-end development",text:"If you are looking for an entire front-end solution, i offer UX/UI design as well as coding. I use technologies like Sass, React combined with Material UI, to make your site faster and make it more likely to get clients."},{img:e.img.slide3,title:"back-end development",text:"RESTful API programming with NodeJS as well as any other solution you may need on your backend."}];function s(e){return Object(l.jsx)(W.a,{children:Object(l.jsxs)("div",{className:"slide",children:[Object(l.jsx)("div",{className:"slide__img-box",children:Object(l.jsx)("img",{src:e.item.img,alt:"profile",className:"slide-img"})}),Object(l.jsxs)("div",{className:"slide__text",children:[Object(l.jsx)("h4",{children:e.item.title}),Object(l.jsx)("p",{children:e.item.text})]})]})})}return Object(l.jsx)(R.a,{className:"carousel",children:t.map((function(e,t){return Object(l.jsx)(s,{item:e},t)}))})}var U=s.p+"static/media/slide1.4f2eff94.png",L=s.p+"static/media/slide2.aabbefa6.svg",G=s.p+"static/media/slide3.f63ea11f.svg";var J=function(){return Object(l.jsxs)("div",{className:"freelance",id:"freelance",children:[Object(l.jsx)(_,{section:"freelance"}),Object(l.jsx)(P,{img:{slide1:U,slide2:L,slide3:G}}),Object(l.jsx)("div",{className:"button-box",children:Object(l.jsx)(O.a,{variant:"contained",color:"secondary",className:"button",children:Object(l.jsx)("a",{href:"#contact",children:"hire me"})})})]})},z=s.p+"static/media/loadingSpinner.6cef8428.svg",H=s.p+"static/media/success.6b6350a4.svg",X=s.p+"static/media/error.96841b05.svg";var Q=function(e){var t=Object(a.useState)(e.showModal),s=Object(r.a)(t,2),c=s[0],i=s[1],n=function(t){switch(t){case"contact":return{title:"Email sent correctly",anim:H,showButton:!0};case"resume":return e.error?{title:"Something went wrong, please try again.",anim:X,showButton:!0}:{title:"downloading resume, please wait...",anim:z,showButton:!1}}};return Object(l.jsx)(a.Fragment,{children:c&&Object(l.jsx)("div",{className:"modal",children:Object(l.jsx)("div",{className:"modal__overlay",children:Object(l.jsx)("div",{className:"modal--success",children:Object(l.jsxs)("div",{className:"modal__content",children:[Object(l.jsx)("h4",{className:"modal__content__title",children:n(e.from).title}),Object(l.jsx)("div",{className:"resume"===e.from?e.error?"modal__img-box":"modal__anim-box":"modal__img-box",children:Object(l.jsx)("img",{src:n(e.from).anim,alt:"error-success"})}),Object(l.jsx)("div",{className:"button-box",children:n(e.from).showButton&&Object(l.jsx)(O.a,{variant:"contained",color:"secondary",className:"button",onClick:function(e){!function(e){e.preventDefault(),i((function(e){return!e}))}(e)},children:Object(l.jsx)("a",{children:"resume"===e.from?"retry":"ok"})})})]})})})})})},Y=s.p+"static/media/CV Luporini - Full Stack Web Developer.1974cc0b.pdf";s(114);var K=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(),n=Object(r.a)(i,2),o=n[0],d=n[1];function j(){try{!function(e,t){var s=document.createElement("a");s.setAttribute("hidden",""),s.setAttribute("href",e),s.setAttribute("download","".concat(t,".pdf")),document.body.appendChild(s),s.click(),document.body.removeChild(s)}(Y,"CV Luporini - Full Stack Web developer.pdf"),setTimeout((function(){c(!1)}),2e3)}catch(e){console.log(e),d(!0)}}return Object(l.jsxs)("div",{className:"resume",id:"resume",children:[s&&Object(l.jsx)(Q,{showModal:s,error:o,from:"resume"}),Object(l.jsxs)(A.a,{container:!0,className:"resume__grid-container",children:[Object(l.jsx)(A.a,{item:!0,xs:12,children:Object(l.jsx)(_,{section:"resume"})}),Object(l.jsx)(A.a,{item:!0,xs:12,sm:6,className:"resume__grid-item",children:Object(l.jsxs)("div",{className:"resume__profile resume__section",children:[Object(l.jsx)("h3",{className:"resume__section-title",children:"profile"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("span",{children:"Coding"}),Object(l.jsx)("p",{children:"HTML, CSS/Sass-Sasscript, Javascript, nodeJS, SQL, visual basic(MS Excel macros)."}),Object(l.jsx)("span",{children:"Frameworks/ Libraries/ Databases/ Systems"}),Object(l.jsx)("p",{children:"React, Redux, Express.js, Sequelize, bcrypt, JSON Web Token, MongoDB, MySql, phpMyAdmin, VS code, Postman, Adobe XD."}),Object(l.jsx)("span",{children:"English"}),Object(l.jsx)("p",{children:"intermediate/advanced level"})]})]})}),Object(l.jsx)(A.a,{item:!0,xs:12,sm:6,className:"resume__grid-item",children:Object(l.jsxs)("div",{className:"resume__work-experience resume__section",children:[Object(l.jsx)("h3",{className:"resume__section-title",children:"work-experience"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("span",{children:"Freelance Front-End Web Developer"}),Object(l.jsx)("p",{children:"UX/ UI desing and development of a travel booking platform."}),Object(l.jsx)("span",{children:"Heliconia Software | august/sept. 2020"}),Object(l.jsx)("p",{children:"UX/ UI desing and development of an international e-commerce."}),Object(l.jsx)("span",{children:"Climatizadores SN S.A. | sept 2018/sept. 2020"}),Object(l.jsx)("p",{children:"Head of the technical-administration office."})]})]})}),Object(l.jsx)(A.a,{item:!0,xs:12,sm:6,className:"resume__grid-item",children:Object(l.jsxs)("div",{className:"resume__education resume__section",children:[Object(l.jsx)("h3",{className:"resume__section-title",children:"education"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("span",{children:"ac\xe1mica"}),Object(l.jsx)("p",{children:"Full Stack Web Developer | March/August 2020"}),Object(l.jsx)("span",{children:"Universidad Tecnol\xf3gica Nacional"}),Object(l.jsx)("p",{children:"Mechanical Engineering | 5th year, not finished."}),Object(l.jsx)("span",{children:"E.E.T. N\xb06"}),Object(l.jsx)("p",{children:"Secondary School | Electro-Mechanic technician"})]})]})}),Object(l.jsx)(A.a,{item:!0,xs:12,sm:6,className:"resume__grid-item",children:Object(l.jsxs)("div",{className:"resume__projects resume__section",children:[Object(l.jsx)("h3",{className:"resume__section-title",children:"links to projects"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("span",{children:"freelance"}),Object(l.jsx)("a",{href:"https://egeriaonlinetesting.netlify.app",target:"_blank",children:"https://egeriaonlinetesting.netlify.app"}),Object(l.jsx)("p",{children:"Ref: Rotondaro, Agust\xedn +598 95 606 245"}),Object(l.jsx)("a",{href:"https://www.sentate.com.ar",target:"_blank",children:"https://www.sentate.com.ar"}),Object(l.jsx)("p",{children:"Ref: Iglesias, Marcos +54 9 3364 31-2887"}),Object(l.jsx)("span",{children:"For more projects, you can checkout my github"}),Object(l.jsx)("a",{href:"https://github.com/romanluporini",target:"_blank",children:"https://github.com/romanluporini"})]})]})}),Object(l.jsx)(A.a,{item:!0,xs:12,children:Object(l.jsx)("div",{className:"resume__button-box",children:Object(l.jsxs)(O.a,{variant:"contained",color:"secondary",className:"button",children:[Object(l.jsx)(C.a,{icon:I.b}),Object(l.jsx)("a",{onClick:function(){c(!0),j()},children:"resume"})]})})})]})]})},Z=s(143),$=s(73),ee=s.n($);s(117);var te=function(e){var t=Object(a.useState)(!1),s=Object(r.a)(t,2),c=s[0],i=s[1];return Object(l.jsxs)("form",{noValidate:!0,autoComplete:"off",className:"contact__form",onSubmit:function(e){return function(e){e.preventDefault(),ee.a.sendForm("service_t2r3ifb","template_8gl5eql",e.target,"user_ySUj3Wgz9VqyXz2rtrxTv").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}(e)},children:[c&&Object(l.jsx)(Q,{showModal:c,from:"contact"}),Object(l.jsxs)(A.a,{container:!0,spacing:2,children:[Object(l.jsx)(A.a,{item:!0,xs:12,sm:6,children:Object(l.jsxs)("div",{className:e.inView?"input-box visible":"input-box",children:[Object(l.jsx)("input",{type:"text",name:"from_name",required:!0}),Object(l.jsx)("label",{htmlFor:"",children:"full-name"})]})}),Object(l.jsx)(A.a,{item:!0,xs:12,sm:6,children:Object(l.jsxs)("div",{className:e.inView?"input-box visible":"input-box",children:[Object(l.jsx)("input",{type:"email",name:"reply_to",required:!0}),Object(l.jsx)("label",{htmlFor:"",children:"email"})]})}),Object(l.jsx)(A.a,{item:!0,xs:12,children:Object(l.jsx)(Z.a,{rows:10,name:"message",placeholder:"Please enter your message here...",className:e.inView?"contact__email-body visible":"contact__email-body",required:!0})}),Object(l.jsx)("div",{className:"contact__button-box",children:Object(l.jsxs)(O.a,{variant:"contained",color:"secondary",className:e.inView?"button visible":"button",type:"submit",onClick:function(){return i((function(e){return!e}))},children:[Object(l.jsx)(C.a,{icon:I.c}),Object(l.jsx)("a",{children:"send"})]})})]})]})};var se=function(){var e=Object(N.a)({threshold:.5,triggerOnce:!0}),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(l.jsxs)("div",{className:"contact",id:"contact",ref:s,children:[Object(l.jsx)(_,{section:"contact",inView:a}),Object(l.jsx)(te,{inView:a})]})},ae=s(63);s(118);function ce(){return Object(l.jsx)("div",{className:"arrow-button",children:Object(l.jsx)("a",{href:"#home",children:Object(l.jsx)(C.a,{icon:I.a})})})}var ie=function(){return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer__Bg",children:[Object(l.jsx)("div",{className:"stars1"}),Object(l.jsx)("div",{className:"stars2"}),Object(l.jsx)("div",{className:"stars3"})]}),Object(l.jsx)("div",{className:"footer__Bg--filtered-layer"}),Object(l.jsxs)(A.a,{container:!0,spacing:2,children:[Object(l.jsx)(A.a,{item:!0,xs:12,className:"footer__grid-item",children:Object(l.jsx)(ce,{scrollTo:"home"})}),Object(l.jsxs)(A.a,{item:!0,xs:12,className:"footer__grid-item",children:[Object(l.jsx)("a",{href:"https://github.com/romanluporini",target:"_blank",children:Object(l.jsx)(C.a,{icon:ae.a,className:"git-icon"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/romanluporini",target:"_blank",children:Object(l.jsx)(C.a,{icon:ae.b,className:"li-icon"})})]}),Object(l.jsx)(A.a,{item:!0,xs:12,className:"footer__grid-item",children:Object(l.jsx)("p",{className:"footer__copy-right",children:"roman luporini - copyright \xa9 2021"})})]})]})};s(119),s(120);var ne=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)("loading"),n=Object(r.a)(i,2),o=n[0],d=n[1],j=0;return Object(a.useEffect)((function(){setInterval((function(){0===j?j++:1===j?(j++,d("loading.")):2===j?(j++,d("loading..")):(j=0,d("loading..."))}),500),setTimeout((function(){c(!1)}),2500)}),[]),Object(l.jsx)("div",{className:"App",children:s?Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"loading-spinner",children:Object(l.jsxs)("div",{className:"loading-spinner__box",children:[Object(l.jsx)("img",{src:z,alt:"loading-spinner"}),Object(l.jsx)("p",{children:o})]})})}):Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)(v,{}),Object(l.jsx)(w,{}),Object(l.jsx)(J,{}),Object(l.jsx)(D,{}),Object(l.jsx)(K,{}),Object(l.jsx)(se,{}),Object(l.jsx)(ie,{})]})})};n.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(ne,{})}),document.getElementById("root"))},44:function(e,t,s){},65:function(e,t,s){},67:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},94:function(e,t,s){},98:function(e,t,s){},99:function(e,t,s){}},[[121,1,2]]]);
//# sourceMappingURL=main.40cc63f0.chunk.js.map