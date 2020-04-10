webpackJsonp(["demo-collapse.module"],{"81VH":function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'collapse-demo',\n  templateUrl: './basic.html'\n})\nexport class CollapseDemoComponent {\n  isCollapsed: boolean = false;\n\n  collapsed(event: any): void {\n    console.log(event);\n  }\n\n  expanded(event: any): void {\n    console.log(event);\n  }\n}\n"},ANhM:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("3j3K"),t=function(){return function(){}}(),u=e("2rQb"),a=e("dGTz"),s=e("Eg9J"),c=e("q/YI"),p=e("vPBN"),i=e("6m1h"),r=e("xweS"),d=e("LSm8"),_=e("RFL4"),m=e("0T8C"),b=function(){function l(){this.isCollapsed=!1}return l.prototype.collapsed=function(l){console.log(l)},l.prototype.expanded=function(l){console.log(l)},l}(),f=function(){return function(){this.isOpen=!1}}(),g=e("h7ch"),h=e("I5Bp"),v=e("89Xz"),C=e("mHEN"),y=[{name:"Usage",anchor:"usage",outlet:g.a,content:{doc:e("gYt/")}},{name:"Examples",anchor:"examples",outlet:h.a,content:[{title:"Basic",anchor:"basic",component:e("81VH"),html:e("Zdfw"),outlet:b},{title:"Manual toggle",anchor:"manual-toggle",component:e("nMoR"),html:e("jbFx"),outlet:f}]},{name:"API Reference",anchor:"api-reference",outlet:v.a,content:[{title:"CollapseDirective",anchor:"collapse-directive",outlet:C.b}]}],x=function(){return function(){this.name="Collapse",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/collapse",this.componentContent=y}}(),w=o._19({encapsulation:2,styles:[],data:{}});function k(l){return o._45(2,[(l()(),o._22(0,null,null,14,"demo-section",[],null,null,null,r.b,r.a)),o._20(49152,null,0,d.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(l()(),o._43(0,["\n  "])),(l()(),o._22(0,null,0,7,"p",[],null,null,null,null,null)),(l()(),o._43(null,["Collapse component allows you to toggle content on your pages with a bit of JavaScript and some\n  classes. Flexible component that utilizes a handful of classes (from the "])),(l()(),o._22(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),o._43(null,["required transitions\n  component"])),(l()(),o._43(null,["("])),(l()(),o._22(0,null,null,1,"em",[],null,null,null,null,null)),(l()(),o._43(null,["not yet implemented"])),(l()(),o._43(null,[")) for easy toggle behavior."])),(l()(),o._43(0,["\n\n  "])),(l()(),o._22(0,null,0,1,"docs-section",[],null,null,null,_.b,_.a)),o._20(49152,null,0,m.a,[o.y],{content:[0,"content"]},null),(l()(),o._43(0,["\n"])),(l()(),o._43(null,["\n"]))],function(l,n){var e=n.component;l(n,1,0,e.name,e.src,e.componentContent),l(n,13,0,e.componentContent)},null)}var M=o._17("collapse-section",x,function(l){return o._45(0,[(l()(),o._22(0,null,null,1,"collapse-section",[],null,null,null,k,w)),o._20(49152,null,0,x,[],null,null)],null,null)},{},{},[]),E=e("yASy"),S=o._19({encapsulation:2,styles:[],data:{}});function F(l){return o._45(0,[(l()(),o._22(0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var o=!0,t=l.component;"click"===n&&(o=!1!=(t.isCollapsed=!t.isCollapsed)&&o);return o},null,null)),(l()(),o._43(null,["Toggle collapse\n"])),(l()(),o._43(null,["\n"])),(l()(),o._22(0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),o._43(null,["\n"])),(l()(),o._22(0,null,null,5,"div",[["class","card card-block card-header"]],[[2,"collapse",null],[4,"display",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],[[null,"collapsed"],[null,"expanded"]],function(l,n,e){var o=!0,t=l.component;"collapsed"===n&&(o=!1!==t.collapsed(e)&&o);"expanded"===n&&(o=!1!==t.expanded(e)&&o);return o},null,null)),o._20(16384,null,0,E.a,[o.p,o.Q],{collapse:[0,"collapse"]},{collapsed:"collapsed",expanded:"expanded"}),(l()(),o._43(null,["\n  "])),(l()(),o._22(0,null,null,1,"div",[["class","well well-lg"]],null,null,null,null,null)),(l()(),o._43(null,["Some content"])),(l()(),o._43(null,["\n"])),(l()(),o._43(null,["\n"]))],function(l,n){l(n,6,0,n.component.isCollapsed)},function(l,n){l(n,5,0,o._35(n,6).isCollapse,o._35(n,6).display,o._35(n,6).isExpanded,o._35(n,6).isExpanded,o._35(n,6).isExpanded,o._35(n,6).isCollapsed,o._35(n,6).isCollapsing)})}var N=o._17("collapse-demo",b,function(l){return o._45(0,[(l()(),o._22(0,null,null,1,"collapse-demo",[],null,null,null,F,S)),o._20(49152,null,0,b,[],null,null)],null,null)},{},{},[]),O=o._19({encapsulation:2,styles:[],data:{}});function z(l){return o._45(0,[(l()(),o._22(0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0;"click"===n&&(t=!1!==o._35(l,9).show()&&t);return t},null,null)),(l()(),o._43(null,["Show content\n"])),(l()(),o._43(null,["\n"])),(l()(),o._22(0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0;"click"===n&&(t=!1!==o._35(l,9).hide()&&t);return t},null,null)),(l()(),o._43(null,["Hide content\n"])),(l()(),o._43(null,["\n"])),(l()(),o._22(0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),o._43(null,["\n"])),(l()(),o._22(0,null,null,5,"div",[["class","card card-block card-header"]],[[2,"collapse",null],[4,"display",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],null,null,null,null)),o._20(16384,[["collapse",4]],0,E.a,[o.p,o.Q],{collapse:[0,"collapse"]},null),(l()(),o._43(null,["\n  "])),(l()(),o._22(0,null,null,1,"div",[["class","well well-lg"]],null,null,null,null,null)),(l()(),o._43(null,["Some content"])),(l()(),o._43(null,["\n"])),(l()(),o._43(null,["\n"]))],function(l,n){l(n,9,0,n.component.isOpen)},function(l,n){l(n,8,0,o._35(n,9).isCollapse,o._35(n,9).display,o._35(n,9).isExpanded,o._35(n,9).isExpanded,o._35(n,9).isExpanded,o._35(n,9).isCollapsed,o._35(n,9).isCollapsing)})}var D=o._17("toggle-manual-demo",f,function(l){return o._45(0,[(l()(),o._22(0,null,null,1,"toggle-manual-demo",[],null,null,null,z,O)),o._20(49152,null,0,f,[],null,null)],null,null)},{},{},[]),R=e("2Je8"),j=e("NVOs"),H=e("P73M"),T=e("5oXY"),q=e("ElZy"),A=e("bgXz"),B=e("7QEy"),J=e("CCBf"),P=e("FFde"),Q=e("lCeh");e.d(n,"DemoCollapseModuleNgFactory",function(){return Y});var Y=o._18(t,[],function(l){return o._32([o._33(512,o.m,o._14,[[8,[u.a,a.a,s.a,c.a,p.a,i.a,M,N,D]],[3,o.m],o.G]),o._33(4608,R.p,R.o,[o.C]),o._33(4608,j.z,j.z,[]),o._33(4608,H.a,H.a,[R.i,T.n]),o._33(4608,q.a,q.a,[]),o._33(4608,A.a,A.a,[]),o._33(512,B.a,B.a,[]),o._33(512,R.c,R.c,[]),o._33(512,j.w,j.w,[]),o._33(512,j.k,j.k,[]),o._33(512,J.a,J.a,[]),o._33(512,C.d,C.d,[]),o._33(512,T.q,T.q,[[2,T.v],[2,T.n]]),o._33(512,h.b,h.b,[]),o._33(512,v.b,v.b,[]),o._33(512,g.b,g.b,[]),o._33(512,P.a,P.a,[]),o._33(512,Q.a,Q.a,[]),o._33(512,t,t,[]),o._33(1024,T.l,function(){return[[{path:"",component:x}]]},[])])})},Zdfw:function(l,n){l.exports='<button type="button" class="btn btn-primary"\n        (click)="isCollapsed = !isCollapsed">Toggle collapse\n</button>\n<hr>\n<div (collapsed)="collapsed($event)"\n     (expanded)="expanded($event)"\n     [collapse]="isCollapsed"\n     class="card card-block card-header">\n  <div class="well well-lg">Some content</div>\n</div>\n'},"gYt/":function(l,n){l.exports="// RECOMMENDED (doesn't work with system.js)\nimport { CollapseModule } from 'ngx-bootstrap/collapse';\n// or\nimport { CollapseModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [CollapseModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},jbFx:function(l,n){l.exports='<button type="button" class="btn btn-primary"\n        (click)="collapse.show()">Show content\n</button>\n<button type="button" class="btn btn-primary"\n        (click)="collapse.hide()">Hide content\n</button>\n<hr>\n<div #collapse="bs-collapse" [collapse]="isOpen"\n     class="card card-block card-header">\n  <div class="well well-lg">Some content</div>\n</div>\n'},nMoR:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'toggle-manual-demo',\n  templateUrl: './toggle-manual.html'\n})\nexport class ToggleManualDemoComponent {\n  isOpen = false;\n}\n"}});