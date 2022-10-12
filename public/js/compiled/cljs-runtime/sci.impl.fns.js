goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var self_ref_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__17292 = (fixed_arity | (0));
switch (G__17292) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__17293){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__17293);

while(true){
var ret__16171__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16171__auto__)){
continue;
} else {
return ret__16171__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__17293 = null;
if (arguments.length > 0) {
var G__18245__i = 0, G__18245__a = new Array(arguments.length -  0);
while (G__18245__i < G__18245__a.length) {G__18245__a[G__18245__i] = arguments[G__18245__i + 0]; ++G__18245__i;}
  G__17293 = new cljs.core.IndexedSeq(G__18245__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__17293);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__18246){
var G__17293 = cljs.core.seq(arglist__18246);
return sci$impl$fns$fun_$_arity_0__delegate(G__17293);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__17297 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__17295,G__17296){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17295);

(invoc_array[vararg_idx] = G__17296);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__17295,var_args){
var G__17296 = null;
if (arguments.length > 1) {
var G__18248__i = 0, G__18248__a = new Array(arguments.length -  1);
while (G__18248__i < G__18248__a.length) {G__18248__a[G__18248__i] = arguments[G__18248__i + 1]; ++G__18248__i;}
  G__17296 = new cljs.core.IndexedSeq(G__18248__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__17295,G__17296);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__18249){
var G__17295 = cljs.core.first(arglist__18249);
var G__17296 = cljs.core.rest(arglist__18249);
return sci$impl$fns$fun_$_arity_1__delegate(G__17295,G__17296);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__17303 = cljs.core._nth(params,(0));
var G__17304 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__17300,G__17301,G__17302){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17300);

(invoc_array[(1)] = G__17301);

(invoc_array[vararg_idx] = G__17302);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__17300,G__17301,var_args){
var G__17302 = null;
if (arguments.length > 2) {
var G__18251__i = 0, G__18251__a = new Array(arguments.length -  2);
while (G__18251__i < G__18251__a.length) {G__18251__a[G__18251__i] = arguments[G__18251__i + 2]; ++G__18251__i;}
  G__17302 = new cljs.core.IndexedSeq(G__18251__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__17300,G__17301,G__17302);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__18252){
var G__17300 = cljs.core.first(arglist__18252);
arglist__18252 = cljs.core.next(arglist__18252);
var G__17301 = cljs.core.first(arglist__18252);
var G__17302 = cljs.core.rest(arglist__18252);
return sci$impl$fns$fun_$_arity_2__delegate(G__17300,G__17301,G__17302);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__17311 = cljs.core._nth(params,(0));
var G__17312 = cljs.core._nth(params,(1));
var G__17313 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__17307,G__17308,G__17309,G__17310){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17307);

(invoc_array[(1)] = G__17308);

(invoc_array[(2)] = G__17309);

(invoc_array[vararg_idx] = G__17310);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__17307,G__17308,G__17309,var_args){
var G__17310 = null;
if (arguments.length > 3) {
var G__18253__i = 0, G__18253__a = new Array(arguments.length -  3);
while (G__18253__i < G__18253__a.length) {G__18253__a[G__18253__i] = arguments[G__18253__i + 3]; ++G__18253__i;}
  G__17310 = new cljs.core.IndexedSeq(G__18253__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__17307,G__17308,G__17309,G__17310);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__18271){
var G__17307 = cljs.core.first(arglist__18271);
arglist__18271 = cljs.core.next(arglist__18271);
var G__17308 = cljs.core.first(arglist__18271);
arglist__18271 = cljs.core.next(arglist__18271);
var G__17309 = cljs.core.first(arglist__18271);
var G__17310 = cljs.core.rest(arglist__18271);
return sci$impl$fns$fun_$_arity_3__delegate(G__17307,G__17308,G__17309,G__17310);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__17321 = cljs.core._nth(params,(0));
var G__17322 = cljs.core._nth(params,(1));
var G__17323 = cljs.core._nth(params,(2));
var G__17324 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__17316,G__17317,G__17318,G__17319,G__17320){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17316);

(invoc_array[(1)] = G__17317);

(invoc_array[(2)] = G__17318);

(invoc_array[(3)] = G__17319);

(invoc_array[vararg_idx] = G__17320);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__17316,G__17317,G__17318,G__17319,var_args){
var G__17320 = null;
if (arguments.length > 4) {
var G__18272__i = 0, G__18272__a = new Array(arguments.length -  4);
while (G__18272__i < G__18272__a.length) {G__18272__a[G__18272__i] = arguments[G__18272__i + 4]; ++G__18272__i;}
  G__17320 = new cljs.core.IndexedSeq(G__18272__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__17316,G__17317,G__17318,G__17319,G__17320);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__18273){
var G__17316 = cljs.core.first(arglist__18273);
arglist__18273 = cljs.core.next(arglist__18273);
var G__17317 = cljs.core.first(arglist__18273);
arglist__18273 = cljs.core.next(arglist__18273);
var G__17318 = cljs.core.first(arglist__18273);
arglist__18273 = cljs.core.next(arglist__18273);
var G__17319 = cljs.core.first(arglist__18273);
var G__17320 = cljs.core.rest(arglist__18273);
return sci$impl$fns$fun_$_arity_4__delegate(G__17316,G__17317,G__17318,G__17319,G__17320);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__17333 = cljs.core._nth(params,(0));
var G__17334 = cljs.core._nth(params,(1));
var G__17335 = cljs.core._nth(params,(2));
var G__17336 = cljs.core._nth(params,(3));
var G__17337 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__17327,G__17328,G__17329,G__17330,G__17331,G__17332){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17327);

(invoc_array[(1)] = G__17328);

(invoc_array[(2)] = G__17329);

(invoc_array[(3)] = G__17330);

(invoc_array[(4)] = G__17331);

(invoc_array[vararg_idx] = G__17332);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__17327,G__17328,G__17329,G__17330,G__17331,var_args){
var G__17332 = null;
if (arguments.length > 5) {
var G__18276__i = 0, G__18276__a = new Array(arguments.length -  5);
while (G__18276__i < G__18276__a.length) {G__18276__a[G__18276__i] = arguments[G__18276__i + 5]; ++G__18276__i;}
  G__17332 = new cljs.core.IndexedSeq(G__18276__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__17327,G__17328,G__17329,G__17330,G__17331,G__17332);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__18277){
var G__17327 = cljs.core.first(arglist__18277);
arglist__18277 = cljs.core.next(arglist__18277);
var G__17328 = cljs.core.first(arglist__18277);
arglist__18277 = cljs.core.next(arglist__18277);
var G__17329 = cljs.core.first(arglist__18277);
arglist__18277 = cljs.core.next(arglist__18277);
var G__17330 = cljs.core.first(arglist__18277);
arglist__18277 = cljs.core.next(arglist__18277);
var G__17331 = cljs.core.first(arglist__18277);
var G__17332 = cljs.core.rest(arglist__18277);
return sci$impl$fns$fun_$_arity_5__delegate(G__17327,G__17328,G__17329,G__17330,G__17331,G__17332);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__17345 = cljs.core._nth(params,(0));
var G__17346 = cljs.core._nth(params,(1));
var G__17347 = cljs.core._nth(params,(2));
var G__17348 = cljs.core._nth(params,(3));
var G__17349 = cljs.core._nth(params,(4));
var G__17350 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__17338,G__17339,G__17340,G__17341,G__17342,G__17343,G__17344){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17338);

(invoc_array[(1)] = G__17339);

(invoc_array[(2)] = G__17340);

(invoc_array[(3)] = G__17341);

(invoc_array[(4)] = G__17342);

(invoc_array[(5)] = G__17343);

(invoc_array[vararg_idx] = G__17344);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__17338,G__17339,G__17340,G__17341,G__17342,G__17343,var_args){
var G__17344 = null;
if (arguments.length > 6) {
var G__18279__i = 0, G__18279__a = new Array(arguments.length -  6);
while (G__18279__i < G__18279__a.length) {G__18279__a[G__18279__i] = arguments[G__18279__i + 6]; ++G__18279__i;}
  G__17344 = new cljs.core.IndexedSeq(G__18279__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__17338,G__17339,G__17340,G__17341,G__17342,G__17343,G__17344);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__18280){
var G__17338 = cljs.core.first(arglist__18280);
arglist__18280 = cljs.core.next(arglist__18280);
var G__17339 = cljs.core.first(arglist__18280);
arglist__18280 = cljs.core.next(arglist__18280);
var G__17340 = cljs.core.first(arglist__18280);
arglist__18280 = cljs.core.next(arglist__18280);
var G__17341 = cljs.core.first(arglist__18280);
arglist__18280 = cljs.core.next(arglist__18280);
var G__17342 = cljs.core.first(arglist__18280);
arglist__18280 = cljs.core.next(arglist__18280);
var G__17343 = cljs.core.first(arglist__18280);
var G__17344 = cljs.core.rest(arglist__18280);
return sci$impl$fns$fun_$_arity_6__delegate(G__17338,G__17339,G__17340,G__17341,G__17342,G__17343,G__17344);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__17362 = cljs.core._nth(params,(0));
var G__17363 = cljs.core._nth(params,(1));
var G__17364 = cljs.core._nth(params,(2));
var G__17365 = cljs.core._nth(params,(3));
var G__17366 = cljs.core._nth(params,(4));
var G__17367 = cljs.core._nth(params,(5));
var G__17368 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__17354,G__17355,G__17356,G__17357,G__17358,G__17359,G__17360,G__17361){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17354);

(invoc_array[(1)] = G__17355);

(invoc_array[(2)] = G__17356);

(invoc_array[(3)] = G__17357);

(invoc_array[(4)] = G__17358);

(invoc_array[(5)] = G__17359);

(invoc_array[(6)] = G__17360);

(invoc_array[vararg_idx] = G__17361);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__17354,G__17355,G__17356,G__17357,G__17358,G__17359,G__17360,var_args){
var G__17361 = null;
if (arguments.length > 7) {
var G__18306__i = 0, G__18306__a = new Array(arguments.length -  7);
while (G__18306__i < G__18306__a.length) {G__18306__a[G__18306__i] = arguments[G__18306__i + 7]; ++G__18306__i;}
  G__17361 = new cljs.core.IndexedSeq(G__18306__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__17354,G__17355,G__17356,G__17357,G__17358,G__17359,G__17360,G__17361);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__18307){
var G__17354 = cljs.core.first(arglist__18307);
arglist__18307 = cljs.core.next(arglist__18307);
var G__17355 = cljs.core.first(arglist__18307);
arglist__18307 = cljs.core.next(arglist__18307);
var G__17356 = cljs.core.first(arglist__18307);
arglist__18307 = cljs.core.next(arglist__18307);
var G__17357 = cljs.core.first(arglist__18307);
arglist__18307 = cljs.core.next(arglist__18307);
var G__17358 = cljs.core.first(arglist__18307);
arglist__18307 = cljs.core.next(arglist__18307);
var G__17359 = cljs.core.first(arglist__18307);
arglist__18307 = cljs.core.next(arglist__18307);
var G__17360 = cljs.core.first(arglist__18307);
var G__17361 = cljs.core.rest(arglist__18307);
return sci$impl$fns$fun_$_arity_7__delegate(G__17354,G__17355,G__17356,G__17357,G__17358,G__17359,G__17360,G__17361);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__17378 = cljs.core._nth(params,(0));
var G__17379 = cljs.core._nth(params,(1));
var G__17380 = cljs.core._nth(params,(2));
var G__17381 = cljs.core._nth(params,(3));
var G__17382 = cljs.core._nth(params,(4));
var G__17383 = cljs.core._nth(params,(5));
var G__17384 = cljs.core._nth(params,(6));
var G__17385 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__17369,G__17370,G__17371,G__17372,G__17373,G__17374,G__17375,G__17376,G__17377){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17369);

(invoc_array[(1)] = G__17370);

(invoc_array[(2)] = G__17371);

(invoc_array[(3)] = G__17372);

(invoc_array[(4)] = G__17373);

(invoc_array[(5)] = G__17374);

(invoc_array[(6)] = G__17375);

(invoc_array[(7)] = G__17376);

(invoc_array[vararg_idx] = G__17377);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__17369,G__17370,G__17371,G__17372,G__17373,G__17374,G__17375,G__17376,var_args){
var G__17377 = null;
if (arguments.length > 8) {
var G__18320__i = 0, G__18320__a = new Array(arguments.length -  8);
while (G__18320__i < G__18320__a.length) {G__18320__a[G__18320__i] = arguments[G__18320__i + 8]; ++G__18320__i;}
  G__17377 = new cljs.core.IndexedSeq(G__18320__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__17369,G__17370,G__17371,G__17372,G__17373,G__17374,G__17375,G__17376,G__17377);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__18321){
var G__17369 = cljs.core.first(arglist__18321);
arglist__18321 = cljs.core.next(arglist__18321);
var G__17370 = cljs.core.first(arglist__18321);
arglist__18321 = cljs.core.next(arglist__18321);
var G__17371 = cljs.core.first(arglist__18321);
arglist__18321 = cljs.core.next(arglist__18321);
var G__17372 = cljs.core.first(arglist__18321);
arglist__18321 = cljs.core.next(arglist__18321);
var G__17373 = cljs.core.first(arglist__18321);
arglist__18321 = cljs.core.next(arglist__18321);
var G__17374 = cljs.core.first(arglist__18321);
arglist__18321 = cljs.core.next(arglist__18321);
var G__17375 = cljs.core.first(arglist__18321);
arglist__18321 = cljs.core.next(arglist__18321);
var G__17376 = cljs.core.first(arglist__18321);
var G__17377 = cljs.core.rest(arglist__18321);
return sci$impl$fns$fun_$_arity_8__delegate(G__17369,G__17370,G__17371,G__17372,G__17373,G__17374,G__17375,G__17376,G__17377);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__17396 = cljs.core._nth(params,(0));
var G__17397 = cljs.core._nth(params,(1));
var G__17398 = cljs.core._nth(params,(2));
var G__17399 = cljs.core._nth(params,(3));
var G__17400 = cljs.core._nth(params,(4));
var G__17401 = cljs.core._nth(params,(5));
var G__17402 = cljs.core._nth(params,(6));
var G__17403 = cljs.core._nth(params,(7));
var G__17404 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__17386,G__17387,G__17388,G__17389,G__17390,G__17391,G__17392,G__17393,G__17394,G__17395){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17386);

(invoc_array[(1)] = G__17387);

(invoc_array[(2)] = G__17388);

(invoc_array[(3)] = G__17389);

(invoc_array[(4)] = G__17390);

(invoc_array[(5)] = G__17391);

(invoc_array[(6)] = G__17392);

(invoc_array[(7)] = G__17393);

(invoc_array[(8)] = G__17394);

(invoc_array[vararg_idx] = G__17395);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__17386,G__17387,G__17388,G__17389,G__17390,G__17391,G__17392,G__17393,G__17394,var_args){
var G__17395 = null;
if (arguments.length > 9) {
var G__18323__i = 0, G__18323__a = new Array(arguments.length -  9);
while (G__18323__i < G__18323__a.length) {G__18323__a[G__18323__i] = arguments[G__18323__i + 9]; ++G__18323__i;}
  G__17395 = new cljs.core.IndexedSeq(G__18323__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__17386,G__17387,G__17388,G__17389,G__17390,G__17391,G__17392,G__17393,G__17394,G__17395);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__18324){
var G__17386 = cljs.core.first(arglist__18324);
arglist__18324 = cljs.core.next(arglist__18324);
var G__17387 = cljs.core.first(arglist__18324);
arglist__18324 = cljs.core.next(arglist__18324);
var G__17388 = cljs.core.first(arglist__18324);
arglist__18324 = cljs.core.next(arglist__18324);
var G__17389 = cljs.core.first(arglist__18324);
arglist__18324 = cljs.core.next(arglist__18324);
var G__17390 = cljs.core.first(arglist__18324);
arglist__18324 = cljs.core.next(arglist__18324);
var G__17391 = cljs.core.first(arglist__18324);
arglist__18324 = cljs.core.next(arglist__18324);
var G__17392 = cljs.core.first(arglist__18324);
arglist__18324 = cljs.core.next(arglist__18324);
var G__17393 = cljs.core.first(arglist__18324);
arglist__18324 = cljs.core.next(arglist__18324);
var G__17394 = cljs.core.first(arglist__18324);
var G__17395 = cljs.core.rest(arglist__18324);
return sci$impl$fns$fun_$_arity_9__delegate(G__17386,G__17387,G__17388,G__17389,G__17390,G__17391,G__17392,G__17393,G__17394,G__17395);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__17416 = cljs.core._nth(params,(0));
var G__17417 = cljs.core._nth(params,(1));
var G__17418 = cljs.core._nth(params,(2));
var G__17419 = cljs.core._nth(params,(3));
var G__17420 = cljs.core._nth(params,(4));
var G__17421 = cljs.core._nth(params,(5));
var G__17422 = cljs.core._nth(params,(6));
var G__17423 = cljs.core._nth(params,(7));
var G__17424 = cljs.core._nth(params,(8));
var G__17425 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__17405,G__17406,G__17407,G__17408,G__17409,G__17410,G__17411,G__17412,G__17413,G__17414,G__17415){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17405);

(invoc_array[(1)] = G__17406);

(invoc_array[(2)] = G__17407);

(invoc_array[(3)] = G__17408);

(invoc_array[(4)] = G__17409);

(invoc_array[(5)] = G__17410);

(invoc_array[(6)] = G__17411);

(invoc_array[(7)] = G__17412);

(invoc_array[(8)] = G__17413);

(invoc_array[(9)] = G__17414);

(invoc_array[vararg_idx] = G__17415);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__17405,G__17406,G__17407,G__17408,G__17409,G__17410,G__17411,G__17412,G__17413,G__17414,var_args){
var G__17415 = null;
if (arguments.length > 10) {
var G__18339__i = 0, G__18339__a = new Array(arguments.length -  10);
while (G__18339__i < G__18339__a.length) {G__18339__a[G__18339__i] = arguments[G__18339__i + 10]; ++G__18339__i;}
  G__17415 = new cljs.core.IndexedSeq(G__18339__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__17405,G__17406,G__17407,G__17408,G__17409,G__17410,G__17411,G__17412,G__17413,G__17414,G__17415);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__18340){
var G__17405 = cljs.core.first(arglist__18340);
arglist__18340 = cljs.core.next(arglist__18340);
var G__17406 = cljs.core.first(arglist__18340);
arglist__18340 = cljs.core.next(arglist__18340);
var G__17407 = cljs.core.first(arglist__18340);
arglist__18340 = cljs.core.next(arglist__18340);
var G__17408 = cljs.core.first(arglist__18340);
arglist__18340 = cljs.core.next(arglist__18340);
var G__17409 = cljs.core.first(arglist__18340);
arglist__18340 = cljs.core.next(arglist__18340);
var G__17410 = cljs.core.first(arglist__18340);
arglist__18340 = cljs.core.next(arglist__18340);
var G__17411 = cljs.core.first(arglist__18340);
arglist__18340 = cljs.core.next(arglist__18340);
var G__17412 = cljs.core.first(arglist__18340);
arglist__18340 = cljs.core.next(arglist__18340);
var G__17413 = cljs.core.first(arglist__18340);
arglist__18340 = cljs.core.next(arglist__18340);
var G__17414 = cljs.core.first(arglist__18340);
var G__17415 = cljs.core.rest(arglist__18340);
return sci$impl$fns$fun_$_arity_10__delegate(G__17405,G__17406,G__17407,G__17408,G__17409,G__17410,G__17411,G__17412,G__17413,G__17414,G__17415);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__17444 = cljs.core._nth(params,(0));
var G__17445 = cljs.core._nth(params,(1));
var G__17446 = cljs.core._nth(params,(2));
var G__17447 = cljs.core._nth(params,(3));
var G__17448 = cljs.core._nth(params,(4));
var G__17449 = cljs.core._nth(params,(5));
var G__17450 = cljs.core._nth(params,(6));
var G__17451 = cljs.core._nth(params,(7));
var G__17452 = cljs.core._nth(params,(8));
var G__17453 = cljs.core._nth(params,(9));
var G__17454 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__17432,G__17433,G__17434,G__17435,G__17436,G__17437,G__17438,G__17439,G__17440,G__17441,G__17442,G__17443){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17432);

(invoc_array[(1)] = G__17433);

(invoc_array[(2)] = G__17434);

(invoc_array[(3)] = G__17435);

(invoc_array[(4)] = G__17436);

(invoc_array[(5)] = G__17437);

(invoc_array[(6)] = G__17438);

(invoc_array[(7)] = G__17439);

(invoc_array[(8)] = G__17440);

(invoc_array[(9)] = G__17441);

(invoc_array[(10)] = G__17442);

(invoc_array[vararg_idx] = G__17443);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__17432,G__17433,G__17434,G__17435,G__17436,G__17437,G__17438,G__17439,G__17440,G__17441,G__17442,var_args){
var G__17443 = null;
if (arguments.length > 11) {
var G__18342__i = 0, G__18342__a = new Array(arguments.length -  11);
while (G__18342__i < G__18342__a.length) {G__18342__a[G__18342__i] = arguments[G__18342__i + 11]; ++G__18342__i;}
  G__17443 = new cljs.core.IndexedSeq(G__18342__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__17432,G__17433,G__17434,G__17435,G__17436,G__17437,G__17438,G__17439,G__17440,G__17441,G__17442,G__17443);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__18343){
var G__17432 = cljs.core.first(arglist__18343);
arglist__18343 = cljs.core.next(arglist__18343);
var G__17433 = cljs.core.first(arglist__18343);
arglist__18343 = cljs.core.next(arglist__18343);
var G__17434 = cljs.core.first(arglist__18343);
arglist__18343 = cljs.core.next(arglist__18343);
var G__17435 = cljs.core.first(arglist__18343);
arglist__18343 = cljs.core.next(arglist__18343);
var G__17436 = cljs.core.first(arglist__18343);
arglist__18343 = cljs.core.next(arglist__18343);
var G__17437 = cljs.core.first(arglist__18343);
arglist__18343 = cljs.core.next(arglist__18343);
var G__17438 = cljs.core.first(arglist__18343);
arglist__18343 = cljs.core.next(arglist__18343);
var G__17439 = cljs.core.first(arglist__18343);
arglist__18343 = cljs.core.next(arglist__18343);
var G__17440 = cljs.core.first(arglist__18343);
arglist__18343 = cljs.core.next(arglist__18343);
var G__17441 = cljs.core.first(arglist__18343);
arglist__18343 = cljs.core.next(arglist__18343);
var G__17442 = cljs.core.first(arglist__18343);
var G__17443 = cljs.core.rest(arglist__18343);
return sci$impl$fns$fun_$_arity_11__delegate(G__17432,G__17433,G__17434,G__17435,G__17436,G__17437,G__17438,G__17439,G__17440,G__17441,G__17442,G__17443);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__17474 = cljs.core._nth(params,(0));
var G__17475 = cljs.core._nth(params,(1));
var G__17476 = cljs.core._nth(params,(2));
var G__17477 = cljs.core._nth(params,(3));
var G__17478 = cljs.core._nth(params,(4));
var G__17479 = cljs.core._nth(params,(5));
var G__17480 = cljs.core._nth(params,(6));
var G__17481 = cljs.core._nth(params,(7));
var G__17482 = cljs.core._nth(params,(8));
var G__17483 = cljs.core._nth(params,(9));
var G__17484 = cljs.core._nth(params,(10));
var G__17485 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__17461,G__17462,G__17463,G__17464,G__17465,G__17466,G__17467,G__17468,G__17469,G__17470,G__17471,G__17472,G__17473){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17461);

(invoc_array[(1)] = G__17462);

(invoc_array[(2)] = G__17463);

(invoc_array[(3)] = G__17464);

(invoc_array[(4)] = G__17465);

(invoc_array[(5)] = G__17466);

(invoc_array[(6)] = G__17467);

(invoc_array[(7)] = G__17468);

(invoc_array[(8)] = G__17469);

(invoc_array[(9)] = G__17470);

(invoc_array[(10)] = G__17471);

(invoc_array[(11)] = G__17472);

(invoc_array[vararg_idx] = G__17473);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__17461,G__17462,G__17463,G__17464,G__17465,G__17466,G__17467,G__17468,G__17469,G__17470,G__17471,G__17472,var_args){
var G__17473 = null;
if (arguments.length > 12) {
var G__18360__i = 0, G__18360__a = new Array(arguments.length -  12);
while (G__18360__i < G__18360__a.length) {G__18360__a[G__18360__i] = arguments[G__18360__i + 12]; ++G__18360__i;}
  G__17473 = new cljs.core.IndexedSeq(G__18360__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__17461,G__17462,G__17463,G__17464,G__17465,G__17466,G__17467,G__17468,G__17469,G__17470,G__17471,G__17472,G__17473);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__18361){
var G__17461 = cljs.core.first(arglist__18361);
arglist__18361 = cljs.core.next(arglist__18361);
var G__17462 = cljs.core.first(arglist__18361);
arglist__18361 = cljs.core.next(arglist__18361);
var G__17463 = cljs.core.first(arglist__18361);
arglist__18361 = cljs.core.next(arglist__18361);
var G__17464 = cljs.core.first(arglist__18361);
arglist__18361 = cljs.core.next(arglist__18361);
var G__17465 = cljs.core.first(arglist__18361);
arglist__18361 = cljs.core.next(arglist__18361);
var G__17466 = cljs.core.first(arglist__18361);
arglist__18361 = cljs.core.next(arglist__18361);
var G__17467 = cljs.core.first(arglist__18361);
arglist__18361 = cljs.core.next(arglist__18361);
var G__17468 = cljs.core.first(arglist__18361);
arglist__18361 = cljs.core.next(arglist__18361);
var G__17469 = cljs.core.first(arglist__18361);
arglist__18361 = cljs.core.next(arglist__18361);
var G__17470 = cljs.core.first(arglist__18361);
arglist__18361 = cljs.core.next(arglist__18361);
var G__17471 = cljs.core.first(arglist__18361);
arglist__18361 = cljs.core.next(arglist__18361);
var G__17472 = cljs.core.first(arglist__18361);
var G__17473 = cljs.core.rest(arglist__18361);
return sci$impl$fns$fun_$_arity_12__delegate(G__17461,G__17462,G__17463,G__17464,G__17465,G__17466,G__17467,G__17468,G__17469,G__17470,G__17471,G__17472,G__17473);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__17500 = cljs.core._nth(params,(0));
var G__17501 = cljs.core._nth(params,(1));
var G__17502 = cljs.core._nth(params,(2));
var G__17503 = cljs.core._nth(params,(3));
var G__17504 = cljs.core._nth(params,(4));
var G__17505 = cljs.core._nth(params,(5));
var G__17506 = cljs.core._nth(params,(6));
var G__17507 = cljs.core._nth(params,(7));
var G__17508 = cljs.core._nth(params,(8));
var G__17509 = cljs.core._nth(params,(9));
var G__17510 = cljs.core._nth(params,(10));
var G__17511 = cljs.core._nth(params,(11));
var G__17512 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__17486,G__17487,G__17488,G__17489,G__17490,G__17491,G__17492,G__17493,G__17494,G__17495,G__17496,G__17497,G__17498,G__17499){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17486);

(invoc_array[(1)] = G__17487);

(invoc_array[(2)] = G__17488);

(invoc_array[(3)] = G__17489);

(invoc_array[(4)] = G__17490);

(invoc_array[(5)] = G__17491);

(invoc_array[(6)] = G__17492);

(invoc_array[(7)] = G__17493);

(invoc_array[(8)] = G__17494);

(invoc_array[(9)] = G__17495);

(invoc_array[(10)] = G__17496);

(invoc_array[(11)] = G__17497);

(invoc_array[(12)] = G__17498);

(invoc_array[vararg_idx] = G__17499);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__17486,G__17487,G__17488,G__17489,G__17490,G__17491,G__17492,G__17493,G__17494,G__17495,G__17496,G__17497,G__17498,var_args){
var G__17499 = null;
if (arguments.length > 13) {
var G__18365__i = 0, G__18365__a = new Array(arguments.length -  13);
while (G__18365__i < G__18365__a.length) {G__18365__a[G__18365__i] = arguments[G__18365__i + 13]; ++G__18365__i;}
  G__17499 = new cljs.core.IndexedSeq(G__18365__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__17486,G__17487,G__17488,G__17489,G__17490,G__17491,G__17492,G__17493,G__17494,G__17495,G__17496,G__17497,G__17498,G__17499);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__18366){
var G__17486 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17487 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17488 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17489 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17490 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17491 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17492 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17493 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17494 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17495 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17496 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17497 = cljs.core.first(arglist__18366);
arglist__18366 = cljs.core.next(arglist__18366);
var G__17498 = cljs.core.first(arglist__18366);
var G__17499 = cljs.core.rest(arglist__18366);
return sci$impl$fns$fun_$_arity_13__delegate(G__17486,G__17487,G__17488,G__17489,G__17490,G__17491,G__17492,G__17493,G__17494,G__17495,G__17496,G__17497,G__17498,G__17499);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__17528 = cljs.core._nth(params,(0));
var G__17529 = cljs.core._nth(params,(1));
var G__17530 = cljs.core._nth(params,(2));
var G__17531 = cljs.core._nth(params,(3));
var G__17532 = cljs.core._nth(params,(4));
var G__17533 = cljs.core._nth(params,(5));
var G__17534 = cljs.core._nth(params,(6));
var G__17535 = cljs.core._nth(params,(7));
var G__17536 = cljs.core._nth(params,(8));
var G__17537 = cljs.core._nth(params,(9));
var G__17538 = cljs.core._nth(params,(10));
var G__17539 = cljs.core._nth(params,(11));
var G__17540 = cljs.core._nth(params,(12));
var G__17541 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__17513,G__17514,G__17515,G__17516,G__17517,G__17518,G__17519,G__17520,G__17521,G__17522,G__17523,G__17524,G__17525,G__17526,G__17527){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17513);

(invoc_array[(1)] = G__17514);

(invoc_array[(2)] = G__17515);

(invoc_array[(3)] = G__17516);

(invoc_array[(4)] = G__17517);

(invoc_array[(5)] = G__17518);

(invoc_array[(6)] = G__17519);

(invoc_array[(7)] = G__17520);

(invoc_array[(8)] = G__17521);

(invoc_array[(9)] = G__17522);

(invoc_array[(10)] = G__17523);

(invoc_array[(11)] = G__17524);

(invoc_array[(12)] = G__17525);

(invoc_array[(13)] = G__17526);

(invoc_array[vararg_idx] = G__17527);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__17513,G__17514,G__17515,G__17516,G__17517,G__17518,G__17519,G__17520,G__17521,G__17522,G__17523,G__17524,G__17525,G__17526,var_args){
var G__17527 = null;
if (arguments.length > 14) {
var G__18380__i = 0, G__18380__a = new Array(arguments.length -  14);
while (G__18380__i < G__18380__a.length) {G__18380__a[G__18380__i] = arguments[G__18380__i + 14]; ++G__18380__i;}
  G__17527 = new cljs.core.IndexedSeq(G__18380__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__17513,G__17514,G__17515,G__17516,G__17517,G__17518,G__17519,G__17520,G__17521,G__17522,G__17523,G__17524,G__17525,G__17526,G__17527);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__18382){
var G__17513 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17514 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17515 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17516 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17517 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17518 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17519 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17520 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17521 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17522 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17523 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17524 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17525 = cljs.core.first(arglist__18382);
arglist__18382 = cljs.core.next(arglist__18382);
var G__17526 = cljs.core.first(arglist__18382);
var G__17527 = cljs.core.rest(arglist__18382);
return sci$impl$fns$fun_$_arity_14__delegate(G__17513,G__17514,G__17515,G__17516,G__17517,G__17518,G__17519,G__17520,G__17521,G__17522,G__17523,G__17524,G__17525,G__17526,G__17527);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__17558 = cljs.core._nth(params,(0));
var G__17559 = cljs.core._nth(params,(1));
var G__17560 = cljs.core._nth(params,(2));
var G__17561 = cljs.core._nth(params,(3));
var G__17562 = cljs.core._nth(params,(4));
var G__17563 = cljs.core._nth(params,(5));
var G__17564 = cljs.core._nth(params,(6));
var G__17565 = cljs.core._nth(params,(7));
var G__17566 = cljs.core._nth(params,(8));
var G__17567 = cljs.core._nth(params,(9));
var G__17568 = cljs.core._nth(params,(10));
var G__17569 = cljs.core._nth(params,(11));
var G__17570 = cljs.core._nth(params,(12));
var G__17571 = cljs.core._nth(params,(13));
var G__17572 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__17542,G__17543,G__17544,G__17545,G__17546,G__17547,G__17548,G__17549,G__17550,G__17551,G__17552,G__17553,G__17554,G__17555,G__17556,G__17557){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17542);

(invoc_array[(1)] = G__17543);

(invoc_array[(2)] = G__17544);

(invoc_array[(3)] = G__17545);

(invoc_array[(4)] = G__17546);

(invoc_array[(5)] = G__17547);

(invoc_array[(6)] = G__17548);

(invoc_array[(7)] = G__17549);

(invoc_array[(8)] = G__17550);

(invoc_array[(9)] = G__17551);

(invoc_array[(10)] = G__17552);

(invoc_array[(11)] = G__17553);

(invoc_array[(12)] = G__17554);

(invoc_array[(13)] = G__17555);

(invoc_array[(14)] = G__17556);

(invoc_array[vararg_idx] = G__17557);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__17542,G__17543,G__17544,G__17545,G__17546,G__17547,G__17548,G__17549,G__17550,G__17551,G__17552,G__17553,G__17554,G__17555,G__17556,var_args){
var G__17557 = null;
if (arguments.length > 15) {
var G__18387__i = 0, G__18387__a = new Array(arguments.length -  15);
while (G__18387__i < G__18387__a.length) {G__18387__a[G__18387__i] = arguments[G__18387__i + 15]; ++G__18387__i;}
  G__17557 = new cljs.core.IndexedSeq(G__18387__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__17542,G__17543,G__17544,G__17545,G__17546,G__17547,G__17548,G__17549,G__17550,G__17551,G__17552,G__17553,G__17554,G__17555,G__17556,G__17557);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__18388){
var G__17542 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17543 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17544 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17545 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17546 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17547 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17548 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17549 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17550 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17551 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17552 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17553 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17554 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17555 = cljs.core.first(arglist__18388);
arglist__18388 = cljs.core.next(arglist__18388);
var G__17556 = cljs.core.first(arglist__18388);
var G__17557 = cljs.core.rest(arglist__18388);
return sci$impl$fns$fun_$_arity_15__delegate(G__17542,G__17543,G__17544,G__17545,G__17546,G__17547,G__17548,G__17549,G__17550,G__17551,G__17552,G__17553,G__17554,G__17555,G__17556,G__17557);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__17590 = cljs.core._nth(params,(0));
var G__17591 = cljs.core._nth(params,(1));
var G__17592 = cljs.core._nth(params,(2));
var G__17593 = cljs.core._nth(params,(3));
var G__17594 = cljs.core._nth(params,(4));
var G__17595 = cljs.core._nth(params,(5));
var G__17596 = cljs.core._nth(params,(6));
var G__17597 = cljs.core._nth(params,(7));
var G__17598 = cljs.core._nth(params,(8));
var G__17599 = cljs.core._nth(params,(9));
var G__17600 = cljs.core._nth(params,(10));
var G__17601 = cljs.core._nth(params,(11));
var G__17602 = cljs.core._nth(params,(12));
var G__17603 = cljs.core._nth(params,(13));
var G__17604 = cljs.core._nth(params,(14));
var G__17605 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__17573,G__17574,G__17575,G__17576,G__17577,G__17578,G__17579,G__17580,G__17581,G__17582,G__17583,G__17584,G__17585,G__17586,G__17587,G__17588,G__17589){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17573);

(invoc_array[(1)] = G__17574);

(invoc_array[(2)] = G__17575);

(invoc_array[(3)] = G__17576);

(invoc_array[(4)] = G__17577);

(invoc_array[(5)] = G__17578);

(invoc_array[(6)] = G__17579);

(invoc_array[(7)] = G__17580);

(invoc_array[(8)] = G__17581);

(invoc_array[(9)] = G__17582);

(invoc_array[(10)] = G__17583);

(invoc_array[(11)] = G__17584);

(invoc_array[(12)] = G__17585);

(invoc_array[(13)] = G__17586);

(invoc_array[(14)] = G__17587);

(invoc_array[(15)] = G__17588);

(invoc_array[vararg_idx] = G__17589);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__17573,G__17574,G__17575,G__17576,G__17577,G__17578,G__17579,G__17580,G__17581,G__17582,G__17583,G__17584,G__17585,G__17586,G__17587,G__17588,var_args){
var G__17589 = null;
if (arguments.length > 16) {
var G__18406__i = 0, G__18406__a = new Array(arguments.length -  16);
while (G__18406__i < G__18406__a.length) {G__18406__a[G__18406__i] = arguments[G__18406__i + 16]; ++G__18406__i;}
  G__17589 = new cljs.core.IndexedSeq(G__18406__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__17573,G__17574,G__17575,G__17576,G__17577,G__17578,G__17579,G__17580,G__17581,G__17582,G__17583,G__17584,G__17585,G__17586,G__17587,G__17588,G__17589);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__18407){
var G__17573 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17574 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17575 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17576 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17577 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17578 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17579 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17580 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17581 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17582 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17583 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17584 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17585 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17586 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17587 = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var G__17588 = cljs.core.first(arglist__18407);
var G__17589 = cljs.core.rest(arglist__18407);
return sci$impl$fns$fun_$_arity_16__delegate(G__17573,G__17574,G__17575,G__17576,G__17577,G__17578,G__17579,G__17580,G__17581,G__17582,G__17583,G__17584,G__17585,G__17586,G__17587,G__17588,G__17589);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__17624 = cljs.core._nth(params,(0));
var G__17625 = cljs.core._nth(params,(1));
var G__17626 = cljs.core._nth(params,(2));
var G__17627 = cljs.core._nth(params,(3));
var G__17628 = cljs.core._nth(params,(4));
var G__17629 = cljs.core._nth(params,(5));
var G__17630 = cljs.core._nth(params,(6));
var G__17631 = cljs.core._nth(params,(7));
var G__17632 = cljs.core._nth(params,(8));
var G__17633 = cljs.core._nth(params,(9));
var G__17634 = cljs.core._nth(params,(10));
var G__17635 = cljs.core._nth(params,(11));
var G__17636 = cljs.core._nth(params,(12));
var G__17637 = cljs.core._nth(params,(13));
var G__17638 = cljs.core._nth(params,(14));
var G__17639 = cljs.core._nth(params,(15));
var G__17640 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__17606,G__17607,G__17608,G__17609,G__17610,G__17611,G__17612,G__17613,G__17614,G__17615,G__17616,G__17617,G__17618,G__17619,G__17620,G__17621,G__17622,G__17623){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17606);

(invoc_array[(1)] = G__17607);

(invoc_array[(2)] = G__17608);

(invoc_array[(3)] = G__17609);

(invoc_array[(4)] = G__17610);

(invoc_array[(5)] = G__17611);

(invoc_array[(6)] = G__17612);

(invoc_array[(7)] = G__17613);

(invoc_array[(8)] = G__17614);

(invoc_array[(9)] = G__17615);

(invoc_array[(10)] = G__17616);

(invoc_array[(11)] = G__17617);

(invoc_array[(12)] = G__17618);

(invoc_array[(13)] = G__17619);

(invoc_array[(14)] = G__17620);

(invoc_array[(15)] = G__17621);

(invoc_array[(16)] = G__17622);

(invoc_array[vararg_idx] = G__17623);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__17606,G__17607,G__17608,G__17609,G__17610,G__17611,G__17612,G__17613,G__17614,G__17615,G__17616,G__17617,G__17618,G__17619,G__17620,G__17621,G__17622,var_args){
var G__17623 = null;
if (arguments.length > 17) {
var G__18424__i = 0, G__18424__a = new Array(arguments.length -  17);
while (G__18424__i < G__18424__a.length) {G__18424__a[G__18424__i] = arguments[G__18424__i + 17]; ++G__18424__i;}
  G__17623 = new cljs.core.IndexedSeq(G__18424__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__17606,G__17607,G__17608,G__17609,G__17610,G__17611,G__17612,G__17613,G__17614,G__17615,G__17616,G__17617,G__17618,G__17619,G__17620,G__17621,G__17622,G__17623);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__18426){
var G__17606 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17607 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17608 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17609 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17610 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17611 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17612 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17613 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17614 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17615 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17616 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17617 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17618 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17619 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17620 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17621 = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var G__17622 = cljs.core.first(arglist__18426);
var G__17623 = cljs.core.rest(arglist__18426);
return sci$impl$fns$fun_$_arity_17__delegate(G__17606,G__17607,G__17608,G__17609,G__17610,G__17611,G__17612,G__17613,G__17614,G__17615,G__17616,G__17617,G__17618,G__17619,G__17620,G__17621,G__17622,G__17623);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__17660 = cljs.core._nth(params,(0));
var G__17661 = cljs.core._nth(params,(1));
var G__17662 = cljs.core._nth(params,(2));
var G__17663 = cljs.core._nth(params,(3));
var G__17664 = cljs.core._nth(params,(4));
var G__17665 = cljs.core._nth(params,(5));
var G__17666 = cljs.core._nth(params,(6));
var G__17667 = cljs.core._nth(params,(7));
var G__17668 = cljs.core._nth(params,(8));
var G__17669 = cljs.core._nth(params,(9));
var G__17670 = cljs.core._nth(params,(10));
var G__17671 = cljs.core._nth(params,(11));
var G__17672 = cljs.core._nth(params,(12));
var G__17673 = cljs.core._nth(params,(13));
var G__17674 = cljs.core._nth(params,(14));
var G__17675 = cljs.core._nth(params,(15));
var G__17676 = cljs.core._nth(params,(16));
var G__17677 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__17641,G__17642,G__17643,G__17644,G__17645,G__17646,G__17647,G__17648,G__17649,G__17650,G__17651,G__17652,G__17653,G__17654,G__17655,G__17656,G__17657,G__17658,G__17659){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17641);

(invoc_array[(1)] = G__17642);

(invoc_array[(2)] = G__17643);

(invoc_array[(3)] = G__17644);

(invoc_array[(4)] = G__17645);

(invoc_array[(5)] = G__17646);

(invoc_array[(6)] = G__17647);

(invoc_array[(7)] = G__17648);

(invoc_array[(8)] = G__17649);

(invoc_array[(9)] = G__17650);

(invoc_array[(10)] = G__17651);

(invoc_array[(11)] = G__17652);

(invoc_array[(12)] = G__17653);

(invoc_array[(13)] = G__17654);

(invoc_array[(14)] = G__17655);

(invoc_array[(15)] = G__17656);

(invoc_array[(16)] = G__17657);

(invoc_array[(17)] = G__17658);

(invoc_array[vararg_idx] = G__17659);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__17641,G__17642,G__17643,G__17644,G__17645,G__17646,G__17647,G__17648,G__17649,G__17650,G__17651,G__17652,G__17653,G__17654,G__17655,G__17656,G__17657,G__17658,var_args){
var G__17659 = null;
if (arguments.length > 18) {
var G__18434__i = 0, G__18434__a = new Array(arguments.length -  18);
while (G__18434__i < G__18434__a.length) {G__18434__a[G__18434__i] = arguments[G__18434__i + 18]; ++G__18434__i;}
  G__17659 = new cljs.core.IndexedSeq(G__18434__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__17641,G__17642,G__17643,G__17644,G__17645,G__17646,G__17647,G__17648,G__17649,G__17650,G__17651,G__17652,G__17653,G__17654,G__17655,G__17656,G__17657,G__17658,G__17659);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__18435){
var G__17641 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17642 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17643 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17644 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17645 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17646 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17647 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17648 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17649 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17650 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17651 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17652 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17653 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17654 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17655 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17656 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17657 = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var G__17658 = cljs.core.first(arglist__18435);
var G__17659 = cljs.core.rest(arglist__18435);
return sci$impl$fns$fun_$_arity_18__delegate(G__17641,G__17642,G__17643,G__17644,G__17645,G__17646,G__17647,G__17648,G__17649,G__17650,G__17651,G__17652,G__17653,G__17654,G__17655,G__17656,G__17657,G__17658,G__17659);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__17698 = cljs.core._nth(params,(0));
var G__17699 = cljs.core._nth(params,(1));
var G__17700 = cljs.core._nth(params,(2));
var G__17701 = cljs.core._nth(params,(3));
var G__17702 = cljs.core._nth(params,(4));
var G__17703 = cljs.core._nth(params,(5));
var G__17704 = cljs.core._nth(params,(6));
var G__17705 = cljs.core._nth(params,(7));
var G__17706 = cljs.core._nth(params,(8));
var G__17707 = cljs.core._nth(params,(9));
var G__17708 = cljs.core._nth(params,(10));
var G__17709 = cljs.core._nth(params,(11));
var G__17710 = cljs.core._nth(params,(12));
var G__17711 = cljs.core._nth(params,(13));
var G__17712 = cljs.core._nth(params,(14));
var G__17713 = cljs.core._nth(params,(15));
var G__17714 = cljs.core._nth(params,(16));
var G__17715 = cljs.core._nth(params,(17));
var G__17716 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__17678,G__17679,G__17680,G__17681,G__17682,G__17683,G__17684,G__17685,G__17686,G__17687,G__17688,G__17689,G__17690,G__17691,G__17692,G__17693,G__17694,G__17695,G__17696,G__17697){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17678);

(invoc_array[(1)] = G__17679);

(invoc_array[(2)] = G__17680);

(invoc_array[(3)] = G__17681);

(invoc_array[(4)] = G__17682);

(invoc_array[(5)] = G__17683);

(invoc_array[(6)] = G__17684);

(invoc_array[(7)] = G__17685);

(invoc_array[(8)] = G__17686);

(invoc_array[(9)] = G__17687);

(invoc_array[(10)] = G__17688);

(invoc_array[(11)] = G__17689);

(invoc_array[(12)] = G__17690);

(invoc_array[(13)] = G__17691);

(invoc_array[(14)] = G__17692);

(invoc_array[(15)] = G__17693);

(invoc_array[(16)] = G__17694);

(invoc_array[(17)] = G__17695);

(invoc_array[(18)] = G__17696);

(invoc_array[vararg_idx] = G__17697);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__17678,G__17679,G__17680,G__17681,G__17682,G__17683,G__17684,G__17685,G__17686,G__17687,G__17688,G__17689,G__17690,G__17691,G__17692,G__17693,G__17694,G__17695,G__17696,var_args){
var G__17697 = null;
if (arguments.length > 19) {
var G__18450__i = 0, G__18450__a = new Array(arguments.length -  19);
while (G__18450__i < G__18450__a.length) {G__18450__a[G__18450__i] = arguments[G__18450__i + 19]; ++G__18450__i;}
  G__17697 = new cljs.core.IndexedSeq(G__18450__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__17678,G__17679,G__17680,G__17681,G__17682,G__17683,G__17684,G__17685,G__17686,G__17687,G__17688,G__17689,G__17690,G__17691,G__17692,G__17693,G__17694,G__17695,G__17696,G__17697);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__18451){
var G__17678 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17679 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17680 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17681 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17682 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17683 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17684 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17685 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17686 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17687 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17688 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17689 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17690 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17691 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17692 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17693 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17694 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17695 = cljs.core.first(arglist__18451);
arglist__18451 = cljs.core.next(arglist__18451);
var G__17696 = cljs.core.first(arglist__18451);
var G__17697 = cljs.core.rest(arglist__18451);
return sci$impl$fns$fun_$_arity_19__delegate(G__17678,G__17679,G__17680,G__17681,G__17682,G__17683,G__17684,G__17685,G__17686,G__17687,G__17688,G__17689,G__17690,G__17691,G__17692,G__17693,G__17694,G__17695,G__17696,G__17697);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__17752 = cljs.core._nth(params,(0));
var G__17753 = cljs.core._nth(params,(1));
var G__17754 = cljs.core._nth(params,(2));
var G__17755 = cljs.core._nth(params,(3));
var G__17756 = cljs.core._nth(params,(4));
var G__17757 = cljs.core._nth(params,(5));
var G__17758 = cljs.core._nth(params,(6));
var G__17759 = cljs.core._nth(params,(7));
var G__17760 = cljs.core._nth(params,(8));
var G__17761 = cljs.core._nth(params,(9));
var G__17762 = cljs.core._nth(params,(10));
var G__17763 = cljs.core._nth(params,(11));
var G__17764 = cljs.core._nth(params,(12));
var G__17765 = cljs.core._nth(params,(13));
var G__17766 = cljs.core._nth(params,(14));
var G__17767 = cljs.core._nth(params,(15));
var G__17768 = cljs.core._nth(params,(16));
var G__17769 = cljs.core._nth(params,(17));
var G__17770 = cljs.core._nth(params,(18));
var G__17771 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__17731,G__17732,G__17733,G__17734,G__17735,G__17736,G__17737,G__17738,G__17739,G__17740,G__17741,G__17742,G__17743,G__17744,G__17745,G__17746,G__17747,G__17748,G__17749,G__17750,G__17751){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17731);

(invoc_array[(1)] = G__17732);

(invoc_array[(2)] = G__17733);

(invoc_array[(3)] = G__17734);

(invoc_array[(4)] = G__17735);

(invoc_array[(5)] = G__17736);

(invoc_array[(6)] = G__17737);

(invoc_array[(7)] = G__17738);

(invoc_array[(8)] = G__17739);

(invoc_array[(9)] = G__17740);

(invoc_array[(10)] = G__17741);

(invoc_array[(11)] = G__17742);

(invoc_array[(12)] = G__17743);

(invoc_array[(13)] = G__17744);

(invoc_array[(14)] = G__17745);

(invoc_array[(15)] = G__17746);

(invoc_array[(16)] = G__17747);

(invoc_array[(17)] = G__17748);

(invoc_array[(18)] = G__17749);

(invoc_array[(19)] = G__17750);

(invoc_array[vararg_idx] = G__17751);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__17731,G__17732,G__17733,G__17734,G__17735,G__17736,G__17737,G__17738,G__17739,G__17740,G__17741,G__17742,G__17743,G__17744,G__17745,G__17746,G__17747,G__17748,G__17749,G__17750,var_args){
var G__17751 = null;
if (arguments.length > 20) {
var G__18462__i = 0, G__18462__a = new Array(arguments.length -  20);
while (G__18462__i < G__18462__a.length) {G__18462__a[G__18462__i] = arguments[G__18462__i + 20]; ++G__18462__i;}
  G__17751 = new cljs.core.IndexedSeq(G__18462__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__17731,G__17732,G__17733,G__17734,G__17735,G__17736,G__17737,G__17738,G__17739,G__17740,G__17741,G__17742,G__17743,G__17744,G__17745,G__17746,G__17747,G__17748,G__17749,G__17750,G__17751);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__18464){
var G__17731 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17732 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17733 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17734 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17735 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17736 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17737 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17738 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17739 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17740 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17741 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17742 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17743 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17744 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17745 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17746 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17747 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17748 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17749 = cljs.core.first(arglist__18464);
arglist__18464 = cljs.core.next(arglist__18464);
var G__17750 = cljs.core.first(arglist__18464);
var G__17751 = cljs.core.rest(arglist__18464);
return sci$impl$fns$fun_$_arity_20__delegate(G__17731,G__17732,G__17733,G__17734,G__17735,G__17736,G__17737,G__17738,G__17739,G__17740,G__17741,G__17742,G__17743,G__17744,G__17745,G__17746,G__17747,G__17748,G__17749,G__17750,G__17751);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17292)].join('')));

}
})():(function (){var G__17792 = (fixed_arity | (0));
switch (G__17792) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__16171__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16171__auto__)){
continue;
} else {
return ret__16171__auto__;
}
break;
}
});

break;
case (1):
var G__17794 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__17793){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17793);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (2):
var G__17797 = cljs.core._nth(params,(0));
var G__17798 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__17795,G__17796){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17795);

(invoc_array[(1)] = G__17796);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (3):
var G__17802 = cljs.core._nth(params,(0));
var G__17803 = cljs.core._nth(params,(1));
var G__17804 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__17799,G__17800,G__17801){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17799);

(invoc_array[(1)] = G__17800);

(invoc_array[(2)] = G__17801);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (4):
var G__17809 = cljs.core._nth(params,(0));
var G__17810 = cljs.core._nth(params,(1));
var G__17811 = cljs.core._nth(params,(2));
var G__17812 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__17805,G__17806,G__17807,G__17808){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17805);

(invoc_array[(1)] = G__17806);

(invoc_array[(2)] = G__17807);

(invoc_array[(3)] = G__17808);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (5):
var G__17819 = cljs.core._nth(params,(0));
var G__17820 = cljs.core._nth(params,(1));
var G__17821 = cljs.core._nth(params,(2));
var G__17822 = cljs.core._nth(params,(3));
var G__17823 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__17814,G__17815,G__17816,G__17817,G__17818){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17814);

(invoc_array[(1)] = G__17815);

(invoc_array[(2)] = G__17816);

(invoc_array[(3)] = G__17817);

(invoc_array[(4)] = G__17818);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (6):
var G__17836 = cljs.core._nth(params,(0));
var G__17837 = cljs.core._nth(params,(1));
var G__17838 = cljs.core._nth(params,(2));
var G__17839 = cljs.core._nth(params,(3));
var G__17840 = cljs.core._nth(params,(4));
var G__17841 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__17830,G__17831,G__17832,G__17833,G__17834,G__17835){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17830);

(invoc_array[(1)] = G__17831);

(invoc_array[(2)] = G__17832);

(invoc_array[(3)] = G__17833);

(invoc_array[(4)] = G__17834);

(invoc_array[(5)] = G__17835);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (7):
var G__17849 = cljs.core._nth(params,(0));
var G__17850 = cljs.core._nth(params,(1));
var G__17851 = cljs.core._nth(params,(2));
var G__17852 = cljs.core._nth(params,(3));
var G__17853 = cljs.core._nth(params,(4));
var G__17854 = cljs.core._nth(params,(5));
var G__17855 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__17842,G__17843,G__17844,G__17845,G__17846,G__17847,G__17848){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17842);

(invoc_array[(1)] = G__17843);

(invoc_array[(2)] = G__17844);

(invoc_array[(3)] = G__17845);

(invoc_array[(4)] = G__17846);

(invoc_array[(5)] = G__17847);

(invoc_array[(6)] = G__17848);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (8):
var G__17867 = cljs.core._nth(params,(0));
var G__17868 = cljs.core._nth(params,(1));
var G__17869 = cljs.core._nth(params,(2));
var G__17870 = cljs.core._nth(params,(3));
var G__17871 = cljs.core._nth(params,(4));
var G__17872 = cljs.core._nth(params,(5));
var G__17873 = cljs.core._nth(params,(6));
var G__17874 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__17859,G__17860,G__17861,G__17862,G__17863,G__17864,G__17865,G__17866){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17859);

(invoc_array[(1)] = G__17860);

(invoc_array[(2)] = G__17861);

(invoc_array[(3)] = G__17862);

(invoc_array[(4)] = G__17863);

(invoc_array[(5)] = G__17864);

(invoc_array[(6)] = G__17865);

(invoc_array[(7)] = G__17866);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (9):
var G__17884 = cljs.core._nth(params,(0));
var G__17885 = cljs.core._nth(params,(1));
var G__17886 = cljs.core._nth(params,(2));
var G__17887 = cljs.core._nth(params,(3));
var G__17888 = cljs.core._nth(params,(4));
var G__17889 = cljs.core._nth(params,(5));
var G__17890 = cljs.core._nth(params,(6));
var G__17891 = cljs.core._nth(params,(7));
var G__17892 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__17875,G__17876,G__17877,G__17878,G__17879,G__17880,G__17881,G__17882,G__17883){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17875);

(invoc_array[(1)] = G__17876);

(invoc_array[(2)] = G__17877);

(invoc_array[(3)] = G__17878);

(invoc_array[(4)] = G__17879);

(invoc_array[(5)] = G__17880);

(invoc_array[(6)] = G__17881);

(invoc_array[(7)] = G__17882);

(invoc_array[(8)] = G__17883);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (10):
var G__17903 = cljs.core._nth(params,(0));
var G__17904 = cljs.core._nth(params,(1));
var G__17905 = cljs.core._nth(params,(2));
var G__17906 = cljs.core._nth(params,(3));
var G__17907 = cljs.core._nth(params,(4));
var G__17908 = cljs.core._nth(params,(5));
var G__17909 = cljs.core._nth(params,(6));
var G__17910 = cljs.core._nth(params,(7));
var G__17911 = cljs.core._nth(params,(8));
var G__17912 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__17893,G__17894,G__17895,G__17896,G__17897,G__17898,G__17899,G__17900,G__17901,G__17902){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17893);

(invoc_array[(1)] = G__17894);

(invoc_array[(2)] = G__17895);

(invoc_array[(3)] = G__17896);

(invoc_array[(4)] = G__17897);

(invoc_array[(5)] = G__17898);

(invoc_array[(6)] = G__17899);

(invoc_array[(7)] = G__17900);

(invoc_array[(8)] = G__17901);

(invoc_array[(9)] = G__17902);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (11):
var G__17924 = cljs.core._nth(params,(0));
var G__17925 = cljs.core._nth(params,(1));
var G__17926 = cljs.core._nth(params,(2));
var G__17927 = cljs.core._nth(params,(3));
var G__17928 = cljs.core._nth(params,(4));
var G__17929 = cljs.core._nth(params,(5));
var G__17930 = cljs.core._nth(params,(6));
var G__17931 = cljs.core._nth(params,(7));
var G__17932 = cljs.core._nth(params,(8));
var G__17933 = cljs.core._nth(params,(9));
var G__17934 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__17913,G__17914,G__17915,G__17916,G__17917,G__17918,G__17919,G__17920,G__17921,G__17922,G__17923){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17913);

(invoc_array[(1)] = G__17914);

(invoc_array[(2)] = G__17915);

(invoc_array[(3)] = G__17916);

(invoc_array[(4)] = G__17917);

(invoc_array[(5)] = G__17918);

(invoc_array[(6)] = G__17919);

(invoc_array[(7)] = G__17920);

(invoc_array[(8)] = G__17921);

(invoc_array[(9)] = G__17922);

(invoc_array[(10)] = G__17923);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (12):
var G__17947 = cljs.core._nth(params,(0));
var G__17948 = cljs.core._nth(params,(1));
var G__17949 = cljs.core._nth(params,(2));
var G__17950 = cljs.core._nth(params,(3));
var G__17951 = cljs.core._nth(params,(4));
var G__17952 = cljs.core._nth(params,(5));
var G__17953 = cljs.core._nth(params,(6));
var G__17954 = cljs.core._nth(params,(7));
var G__17955 = cljs.core._nth(params,(8));
var G__17956 = cljs.core._nth(params,(9));
var G__17957 = cljs.core._nth(params,(10));
var G__17958 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__17935,G__17936,G__17937,G__17938,G__17939,G__17940,G__17941,G__17942,G__17943,G__17944,G__17945,G__17946){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17935);

(invoc_array[(1)] = G__17936);

(invoc_array[(2)] = G__17937);

(invoc_array[(3)] = G__17938);

(invoc_array[(4)] = G__17939);

(invoc_array[(5)] = G__17940);

(invoc_array[(6)] = G__17941);

(invoc_array[(7)] = G__17942);

(invoc_array[(8)] = G__17943);

(invoc_array[(9)] = G__17944);

(invoc_array[(10)] = G__17945);

(invoc_array[(11)] = G__17946);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (13):
var G__17976 = cljs.core._nth(params,(0));
var G__17977 = cljs.core._nth(params,(1));
var G__17978 = cljs.core._nth(params,(2));
var G__17979 = cljs.core._nth(params,(3));
var G__17980 = cljs.core._nth(params,(4));
var G__17981 = cljs.core._nth(params,(5));
var G__17982 = cljs.core._nth(params,(6));
var G__17983 = cljs.core._nth(params,(7));
var G__17984 = cljs.core._nth(params,(8));
var G__17985 = cljs.core._nth(params,(9));
var G__17986 = cljs.core._nth(params,(10));
var G__17987 = cljs.core._nth(params,(11));
var G__17988 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__17963,G__17964,G__17965,G__17966,G__17967,G__17968,G__17969,G__17970,G__17971,G__17972,G__17973,G__17974,G__17975){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17963);

(invoc_array[(1)] = G__17964);

(invoc_array[(2)] = G__17965);

(invoc_array[(3)] = G__17966);

(invoc_array[(4)] = G__17967);

(invoc_array[(5)] = G__17968);

(invoc_array[(6)] = G__17969);

(invoc_array[(7)] = G__17970);

(invoc_array[(8)] = G__17971);

(invoc_array[(9)] = G__17972);

(invoc_array[(10)] = G__17973);

(invoc_array[(11)] = G__17974);

(invoc_array[(12)] = G__17975);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (14):
var G__18003 = cljs.core._nth(params,(0));
var G__18004 = cljs.core._nth(params,(1));
var G__18005 = cljs.core._nth(params,(2));
var G__18006 = cljs.core._nth(params,(3));
var G__18007 = cljs.core._nth(params,(4));
var G__18008 = cljs.core._nth(params,(5));
var G__18009 = cljs.core._nth(params,(6));
var G__18010 = cljs.core._nth(params,(7));
var G__18011 = cljs.core._nth(params,(8));
var G__18012 = cljs.core._nth(params,(9));
var G__18013 = cljs.core._nth(params,(10));
var G__18014 = cljs.core._nth(params,(11));
var G__18015 = cljs.core._nth(params,(12));
var G__18016 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__17989,G__17990,G__17991,G__17992,G__17993,G__17994,G__17995,G__17996,G__17997,G__17998,G__17999,G__18000,G__18001,G__18002){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__17989);

(invoc_array[(1)] = G__17990);

(invoc_array[(2)] = G__17991);

(invoc_array[(3)] = G__17992);

(invoc_array[(4)] = G__17993);

(invoc_array[(5)] = G__17994);

(invoc_array[(6)] = G__17995);

(invoc_array[(7)] = G__17996);

(invoc_array[(8)] = G__17997);

(invoc_array[(9)] = G__17998);

(invoc_array[(10)] = G__17999);

(invoc_array[(11)] = G__18000);

(invoc_array[(12)] = G__18001);

(invoc_array[(13)] = G__18002);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (15):
var G__18032 = cljs.core._nth(params,(0));
var G__18033 = cljs.core._nth(params,(1));
var G__18034 = cljs.core._nth(params,(2));
var G__18035 = cljs.core._nth(params,(3));
var G__18036 = cljs.core._nth(params,(4));
var G__18037 = cljs.core._nth(params,(5));
var G__18038 = cljs.core._nth(params,(6));
var G__18039 = cljs.core._nth(params,(7));
var G__18040 = cljs.core._nth(params,(8));
var G__18041 = cljs.core._nth(params,(9));
var G__18042 = cljs.core._nth(params,(10));
var G__18043 = cljs.core._nth(params,(11));
var G__18044 = cljs.core._nth(params,(12));
var G__18045 = cljs.core._nth(params,(13));
var G__18046 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__18017,G__18018,G__18019,G__18020,G__18021,G__18022,G__18023,G__18024,G__18025,G__18026,G__18027,G__18028,G__18029,G__18030,G__18031){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__18017);

(invoc_array[(1)] = G__18018);

(invoc_array[(2)] = G__18019);

(invoc_array[(3)] = G__18020);

(invoc_array[(4)] = G__18021);

(invoc_array[(5)] = G__18022);

(invoc_array[(6)] = G__18023);

(invoc_array[(7)] = G__18024);

(invoc_array[(8)] = G__18025);

(invoc_array[(9)] = G__18026);

(invoc_array[(10)] = G__18027);

(invoc_array[(11)] = G__18028);

(invoc_array[(12)] = G__18029);

(invoc_array[(13)] = G__18030);

(invoc_array[(14)] = G__18031);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (16):
var G__18063 = cljs.core._nth(params,(0));
var G__18064 = cljs.core._nth(params,(1));
var G__18065 = cljs.core._nth(params,(2));
var G__18066 = cljs.core._nth(params,(3));
var G__18067 = cljs.core._nth(params,(4));
var G__18068 = cljs.core._nth(params,(5));
var G__18069 = cljs.core._nth(params,(6));
var G__18070 = cljs.core._nth(params,(7));
var G__18071 = cljs.core._nth(params,(8));
var G__18072 = cljs.core._nth(params,(9));
var G__18073 = cljs.core._nth(params,(10));
var G__18074 = cljs.core._nth(params,(11));
var G__18075 = cljs.core._nth(params,(12));
var G__18076 = cljs.core._nth(params,(13));
var G__18077 = cljs.core._nth(params,(14));
var G__18078 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__18047,G__18048,G__18049,G__18050,G__18051,G__18052,G__18053,G__18054,G__18055,G__18056,G__18057,G__18058,G__18059,G__18060,G__18061,G__18062){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__18047);

(invoc_array[(1)] = G__18048);

(invoc_array[(2)] = G__18049);

(invoc_array[(3)] = G__18050);

(invoc_array[(4)] = G__18051);

(invoc_array[(5)] = G__18052);

(invoc_array[(6)] = G__18053);

(invoc_array[(7)] = G__18054);

(invoc_array[(8)] = G__18055);

(invoc_array[(9)] = G__18056);

(invoc_array[(10)] = G__18057);

(invoc_array[(11)] = G__18058);

(invoc_array[(12)] = G__18059);

(invoc_array[(13)] = G__18060);

(invoc_array[(14)] = G__18061);

(invoc_array[(15)] = G__18062);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (17):
var G__18096 = cljs.core._nth(params,(0));
var G__18097 = cljs.core._nth(params,(1));
var G__18098 = cljs.core._nth(params,(2));
var G__18099 = cljs.core._nth(params,(3));
var G__18100 = cljs.core._nth(params,(4));
var G__18101 = cljs.core._nth(params,(5));
var G__18102 = cljs.core._nth(params,(6));
var G__18103 = cljs.core._nth(params,(7));
var G__18104 = cljs.core._nth(params,(8));
var G__18105 = cljs.core._nth(params,(9));
var G__18106 = cljs.core._nth(params,(10));
var G__18107 = cljs.core._nth(params,(11));
var G__18108 = cljs.core._nth(params,(12));
var G__18109 = cljs.core._nth(params,(13));
var G__18110 = cljs.core._nth(params,(14));
var G__18111 = cljs.core._nth(params,(15));
var G__18112 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__18079,G__18080,G__18081,G__18082,G__18083,G__18084,G__18085,G__18086,G__18087,G__18088,G__18089,G__18090,G__18091,G__18092,G__18093,G__18094,G__18095){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__18079);

(invoc_array[(1)] = G__18080);

(invoc_array[(2)] = G__18081);

(invoc_array[(3)] = G__18082);

(invoc_array[(4)] = G__18083);

(invoc_array[(5)] = G__18084);

(invoc_array[(6)] = G__18085);

(invoc_array[(7)] = G__18086);

(invoc_array[(8)] = G__18087);

(invoc_array[(9)] = G__18088);

(invoc_array[(10)] = G__18089);

(invoc_array[(11)] = G__18090);

(invoc_array[(12)] = G__18091);

(invoc_array[(13)] = G__18092);

(invoc_array[(14)] = G__18093);

(invoc_array[(15)] = G__18094);

(invoc_array[(16)] = G__18095);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (18):
var G__18131 = cljs.core._nth(params,(0));
var G__18132 = cljs.core._nth(params,(1));
var G__18133 = cljs.core._nth(params,(2));
var G__18134 = cljs.core._nth(params,(3));
var G__18135 = cljs.core._nth(params,(4));
var G__18136 = cljs.core._nth(params,(5));
var G__18137 = cljs.core._nth(params,(6));
var G__18138 = cljs.core._nth(params,(7));
var G__18139 = cljs.core._nth(params,(8));
var G__18140 = cljs.core._nth(params,(9));
var G__18141 = cljs.core._nth(params,(10));
var G__18142 = cljs.core._nth(params,(11));
var G__18143 = cljs.core._nth(params,(12));
var G__18144 = cljs.core._nth(params,(13));
var G__18145 = cljs.core._nth(params,(14));
var G__18146 = cljs.core._nth(params,(15));
var G__18147 = cljs.core._nth(params,(16));
var G__18148 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__18113,G__18114,G__18115,G__18116,G__18117,G__18118,G__18119,G__18120,G__18121,G__18122,G__18123,G__18124,G__18125,G__18126,G__18127,G__18128,G__18129,G__18130){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__18113);

(invoc_array[(1)] = G__18114);

(invoc_array[(2)] = G__18115);

(invoc_array[(3)] = G__18116);

(invoc_array[(4)] = G__18117);

(invoc_array[(5)] = G__18118);

(invoc_array[(6)] = G__18119);

(invoc_array[(7)] = G__18120);

(invoc_array[(8)] = G__18121);

(invoc_array[(9)] = G__18122);

(invoc_array[(10)] = G__18123);

(invoc_array[(11)] = G__18124);

(invoc_array[(12)] = G__18125);

(invoc_array[(13)] = G__18126);

(invoc_array[(14)] = G__18127);

(invoc_array[(15)] = G__18128);

(invoc_array[(16)] = G__18129);

(invoc_array[(17)] = G__18130);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (19):
var G__18168 = cljs.core._nth(params,(0));
var G__18169 = cljs.core._nth(params,(1));
var G__18170 = cljs.core._nth(params,(2));
var G__18171 = cljs.core._nth(params,(3));
var G__18172 = cljs.core._nth(params,(4));
var G__18173 = cljs.core._nth(params,(5));
var G__18174 = cljs.core._nth(params,(6));
var G__18175 = cljs.core._nth(params,(7));
var G__18176 = cljs.core._nth(params,(8));
var G__18177 = cljs.core._nth(params,(9));
var G__18178 = cljs.core._nth(params,(10));
var G__18179 = cljs.core._nth(params,(11));
var G__18180 = cljs.core._nth(params,(12));
var G__18181 = cljs.core._nth(params,(13));
var G__18182 = cljs.core._nth(params,(14));
var G__18183 = cljs.core._nth(params,(15));
var G__18184 = cljs.core._nth(params,(16));
var G__18185 = cljs.core._nth(params,(17));
var G__18186 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__18149,G__18150,G__18151,G__18152,G__18153,G__18154,G__18155,G__18156,G__18157,G__18158,G__18159,G__18160,G__18161,G__18162,G__18163,G__18164,G__18165,G__18166,G__18167){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__18149);

(invoc_array[(1)] = G__18150);

(invoc_array[(2)] = G__18151);

(invoc_array[(3)] = G__18152);

(invoc_array[(4)] = G__18153);

(invoc_array[(5)] = G__18154);

(invoc_array[(6)] = G__18155);

(invoc_array[(7)] = G__18156);

(invoc_array[(8)] = G__18157);

(invoc_array[(9)] = G__18158);

(invoc_array[(10)] = G__18159);

(invoc_array[(11)] = G__18160);

(invoc_array[(12)] = G__18161);

(invoc_array[(13)] = G__18162);

(invoc_array[(14)] = G__18163);

(invoc_array[(15)] = G__18164);

(invoc_array[(16)] = G__18165);

(invoc_array[(17)] = G__18166);

(invoc_array[(18)] = G__18167);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
case (20):
var G__18207 = cljs.core._nth(params,(0));
var G__18208 = cljs.core._nth(params,(1));
var G__18209 = cljs.core._nth(params,(2));
var G__18210 = cljs.core._nth(params,(3));
var G__18211 = cljs.core._nth(params,(4));
var G__18212 = cljs.core._nth(params,(5));
var G__18213 = cljs.core._nth(params,(6));
var G__18214 = cljs.core._nth(params,(7));
var G__18215 = cljs.core._nth(params,(8));
var G__18216 = cljs.core._nth(params,(9));
var G__18217 = cljs.core._nth(params,(10));
var G__18218 = cljs.core._nth(params,(11));
var G__18219 = cljs.core._nth(params,(12));
var G__18220 = cljs.core._nth(params,(13));
var G__18221 = cljs.core._nth(params,(14));
var G__18222 = cljs.core._nth(params,(15));
var G__18223 = cljs.core._nth(params,(16));
var G__18224 = cljs.core._nth(params,(17));
var G__18225 = cljs.core._nth(params,(18));
var G__18226 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__18187,G__18188,G__18189,G__18190,G__18191,G__18192,G__18193,G__18194,G__18195,G__18196,G__18197,G__18198,G__18199,G__18200,G__18201,G__18202,G__18203,G__18204,G__18205,G__18206){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__18187);

(invoc_array[(1)] = G__18188);

(invoc_array[(2)] = G__18189);

(invoc_array[(3)] = G__18190);

(invoc_array[(4)] = G__18191);

(invoc_array[(5)] = G__18192);

(invoc_array[(6)] = G__18193);

(invoc_array[(7)] = G__18194);

(invoc_array[(8)] = G__18195);

(invoc_array[(9)] = G__18196);

(invoc_array[(10)] = G__18197);

(invoc_array[(11)] = G__18198);

(invoc_array[(12)] = G__18199);

(invoc_array[(13)] = G__18200);

(invoc_array[(14)] = G__18201);

(invoc_array[(15)] = G__18202);

(invoc_array[(16)] = G__18203);

(invoc_array[(17)] = G__18204);

(invoc_array[(18)] = G__18205);

(invoc_array[(19)] = G__18206);

while(true){
var ret__16172__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__16172__auto__)){
continue;
} else {
return ret__16172__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17792)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,enclosed_array,bindings,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__18580__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__18580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18587__i = 0, G__18587__a = new Array(arguments.length -  0);
while (G__18587__i < G__18587__a.length) {G__18587__a[G__18587__i] = arguments[G__18587__i + 0]; ++G__18587__i;}
  args = new cljs.core.IndexedSeq(G__18587__a,0,null);
} 
return G__18580__delegate.call(this,args);};
G__18580.cljs$lang$maxFixedArity = 0;
G__18580.cljs$lang$applyTo = (function (arglist__18588){
var args = cljs.core.seq(arglist__18588);
return G__18580__delegate(args);
});
G__18580.cljs$core$IFn$_invoke$arity$variadic = G__18580__delegate;
return G__18580;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__18231_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__18231_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
