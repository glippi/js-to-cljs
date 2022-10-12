goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__19114 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__19115 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__19115);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__19119 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__19120 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__19120);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__19119);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__19114);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__19133 = arguments.length;
switch (G__19133) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__19141 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19141,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19141,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__19149_19177 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__19150_19178 = null;
var count__19151_19179 = (0);
var i__19152_19180 = (0);
while(true){
if((i__19152_19180 < count__19151_19179)){
var vec__19165_19181 = chunk__19150_19178.cljs$core$IIndexed$_nth$arity$2(null,i__19152_19180);
var container_19182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19165_19181,(0),null);
var comp_19183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19165_19181,(1),null);
reagent.dom.re_render_component(comp_19183,container_19182);


var G__19184 = seq__19149_19177;
var G__19185 = chunk__19150_19178;
var G__19186 = count__19151_19179;
var G__19187 = (i__19152_19180 + (1));
seq__19149_19177 = G__19184;
chunk__19150_19178 = G__19185;
count__19151_19179 = G__19186;
i__19152_19180 = G__19187;
continue;
} else {
var temp__5804__auto___19188 = cljs.core.seq(seq__19149_19177);
if(temp__5804__auto___19188){
var seq__19149_19189__$1 = temp__5804__auto___19188;
if(cljs.core.chunked_seq_QMARK_(seq__19149_19189__$1)){
var c__5568__auto___19190 = cljs.core.chunk_first(seq__19149_19189__$1);
var G__19191 = cljs.core.chunk_rest(seq__19149_19189__$1);
var G__19192 = c__5568__auto___19190;
var G__19193 = cljs.core.count(c__5568__auto___19190);
var G__19194 = (0);
seq__19149_19177 = G__19191;
chunk__19150_19178 = G__19192;
count__19151_19179 = G__19193;
i__19152_19180 = G__19194;
continue;
} else {
var vec__19168_19195 = cljs.core.first(seq__19149_19189__$1);
var container_19196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19168_19195,(0),null);
var comp_19197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19168_19195,(1),null);
reagent.dom.re_render_component(comp_19197,container_19196);


var G__19198 = cljs.core.next(seq__19149_19189__$1);
var G__19199 = null;
var G__19200 = (0);
var G__19201 = (0);
seq__19149_19177 = G__19198;
chunk__19150_19178 = G__19199;
count__19151_19179 = G__19200;
i__19152_19180 = G__19201;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
