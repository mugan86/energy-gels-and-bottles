import{a as E,d as K,g as U}from"./chunk-GVG4AIFY.js";import{B as T,C as X,D as V,b as B,d as N,f as R,h as j,n as G,o as z,u as D}from"./chunk-4N7K43P5.js";import{k as A}from"./chunk-QIQINB5B.js";import{$a as L,Ha as F,Ja as c,La as y,Pa as l,Qa as r,Ra as v,Sa as S,U as O,Va as C,W,Wa as p,_a as d,ab as g,cb as x,da as m,db as h,ea as u,eb as f,gb as H,sa as k,va as o}from"./chunk-SLNQS2BI.js";function I(s){let n=Math.round(s);return n>=2&&n<=4?T.hypotonic[n]||"Concentraci\xF3n fuera del rango definido para hipot\xF3nicas.":n>=6&&n<=8?T.isotonic[n]||"Concentraci\xF3n fuera del rango definido para isot\xF3nicas.":n>=10&&n<=15?T.hypertonic[n]||"Concentraci\xF3n fuera del rango definido para hipert\xF3nicas.":"Concentraci\xF3n fuera de los rangos establecidos."}var ie=s=>{let e={isotonic:.006,hypotonic:.003,hypertonic:.01}[s];if(e===void 0)throw new Error("Tipo de bebida no reconocido");return e},oe=(s=3)=>{let e={0:0,1:.5,2:.75,3:1,4:1.25,5:1.5}[s];if(e===void 0)throw new Error("Select without flavour");return e};function Y(s,n,e){let i=ie(n),t=oe(e);return s*i*t}function re(s,n){if(s&1&&(l(0,"div",4)(1,"h3"),d(2,"Informaci\xF3n sobre la bebida:"),r(),l(3,"p"),d(4),r()()),s&2){let e=p();o(4),L(e.beverageInfo[e.selectedType])}}function ae(s,n){if(s&1){let e=S();l(0,"div")(1,"div",6)(2,"label",7),d(3,"Volumen de Agua (ml):"),r(),l(4,"input",8),f("ngModelChange",function(t){m(e);let a=p(2);return h(a.waterVolume,t)||(a.waterVolume=t),u(t)}),C("ngModelChange",function(){m(e);let t=p(2);return u(t.updateLayout(t.selectedType,!0))}),r(),l(5,"span"),d(6),r()(),l(7,"div",6)(8,"label",7),d(9),r(),l(10,"input",8),f("ngModelChange",function(t){m(e);let a=p(2);return h(a.carbConcentration,t)||(a.carbConcentration=t),u(t)}),C("ngModelChange",function(){m(e);let t=p(2);return u(t.updateCarboHidrateConcentration())}),r(),l(11,"span"),d(12),r()()()}if(s&2){let e=p(2);o(2),c("for","waterVolume"),o(2),c("id","waterVolume"),x("ngModel",e.waterVolume),c("min",250)("max",1e3)("step",10),o(2),g("",e.waterVolume," ml"),o(2),c("for","concentration"),o(),g("Concentraci\xF3n ( ",e.carbConcentration,"%):"),o(),c("id","concentration"),x("ngModel",e.carbConcentration),c("min",2)("max",4)("step",.1),o(2),g("",e.carbConcentrationMessage," ")}}function le(s,n){if(s&1){let e=S();l(0,"div")(1,"div",6)(2,"label",7),d(3,"Volumen de Agua (ml):"),r(),l(4,"input",8),f("ngModelChange",function(t){m(e);let a=p(2);return h(a.waterVolume,t)||(a.waterVolume=t),u(t)}),r(),l(5,"span"),d(6),r()(),l(7,"div",6)(8,"label",7),d(9),r(),l(10,"input",8),f("ngModelChange",function(t){m(e);let a=p(2);return h(a.carbConcentration,t)||(a.carbConcentration=t),u(t)}),C("ngModelChange",function(){m(e);let t=p(2);return u(t.updateCarboHidrateConcentration())}),r(),l(11,"span"),d(12),r()(),l(13,"div",6)(14,"label",7),d(15,"Dulzor:"),r(),l(16,"input",8),f("ngModelChange",function(t){m(e);let a=p(2);return h(a.sweetness,t)||(a.sweetness=t),u(t)}),C("ngModelChange",function(){m(e);let t=p(2);return u(t.updateWeetneess())})("ngModelChange",function(){m(e);let t=p(2);return u(t.updateLayout(t.selectedType))}),r(),l(17,"span"),d(18),r()()()}if(s&2){let e=p(2);o(2),c("for","waterVolume"),o(2),c("id","waterVolume"),x("ngModel",e.waterVolume),c("min",250)("max",1e3)("step",10),o(2),g("",e.waterVolume," ml"),o(2),c("for","concentration"),o(),g("Concentraci\xF3n (",e.carbConcentration,"%):"),o(),c("id","concentration"),x("ngModel",e.carbConcentration),c("min",6)("max",8)("step",.1),o(2),g("",e.carbConcentrationMessage," "),o(2),c("for","sweetness"),o(2),c("id","sweetness"),x("ngModel",e.sweetness),c("min",0)("max",1)("step",.1),o(2),g("",e.sweetnessText," ")}}function se(s,n){if(s&1){let e=S();l(0,"div")(1,"div",6)(2,"label",7),d(3),r(),l(4,"input",8),f("ngModelChange",function(t){m(e);let a=p(2);return h(a.carbConcentration,t)||(a.carbConcentration=t),u(t)}),C("ngModelChange",function(){m(e);let t=p(2);return u(t.updateCarboHidrateConcentration())}),r(),l(5,"span"),d(6),r()(),l(7,"div",6)(8,"label",7),d(9,"Peso (kg):"),r(),l(10,"input",8),f("ngModelChange",function(t){m(e);let a=p(2);return h(a.weight,t)||(a.weight=t),u(t)}),C("ngModelChange",function(){m(e);let t=p(2);return u(t.updateLayout(t.selectedType))}),r(),l(11,"span"),d(12),r()()()}if(s&2){let e=p(2);o(2),c("for","concentration"),o(),g("Concentraci\xF3n (",e.carbConcentration,"%):"),o(),c("id","concentration"),x("ngModel",e.carbConcentration),c("min",10)("max",15)("step",.1),o(2),g("",e.carbConcentrationMessage," "),o(2),c("for","weight"),o(2),c("id","weight"),x("ngModel",e.weight),c("min",40)("max",150)("step",.1),o(2),g("",e.weight," ")}}function ce(s,n){if(s&1&&(l(0,"div",5)(1,"h3"),d(2,"Ingrese los datos necesarios:"),r(),F(3,ae,13,15,"div")(4,le,19,22,"div")(5,se,13,15,"div"),r()),s&2){let e=p();o(3),y(e.selectedType==="hypotonic"?3:-1),o(),y(e.selectedType==="isotonic"?4:-1),o(),y(e.selectedType==="hypertonic"?5:-1)}}function de(s,n){if(s&1&&(l(0,"div"),v(1,"hr"),l(2,"h3",9),d(3,"Para crear la bebida necesitamos lo siguiente:"),r(),v(4,"p",10),r()),s&2){let e=p();o(4),c("innerHTML",e.results,k)}}var q=class s{formGroup;formBuilder=O(G);drinkTypes=[{id:"hypotonic",label:"Hipot\xF3nica",disabled:!1},{id:"isotonic",label:"Isot\xF3nica",disabled:!1},{id:"hypertonic",label:"Hipert\xF3nica",disabled:!1}];selectedType="hypotonic";concentrationDefault={hypotonic:3,isotonic:7,hypertonic:12.5};valuesText=U;waterVolume=500;carbConcentration=this.concentrationDefault.hypotonic;carbConcentrationMessage=I(this.carbConcentration);flavour=0;sweetness=.5;sweetnessText=this.selectSweetness();weight=70;results=null;beverageInfo={hypotonic:"Bebida para hidrataci\xF3n r\xE1pida. Concentraci\xF3n de carbohidratos 2-4%.",isotonic:"Bebida para entrenamientos de media duraci\xF3n. Concentraci\xF3n de carbohidratos 6-8%.",hypertonic:"Bebida para recuperaci\xF3n post-entrenamiento. Alta concentraci\xF3n de carbohidratos (>10%)."};howElection=X;activeIndex=null;toggleAccordion(n){this.activeIndex=this.activeIndex===n?null:n}selectType(n){this.selectedType=n,this.updateLayout(n)}ngOnInit(){this.calculate()}selectSweetness(){return D[D.findIndex(n=>n.index===this.sweetness)].description}updateWeetneess(){this.sweetnessText=this.selectSweetness()}updateLayout(n,e=!1){e||(this.carbConcentration=this.concentrationDefault[n]),this.selectedType=n,this.calculate()}updateCarboHidrateConcentration(){this.carbConcentrationMessage=I(this.carbConcentration),this.calculate()}calculate(){let n=Y(this.waterVolume,this.selectedType,Math.floor(Math.random()*5)+1);switch(this.selectedType){case"hypotonic":let e=this.waterVolume*this.carbConcentration/100,i=e*100/95,t=Math.max(1,this.waterVolume/500*1),a=V.maltodextrin,b=E(a.weight,a.unit,a.price,i,"gr"),_=V.salt,w=E(_.weight,_.unit,_.price,t,"gr"),M=V.flavoring,P=E(M.weight,M.unit,_.price,n,"gr");console.log("MALto",b,"SALT",w,"Flavour",P),console.log("COST",b+w+P,"\u20AC"),this.results=`
        <ul>
        <li>Carbohidratos: ${e.toFixed(2)}.gr</li>
        <li>Agua: ${this.waterVolume} ml.</li>
        <li>Maltodextrina: ${i.toFixed(2)} gr.<li>Sal: ${t.toFixed(2)} gr.</li>
        </ul>`;break;case"isotonic":let{maltodextrin:J,fructose:Q}=this.getIsotonic(this.waterVolume,this.carbConcentration,this.sweetness);this.results=`Ingredientes a a\xF1adir en la bebida: Maltodextrina ${J}gr. / Fructosa: ${Q} gr. / Agua ${this.waterVolume}`;break;case"hypertonic":let{maltodextrin:Z,protein:$,salt:ee,effectiveCarbs:te,waterVolume:ne}=this.calculateHypertonicDrink({carbConcentration:this.carbConcentration,weight:this.weight});this.results=`
        <ul>
        <li>Carbohidratos: ${te.toFixed(2)}.gr</li>
        <li>Agua: ${ne} ml.</li>
        <li>Maltodextrina: ${Z.toFixed(2)} gr.</li><li>Prote\xEDna: ${$.toFixed(2)} gr.</li><li>Sal: ${ee.toFixed(2)} gr.</li>
        </ul>`;break}}getIsotonic(n,e,i){if(i<0||i>1)throw new Error("El nivel de dulzor debe estar entre 0 y 1.");if(e<6||e>8)throw new Error("La concentraci\xF3n de carbohidratos debe estar entre 6% y 8%.");let t=e*n/100,a=.66-.16*i,b=.34+.16*i,_=t*a,w=t*b,M=_/.95;return{maltodextrin:parseFloat(M.toFixed(2)),fructose:parseFloat(w.toFixed(2))}}calculateHypertonicDrink(n){let{weight:e,carbConcentration:i}=n;if(i<10||i>15)throw new Error("La concentraci\xF3n de carbohidratos debe estar entre 10% y 15%.");let t=e*(95/100),a=t*100/i,b=t/.95,_=b/5,w=Math.max(1,a/500*1);return{effectiveCarbs:t,waterVolume:parseFloat(a.toFixed(2)),maltodextrin:parseFloat(b.toFixed(2)),protein:parseFloat(_.toFixed(2)),salt:parseFloat(w.toFixed(2))}}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=W({type:s,selectors:[["app-drinks"]],standalone:!0,features:[H],decls:18,vars:6,consts:[[1,"container"],[1,"section-title"],[1,"aditional-info",3,"innerHTML"],[3,"updateSelectOption","options","selectOption"],[1,"info"],[1,"form"],[1,"slider"],[3,"for"],["type","range",3,"ngModelChange","id","ngModel","min","max","step"],[1,"item-result"],[3,"innerHTML"]],template:function(e,i){e&1&&(l(0,"div",0)(1,"h1",1),d(2,"Bebidas Energ\xE9ticas"),r(),v(3,"hr")(4,"span",2)(5,"br")(6,"hr"),l(7,"h3"),d(8,"Seleccione el tipo de bebida deseada:"),r(),l(9,"app-button-toggle-group",3),C("updateSelectOption",function(a){return i.selectType(a)}),r(),F(10,re,5,1,"div",4)(11,ce,6,3,"div",5)(12,de,5,1,"div"),v(13,"hr"),l(14,"div",4)(15,"h3"),d(16,"Instrucciones para crear nuestra bebida:"),r(),v(17,"p"),r()()),e&2&&(o(4),c("innerHTML",i.howElection,k),o(5),c("options",i.drinkTypes)("selectOption",i.selectedType),o(),y(i.selectedType?10:-1),o(),y(i.selectedType?11:-1),o(),y(i.results?12:-1))},dependencies:[A,z,B,j,N,R,K],styles:[".calculator[_ngcontent-%COMP%]{font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #ddd;border-radius:10px;background-color:#f9f9f9}.beverage-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:20px}input[type=number][_ngcontent-%COMP%]{display:block;margin-bottom:10px;padding:5px;width:100%;max-width:200px}.toggle-group[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:20px 0}.toggle-button[_ngcontent-%COMP%]{background-color:#f3f3f3;border:1px solid #ddd;border-radius:0;padding:10px 20px;cursor:pointer;font-size:16px;flex:1;text-align:center;transition:background-color .2s,color .2s}.toggle-button[_ngcontent-%COMP%]:not(:last-child){border-right:none}.toggle-button.active[_ngcontent-%COMP%]{background-color:var(--principal-color);color:#fff;font-weight:700}.toggle-button[_ngcontent-%COMP%]:hover{background-color:var(--principal-color-hover);color:#fff}.aditional-info[_ngcontent-%COMP%]{text-align:left}.item-result[_ngcontent-%COMP%]{border-bottom:2px solid var(--principal-color);padding-bottom:5px}"]})};export{q as DrinksComponent};
