goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__17891,p__17892){
var map__17893 = p__17891;
var map__17893__$1 = cljs.core.__destructure_map(map__17893);
var svc = map__17893__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17893__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17893__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17893__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17894 = p__17892;
var map__17894__$1 = cljs.core.__destructure_map(map__17894);
var msg = map__17894__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17894__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__17895,p__17896){
var map__17907 = p__17895;
var map__17907__$1 = cljs.core.__destructure_map(map__17907);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17907__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__17908 = p__17896;
var map__17908__$1 = cljs.core.__destructure_map(map__17908);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17908__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__17909,p__17910){
var map__17912 = p__17909;
var map__17912__$1 = cljs.core.__destructure_map(map__17912);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17912__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17912__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17913 = p__17910;
var map__17913__$1 = cljs.core.__destructure_map(map__17913);
var msg = map__17913__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17913__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__17914,tid){
var map__17915 = p__17914;
var map__17915__$1 = cljs.core.__destructure_map(map__17915);
var svc = map__17915__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17915__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__17928 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__17929 = null;
var count__17930 = (0);
var i__17931 = (0);
while(true){
if((i__17931 < count__17930)){
var vec__17942 = chunk__17929.cljs$core$IIndexed$_nth$arity$2(null,i__17931);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17942,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17942,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17951 = seq__17928;
var G__17952 = chunk__17929;
var G__17953 = count__17930;
var G__17954 = (i__17931 + (1));
seq__17928 = G__17951;
chunk__17929 = G__17952;
count__17930 = G__17953;
i__17931 = G__17954;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17928);
if(temp__5804__auto__){
var seq__17928__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17928__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17928__$1);
var G__17955 = cljs.core.chunk_rest(seq__17928__$1);
var G__17956 = c__5568__auto__;
var G__17957 = cljs.core.count(c__5568__auto__);
var G__17958 = (0);
seq__17928 = G__17955;
chunk__17929 = G__17956;
count__17930 = G__17957;
i__17931 = G__17958;
continue;
} else {
var vec__17945 = cljs.core.first(seq__17928__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17945,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17945,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17959 = cljs.core.next(seq__17928__$1);
var G__17960 = null;
var G__17961 = (0);
var G__17962 = (0);
seq__17928 = G__17959;
chunk__17929 = G__17960;
count__17930 = G__17961;
i__17931 = G__17962;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__17919_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__17919_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__17920_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__17920_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__17921_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__17921_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__17922_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__17922_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__17948){
var map__17949 = p__17948;
var map__17949__$1 = cljs.core.__destructure_map(map__17949);
var svc = map__17949__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
