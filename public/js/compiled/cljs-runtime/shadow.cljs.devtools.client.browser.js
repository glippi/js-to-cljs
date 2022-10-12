goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18644 = arguments.length;
var i__5770__auto___18645 = (0);
while(true){
if((i__5770__auto___18645 < len__5769__auto___18644)){
args__5775__auto__.push((arguments[i__5770__auto___18645]));

var G__18646 = (i__5770__auto___18645 + (1));
i__5770__auto___18645 = G__18646;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq18207){
var G__18208 = cljs.core.first(seq18207);
var seq18207__$1 = cljs.core.next(seq18207);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18208,seq18207__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__18213 = cljs.core.seq(sources);
var chunk__18214 = null;
var count__18215 = (0);
var i__18216 = (0);
while(true){
if((i__18216 < count__18215)){
var map__18225 = chunk__18214.cljs$core$IIndexed$_nth$arity$2(null,i__18216);
var map__18225__$1 = cljs.core.__destructure_map(map__18225);
var src = map__18225__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18225__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18225__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18225__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18225__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e18227){var e_18647 = e18227;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18647);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18647.message)].join('')));
}

var G__18648 = seq__18213;
var G__18649 = chunk__18214;
var G__18650 = count__18215;
var G__18651 = (i__18216 + (1));
seq__18213 = G__18648;
chunk__18214 = G__18649;
count__18215 = G__18650;
i__18216 = G__18651;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18213);
if(temp__5804__auto__){
var seq__18213__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18213__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18213__$1);
var G__18652 = cljs.core.chunk_rest(seq__18213__$1);
var G__18653 = c__5568__auto__;
var G__18654 = cljs.core.count(c__5568__auto__);
var G__18655 = (0);
seq__18213 = G__18652;
chunk__18214 = G__18653;
count__18215 = G__18654;
i__18216 = G__18655;
continue;
} else {
var map__18230 = cljs.core.first(seq__18213__$1);
var map__18230__$1 = cljs.core.__destructure_map(map__18230);
var src = map__18230__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18230__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18230__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18230__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18230__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e18231){var e_18656 = e18231;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18656);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18656.message)].join('')));
}

var G__18657 = cljs.core.next(seq__18213__$1);
var G__18658 = null;
var G__18659 = (0);
var G__18660 = (0);
seq__18213 = G__18657;
chunk__18214 = G__18658;
count__18215 = G__18659;
i__18216 = G__18660;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__18232 = cljs.core.seq(js_requires);
var chunk__18233 = null;
var count__18234 = (0);
var i__18235 = (0);
while(true){
if((i__18235 < count__18234)){
var js_ns = chunk__18233.cljs$core$IIndexed$_nth$arity$2(null,i__18235);
var require_str_18661 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18661);


var G__18662 = seq__18232;
var G__18663 = chunk__18233;
var G__18664 = count__18234;
var G__18665 = (i__18235 + (1));
seq__18232 = G__18662;
chunk__18233 = G__18663;
count__18234 = G__18664;
i__18235 = G__18665;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18232);
if(temp__5804__auto__){
var seq__18232__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18232__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18232__$1);
var G__18666 = cljs.core.chunk_rest(seq__18232__$1);
var G__18667 = c__5568__auto__;
var G__18668 = cljs.core.count(c__5568__auto__);
var G__18669 = (0);
seq__18232 = G__18666;
chunk__18233 = G__18667;
count__18234 = G__18668;
i__18235 = G__18669;
continue;
} else {
var js_ns = cljs.core.first(seq__18232__$1);
var require_str_18670 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18670);


var G__18671 = cljs.core.next(seq__18232__$1);
var G__18672 = null;
var G__18673 = (0);
var G__18674 = (0);
seq__18232 = G__18671;
chunk__18233 = G__18672;
count__18234 = G__18673;
i__18235 = G__18674;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__18238){
var map__18239 = p__18238;
var map__18239__$1 = cljs.core.__destructure_map(map__18239);
var msg = map__18239__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18239__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18239__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18240(s__18241){
return (new cljs.core.LazySeq(null,(function (){
var s__18241__$1 = s__18241;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18241__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__18246 = cljs.core.first(xs__6360__auto__);
var map__18246__$1 = cljs.core.__destructure_map(map__18246);
var src = map__18246__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18246__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18246__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__18241__$1,map__18246,map__18246__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__18239,map__18239__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18240_$_iter__18242(s__18243){
return (new cljs.core.LazySeq(null,((function (s__18241__$1,map__18246,map__18246__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__18239,map__18239__$1,msg,info,reload_info){
return (function (){
var s__18243__$1 = s__18243;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18243__$1);
if(temp__5804__auto____$1){
var s__18243__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18243__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__18243__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__18245 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__18244 = (0);
while(true){
if((i__18244 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__18244);
cljs.core.chunk_append(b__18245,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__18675 = (i__18244 + (1));
i__18244 = G__18675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18245),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18240_$_iter__18242(cljs.core.chunk_rest(s__18243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18245),null);
}
} else {
var warning = cljs.core.first(s__18243__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18240_$_iter__18242(cljs.core.rest(s__18243__$2)));
}
} else {
return null;
}
break;
}
});})(s__18241__$1,map__18246,map__18246__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__18239,map__18239__$1,msg,info,reload_info))
,null,null));
});})(s__18241__$1,map__18246,map__18246__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__18239,map__18239__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18240(cljs.core.rest(s__18241__$1)));
} else {
var G__18676 = cljs.core.rest(s__18241__$1);
s__18241__$1 = G__18676;
continue;
}
} else {
var G__18677 = cljs.core.rest(s__18241__$1);
s__18241__$1 = G__18677;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__18248_18678 = cljs.core.seq(warnings);
var chunk__18249_18679 = null;
var count__18250_18680 = (0);
var i__18251_18681 = (0);
while(true){
if((i__18251_18681 < count__18250_18680)){
var map__18254_18682 = chunk__18249_18679.cljs$core$IIndexed$_nth$arity$2(null,i__18251_18681);
var map__18254_18683__$1 = cljs.core.__destructure_map(map__18254_18682);
var w_18684 = map__18254_18683__$1;
var msg_18685__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18254_18683__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18254_18683__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18254_18683__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18254_18683__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18688)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18686),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18687),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18685__$1)].join(''));


var G__18689 = seq__18248_18678;
var G__18690 = chunk__18249_18679;
var G__18691 = count__18250_18680;
var G__18692 = (i__18251_18681 + (1));
seq__18248_18678 = G__18689;
chunk__18249_18679 = G__18690;
count__18250_18680 = G__18691;
i__18251_18681 = G__18692;
continue;
} else {
var temp__5804__auto___18693 = cljs.core.seq(seq__18248_18678);
if(temp__5804__auto___18693){
var seq__18248_18694__$1 = temp__5804__auto___18693;
if(cljs.core.chunked_seq_QMARK_(seq__18248_18694__$1)){
var c__5568__auto___18695 = cljs.core.chunk_first(seq__18248_18694__$1);
var G__18696 = cljs.core.chunk_rest(seq__18248_18694__$1);
var G__18697 = c__5568__auto___18695;
var G__18698 = cljs.core.count(c__5568__auto___18695);
var G__18699 = (0);
seq__18248_18678 = G__18696;
chunk__18249_18679 = G__18697;
count__18250_18680 = G__18698;
i__18251_18681 = G__18699;
continue;
} else {
var map__18255_18700 = cljs.core.first(seq__18248_18694__$1);
var map__18255_18701__$1 = cljs.core.__destructure_map(map__18255_18700);
var w_18702 = map__18255_18701__$1;
var msg_18703__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18255_18701__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18255_18701__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18255_18701__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18255_18701__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18706)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18704),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18705),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18703__$1)].join(''));


var G__18707 = cljs.core.next(seq__18248_18694__$1);
var G__18708 = null;
var G__18709 = (0);
var G__18710 = (0);
seq__18248_18678 = G__18707;
chunk__18249_18679 = G__18708;
count__18250_18680 = G__18709;
i__18251_18681 = G__18710;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__18236_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__18236_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__18261){
var map__18262 = p__18261;
var map__18262__$1 = cljs.core.__destructure_map(map__18262);
var msg = map__18262__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18262__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18262__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__18263 = cljs.core.seq(updates);
var chunk__18265 = null;
var count__18266 = (0);
var i__18267 = (0);
while(true){
if((i__18267 < count__18266)){
var path = chunk__18265.cljs$core$IIndexed$_nth$arity$2(null,i__18267);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18479_18714 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18483_18715 = null;
var count__18484_18716 = (0);
var i__18485_18717 = (0);
while(true){
if((i__18485_18717 < count__18484_18716)){
var node_18718 = chunk__18483_18715.cljs$core$IIndexed$_nth$arity$2(null,i__18485_18717);
if(cljs.core.not(node_18718.shadow$old)){
var path_match_18719 = shadow.cljs.devtools.client.browser.match_paths(node_18718.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18719)){
var new_link_18720 = (function (){var G__18520 = node_18718.cloneNode(true);
G__18520.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18719),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18520;
})();
(node_18718.shadow$old = true);

(new_link_18720.onload = ((function (seq__18479_18714,chunk__18483_18715,count__18484_18716,i__18485_18717,seq__18263,chunk__18265,count__18266,i__18267,new_link_18720,path_match_18719,node_18718,path,map__18262,map__18262__$1,msg,updates,reload_info){
return (function (e){
var seq__18521_18721 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18523_18722 = null;
var count__18524_18723 = (0);
var i__18525_18724 = (0);
while(true){
if((i__18525_18724 < count__18524_18723)){
var map__18532_18725 = chunk__18523_18722.cljs$core$IIndexed$_nth$arity$2(null,i__18525_18724);
var map__18532_18726__$1 = cljs.core.__destructure_map(map__18532_18725);
var task_18727 = map__18532_18726__$1;
var fn_str_18728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18532_18726__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18532_18726__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18730 = goog.getObjectByName(fn_str_18728,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18729)].join(''));

(fn_obj_18730.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18730.cljs$core$IFn$_invoke$arity$2(path,new_link_18720) : fn_obj_18730.call(null,path,new_link_18720));


var G__18731 = seq__18521_18721;
var G__18732 = chunk__18523_18722;
var G__18733 = count__18524_18723;
var G__18734 = (i__18525_18724 + (1));
seq__18521_18721 = G__18731;
chunk__18523_18722 = G__18732;
count__18524_18723 = G__18733;
i__18525_18724 = G__18734;
continue;
} else {
var temp__5804__auto___18735 = cljs.core.seq(seq__18521_18721);
if(temp__5804__auto___18735){
var seq__18521_18736__$1 = temp__5804__auto___18735;
if(cljs.core.chunked_seq_QMARK_(seq__18521_18736__$1)){
var c__5568__auto___18737 = cljs.core.chunk_first(seq__18521_18736__$1);
var G__18738 = cljs.core.chunk_rest(seq__18521_18736__$1);
var G__18739 = c__5568__auto___18737;
var G__18740 = cljs.core.count(c__5568__auto___18737);
var G__18741 = (0);
seq__18521_18721 = G__18738;
chunk__18523_18722 = G__18739;
count__18524_18723 = G__18740;
i__18525_18724 = G__18741;
continue;
} else {
var map__18535_18742 = cljs.core.first(seq__18521_18736__$1);
var map__18535_18743__$1 = cljs.core.__destructure_map(map__18535_18742);
var task_18744 = map__18535_18743__$1;
var fn_str_18745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535_18743__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535_18743__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18751 = goog.getObjectByName(fn_str_18745,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18746)].join(''));

(fn_obj_18751.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18751.cljs$core$IFn$_invoke$arity$2(path,new_link_18720) : fn_obj_18751.call(null,path,new_link_18720));


var G__18752 = cljs.core.next(seq__18521_18736__$1);
var G__18753 = null;
var G__18754 = (0);
var G__18755 = (0);
seq__18521_18721 = G__18752;
chunk__18523_18722 = G__18753;
count__18524_18723 = G__18754;
i__18525_18724 = G__18755;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18718);
});})(seq__18479_18714,chunk__18483_18715,count__18484_18716,i__18485_18717,seq__18263,chunk__18265,count__18266,i__18267,new_link_18720,path_match_18719,node_18718,path,map__18262,map__18262__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18719], 0));

goog.dom.insertSiblingAfter(new_link_18720,node_18718);


var G__18756 = seq__18479_18714;
var G__18757 = chunk__18483_18715;
var G__18758 = count__18484_18716;
var G__18759 = (i__18485_18717 + (1));
seq__18479_18714 = G__18756;
chunk__18483_18715 = G__18757;
count__18484_18716 = G__18758;
i__18485_18717 = G__18759;
continue;
} else {
var G__18760 = seq__18479_18714;
var G__18761 = chunk__18483_18715;
var G__18762 = count__18484_18716;
var G__18763 = (i__18485_18717 + (1));
seq__18479_18714 = G__18760;
chunk__18483_18715 = G__18761;
count__18484_18716 = G__18762;
i__18485_18717 = G__18763;
continue;
}
} else {
var G__18764 = seq__18479_18714;
var G__18765 = chunk__18483_18715;
var G__18766 = count__18484_18716;
var G__18767 = (i__18485_18717 + (1));
seq__18479_18714 = G__18764;
chunk__18483_18715 = G__18765;
count__18484_18716 = G__18766;
i__18485_18717 = G__18767;
continue;
}
} else {
var temp__5804__auto___18768 = cljs.core.seq(seq__18479_18714);
if(temp__5804__auto___18768){
var seq__18479_18769__$1 = temp__5804__auto___18768;
if(cljs.core.chunked_seq_QMARK_(seq__18479_18769__$1)){
var c__5568__auto___18770 = cljs.core.chunk_first(seq__18479_18769__$1);
var G__18771 = cljs.core.chunk_rest(seq__18479_18769__$1);
var G__18772 = c__5568__auto___18770;
var G__18773 = cljs.core.count(c__5568__auto___18770);
var G__18774 = (0);
seq__18479_18714 = G__18771;
chunk__18483_18715 = G__18772;
count__18484_18716 = G__18773;
i__18485_18717 = G__18774;
continue;
} else {
var node_18775 = cljs.core.first(seq__18479_18769__$1);
if(cljs.core.not(node_18775.shadow$old)){
var path_match_18776 = shadow.cljs.devtools.client.browser.match_paths(node_18775.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18776)){
var new_link_18777 = (function (){var G__18538 = node_18775.cloneNode(true);
G__18538.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18776),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18538;
})();
(node_18775.shadow$old = true);

(new_link_18777.onload = ((function (seq__18479_18714,chunk__18483_18715,count__18484_18716,i__18485_18717,seq__18263,chunk__18265,count__18266,i__18267,new_link_18777,path_match_18776,node_18775,seq__18479_18769__$1,temp__5804__auto___18768,path,map__18262,map__18262__$1,msg,updates,reload_info){
return (function (e){
var seq__18539_18778 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18541_18779 = null;
var count__18542_18780 = (0);
var i__18543_18781 = (0);
while(true){
if((i__18543_18781 < count__18542_18780)){
var map__18549_18782 = chunk__18541_18779.cljs$core$IIndexed$_nth$arity$2(null,i__18543_18781);
var map__18549_18783__$1 = cljs.core.__destructure_map(map__18549_18782);
var task_18784 = map__18549_18783__$1;
var fn_str_18785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18549_18783__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18549_18783__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18787 = goog.getObjectByName(fn_str_18785,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18786)].join(''));

(fn_obj_18787.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18787.cljs$core$IFn$_invoke$arity$2(path,new_link_18777) : fn_obj_18787.call(null,path,new_link_18777));


var G__18788 = seq__18539_18778;
var G__18789 = chunk__18541_18779;
var G__18790 = count__18542_18780;
var G__18791 = (i__18543_18781 + (1));
seq__18539_18778 = G__18788;
chunk__18541_18779 = G__18789;
count__18542_18780 = G__18790;
i__18543_18781 = G__18791;
continue;
} else {
var temp__5804__auto___18792__$1 = cljs.core.seq(seq__18539_18778);
if(temp__5804__auto___18792__$1){
var seq__18539_18793__$1 = temp__5804__auto___18792__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18539_18793__$1)){
var c__5568__auto___18794 = cljs.core.chunk_first(seq__18539_18793__$1);
var G__18795 = cljs.core.chunk_rest(seq__18539_18793__$1);
var G__18796 = c__5568__auto___18794;
var G__18797 = cljs.core.count(c__5568__auto___18794);
var G__18798 = (0);
seq__18539_18778 = G__18795;
chunk__18541_18779 = G__18796;
count__18542_18780 = G__18797;
i__18543_18781 = G__18798;
continue;
} else {
var map__18550_18799 = cljs.core.first(seq__18539_18793__$1);
var map__18550_18800__$1 = cljs.core.__destructure_map(map__18550_18799);
var task_18801 = map__18550_18800__$1;
var fn_str_18802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550_18800__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550_18800__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18804 = goog.getObjectByName(fn_str_18802,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18803)].join(''));

(fn_obj_18804.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18804.cljs$core$IFn$_invoke$arity$2(path,new_link_18777) : fn_obj_18804.call(null,path,new_link_18777));


var G__18805 = cljs.core.next(seq__18539_18793__$1);
var G__18806 = null;
var G__18807 = (0);
var G__18808 = (0);
seq__18539_18778 = G__18805;
chunk__18541_18779 = G__18806;
count__18542_18780 = G__18807;
i__18543_18781 = G__18808;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18775);
});})(seq__18479_18714,chunk__18483_18715,count__18484_18716,i__18485_18717,seq__18263,chunk__18265,count__18266,i__18267,new_link_18777,path_match_18776,node_18775,seq__18479_18769__$1,temp__5804__auto___18768,path,map__18262,map__18262__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18776], 0));

goog.dom.insertSiblingAfter(new_link_18777,node_18775);


var G__18809 = cljs.core.next(seq__18479_18769__$1);
var G__18810 = null;
var G__18811 = (0);
var G__18812 = (0);
seq__18479_18714 = G__18809;
chunk__18483_18715 = G__18810;
count__18484_18716 = G__18811;
i__18485_18717 = G__18812;
continue;
} else {
var G__18813 = cljs.core.next(seq__18479_18769__$1);
var G__18814 = null;
var G__18815 = (0);
var G__18816 = (0);
seq__18479_18714 = G__18813;
chunk__18483_18715 = G__18814;
count__18484_18716 = G__18815;
i__18485_18717 = G__18816;
continue;
}
} else {
var G__18817 = cljs.core.next(seq__18479_18769__$1);
var G__18818 = null;
var G__18819 = (0);
var G__18820 = (0);
seq__18479_18714 = G__18817;
chunk__18483_18715 = G__18818;
count__18484_18716 = G__18819;
i__18485_18717 = G__18820;
continue;
}
}
} else {
}
}
break;
}


var G__18821 = seq__18263;
var G__18822 = chunk__18265;
var G__18823 = count__18266;
var G__18824 = (i__18267 + (1));
seq__18263 = G__18821;
chunk__18265 = G__18822;
count__18266 = G__18823;
i__18267 = G__18824;
continue;
} else {
var G__18825 = seq__18263;
var G__18826 = chunk__18265;
var G__18827 = count__18266;
var G__18828 = (i__18267 + (1));
seq__18263 = G__18825;
chunk__18265 = G__18826;
count__18266 = G__18827;
i__18267 = G__18828;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18263);
if(temp__5804__auto__){
var seq__18263__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18263__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18263__$1);
var G__18829 = cljs.core.chunk_rest(seq__18263__$1);
var G__18830 = c__5568__auto__;
var G__18831 = cljs.core.count(c__5568__auto__);
var G__18832 = (0);
seq__18263 = G__18829;
chunk__18265 = G__18830;
count__18266 = G__18831;
i__18267 = G__18832;
continue;
} else {
var path = cljs.core.first(seq__18263__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18552_18833 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18556_18834 = null;
var count__18557_18835 = (0);
var i__18558_18836 = (0);
while(true){
if((i__18558_18836 < count__18557_18835)){
var node_18837 = chunk__18556_18834.cljs$core$IIndexed$_nth$arity$2(null,i__18558_18836);
if(cljs.core.not(node_18837.shadow$old)){
var path_match_18838 = shadow.cljs.devtools.client.browser.match_paths(node_18837.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18838)){
var new_link_18839 = (function (){var G__18592 = node_18837.cloneNode(true);
G__18592.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18838),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18592;
})();
(node_18837.shadow$old = true);

(new_link_18839.onload = ((function (seq__18552_18833,chunk__18556_18834,count__18557_18835,i__18558_18836,seq__18263,chunk__18265,count__18266,i__18267,new_link_18839,path_match_18838,node_18837,path,seq__18263__$1,temp__5804__auto__,map__18262,map__18262__$1,msg,updates,reload_info){
return (function (e){
var seq__18593_18840 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18595_18841 = null;
var count__18596_18842 = (0);
var i__18597_18843 = (0);
while(true){
if((i__18597_18843 < count__18596_18842)){
var map__18601_18844 = chunk__18595_18841.cljs$core$IIndexed$_nth$arity$2(null,i__18597_18843);
var map__18601_18845__$1 = cljs.core.__destructure_map(map__18601_18844);
var task_18846 = map__18601_18845__$1;
var fn_str_18847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18601_18845__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18601_18845__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18849 = goog.getObjectByName(fn_str_18847,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18848)].join(''));

(fn_obj_18849.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18849.cljs$core$IFn$_invoke$arity$2(path,new_link_18839) : fn_obj_18849.call(null,path,new_link_18839));


var G__18850 = seq__18593_18840;
var G__18851 = chunk__18595_18841;
var G__18852 = count__18596_18842;
var G__18853 = (i__18597_18843 + (1));
seq__18593_18840 = G__18850;
chunk__18595_18841 = G__18851;
count__18596_18842 = G__18852;
i__18597_18843 = G__18853;
continue;
} else {
var temp__5804__auto___18854__$1 = cljs.core.seq(seq__18593_18840);
if(temp__5804__auto___18854__$1){
var seq__18593_18855__$1 = temp__5804__auto___18854__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18593_18855__$1)){
var c__5568__auto___18856 = cljs.core.chunk_first(seq__18593_18855__$1);
var G__18857 = cljs.core.chunk_rest(seq__18593_18855__$1);
var G__18858 = c__5568__auto___18856;
var G__18859 = cljs.core.count(c__5568__auto___18856);
var G__18860 = (0);
seq__18593_18840 = G__18857;
chunk__18595_18841 = G__18858;
count__18596_18842 = G__18859;
i__18597_18843 = G__18860;
continue;
} else {
var map__18602_18861 = cljs.core.first(seq__18593_18855__$1);
var map__18602_18862__$1 = cljs.core.__destructure_map(map__18602_18861);
var task_18863 = map__18602_18862__$1;
var fn_str_18864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18602_18862__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18602_18862__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18866 = goog.getObjectByName(fn_str_18864,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18865)].join(''));

(fn_obj_18866.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18866.cljs$core$IFn$_invoke$arity$2(path,new_link_18839) : fn_obj_18866.call(null,path,new_link_18839));


var G__18867 = cljs.core.next(seq__18593_18855__$1);
var G__18868 = null;
var G__18869 = (0);
var G__18870 = (0);
seq__18593_18840 = G__18867;
chunk__18595_18841 = G__18868;
count__18596_18842 = G__18869;
i__18597_18843 = G__18870;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18837);
});})(seq__18552_18833,chunk__18556_18834,count__18557_18835,i__18558_18836,seq__18263,chunk__18265,count__18266,i__18267,new_link_18839,path_match_18838,node_18837,path,seq__18263__$1,temp__5804__auto__,map__18262,map__18262__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18838], 0));

goog.dom.insertSiblingAfter(new_link_18839,node_18837);


var G__18871 = seq__18552_18833;
var G__18872 = chunk__18556_18834;
var G__18873 = count__18557_18835;
var G__18874 = (i__18558_18836 + (1));
seq__18552_18833 = G__18871;
chunk__18556_18834 = G__18872;
count__18557_18835 = G__18873;
i__18558_18836 = G__18874;
continue;
} else {
var G__18875 = seq__18552_18833;
var G__18876 = chunk__18556_18834;
var G__18877 = count__18557_18835;
var G__18878 = (i__18558_18836 + (1));
seq__18552_18833 = G__18875;
chunk__18556_18834 = G__18876;
count__18557_18835 = G__18877;
i__18558_18836 = G__18878;
continue;
}
} else {
var G__18879 = seq__18552_18833;
var G__18880 = chunk__18556_18834;
var G__18881 = count__18557_18835;
var G__18882 = (i__18558_18836 + (1));
seq__18552_18833 = G__18879;
chunk__18556_18834 = G__18880;
count__18557_18835 = G__18881;
i__18558_18836 = G__18882;
continue;
}
} else {
var temp__5804__auto___18883__$1 = cljs.core.seq(seq__18552_18833);
if(temp__5804__auto___18883__$1){
var seq__18552_18885__$1 = temp__5804__auto___18883__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18552_18885__$1)){
var c__5568__auto___18886 = cljs.core.chunk_first(seq__18552_18885__$1);
var G__18887 = cljs.core.chunk_rest(seq__18552_18885__$1);
var G__18888 = c__5568__auto___18886;
var G__18889 = cljs.core.count(c__5568__auto___18886);
var G__18890 = (0);
seq__18552_18833 = G__18887;
chunk__18556_18834 = G__18888;
count__18557_18835 = G__18889;
i__18558_18836 = G__18890;
continue;
} else {
var node_18891 = cljs.core.first(seq__18552_18885__$1);
if(cljs.core.not(node_18891.shadow$old)){
var path_match_18892 = shadow.cljs.devtools.client.browser.match_paths(node_18891.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18892)){
var new_link_18893 = (function (){var G__18603 = node_18891.cloneNode(true);
G__18603.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18892),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18603;
})();
(node_18891.shadow$old = true);

(new_link_18893.onload = ((function (seq__18552_18833,chunk__18556_18834,count__18557_18835,i__18558_18836,seq__18263,chunk__18265,count__18266,i__18267,new_link_18893,path_match_18892,node_18891,seq__18552_18885__$1,temp__5804__auto___18883__$1,path,seq__18263__$1,temp__5804__auto__,map__18262,map__18262__$1,msg,updates,reload_info){
return (function (e){
var seq__18604_18894 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18606_18895 = null;
var count__18607_18896 = (0);
var i__18608_18897 = (0);
while(true){
if((i__18608_18897 < count__18607_18896)){
var map__18612_18898 = chunk__18606_18895.cljs$core$IIndexed$_nth$arity$2(null,i__18608_18897);
var map__18612_18899__$1 = cljs.core.__destructure_map(map__18612_18898);
var task_18900 = map__18612_18899__$1;
var fn_str_18901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18612_18899__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18612_18899__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18903 = goog.getObjectByName(fn_str_18901,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18902)].join(''));

(fn_obj_18903.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18903.cljs$core$IFn$_invoke$arity$2(path,new_link_18893) : fn_obj_18903.call(null,path,new_link_18893));


var G__18904 = seq__18604_18894;
var G__18905 = chunk__18606_18895;
var G__18906 = count__18607_18896;
var G__18907 = (i__18608_18897 + (1));
seq__18604_18894 = G__18904;
chunk__18606_18895 = G__18905;
count__18607_18896 = G__18906;
i__18608_18897 = G__18907;
continue;
} else {
var temp__5804__auto___18908__$2 = cljs.core.seq(seq__18604_18894);
if(temp__5804__auto___18908__$2){
var seq__18604_18909__$1 = temp__5804__auto___18908__$2;
if(cljs.core.chunked_seq_QMARK_(seq__18604_18909__$1)){
var c__5568__auto___18910 = cljs.core.chunk_first(seq__18604_18909__$1);
var G__18911 = cljs.core.chunk_rest(seq__18604_18909__$1);
var G__18912 = c__5568__auto___18910;
var G__18913 = cljs.core.count(c__5568__auto___18910);
var G__18914 = (0);
seq__18604_18894 = G__18911;
chunk__18606_18895 = G__18912;
count__18607_18896 = G__18913;
i__18608_18897 = G__18914;
continue;
} else {
var map__18613_18915 = cljs.core.first(seq__18604_18909__$1);
var map__18613_18916__$1 = cljs.core.__destructure_map(map__18613_18915);
var task_18917 = map__18613_18916__$1;
var fn_str_18918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18613_18916__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18613_18916__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18920 = goog.getObjectByName(fn_str_18918,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18919)].join(''));

(fn_obj_18920.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18920.cljs$core$IFn$_invoke$arity$2(path,new_link_18893) : fn_obj_18920.call(null,path,new_link_18893));


var G__18922 = cljs.core.next(seq__18604_18909__$1);
var G__18923 = null;
var G__18924 = (0);
var G__18925 = (0);
seq__18604_18894 = G__18922;
chunk__18606_18895 = G__18923;
count__18607_18896 = G__18924;
i__18608_18897 = G__18925;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18891);
});})(seq__18552_18833,chunk__18556_18834,count__18557_18835,i__18558_18836,seq__18263,chunk__18265,count__18266,i__18267,new_link_18893,path_match_18892,node_18891,seq__18552_18885__$1,temp__5804__auto___18883__$1,path,seq__18263__$1,temp__5804__auto__,map__18262,map__18262__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18892], 0));

goog.dom.insertSiblingAfter(new_link_18893,node_18891);


var G__18926 = cljs.core.next(seq__18552_18885__$1);
var G__18927 = null;
var G__18928 = (0);
var G__18929 = (0);
seq__18552_18833 = G__18926;
chunk__18556_18834 = G__18927;
count__18557_18835 = G__18928;
i__18558_18836 = G__18929;
continue;
} else {
var G__18930 = cljs.core.next(seq__18552_18885__$1);
var G__18931 = null;
var G__18932 = (0);
var G__18933 = (0);
seq__18552_18833 = G__18930;
chunk__18556_18834 = G__18931;
count__18557_18835 = G__18932;
i__18558_18836 = G__18933;
continue;
}
} else {
var G__18934 = cljs.core.next(seq__18552_18885__$1);
var G__18935 = null;
var G__18936 = (0);
var G__18937 = (0);
seq__18552_18833 = G__18934;
chunk__18556_18834 = G__18935;
count__18557_18835 = G__18936;
i__18558_18836 = G__18937;
continue;
}
}
} else {
}
}
break;
}


var G__18938 = cljs.core.next(seq__18263__$1);
var G__18939 = null;
var G__18940 = (0);
var G__18941 = (0);
seq__18263 = G__18938;
chunk__18265 = G__18939;
count__18266 = G__18940;
i__18267 = G__18941;
continue;
} else {
var G__18947 = cljs.core.next(seq__18263__$1);
var G__18948 = null;
var G__18949 = (0);
var G__18950 = (0);
seq__18263 = G__18947;
chunk__18265 = G__18948;
count__18266 = G__18949;
i__18267 = G__18950;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__18614){
var map__18615 = p__18614;
var map__18615__$1 = cljs.core.__destructure_map(map__18615);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18615__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__18616){
var map__18617 = p__18616;
var map__18617__$1 = cljs.core.__destructure_map(map__18617);
var _ = map__18617__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18617__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18618,done,error){
var map__18619 = p__18618;
var map__18619__$1 = cljs.core.__destructure_map(map__18619);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18619__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__18620,done,error){
var map__18621 = p__18620;
var map__18621__$1 = cljs.core.__destructure_map(map__18621);
var msg = map__18621__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18621__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18621__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18621__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__18622){
var map__18623 = p__18622;
var map__18623__$1 = cljs.core.__destructure_map(map__18623);
var src = map__18623__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18623__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__18624 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__18624) : done.call(null,G__18624));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__18625){
var map__18626 = p__18625;
var map__18626__$1 = cljs.core.__destructure_map(map__18626);
var msg__$1 = map__18626__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18626__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e18627){var ex = e18627;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__18628){
var map__18629 = p__18628;
var map__18629__$1 = cljs.core.__destructure_map(map__18629);
var env = map__18629__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18629__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18636){
var map__18637 = p__18636;
var map__18637__$1 = cljs.core.__destructure_map(map__18637);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18637__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18637__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__18638){
var map__18639 = p__18638;
var map__18639__$1 = cljs.core.__destructure_map(map__18639);
var svc = map__18639__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18639__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
