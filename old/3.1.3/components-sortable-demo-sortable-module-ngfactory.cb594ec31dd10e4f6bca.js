(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+6bh":function(l,n,e){"use strict";e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r});var t=e("CcnG"),a=e("Ip0R"),u=(e("oxqd"),t.Ka({encapsulation:2,styles:[],data:{}}));function o(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function s(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Ea(16777216,null,null,1,null,o)),t.La(2,671744,null,0,a.l,[t.O],{ngComponentOutlet:[0,"ngComponentOutlet"],ngComponentOutletInjector:[1,"ngComponentOutletInjector"]},null),(l()(),t.Ea(0,null,null,0))],function(l,n){l(n,2,0,n.context.$implicit.outlet,n.component.sectionInjections(n.context.$implicit))},null)}function r(l){return t.gb(2,[(l()(),t.Ea(16777216,null,null,1,null,s)),t.La(1,802816,null,0,a.m,[t.O,t.L,t.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0,n.component.content)},null)}},"7tiV":function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'custom-item-template-demo',\n  templateUrl: './custom-item-template.html'\n})\nexport class CustomItemTemplateDemoComponent {\n  itemStringsLeft: any[] = [\n    'Windstorm',\n    'Bombasto',\n    'Magneta',\n    'Tornado'\n  ];\n\n  itemStringsRight: any[] = ['Mr. O', 'Tomato'];\n}\n"},"8Uhv":function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'basic-demo',\n  templateUrl: './basic.component.html'\n})\nexport class DemoBasicComponent {\n  itemStringsLeft = [\n    'Windstorm',\n    'Bombasto',\n    'Magneta',\n    'Tornado'\n  ];\n\n  itemStringsRight = ['Mr. O', 'Tomato'];\n}\n"},"8bSC":function(l,n){l.exports="// RECOMMENDED\nimport { SortableModule } from 'ngx-bootstrap/sortable';\n// or\nimport { SortableModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [SortableModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},BUDj:function(l,n){l.exports='<div class="row">\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemObjectsLeft"\n      fieldName="name"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="sortable-item"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">{{ itemObjectsLeft | json }}</pre>\n  </div>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemObjectsRight"\n      fieldName="name"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="sortable-item"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">{{ itemObjectsRight | json }}</pre>\n  </div>\n</div>\n'},CUVN:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'complex-datamodel-demo',\n  templateUrl: './complex-datamodel.component.html'\n})\nexport class ComplexDatamodelDemoComponent {\n  itemObjectsLeft: any[] = [\n    { id: 1, name: 'Windstorm' },\n    { id: 2, name: 'Bombasto' },\n    { id: 3, name: 'Magneta' }\n  ];\n\n  itemObjectsRight: any[] = [\n    { id: 4, name: 'Tornado' },\n    { id: 5, name: 'Mr. O' },\n    { id: 6, name: 'Tomato' }\n  ];\n}\n"},HOav:function(l,n){l.exports='<div class="row">\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsLeft"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">model: {{ itemStringsLeft | json }}</pre>\n  </div>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsRight"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="sortable-item"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">model: {{ itemStringsRight | json }}</pre>\n  </div>\n</div>\n'},HkXR:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),a=function(){},u=e("+R8e"),o=e("R23a"),s=e("7ctM"),r=e("A8CJ"),i=e("qzmI"),c=e("BFzJ"),m=e("/jpH"),d=e("ybC4"),p=e("+6bh"),g=e("oxqd"),b=function(){this.itemStringsLeft=["Windstorm","Bombasto","Magneta","Tornado"],this.itemStringsRight=["Mr. O","Tomato"]},C=function(){this.itemObjectsLeft=[{id:1,name:"Windstorm"},{id:2,name:"Bombasto"},{id:3,name:"Magneta"}],this.itemObjectsRight=[{id:4,name:"Tornado"},{id:5,name:"Mr. O"},{id:6,name:"Tomato"}]},h=function(){this.itemStringsLeft=["Windstorm","Bombasto","Magneta","Tornado"],this.itemStringsRight=["Mr. O","Tomato"]},v=e("ClAA"),f=e("y20O"),M=e("nk7K"),w=e("l3GJ"),x=function(){},L=[{name:"Usage",anchor:"usage",outlet:v.a,content:{doc:e("8bSC")}},{name:"Examples",anchor:"examples",outlet:f.a,content:[{title:"Basic",anchor:"basic",component:e("8Uhv"),html:e("HOav"),outlet:b},{title:"Complex data model",anchor:"complexDatamodel",component:e("CUVN"),html:e("BUDj"),outlet:C},{title:"Custom item template",anchor:"itemTemplate",component:e("7tiV"),html:e("bmUx"),outlet:h},{title:"Accessibility",anchor:"accessibility",outlet:x}]},{name:"API Reference",anchor:"api-reference",outlet:M.a,content:[{title:"SortableComponent",anchor:"sortable-component",outlet:w.b}]}],I=function(){return function(){this.name="Sortable",this.src="https://github.com/valor-software/ngx-bootstrap/blob/development/src/sortable",this.componentContent=L}}(),W=t.Ka({encapsulation:2,styles:["\n    .sortable-item {\n      padding: 6px 12px;\n      margin-bottom: 4px;\n      font-size: 14px;\n      line-height: 1.4em;\n      text-align: center;\n      cursor: grab;\n      border: 1px solid transparent;\n      border-radius: 4px;\n      border-color: #adadad;\n    }\n\n    .sortable-item-active {\n      background-color: #e6e6e6;\n      box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n    }\n\n    .sortable-wrapper {\n      min-height: 150px;\n    }\n  "],data:{}});function y(l){return t.gb(2,[(l()(),t.Ma(0,0,null,null,26,"demo-section",[],null,null,null,m.b,m.a)),t.La(1,49152,null,0,d.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(l()(),t.Ma(2,0,null,0,10,"p",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["The "])),(l()(),t.Ma(4,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["sortable component"])),(l()(),t.eb(-1,null,[" represents a list of items, with ability to sort them or move to another container via drag&drop. Input collection isn't mutated by the component, so events "])),(l()(),t.Ma(7,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["ngModelChange"])),(l()(),t.eb(-1,null,[", "])),(l()(),t.Ma(10,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["onChange"])),(l()(),t.eb(-1,null,[" are using new collections."])),(l()(),t.Ma(13,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["The easiest way to add the sortable component to your app (will be added to the root module)"])),(l()(),t.Ma(15,0,null,0,9,"pre",[["class","prettyprint lang-bash prettyprinted"]],null,null,null,null,null)),(l()(),t.Ma(16,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["ng add ngx"])),(l()(),t.Ma(18,0,null,null,1,"span",[["class","pun"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["-"])),(l()(),t.Ma(20,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["bootstrap "])),(l()(),t.eb(-1,null,[" --component "])),(l()(),t.Ma(23,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["sortable"])),(l()(),t.Ma(25,0,null,0,1,"docs-section",[],null,null,null,p.b,p.a)),t.La(26,49152,null,0,g.a,[t.p],{content:[0,"content"]},null)],function(l,n){var e=n.component;l(n,1,0,e.name,e.src,e.componentContent),l(n,26,0,e.componentContent)},null)}var S=t.Ia("sortable-section",I,function(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,1,"sortable-section",[],null,null,null,y,W)),t.La(1,49152,null,0,I,[],null,null)],null,null)},{},{},[]),D=e("a5ur"),O=e("Ip0R"),U=e("gIcY"),T=t.Ka({encapsulation:2,styles:[],data:{}});function A(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,3,"div",[],null,[[null,"dragover"],[null,"dragenter"]],function(l,n,e){var t=!0,a=l.component;return"dragover"===n&&(t=!1!==a.onItemDragover(e,0)&&t),"dragenter"===n&&(t=!1!==a.cancelEvent(e)&&t),t},null,null)),t.La(1,278528,null,0,O.k,[t.q,t.r,t.k,t.D],{ngClass:[0,"ngClass"]},null),t.La(2,278528,null,0,O.q,[t.r,t.k,t.D],{ngStyle:[0,"ngStyle"]},null),(l()(),t.eb(3,null,["",""]))],function(l,n){var e=n.component;l(n,1,0,e.placeholderClass),l(n,2,0,e.placeholderStyle)},function(l,n){l(n,3,0,n.component.placeholderItem)})}function R(l){return t.gb(0,[(l()(),t.Ea(0,null,null,0))],null,null)}function j(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,6,"div",[["aria-dropeffect","move"],["draggable","true"]],[[1,"aria-grabbed",0]],[[null,"dragstart"],[null,"dragend"],[null,"dragover"],[null,"dragenter"]],function(l,n,e){var t=!0,a=l.component;return"dragstart"===n&&(t=!1!==a.onItemDragstart(e,l.context.$implicit,l.context.index)&&t),"dragend"===n&&(t=!1!==a.resetActiveItem(e)&&t),"dragover"===n&&(t=!1!==a.onItemDragover(e,l.context.index)&&t),"dragenter"===n&&(t=!1!==a.cancelEvent(e)&&t),t},null,null)),t.La(1,278528,null,0,O.k,[t.q,t.r,t.k,t.D],{ngClass:[0,"ngClass"]},null),t.Xa(2,2),t.La(3,278528,null,0,O.q,[t.r,t.k,t.D],{ngStyle:[0,"ngStyle"]},null),(l()(),t.Ea(16777216,null,null,2,null,R)),t.La(5,540672,null,0,O.t,[t.O],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),t.Za(6,{item:0,index:1})],function(l,n){var e=n.component;l(n,1,0,l(n,2,0,e.itemClass,n.context.index===e.activeItem?e.itemActiveClass:"")),l(n,3,0,e.getItemStyle(n.context.index===e.activeItem)),l(n,5,0,l(n,6,0,n.context.$implicit,n.context.index),e.itemTemplate||t.Wa(n.parent,7))},function(l,n){l(n,0,0,n.context.index===n.component.activeItem)})}function k(l){return t.gb(0,[(l()(),t.eb(0,null,["",""]))],null,function(l,n){l(n,0,0,n.context.item.value)})}function E(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,6,"div",[],null,[[null,"dragover"],[null,"dragenter"],[null,"drop"],[null,"mouseleave"]],function(l,n,e){var t=!0,a=l.component;return"dragover"===n&&(t=!1!==a.cancelEvent(e)&&t),"dragenter"===n&&(t=!1!==a.cancelEvent(e)&&t),"drop"===n&&(t=!1!==a.resetActiveItem(e)&&t),"mouseleave"===n&&(t=!1!==a.resetActiveItem(e)&&t),t},null,null)),t.La(1,278528,null,0,O.k,[t.q,t.r,t.k,t.D],{ngClass:[0,"ngClass"]},null),t.La(2,278528,null,0,O.q,[t.r,t.k,t.D],{ngStyle:[0,"ngStyle"]},null),(l()(),t.Ea(16777216,null,null,1,null,A)),t.La(4,16384,null,0,O.n,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Ea(16777216,null,null,1,null,j)),t.La(6,802816,null,0,O.m,[t.O,t.L,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ea(0,[["defItemTemplate",2]],null,0,null,k))],function(l,n){var e=n.component;l(n,1,0,e.wrapperClass),l(n,2,0,e.wrapperStyle),l(n,4,0,e.showPlaceholder),l(n,6,0,e.items)},null)}var q=t.Ka({encapsulation:2,styles:[],data:{}});function P(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ma(1,0,null,null,9,"div",[["class","col-xs-6 col-6 col-md-5 col-lg-3"]],null,null,null,null,null)),(l()(),t.Ma(2,0,null,null,5,"bs-sortable",[["itemActiveClass","sortable-item-active"],["itemClass","sortable-item"],["placeholderClass","placeholderStyle"],["placeholderItem","Drag here"],["wrapperClass","sortable-wrapper"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var t=!0;return"ngModelChange"===n&&(t=!1!==(l.component.itemStringsLeft=e)&&t),t},E,T)),t.La(3,49152,null,0,D.b,[D.a],{wrapperClass:[0,"wrapperClass"],itemClass:[1,"itemClass"],itemActiveClass:[2,"itemActiveClass"],placeholderClass:[3,"placeholderClass"],placeholderItem:[4,"placeholderItem"]},null),t.bb(1024,null,U.m,function(l){return[l]},[D.b]),t.La(5,671744,null,0,U.r,[[8,null],[8,null],[8,null],[6,U.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.bb(2048,null,U.n,null,[U.r]),t.La(7,16384,null,0,U.o,[[4,U.n]],null,null),(l()(),t.Ma(8,0,null,null,2,"pre",[["class","code-preview"]],null,null,null,null,null)),(l()(),t.eb(9,null,["model: ",""])),t.Ya(0,O.g,[]),(l()(),t.Ma(11,0,null,null,9,"div",[["class","col-xs-6 col-6 col-md-5 col-lg-3"]],null,null,null,null,null)),(l()(),t.Ma(12,0,null,null,5,"bs-sortable",[["itemActiveClass","sortable-item-active"],["itemClass","sortable-item"],["placeholderClass","sortable-item"],["placeholderItem","Drag here"],["wrapperClass","sortable-wrapper"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var t=!0;return"ngModelChange"===n&&(t=!1!==(l.component.itemStringsRight=e)&&t),t},E,T)),t.La(13,49152,null,0,D.b,[D.a],{wrapperClass:[0,"wrapperClass"],itemClass:[1,"itemClass"],itemActiveClass:[2,"itemActiveClass"],placeholderClass:[3,"placeholderClass"],placeholderItem:[4,"placeholderItem"]},null),t.bb(1024,null,U.m,function(l){return[l]},[D.b]),t.La(15,671744,null,0,U.r,[[8,null],[8,null],[8,null],[6,U.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.bb(2048,null,U.n,null,[U.r]),t.La(17,16384,null,0,U.o,[[4,U.n]],null,null),(l()(),t.Ma(18,0,null,null,2,"pre",[["class","code-preview"]],null,null,null,null,null)),(l()(),t.eb(19,null,["model: ",""])),t.Ya(0,O.g,[])],function(l,n){var e=n.component;l(n,3,0,"sortable-wrapper","sortable-item","sortable-item-active","placeholderStyle","Drag here"),l(n,5,0,e.itemStringsLeft),l(n,13,0,"sortable-wrapper","sortable-item","sortable-item-active","sortable-item","Drag here"),l(n,15,0,e.itemStringsRight)},function(l,n){var e=n.component;l(n,2,0,t.Wa(n,7).ngClassUntouched,t.Wa(n,7).ngClassTouched,t.Wa(n,7).ngClassPristine,t.Wa(n,7).ngClassDirty,t.Wa(n,7).ngClassValid,t.Wa(n,7).ngClassInvalid,t.Wa(n,7).ngClassPending),l(n,9,0,t.fb(n,9,0,t.Wa(n,10).transform(e.itemStringsLeft))),l(n,12,0,t.Wa(n,17).ngClassUntouched,t.Wa(n,17).ngClassTouched,t.Wa(n,17).ngClassPristine,t.Wa(n,17).ngClassDirty,t.Wa(n,17).ngClassValid,t.Wa(n,17).ngClassInvalid,t.Wa(n,17).ngClassPending),l(n,19,0,t.fb(n,19,0,t.Wa(n,20).transform(e.itemStringsRight)))})}var N=t.Ia("basic-demo",b,function(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,1,"basic-demo",[],null,null,null,P,q)),t.La(1,49152,null,0,b,[],null,null)],null,null)},{},{},[]),B=t.Ka({encapsulation:2,styles:[],data:{}});function V(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ma(1,0,null,null,9,"div",[["class","col-xs-6 col-6 col-md-5 col-lg-3"]],null,null,null,null,null)),(l()(),t.Ma(2,0,null,null,5,"bs-sortable",[["fieldName","name"],["itemActiveClass","sortable-item-active"],["itemClass","sortable-item"],["placeholderClass","sortable-item"],["placeholderItem","Drag here"],["wrapperClass","sortable-wrapper"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var t=!0;return"ngModelChange"===n&&(t=!1!==(l.component.itemObjectsLeft=e)&&t),t},E,T)),t.La(3,49152,null,0,D.b,[D.a],{fieldName:[0,"fieldName"],wrapperClass:[1,"wrapperClass"],itemClass:[2,"itemClass"],itemActiveClass:[3,"itemActiveClass"],placeholderClass:[4,"placeholderClass"],placeholderItem:[5,"placeholderItem"]},null),t.bb(1024,null,U.m,function(l){return[l]},[D.b]),t.La(5,671744,null,0,U.r,[[8,null],[8,null],[8,null],[6,U.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.bb(2048,null,U.n,null,[U.r]),t.La(7,16384,null,0,U.o,[[4,U.n]],null,null),(l()(),t.Ma(8,0,null,null,2,"pre",[["class","code-preview"]],null,null,null,null,null)),(l()(),t.eb(9,null,["",""])),t.Ya(0,O.g,[]),(l()(),t.Ma(11,0,null,null,9,"div",[["class","col-xs-6 col-6 col-md-5 col-lg-3"]],null,null,null,null,null)),(l()(),t.Ma(12,0,null,null,5,"bs-sortable",[["fieldName","name"],["itemActiveClass","sortable-item-active"],["itemClass","sortable-item"],["placeholderClass","sortable-item"],["placeholderItem","Drag here"],["wrapperClass","sortable-wrapper"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var t=!0;return"ngModelChange"===n&&(t=!1!==(l.component.itemObjectsRight=e)&&t),t},E,T)),t.La(13,49152,null,0,D.b,[D.a],{fieldName:[0,"fieldName"],wrapperClass:[1,"wrapperClass"],itemClass:[2,"itemClass"],itemActiveClass:[3,"itemActiveClass"],placeholderClass:[4,"placeholderClass"],placeholderItem:[5,"placeholderItem"]},null),t.bb(1024,null,U.m,function(l){return[l]},[D.b]),t.La(15,671744,null,0,U.r,[[8,null],[8,null],[8,null],[6,U.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.bb(2048,null,U.n,null,[U.r]),t.La(17,16384,null,0,U.o,[[4,U.n]],null,null),(l()(),t.Ma(18,0,null,null,2,"pre",[["class","code-preview"]],null,null,null,null,null)),(l()(),t.eb(19,null,["",""])),t.Ya(0,O.g,[])],function(l,n){var e=n.component;l(n,3,0,"name","sortable-wrapper","sortable-item","sortable-item-active","sortable-item","Drag here"),l(n,5,0,e.itemObjectsLeft),l(n,13,0,"name","sortable-wrapper","sortable-item","sortable-item-active","sortable-item","Drag here"),l(n,15,0,e.itemObjectsRight)},function(l,n){var e=n.component;l(n,2,0,t.Wa(n,7).ngClassUntouched,t.Wa(n,7).ngClassTouched,t.Wa(n,7).ngClassPristine,t.Wa(n,7).ngClassDirty,t.Wa(n,7).ngClassValid,t.Wa(n,7).ngClassInvalid,t.Wa(n,7).ngClassPending),l(n,9,0,t.fb(n,9,0,t.Wa(n,10).transform(e.itemObjectsLeft))),l(n,12,0,t.Wa(n,17).ngClassUntouched,t.Wa(n,17).ngClassTouched,t.Wa(n,17).ngClassPristine,t.Wa(n,17).ngClassDirty,t.Wa(n,17).ngClassValid,t.Wa(n,17).ngClassInvalid,t.Wa(n,17).ngClassPending),l(n,19,0,t.fb(n,19,0,t.Wa(n,20).transform(e.itemObjectsRight)))})}var Y=t.Ia("complex-datamodel-demo",C,function(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,1,"complex-datamodel-demo",[],null,null,null,V,B)),t.La(1,49152,null,0,C,[],null,null)],null,null)},{},{},[]),K=t.Ka({encapsulation:2,styles:[],data:{}});function F(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.eb(1,null,["",": ",""]))],null,function(l,n){l(n,1,0,n.context.index,n.context.item.value)})}function H(l){return t.gb(0,[(l()(),t.Ea(0,[["itemTemplate",2]],null,0,null,F)),(l()(),t.Ma(1,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ma(2,0,null,null,9,"div",[["class","col-xs-6 col-6 col-md-5 col-lg-3"]],null,null,null,null,null)),(l()(),t.Ma(3,0,null,null,5,"bs-sortable",[["itemActiveClass","sortable-item-active"],["itemClass","sortable-item"],["placeholderClass","placeholderStyle"],["placeholderItem","Drag here"],["wrapperClass","sortable-wrapper"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var t=!0;return"ngModelChange"===n&&(t=!1!==(l.component.itemStringsLeft=e)&&t),t},E,T)),t.La(4,49152,null,0,D.b,[D.a],{wrapperClass:[0,"wrapperClass"],itemClass:[1,"itemClass"],itemActiveClass:[2,"itemActiveClass"],placeholderClass:[3,"placeholderClass"],placeholderItem:[4,"placeholderItem"],itemTemplate:[5,"itemTemplate"]},null),t.bb(1024,null,U.m,function(l){return[l]},[D.b]),t.La(6,671744,null,0,U.r,[[8,null],[8,null],[8,null],[6,U.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.bb(2048,null,U.n,null,[U.r]),t.La(8,16384,null,0,U.o,[[4,U.n]],null,null),(l()(),t.Ma(9,0,null,null,2,"pre",[["class","code-preview"]],null,null,null,null,null)),(l()(),t.eb(10,null,["model: ",""])),t.Ya(0,O.g,[]),(l()(),t.Ma(12,0,null,null,9,"div",[["class","col-xs-6 col-6 col-md-5 col-lg-3"]],null,null,null,null,null)),(l()(),t.Ma(13,0,null,null,5,"bs-sortable",[["itemActiveClass","sortable-item-active"],["itemClass","sortable-item"],["placeholderClass","sortable-item"],["placeholderItem","Drag here"],["wrapperClass","sortable-wrapper"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var t=!0;return"ngModelChange"===n&&(t=!1!==(l.component.itemStringsRight=e)&&t),t},E,T)),t.La(14,49152,null,0,D.b,[D.a],{wrapperClass:[0,"wrapperClass"],itemClass:[1,"itemClass"],itemActiveClass:[2,"itemActiveClass"],placeholderClass:[3,"placeholderClass"],placeholderItem:[4,"placeholderItem"]},null),t.bb(1024,null,U.m,function(l){return[l]},[D.b]),t.La(16,671744,null,0,U.r,[[8,null],[8,null],[8,null],[6,U.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.bb(2048,null,U.n,null,[U.r]),t.La(18,16384,null,0,U.o,[[4,U.n]],null,null),(l()(),t.Ma(19,0,null,null,2,"pre",[["class","code-preview"]],null,null,null,null,null)),(l()(),t.eb(20,null,["model: ",""])),t.Ya(0,O.g,[])],function(l,n){var e=n.component;l(n,4,0,"sortable-wrapper","sortable-item","sortable-item-active","placeholderStyle","Drag here",t.Wa(n,0)),l(n,6,0,e.itemStringsLeft),l(n,14,0,"sortable-wrapper","sortable-item","sortable-item-active","sortable-item","Drag here"),l(n,16,0,e.itemStringsRight)},function(l,n){var e=n.component;l(n,3,0,t.Wa(n,8).ngClassUntouched,t.Wa(n,8).ngClassTouched,t.Wa(n,8).ngClassPristine,t.Wa(n,8).ngClassDirty,t.Wa(n,8).ngClassValid,t.Wa(n,8).ngClassInvalid,t.Wa(n,8).ngClassPending),l(n,10,0,t.fb(n,10,0,t.Wa(n,11).transform(e.itemStringsLeft))),l(n,13,0,t.Wa(n,18).ngClassUntouched,t.Wa(n,18).ngClassTouched,t.Wa(n,18).ngClassPristine,t.Wa(n,18).ngClassDirty,t.Wa(n,18).ngClassValid,t.Wa(n,18).ngClassInvalid,t.Wa(n,18).ngClassPending),l(n,20,0,t.fb(n,20,0,t.Wa(n,21).transform(e.itemStringsRight)))})}var J=t.Ia("custom-item-template-demo",h,function(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,1,"custom-item-template-demo",[],null,null,null,H,K)),t.La(1,49152,null,0,h,[],null,null)],null,null)},{},{},[]),z=t.Ka({encapsulation:2,styles:[],data:{}});function G(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,19,"p",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["You can use "])),(l()(),t.Ma(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.eb(-1,null,['aria-dropeffect="..."'])),(l()(),t.eb(-1,null,[" and "])),(l()(),t.Ma(5,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["aria-grabbed"])),(l()(),t.eb(-1,null,[" for "])),(l()(),t.Ma(8,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.eb(-1,null,[".sortable-item"])),(l()(),t.eb(-1,null,[". When you start drag item "])),(l()(),t.Ma(11,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["aria-grabbed"])),(l()(),t.eb(-1,null,[" must have "])),(l()(),t.Ma(14,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["true"])),(l()(),t.eb(-1,null,[" state. "])),(l()(),t.Ma(17,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["aria-dropeffect"])),(l()(),t.eb(-1,null,[" property is defined depending on the grabbed object."])),(l()(),t.Ma(20,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["But be careful, these attributes are "])),(l()(),t.Ma(22,0,null,null,2,"a",[["href","https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect"]],null,null,null,null,null)),(l()(),t.Ma(23,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["deprecated"])),(l()(),t.eb(-1,null,["."]))],null,null)}var $=t.Ia("demo-accessibility",x,function(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,1,"demo-accessibility",[],null,null,null,G,z)),t.La(1,49152,null,0,x,[],null,null)],null,null)},{},{},[]),Z=e("vSOO"),X=e("ZYCi"),Q=e("HxCd"),_=e("YAQW"),ll=e("1H/a"),nl=e("RGtq"),el=e("k3/p");e.d(n,"DemoSortableModuleNgFactory",function(){return tl});var tl=t.Ja(a,[],function(l){return t.Ta([t.Ua(512,t.j,t.Z,[[8,[u.a,o.a,s.a,r.a,i.a,c.a,S,N,Y,J,$]],[3,t.j],t.v]),t.Ua(4608,O.p,O.o,[t.s,[2,O.y]]),t.Ua(4608,U.z,U.z,[]),t.Ua(4608,Z.a,Z.a,[O.i,X.n]),t.Ua(5120,Q.b,Q.a,[[3,Q.b]]),t.Ua(4608,_.f,_.f,[]),t.Ua(4608,ll.a,ll.a,[]),t.Ua(4608,D.a,D.a,[]),t.Ua(1073742336,O.c,O.c,[]),t.Ua(1073742336,U.w,U.w,[]),t.Ua(1073742336,U.k,U.k,[]),t.Ua(1073742336,_.d,_.d,[]),t.Ua(1073742336,w.d,w.d,[]),t.Ua(1073742336,X.q,X.q,[[2,X.v],[2,X.n]]),t.Ua(1073742336,f.b,f.b,[]),t.Ua(1073742336,M.b,M.b,[]),t.Ua(1073742336,v.b,v.b,[]),t.Ua(1073742336,nl.a,nl.a,[]),t.Ua(1073742336,el.a,el.a,[]),t.Ua(1073742336,D.c,D.c,[]),t.Ua(1073742336,a,a,[]),t.Ua(1024,X.l,function(){return[[{path:"",component:I}]]},[])])})},bmUx:function(l,n){l.exports='<ng-template #itemTemplate let-item="item" let-index="index"><span>{{index}}: {{item.value}}</span></ng-template>\n\n<div class="row">\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsLeft"\n      [itemTemplate]="itemTemplate"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">model: {{ itemStringsLeft | json }}</pre>\n  </div>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsRight"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="sortable-item"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">model: {{ itemStringsRight | json }}</pre>\n  </div>\n</div>\n\n'}}]);