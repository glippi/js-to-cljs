goog.provide('frontend.views');
frontend.views.header = (function frontend$views$header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.sans-serif","header.sans-serif",37365699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.f2.lh-title.fw9.mb3.mt0.pt3.bt.bw2","h1.f2.lh-title.fw9.mb3.mt0.pt3.bt.bw2",1622377875),"JavaScript To ClojureScript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.f3.mid-gray.lh-title","h2.f3.mid-gray.lh-title",-2065818459),"Transform your JS source to Cljs!"], null)], null);
});
frontend.views.transform_code_button = (function frontend$views$transform_code_button(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mv4.absolute.left-0.tracked","div.mv4.absolute.left-0.tracked",542819242),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link.br.bw2.b--black.pa3.bg-red.white.b.ttc","a.link.br.bw2.b--black.pa3.bg-red.white.b.ttc",-1378921627),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.events","transform-code","frontend.events/transform-code",-1535365544),cljs.core.deref(text)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml6.underline-hover","span.ml6.underline-hover",-2061908790),"transform code"], null)], null)], null);
});
frontend.views.javascript_code = (function frontend$views$javascript_code(text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fl.fl-ns.w-50.pa1.bg-white.h-100.br2.br--left-ns","div.fl.fl-ns.w-50.pa1.bg-white.h-100.br2.br--left-ns",-950376844),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.h5.db.border-box.hover-black.w-100.ba.b--black-20.pa2.br2.mb2.code","textarea.h5.db.border-box.hover-black.w-100.ba.b--black-20.pa2.br2.mb2.code",-1207117311),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"js-code",new cljs.core.Keyword(null,"name","name",1843675177),"js-code",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26005_SHARP_){
return cljs.core.reset_BANG_(text,p1__26005_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.transform_code_button,text], null)], null);
});
frontend.views.clojurescript_code = (function frontend$views$clojurescript_code(transformed_code){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fl.fl-ns.w-50.bg-light-blue.h-100.pa1.br2.br--right-ns","div.fl.fl-ns.w-50.bg-light-blue.h-100.pa1.br2.br--right-ns",-780903584),(cljs.core.truth_(transformed_code)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.ph3.f5.lh-copy.measure.mt0-ns.code","p.ph3.f5.lh-copy.measure.mt0-ns.code",-420726512),transformed_code], null):null)], null);
});
frontend.views.footer = (function frontend$views$footer(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.absolute.bottom-0.left-0.bg-black.washed-blue.w-100.pv1.i.garamond","footer.absolute.bottom-0.left-0.bg-black.washed-blue.w-100.pv1.i.garamond",-312014586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"from "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link.washed-blue","a.link.washed-blue",-2012072716),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/glippi"], null),"glippi "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"with "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.red.b","span.red.b",827327964),"\u03BBove"], null)], null);
});
frontend.views.main = (function frontend$views$main(){
var text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var transformed_code = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.subs","transformed-code","frontend.subs/transformed-code",1861872237)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.vh-100.ph3.ph5-ns.pv5.bg-blue","article.vh-100.ph3.ph5-ns.pv5.bg-blue",423746645),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.javascript_code,text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.clojurescript_code,transformed_code], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.footer], null)], null);
});

//# sourceMappingURL=frontend.views.js.map