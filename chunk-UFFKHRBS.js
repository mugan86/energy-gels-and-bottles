import{c as f,d as I,e as B,g as w,i as N,j as D,k as z,l as j,m as A,n as $,o as V,p as q}from"./chunk-PFJUWDUL.js";import{d as T}from"./chunk-YPVA7NWV.js";import"./chunk-YC63UP6T.js";import{$a as g,Ga as O,Ia as c,Ka as x,La as u,Ma as d,Na as m,Oa as i,Pa as n,Qa as S,Ra as F,Ua as _,Va as h,W as p,Ya as G,Za as r,_a as C,bb as E,da as k,ea as M,gb as b,ja as P,jb as R,va as a,wa as v}from"./chunk-CTTU235N.js";var y=class o{item;optionSelect=new P;select(t){this.optionSelect.emit(t)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["app-button"]],inputs:{item:"item"},outputs:{optionSelect:"optionSelect"},standalone:!0,features:[b],decls:2,vars:3,consts:[[3,"click","title"]],template:function(e,s){e&1&&(i(0,"button",0),_("click",function(){return s.select(s.item.key)}),r(1),n()),e&2&&(G("title","Selecciona la proporci\xF3n ",s.item.label,""),a(),g(" ",s.item.label,`
`))},styles:["button[_ngcontent-%COMP%]{background-color:var(--principal-color);padding:.5rem;font-size:102%;border:none;border-radius:.4rem;color:#f5f5f5;box-shadow:0 2px var(--info-text)}button[_ngcontent-%COMP%]:hover{background-color:var(--principal-color-hover);cursor:pointer}button[_ngcontent-%COMP%]:active{box-shadow:0 2px #666;transform:translateY(2px)}"]})};var J=(o,t)=>t.sport,L=(o,t)=>t.key,Q=(o,t)=>({key:o,label:t});function W(o,t){if(o&1&&(i(0,"option",7),r(1),n()),o&2){let e=t.$implicit;c("value",e),a(),C(e)}}function X(o,t){if(o&1&&(i(0,"option",7),r(1),n()),o&2){let e=t.$implicit;c("value",e),a(),C(e)}}function Z(o,t){if(o&1&&(i(0,"option",7),r(1),n()),o&2){let e=t.$implicit;c("value",e),a(),C(e)}}function ee(o,t){if(o&1){let e=F();i(0,"app-button",13),_("optionSelect",function(l){k(e);let H=h(3);return M(H.select(l))}),n(),r(1,"\xA0 ")}if(o&2){let e=t.$implicit;c("item",R(1,Q,e.value,e.value))}}function te(o,t){if(o&1&&(i(0,"li")(1,"h3"),r(2),n(),i(3,"p")(4,"strong"),r(5,"Escenarios ideales:"),n(),r(6),n(),i(7,"p"),r(8," Proporciones recomendadas: "),d(9,ee,2,4,null,null,L),n()()),o&2){let e=t.$implicit;a(2),E("",e.sport," - ",e.duration," - ",e.intensity,""),a(4),g(" ",e.ideal_scenarios,""),a(3),m(e.recommended_ratios)}}function oe(o,t){if(o&1&&(i(0,"div",12)(1,"h2"),r(2,"Geles recomendados"),n(),i(3,"ul"),d(4,te,11,4,"li",null,J),n()()),o&2){let e=h();a(4),m(e.recommendedGels)}}function ne(o,t){o&1&&(i(0,"div")(1,"p"),r(2,"No hay geles recomendados para los filtros seleccionados."),n()())}var ie=[{sport:"Ciclismo",duration:"< 1 h",intensity:"Alta (explosiva)",ideal_scenarios:"Contrarreloj, sprints cortos, series de alta intensidad.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"8:1"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:0"}]},{sport:"Ciclismo",duration:"1.5-3 h",intensity:"Mixta",ideal_scenarios:"Fondo medio, competiciones con cambios de ritmo.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"2:1"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:1"}]},{sport:"Ciclismo",duration:"> 3 h",intensity:"Baja-moderada (sostenida)",ideal_scenarios:"Fondos largos, entrenamiento base.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"1:0:8"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:2"}]},{sport:"Ciclismo",duration:"1-1.5 h",intensity:"Mixta",ideal_scenarios:"Entrenamientos intermedios o competencias cortas con variaci\xF3n de ritmo.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"2:1"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:1"}]},{sport:"Running",duration:"< 10 km",intensity:"Alta (explosiva)",ideal_scenarios:"Carreras de 5K, intervalos r\xE1pidos en pista.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"8:1"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:0"}]},{sport:"Running",duration:"10-20 km",intensity:"Mixta",ideal_scenarios:"Medias maratones, rodajes de intensidad media.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"2:1"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:1"}]},{sport:"Running",duration:"> 20 km",intensity:"Baja-moderada (sostenida)",ideal_scenarios:"Maratones, rodajes largos con ritmos constantes.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"1:0:8"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:2"}]},{sport:"Trail Running",duration:"< 15 km",intensity:"Alta (explosiva)",ideal_scenarios:"Kil\xF3metro vertical, segmentos t\xE9cnicos cortos y r\xE1pidos.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"8:1"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:0"}]},{sport:"Trail Running",duration:"20-50 km",intensity:"Mixta",ideal_scenarios:"Maratones de monta\xF1a, trails t\xE9cnicos con subidas y descensos frecuentes.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"2:1"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:1"}]},{sport:"Trail Running",duration:"> 50 km",intensity:"Baja-moderada (sostenida)",ideal_scenarios:"Ultratrails (>8 h), etapas largas con ritmo constante.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"1:0:8"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:2"}]},{sport:"Triatl\xF3n",duration:"< 1 h",intensity:"Alta (explosiva)",ideal_scenarios:"Salidas r\xE1pidas o primeros tramos de triatl\xF3n sprint u ol\xEDmpico.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"8:1"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:0"}]},{sport:"Triatl\xF3n",duration:"2-4 h",intensity:"Mixta",ideal_scenarios:"Segmentos de ciclismo y carrera en triatlones ol\xEDmpicos o media distancia.",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"2:1"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:1"}]},{sport:"Triatl\xF3n",duration:"> 4 h",intensity:"Baja-moderada (sostenida)",ideal_scenarios:"Segmentos de carrera en triatlones de larga distancia (Half Ironman o Ironman).",recommended_ratios:[{key:"carb_to_protein",description:"Carbohidratos:Prote\xEDnas",value:"1:0:8"},{key:"carbs_only",description:"Carbohidratos solo",value:"1:2"}]}],K=class o{constructor(t,e){this.fb=t;this.router=e;this.filterForm=this.fb.group({sport:["",f.required],duration:["",f.required],intensity:["",f.required]}),this.filterForm.valueChanges.subscribe(()=>{this.filterGels()})}filterForm;recommendedGels=[];sports=["Ciclismo","Running","Trail Running","Triatl\xF3n"];durations=["< 1 h","1-1.5 h","1.5-3 h","2-4 h","> 3 h","> 4 h","< 10 km","10-20 km","> 20 km","> 50 km"];intensities=["Alta (explosiva)","Mixta","Baja-moderada (sostenida)"];select(t){console.log(t),this.router.navigate(["/",t])}filterGels(){let{sport:t,duration:e,intensity:s}=this.filterForm.value;this.recommendedGels=ie.filter(l=>(t?l.sport===t:!0)&&(e?l.duration===e:!0)&&(s?l.intensity===s:!0))}static \u0275fac=function(e){return new(e||o)(v($),v(T))};static \u0275cmp=p({type:o,selectors:[["app-gel-recommendations"]],standalone:!0,features:[b],decls:32,vars:3,consts:[[1,"container"],[1,"section-title"],[1,"filter-form",3,"formGroup"],[1,"form-group"],["for","sport"],["formControlName","sport","id","sport",1,"form-control"],["value",""],[3,"value"],["for","duration"],["formControlName","duration","id","duration",1,"form-control"],["for","intensity"],["formControlName","intensity","id","intensity",1,"form-control"],[1,"recommendations"],[3,"optionSelect","item"]],template:function(e,s){e&1&&(i(0,"div",0)(1,"h1",1),r(2,"Recomendaci\xF3n de Geles"),n(),S(3,"hr")(4,"br"),i(5,"form",2)(6,"div",3)(7,"label",4),r(8,"Deporte"),n(),i(9,"select",5)(10,"option",6),r(11,"Seleccionar Deporte"),n(),d(12,W,2,2,"option",7,u),n()(),i(14,"div",3)(15,"label",8),r(16,"Duraci\xF3n"),n(),i(17,"select",9)(18,"option",6),r(19,"Seleccionar Duraci\xF3n"),n(),d(20,X,2,2,"option",7,u),n()(),i(22,"div",3)(23,"label",10),r(24,"Intensidad"),n(),i(25,"select",11)(26,"option",6),r(27,"Seleccionar Intensidad"),n(),d(28,Z,2,2,"option",7,u),n()()(),O(30,oe,6,0,"div",12)(31,ne,3,0,"div"),n()),e&2&&(a(5),c("formGroup",s.filterForm),a(7),m(s.sports),a(8),m(s.durations),a(8),m(s.intensities),a(2),x(s.recommendedGels.length>0?30:-1),a(),x(s.recommendedGels.length===0?31:-1))},dependencies:[V,w,j,A,z,I,B,q,N,D,y],styles:[".filter-form[_ngcontent-%COMP%]{margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}label[_ngcontent-%COMP%]{font-weight:700;display:block;margin-bottom:5px}select.form-control[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:16px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;background-color:#fff}.recommendations[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;margin-bottom:10px;color:var(--principal-color)}.recommendations[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.recommendations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#fff;margin-bottom:15px;padding:15px;border-radius:8px;border:1px solid #e0e0e0;box-shadow:0 2px 4px #0000001a}.recommendations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 10px;font-size:18px;color:#333}.recommendations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0;font-size:14px;line-height:1.5}.recommendations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700}.select-proportions[_ngcontent-%COMP%]{font-size:115%}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#555;text-align:center;margin-top:20px}@media (max-width: 600px){.container[_ngcontent-%COMP%]{padding:15px}select.form-control[_ngcontent-%COMP%]{font-size:14px;padding:8px}.recommendations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px}.recommendations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.recommendations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}}"]})};export{K as GelRecommendationsComponent,ie as gelData};