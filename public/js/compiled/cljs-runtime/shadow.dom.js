goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16433 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16433(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16434 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16434(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15733 = coll;
var G__15734 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15733,G__15734) : shadow.dom.lazy_native_coll_seq.call(null,G__15733,G__15734));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__15746 = arguments.length;
switch (G__15746) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__15757 = arguments.length;
switch (G__15757) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__15768 = arguments.length;
switch (G__15768) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__15779 = arguments.length;
switch (G__15779) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__15793 = arguments.length;
switch (G__15793) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__15809 = arguments.length;
switch (G__15809) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e15832){if((e15832 instanceof Object)){
var e = e15832;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15832;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__15846 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15847 = null;
var count__15848 = (0);
var i__15849 = (0);
while(true){
if((i__15849 < count__15848)){
var el = chunk__15847.cljs$core$IIndexed$_nth$arity$2(null,i__15849);
var handler_16441__$1 = ((function (seq__15846,chunk__15847,count__15848,i__15849,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15846,chunk__15847,count__15848,i__15849,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16441__$1);


var G__16442 = seq__15846;
var G__16443 = chunk__15847;
var G__16444 = count__15848;
var G__16445 = (i__15849 + (1));
seq__15846 = G__16442;
chunk__15847 = G__16443;
count__15848 = G__16444;
i__15849 = G__16445;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15846);
if(temp__5804__auto__){
var seq__15846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15846__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15846__$1);
var G__16446 = cljs.core.chunk_rest(seq__15846__$1);
var G__16447 = c__5568__auto__;
var G__16448 = cljs.core.count(c__5568__auto__);
var G__16449 = (0);
seq__15846 = G__16446;
chunk__15847 = G__16447;
count__15848 = G__16448;
i__15849 = G__16449;
continue;
} else {
var el = cljs.core.first(seq__15846__$1);
var handler_16450__$1 = ((function (seq__15846,chunk__15847,count__15848,i__15849,el,seq__15846__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15846,chunk__15847,count__15848,i__15849,el,seq__15846__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16450__$1);


var G__16451 = cljs.core.next(seq__15846__$1);
var G__16452 = null;
var G__16453 = (0);
var G__16454 = (0);
seq__15846 = G__16451;
chunk__15847 = G__16452;
count__15848 = G__16453;
i__15849 = G__16454;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__15868 = arguments.length;
switch (G__15868) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__15878 = cljs.core.seq(events);
var chunk__15879 = null;
var count__15880 = (0);
var i__15881 = (0);
while(true){
if((i__15881 < count__15880)){
var vec__15893 = chunk__15879.cljs$core$IIndexed$_nth$arity$2(null,i__15881);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15893,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15893,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16456 = seq__15878;
var G__16457 = chunk__15879;
var G__16458 = count__15880;
var G__16459 = (i__15881 + (1));
seq__15878 = G__16456;
chunk__15879 = G__16457;
count__15880 = G__16458;
i__15881 = G__16459;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15878);
if(temp__5804__auto__){
var seq__15878__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15878__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15878__$1);
var G__16460 = cljs.core.chunk_rest(seq__15878__$1);
var G__16461 = c__5568__auto__;
var G__16462 = cljs.core.count(c__5568__auto__);
var G__16463 = (0);
seq__15878 = G__16460;
chunk__15879 = G__16461;
count__15880 = G__16462;
i__15881 = G__16463;
continue;
} else {
var vec__15900 = cljs.core.first(seq__15878__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15900,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15900,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16464 = cljs.core.next(seq__15878__$1);
var G__16465 = null;
var G__16466 = (0);
var G__16467 = (0);
seq__15878 = G__16464;
chunk__15879 = G__16465;
count__15880 = G__16466;
i__15881 = G__16467;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__15910 = cljs.core.seq(styles);
var chunk__15912 = null;
var count__15913 = (0);
var i__15914 = (0);
while(true){
if((i__15914 < count__15913)){
var vec__15927 = chunk__15912.cljs$core$IIndexed$_nth$arity$2(null,i__15914);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15927,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15927,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16468 = seq__15910;
var G__16469 = chunk__15912;
var G__16470 = count__15913;
var G__16471 = (i__15914 + (1));
seq__15910 = G__16468;
chunk__15912 = G__16469;
count__15913 = G__16470;
i__15914 = G__16471;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15910);
if(temp__5804__auto__){
var seq__15910__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15910__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15910__$1);
var G__16472 = cljs.core.chunk_rest(seq__15910__$1);
var G__16473 = c__5568__auto__;
var G__16474 = cljs.core.count(c__5568__auto__);
var G__16475 = (0);
seq__15910 = G__16472;
chunk__15912 = G__16473;
count__15913 = G__16474;
i__15914 = G__16475;
continue;
} else {
var vec__15931 = cljs.core.first(seq__15910__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15931,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16476 = cljs.core.next(seq__15910__$1);
var G__16477 = null;
var G__16478 = (0);
var G__16479 = (0);
seq__15910 = G__16476;
chunk__15912 = G__16477;
count__15913 = G__16478;
i__15914 = G__16479;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__15936_16480 = key;
var G__15936_16481__$1 = (((G__15936_16480 instanceof cljs.core.Keyword))?G__15936_16480.fqn:null);
switch (G__15936_16481__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16483 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_16483,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_16483,"aria-");
}
})())){
el.setAttribute(ks_16483,value);
} else {
(el[ks_16483] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__15960){
var map__15962 = p__15960;
var map__15962__$1 = cljs.core.__destructure_map(map__15962);
var props = map__15962__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15962__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__15964 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15964,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15964,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15964,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__15968 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__15968,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__15968;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__15978 = arguments.length;
switch (G__15978) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__15986){
var vec__15987 = p__15986;
var seq__15988 = cljs.core.seq(vec__15987);
var first__15989 = cljs.core.first(seq__15988);
var seq__15988__$1 = cljs.core.next(seq__15988);
var nn = first__15989;
var first__15989__$1 = cljs.core.first(seq__15988__$1);
var seq__15988__$2 = cljs.core.next(seq__15988__$1);
var np = first__15989__$1;
var nc = seq__15988__$2;
var node = vec__15987;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15990 = nn;
var G__15991 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15990,G__15991) : create_fn.call(null,G__15990,G__15991));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15992 = nn;
var G__15993 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15992,G__15993) : create_fn.call(null,G__15992,G__15993));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15994 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15994,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15994,(1),null);
var seq__15997_16485 = cljs.core.seq(node_children);
var chunk__15998_16486 = null;
var count__15999_16487 = (0);
var i__16000_16488 = (0);
while(true){
if((i__16000_16488 < count__15999_16487)){
var child_struct_16489 = chunk__15998_16486.cljs$core$IIndexed$_nth$arity$2(null,i__16000_16488);
var children_16490 = shadow.dom.dom_node(child_struct_16489);
if(cljs.core.seq_QMARK_(children_16490)){
var seq__16018_16491 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16490));
var chunk__16020_16492 = null;
var count__16021_16493 = (0);
var i__16022_16494 = (0);
while(true){
if((i__16022_16494 < count__16021_16493)){
var child_16495 = chunk__16020_16492.cljs$core$IIndexed$_nth$arity$2(null,i__16022_16494);
if(cljs.core.truth_(child_16495)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16495);


var G__16496 = seq__16018_16491;
var G__16497 = chunk__16020_16492;
var G__16498 = count__16021_16493;
var G__16499 = (i__16022_16494 + (1));
seq__16018_16491 = G__16496;
chunk__16020_16492 = G__16497;
count__16021_16493 = G__16498;
i__16022_16494 = G__16499;
continue;
} else {
var G__16500 = seq__16018_16491;
var G__16501 = chunk__16020_16492;
var G__16502 = count__16021_16493;
var G__16503 = (i__16022_16494 + (1));
seq__16018_16491 = G__16500;
chunk__16020_16492 = G__16501;
count__16021_16493 = G__16502;
i__16022_16494 = G__16503;
continue;
}
} else {
var temp__5804__auto___16504 = cljs.core.seq(seq__16018_16491);
if(temp__5804__auto___16504){
var seq__16018_16505__$1 = temp__5804__auto___16504;
if(cljs.core.chunked_seq_QMARK_(seq__16018_16505__$1)){
var c__5568__auto___16506 = cljs.core.chunk_first(seq__16018_16505__$1);
var G__16507 = cljs.core.chunk_rest(seq__16018_16505__$1);
var G__16508 = c__5568__auto___16506;
var G__16509 = cljs.core.count(c__5568__auto___16506);
var G__16510 = (0);
seq__16018_16491 = G__16507;
chunk__16020_16492 = G__16508;
count__16021_16493 = G__16509;
i__16022_16494 = G__16510;
continue;
} else {
var child_16511 = cljs.core.first(seq__16018_16505__$1);
if(cljs.core.truth_(child_16511)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16511);


var G__16512 = cljs.core.next(seq__16018_16505__$1);
var G__16513 = null;
var G__16514 = (0);
var G__16515 = (0);
seq__16018_16491 = G__16512;
chunk__16020_16492 = G__16513;
count__16021_16493 = G__16514;
i__16022_16494 = G__16515;
continue;
} else {
var G__16516 = cljs.core.next(seq__16018_16505__$1);
var G__16517 = null;
var G__16518 = (0);
var G__16519 = (0);
seq__16018_16491 = G__16516;
chunk__16020_16492 = G__16517;
count__16021_16493 = G__16518;
i__16022_16494 = G__16519;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16490);
}


var G__16520 = seq__15997_16485;
var G__16521 = chunk__15998_16486;
var G__16522 = count__15999_16487;
var G__16523 = (i__16000_16488 + (1));
seq__15997_16485 = G__16520;
chunk__15998_16486 = G__16521;
count__15999_16487 = G__16522;
i__16000_16488 = G__16523;
continue;
} else {
var temp__5804__auto___16524 = cljs.core.seq(seq__15997_16485);
if(temp__5804__auto___16524){
var seq__15997_16525__$1 = temp__5804__auto___16524;
if(cljs.core.chunked_seq_QMARK_(seq__15997_16525__$1)){
var c__5568__auto___16526 = cljs.core.chunk_first(seq__15997_16525__$1);
var G__16527 = cljs.core.chunk_rest(seq__15997_16525__$1);
var G__16528 = c__5568__auto___16526;
var G__16529 = cljs.core.count(c__5568__auto___16526);
var G__16530 = (0);
seq__15997_16485 = G__16527;
chunk__15998_16486 = G__16528;
count__15999_16487 = G__16529;
i__16000_16488 = G__16530;
continue;
} else {
var child_struct_16531 = cljs.core.first(seq__15997_16525__$1);
var children_16532 = shadow.dom.dom_node(child_struct_16531);
if(cljs.core.seq_QMARK_(children_16532)){
var seq__16032_16533 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16532));
var chunk__16034_16534 = null;
var count__16035_16535 = (0);
var i__16036_16536 = (0);
while(true){
if((i__16036_16536 < count__16035_16535)){
var child_16537 = chunk__16034_16534.cljs$core$IIndexed$_nth$arity$2(null,i__16036_16536);
if(cljs.core.truth_(child_16537)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16537);


var G__16538 = seq__16032_16533;
var G__16539 = chunk__16034_16534;
var G__16540 = count__16035_16535;
var G__16541 = (i__16036_16536 + (1));
seq__16032_16533 = G__16538;
chunk__16034_16534 = G__16539;
count__16035_16535 = G__16540;
i__16036_16536 = G__16541;
continue;
} else {
var G__16542 = seq__16032_16533;
var G__16543 = chunk__16034_16534;
var G__16544 = count__16035_16535;
var G__16545 = (i__16036_16536 + (1));
seq__16032_16533 = G__16542;
chunk__16034_16534 = G__16543;
count__16035_16535 = G__16544;
i__16036_16536 = G__16545;
continue;
}
} else {
var temp__5804__auto___16546__$1 = cljs.core.seq(seq__16032_16533);
if(temp__5804__auto___16546__$1){
var seq__16032_16547__$1 = temp__5804__auto___16546__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16032_16547__$1)){
var c__5568__auto___16548 = cljs.core.chunk_first(seq__16032_16547__$1);
var G__16549 = cljs.core.chunk_rest(seq__16032_16547__$1);
var G__16550 = c__5568__auto___16548;
var G__16551 = cljs.core.count(c__5568__auto___16548);
var G__16552 = (0);
seq__16032_16533 = G__16549;
chunk__16034_16534 = G__16550;
count__16035_16535 = G__16551;
i__16036_16536 = G__16552;
continue;
} else {
var child_16553 = cljs.core.first(seq__16032_16547__$1);
if(cljs.core.truth_(child_16553)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16553);


var G__16554 = cljs.core.next(seq__16032_16547__$1);
var G__16555 = null;
var G__16556 = (0);
var G__16557 = (0);
seq__16032_16533 = G__16554;
chunk__16034_16534 = G__16555;
count__16035_16535 = G__16556;
i__16036_16536 = G__16557;
continue;
} else {
var G__16558 = cljs.core.next(seq__16032_16547__$1);
var G__16559 = null;
var G__16560 = (0);
var G__16561 = (0);
seq__16032_16533 = G__16558;
chunk__16034_16534 = G__16559;
count__16035_16535 = G__16560;
i__16036_16536 = G__16561;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16532);
}


var G__16562 = cljs.core.next(seq__15997_16525__$1);
var G__16563 = null;
var G__16564 = (0);
var G__16565 = (0);
seq__15997_16485 = G__16562;
chunk__15998_16486 = G__16563;
count__15999_16487 = G__16564;
i__16000_16488 = G__16565;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__16049 = cljs.core.seq(node);
var chunk__16050 = null;
var count__16051 = (0);
var i__16052 = (0);
while(true){
if((i__16052 < count__16051)){
var n = chunk__16050.cljs$core$IIndexed$_nth$arity$2(null,i__16052);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16566 = seq__16049;
var G__16567 = chunk__16050;
var G__16568 = count__16051;
var G__16569 = (i__16052 + (1));
seq__16049 = G__16566;
chunk__16050 = G__16567;
count__16051 = G__16568;
i__16052 = G__16569;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16049);
if(temp__5804__auto__){
var seq__16049__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16049__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16049__$1);
var G__16570 = cljs.core.chunk_rest(seq__16049__$1);
var G__16571 = c__5568__auto__;
var G__16572 = cljs.core.count(c__5568__auto__);
var G__16573 = (0);
seq__16049 = G__16570;
chunk__16050 = G__16571;
count__16051 = G__16572;
i__16052 = G__16573;
continue;
} else {
var n = cljs.core.first(seq__16049__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16574 = cljs.core.next(seq__16049__$1);
var G__16575 = null;
var G__16576 = (0);
var G__16577 = (0);
seq__16049 = G__16574;
chunk__16050 = G__16575;
count__16051 = G__16576;
i__16052 = G__16577;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__16060 = arguments.length;
switch (G__16060) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__16062 = arguments.length;
switch (G__16062) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__16075 = arguments.length;
switch (G__16075) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16582 = arguments.length;
var i__5770__auto___16583 = (0);
while(true){
if((i__5770__auto___16583 < len__5769__auto___16582)){
args__5775__auto__.push((arguments[i__5770__auto___16583]));

var G__16585 = (i__5770__auto___16583 + (1));
i__5770__auto___16583 = G__16585;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__16100_16586 = cljs.core.seq(nodes);
var chunk__16101_16587 = null;
var count__16102_16588 = (0);
var i__16103_16589 = (0);
while(true){
if((i__16103_16589 < count__16102_16588)){
var node_16590 = chunk__16101_16587.cljs$core$IIndexed$_nth$arity$2(null,i__16103_16589);
fragment.appendChild(shadow.dom._to_dom(node_16590));


var G__16591 = seq__16100_16586;
var G__16592 = chunk__16101_16587;
var G__16593 = count__16102_16588;
var G__16594 = (i__16103_16589 + (1));
seq__16100_16586 = G__16591;
chunk__16101_16587 = G__16592;
count__16102_16588 = G__16593;
i__16103_16589 = G__16594;
continue;
} else {
var temp__5804__auto___16595 = cljs.core.seq(seq__16100_16586);
if(temp__5804__auto___16595){
var seq__16100_16596__$1 = temp__5804__auto___16595;
if(cljs.core.chunked_seq_QMARK_(seq__16100_16596__$1)){
var c__5568__auto___16597 = cljs.core.chunk_first(seq__16100_16596__$1);
var G__16598 = cljs.core.chunk_rest(seq__16100_16596__$1);
var G__16599 = c__5568__auto___16597;
var G__16600 = cljs.core.count(c__5568__auto___16597);
var G__16601 = (0);
seq__16100_16586 = G__16598;
chunk__16101_16587 = G__16599;
count__16102_16588 = G__16600;
i__16103_16589 = G__16601;
continue;
} else {
var node_16602 = cljs.core.first(seq__16100_16596__$1);
fragment.appendChild(shadow.dom._to_dom(node_16602));


var G__16603 = cljs.core.next(seq__16100_16596__$1);
var G__16604 = null;
var G__16605 = (0);
var G__16606 = (0);
seq__16100_16586 = G__16603;
chunk__16101_16587 = G__16604;
count__16102_16588 = G__16605;
i__16103_16589 = G__16606;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq16096){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16096));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__16109_16607 = cljs.core.seq(scripts);
var chunk__16110_16608 = null;
var count__16111_16609 = (0);
var i__16112_16610 = (0);
while(true){
if((i__16112_16610 < count__16111_16609)){
var vec__16120_16611 = chunk__16110_16608.cljs$core$IIndexed$_nth$arity$2(null,i__16112_16610);
var script_tag_16612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16120_16611,(0),null);
var script_body_16613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16120_16611,(1),null);
eval(script_body_16613);


var G__16614 = seq__16109_16607;
var G__16615 = chunk__16110_16608;
var G__16616 = count__16111_16609;
var G__16617 = (i__16112_16610 + (1));
seq__16109_16607 = G__16614;
chunk__16110_16608 = G__16615;
count__16111_16609 = G__16616;
i__16112_16610 = G__16617;
continue;
} else {
var temp__5804__auto___16618 = cljs.core.seq(seq__16109_16607);
if(temp__5804__auto___16618){
var seq__16109_16619__$1 = temp__5804__auto___16618;
if(cljs.core.chunked_seq_QMARK_(seq__16109_16619__$1)){
var c__5568__auto___16620 = cljs.core.chunk_first(seq__16109_16619__$1);
var G__16621 = cljs.core.chunk_rest(seq__16109_16619__$1);
var G__16622 = c__5568__auto___16620;
var G__16623 = cljs.core.count(c__5568__auto___16620);
var G__16624 = (0);
seq__16109_16607 = G__16621;
chunk__16110_16608 = G__16622;
count__16111_16609 = G__16623;
i__16112_16610 = G__16624;
continue;
} else {
var vec__16123_16625 = cljs.core.first(seq__16109_16619__$1);
var script_tag_16626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16123_16625,(0),null);
var script_body_16627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16123_16625,(1),null);
eval(script_body_16627);


var G__16628 = cljs.core.next(seq__16109_16619__$1);
var G__16629 = null;
var G__16630 = (0);
var G__16631 = (0);
seq__16109_16607 = G__16628;
chunk__16110_16608 = G__16629;
count__16111_16609 = G__16630;
i__16112_16610 = G__16631;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__16126){
var vec__16128 = p__16126;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16128,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16128,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__16147 = arguments.length;
switch (G__16147) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__16163 = cljs.core.seq(style_keys);
var chunk__16164 = null;
var count__16165 = (0);
var i__16166 = (0);
while(true){
if((i__16166 < count__16165)){
var it = chunk__16164.cljs$core$IIndexed$_nth$arity$2(null,i__16166);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16633 = seq__16163;
var G__16634 = chunk__16164;
var G__16635 = count__16165;
var G__16636 = (i__16166 + (1));
seq__16163 = G__16633;
chunk__16164 = G__16634;
count__16165 = G__16635;
i__16166 = G__16636;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16163);
if(temp__5804__auto__){
var seq__16163__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16163__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16163__$1);
var G__16637 = cljs.core.chunk_rest(seq__16163__$1);
var G__16638 = c__5568__auto__;
var G__16639 = cljs.core.count(c__5568__auto__);
var G__16640 = (0);
seq__16163 = G__16637;
chunk__16164 = G__16638;
count__16165 = G__16639;
i__16166 = G__16640;
continue;
} else {
var it = cljs.core.first(seq__16163__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16641 = cljs.core.next(seq__16163__$1);
var G__16642 = null;
var G__16643 = (0);
var G__16644 = (0);
seq__16163 = G__16641;
chunk__16164 = G__16642;
count__16165 = G__16643;
i__16166 = G__16644;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16172,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16185 = k16172;
var G__16185__$1 = (((G__16185 instanceof cljs.core.Keyword))?G__16185.fqn:null);
switch (G__16185__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16172,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16188){
var vec__16189 = p__16188;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16189,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16189,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16171){
var self__ = this;
var G__16171__$1 = this;
return (new cljs.core.RecordIter((0),G__16171__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16173,other16174){
var self__ = this;
var this16173__$1 = this;
return (((!((other16174 == null)))) && ((((this16173__$1.constructor === other16174.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16173__$1.x,other16174.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16173__$1.y,other16174.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16173__$1.__extmap,other16174.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16172){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16211 = k16172;
var G__16211__$1 = (((G__16211 instanceof cljs.core.Keyword))?G__16211.fqn:null);
switch (G__16211__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16172);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16171){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16214 = cljs.core.keyword_identical_QMARK_;
var expr__16215 = k__5352__auto__;
if(cljs.core.truth_((pred__16214.cljs$core$IFn$_invoke$arity$2 ? pred__16214.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16215) : pred__16214.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__16215)))){
return (new shadow.dom.Coordinate(G__16171,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16214.cljs$core$IFn$_invoke$arity$2 ? pred__16214.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16215) : pred__16214.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__16215)))){
return (new shadow.dom.Coordinate(self__.x,G__16171,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16171),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16171){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16171,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16177){
var extmap__5385__auto__ = (function (){var G__16227 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16177,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16177)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16227);
} else {
return G__16227;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16177),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16177),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16238,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16242 = k16238;
var G__16242__$1 = (((G__16242 instanceof cljs.core.Keyword))?G__16242.fqn:null);
switch (G__16242__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16238,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16243){
var vec__16244 = p__16243;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16244,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16244,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16237){
var self__ = this;
var G__16237__$1 = this;
return (new cljs.core.RecordIter((0),G__16237__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16239,other16240){
var self__ = this;
var this16239__$1 = this;
return (((!((other16240 == null)))) && ((((this16239__$1.constructor === other16240.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16239__$1.w,other16240.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16239__$1.h,other16240.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16239__$1.__extmap,other16240.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16238){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16247 = k16238;
var G__16247__$1 = (((G__16247 instanceof cljs.core.Keyword))?G__16247.fqn:null);
switch (G__16247__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16238);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16237){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16250 = cljs.core.keyword_identical_QMARK_;
var expr__16251 = k__5352__auto__;
if(cljs.core.truth_((pred__16250.cljs$core$IFn$_invoke$arity$2 ? pred__16250.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16251) : pred__16250.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16251)))){
return (new shadow.dom.Size(G__16237,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16250.cljs$core$IFn$_invoke$arity$2 ? pred__16250.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16251) : pred__16250.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16251)))){
return (new shadow.dom.Size(self__.w,G__16237,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16237),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16237){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16237,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16241){
var extmap__5385__auto__ = (function (){var G__16266 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16241,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16241)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16266);
} else {
return G__16266;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16241),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16241),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__16654 = (i + (1));
var G__16655 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16654;
ret = G__16655;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16283){
var vec__16285 = p__16283;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16285,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16285,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16291 = arguments.length;
switch (G__16291) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16659 = ps;
var G__16660 = (i + (1));
el__$1 = G__16659;
i = G__16660;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16325 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16325,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16325,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16325,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16328_16663 = cljs.core.seq(props);
var chunk__16329_16664 = null;
var count__16330_16665 = (0);
var i__16331_16666 = (0);
while(true){
if((i__16331_16666 < count__16330_16665)){
var vec__16341_16667 = chunk__16329_16664.cljs$core$IIndexed$_nth$arity$2(null,i__16331_16666);
var k_16668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16341_16667,(0),null);
var v_16669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16341_16667,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16668);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16668),v_16669);


var G__16670 = seq__16328_16663;
var G__16671 = chunk__16329_16664;
var G__16672 = count__16330_16665;
var G__16673 = (i__16331_16666 + (1));
seq__16328_16663 = G__16670;
chunk__16329_16664 = G__16671;
count__16330_16665 = G__16672;
i__16331_16666 = G__16673;
continue;
} else {
var temp__5804__auto___16675 = cljs.core.seq(seq__16328_16663);
if(temp__5804__auto___16675){
var seq__16328_16676__$1 = temp__5804__auto___16675;
if(cljs.core.chunked_seq_QMARK_(seq__16328_16676__$1)){
var c__5568__auto___16677 = cljs.core.chunk_first(seq__16328_16676__$1);
var G__16678 = cljs.core.chunk_rest(seq__16328_16676__$1);
var G__16679 = c__5568__auto___16677;
var G__16680 = cljs.core.count(c__5568__auto___16677);
var G__16681 = (0);
seq__16328_16663 = G__16678;
chunk__16329_16664 = G__16679;
count__16330_16665 = G__16680;
i__16331_16666 = G__16681;
continue;
} else {
var vec__16344_16683 = cljs.core.first(seq__16328_16676__$1);
var k_16684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344_16683,(0),null);
var v_16685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344_16683,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16684);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16684),v_16685);


var G__16687 = cljs.core.next(seq__16328_16676__$1);
var G__16688 = null;
var G__16689 = (0);
var G__16690 = (0);
seq__16328_16663 = G__16687;
chunk__16329_16664 = G__16688;
count__16330_16665 = G__16689;
i__16331_16666 = G__16690;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16357 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16357,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16357,(1),null);
var seq__16360_16691 = cljs.core.seq(node_children);
var chunk__16362_16692 = null;
var count__16363_16693 = (0);
var i__16364_16694 = (0);
while(true){
if((i__16364_16694 < count__16363_16693)){
var child_struct_16695 = chunk__16362_16692.cljs$core$IIndexed$_nth$arity$2(null,i__16364_16694);
if((!((child_struct_16695 == null)))){
if(typeof child_struct_16695 === 'string'){
var text_16696 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16696),child_struct_16695].join(''));
} else {
var children_16697 = shadow.dom.svg_node(child_struct_16695);
if(cljs.core.seq_QMARK_(children_16697)){
var seq__16405_16698 = cljs.core.seq(children_16697);
var chunk__16407_16699 = null;
var count__16408_16700 = (0);
var i__16409_16701 = (0);
while(true){
if((i__16409_16701 < count__16408_16700)){
var child_16702 = chunk__16407_16699.cljs$core$IIndexed$_nth$arity$2(null,i__16409_16701);
if(cljs.core.truth_(child_16702)){
node.appendChild(child_16702);


var G__16703 = seq__16405_16698;
var G__16704 = chunk__16407_16699;
var G__16705 = count__16408_16700;
var G__16706 = (i__16409_16701 + (1));
seq__16405_16698 = G__16703;
chunk__16407_16699 = G__16704;
count__16408_16700 = G__16705;
i__16409_16701 = G__16706;
continue;
} else {
var G__16707 = seq__16405_16698;
var G__16708 = chunk__16407_16699;
var G__16709 = count__16408_16700;
var G__16710 = (i__16409_16701 + (1));
seq__16405_16698 = G__16707;
chunk__16407_16699 = G__16708;
count__16408_16700 = G__16709;
i__16409_16701 = G__16710;
continue;
}
} else {
var temp__5804__auto___16711 = cljs.core.seq(seq__16405_16698);
if(temp__5804__auto___16711){
var seq__16405_16712__$1 = temp__5804__auto___16711;
if(cljs.core.chunked_seq_QMARK_(seq__16405_16712__$1)){
var c__5568__auto___16713 = cljs.core.chunk_first(seq__16405_16712__$1);
var G__16714 = cljs.core.chunk_rest(seq__16405_16712__$1);
var G__16715 = c__5568__auto___16713;
var G__16716 = cljs.core.count(c__5568__auto___16713);
var G__16717 = (0);
seq__16405_16698 = G__16714;
chunk__16407_16699 = G__16715;
count__16408_16700 = G__16716;
i__16409_16701 = G__16717;
continue;
} else {
var child_16718 = cljs.core.first(seq__16405_16712__$1);
if(cljs.core.truth_(child_16718)){
node.appendChild(child_16718);


var G__16719 = cljs.core.next(seq__16405_16712__$1);
var G__16720 = null;
var G__16721 = (0);
var G__16722 = (0);
seq__16405_16698 = G__16719;
chunk__16407_16699 = G__16720;
count__16408_16700 = G__16721;
i__16409_16701 = G__16722;
continue;
} else {
var G__16723 = cljs.core.next(seq__16405_16712__$1);
var G__16724 = null;
var G__16725 = (0);
var G__16726 = (0);
seq__16405_16698 = G__16723;
chunk__16407_16699 = G__16724;
count__16408_16700 = G__16725;
i__16409_16701 = G__16726;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16697);
}
}


var G__16727 = seq__16360_16691;
var G__16728 = chunk__16362_16692;
var G__16729 = count__16363_16693;
var G__16730 = (i__16364_16694 + (1));
seq__16360_16691 = G__16727;
chunk__16362_16692 = G__16728;
count__16363_16693 = G__16729;
i__16364_16694 = G__16730;
continue;
} else {
var G__16731 = seq__16360_16691;
var G__16732 = chunk__16362_16692;
var G__16733 = count__16363_16693;
var G__16734 = (i__16364_16694 + (1));
seq__16360_16691 = G__16731;
chunk__16362_16692 = G__16732;
count__16363_16693 = G__16733;
i__16364_16694 = G__16734;
continue;
}
} else {
var temp__5804__auto___16735 = cljs.core.seq(seq__16360_16691);
if(temp__5804__auto___16735){
var seq__16360_16736__$1 = temp__5804__auto___16735;
if(cljs.core.chunked_seq_QMARK_(seq__16360_16736__$1)){
var c__5568__auto___16737 = cljs.core.chunk_first(seq__16360_16736__$1);
var G__16738 = cljs.core.chunk_rest(seq__16360_16736__$1);
var G__16739 = c__5568__auto___16737;
var G__16740 = cljs.core.count(c__5568__auto___16737);
var G__16741 = (0);
seq__16360_16691 = G__16738;
chunk__16362_16692 = G__16739;
count__16363_16693 = G__16740;
i__16364_16694 = G__16741;
continue;
} else {
var child_struct_16742 = cljs.core.first(seq__16360_16736__$1);
if((!((child_struct_16742 == null)))){
if(typeof child_struct_16742 === 'string'){
var text_16743 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16743),child_struct_16742].join(''));
} else {
var children_16744 = shadow.dom.svg_node(child_struct_16742);
if(cljs.core.seq_QMARK_(children_16744)){
var seq__16411_16745 = cljs.core.seq(children_16744);
var chunk__16413_16746 = null;
var count__16414_16747 = (0);
var i__16415_16748 = (0);
while(true){
if((i__16415_16748 < count__16414_16747)){
var child_16749 = chunk__16413_16746.cljs$core$IIndexed$_nth$arity$2(null,i__16415_16748);
if(cljs.core.truth_(child_16749)){
node.appendChild(child_16749);


var G__16750 = seq__16411_16745;
var G__16751 = chunk__16413_16746;
var G__16752 = count__16414_16747;
var G__16753 = (i__16415_16748 + (1));
seq__16411_16745 = G__16750;
chunk__16413_16746 = G__16751;
count__16414_16747 = G__16752;
i__16415_16748 = G__16753;
continue;
} else {
var G__16754 = seq__16411_16745;
var G__16755 = chunk__16413_16746;
var G__16756 = count__16414_16747;
var G__16757 = (i__16415_16748 + (1));
seq__16411_16745 = G__16754;
chunk__16413_16746 = G__16755;
count__16414_16747 = G__16756;
i__16415_16748 = G__16757;
continue;
}
} else {
var temp__5804__auto___16758__$1 = cljs.core.seq(seq__16411_16745);
if(temp__5804__auto___16758__$1){
var seq__16411_16759__$1 = temp__5804__auto___16758__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16411_16759__$1)){
var c__5568__auto___16760 = cljs.core.chunk_first(seq__16411_16759__$1);
var G__16761 = cljs.core.chunk_rest(seq__16411_16759__$1);
var G__16762 = c__5568__auto___16760;
var G__16763 = cljs.core.count(c__5568__auto___16760);
var G__16764 = (0);
seq__16411_16745 = G__16761;
chunk__16413_16746 = G__16762;
count__16414_16747 = G__16763;
i__16415_16748 = G__16764;
continue;
} else {
var child_16765 = cljs.core.first(seq__16411_16759__$1);
if(cljs.core.truth_(child_16765)){
node.appendChild(child_16765);


var G__16766 = cljs.core.next(seq__16411_16759__$1);
var G__16767 = null;
var G__16768 = (0);
var G__16769 = (0);
seq__16411_16745 = G__16766;
chunk__16413_16746 = G__16767;
count__16414_16747 = G__16768;
i__16415_16748 = G__16769;
continue;
} else {
var G__16770 = cljs.core.next(seq__16411_16759__$1);
var G__16771 = null;
var G__16772 = (0);
var G__16773 = (0);
seq__16411_16745 = G__16770;
chunk__16413_16746 = G__16771;
count__16414_16747 = G__16772;
i__16415_16748 = G__16773;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16744);
}
}


var G__16774 = cljs.core.next(seq__16360_16736__$1);
var G__16775 = null;
var G__16776 = (0);
var G__16777 = (0);
seq__16360_16691 = G__16774;
chunk__16362_16692 = G__16775;
count__16363_16693 = G__16776;
i__16364_16694 = G__16777;
continue;
} else {
var G__16778 = cljs.core.next(seq__16360_16736__$1);
var G__16779 = null;
var G__16780 = (0);
var G__16781 = (0);
seq__16360_16691 = G__16778;
chunk__16362_16692 = G__16779;
count__16363_16693 = G__16780;
i__16364_16694 = G__16781;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16782 = arguments.length;
var i__5770__auto___16783 = (0);
while(true){
if((i__5770__auto___16783 < len__5769__auto___16782)){
args__5775__auto__.push((arguments[i__5770__auto___16783]));

var G__16784 = (i__5770__auto___16783 + (1));
i__5770__auto___16783 = G__16784;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16417){
var G__16418 = cljs.core.first(seq16417);
var seq16417__$1 = cljs.core.next(seq16417);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16418,seq16417__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__16420 = arguments.length;
switch (G__16420) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__14156__auto___16789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_16425){
var state_val_16426 = (state_16425[(1)]);
if((state_val_16426 === (1))){
var state_16425__$1 = state_16425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16425__$1,(2),once_or_cleanup);
} else {
if((state_val_16426 === (2))){
var inst_16422 = (state_16425[(2)]);
var inst_16423 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_16425__$1 = (function (){var statearr_16427 = state_16425;
(statearr_16427[(7)] = inst_16422);

return statearr_16427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16425__$1,inst_16423);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__14091__auto__ = null;
var shadow$dom$state_machine__14091__auto____0 = (function (){
var statearr_16428 = [null,null,null,null,null,null,null,null];
(statearr_16428[(0)] = shadow$dom$state_machine__14091__auto__);

(statearr_16428[(1)] = (1));

return statearr_16428;
});
var shadow$dom$state_machine__14091__auto____1 = (function (state_16425){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_16425);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e16429){var ex__14094__auto__ = e16429;
var statearr_16430_16790 = state_16425;
(statearr_16430_16790[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_16425[(4)]))){
var statearr_16431_16791 = state_16425;
(statearr_16431_16791[(1)] = cljs.core.first((state_16425[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16796 = state_16425;
state_16425 = G__16796;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
shadow$dom$state_machine__14091__auto__ = function(state_16425){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__14091__auto____0.call(this);
case 1:
return shadow$dom$state_machine__14091__auto____1.call(this,state_16425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__14091__auto____0;
shadow$dom$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__14091__auto____1;
return shadow$dom$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_16432 = f__14157__auto__();
(statearr_16432[(6)] = c__14156__auto___16789);

return statearr_16432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
