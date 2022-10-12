goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__18255 = arguments.length;
switch (G__18255) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__18256 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__18257 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__18257);

try{var G__18258 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__18258);

return G__18258;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__18256);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__18259 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__18260 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__18260);

try{var G__18261 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__18261);

return G__18261;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__18259);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__18262 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__18263 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__18263);

try{var G__18264 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__18264);

return G__18264;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__18262);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__18265 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__18266 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__18266);

try{var G__18267 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__18267);

return G__18267;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__18265);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__18268 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__18269 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__18269);

try{var G__18270 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__18270);

return G__18270;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__18268);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__18274 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__18275 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18275);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18274);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18473 = arguments.length;
var i__5770__auto___18474 = (0);
while(true){
if((i__5770__auto___18474 < len__5769__auto___18473)){
args__5775__auto__.push((arguments[i__5770__auto___18474]));

var G__18476 = (i__5770__auto___18474 + (1));
i__5770__auto___18474 = G__18476;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__18281 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__18282 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__18283 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__18284 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__18285 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__18286 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__18287 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__18288 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__18289 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__18290 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__18291 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__18292 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__18293 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__18294 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18288);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__18289);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__18290);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__18291);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__18292);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__18293);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18294);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18287);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__18286);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__18285);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__18284);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__18283);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__18282);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18281);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq18278){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18278));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__18295 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__18296 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18296);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18295);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18480 = arguments.length;
var i__5770__auto___18481 = (0);
while(true){
if((i__5770__auto___18481 < len__5769__auto___18480)){
args__5775__auto__.push((arguments[i__5770__auto___18481]));

var G__18484 = (i__5770__auto___18481 + (1));
i__5770__auto___18481 = G__18484;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__18308 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__18309 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__18310 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__18311 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__18312 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__18313 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__18314 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__18315 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__18316 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__18317 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__18318 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__18319 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__18314);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__18315);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__18316);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__18317);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__18318);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18319);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18313);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__18312);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__18311);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__18310);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__18309);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__18308);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq18297){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18297));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18486 = arguments.length;
var i__5770__auto___18487 = (0);
while(true){
if((i__5770__auto___18487 < len__5769__auto___18486)){
args__5775__auto__.push((arguments[i__5770__auto___18487]));

var G__18493 = (i__5770__auto___18487 + (1));
i__5770__auto___18487 = G__18493;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__18325 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__18326 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__18327 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__18328 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__18329 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__18330 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__18331 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__18332 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__18333 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__18334 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__18335 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__18336 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__18337 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__18338 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18332);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__18333);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__18334);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__18335);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__18336);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__18337);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18338);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18331);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__18330);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__18329);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__18328);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__18327);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__18326);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18325);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq18322){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18322));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18499 = arguments.length;
var i__5770__auto___18500 = (0);
while(true){
if((i__5770__auto___18500 < len__5769__auto___18499)){
args__5775__auto__.push((arguments[i__5770__auto___18500]));

var G__18501 = (i__5770__auto___18500 + (1));
i__5770__auto___18500 = G__18501;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__18344 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__18345 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__18346 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__18347 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__18348 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__18349 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__18350 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__18351 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__18352 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__18354 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__18355 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__18356 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__18350);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__18351);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__18352);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__18354);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__18355);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18356);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18349);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__18348);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__18347);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__18346);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__18345);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__18344);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq18341){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18341));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18509 = arguments.length;
var i__5770__auto___18510 = (0);
while(true){
if((i__5770__auto___18510 < len__5769__auto___18509)){
args__5775__auto__.push((arguments[i__5770__auto___18510]));

var G__18511 = (i__5770__auto___18510 + (1));
i__5770__auto___18510 = G__18511;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__18368 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__18369 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__18370 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__18371 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__18372 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__18373 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__18374 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__18375 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__18376 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__18377 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__18378 = null;
var _STAR_print_newline_STAR__temp_val__18379 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18374);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__18375);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__18376);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__18377);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__18378);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18379);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18373);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__18372);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__18371);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__18370);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__18369);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18368);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq18367){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18367));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18519 = arguments.length;
var i__5770__auto___18520 = (0);
while(true){
if((i__5770__auto___18520 < len__5769__auto___18519)){
args__5775__auto__.push((arguments[i__5770__auto___18520]));

var G__18522 = (i__5770__auto___18520 + (1));
i__5770__auto___18520 = G__18522;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__18390 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__18391 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__18392 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__18393 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__18394 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__18395 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__18396 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__18397 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__18398 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__18399 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__18400 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__18401 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__18396);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__18397);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__18398);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__18399);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__18400);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18401);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18395);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__18394);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__18393);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__18392);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__18391);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__18390);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq18386){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18386));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18525 = arguments.length;
var i__5770__auto___18526 = (0);
while(true){
if((i__5770__auto___18526 < len__5769__auto___18525)){
args__5775__auto__.push((arguments[i__5770__auto___18526]));

var G__18528 = (i__5770__auto___18526 + (1));
i__5770__auto___18526 = G__18528;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__18410 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__18411 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__18412 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__18413 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__18414 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__18415 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__18416 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__18417 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__18418 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__18419 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__18420 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__18421 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__18422 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__18423 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18417);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__18418);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__18419);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__18420);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__18421);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__18422);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18423);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18416);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__18415);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__18414);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__18413);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__18412);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__18411);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18410);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq18408){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18408));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18531 = arguments.length;
var i__5770__auto___18532 = (0);
while(true){
if((i__5770__auto___18532 < len__5769__auto___18531)){
args__5775__auto__.push((arguments[i__5770__auto___18532]));

var G__18534 = (i__5770__auto___18532 + (1));
i__5770__auto___18532 = G__18534;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__18428__auto__","s__18428__auto__",-2098362520,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__18429__auto__","x__18429__auto__",369337170,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__18428__auto__","s__18428__auto__",-2098362520,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__18429__auto__","x__18429__auto__",369337170,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__18428__auto__","s__18428__auto__",-2098362520,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq18431){
var G__18432 = cljs.core.first(seq18431);
var seq18431__$1 = cljs.core.next(seq18431);
var G__18433 = cljs.core.first(seq18431__$1);
var seq18431__$2 = cljs.core.next(seq18431__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18432,G__18433,seq18431__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
