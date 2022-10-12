goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__18179__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18180__i = 0, G__18180__a = new Array(arguments.length -  0);
while (G__18180__i < G__18180__a.length) {G__18180__a[G__18180__i] = arguments[G__18180__i + 0]; ++G__18180__i;}
  args = new cljs.core.IndexedSeq(G__18180__a,0,null);
} 
return G__18179__delegate.call(this,args);};
G__18179.cljs$lang$maxFixedArity = 0;
G__18179.cljs$lang$applyTo = (function (arglist__18181){
var args = cljs.core.seq(arglist__18181);
return G__18179__delegate(args);
});
G__18179.cljs$core$IFn$_invoke$arity$variadic = G__18179__delegate;
return G__18179;
})()
);

(o.error = (function() { 
var G__18182__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18183__i = 0, G__18183__a = new Array(arguments.length -  0);
while (G__18183__i < G__18183__a.length) {G__18183__a[G__18183__i] = arguments[G__18183__i + 0]; ++G__18183__i;}
  args = new cljs.core.IndexedSeq(G__18183__a,0,null);
} 
return G__18182__delegate.call(this,args);};
G__18182.cljs$lang$maxFixedArity = 0;
G__18182.cljs$lang$applyTo = (function (arglist__18184){
var args = cljs.core.seq(arglist__18184);
return G__18182__delegate(args);
});
G__18182.cljs$core$IFn$_invoke$arity$variadic = G__18182__delegate;
return G__18182;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
