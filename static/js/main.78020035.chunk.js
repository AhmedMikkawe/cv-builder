(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(8),l=n.n(i),o=(n(13),n(3)),r=n(4),s=n(2),d=n(6),j=n(5),m=(n(14),n(0)),h=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.call(this)}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsx)("nav",{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("h1",{children:"CV Builder"})})})}}]),n}(c.Component),u=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).onSaveClick=c.onSaveClick.bind(Object(s.a)(c)),c}return Object(r.a)(n,[{key:"onSaveClick",value:function(e){e.preventDefault(),this.props.clickHandler()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container general-info",children:[Object(m.jsx)("h2",{children:"General Information"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"text",name:"firstName",id:"fname",placeholder:"First Name"})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"text",name:"lastName",id:"lname",placeholder:"Last Name"})})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Email"})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"text",name:"phoneNumber",id:"phone",placeholder:"Phone Number"})})]}),Object(m.jsx)("div",{className:"row row-reversed",children:Object(m.jsx)("button",{type:"submit",className:"save-button",onClick:this.onSaveClick,children:"Save"})})]})]})}}]),n}(c.Component),b=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).onSaveClick=c.onSaveClick.bind(Object(s.a)(c)),c}return Object(r.a)(n,[{key:"onSaveClick",value:function(e){e.preventDefault(),this.props.clickHandler()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"education container",children:[Object(m.jsx)("h2",{children:"Education"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"text",name:"schoolName",id:"scname",placeholder:"School Name"})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"text",name:"majorName",id:"major-name",placeholder:"Major"})})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"date",name:"dateStudy",id:"date-study",placeholder:"Date of Study"})})}),Object(m.jsx)("div",{className:"row row-reversed",children:Object(m.jsx)("button",{type:"submit",className:"save-button",onClick:this.onSaveClick,children:"Save"})})]})]})}}]),n}(c.Component),p=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).onSaveClick=c.onSaveClick.bind(Object(s.a)(c)),c}return Object(r.a)(n,[{key:"onSaveClick",value:function(e){e.preventDefault(),this.props.clickHandler()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"experience container",children:[Object(m.jsx)("h2",{children:"Experience"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"text",name:"companyName",id:"company-name",placeholder:"Company Name"})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"text",name:"positionTitle",id:"position-title",placeholder:"Position Title"})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("label",{htmlFor:"from-experience",children:"From:"}),Object(m.jsx)("input",{type:"date",name:"fromExperience",id:"from-experience",placeholder:"From"})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("label",{htmlFor:"to-experience",children:"To:"}),Object(m.jsx)("input",{type:"date",name:"toExperience",id:"to-experience",placeholder:"To"})]})]}),Object(m.jsx)("div",{className:"row row-reversed",children:Object(m.jsx)("button",{type:"submit",className:"save-button",onClick:this.onSaveClick,children:"Save"})})]})]})}}]),n}(c.Component),O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).handlClose=c.handlClose.bind(Object(s.a)(c)),c}return Object(r.a)(n,[{key:"handlClose",value:function(){document.getElementById("modal").classList.add("hide"),document.body.style.overflow="auto"}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"modal-container hide",id:"modal",children:Object(m.jsxs)("div",{className:"modal",id:"modal2",children:[Object(m.jsx)("div",{className:"row row-reversed",children:Object(m.jsx)("button",{onClick:this.handlClose,id:"close-modal",children:"X"})}),Object(m.jsx)("h2",{children:"Personal Information"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("h3",{children:["Full Name:",this.props.info.general_info.first_name+" "+this.props.info.general_info.last_name]}),Object(m.jsxs)("h4",{children:["Email: ",this.props.info.general_info.email]}),Object(m.jsxs)("h4",{children:["Phone: ",this.props.info.general_info.phone]}),Object(m.jsx)("hr",{}),Object(m.jsx)("h2",{children:"Education Information"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("h3",{children:["School Name: ",this.props.info.education.school_name]}),Object(m.jsxs)("h4",{children:["Major: ",this.props.info.education.major_name]}),Object(m.jsxs)("h4",{children:["Date: ",this.props.info.education.date]})]})})}}]),n}(c.Component),v=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).generalInfoHandler=c.generalInfoHandler.bind(Object(s.a)(c)),c.educationHandler=c.educationHandler.bind(Object(s.a)(c)),c.experienceHandler=c.experienceHandler.bind(Object(s.a)(c)),c.state={general_info:{first_name:"",last_name:"",email:"",phone:""},education:{school_name:"",major_name:"",date:""},experience:{company_name:"",position_title:"",date:{from:"",to:""}}},c}return Object(r.a)(n,[{key:"generalInfoHandler",value:function(){var e=document.getElementById("fname").value,t=document.getElementById("lname").value,n=document.getElementById("email").value,c=document.getElementById("phone").value;this.setState({general_info:{first_name:e,last_name:t,email:n,phone:c}})}},{key:"educationHandler",value:function(){var e=document.getElementById("scname").value,t=document.getElementById("major-name").value,n=document.getElementById("date-study").value;this.setState({education:{school_name:e,major_name:t,date:n}})}},{key:"experienceHandler",value:function(){var e=document.getElementById("company-name").value,t=document.getElementById("position-title").value,n=document.getElementById("from-experience").value,c=document.getElementById("to-experience").value;this.setState({experience:{company_name:e,position_title:t,date:{from:n,to:c}}})}},{key:"preview",value:function(){var e=document.getElementById("modal");e.style.overflowY="scroll",document.getElementById("modal2").style.top="200px",document.body.style.overflow="hidden",e.classList.remove("hide")}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{}),Object(m.jsx)("div",{className:"row center",children:Object(m.jsx)("button",{onClick:this.preview,id:"preview",children:"Preview"})}),Object(m.jsx)(u,{clickHandler:this.generalInfoHandler}),Object(m.jsx)(b,{clickHandler:this.educationHandler}),Object(m.jsx)(p,{clickHandler:this.experienceHandler}),Object(m.jsx)(O,{info:this.state}),Object(m.jsx)("div",{className:"row center",id:"footer",children:Object(m.jsx)("h4",{children:"copyright \xa9 2021 | Ahmed Mikkawe"})})]})}}]),n}(c.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),i(e),l(e)}))};l.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.78020035.chunk.js.map