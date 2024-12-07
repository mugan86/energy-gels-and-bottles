import{Aa as R,Ba as ee,L as Z,M as W,O as p,P as K,R as M,T as E,U as m,Va as T,Wa as w,X,Y as L,Z as B,ja as q,ma as O,qa as J,vb as te,wa as y,ya as Q}from"./chunk-JM2OUKM6.js";var ce=null;function P(){return ce}function _t(t){ce??=t}var ne=class{};var V=new M(""),de=(()=>{class t{historyGo(e){throw new Error("")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=p({token:t,factory:()=>m(De),providedIn:"platform"})}}return t})();var De=(()=>{class t extends de{constructor(){super(),this._doc=m(V),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return P().getBaseHref(this._doc)}onPopState(e){let n=P().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=P().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=p({token:t,factory:()=>new t,providedIn:"platform"})}}return t})();function le(t,i){if(t.length==0)return i;if(i.length==0)return t;let e=0;return t.endsWith("/")&&e++,i.startsWith("/")&&e++,e==2?t+i.substring(1):e==1?t+i:t+"/"+i}function ie(t){let i=t.match(/#|\?|$/),e=i&&i.index||t.length,n=e-(t[e-1]==="/"?1:0);return t.slice(0,n)+t.slice(e)}function C(t){return t&&t[0]!=="?"?"?"+t:t}var j=(()=>{class t{historyGo(e){throw new Error("")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=p({token:t,factory:()=>m(pe),providedIn:"root"})}}return t})(),ge=new M(""),pe=(()=>{class t extends j{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??m(V).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return le(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+C(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,s){let o=this.prepareExternalUrl(r+C(s));this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,s){let o=this.prepareExternalUrl(r+C(s));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(n){return new(n||t)(E(de),E(ge,8))}}static{this.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var me=(()=>{class t{constructor(e){this._subject=new q,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Ee(ie(re(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+C(n))}normalize(e){return t.stripTrailingSlash(Fe(this._basePath,re(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+C(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+C(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}static{this.normalizeQueryParams=C}static{this.joinWithSlash=le}static{this.stripTrailingSlash=ie}static{this.\u0275fac=function(n){return new(n||t)(E(j))}}static{this.\u0275prov=p({token:t,factory:()=>Ce(),providedIn:"root"})}}return t})();function Ce(){return new me(E(j))}function Fe(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function re(t){return t.replace(/\/index.html$/,"")}function Ee(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var he=function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t}(he||{});var D={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function A(t,i){let e=T(t),n=e[w.NumberSymbols][i];if(typeof n>"u"){if(i===D.CurrencyDecimal)return e[w.NumberSymbols][D.Decimal];if(i===D.CurrencyGroup)return e[w.NumberSymbols][D.Group]}return n}function ye(t,i){return T(t)[w.NumberFormats][i]}var we=/^(\d+)?\.((\d+)(-(\d+))?)?$/,se=22,v=".",S="0",Ae=";",Se=",",N="#";function be(t,i,e,n,r,s,o=!1){let a="",g=!1;if(!isFinite(t))a=A(e,D.Infinity);else{let d=Me(t);o&&(d=Ie(d));let l=i.minInt,u=i.minFrac,h=i.maxFrac;if(s){let F=s.match(we);if(F===null)throw new Error(`${s} is not a valid digit info`);let H=F[1],I=F[3],Y=F[5];H!=null&&(l=k(H)),I!=null&&(u=k(I)),Y!=null?h=k(Y):I!=null&&u>h&&(h=u)}Le(d,u,h);let c=d.digits,f=d.integerLen,G=d.exponent,b=[];for(g=c.every(F=>!F);f<l;f++)c.unshift(0);for(;f<0;f++)c.unshift(0);f>0?b=c.splice(f,c.length):(b=c,c=[0]);let _=[];for(c.length>=i.lgSize&&_.unshift(c.splice(-i.lgSize,c.length).join(""));c.length>i.gSize;)_.unshift(c.splice(-i.gSize,c.length).join(""));c.length&&_.unshift(c.join("")),a=_.join(A(e,n)),b.length&&(a+=A(e,r)+b.join("")),G&&(a+=A(e,D.Exponential)+"+"+G)}return t<0&&!g?a=i.negPre+a+i.negSuf:a=i.posPre+a+i.posSuf,a}function _e(t,i,e){let n=ye(i,he.Decimal),r=ve(n,A(i,D.MinusSign));return be(t,r,i,D.Group,D.Decimal,e)}function ve(t,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(Ae),r=n[0],s=n[1],o=r.indexOf(v)!==-1?r.split(v):[r.substring(0,r.lastIndexOf(S)+1),r.substring(r.lastIndexOf(S)+1)],a=o[0],g=o[1]||"";e.posPre=a.substring(0,a.indexOf(N));for(let l=0;l<g.length;l++){let u=g.charAt(l);u===S?e.minFrac=e.maxFrac=l+1:u===N?e.maxFrac=l+1:e.posSuf+=u}let d=a.split(Se);if(e.gSize=d[1]?d[1].length:0,e.lgSize=d[2]||d[1]?(d[2]||d[1]).length:0,s){let l=r.length-e.posPre.length-e.posSuf.length,u=s.indexOf(N);e.negPre=s.substring(0,u).replace(/'/g,""),e.negSuf=s.slice(u+l).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function Ie(t){if(t.digits[0]===0)return t;let i=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(i===0?t.digits.push(0,0):i===1&&t.digits.push(0),t.integerLen+=2),t}function Me(t){let i=Math.abs(t)+"",e=0,n,r,s,o,a;for((r=i.indexOf(v))>-1&&(i=i.replace(v,"")),(s=i.search(/e/i))>0?(r<0&&(r=s),r+=+i.slice(s+1),i=i.substring(0,s)):r<0&&(r=i.length),s=0;i.charAt(s)===S;s++);if(s===(a=i.length))n=[0],r=1;else{for(a--;i.charAt(a)===S;)a--;for(r-=s,n=[],o=0;s<=a;s++,o++)n[o]=Number(i.charAt(s))}return r>se&&(n=n.splice(0,se-1),e=r-1,r=1),{digits:n,exponent:e,integerLen:r}}function Le(t,i,e){if(i>e)throw new Error(`The minimum number of digits after fraction (${i}) is higher than the maximum (${e}).`);let n=t.digits,r=n.length-t.integerLen,s=Math.min(Math.max(i,r),e),o=s+t.integerLen,a=n[o];if(o>0){n.splice(Math.max(t.integerLen,o));for(let u=o;u<n.length;u++)n[u]=0}else{r=Math.max(0,r),t.integerLen=1,n.length=Math.max(1,o=s+1),n[0]=0;for(let u=1;u<o;u++)n[u]=0}if(a>=5)if(o-1<0){for(let u=0;u>o;u--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[o-1]++;for(;r<Math.max(0,s);r++)n.push(0);let g=s!==0,d=i+t.integerLen,l=n.reduceRight(function(u,h,c,f){return h=h+u,f[c]=h<10?h:h-10,g&&(f[c]===0&&c>=d?f.pop():g=!1),h>=10?1:0},0);l&&(n.unshift(l),t.integerLen++)}function k(t){let i=parseInt(t);if(isNaN(i))throw new Error("Invalid integer literal when parsing "+t);return i}function vt(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,s]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(s)}return null}var $=/\s+/,oe=[],It=(()=>{class t{constructor(e,n){this._ngEl=e,this._renderer=n,this.initialClasses=oe,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split($):oe}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split($):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split($).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static{this.\u0275fac=function(n){return new(n||t)(y(O),y(R))}}static{this.\u0275dir=L({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"},standalone:!0})}}return t})();var Mt=(()=>{class t{constructor(e,n){this._viewContainer=e,this._context=new x,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ue("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ue("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,n){return!0}static{this.\u0275fac=function(n){return new(n||t)(y(ee),y(Q))}}static{this.\u0275dir=L({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return t})(),x=class{constructor(){this.$implicit=null,this.ngIf=null}};function ue(t,i){if(!!!(!i||i.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${W(i)}'.`)}function Be(t,i){return new Z(2100,!1)}var Lt=(()=>{class t{transform(e){return JSON.stringify(e,null,2)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275pipe=B({name:"json",type:t,pure:!1,standalone:!0})}}return t})();var Bt=(()=>{class t{constructor(e){this._locale=e}transform(e,n,r){if(!Oe(e))return null;r||=this._locale;try{let s=Re(e);return _e(s,r,n)}catch(s){throw Be(t,s.message)}}static{this.\u0275fac=function(n){return new(n||t)(y(te,16))}}static{this.\u0275pipe=B({name:"number",type:t,pure:!0,standalone:!0})}}return t})();function Oe(t){return!(t==null||t===""||t!==t)}function Re(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new Error(`${t} is not a number`);return t}var Ot=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=K({})}}return t})(),Te="browser",Pe="server";function Ne(t){return t===Te}function Rt(t){return t===Pe}var Tt=(()=>{class t{static{this.\u0275prov=p({token:t,providedIn:"root",factory:()=>Ne(m(J))?new U(m(V),window):new z})}}return t})(),U=class{constructor(i,e){this.document=i,this.window=e,this.offset=()=>[0,0]}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i){this.window.scrollTo(i[0],i[1])}scrollToAnchor(i){let e=ke(this.document,i);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(i){this.window.history.scrollRestoration=i}scrollToElement(i){let e=i.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],r-s[1])}};function ke(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(i)||s.querySelector(`[name="${i}"]`);if(o)return o}r=n.nextNode()}}return null}var z=class{setOffset(i){}getScrollPosition(){return[0,0]}scrollToPosition(i){}scrollToAnchor(i){}setHistoryScrollRestoration(i){}},ae=class{};export{P as a,_t as b,ne as c,V as d,j as e,me as f,vt as g,It as h,Mt as i,Lt as j,Bt as k,Ot as l,Te as m,Rt as n,Tt as o,ae as p};
