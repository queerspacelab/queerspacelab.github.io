(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a15cef8a"],{"0a2a":function(t,e,a){},"4a21":function(t,e,a){"use strict";a("57aa")},"57aa":function(t,e,a){},"9e45":function(t,e,a){"use strict";a("0a2a")},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"full-bleed",attrs:{id:"app"}},[e("menu-bar",{attrs:{width:t.isMobileDevice?t.layout.viewWidth:t.layout.menuWidth,isMobileDevice:t.isMobileDevice},on:{click:t.getLayoutDims}}),e("transition",{attrs:{name:"fade"}},[t.$route.params.project?e("projects",{attrs:{index:parseInt(t.$route.params.project),left:t.layout.pageLeft[parseInt(t.$route.params.project)+1]+t.layout.pageWidth,width:t.layout.fullPageWidth+t.layout.pageInterval,author:t.contents[t.$route.params.project].author,title:t.contents[t.$route.params.project].title,link:t.contents[t.$route.params.project].link}}):t._e()],1),e("Footer")],1)},o=[],s=a("fd2d"),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page",style:{width:t.width+"px"},attrs:{id:"menubar"}},[e("router-link",{attrs:{tag:"div",to:"/",id:"logo-container"}},t._l(t.logoCoor,(function(t,a){return e("stud",{key:"stud"+a,staticClass:"stud-logo",attrs:{x:19*t[0]-35,y:19*t[1]-40}})})),1),t.isMobileDevice?e("div",{staticClass:"mobile"},[e("p",[t._v("Please visit the website on your desktop to view projects.")])]):e("div",{staticClass:"white-space",style:{width:t.width+"px",height:t.width+"px"}},[e("div",{staticClass:"arrow-container"},[t._l(5,(function(a){return e("stud",{key:"arrow-left-top"+a,attrs:{y:0===Object.keys(t.$route.params).length?Math.random()*t.width:t.width/2-10*(a-1),x:0===Object.keys(t.$route.params).length?Math.random()*(t.width-80)+40:t.width/2-15+10*a}})})),t._l(5,(function(a){return e("stud",{key:"arrow-left-bot"+a,attrs:{y:0===Object.keys(t.$route.params).length?Math.random()*t.width:t.width/2+10*(a-1),x:0===Object.keys(t.$route.params).length?Math.random()*(t.width-80)+40:t.width/2-15+10*a}})})),t._l(6,(function(a){return e("stud",{key:"arrow-left-top"+a+5,attrs:{y:0===Object.keys(t.$route.params).length?Math.random()*t.width:t.width/2-10*(a-1),x:0===Object.keys(t.$route.params).length?Math.random()*(t.width-80)+40:t.width/2-45+10*a}})})),t._l(6,(function(a){return e("stud",{key:"arrow-left-bot"+a+5,attrs:{y:0===Object.keys(t.$route.params).length?Math.random()*t.width:t.width/2+10*(a-1),x:0===Object.keys(t.$route.params).length?Math.random()*(t.width-80)+40:t.width/2-45+10*a}})})),e("router-link",{staticClass:"click-zone",attrs:{tag:"div",to:"/"}})],2)]),e("div",{attrs:{id:"menu"}},[e("router-link",{attrs:{to:"/"}},[e("h2",[t._v("HOME")])]),e("router-link",{attrs:{to:"/team",exact:""}},[e("h2",[t._v("TEAM")])]),e("router-link",{attrs:{to:"/about",exact:""}},[e("h2",[t._v("ABOUT")])]),e("router-link",{attrs:{to:"/acknowledgments",exact:""}},[e("h2",[t._v("ACKNOWLEDGEMENTS")])])],1)],1)},h=[],n=a("bb17"),l={name:"MenuBar",data(){return{logoCoor:[[4.8102,4.569],[7.0941,4.569],[8.7642,4.569],[9.9412,4.569],[10.5064,4.569],[11.0809,4.569],[12.5344,4.569],[13.0996,4.569],[13.674,4.569],[15.0998,4.569],[15.665,4.569],[16.2395,4.569],[4.0385,5.0525],[5.7101,5.0525],[16.493,5.0525],[7.0941,5.5596],[8.7642,5.5596],[9.9486,5.5596],[12.5298,5.5596],[15.1116,5.5596],[16.7908,5.5596],[4.0385,6.0212],[5.7101,6.0212],[10.2225,6.0212],[10.7878,6.0212],[11.3622,6.0212],[12.803,6.0212],[13.3683,6.0212],[13.9427,6.0212],[15.3791,6.0212],[15.9443,6.0212],[16.5188,6.0212],[7.0941,6.5234],[8.7851,6.5234],[9.9412,6.5234],[12.5494,6.5234],[15.0998,6.5234],[16.2395,6.5234],[4.0385,6.9898],[5.7101,6.9898],[7.3616,6.9898],[8.4967,6.9898],[16.5188,6.9898],[4.8102,7.4872],[5.973,7.4872],[7.664,7.4872],[8.2292,7.4872],[9.9458,7.4872],[10.511,7.4872],[11.0855,7.4872],[12.5344,7.4872],[13.0996,7.4872],[13.674,7.4872],[15.1209,7.4872],[16.8093,7.4872],[6.2707,7.9805],[5.3678,9.2],[5.933,9.2],[7.3844,9.2],[7.9496,9.2],[8.5241,9.2],[11.144,9.2],[13.5958,9.2],[14.161,9.2],[14.7355,9.2],[15.8925,9.2],[16.4578,9.2],[17.0322,9.2],[3.9045,9.7593],[4.9741,9.7593],[6.245,9.7593],[8.8458,9.7593],[10.892,9.7593],[11.4665,9.7593],[13.3578,9.7593],[5.3984,10.2387],[7.4104,10.2387],[9.0993,10.2387],[10.6048,10.2387],[11.7445,10.2387],[15.9232,10.2387],[5.7101,10.7165],[7.7061,10.7165],[8.2713,10.7165],[8.8458,10.7165],[10.3268,10.7165],[12.0259,10.7165],[13.3729,10.7165],[16.2025,10.7165],[16.7769,10.7165],[17.3498,10.7165],[5.9776,11.1952],[7.4104,11.1952],[15.9232,11.1952],[4.9741,11.6884],[6.245,11.6884],[10.3268,11.6884],[10.892,11.6884],[11.4665,11.6884],[12.0191,11.6884],[13.3683,11.6884],[5.4077,12.1725],[5.973,12.1725],[7.4104,12.1725],[10.0424,12.1725],[12.3215,12.1725],[13.6361,12.1725],[14.2014,12.1725],[14.7758,12.1725],[15.9232,12.1725],[16.4884,12.1725],[17.0629,12.1725],[4.0763,13.4264],[7.2738,13.4264],[9.4376,13.4264],[10.0029,13.4264],[10.5773,13.4264],[6.954,13.9197],[7.5274,13.9197],[10.8448,13.9197],[4.0763,14.4031],[6.6866,14.4031],[7.826,14.4031],[9.4194,14.4031],[11.1333,14.4031],[6.4052,14.8866],[8.1247,14.8866],[9.7261,14.8866],[10.2914,14.8866],[10.8658,14.8866],[4.0763,15.3799],[9.4237,15.3799],[11.1363,15.3799],[14.0794,15.3799],[6.4036,15.8623],[6.9688,15.8623],[7.5433,15.8623],[8.1162,15.8623],[11.4144,15.8623],[4.0955,16.3533],[4.5898,16.3533],[5.0259,16.3533],[6.1222,16.3533],[8.3782,16.3533],[9.4237,16.3533],[9.989,16.3533],[10.5634,16.3533],[11.1363,16.3533]]}},props:{isMobileDevice:Boolean,width:Number},components:{Stud:n["a"]}},u=l,d=(a("9e45"),a("2877")),c=Object(d["a"])(u,r,h,!1,null,"24db8603",null),p=c.exports,g=a("8cca"),y={name:"Home",components:{Projects:g["a"],MenuBar:p,Footer:s["a"]},created(){window.addEventListener("resize",this.getLayoutDims)},mounted(){this.isMobileDevice&&console.log("mobile device detected"),this.importData(),this.noOfProjects=Object.keys(this.contents).length,this.getLayoutDims()},data(){return{isMobileDevice:!1,noOfProjects:"",contents:"",showProject:this.$route.params.project,layout:{viewHeight:0,viewWidth:"",marginRight:80,menuWidth:340,pageWidth:400,fullPageWidth:600,pageInterval:"",pageLeft:new Array(6)},rightColumnWidth:80,clickedIndex:!1,routeParam:""}},watch:{"$route.params":{handler:function(){this.getLayoutDims()}}},methods:{clickedIndexFunc(t){this.clickedIndex=t},importData(){this.contents=a("dd57")},getLayoutDims(){this.routeParam=this.$route.params.page?"page":this.$route.params.project?this.$route.params.project:"home";let t=this.routeParam;this.layout.viewHeight=window.innerHeight,this.layout.viewWidth=window.innerWidth;let e=this.layout.menuWidth,a=this.layout.viewWidth-this.layout.menuWidth;if(this.layout.fullPageWidth=.7*a>1080?1080:.7*a<400?400:.7*a,"home"===t){this.layout.pageInterval=(this.layout.viewWidth-e-this.layout.marginRight)/this.noOfProjects;for(let t=0;t<this.noOfProjects;t++)this.layout.pageLeft[t]=this.layout.viewWidth-this.layout.marginRight-this.layout.pageWidth-this.layout.pageInterval*t}else{if("page"!==t){e+=this.layout.fullPageWidth,this.layout.pageInterval=(this.layout.viewWidth-e-this.layout.marginRight)/this.noOfProjects;for(let e=0;e<this.noOfProjects;e++)e>parseInt(t)?this.layout.pageLeft[e]=this.layout.menuWidth+this.layout.pageInterval*(this.noOfProjects-e)-this.layout.pageWidth:this.layout.pageLeft[e]=this.layout.viewWidth-this.layout.marginRight-this.layout.pageWidth-this.layout.pageInterval*e;return}e+=this.layout.fullPageWidth}this.layout.pageInterval=(this.layout.viewWidth-e-this.layout.marginRight)/this.noOfProjects;for(let i=0;i<this.noOfProjects;i++)this.layout.pageLeft[i]=this.layout.viewWidth-this.layout.marginRight-this.layout.pageWidth-this.layout.pageInterval*i}}},m=y,w=(a("4a21"),Object(d["a"])(m,i,o,!1,null,"aaf44fe0",null));e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-a15cef8a.2c32b6c8.js.map