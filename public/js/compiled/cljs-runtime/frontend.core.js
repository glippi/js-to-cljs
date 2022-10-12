goog.provide('frontend.core');
frontend.core.dev_setup = (function frontend$core$dev_setup(){
if(frontend.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
frontend.core.mount_root = (function frontend$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.main], null),root_el);
});
frontend.core.init = (function frontend$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.events","initialize-db","frontend.events/initialize-db",-1905696821)], null));

frontend.core.dev_setup();

return frontend.core.mount_root();
});

//# sourceMappingURL=frontend.core.js.map
