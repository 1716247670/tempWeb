(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b037d41"],{"0625":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transitionName}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:t.customStyle,on:{click:t.backToTop}},[i("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[i("path",{attrs:{d:"M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"}})])])])},o=[],a=(i("a9e3"),{name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var t=this;if(!this.isMoving){var e=window.pageYOffset,i=0;this.isMoving=!0,this.interval=setInterval((function(){var n=Math.floor(t.easeInOutQuad(10*i,e,-e,500));n<=t.backPosition?(window.scrollTo(0,t.backPosition),clearInterval(t.interval),t.isMoving=!1):window.scrollTo(0,n),i++}),16.7)}},easeInOutQuad:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}}}),s=a,c=(i("3ddb"),i("2877")),r=Object(c["a"])(s,n,o,!1,null,"053f1ae1",null);e["a"]=r.exports},"295e":function(t,e,i){t.exports=i.p+"static/img/1.d212b6ff.png"},"3ddb":function(t,e,i){"use strict";i("e165")},"530e":function(t,e,i){},"8a19":function(t,e,i){t.exports=i.p+"static/img/title.9d38b712.png"},"97ca":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[t._m(0),t._m(1),t._m(2),i("el-tooltip",{attrs:{placement:"top",content:"返回顶部"}},[i("back-to-top",{attrs:{"custom-style":t.myBackToTopStyle,"visibility-height":300,"back-position":50,"transition-name":"fade"}})],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("img",{attrs:{src:i("8a19"),alt:"【图片】"}}),n("div",{staticClass:"title-text"},[n("h1",[t._v("受阻停滞时期")]),n("span",[t._v("1966-1976")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"lp-section"},[n("div",{staticClass:"content"},[n("p",{staticClass:"body-text"},[t._v(" 1964年，学校开设留学生班，有50名越南留学生，这开启了湖北大学招收留学生的先河。校址稳定、生源增加、硬件改善……改制后的武汉师院各项事业都呈现出向好势头。 ")]),n("p",{staticClass:"body-text"},[t._v(" 但受到“文革”的影响，学校举步维艰，很快进入受阻停滞时期。1966年5月，中央发出了“5·16” 通知后，中国进入了“文化大革命”的政治风暴中。学校遭遇十年浩劫，批斗“反动学术权威”、“走资派”、“反革命修正主义分子”……地理学科处于停滞状态。1966年6月，学校文化革命办公室成立。1966年秋，学校停止招生。在外部环境冲击下，学校渡过了最艰难的时期，直到1972年开始恢复招生。 ")]),n("p",{staticClass:"body-text"},[t._v(" 1972年春季，学校招收了首届学生，到1976年，共招生2416人。但这一时期地理仍然未恢复招生。 ")]),n("p",{staticClass:"body-text"},[t._v(" 1977年，我国恢复高考，学校于当年招收8个专业新生664人，这为恢复地理教学打下坚实基础。 ")]),n("img",{attrs:{src:i("295e"),alt:"【图片】"}}),n("div",{staticClass:"marking"},[t._v(" 图为1972-1976年湖北大学各专业招生人数表 ")])]),n("div",{staticClass:"subtitle"},[t._v("十年浩劫"),n("br"),t._v("举步维艰")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("div",{staticClass:"footer"})])}],a=i("0625"),s={name:"StageThree",components:{BackToTop:a["a"]},data:function(){return{map:null,view:null,buildingLayer:null,myBackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},mounted:function(){document.addEventListener("scroll",this.handleScroll)},destroyed:function(){document.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=this,e=document.documentElement.scrollTop||document.body.scrollTop,i=document.documentElement.clientHeight,n=document.documentElement.scrollHeight,o=document.querySelector(".title"),a=o.offsetHeight,s=document.querySelector(".title img");if(console.log(s.style.opacity),e<a){var c=e/a;console.log(c),s.style.opacity=1-c}Math.ceil(e)+i>=n&&(console.log("滚动到底部了"),setTimeout((function(){t.$router.push("stage-4")}),500))}}},c=s,r=(i("ec6e"),i("2877")),l=Object(r["a"])(c,n,o,!1,null,"fe4f49c6",null);e["default"]=l.exports},a9e3:function(t,e,i){"use strict";var n=i("83ab"),o=i("da84"),a=i("94ca"),s=i("6eeb"),c=i("5135"),r=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),f=i("7c73"),h=i("241c").f,p=i("06cf").f,v=i("9bf2").f,m=i("58a8").trim,b="Number",g=o[b],w=g.prototype,y=r(f(w))==b,_=function(t){var e,i,n,o,a,s,c,r,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+l}for(a=l.slice(2),s=a.length,c=0;c<s;c++)if(r=a.charCodeAt(c),r<48||r>o)return NaN;return parseInt(a,n)}return+l};if(a(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,I=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof I&&(y?d((function(){w.valueOf.call(i)})):r(i)!=b)?l(new g(_(e)),i,I):_(e)},T=n?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;T.length>E;E++)c(g,x=T[E])&&!c(I,x)&&v(I,x,p(g,x));I.prototype=w,w.constructor=I,s(o,b,I)}},e165:function(t,e,i){},ec6e:function(t,e,i){"use strict";i("530e")}}]);