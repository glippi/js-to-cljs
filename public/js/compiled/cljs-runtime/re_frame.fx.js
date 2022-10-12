goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20044 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20045 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20045);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20159 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20159)){
var new_db_20163 = temp__5804__auto___20159;
var fexpr__20046_20164 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20046_20164.cljs$core$IFn$_invoke$arity$1 ? fexpr__20046_20164.cljs$core$IFn$_invoke$arity$1(new_db_20163) : fexpr__20046_20164.call(null,new_db_20163));
} else {
}

var seq__20047 = cljs.core.seq(effects_without_db);
var chunk__20048 = null;
var count__20049 = (0);
var i__20050 = (0);
while(true){
if((i__20050 < count__20049)){
var vec__20060 = chunk__20048.cljs$core$IIndexed$_nth$arity$2(null,i__20050);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20060,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20060,(1),null);
var temp__5802__auto___20165 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20165)){
var effect_fn_20166 = temp__5802__auto___20165;
(effect_fn_20166.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20166.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20166.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20183 = seq__20047;
var G__20184 = chunk__20048;
var G__20185 = count__20049;
var G__20186 = (i__20050 + (1));
seq__20047 = G__20183;
chunk__20048 = G__20184;
count__20049 = G__20185;
i__20050 = G__20186;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20047);
if(temp__5804__auto__){
var seq__20047__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20047__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20047__$1);
var G__20187 = cljs.core.chunk_rest(seq__20047__$1);
var G__20188 = c__5568__auto__;
var G__20189 = cljs.core.count(c__5568__auto__);
var G__20190 = (0);
seq__20047 = G__20187;
chunk__20048 = G__20188;
count__20049 = G__20189;
i__20050 = G__20190;
continue;
} else {
var vec__20068 = cljs.core.first(seq__20047__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20068,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20068,(1),null);
var temp__5802__auto___20191 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20191)){
var effect_fn_20192 = temp__5802__auto___20191;
(effect_fn_20192.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20192.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20192.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20195 = cljs.core.next(seq__20047__$1);
var G__20196 = null;
var G__20197 = (0);
var G__20198 = (0);
seq__20047 = G__20195;
chunk__20048 = G__20196;
count__20049 = G__20197;
i__20050 = G__20198;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19787__auto___20199 = re_frame.interop.now();
var duration__19788__auto___20200 = (end__19787__auto___20199 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19788__auto___20200,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19787__auto___20199);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20044);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20202 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20202)){
var new_db_20203 = temp__5804__auto___20202;
var fexpr__20072_20204 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20072_20204.cljs$core$IFn$_invoke$arity$1 ? fexpr__20072_20204.cljs$core$IFn$_invoke$arity$1(new_db_20203) : fexpr__20072_20204.call(null,new_db_20203));
} else {
}

var seq__20075 = cljs.core.seq(effects_without_db);
var chunk__20076 = null;
var count__20077 = (0);
var i__20078 = (0);
while(true){
if((i__20078 < count__20077)){
var vec__20085 = chunk__20076.cljs$core$IIndexed$_nth$arity$2(null,i__20078);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20085,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20085,(1),null);
var temp__5802__auto___20205 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20205)){
var effect_fn_20206 = temp__5802__auto___20205;
(effect_fn_20206.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20206.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20206.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20207 = seq__20075;
var G__20208 = chunk__20076;
var G__20209 = count__20077;
var G__20210 = (i__20078 + (1));
seq__20075 = G__20207;
chunk__20076 = G__20208;
count__20077 = G__20209;
i__20078 = G__20210;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20075);
if(temp__5804__auto__){
var seq__20075__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20075__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20075__$1);
var G__20211 = cljs.core.chunk_rest(seq__20075__$1);
var G__20212 = c__5568__auto__;
var G__20213 = cljs.core.count(c__5568__auto__);
var G__20214 = (0);
seq__20075 = G__20211;
chunk__20076 = G__20212;
count__20077 = G__20213;
i__20078 = G__20214;
continue;
} else {
var vec__20089 = cljs.core.first(seq__20075__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20089,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20089,(1),null);
var temp__5802__auto___20215 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20215)){
var effect_fn_20218 = temp__5802__auto___20215;
(effect_fn_20218.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20218.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20218.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20219 = cljs.core.next(seq__20075__$1);
var G__20220 = null;
var G__20221 = (0);
var G__20222 = (0);
seq__20075 = G__20219;
chunk__20076 = G__20220;
count__20077 = G__20221;
i__20078 = G__20222;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__20094){
var map__20095 = p__20094;
var map__20095__$1 = cljs.core.__destructure_map(map__20095);
var effect = map__20095__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20095__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20095__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__20096 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20097 = null;
var count__20098 = (0);
var i__20099 = (0);
while(true){
if((i__20099 < count__20098)){
var effect = chunk__20097.cljs$core$IIndexed$_nth$arity$2(null,i__20099);
re_frame.fx.dispatch_later(effect);


var G__20224 = seq__20096;
var G__20225 = chunk__20097;
var G__20226 = count__20098;
var G__20227 = (i__20099 + (1));
seq__20096 = G__20224;
chunk__20097 = G__20225;
count__20098 = G__20226;
i__20099 = G__20227;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20096);
if(temp__5804__auto__){
var seq__20096__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20096__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20096__$1);
var G__20228 = cljs.core.chunk_rest(seq__20096__$1);
var G__20230 = c__5568__auto__;
var G__20231 = cljs.core.count(c__5568__auto__);
var G__20232 = (0);
seq__20096 = G__20228;
chunk__20097 = G__20230;
count__20098 = G__20231;
i__20099 = G__20232;
continue;
} else {
var effect = cljs.core.first(seq__20096__$1);
re_frame.fx.dispatch_later(effect);


var G__20235 = cljs.core.next(seq__20096__$1);
var G__20236 = null;
var G__20237 = (0);
var G__20238 = (0);
seq__20096 = G__20235;
chunk__20097 = G__20236;
count__20098 = G__20237;
i__20099 = G__20238;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__20100 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20101 = null;
var count__20102 = (0);
var i__20103 = (0);
while(true){
if((i__20103 < count__20102)){
var vec__20126 = chunk__20101.cljs$core$IIndexed$_nth$arity$2(null,i__20103);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20126,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20126,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20239 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20239)){
var effect_fn_20240 = temp__5802__auto___20239;
(effect_fn_20240.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20240.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20240.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20241 = seq__20100;
var G__20242 = chunk__20101;
var G__20243 = count__20102;
var G__20244 = (i__20103 + (1));
seq__20100 = G__20241;
chunk__20101 = G__20242;
count__20102 = G__20243;
i__20103 = G__20244;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20100);
if(temp__5804__auto__){
var seq__20100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20100__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20100__$1);
var G__20245 = cljs.core.chunk_rest(seq__20100__$1);
var G__20246 = c__5568__auto__;
var G__20247 = cljs.core.count(c__5568__auto__);
var G__20248 = (0);
seq__20100 = G__20245;
chunk__20101 = G__20246;
count__20102 = G__20247;
i__20103 = G__20248;
continue;
} else {
var vec__20131 = cljs.core.first(seq__20100__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20131,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20131,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20249 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20249)){
var effect_fn_20250 = temp__5802__auto___20249;
(effect_fn_20250.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20250.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20250.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20251 = cljs.core.next(seq__20100__$1);
var G__20252 = null;
var G__20253 = (0);
var G__20254 = (0);
seq__20100 = G__20251;
chunk__20101 = G__20252;
count__20102 = G__20253;
i__20103 = G__20254;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__20138 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20139 = null;
var count__20140 = (0);
var i__20141 = (0);
while(true){
if((i__20141 < count__20140)){
var event = chunk__20139.cljs$core$IIndexed$_nth$arity$2(null,i__20141);
re_frame.router.dispatch(event);


var G__20255 = seq__20138;
var G__20256 = chunk__20139;
var G__20257 = count__20140;
var G__20258 = (i__20141 + (1));
seq__20138 = G__20255;
chunk__20139 = G__20256;
count__20140 = G__20257;
i__20141 = G__20258;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20138);
if(temp__5804__auto__){
var seq__20138__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20138__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20138__$1);
var G__20259 = cljs.core.chunk_rest(seq__20138__$1);
var G__20260 = c__5568__auto__;
var G__20261 = cljs.core.count(c__5568__auto__);
var G__20262 = (0);
seq__20138 = G__20259;
chunk__20139 = G__20260;
count__20140 = G__20261;
i__20141 = G__20262;
continue;
} else {
var event = cljs.core.first(seq__20138__$1);
re_frame.router.dispatch(event);


var G__20265 = cljs.core.next(seq__20138__$1);
var G__20266 = null;
var G__20267 = (0);
var G__20268 = (0);
seq__20138 = G__20265;
chunk__20139 = G__20266;
count__20140 = G__20267;
i__20141 = G__20268;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__20148 = cljs.core.seq(value);
var chunk__20149 = null;
var count__20150 = (0);
var i__20151 = (0);
while(true){
if((i__20151 < count__20150)){
var event = chunk__20149.cljs$core$IIndexed$_nth$arity$2(null,i__20151);
clear_event(event);


var G__20270 = seq__20148;
var G__20271 = chunk__20149;
var G__20272 = count__20150;
var G__20273 = (i__20151 + (1));
seq__20148 = G__20270;
chunk__20149 = G__20271;
count__20150 = G__20272;
i__20151 = G__20273;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20148);
if(temp__5804__auto__){
var seq__20148__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20148__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20148__$1);
var G__20274 = cljs.core.chunk_rest(seq__20148__$1);
var G__20275 = c__5568__auto__;
var G__20276 = cljs.core.count(c__5568__auto__);
var G__20277 = (0);
seq__20148 = G__20274;
chunk__20149 = G__20275;
count__20150 = G__20276;
i__20151 = G__20277;
continue;
} else {
var event = cljs.core.first(seq__20148__$1);
clear_event(event);


var G__20278 = cljs.core.next(seq__20148__$1);
var G__20279 = null;
var G__20280 = (0);
var G__20281 = (0);
seq__20148 = G__20278;
chunk__20149 = G__20279;
count__20150 = G__20280;
i__20151 = G__20281;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
