goog.provide('frontend.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.events","initialize-db","frontend.events/initialize-db",-1905696821),(function (_,___$1){
return frontend.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.events","transform-code","frontend.events/transform-code",-1535365544),(function (db,p__25781){
var vec__25782 = p__25781;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25782,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25782,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"transformed-code","transformed-code",-500680224),js_to_cljs.core.parse_str.cljs$core$IFn$_invoke$arity$1(code));
}));

//# sourceMappingURL=frontend.events.js.map
