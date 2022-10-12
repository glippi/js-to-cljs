goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14223 = arguments.length;
switch (G__14223) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14228 = (function (f,blockable,meta14229){
this.f = f;
this.blockable = blockable;
this.meta14229 = meta14229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14230,meta14229__$1){
var self__ = this;
var _14230__$1 = this;
return (new cljs.core.async.t_cljs$core$async14228(self__.f,self__.blockable,meta14229__$1));
}));

(cljs.core.async.t_cljs$core$async14228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14230){
var self__ = this;
var _14230__$1 = this;
return self__.meta14229;
}));

(cljs.core.async.t_cljs$core$async14228.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14228.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14228.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14228.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14229","meta14229",-745025209,null)], null);
}));

(cljs.core.async.t_cljs$core$async14228.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14228");

(cljs.core.async.t_cljs$core$async14228.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14228");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14228.
 */
cljs.core.async.__GT_t_cljs$core$async14228 = (function cljs$core$async$__GT_t_cljs$core$async14228(f__$1,blockable__$1,meta14229){
return (new cljs.core.async.t_cljs$core$async14228(f__$1,blockable__$1,meta14229));
});

}

return (new cljs.core.async.t_cljs$core$async14228(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14255 = arguments.length;
switch (G__14255) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14260 = arguments.length;
switch (G__14260) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14271 = arguments.length;
switch (G__14271) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15731 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15731) : fn1.call(null,val_15731));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15731) : fn1.call(null,val_15731));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14276 = arguments.length;
switch (G__14276) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___15735 = n;
var x_15736 = (0);
while(true){
if((x_15736 < n__5636__auto___15735)){
(a[x_15736] = x_15736);

var G__15737 = (x_15736 + (1));
x_15736 = G__15737;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14280 = (function (flag,meta14281){
this.flag = flag;
this.meta14281 = meta14281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14282,meta14281__$1){
var self__ = this;
var _14282__$1 = this;
return (new cljs.core.async.t_cljs$core$async14280(self__.flag,meta14281__$1));
}));

(cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14282){
var self__ = this;
var _14282__$1 = this;
return self__.meta14281;
}));

(cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14281","meta14281",-1227874380,null)], null);
}));

(cljs.core.async.t_cljs$core$async14280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14280");

(cljs.core.async.t_cljs$core$async14280.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14280.
 */
cljs.core.async.__GT_t_cljs$core$async14280 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14280(flag__$1,meta14281){
return (new cljs.core.async.t_cljs$core$async14280(flag__$1,meta14281));
});

}

return (new cljs.core.async.t_cljs$core$async14280(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14291 = (function (flag,cb,meta14292){
this.flag = flag;
this.cb = cb;
this.meta14292 = meta14292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14293,meta14292__$1){
var self__ = this;
var _14293__$1 = this;
return (new cljs.core.async.t_cljs$core$async14291(self__.flag,self__.cb,meta14292__$1));
}));

(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14293){
var self__ = this;
var _14293__$1 = this;
return self__.meta14292;
}));

(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14292","meta14292",1083237550,null)], null);
}));

(cljs.core.async.t_cljs$core$async14291.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14291");

(cljs.core.async.t_cljs$core$async14291.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14291");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14291.
 */
cljs.core.async.__GT_t_cljs$core$async14291 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14291(flag__$1,cb__$1,meta14292){
return (new cljs.core.async.t_cljs$core$async14291(flag__$1,cb__$1,meta14292));
});

}

return (new cljs.core.async.t_cljs$core$async14291(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14295_SHARP_){
var G__14297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14295_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14297) : fret.call(null,G__14297));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14296_SHARP_){
var G__14298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14296_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14298) : fret.call(null,G__14298));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15738 = (i + (1));
i = G__15738;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15740 = arguments.length;
var i__5770__auto___15741 = (0);
while(true){
if((i__5770__auto___15741 < len__5769__auto___15740)){
args__5775__auto__.push((arguments[i__5770__auto___15741]));

var G__15742 = (i__5770__auto___15741 + (1));
i__5770__auto___15741 = G__15742;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14306){
var map__14307 = p__14306;
var map__14307__$1 = cljs.core.__destructure_map(map__14307);
var opts = map__14307__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14303){
var G__14304 = cljs.core.first(seq14303);
var seq14303__$1 = cljs.core.next(seq14303);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14304,seq14303__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14312 = arguments.length;
switch (G__14312) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14156__auto___15745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_14339){
var state_val_14340 = (state_14339[(1)]);
if((state_val_14340 === (7))){
var inst_14335 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
var statearr_14341_15747 = state_14339__$1;
(statearr_14341_15747[(2)] = inst_14335);

(statearr_14341_15747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (1))){
var state_14339__$1 = state_14339;
var statearr_14342_15748 = state_14339__$1;
(statearr_14342_15748[(2)] = null);

(statearr_14342_15748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (4))){
var inst_14318 = (state_14339[(7)]);
var inst_14318__$1 = (state_14339[(2)]);
var inst_14319 = (inst_14318__$1 == null);
var state_14339__$1 = (function (){var statearr_14343 = state_14339;
(statearr_14343[(7)] = inst_14318__$1);

return statearr_14343;
})();
if(cljs.core.truth_(inst_14319)){
var statearr_14344_15749 = state_14339__$1;
(statearr_14344_15749[(1)] = (5));

} else {
var statearr_14345_15750 = state_14339__$1;
(statearr_14345_15750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (13))){
var state_14339__$1 = state_14339;
var statearr_14346_15751 = state_14339__$1;
(statearr_14346_15751[(2)] = null);

(statearr_14346_15751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (6))){
var inst_14318 = (state_14339[(7)]);
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14339__$1,(11),to,inst_14318);
} else {
if((state_val_14340 === (3))){
var inst_14337 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14339__$1,inst_14337);
} else {
if((state_val_14340 === (12))){
var state_14339__$1 = state_14339;
var statearr_14347_15752 = state_14339__$1;
(statearr_14347_15752[(2)] = null);

(statearr_14347_15752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (2))){
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14339__$1,(4),from);
} else {
if((state_val_14340 === (11))){
var inst_14328 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
if(cljs.core.truth_(inst_14328)){
var statearr_14348_15754 = state_14339__$1;
(statearr_14348_15754[(1)] = (12));

} else {
var statearr_14349_15755 = state_14339__$1;
(statearr_14349_15755[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (9))){
var state_14339__$1 = state_14339;
var statearr_14350_15756 = state_14339__$1;
(statearr_14350_15756[(2)] = null);

(statearr_14350_15756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (5))){
var state_14339__$1 = state_14339;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14351_15758 = state_14339__$1;
(statearr_14351_15758[(1)] = (8));

} else {
var statearr_14352_15759 = state_14339__$1;
(statearr_14352_15759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (14))){
var inst_14333 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
var statearr_14353_15760 = state_14339__$1;
(statearr_14353_15760[(2)] = inst_14333);

(statearr_14353_15760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (10))){
var inst_14325 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
var statearr_14354_15761 = state_14339__$1;
(statearr_14354_15761[(2)] = inst_14325);

(statearr_14354_15761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (8))){
var inst_14322 = cljs.core.async.close_BANG_(to);
var state_14339__$1 = state_14339;
var statearr_14355_15762 = state_14339__$1;
(statearr_14355_15762[(2)] = inst_14322);

(statearr_14355_15762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_14356 = [null,null,null,null,null,null,null,null];
(statearr_14356[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_14356[(1)] = (1));

return statearr_14356;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_14339){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14339);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14357){var ex__14094__auto__ = e14357;
var statearr_14358_15763 = state_14339;
(statearr_14358_15763[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14339[(4)]))){
var statearr_14359_15764 = state_14339;
(statearr_14359_15764[(1)] = cljs.core.first((state_14339[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15765 = state_14339;
state_14339 = G__15765;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_14339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_14339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_14360 = f__14157__auto__();
(statearr_14360[(6)] = c__14156__auto___15745);

return statearr_14360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14361){
var vec__14362 = p__14361;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14362,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14362,(1),null);
var job = vec__14362;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14156__auto___15767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_14369){
var state_val_14370 = (state_14369[(1)]);
if((state_val_14370 === (1))){
var state_14369__$1 = state_14369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14369__$1,(2),res,v);
} else {
if((state_val_14370 === (2))){
var inst_14366 = (state_14369[(2)]);
var inst_14367 = cljs.core.async.close_BANG_(res);
var state_14369__$1 = (function (){var statearr_14371 = state_14369;
(statearr_14371[(7)] = inst_14366);

return statearr_14371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14369__$1,inst_14367);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_14372 = [null,null,null,null,null,null,null,null];
(statearr_14372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__);

(statearr_14372[(1)] = (1));

return statearr_14372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1 = (function (state_14369){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14369);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14373){var ex__14094__auto__ = e14373;
var statearr_14374_15769 = state_14369;
(statearr_14374_15769[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14369[(4)]))){
var statearr_14375_15770 = state_14369;
(statearr_14375_15770[(1)] = cljs.core.first((state_14369[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15771 = state_14369;
state_14369 = G__15771;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = function(state_14369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1.call(this,state_14369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_14376 = f__14157__auto__();
(statearr_14376[(6)] = c__14156__auto___15767);

return statearr_14376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14377){
var vec__14378 = p__14377;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378,(1),null);
var job = vec__14378;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___15772 = n;
var __15773 = (0);
while(true){
if((__15773 < n__5636__auto___15772)){
var G__14381_15774 = type;
var G__14381_15775__$1 = (((G__14381_15774 instanceof cljs.core.Keyword))?G__14381_15774.fqn:null);
switch (G__14381_15775__$1) {
case "compute":
var c__14156__auto___15777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15773,c__14156__auto___15777,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async){
return (function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = ((function (__15773,c__14156__auto___15777,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async){
return (function (state_14394){
var state_val_14395 = (state_14394[(1)]);
if((state_val_14395 === (1))){
var state_14394__$1 = state_14394;
var statearr_14396_15780 = state_14394__$1;
(statearr_14396_15780[(2)] = null);

(statearr_14396_15780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14395 === (2))){
var state_14394__$1 = state_14394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14394__$1,(4),jobs);
} else {
if((state_val_14395 === (3))){
var inst_14392 = (state_14394[(2)]);
var state_14394__$1 = state_14394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14394__$1,inst_14392);
} else {
if((state_val_14395 === (4))){
var inst_14384 = (state_14394[(2)]);
var inst_14385 = process__$1(inst_14384);
var state_14394__$1 = state_14394;
if(cljs.core.truth_(inst_14385)){
var statearr_14397_15781 = state_14394__$1;
(statearr_14397_15781[(1)] = (5));

} else {
var statearr_14398_15782 = state_14394__$1;
(statearr_14398_15782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14395 === (5))){
var state_14394__$1 = state_14394;
var statearr_14399_15783 = state_14394__$1;
(statearr_14399_15783[(2)] = null);

(statearr_14399_15783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14395 === (6))){
var state_14394__$1 = state_14394;
var statearr_14400_15784 = state_14394__$1;
(statearr_14400_15784[(2)] = null);

(statearr_14400_15784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14395 === (7))){
var inst_14390 = (state_14394[(2)]);
var state_14394__$1 = state_14394;
var statearr_14401_15785 = state_14394__$1;
(statearr_14401_15785[(2)] = inst_14390);

(statearr_14401_15785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15773,c__14156__auto___15777,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async))
;
return ((function (__15773,switch__14090__auto__,c__14156__auto___15777,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_14402 = [null,null,null,null,null,null,null];
(statearr_14402[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__);

(statearr_14402[(1)] = (1));

return statearr_14402;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1 = (function (state_14394){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14394);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14403){var ex__14094__auto__ = e14403;
var statearr_14404_15786 = state_14394;
(statearr_14404_15786[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14394[(4)]))){
var statearr_14405_15787 = state_14394;
(statearr_14405_15787[(1)] = cljs.core.first((state_14394[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15788 = state_14394;
state_14394 = G__15788;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = function(state_14394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1.call(this,state_14394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__;
})()
;})(__15773,switch__14090__auto__,c__14156__auto___15777,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async))
})();
var state__14158__auto__ = (function (){var statearr_14406 = f__14157__auto__();
(statearr_14406[(6)] = c__14156__auto___15777);

return statearr_14406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
});})(__15773,c__14156__auto___15777,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async))
);


break;
case "async":
var c__14156__auto___15789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15773,c__14156__auto___15789,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async){
return (function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = ((function (__15773,c__14156__auto___15789,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async){
return (function (state_14419){
var state_val_14420 = (state_14419[(1)]);
if((state_val_14420 === (1))){
var state_14419__$1 = state_14419;
var statearr_14421_15790 = state_14419__$1;
(statearr_14421_15790[(2)] = null);

(statearr_14421_15790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14420 === (2))){
var state_14419__$1 = state_14419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14419__$1,(4),jobs);
} else {
if((state_val_14420 === (3))){
var inst_14417 = (state_14419[(2)]);
var state_14419__$1 = state_14419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14419__$1,inst_14417);
} else {
if((state_val_14420 === (4))){
var inst_14409 = (state_14419[(2)]);
var inst_14410 = async(inst_14409);
var state_14419__$1 = state_14419;
if(cljs.core.truth_(inst_14410)){
var statearr_14422_15792 = state_14419__$1;
(statearr_14422_15792[(1)] = (5));

} else {
var statearr_14423_15794 = state_14419__$1;
(statearr_14423_15794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14420 === (5))){
var state_14419__$1 = state_14419;
var statearr_14424_15795 = state_14419__$1;
(statearr_14424_15795[(2)] = null);

(statearr_14424_15795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14420 === (6))){
var state_14419__$1 = state_14419;
var statearr_14425_15796 = state_14419__$1;
(statearr_14425_15796[(2)] = null);

(statearr_14425_15796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14420 === (7))){
var inst_14415 = (state_14419[(2)]);
var state_14419__$1 = state_14419;
var statearr_14426_15797 = state_14419__$1;
(statearr_14426_15797[(2)] = inst_14415);

(statearr_14426_15797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15773,c__14156__auto___15789,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async))
;
return ((function (__15773,switch__14090__auto__,c__14156__auto___15789,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_14427 = [null,null,null,null,null,null,null];
(statearr_14427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__);

(statearr_14427[(1)] = (1));

return statearr_14427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1 = (function (state_14419){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14419);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14428){var ex__14094__auto__ = e14428;
var statearr_14429_15798 = state_14419;
(statearr_14429_15798[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14419[(4)]))){
var statearr_14430_15799 = state_14419;
(statearr_14430_15799[(1)] = cljs.core.first((state_14419[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15800 = state_14419;
state_14419 = G__15800;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = function(state_14419){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1.call(this,state_14419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__;
})()
;})(__15773,switch__14090__auto__,c__14156__auto___15789,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async))
})();
var state__14158__auto__ = (function (){var statearr_14431 = f__14157__auto__();
(statearr_14431[(6)] = c__14156__auto___15789);

return statearr_14431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
});})(__15773,c__14156__auto___15789,G__14381_15774,G__14381_15775__$1,n__5636__auto___15772,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14381_15775__$1)].join('')));

}

var G__15801 = (__15773 + (1));
__15773 = G__15801;
continue;
} else {
}
break;
}

var c__14156__auto___15802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_14453){
var state_val_14454 = (state_14453[(1)]);
if((state_val_14454 === (7))){
var inst_14449 = (state_14453[(2)]);
var state_14453__$1 = state_14453;
var statearr_14455_15803 = state_14453__$1;
(statearr_14455_15803[(2)] = inst_14449);

(statearr_14455_15803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (1))){
var state_14453__$1 = state_14453;
var statearr_14456_15804 = state_14453__$1;
(statearr_14456_15804[(2)] = null);

(statearr_14456_15804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (4))){
var inst_14434 = (state_14453[(7)]);
var inst_14434__$1 = (state_14453[(2)]);
var inst_14435 = (inst_14434__$1 == null);
var state_14453__$1 = (function (){var statearr_14457 = state_14453;
(statearr_14457[(7)] = inst_14434__$1);

return statearr_14457;
})();
if(cljs.core.truth_(inst_14435)){
var statearr_14458_15805 = state_14453__$1;
(statearr_14458_15805[(1)] = (5));

} else {
var statearr_14459_15806 = state_14453__$1;
(statearr_14459_15806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (6))){
var inst_14439 = (state_14453[(8)]);
var inst_14434 = (state_14453[(7)]);
var inst_14439__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14440 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14441 = [inst_14434,inst_14439__$1];
var inst_14442 = (new cljs.core.PersistentVector(null,2,(5),inst_14440,inst_14441,null));
var state_14453__$1 = (function (){var statearr_14460 = state_14453;
(statearr_14460[(8)] = inst_14439__$1);

return statearr_14460;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14453__$1,(8),jobs,inst_14442);
} else {
if((state_val_14454 === (3))){
var inst_14451 = (state_14453[(2)]);
var state_14453__$1 = state_14453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14453__$1,inst_14451);
} else {
if((state_val_14454 === (2))){
var state_14453__$1 = state_14453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14453__$1,(4),from);
} else {
if((state_val_14454 === (9))){
var inst_14446 = (state_14453[(2)]);
var state_14453__$1 = (function (){var statearr_14461 = state_14453;
(statearr_14461[(9)] = inst_14446);

return statearr_14461;
})();
var statearr_14462_15808 = state_14453__$1;
(statearr_14462_15808[(2)] = null);

(statearr_14462_15808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (5))){
var inst_14437 = cljs.core.async.close_BANG_(jobs);
var state_14453__$1 = state_14453;
var statearr_14463_15810 = state_14453__$1;
(statearr_14463_15810[(2)] = inst_14437);

(statearr_14463_15810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (8))){
var inst_14439 = (state_14453[(8)]);
var inst_14444 = (state_14453[(2)]);
var state_14453__$1 = (function (){var statearr_14464 = state_14453;
(statearr_14464[(10)] = inst_14444);

return statearr_14464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14453__$1,(9),results,inst_14439);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_14465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__);

(statearr_14465[(1)] = (1));

return statearr_14465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1 = (function (state_14453){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14453);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14466){var ex__14094__auto__ = e14466;
var statearr_14467_15811 = state_14453;
(statearr_14467_15811[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14453[(4)]))){
var statearr_14468_15812 = state_14453;
(statearr_14468_15812[(1)] = cljs.core.first((state_14453[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15813 = state_14453;
state_14453 = G__15813;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = function(state_14453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1.call(this,state_14453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_14469 = f__14157__auto__();
(statearr_14469[(6)] = c__14156__auto___15802);

return statearr_14469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


var c__14156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_14507){
var state_val_14508 = (state_14507[(1)]);
if((state_val_14508 === (7))){
var inst_14503 = (state_14507[(2)]);
var state_14507__$1 = state_14507;
var statearr_14509_15814 = state_14507__$1;
(statearr_14509_15814[(2)] = inst_14503);

(statearr_14509_15814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (20))){
var state_14507__$1 = state_14507;
var statearr_14510_15815 = state_14507__$1;
(statearr_14510_15815[(2)] = null);

(statearr_14510_15815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (1))){
var state_14507__$1 = state_14507;
var statearr_14511_15816 = state_14507__$1;
(statearr_14511_15816[(2)] = null);

(statearr_14511_15816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (4))){
var inst_14472 = (state_14507[(7)]);
var inst_14472__$1 = (state_14507[(2)]);
var inst_14473 = (inst_14472__$1 == null);
var state_14507__$1 = (function (){var statearr_14512 = state_14507;
(statearr_14512[(7)] = inst_14472__$1);

return statearr_14512;
})();
if(cljs.core.truth_(inst_14473)){
var statearr_14513_15817 = state_14507__$1;
(statearr_14513_15817[(1)] = (5));

} else {
var statearr_14514_15818 = state_14507__$1;
(statearr_14514_15818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (15))){
var inst_14485 = (state_14507[(8)]);
var state_14507__$1 = state_14507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14507__$1,(18),to,inst_14485);
} else {
if((state_val_14508 === (21))){
var inst_14498 = (state_14507[(2)]);
var state_14507__$1 = state_14507;
var statearr_14515_15819 = state_14507__$1;
(statearr_14515_15819[(2)] = inst_14498);

(statearr_14515_15819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (13))){
var inst_14500 = (state_14507[(2)]);
var state_14507__$1 = (function (){var statearr_14516 = state_14507;
(statearr_14516[(9)] = inst_14500);

return statearr_14516;
})();
var statearr_14517_15820 = state_14507__$1;
(statearr_14517_15820[(2)] = null);

(statearr_14517_15820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (6))){
var inst_14472 = (state_14507[(7)]);
var state_14507__$1 = state_14507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14507__$1,(11),inst_14472);
} else {
if((state_val_14508 === (17))){
var inst_14493 = (state_14507[(2)]);
var state_14507__$1 = state_14507;
if(cljs.core.truth_(inst_14493)){
var statearr_14518_15821 = state_14507__$1;
(statearr_14518_15821[(1)] = (19));

} else {
var statearr_14519_15822 = state_14507__$1;
(statearr_14519_15822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (3))){
var inst_14505 = (state_14507[(2)]);
var state_14507__$1 = state_14507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14507__$1,inst_14505);
} else {
if((state_val_14508 === (12))){
var inst_14482 = (state_14507[(10)]);
var state_14507__$1 = state_14507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14507__$1,(14),inst_14482);
} else {
if((state_val_14508 === (2))){
var state_14507__$1 = state_14507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14507__$1,(4),results);
} else {
if((state_val_14508 === (19))){
var state_14507__$1 = state_14507;
var statearr_14520_15823 = state_14507__$1;
(statearr_14520_15823[(2)] = null);

(statearr_14520_15823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (11))){
var inst_14482 = (state_14507[(2)]);
var state_14507__$1 = (function (){var statearr_14521 = state_14507;
(statearr_14521[(10)] = inst_14482);

return statearr_14521;
})();
var statearr_14522_15824 = state_14507__$1;
(statearr_14522_15824[(2)] = null);

(statearr_14522_15824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (9))){
var state_14507__$1 = state_14507;
var statearr_14523_15825 = state_14507__$1;
(statearr_14523_15825[(2)] = null);

(statearr_14523_15825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (5))){
var state_14507__$1 = state_14507;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14524_15826 = state_14507__$1;
(statearr_14524_15826[(1)] = (8));

} else {
var statearr_14525_15827 = state_14507__$1;
(statearr_14525_15827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (14))){
var inst_14487 = (state_14507[(11)]);
var inst_14485 = (state_14507[(8)]);
var inst_14485__$1 = (state_14507[(2)]);
var inst_14486 = (inst_14485__$1 == null);
var inst_14487__$1 = cljs.core.not(inst_14486);
var state_14507__$1 = (function (){var statearr_14526 = state_14507;
(statearr_14526[(11)] = inst_14487__$1);

(statearr_14526[(8)] = inst_14485__$1);

return statearr_14526;
})();
if(inst_14487__$1){
var statearr_14527_15828 = state_14507__$1;
(statearr_14527_15828[(1)] = (15));

} else {
var statearr_14528_15829 = state_14507__$1;
(statearr_14528_15829[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (16))){
var inst_14487 = (state_14507[(11)]);
var state_14507__$1 = state_14507;
var statearr_14529_15830 = state_14507__$1;
(statearr_14529_15830[(2)] = inst_14487);

(statearr_14529_15830[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (10))){
var inst_14479 = (state_14507[(2)]);
var state_14507__$1 = state_14507;
var statearr_14530_15831 = state_14507__$1;
(statearr_14530_15831[(2)] = inst_14479);

(statearr_14530_15831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (18))){
var inst_14490 = (state_14507[(2)]);
var state_14507__$1 = state_14507;
var statearr_14531_15833 = state_14507__$1;
(statearr_14531_15833[(2)] = inst_14490);

(statearr_14531_15833[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (8))){
var inst_14476 = cljs.core.async.close_BANG_(to);
var state_14507__$1 = state_14507;
var statearr_14532_15834 = state_14507__$1;
(statearr_14532_15834[(2)] = inst_14476);

(statearr_14532_15834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_14533 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14533[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__);

(statearr_14533[(1)] = (1));

return statearr_14533;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1 = (function (state_14507){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14507);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14534){var ex__14094__auto__ = e14534;
var statearr_14535_15835 = state_14507;
(statearr_14535_15835[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14507[(4)]))){
var statearr_14536_15836 = state_14507;
(statearr_14536_15836[(1)] = cljs.core.first((state_14507[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15837 = state_14507;
state_14507 = G__15837;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = function(state_14507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1.call(this,state_14507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_14537 = f__14157__auto__();
(statearr_14537[(6)] = c__14156__auto__);

return statearr_14537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));

return c__14156__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14539 = arguments.length;
switch (G__14539) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14541 = arguments.length;
switch (G__14541) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14543 = arguments.length;
switch (G__14543) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14156__auto___15841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_14569){
var state_val_14570 = (state_14569[(1)]);
if((state_val_14570 === (7))){
var inst_14565 = (state_14569[(2)]);
var state_14569__$1 = state_14569;
var statearr_14571_15842 = state_14569__$1;
(statearr_14571_15842[(2)] = inst_14565);

(statearr_14571_15842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14570 === (1))){
var state_14569__$1 = state_14569;
var statearr_14572_15843 = state_14569__$1;
(statearr_14572_15843[(2)] = null);

(statearr_14572_15843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14570 === (4))){
var inst_14546 = (state_14569[(7)]);
var inst_14546__$1 = (state_14569[(2)]);
var inst_14547 = (inst_14546__$1 == null);
var state_14569__$1 = (function (){var statearr_14573 = state_14569;
(statearr_14573[(7)] = inst_14546__$1);

return statearr_14573;
})();
if(cljs.core.truth_(inst_14547)){
var statearr_14574_15844 = state_14569__$1;
(statearr_14574_15844[(1)] = (5));

} else {
var statearr_14575_15845 = state_14569__$1;
(statearr_14575_15845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14570 === (13))){
var state_14569__$1 = state_14569;
var statearr_14576_15850 = state_14569__$1;
(statearr_14576_15850[(2)] = null);

(statearr_14576_15850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14570 === (6))){
var inst_14546 = (state_14569[(7)]);
var inst_14552 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14546) : p.call(null,inst_14546));
var state_14569__$1 = state_14569;
if(cljs.core.truth_(inst_14552)){
var statearr_14577_15851 = state_14569__$1;
(statearr_14577_15851[(1)] = (9));

} else {
var statearr_14578_15852 = state_14569__$1;
(statearr_14578_15852[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14570 === (3))){
var inst_14567 = (state_14569[(2)]);
var state_14569__$1 = state_14569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14569__$1,inst_14567);
} else {
if((state_val_14570 === (12))){
var state_14569__$1 = state_14569;
var statearr_14579_15853 = state_14569__$1;
(statearr_14579_15853[(2)] = null);

(statearr_14579_15853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14570 === (2))){
var state_14569__$1 = state_14569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14569__$1,(4),ch);
} else {
if((state_val_14570 === (11))){
var inst_14546 = (state_14569[(7)]);
var inst_14556 = (state_14569[(2)]);
var state_14569__$1 = state_14569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14569__$1,(8),inst_14556,inst_14546);
} else {
if((state_val_14570 === (9))){
var state_14569__$1 = state_14569;
var statearr_14580_15854 = state_14569__$1;
(statearr_14580_15854[(2)] = tc);

(statearr_14580_15854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14570 === (5))){
var inst_14549 = cljs.core.async.close_BANG_(tc);
var inst_14550 = cljs.core.async.close_BANG_(fc);
var state_14569__$1 = (function (){var statearr_14581 = state_14569;
(statearr_14581[(8)] = inst_14549);

return statearr_14581;
})();
var statearr_14582_15855 = state_14569__$1;
(statearr_14582_15855[(2)] = inst_14550);

(statearr_14582_15855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14570 === (14))){
var inst_14563 = (state_14569[(2)]);
var state_14569__$1 = state_14569;
var statearr_14583_15856 = state_14569__$1;
(statearr_14583_15856[(2)] = inst_14563);

(statearr_14583_15856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14570 === (10))){
var state_14569__$1 = state_14569;
var statearr_14584_15857 = state_14569__$1;
(statearr_14584_15857[(2)] = fc);

(statearr_14584_15857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14570 === (8))){
var inst_14558 = (state_14569[(2)]);
var state_14569__$1 = state_14569;
if(cljs.core.truth_(inst_14558)){
var statearr_14585_15858 = state_14569__$1;
(statearr_14585_15858[(1)] = (12));

} else {
var statearr_14586_15859 = state_14569__$1;
(statearr_14586_15859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_14587 = [null,null,null,null,null,null,null,null,null];
(statearr_14587[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_14587[(1)] = (1));

return statearr_14587;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_14569){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14569);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14588){var ex__14094__auto__ = e14588;
var statearr_14589_15860 = state_14569;
(statearr_14589_15860[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14569[(4)]))){
var statearr_14590_15861 = state_14569;
(statearr_14590_15861[(1)] = cljs.core.first((state_14569[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15862 = state_14569;
state_14569 = G__15862;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_14569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_14569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_14591 = f__14157__auto__();
(statearr_14591[(6)] = c__14156__auto___15841);

return statearr_14591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_14613){
var state_val_14614 = (state_14613[(1)]);
if((state_val_14614 === (7))){
var inst_14609 = (state_14613[(2)]);
var state_14613__$1 = state_14613;
var statearr_14615_15863 = state_14613__$1;
(statearr_14615_15863[(2)] = inst_14609);

(statearr_14615_15863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (1))){
var inst_14592 = init;
var inst_14593 = inst_14592;
var state_14613__$1 = (function (){var statearr_14616 = state_14613;
(statearr_14616[(7)] = inst_14593);

return statearr_14616;
})();
var statearr_14617_15864 = state_14613__$1;
(statearr_14617_15864[(2)] = null);

(statearr_14617_15864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (4))){
var inst_14596 = (state_14613[(8)]);
var inst_14596__$1 = (state_14613[(2)]);
var inst_14597 = (inst_14596__$1 == null);
var state_14613__$1 = (function (){var statearr_14618 = state_14613;
(statearr_14618[(8)] = inst_14596__$1);

return statearr_14618;
})();
if(cljs.core.truth_(inst_14597)){
var statearr_14619_15865 = state_14613__$1;
(statearr_14619_15865[(1)] = (5));

} else {
var statearr_14620_15867 = state_14613__$1;
(statearr_14620_15867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (6))){
var inst_14596 = (state_14613[(8)]);
var inst_14600 = (state_14613[(9)]);
var inst_14593 = (state_14613[(7)]);
var inst_14600__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14593,inst_14596) : f.call(null,inst_14593,inst_14596));
var inst_14601 = cljs.core.reduced_QMARK_(inst_14600__$1);
var state_14613__$1 = (function (){var statearr_14621 = state_14613;
(statearr_14621[(9)] = inst_14600__$1);

return statearr_14621;
})();
if(inst_14601){
var statearr_14622_15869 = state_14613__$1;
(statearr_14622_15869[(1)] = (8));

} else {
var statearr_14623_15870 = state_14613__$1;
(statearr_14623_15870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (3))){
var inst_14611 = (state_14613[(2)]);
var state_14613__$1 = state_14613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14613__$1,inst_14611);
} else {
if((state_val_14614 === (2))){
var state_14613__$1 = state_14613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14613__$1,(4),ch);
} else {
if((state_val_14614 === (9))){
var inst_14600 = (state_14613[(9)]);
var inst_14593 = inst_14600;
var state_14613__$1 = (function (){var statearr_14624 = state_14613;
(statearr_14624[(7)] = inst_14593);

return statearr_14624;
})();
var statearr_14625_15871 = state_14613__$1;
(statearr_14625_15871[(2)] = null);

(statearr_14625_15871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (5))){
var inst_14593 = (state_14613[(7)]);
var state_14613__$1 = state_14613;
var statearr_14626_15872 = state_14613__$1;
(statearr_14626_15872[(2)] = inst_14593);

(statearr_14626_15872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (10))){
var inst_14607 = (state_14613[(2)]);
var state_14613__$1 = state_14613;
var statearr_14627_15873 = state_14613__$1;
(statearr_14627_15873[(2)] = inst_14607);

(statearr_14627_15873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (8))){
var inst_14600 = (state_14613[(9)]);
var inst_14603 = cljs.core.deref(inst_14600);
var state_14613__$1 = state_14613;
var statearr_14628_15874 = state_14613__$1;
(statearr_14628_15874[(2)] = inst_14603);

(statearr_14628_15874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14091__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14091__auto____0 = (function (){
var statearr_14629 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14629[(0)] = cljs$core$async$reduce_$_state_machine__14091__auto__);

(statearr_14629[(1)] = (1));

return statearr_14629;
});
var cljs$core$async$reduce_$_state_machine__14091__auto____1 = (function (state_14613){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14613);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14630){var ex__14094__auto__ = e14630;
var statearr_14631_15875 = state_14613;
(statearr_14631_15875[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14613[(4)]))){
var statearr_14632_15876 = state_14613;
(statearr_14632_15876[(1)] = cljs.core.first((state_14613[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15877 = state_14613;
state_14613 = G__15877;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14091__auto__ = function(state_14613){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14091__auto____1.call(this,state_14613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14091__auto____0;
cljs$core$async$reduce_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14091__auto____1;
return cljs$core$async$reduce_$_state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_14633 = f__14157__auto__();
(statearr_14633[(6)] = c__14156__auto__);

return statearr_14633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));

return c__14156__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_14639){
var state_val_14640 = (state_14639[(1)]);
if((state_val_14640 === (1))){
var inst_14634 = cljs.core.async.reduce(f__$1,init,ch);
var state_14639__$1 = state_14639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14639__$1,(2),inst_14634);
} else {
if((state_val_14640 === (2))){
var inst_14636 = (state_14639[(2)]);
var inst_14637 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14636) : f__$1.call(null,inst_14636));
var state_14639__$1 = state_14639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14639__$1,inst_14637);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14091__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14091__auto____0 = (function (){
var statearr_14641 = [null,null,null,null,null,null,null];
(statearr_14641[(0)] = cljs$core$async$transduce_$_state_machine__14091__auto__);

(statearr_14641[(1)] = (1));

return statearr_14641;
});
var cljs$core$async$transduce_$_state_machine__14091__auto____1 = (function (state_14639){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14639);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14642){var ex__14094__auto__ = e14642;
var statearr_14643_15885 = state_14639;
(statearr_14643_15885[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14639[(4)]))){
var statearr_14644_15886 = state_14639;
(statearr_14644_15886[(1)] = cljs.core.first((state_14639[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15887 = state_14639;
state_14639 = G__15887;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14091__auto__ = function(state_14639){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14091__auto____1.call(this,state_14639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14091__auto____0;
cljs$core$async$transduce_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14091__auto____1;
return cljs$core$async$transduce_$_state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_14645 = f__14157__auto__();
(statearr_14645[(6)] = c__14156__auto__);

return statearr_14645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));

return c__14156__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14647 = arguments.length;
switch (G__14647) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_14672){
var state_val_14673 = (state_14672[(1)]);
if((state_val_14673 === (7))){
var inst_14654 = (state_14672[(2)]);
var state_14672__$1 = state_14672;
var statearr_14674_15892 = state_14672__$1;
(statearr_14674_15892[(2)] = inst_14654);

(statearr_14674_15892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (1))){
var inst_14648 = cljs.core.seq(coll);
var inst_14649 = inst_14648;
var state_14672__$1 = (function (){var statearr_14675 = state_14672;
(statearr_14675[(7)] = inst_14649);

return statearr_14675;
})();
var statearr_14676_15896 = state_14672__$1;
(statearr_14676_15896[(2)] = null);

(statearr_14676_15896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (4))){
var inst_14649 = (state_14672[(7)]);
var inst_14652 = cljs.core.first(inst_14649);
var state_14672__$1 = state_14672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14672__$1,(7),ch,inst_14652);
} else {
if((state_val_14673 === (13))){
var inst_14666 = (state_14672[(2)]);
var state_14672__$1 = state_14672;
var statearr_14677_15897 = state_14672__$1;
(statearr_14677_15897[(2)] = inst_14666);

(statearr_14677_15897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (6))){
var inst_14657 = (state_14672[(2)]);
var state_14672__$1 = state_14672;
if(cljs.core.truth_(inst_14657)){
var statearr_14678_15898 = state_14672__$1;
(statearr_14678_15898[(1)] = (8));

} else {
var statearr_14679_15899 = state_14672__$1;
(statearr_14679_15899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (3))){
var inst_14670 = (state_14672[(2)]);
var state_14672__$1 = state_14672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14672__$1,inst_14670);
} else {
if((state_val_14673 === (12))){
var state_14672__$1 = state_14672;
var statearr_14680_15903 = state_14672__$1;
(statearr_14680_15903[(2)] = null);

(statearr_14680_15903[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (2))){
var inst_14649 = (state_14672[(7)]);
var state_14672__$1 = state_14672;
if(cljs.core.truth_(inst_14649)){
var statearr_14681_15904 = state_14672__$1;
(statearr_14681_15904[(1)] = (4));

} else {
var statearr_14682_15905 = state_14672__$1;
(statearr_14682_15905[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (11))){
var inst_14663 = cljs.core.async.close_BANG_(ch);
var state_14672__$1 = state_14672;
var statearr_14683_15906 = state_14672__$1;
(statearr_14683_15906[(2)] = inst_14663);

(statearr_14683_15906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (9))){
var state_14672__$1 = state_14672;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14684_15907 = state_14672__$1;
(statearr_14684_15907[(1)] = (11));

} else {
var statearr_14685_15908 = state_14672__$1;
(statearr_14685_15908[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (5))){
var inst_14649 = (state_14672[(7)]);
var state_14672__$1 = state_14672;
var statearr_14686_15909 = state_14672__$1;
(statearr_14686_15909[(2)] = inst_14649);

(statearr_14686_15909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (10))){
var inst_14668 = (state_14672[(2)]);
var state_14672__$1 = state_14672;
var statearr_14687_15911 = state_14672__$1;
(statearr_14687_15911[(2)] = inst_14668);

(statearr_14687_15911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (8))){
var inst_14649 = (state_14672[(7)]);
var inst_14659 = cljs.core.next(inst_14649);
var inst_14649__$1 = inst_14659;
var state_14672__$1 = (function (){var statearr_14688 = state_14672;
(statearr_14688[(7)] = inst_14649__$1);

return statearr_14688;
})();
var statearr_14689_15918 = state_14672__$1;
(statearr_14689_15918[(2)] = null);

(statearr_14689_15918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_14690 = [null,null,null,null,null,null,null,null];
(statearr_14690[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_14690[(1)] = (1));

return statearr_14690;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_14672){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14672);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14691){var ex__14094__auto__ = e14691;
var statearr_14692_15919 = state_14672;
(statearr_14692_15919[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14672[(4)]))){
var statearr_14693_15920 = state_14672;
(statearr_14693_15920[(1)] = cljs.core.first((state_14672[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15921 = state_14672;
state_14672 = G__15921;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_14672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_14672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_14694 = f__14157__auto__();
(statearr_14694[(6)] = c__14156__auto__);

return statearr_14694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));

return c__14156__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14696 = arguments.length;
switch (G__14696) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15926 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15926(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15930 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15930(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15934 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15934(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15935 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15935(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14697 = (function (ch,cs,meta14698){
this.ch = ch;
this.cs = cs;
this.meta14698 = meta14698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14699,meta14698__$1){
var self__ = this;
var _14699__$1 = this;
return (new cljs.core.async.t_cljs$core$async14697(self__.ch,self__.cs,meta14698__$1));
}));

(cljs.core.async.t_cljs$core$async14697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14699){
var self__ = this;
var _14699__$1 = this;
return self__.meta14698;
}));

(cljs.core.async.t_cljs$core$async14697.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14697.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14697.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14697.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14697.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14698","meta14698",987738095,null)], null);
}));

(cljs.core.async.t_cljs$core$async14697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14697");

(cljs.core.async.t_cljs$core$async14697.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14697.
 */
cljs.core.async.__GT_t_cljs$core$async14697 = (function cljs$core$async$mult_$___GT_t_cljs$core$async14697(ch__$1,cs__$1,meta14698){
return (new cljs.core.async.t_cljs$core$async14697(ch__$1,cs__$1,meta14698));
});

}

return (new cljs.core.async.t_cljs$core$async14697(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14156__auto___15937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_14832){
var state_val_14833 = (state_14832[(1)]);
if((state_val_14833 === (7))){
var inst_14828 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14834_15938 = state_14832__$1;
(statearr_14834_15938[(2)] = inst_14828);

(statearr_14834_15938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (20))){
var inst_14733 = (state_14832[(7)]);
var inst_14745 = cljs.core.first(inst_14733);
var inst_14746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14745,(0),null);
var inst_14747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14745,(1),null);
var state_14832__$1 = (function (){var statearr_14835 = state_14832;
(statearr_14835[(8)] = inst_14746);

return statearr_14835;
})();
if(cljs.core.truth_(inst_14747)){
var statearr_14836_15939 = state_14832__$1;
(statearr_14836_15939[(1)] = (22));

} else {
var statearr_14837_15940 = state_14832__$1;
(statearr_14837_15940[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (27))){
var inst_14777 = (state_14832[(9)]);
var inst_14775 = (state_14832[(10)]);
var inst_14702 = (state_14832[(11)]);
var inst_14782 = (state_14832[(12)]);
var inst_14782__$1 = cljs.core._nth(inst_14775,inst_14777);
var inst_14783 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14782__$1,inst_14702,done);
var state_14832__$1 = (function (){var statearr_14838 = state_14832;
(statearr_14838[(12)] = inst_14782__$1);

return statearr_14838;
})();
if(cljs.core.truth_(inst_14783)){
var statearr_14839_15941 = state_14832__$1;
(statearr_14839_15941[(1)] = (30));

} else {
var statearr_14840_15942 = state_14832__$1;
(statearr_14840_15942[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (1))){
var state_14832__$1 = state_14832;
var statearr_14841_15943 = state_14832__$1;
(statearr_14841_15943[(2)] = null);

(statearr_14841_15943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (24))){
var inst_14733 = (state_14832[(7)]);
var inst_14752 = (state_14832[(2)]);
var inst_14753 = cljs.core.next(inst_14733);
var inst_14711 = inst_14753;
var inst_14712 = null;
var inst_14713 = (0);
var inst_14714 = (0);
var state_14832__$1 = (function (){var statearr_14842 = state_14832;
(statearr_14842[(13)] = inst_14714);

(statearr_14842[(14)] = inst_14713);

(statearr_14842[(15)] = inst_14711);

(statearr_14842[(16)] = inst_14752);

(statearr_14842[(17)] = inst_14712);

return statearr_14842;
})();
var statearr_14843_15944 = state_14832__$1;
(statearr_14843_15944[(2)] = null);

(statearr_14843_15944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (39))){
var state_14832__$1 = state_14832;
var statearr_14847_15945 = state_14832__$1;
(statearr_14847_15945[(2)] = null);

(statearr_14847_15945[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (4))){
var inst_14702 = (state_14832[(11)]);
var inst_14702__$1 = (state_14832[(2)]);
var inst_14703 = (inst_14702__$1 == null);
var state_14832__$1 = (function (){var statearr_14848 = state_14832;
(statearr_14848[(11)] = inst_14702__$1);

return statearr_14848;
})();
if(cljs.core.truth_(inst_14703)){
var statearr_14849_15946 = state_14832__$1;
(statearr_14849_15946[(1)] = (5));

} else {
var statearr_14850_15947 = state_14832__$1;
(statearr_14850_15947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (15))){
var inst_14714 = (state_14832[(13)]);
var inst_14713 = (state_14832[(14)]);
var inst_14711 = (state_14832[(15)]);
var inst_14712 = (state_14832[(17)]);
var inst_14729 = (state_14832[(2)]);
var inst_14730 = (inst_14714 + (1));
var tmp14844 = inst_14713;
var tmp14845 = inst_14711;
var tmp14846 = inst_14712;
var inst_14711__$1 = tmp14845;
var inst_14712__$1 = tmp14846;
var inst_14713__$1 = tmp14844;
var inst_14714__$1 = inst_14730;
var state_14832__$1 = (function (){var statearr_14851 = state_14832;
(statearr_14851[(13)] = inst_14714__$1);

(statearr_14851[(14)] = inst_14713__$1);

(statearr_14851[(15)] = inst_14711__$1);

(statearr_14851[(17)] = inst_14712__$1);

(statearr_14851[(18)] = inst_14729);

return statearr_14851;
})();
var statearr_14852_15948 = state_14832__$1;
(statearr_14852_15948[(2)] = null);

(statearr_14852_15948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (21))){
var inst_14756 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14856_15949 = state_14832__$1;
(statearr_14856_15949[(2)] = inst_14756);

(statearr_14856_15949[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (31))){
var inst_14782 = (state_14832[(12)]);
var inst_14786 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14782);
var state_14832__$1 = state_14832;
var statearr_14857_15950 = state_14832__$1;
(statearr_14857_15950[(2)] = inst_14786);

(statearr_14857_15950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (32))){
var inst_14777 = (state_14832[(9)]);
var inst_14774 = (state_14832[(19)]);
var inst_14776 = (state_14832[(20)]);
var inst_14775 = (state_14832[(10)]);
var inst_14788 = (state_14832[(2)]);
var inst_14789 = (inst_14777 + (1));
var tmp14853 = inst_14774;
var tmp14854 = inst_14776;
var tmp14855 = inst_14775;
var inst_14774__$1 = tmp14853;
var inst_14775__$1 = tmp14855;
var inst_14776__$1 = tmp14854;
var inst_14777__$1 = inst_14789;
var state_14832__$1 = (function (){var statearr_14858 = state_14832;
(statearr_14858[(9)] = inst_14777__$1);

(statearr_14858[(19)] = inst_14774__$1);

(statearr_14858[(20)] = inst_14776__$1);

(statearr_14858[(10)] = inst_14775__$1);

(statearr_14858[(21)] = inst_14788);

return statearr_14858;
})();
var statearr_14859_15951 = state_14832__$1;
(statearr_14859_15951[(2)] = null);

(statearr_14859_15951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (40))){
var inst_14801 = (state_14832[(22)]);
var inst_14805 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14801);
var state_14832__$1 = state_14832;
var statearr_14860_15952 = state_14832__$1;
(statearr_14860_15952[(2)] = inst_14805);

(statearr_14860_15952[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (33))){
var inst_14792 = (state_14832[(23)]);
var inst_14794 = cljs.core.chunked_seq_QMARK_(inst_14792);
var state_14832__$1 = state_14832;
if(inst_14794){
var statearr_14861_15953 = state_14832__$1;
(statearr_14861_15953[(1)] = (36));

} else {
var statearr_14862_15954 = state_14832__$1;
(statearr_14862_15954[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (13))){
var inst_14723 = (state_14832[(24)]);
var inst_14726 = cljs.core.async.close_BANG_(inst_14723);
var state_14832__$1 = state_14832;
var statearr_14863_15955 = state_14832__$1;
(statearr_14863_15955[(2)] = inst_14726);

(statearr_14863_15955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (22))){
var inst_14746 = (state_14832[(8)]);
var inst_14749 = cljs.core.async.close_BANG_(inst_14746);
var state_14832__$1 = state_14832;
var statearr_14864_15956 = state_14832__$1;
(statearr_14864_15956[(2)] = inst_14749);

(statearr_14864_15956[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (36))){
var inst_14792 = (state_14832[(23)]);
var inst_14796 = cljs.core.chunk_first(inst_14792);
var inst_14797 = cljs.core.chunk_rest(inst_14792);
var inst_14798 = cljs.core.count(inst_14796);
var inst_14774 = inst_14797;
var inst_14775 = inst_14796;
var inst_14776 = inst_14798;
var inst_14777 = (0);
var state_14832__$1 = (function (){var statearr_14865 = state_14832;
(statearr_14865[(9)] = inst_14777);

(statearr_14865[(19)] = inst_14774);

(statearr_14865[(20)] = inst_14776);

(statearr_14865[(10)] = inst_14775);

return statearr_14865;
})();
var statearr_14866_15957 = state_14832__$1;
(statearr_14866_15957[(2)] = null);

(statearr_14866_15957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (41))){
var inst_14792 = (state_14832[(23)]);
var inst_14807 = (state_14832[(2)]);
var inst_14808 = cljs.core.next(inst_14792);
var inst_14774 = inst_14808;
var inst_14775 = null;
var inst_14776 = (0);
var inst_14777 = (0);
var state_14832__$1 = (function (){var statearr_14867 = state_14832;
(statearr_14867[(9)] = inst_14777);

(statearr_14867[(19)] = inst_14774);

(statearr_14867[(20)] = inst_14776);

(statearr_14867[(10)] = inst_14775);

(statearr_14867[(25)] = inst_14807);

return statearr_14867;
})();
var statearr_14868_15958 = state_14832__$1;
(statearr_14868_15958[(2)] = null);

(statearr_14868_15958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (43))){
var state_14832__$1 = state_14832;
var statearr_14869_15959 = state_14832__$1;
(statearr_14869_15959[(2)] = null);

(statearr_14869_15959[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (29))){
var inst_14816 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14870_15961 = state_14832__$1;
(statearr_14870_15961[(2)] = inst_14816);

(statearr_14870_15961[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (44))){
var inst_14825 = (state_14832[(2)]);
var state_14832__$1 = (function (){var statearr_14871 = state_14832;
(statearr_14871[(26)] = inst_14825);

return statearr_14871;
})();
var statearr_14872_15963 = state_14832__$1;
(statearr_14872_15963[(2)] = null);

(statearr_14872_15963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (6))){
var inst_14766 = (state_14832[(27)]);
var inst_14765 = cljs.core.deref(cs);
var inst_14766__$1 = cljs.core.keys(inst_14765);
var inst_14767 = cljs.core.count(inst_14766__$1);
var inst_14768 = cljs.core.reset_BANG_(dctr,inst_14767);
var inst_14773 = cljs.core.seq(inst_14766__$1);
var inst_14774 = inst_14773;
var inst_14775 = null;
var inst_14776 = (0);
var inst_14777 = (0);
var state_14832__$1 = (function (){var statearr_14873 = state_14832;
(statearr_14873[(9)] = inst_14777);

(statearr_14873[(19)] = inst_14774);

(statearr_14873[(20)] = inst_14776);

(statearr_14873[(10)] = inst_14775);

(statearr_14873[(27)] = inst_14766__$1);

(statearr_14873[(28)] = inst_14768);

return statearr_14873;
})();
var statearr_14874_15967 = state_14832__$1;
(statearr_14874_15967[(2)] = null);

(statearr_14874_15967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (28))){
var inst_14792 = (state_14832[(23)]);
var inst_14774 = (state_14832[(19)]);
var inst_14792__$1 = cljs.core.seq(inst_14774);
var state_14832__$1 = (function (){var statearr_14875 = state_14832;
(statearr_14875[(23)] = inst_14792__$1);

return statearr_14875;
})();
if(inst_14792__$1){
var statearr_14876_15969 = state_14832__$1;
(statearr_14876_15969[(1)] = (33));

} else {
var statearr_14877_15970 = state_14832__$1;
(statearr_14877_15970[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (25))){
var inst_14777 = (state_14832[(9)]);
var inst_14776 = (state_14832[(20)]);
var inst_14779 = (inst_14777 < inst_14776);
var inst_14780 = inst_14779;
var state_14832__$1 = state_14832;
if(cljs.core.truth_(inst_14780)){
var statearr_14878_15971 = state_14832__$1;
(statearr_14878_15971[(1)] = (27));

} else {
var statearr_14879_15972 = state_14832__$1;
(statearr_14879_15972[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (34))){
var state_14832__$1 = state_14832;
var statearr_14880_15973 = state_14832__$1;
(statearr_14880_15973[(2)] = null);

(statearr_14880_15973[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (17))){
var state_14832__$1 = state_14832;
var statearr_14881_15974 = state_14832__$1;
(statearr_14881_15974[(2)] = null);

(statearr_14881_15974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (3))){
var inst_14830 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14832__$1,inst_14830);
} else {
if((state_val_14833 === (12))){
var inst_14761 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14882_15975 = state_14832__$1;
(statearr_14882_15975[(2)] = inst_14761);

(statearr_14882_15975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (2))){
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14832__$1,(4),ch);
} else {
if((state_val_14833 === (23))){
var state_14832__$1 = state_14832;
var statearr_14883_15977 = state_14832__$1;
(statearr_14883_15977[(2)] = null);

(statearr_14883_15977[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (35))){
var inst_14814 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14884_15979 = state_14832__$1;
(statearr_14884_15979[(2)] = inst_14814);

(statearr_14884_15979[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (19))){
var inst_14733 = (state_14832[(7)]);
var inst_14737 = cljs.core.chunk_first(inst_14733);
var inst_14738 = cljs.core.chunk_rest(inst_14733);
var inst_14739 = cljs.core.count(inst_14737);
var inst_14711 = inst_14738;
var inst_14712 = inst_14737;
var inst_14713 = inst_14739;
var inst_14714 = (0);
var state_14832__$1 = (function (){var statearr_14885 = state_14832;
(statearr_14885[(13)] = inst_14714);

(statearr_14885[(14)] = inst_14713);

(statearr_14885[(15)] = inst_14711);

(statearr_14885[(17)] = inst_14712);

return statearr_14885;
})();
var statearr_14886_15980 = state_14832__$1;
(statearr_14886_15980[(2)] = null);

(statearr_14886_15980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (11))){
var inst_14733 = (state_14832[(7)]);
var inst_14711 = (state_14832[(15)]);
var inst_14733__$1 = cljs.core.seq(inst_14711);
var state_14832__$1 = (function (){var statearr_14887 = state_14832;
(statearr_14887[(7)] = inst_14733__$1);

return statearr_14887;
})();
if(inst_14733__$1){
var statearr_14888_15981 = state_14832__$1;
(statearr_14888_15981[(1)] = (16));

} else {
var statearr_14889_15982 = state_14832__$1;
(statearr_14889_15982[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (9))){
var inst_14763 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14890_15983 = state_14832__$1;
(statearr_14890_15983[(2)] = inst_14763);

(statearr_14890_15983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (5))){
var inst_14709 = cljs.core.deref(cs);
var inst_14710 = cljs.core.seq(inst_14709);
var inst_14711 = inst_14710;
var inst_14712 = null;
var inst_14713 = (0);
var inst_14714 = (0);
var state_14832__$1 = (function (){var statearr_14891 = state_14832;
(statearr_14891[(13)] = inst_14714);

(statearr_14891[(14)] = inst_14713);

(statearr_14891[(15)] = inst_14711);

(statearr_14891[(17)] = inst_14712);

return statearr_14891;
})();
var statearr_14892_15984 = state_14832__$1;
(statearr_14892_15984[(2)] = null);

(statearr_14892_15984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (14))){
var state_14832__$1 = state_14832;
var statearr_14893_15985 = state_14832__$1;
(statearr_14893_15985[(2)] = null);

(statearr_14893_15985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (45))){
var inst_14822 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14894_16007 = state_14832__$1;
(statearr_14894_16007[(2)] = inst_14822);

(statearr_14894_16007[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (26))){
var inst_14766 = (state_14832[(27)]);
var inst_14818 = (state_14832[(2)]);
var inst_14819 = cljs.core.seq(inst_14766);
var state_14832__$1 = (function (){var statearr_14895 = state_14832;
(statearr_14895[(29)] = inst_14818);

return statearr_14895;
})();
if(inst_14819){
var statearr_14896_16008 = state_14832__$1;
(statearr_14896_16008[(1)] = (42));

} else {
var statearr_14897_16009 = state_14832__$1;
(statearr_14897_16009[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (16))){
var inst_14733 = (state_14832[(7)]);
var inst_14735 = cljs.core.chunked_seq_QMARK_(inst_14733);
var state_14832__$1 = state_14832;
if(inst_14735){
var statearr_14898_16010 = state_14832__$1;
(statearr_14898_16010[(1)] = (19));

} else {
var statearr_14899_16011 = state_14832__$1;
(statearr_14899_16011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (38))){
var inst_14811 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14900_16024 = state_14832__$1;
(statearr_14900_16024[(2)] = inst_14811);

(statearr_14900_16024[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (30))){
var state_14832__$1 = state_14832;
var statearr_14901_16025 = state_14832__$1;
(statearr_14901_16025[(2)] = null);

(statearr_14901_16025[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (10))){
var inst_14714 = (state_14832[(13)]);
var inst_14712 = (state_14832[(17)]);
var inst_14722 = cljs.core._nth(inst_14712,inst_14714);
var inst_14723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14722,(0),null);
var inst_14724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14722,(1),null);
var state_14832__$1 = (function (){var statearr_14902 = state_14832;
(statearr_14902[(24)] = inst_14723);

return statearr_14902;
})();
if(cljs.core.truth_(inst_14724)){
var statearr_14903_16026 = state_14832__$1;
(statearr_14903_16026[(1)] = (13));

} else {
var statearr_14904_16027 = state_14832__$1;
(statearr_14904_16027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (18))){
var inst_14759 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14905_16028 = state_14832__$1;
(statearr_14905_16028[(2)] = inst_14759);

(statearr_14905_16028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (42))){
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14832__$1,(45),dchan);
} else {
if((state_val_14833 === (37))){
var inst_14792 = (state_14832[(23)]);
var inst_14801 = (state_14832[(22)]);
var inst_14702 = (state_14832[(11)]);
var inst_14801__$1 = cljs.core.first(inst_14792);
var inst_14802 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14801__$1,inst_14702,done);
var state_14832__$1 = (function (){var statearr_14906 = state_14832;
(statearr_14906[(22)] = inst_14801__$1);

return statearr_14906;
})();
if(cljs.core.truth_(inst_14802)){
var statearr_14907_16029 = state_14832__$1;
(statearr_14907_16029[(1)] = (39));

} else {
var statearr_14908_16030 = state_14832__$1;
(statearr_14908_16030[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (8))){
var inst_14714 = (state_14832[(13)]);
var inst_14713 = (state_14832[(14)]);
var inst_14716 = (inst_14714 < inst_14713);
var inst_14717 = inst_14716;
var state_14832__$1 = state_14832;
if(cljs.core.truth_(inst_14717)){
var statearr_14909_16031 = state_14832__$1;
(statearr_14909_16031[(1)] = (10));

} else {
var statearr_14910_16038 = state_14832__$1;
(statearr_14910_16038[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14091__auto__ = null;
var cljs$core$async$mult_$_state_machine__14091__auto____0 = (function (){
var statearr_14911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14911[(0)] = cljs$core$async$mult_$_state_machine__14091__auto__);

(statearr_14911[(1)] = (1));

return statearr_14911;
});
var cljs$core$async$mult_$_state_machine__14091__auto____1 = (function (state_14832){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14832);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14912){var ex__14094__auto__ = e14912;
var statearr_14913_16039 = state_14832;
(statearr_14913_16039[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14832[(4)]))){
var statearr_14914_16040 = state_14832;
(statearr_14914_16040[(1)] = cljs.core.first((state_14832[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16041 = state_14832;
state_14832 = G__16041;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14091__auto__ = function(state_14832){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14091__auto____1.call(this,state_14832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14091__auto____0;
cljs$core$async$mult_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14091__auto____1;
return cljs$core$async$mult_$_state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_14915 = f__14157__auto__();
(statearr_14915[(6)] = c__14156__auto___15937);

return statearr_14915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14917 = arguments.length;
switch (G__14917) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16043 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16043(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16044 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16044(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16045 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16045(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16046 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16046(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16048 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16048(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16053 = arguments.length;
var i__5770__auto___16054 = (0);
while(true){
if((i__5770__auto___16054 < len__5769__auto___16053)){
args__5775__auto__.push((arguments[i__5770__auto___16054]));

var G__16055 = (i__5770__auto___16054 + (1));
i__5770__auto___16054 = G__16055;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14922){
var map__14923 = p__14922;
var map__14923__$1 = cljs.core.__destructure_map(map__14923);
var opts = map__14923__$1;
var statearr_14924_16056 = state;
(statearr_14924_16056[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14925_16057 = state;
(statearr_14925_16057[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14926_16058 = state;
(statearr_14926_16058[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14918){
var G__14919 = cljs.core.first(seq14918);
var seq14918__$1 = cljs.core.next(seq14918);
var G__14920 = cljs.core.first(seq14918__$1);
var seq14918__$2 = cljs.core.next(seq14918__$1);
var G__14921 = cljs.core.first(seq14918__$2);
var seq14918__$3 = cljs.core.next(seq14918__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14919,G__14920,G__14921,seq14918__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14927 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14928){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14928 = meta14928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14929,meta14928__$1){
var self__ = this;
var _14929__$1 = this;
return (new cljs.core.async.t_cljs$core$async14927(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14928__$1));
}));

(cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14929){
var self__ = this;
var _14929__$1 = this;
return self__.meta14928;
}));

(cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14928","meta14928",1071495682,null)], null);
}));

(cljs.core.async.t_cljs$core$async14927.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14927");

(cljs.core.async.t_cljs$core$async14927.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14927");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14927.
 */
cljs.core.async.__GT_t_cljs$core$async14927 = (function cljs$core$async$mix_$___GT_t_cljs$core$async14927(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14928){
return (new cljs.core.async.t_cljs$core$async14927(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14928));
});

}

return (new cljs.core.async.t_cljs$core$async14927(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14156__auto___16063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_14997){
var state_val_14998 = (state_14997[(1)]);
if((state_val_14998 === (7))){
var inst_14957 = (state_14997[(2)]);
var state_14997__$1 = state_14997;
if(cljs.core.truth_(inst_14957)){
var statearr_14999_16064 = state_14997__$1;
(statearr_14999_16064[(1)] = (8));

} else {
var statearr_15000_16065 = state_14997__$1;
(statearr_15000_16065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (20))){
var inst_14950 = (state_14997[(7)]);
var state_14997__$1 = state_14997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14997__$1,(23),out,inst_14950);
} else {
if((state_val_14998 === (1))){
var inst_14933 = calc_state();
var inst_14934 = cljs.core.__destructure_map(inst_14933);
var inst_14935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14934,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14934,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14934,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14938 = inst_14933;
var state_14997__$1 = (function (){var statearr_15001 = state_14997;
(statearr_15001[(8)] = inst_14937);

(statearr_15001[(9)] = inst_14935);

(statearr_15001[(10)] = inst_14936);

(statearr_15001[(11)] = inst_14938);

return statearr_15001;
})();
var statearr_15002_16066 = state_14997__$1;
(statearr_15002_16066[(2)] = null);

(statearr_15002_16066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (24))){
var inst_14941 = (state_14997[(12)]);
var inst_14938 = inst_14941;
var state_14997__$1 = (function (){var statearr_15003 = state_14997;
(statearr_15003[(11)] = inst_14938);

return statearr_15003;
})();
var statearr_15004_16067 = state_14997__$1;
(statearr_15004_16067[(2)] = null);

(statearr_15004_16067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (4))){
var inst_14950 = (state_14997[(7)]);
var inst_14952 = (state_14997[(13)]);
var inst_14949 = (state_14997[(2)]);
var inst_14950__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14949,(0),null);
var inst_14951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14949,(1),null);
var inst_14952__$1 = (inst_14950__$1 == null);
var state_14997__$1 = (function (){var statearr_15005 = state_14997;
(statearr_15005[(7)] = inst_14950__$1);

(statearr_15005[(14)] = inst_14951);

(statearr_15005[(13)] = inst_14952__$1);

return statearr_15005;
})();
if(cljs.core.truth_(inst_14952__$1)){
var statearr_15006_16068 = state_14997__$1;
(statearr_15006_16068[(1)] = (5));

} else {
var statearr_15007_16069 = state_14997__$1;
(statearr_15007_16069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (15))){
var inst_14942 = (state_14997[(15)]);
var inst_14971 = (state_14997[(16)]);
var inst_14971__$1 = cljs.core.empty_QMARK_(inst_14942);
var state_14997__$1 = (function (){var statearr_15008 = state_14997;
(statearr_15008[(16)] = inst_14971__$1);

return statearr_15008;
})();
if(inst_14971__$1){
var statearr_15009_16070 = state_14997__$1;
(statearr_15009_16070[(1)] = (17));

} else {
var statearr_15010_16071 = state_14997__$1;
(statearr_15010_16071[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (21))){
var inst_14941 = (state_14997[(12)]);
var inst_14938 = inst_14941;
var state_14997__$1 = (function (){var statearr_15011 = state_14997;
(statearr_15011[(11)] = inst_14938);

return statearr_15011;
})();
var statearr_15012_16072 = state_14997__$1;
(statearr_15012_16072[(2)] = null);

(statearr_15012_16072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (13))){
var inst_14964 = (state_14997[(2)]);
var inst_14965 = calc_state();
var inst_14938 = inst_14965;
var state_14997__$1 = (function (){var statearr_15013 = state_14997;
(statearr_15013[(17)] = inst_14964);

(statearr_15013[(11)] = inst_14938);

return statearr_15013;
})();
var statearr_15014_16074 = state_14997__$1;
(statearr_15014_16074[(2)] = null);

(statearr_15014_16074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (22))){
var inst_14991 = (state_14997[(2)]);
var state_14997__$1 = state_14997;
var statearr_15015_16076 = state_14997__$1;
(statearr_15015_16076[(2)] = inst_14991);

(statearr_15015_16076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (6))){
var inst_14951 = (state_14997[(14)]);
var inst_14955 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14951,change);
var state_14997__$1 = state_14997;
var statearr_15016_16077 = state_14997__$1;
(statearr_15016_16077[(2)] = inst_14955);

(statearr_15016_16077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (25))){
var state_14997__$1 = state_14997;
var statearr_15017_16078 = state_14997__$1;
(statearr_15017_16078[(2)] = null);

(statearr_15017_16078[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (17))){
var inst_14943 = (state_14997[(18)]);
var inst_14951 = (state_14997[(14)]);
var inst_14973 = (inst_14943.cljs$core$IFn$_invoke$arity$1 ? inst_14943.cljs$core$IFn$_invoke$arity$1(inst_14951) : inst_14943.call(null,inst_14951));
var inst_14974 = cljs.core.not(inst_14973);
var state_14997__$1 = state_14997;
var statearr_15018_16079 = state_14997__$1;
(statearr_15018_16079[(2)] = inst_14974);

(statearr_15018_16079[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (3))){
var inst_14995 = (state_14997[(2)]);
var state_14997__$1 = state_14997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14997__$1,inst_14995);
} else {
if((state_val_14998 === (12))){
var state_14997__$1 = state_14997;
var statearr_15019_16080 = state_14997__$1;
(statearr_15019_16080[(2)] = null);

(statearr_15019_16080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (2))){
var inst_14938 = (state_14997[(11)]);
var inst_14941 = (state_14997[(12)]);
var inst_14941__$1 = cljs.core.__destructure_map(inst_14938);
var inst_14942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14941__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14941__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14941__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14997__$1 = (function (){var statearr_15020 = state_14997;
(statearr_15020[(18)] = inst_14943);

(statearr_15020[(15)] = inst_14942);

(statearr_15020[(12)] = inst_14941__$1);

return statearr_15020;
})();
return cljs.core.async.ioc_alts_BANG_(state_14997__$1,(4),inst_14944);
} else {
if((state_val_14998 === (23))){
var inst_14982 = (state_14997[(2)]);
var state_14997__$1 = state_14997;
if(cljs.core.truth_(inst_14982)){
var statearr_15021_16081 = state_14997__$1;
(statearr_15021_16081[(1)] = (24));

} else {
var statearr_15022_16082 = state_14997__$1;
(statearr_15022_16082[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (19))){
var inst_14977 = (state_14997[(2)]);
var state_14997__$1 = state_14997;
var statearr_15023_16083 = state_14997__$1;
(statearr_15023_16083[(2)] = inst_14977);

(statearr_15023_16083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (11))){
var inst_14951 = (state_14997[(14)]);
var inst_14961 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14951);
var state_14997__$1 = state_14997;
var statearr_15024_16084 = state_14997__$1;
(statearr_15024_16084[(2)] = inst_14961);

(statearr_15024_16084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (9))){
var inst_14968 = (state_14997[(19)]);
var inst_14951 = (state_14997[(14)]);
var inst_14942 = (state_14997[(15)]);
var inst_14968__$1 = (inst_14942.cljs$core$IFn$_invoke$arity$1 ? inst_14942.cljs$core$IFn$_invoke$arity$1(inst_14951) : inst_14942.call(null,inst_14951));
var state_14997__$1 = (function (){var statearr_15025 = state_14997;
(statearr_15025[(19)] = inst_14968__$1);

return statearr_15025;
})();
if(cljs.core.truth_(inst_14968__$1)){
var statearr_15026_16085 = state_14997__$1;
(statearr_15026_16085[(1)] = (14));

} else {
var statearr_15027_16086 = state_14997__$1;
(statearr_15027_16086[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (5))){
var inst_14952 = (state_14997[(13)]);
var state_14997__$1 = state_14997;
var statearr_15028_16087 = state_14997__$1;
(statearr_15028_16087[(2)] = inst_14952);

(statearr_15028_16087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (14))){
var inst_14968 = (state_14997[(19)]);
var state_14997__$1 = state_14997;
var statearr_15029_16088 = state_14997__$1;
(statearr_15029_16088[(2)] = inst_14968);

(statearr_15029_16088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (26))){
var inst_14987 = (state_14997[(2)]);
var state_14997__$1 = state_14997;
var statearr_15030_16089 = state_14997__$1;
(statearr_15030_16089[(2)] = inst_14987);

(statearr_15030_16089[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (16))){
var inst_14979 = (state_14997[(2)]);
var state_14997__$1 = state_14997;
if(cljs.core.truth_(inst_14979)){
var statearr_15031_16090 = state_14997__$1;
(statearr_15031_16090[(1)] = (20));

} else {
var statearr_15032_16091 = state_14997__$1;
(statearr_15032_16091[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (10))){
var inst_14993 = (state_14997[(2)]);
var state_14997__$1 = state_14997;
var statearr_15033_16092 = state_14997__$1;
(statearr_15033_16092[(2)] = inst_14993);

(statearr_15033_16092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (18))){
var inst_14971 = (state_14997[(16)]);
var state_14997__$1 = state_14997;
var statearr_15034_16093 = state_14997__$1;
(statearr_15034_16093[(2)] = inst_14971);

(statearr_15034_16093[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14998 === (8))){
var inst_14950 = (state_14997[(7)]);
var inst_14959 = (inst_14950 == null);
var state_14997__$1 = state_14997;
if(cljs.core.truth_(inst_14959)){
var statearr_15035_16094 = state_14997__$1;
(statearr_15035_16094[(1)] = (11));

} else {
var statearr_15036_16095 = state_14997__$1;
(statearr_15036_16095[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14091__auto__ = null;
var cljs$core$async$mix_$_state_machine__14091__auto____0 = (function (){
var statearr_15037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15037[(0)] = cljs$core$async$mix_$_state_machine__14091__auto__);

(statearr_15037[(1)] = (1));

return statearr_15037;
});
var cljs$core$async$mix_$_state_machine__14091__auto____1 = (function (state_14997){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14997);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15038){var ex__14094__auto__ = e15038;
var statearr_15039_16097 = state_14997;
(statearr_15039_16097[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14997[(4)]))){
var statearr_15040_16098 = state_14997;
(statearr_15040_16098[(1)] = cljs.core.first((state_14997[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16099 = state_14997;
state_14997 = G__16099;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14091__auto__ = function(state_14997){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14091__auto____1.call(this,state_14997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14091__auto____0;
cljs$core$async$mix_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14091__auto____1;
return cljs$core$async$mix_$_state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_15041 = f__14157__auto__();
(statearr_15041[(6)] = c__14156__auto___16063);

return statearr_15041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16104 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16104(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16105 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16105(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16106 = (function() {
var G__16107 = null;
var G__16107__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16107__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16107 = function(p,v){
switch(arguments.length){
case 1:
return G__16107__1.call(this,p);
case 2:
return G__16107__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16107.cljs$core$IFn$_invoke$arity$1 = G__16107__1;
G__16107.cljs$core$IFn$_invoke$arity$2 = G__16107__2;
return G__16107;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15043 = arguments.length;
switch (G__15043) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16106(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16106(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15046 = arguments.length;
switch (G__15046) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15044_SHARP_){
if(cljs.core.truth_((p1__15044_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15044_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15044_SHARP_.call(null,topic)))){
return p1__15044_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15044_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15047 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15048){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15048 = meta15048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15049,meta15048__$1){
var self__ = this;
var _15049__$1 = this;
return (new cljs.core.async.t_cljs$core$async15047(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15048__$1));
}));

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15049){
var self__ = this;
var _15049__$1 = this;
return self__.meta15048;
}));

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15048","meta15048",-609530354,null)], null);
}));

(cljs.core.async.t_cljs$core$async15047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15047");

(cljs.core.async.t_cljs$core$async15047.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15047.
 */
cljs.core.async.__GT_t_cljs$core$async15047 = (function cljs$core$async$__GT_t_cljs$core$async15047(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15048){
return (new cljs.core.async.t_cljs$core$async15047(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15048));
});

}

return (new cljs.core.async.t_cljs$core$async15047(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14156__auto___16127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_15121){
var state_val_15122 = (state_15121[(1)]);
if((state_val_15122 === (7))){
var inst_15117 = (state_15121[(2)]);
var state_15121__$1 = state_15121;
var statearr_15123_16131 = state_15121__$1;
(statearr_15123_16131[(2)] = inst_15117);

(statearr_15123_16131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (20))){
var state_15121__$1 = state_15121;
var statearr_15124_16132 = state_15121__$1;
(statearr_15124_16132[(2)] = null);

(statearr_15124_16132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (1))){
var state_15121__$1 = state_15121;
var statearr_15125_16133 = state_15121__$1;
(statearr_15125_16133[(2)] = null);

(statearr_15125_16133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (24))){
var inst_15100 = (state_15121[(7)]);
var inst_15109 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15100);
var state_15121__$1 = state_15121;
var statearr_15126_16134 = state_15121__$1;
(statearr_15126_16134[(2)] = inst_15109);

(statearr_15126_16134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (4))){
var inst_15052 = (state_15121[(8)]);
var inst_15052__$1 = (state_15121[(2)]);
var inst_15053 = (inst_15052__$1 == null);
var state_15121__$1 = (function (){var statearr_15127 = state_15121;
(statearr_15127[(8)] = inst_15052__$1);

return statearr_15127;
})();
if(cljs.core.truth_(inst_15053)){
var statearr_15128_16135 = state_15121__$1;
(statearr_15128_16135[(1)] = (5));

} else {
var statearr_15129_16136 = state_15121__$1;
(statearr_15129_16136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (15))){
var inst_15094 = (state_15121[(2)]);
var state_15121__$1 = state_15121;
var statearr_15130_16137 = state_15121__$1;
(statearr_15130_16137[(2)] = inst_15094);

(statearr_15130_16137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (21))){
var inst_15114 = (state_15121[(2)]);
var state_15121__$1 = (function (){var statearr_15131 = state_15121;
(statearr_15131[(9)] = inst_15114);

return statearr_15131;
})();
var statearr_15132_16138 = state_15121__$1;
(statearr_15132_16138[(2)] = null);

(statearr_15132_16138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (13))){
var inst_15076 = (state_15121[(10)]);
var inst_15078 = cljs.core.chunked_seq_QMARK_(inst_15076);
var state_15121__$1 = state_15121;
if(inst_15078){
var statearr_15133_16139 = state_15121__$1;
(statearr_15133_16139[(1)] = (16));

} else {
var statearr_15134_16140 = state_15121__$1;
(statearr_15134_16140[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (22))){
var inst_15106 = (state_15121[(2)]);
var state_15121__$1 = state_15121;
if(cljs.core.truth_(inst_15106)){
var statearr_15135_16141 = state_15121__$1;
(statearr_15135_16141[(1)] = (23));

} else {
var statearr_15136_16142 = state_15121__$1;
(statearr_15136_16142[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (6))){
var inst_15102 = (state_15121[(11)]);
var inst_15052 = (state_15121[(8)]);
var inst_15100 = (state_15121[(7)]);
var inst_15100__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15052) : topic_fn.call(null,inst_15052));
var inst_15101 = cljs.core.deref(mults);
var inst_15102__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15101,inst_15100__$1);
var state_15121__$1 = (function (){var statearr_15137 = state_15121;
(statearr_15137[(11)] = inst_15102__$1);

(statearr_15137[(7)] = inst_15100__$1);

return statearr_15137;
})();
if(cljs.core.truth_(inst_15102__$1)){
var statearr_15138_16143 = state_15121__$1;
(statearr_15138_16143[(1)] = (19));

} else {
var statearr_15139_16145 = state_15121__$1;
(statearr_15139_16145[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (25))){
var inst_15111 = (state_15121[(2)]);
var state_15121__$1 = state_15121;
var statearr_15140_16146 = state_15121__$1;
(statearr_15140_16146[(2)] = inst_15111);

(statearr_15140_16146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (17))){
var inst_15076 = (state_15121[(10)]);
var inst_15085 = cljs.core.first(inst_15076);
var inst_15086 = cljs.core.async.muxch_STAR_(inst_15085);
var inst_15087 = cljs.core.async.close_BANG_(inst_15086);
var inst_15088 = cljs.core.next(inst_15076);
var inst_15062 = inst_15088;
var inst_15063 = null;
var inst_15064 = (0);
var inst_15065 = (0);
var state_15121__$1 = (function (){var statearr_15141 = state_15121;
(statearr_15141[(12)] = inst_15087);

(statearr_15141[(13)] = inst_15064);

(statearr_15141[(14)] = inst_15062);

(statearr_15141[(15)] = inst_15063);

(statearr_15141[(16)] = inst_15065);

return statearr_15141;
})();
var statearr_15142_16148 = state_15121__$1;
(statearr_15142_16148[(2)] = null);

(statearr_15142_16148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (3))){
var inst_15119 = (state_15121[(2)]);
var state_15121__$1 = state_15121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15121__$1,inst_15119);
} else {
if((state_val_15122 === (12))){
var inst_15096 = (state_15121[(2)]);
var state_15121__$1 = state_15121;
var statearr_15143_16149 = state_15121__$1;
(statearr_15143_16149[(2)] = inst_15096);

(statearr_15143_16149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (2))){
var state_15121__$1 = state_15121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15121__$1,(4),ch);
} else {
if((state_val_15122 === (23))){
var state_15121__$1 = state_15121;
var statearr_15144_16150 = state_15121__$1;
(statearr_15144_16150[(2)] = null);

(statearr_15144_16150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (19))){
var inst_15102 = (state_15121[(11)]);
var inst_15052 = (state_15121[(8)]);
var inst_15104 = cljs.core.async.muxch_STAR_(inst_15102);
var state_15121__$1 = state_15121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15121__$1,(22),inst_15104,inst_15052);
} else {
if((state_val_15122 === (11))){
var inst_15062 = (state_15121[(14)]);
var inst_15076 = (state_15121[(10)]);
var inst_15076__$1 = cljs.core.seq(inst_15062);
var state_15121__$1 = (function (){var statearr_15145 = state_15121;
(statearr_15145[(10)] = inst_15076__$1);

return statearr_15145;
})();
if(inst_15076__$1){
var statearr_15146_16151 = state_15121__$1;
(statearr_15146_16151[(1)] = (13));

} else {
var statearr_15147_16152 = state_15121__$1;
(statearr_15147_16152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (9))){
var inst_15098 = (state_15121[(2)]);
var state_15121__$1 = state_15121;
var statearr_15148_16153 = state_15121__$1;
(statearr_15148_16153[(2)] = inst_15098);

(statearr_15148_16153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (5))){
var inst_15059 = cljs.core.deref(mults);
var inst_15060 = cljs.core.vals(inst_15059);
var inst_15061 = cljs.core.seq(inst_15060);
var inst_15062 = inst_15061;
var inst_15063 = null;
var inst_15064 = (0);
var inst_15065 = (0);
var state_15121__$1 = (function (){var statearr_15149 = state_15121;
(statearr_15149[(13)] = inst_15064);

(statearr_15149[(14)] = inst_15062);

(statearr_15149[(15)] = inst_15063);

(statearr_15149[(16)] = inst_15065);

return statearr_15149;
})();
var statearr_15150_16154 = state_15121__$1;
(statearr_15150_16154[(2)] = null);

(statearr_15150_16154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (14))){
var state_15121__$1 = state_15121;
var statearr_15154_16155 = state_15121__$1;
(statearr_15154_16155[(2)] = null);

(statearr_15154_16155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (16))){
var inst_15076 = (state_15121[(10)]);
var inst_15080 = cljs.core.chunk_first(inst_15076);
var inst_15081 = cljs.core.chunk_rest(inst_15076);
var inst_15082 = cljs.core.count(inst_15080);
var inst_15062 = inst_15081;
var inst_15063 = inst_15080;
var inst_15064 = inst_15082;
var inst_15065 = (0);
var state_15121__$1 = (function (){var statearr_15155 = state_15121;
(statearr_15155[(13)] = inst_15064);

(statearr_15155[(14)] = inst_15062);

(statearr_15155[(15)] = inst_15063);

(statearr_15155[(16)] = inst_15065);

return statearr_15155;
})();
var statearr_15156_16156 = state_15121__$1;
(statearr_15156_16156[(2)] = null);

(statearr_15156_16156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (10))){
var inst_15064 = (state_15121[(13)]);
var inst_15062 = (state_15121[(14)]);
var inst_15063 = (state_15121[(15)]);
var inst_15065 = (state_15121[(16)]);
var inst_15070 = cljs.core._nth(inst_15063,inst_15065);
var inst_15071 = cljs.core.async.muxch_STAR_(inst_15070);
var inst_15072 = cljs.core.async.close_BANG_(inst_15071);
var inst_15073 = (inst_15065 + (1));
var tmp15151 = inst_15064;
var tmp15152 = inst_15062;
var tmp15153 = inst_15063;
var inst_15062__$1 = tmp15152;
var inst_15063__$1 = tmp15153;
var inst_15064__$1 = tmp15151;
var inst_15065__$1 = inst_15073;
var state_15121__$1 = (function (){var statearr_15157 = state_15121;
(statearr_15157[(17)] = inst_15072);

(statearr_15157[(13)] = inst_15064__$1);

(statearr_15157[(14)] = inst_15062__$1);

(statearr_15157[(15)] = inst_15063__$1);

(statearr_15157[(16)] = inst_15065__$1);

return statearr_15157;
})();
var statearr_15158_16157 = state_15121__$1;
(statearr_15158_16157[(2)] = null);

(statearr_15158_16157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (18))){
var inst_15091 = (state_15121[(2)]);
var state_15121__$1 = state_15121;
var statearr_15159_16158 = state_15121__$1;
(statearr_15159_16158[(2)] = inst_15091);

(statearr_15159_16158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15122 === (8))){
var inst_15064 = (state_15121[(13)]);
var inst_15065 = (state_15121[(16)]);
var inst_15067 = (inst_15065 < inst_15064);
var inst_15068 = inst_15067;
var state_15121__$1 = state_15121;
if(cljs.core.truth_(inst_15068)){
var statearr_15160_16159 = state_15121__$1;
(statearr_15160_16159[(1)] = (10));

} else {
var statearr_15161_16160 = state_15121__$1;
(statearr_15161_16160[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_15162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15162[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_15162[(1)] = (1));

return statearr_15162;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_15121){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15121);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15163){var ex__14094__auto__ = e15163;
var statearr_15164_16161 = state_15121;
(statearr_15164_16161[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15121[(4)]))){
var statearr_15165_16162 = state_15121;
(statearr_15165_16162[(1)] = cljs.core.first((state_15121[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16167 = state_15121;
state_15121 = G__16167;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_15121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_15121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_15166 = f__14157__auto__();
(statearr_15166[(6)] = c__14156__auto___16127);

return statearr_15166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15168 = arguments.length;
switch (G__15168) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15170 = arguments.length;
switch (G__15170) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15172 = arguments.length;
switch (G__15172) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14156__auto___16175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_15215){
var state_val_15216 = (state_15215[(1)]);
if((state_val_15216 === (7))){
var state_15215__$1 = state_15215;
var statearr_15217_16176 = state_15215__$1;
(statearr_15217_16176[(2)] = null);

(statearr_15217_16176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (1))){
var state_15215__$1 = state_15215;
var statearr_15218_16178 = state_15215__$1;
(statearr_15218_16178[(2)] = null);

(statearr_15218_16178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (4))){
var inst_15176 = (state_15215[(7)]);
var inst_15175 = (state_15215[(8)]);
var inst_15178 = (inst_15176 < inst_15175);
var state_15215__$1 = state_15215;
if(cljs.core.truth_(inst_15178)){
var statearr_15219_16179 = state_15215__$1;
(statearr_15219_16179[(1)] = (6));

} else {
var statearr_15220_16180 = state_15215__$1;
(statearr_15220_16180[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (15))){
var inst_15201 = (state_15215[(9)]);
var inst_15206 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15201);
var state_15215__$1 = state_15215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15215__$1,(17),out,inst_15206);
} else {
if((state_val_15216 === (13))){
var inst_15201 = (state_15215[(9)]);
var inst_15201__$1 = (state_15215[(2)]);
var inst_15202 = cljs.core.some(cljs.core.nil_QMARK_,inst_15201__$1);
var state_15215__$1 = (function (){var statearr_15221 = state_15215;
(statearr_15221[(9)] = inst_15201__$1);

return statearr_15221;
})();
if(cljs.core.truth_(inst_15202)){
var statearr_15222_16181 = state_15215__$1;
(statearr_15222_16181[(1)] = (14));

} else {
var statearr_15223_16182 = state_15215__$1;
(statearr_15223_16182[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (6))){
var state_15215__$1 = state_15215;
var statearr_15224_16183 = state_15215__$1;
(statearr_15224_16183[(2)] = null);

(statearr_15224_16183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (17))){
var inst_15208 = (state_15215[(2)]);
var state_15215__$1 = (function (){var statearr_15226 = state_15215;
(statearr_15226[(10)] = inst_15208);

return statearr_15226;
})();
var statearr_15227_16184 = state_15215__$1;
(statearr_15227_16184[(2)] = null);

(statearr_15227_16184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (3))){
var inst_15213 = (state_15215[(2)]);
var state_15215__$1 = state_15215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15215__$1,inst_15213);
} else {
if((state_val_15216 === (12))){
var _ = (function (){var statearr_15228 = state_15215;
(statearr_15228[(4)] = cljs.core.rest((state_15215[(4)])));

return statearr_15228;
})();
var state_15215__$1 = state_15215;
var ex15225 = (state_15215__$1[(2)]);
var statearr_15229_16186 = state_15215__$1;
(statearr_15229_16186[(5)] = ex15225);


if((ex15225 instanceof Object)){
var statearr_15230_16187 = state_15215__$1;
(statearr_15230_16187[(1)] = (11));

(statearr_15230_16187[(5)] = null);

} else {
throw ex15225;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (2))){
var inst_15174 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15175 = cnt;
var inst_15176 = (0);
var state_15215__$1 = (function (){var statearr_15231 = state_15215;
(statearr_15231[(11)] = inst_15174);

(statearr_15231[(7)] = inst_15176);

(statearr_15231[(8)] = inst_15175);

return statearr_15231;
})();
var statearr_15232_16192 = state_15215__$1;
(statearr_15232_16192[(2)] = null);

(statearr_15232_16192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (11))){
var inst_15180 = (state_15215[(2)]);
var inst_15181 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15215__$1 = (function (){var statearr_15233 = state_15215;
(statearr_15233[(12)] = inst_15180);

return statearr_15233;
})();
var statearr_15234_16193 = state_15215__$1;
(statearr_15234_16193[(2)] = inst_15181);

(statearr_15234_16193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (9))){
var inst_15176 = (state_15215[(7)]);
var _ = (function (){var statearr_15235 = state_15215;
(statearr_15235[(4)] = cljs.core.cons((12),(state_15215[(4)])));

return statearr_15235;
})();
var inst_15187 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15176) : chs__$1.call(null,inst_15176));
var inst_15188 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15176) : done.call(null,inst_15176));
var inst_15189 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15187,inst_15188);
var ___$1 = (function (){var statearr_15236 = state_15215;
(statearr_15236[(4)] = cljs.core.rest((state_15215[(4)])));

return statearr_15236;
})();
var state_15215__$1 = state_15215;
var statearr_15237_16194 = state_15215__$1;
(statearr_15237_16194[(2)] = inst_15189);

(statearr_15237_16194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (5))){
var inst_15199 = (state_15215[(2)]);
var state_15215__$1 = (function (){var statearr_15238 = state_15215;
(statearr_15238[(13)] = inst_15199);

return statearr_15238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15215__$1,(13),dchan);
} else {
if((state_val_15216 === (14))){
var inst_15204 = cljs.core.async.close_BANG_(out);
var state_15215__$1 = state_15215;
var statearr_15239_16195 = state_15215__$1;
(statearr_15239_16195[(2)] = inst_15204);

(statearr_15239_16195[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (16))){
var inst_15211 = (state_15215[(2)]);
var state_15215__$1 = state_15215;
var statearr_15240_16196 = state_15215__$1;
(statearr_15240_16196[(2)] = inst_15211);

(statearr_15240_16196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (10))){
var inst_15176 = (state_15215[(7)]);
var inst_15192 = (state_15215[(2)]);
var inst_15193 = (inst_15176 + (1));
var inst_15176__$1 = inst_15193;
var state_15215__$1 = (function (){var statearr_15241 = state_15215;
(statearr_15241[(14)] = inst_15192);

(statearr_15241[(7)] = inst_15176__$1);

return statearr_15241;
})();
var statearr_15242_16197 = state_15215__$1;
(statearr_15242_16197[(2)] = null);

(statearr_15242_16197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15216 === (8))){
var inst_15197 = (state_15215[(2)]);
var state_15215__$1 = state_15215;
var statearr_15243_16198 = state_15215__$1;
(statearr_15243_16198[(2)] = inst_15197);

(statearr_15243_16198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_15244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15244[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_15244[(1)] = (1));

return statearr_15244;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_15215){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15215);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15245){var ex__14094__auto__ = e15245;
var statearr_15246_16199 = state_15215;
(statearr_15246_16199[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15215[(4)]))){
var statearr_15247_16200 = state_15215;
(statearr_15247_16200[(1)] = cljs.core.first((state_15215[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16201 = state_15215;
state_15215 = G__16201;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_15215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_15215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_15248 = f__14157__auto__();
(statearr_15248[(6)] = c__14156__auto___16175);

return statearr_15248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15251 = arguments.length;
switch (G__15251) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14156__auto___16203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_15283){
var state_val_15284 = (state_15283[(1)]);
if((state_val_15284 === (7))){
var inst_15263 = (state_15283[(7)]);
var inst_15262 = (state_15283[(8)]);
var inst_15262__$1 = (state_15283[(2)]);
var inst_15263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15262__$1,(0),null);
var inst_15264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15262__$1,(1),null);
var inst_15265 = (inst_15263__$1 == null);
var state_15283__$1 = (function (){var statearr_15285 = state_15283;
(statearr_15285[(9)] = inst_15264);

(statearr_15285[(7)] = inst_15263__$1);

(statearr_15285[(8)] = inst_15262__$1);

return statearr_15285;
})();
if(cljs.core.truth_(inst_15265)){
var statearr_15286_16204 = state_15283__$1;
(statearr_15286_16204[(1)] = (8));

} else {
var statearr_15287_16205 = state_15283__$1;
(statearr_15287_16205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (1))){
var inst_15252 = cljs.core.vec(chs);
var inst_15253 = inst_15252;
var state_15283__$1 = (function (){var statearr_15288 = state_15283;
(statearr_15288[(10)] = inst_15253);

return statearr_15288;
})();
var statearr_15289_16206 = state_15283__$1;
(statearr_15289_16206[(2)] = null);

(statearr_15289_16206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (4))){
var inst_15253 = (state_15283[(10)]);
var state_15283__$1 = state_15283;
return cljs.core.async.ioc_alts_BANG_(state_15283__$1,(7),inst_15253);
} else {
if((state_val_15284 === (6))){
var inst_15279 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
var statearr_15290_16207 = state_15283__$1;
(statearr_15290_16207[(2)] = inst_15279);

(statearr_15290_16207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (3))){
var inst_15281 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15283__$1,inst_15281);
} else {
if((state_val_15284 === (2))){
var inst_15253 = (state_15283[(10)]);
var inst_15255 = cljs.core.count(inst_15253);
var inst_15256 = (inst_15255 > (0));
var state_15283__$1 = state_15283;
if(cljs.core.truth_(inst_15256)){
var statearr_15292_16208 = state_15283__$1;
(statearr_15292_16208[(1)] = (4));

} else {
var statearr_15293_16209 = state_15283__$1;
(statearr_15293_16209[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (11))){
var inst_15253 = (state_15283[(10)]);
var inst_15272 = (state_15283[(2)]);
var tmp15291 = inst_15253;
var inst_15253__$1 = tmp15291;
var state_15283__$1 = (function (){var statearr_15294 = state_15283;
(statearr_15294[(11)] = inst_15272);

(statearr_15294[(10)] = inst_15253__$1);

return statearr_15294;
})();
var statearr_15295_16210 = state_15283__$1;
(statearr_15295_16210[(2)] = null);

(statearr_15295_16210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (9))){
var inst_15263 = (state_15283[(7)]);
var state_15283__$1 = state_15283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15283__$1,(11),out,inst_15263);
} else {
if((state_val_15284 === (5))){
var inst_15277 = cljs.core.async.close_BANG_(out);
var state_15283__$1 = state_15283;
var statearr_15296_16212 = state_15283__$1;
(statearr_15296_16212[(2)] = inst_15277);

(statearr_15296_16212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (10))){
var inst_15275 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
var statearr_15297_16213 = state_15283__$1;
(statearr_15297_16213[(2)] = inst_15275);

(statearr_15297_16213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (8))){
var inst_15264 = (state_15283[(9)]);
var inst_15253 = (state_15283[(10)]);
var inst_15263 = (state_15283[(7)]);
var inst_15262 = (state_15283[(8)]);
var inst_15267 = (function (){var cs = inst_15253;
var vec__15258 = inst_15262;
var v = inst_15263;
var c = inst_15264;
return (function (p1__15249_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15249_SHARP_);
});
})();
var inst_15268 = cljs.core.filterv(inst_15267,inst_15253);
var inst_15253__$1 = inst_15268;
var state_15283__$1 = (function (){var statearr_15298 = state_15283;
(statearr_15298[(10)] = inst_15253__$1);

return statearr_15298;
})();
var statearr_15299_16217 = state_15283__$1;
(statearr_15299_16217[(2)] = null);

(statearr_15299_16217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_15300 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15300[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_15300[(1)] = (1));

return statearr_15300;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_15283){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15283);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15301){var ex__14094__auto__ = e15301;
var statearr_15302_16218 = state_15283;
(statearr_15302_16218[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15283[(4)]))){
var statearr_15303_16219 = state_15283;
(statearr_15303_16219[(1)] = cljs.core.first((state_15283[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16220 = state_15283;
state_15283 = G__16220;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_15283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_15283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_15304 = f__14157__auto__();
(statearr_15304[(6)] = c__14156__auto___16203);

return statearr_15304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15306 = arguments.length;
switch (G__15306) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14156__auto___16222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_15330){
var state_val_15331 = (state_15330[(1)]);
if((state_val_15331 === (7))){
var inst_15312 = (state_15330[(7)]);
var inst_15312__$1 = (state_15330[(2)]);
var inst_15313 = (inst_15312__$1 == null);
var inst_15314 = cljs.core.not(inst_15313);
var state_15330__$1 = (function (){var statearr_15332 = state_15330;
(statearr_15332[(7)] = inst_15312__$1);

return statearr_15332;
})();
if(inst_15314){
var statearr_15333_16223 = state_15330__$1;
(statearr_15333_16223[(1)] = (8));

} else {
var statearr_15334_16224 = state_15330__$1;
(statearr_15334_16224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15331 === (1))){
var inst_15307 = (0);
var state_15330__$1 = (function (){var statearr_15335 = state_15330;
(statearr_15335[(8)] = inst_15307);

return statearr_15335;
})();
var statearr_15336_16225 = state_15330__$1;
(statearr_15336_16225[(2)] = null);

(statearr_15336_16225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15331 === (4))){
var state_15330__$1 = state_15330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15330__$1,(7),ch);
} else {
if((state_val_15331 === (6))){
var inst_15325 = (state_15330[(2)]);
var state_15330__$1 = state_15330;
var statearr_15337_16226 = state_15330__$1;
(statearr_15337_16226[(2)] = inst_15325);

(statearr_15337_16226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15331 === (3))){
var inst_15327 = (state_15330[(2)]);
var inst_15328 = cljs.core.async.close_BANG_(out);
var state_15330__$1 = (function (){var statearr_15338 = state_15330;
(statearr_15338[(9)] = inst_15327);

return statearr_15338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15330__$1,inst_15328);
} else {
if((state_val_15331 === (2))){
var inst_15307 = (state_15330[(8)]);
var inst_15309 = (inst_15307 < n);
var state_15330__$1 = state_15330;
if(cljs.core.truth_(inst_15309)){
var statearr_15339_16228 = state_15330__$1;
(statearr_15339_16228[(1)] = (4));

} else {
var statearr_15340_16229 = state_15330__$1;
(statearr_15340_16229[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15331 === (11))){
var inst_15307 = (state_15330[(8)]);
var inst_15317 = (state_15330[(2)]);
var inst_15318 = (inst_15307 + (1));
var inst_15307__$1 = inst_15318;
var state_15330__$1 = (function (){var statearr_15341 = state_15330;
(statearr_15341[(8)] = inst_15307__$1);

(statearr_15341[(10)] = inst_15317);

return statearr_15341;
})();
var statearr_15342_16230 = state_15330__$1;
(statearr_15342_16230[(2)] = null);

(statearr_15342_16230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15331 === (9))){
var state_15330__$1 = state_15330;
var statearr_15343_16231 = state_15330__$1;
(statearr_15343_16231[(2)] = null);

(statearr_15343_16231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15331 === (5))){
var state_15330__$1 = state_15330;
var statearr_15344_16232 = state_15330__$1;
(statearr_15344_16232[(2)] = null);

(statearr_15344_16232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15331 === (10))){
var inst_15322 = (state_15330[(2)]);
var state_15330__$1 = state_15330;
var statearr_15345_16233 = state_15330__$1;
(statearr_15345_16233[(2)] = inst_15322);

(statearr_15345_16233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15331 === (8))){
var inst_15312 = (state_15330[(7)]);
var state_15330__$1 = state_15330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15330__$1,(11),out,inst_15312);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_15346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15346[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_15346[(1)] = (1));

return statearr_15346;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_15330){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15330);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15347){var ex__14094__auto__ = e15347;
var statearr_15348_16234 = state_15330;
(statearr_15348_16234[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15330[(4)]))){
var statearr_15349_16235 = state_15330;
(statearr_15349_16235[(1)] = cljs.core.first((state_15330[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16236 = state_15330;
state_15330 = G__16236;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_15330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_15330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_15350 = f__14157__auto__();
(statearr_15350[(6)] = c__14156__auto___16222);

return statearr_15350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15352 = (function (f,ch,meta15353){
this.f = f;
this.ch = ch;
this.meta15353 = meta15353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15354,meta15353__$1){
var self__ = this;
var _15354__$1 = this;
return (new cljs.core.async.t_cljs$core$async15352(self__.f,self__.ch,meta15353__$1));
}));

(cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15354){
var self__ = this;
var _15354__$1 = this;
return self__.meta15353;
}));

(cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15355 = (function (f,ch,meta15353,_,fn1,meta15356){
this.f = f;
this.ch = ch;
this.meta15353 = meta15353;
this._ = _;
this.fn1 = fn1;
this.meta15356 = meta15356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15357,meta15356__$1){
var self__ = this;
var _15357__$1 = this;
return (new cljs.core.async.t_cljs$core$async15355(self__.f,self__.ch,self__.meta15353,self__._,self__.fn1,meta15356__$1));
}));

(cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15357){
var self__ = this;
var _15357__$1 = this;
return self__.meta15356;
}));

(cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15351_SHARP_){
var G__15358 = (((p1__15351_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15351_SHARP_) : self__.f.call(null,p1__15351_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15358) : f1.call(null,G__15358));
});
}));

(cljs.core.async.t_cljs$core$async15355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15353","meta15353",1560710785,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15352","cljs.core.async/t_cljs$core$async15352",1410225677,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15356","meta15356",-569744674,null)], null);
}));

(cljs.core.async.t_cljs$core$async15355.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15355");

(cljs.core.async.t_cljs$core$async15355.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15355");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15355.
 */
cljs.core.async.__GT_t_cljs$core$async15355 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15355(f__$1,ch__$1,meta15353__$1,___$2,fn1__$1,meta15356){
return (new cljs.core.async.t_cljs$core$async15355(f__$1,ch__$1,meta15353__$1,___$2,fn1__$1,meta15356));
});

}

return (new cljs.core.async.t_cljs$core$async15355(self__.f,self__.ch,self__.meta15353,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15359 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15359) : self__.f.call(null,G__15359));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15353","meta15353",1560710785,null)], null);
}));

(cljs.core.async.t_cljs$core$async15352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15352");

(cljs.core.async.t_cljs$core$async15352.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15352.
 */
cljs.core.async.__GT_t_cljs$core$async15352 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15352(f__$1,ch__$1,meta15353){
return (new cljs.core.async.t_cljs$core$async15352(f__$1,ch__$1,meta15353));
});

}

return (new cljs.core.async.t_cljs$core$async15352(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15360 = (function (f,ch,meta15361){
this.f = f;
this.ch = ch;
this.meta15361 = meta15361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15362,meta15361__$1){
var self__ = this;
var _15362__$1 = this;
return (new cljs.core.async.t_cljs$core$async15360(self__.f,self__.ch,meta15361__$1));
}));

(cljs.core.async.t_cljs$core$async15360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15362){
var self__ = this;
var _15362__$1 = this;
return self__.meta15361;
}));

(cljs.core.async.t_cljs$core$async15360.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15360.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15360.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15361","meta15361",305701880,null)], null);
}));

(cljs.core.async.t_cljs$core$async15360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15360");

(cljs.core.async.t_cljs$core$async15360.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15360.
 */
cljs.core.async.__GT_t_cljs$core$async15360 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15360(f__$1,ch__$1,meta15361){
return (new cljs.core.async.t_cljs$core$async15360(f__$1,ch__$1,meta15361));
});

}

return (new cljs.core.async.t_cljs$core$async15360(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15363 = (function (p,ch,meta15364){
this.p = p;
this.ch = ch;
this.meta15364 = meta15364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15365,meta15364__$1){
var self__ = this;
var _15365__$1 = this;
return (new cljs.core.async.t_cljs$core$async15363(self__.p,self__.ch,meta15364__$1));
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15365){
var self__ = this;
var _15365__$1 = this;
return self__.meta15364;
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15364","meta15364",1426810233,null)], null);
}));

(cljs.core.async.t_cljs$core$async15363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15363");

(cljs.core.async.t_cljs$core$async15363.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15363.
 */
cljs.core.async.__GT_t_cljs$core$async15363 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15363(p__$1,ch__$1,meta15364){
return (new cljs.core.async.t_cljs$core$async15363(p__$1,ch__$1,meta15364));
});

}

return (new cljs.core.async.t_cljs$core$async15363(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15367 = arguments.length;
switch (G__15367) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14156__auto___16249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_15388){
var state_val_15389 = (state_15388[(1)]);
if((state_val_15389 === (7))){
var inst_15384 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15390_16253 = state_15388__$1;
(statearr_15390_16253[(2)] = inst_15384);

(statearr_15390_16253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (1))){
var state_15388__$1 = state_15388;
var statearr_15391_16254 = state_15388__$1;
(statearr_15391_16254[(2)] = null);

(statearr_15391_16254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (4))){
var inst_15370 = (state_15388[(7)]);
var inst_15370__$1 = (state_15388[(2)]);
var inst_15371 = (inst_15370__$1 == null);
var state_15388__$1 = (function (){var statearr_15392 = state_15388;
(statearr_15392[(7)] = inst_15370__$1);

return statearr_15392;
})();
if(cljs.core.truth_(inst_15371)){
var statearr_15393_16255 = state_15388__$1;
(statearr_15393_16255[(1)] = (5));

} else {
var statearr_15394_16256 = state_15388__$1;
(statearr_15394_16256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (6))){
var inst_15370 = (state_15388[(7)]);
var inst_15375 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15370) : p.call(null,inst_15370));
var state_15388__$1 = state_15388;
if(cljs.core.truth_(inst_15375)){
var statearr_15395_16257 = state_15388__$1;
(statearr_15395_16257[(1)] = (8));

} else {
var statearr_15396_16258 = state_15388__$1;
(statearr_15396_16258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (3))){
var inst_15386 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15388__$1,inst_15386);
} else {
if((state_val_15389 === (2))){
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15388__$1,(4),ch);
} else {
if((state_val_15389 === (11))){
var inst_15378 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15397_16259 = state_15388__$1;
(statearr_15397_16259[(2)] = inst_15378);

(statearr_15397_16259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (9))){
var state_15388__$1 = state_15388;
var statearr_15398_16260 = state_15388__$1;
(statearr_15398_16260[(2)] = null);

(statearr_15398_16260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (5))){
var inst_15373 = cljs.core.async.close_BANG_(out);
var state_15388__$1 = state_15388;
var statearr_15399_16261 = state_15388__$1;
(statearr_15399_16261[(2)] = inst_15373);

(statearr_15399_16261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (10))){
var inst_15381 = (state_15388[(2)]);
var state_15388__$1 = (function (){var statearr_15400 = state_15388;
(statearr_15400[(8)] = inst_15381);

return statearr_15400;
})();
var statearr_15401_16262 = state_15388__$1;
(statearr_15401_16262[(2)] = null);

(statearr_15401_16262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (8))){
var inst_15370 = (state_15388[(7)]);
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15388__$1,(11),out,inst_15370);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_15402 = [null,null,null,null,null,null,null,null,null];
(statearr_15402[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_15402[(1)] = (1));

return statearr_15402;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_15388){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15388);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15403){var ex__14094__auto__ = e15403;
var statearr_15404_16263 = state_15388;
(statearr_15404_16263[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15388[(4)]))){
var statearr_15405_16264 = state_15388;
(statearr_15405_16264[(1)] = cljs.core.first((state_15388[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16265 = state_15388;
state_15388 = G__16265;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_15388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_15388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_15406 = f__14157__auto__();
(statearr_15406[(6)] = c__14156__auto___16249);

return statearr_15406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15408 = arguments.length;
switch (G__15408) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_15470){
var state_val_15471 = (state_15470[(1)]);
if((state_val_15471 === (7))){
var inst_15466 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15472_16268 = state_15470__$1;
(statearr_15472_16268[(2)] = inst_15466);

(statearr_15472_16268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (20))){
var inst_15436 = (state_15470[(7)]);
var inst_15447 = (state_15470[(2)]);
var inst_15448 = cljs.core.next(inst_15436);
var inst_15422 = inst_15448;
var inst_15423 = null;
var inst_15424 = (0);
var inst_15425 = (0);
var state_15470__$1 = (function (){var statearr_15473 = state_15470;
(statearr_15473[(8)] = inst_15423);

(statearr_15473[(9)] = inst_15422);

(statearr_15473[(10)] = inst_15447);

(statearr_15473[(11)] = inst_15425);

(statearr_15473[(12)] = inst_15424);

return statearr_15473;
})();
var statearr_15474_16269 = state_15470__$1;
(statearr_15474_16269[(2)] = null);

(statearr_15474_16269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (1))){
var state_15470__$1 = state_15470;
var statearr_15475_16270 = state_15470__$1;
(statearr_15475_16270[(2)] = null);

(statearr_15475_16270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (4))){
var inst_15411 = (state_15470[(13)]);
var inst_15411__$1 = (state_15470[(2)]);
var inst_15412 = (inst_15411__$1 == null);
var state_15470__$1 = (function (){var statearr_15476 = state_15470;
(statearr_15476[(13)] = inst_15411__$1);

return statearr_15476;
})();
if(cljs.core.truth_(inst_15412)){
var statearr_15477_16271 = state_15470__$1;
(statearr_15477_16271[(1)] = (5));

} else {
var statearr_15478_16272 = state_15470__$1;
(statearr_15478_16272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (15))){
var state_15470__$1 = state_15470;
var statearr_15482_16273 = state_15470__$1;
(statearr_15482_16273[(2)] = null);

(statearr_15482_16273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (21))){
var state_15470__$1 = state_15470;
var statearr_15483_16274 = state_15470__$1;
(statearr_15483_16274[(2)] = null);

(statearr_15483_16274[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (13))){
var inst_15423 = (state_15470[(8)]);
var inst_15422 = (state_15470[(9)]);
var inst_15425 = (state_15470[(11)]);
var inst_15424 = (state_15470[(12)]);
var inst_15432 = (state_15470[(2)]);
var inst_15433 = (inst_15425 + (1));
var tmp15479 = inst_15423;
var tmp15480 = inst_15422;
var tmp15481 = inst_15424;
var inst_15422__$1 = tmp15480;
var inst_15423__$1 = tmp15479;
var inst_15424__$1 = tmp15481;
var inst_15425__$1 = inst_15433;
var state_15470__$1 = (function (){var statearr_15484 = state_15470;
(statearr_15484[(8)] = inst_15423__$1);

(statearr_15484[(14)] = inst_15432);

(statearr_15484[(9)] = inst_15422__$1);

(statearr_15484[(11)] = inst_15425__$1);

(statearr_15484[(12)] = inst_15424__$1);

return statearr_15484;
})();
var statearr_15485_16275 = state_15470__$1;
(statearr_15485_16275[(2)] = null);

(statearr_15485_16275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (22))){
var state_15470__$1 = state_15470;
var statearr_15486_16276 = state_15470__$1;
(statearr_15486_16276[(2)] = null);

(statearr_15486_16276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (6))){
var inst_15411 = (state_15470[(13)]);
var inst_15420 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15411) : f.call(null,inst_15411));
var inst_15421 = cljs.core.seq(inst_15420);
var inst_15422 = inst_15421;
var inst_15423 = null;
var inst_15424 = (0);
var inst_15425 = (0);
var state_15470__$1 = (function (){var statearr_15487 = state_15470;
(statearr_15487[(8)] = inst_15423);

(statearr_15487[(9)] = inst_15422);

(statearr_15487[(11)] = inst_15425);

(statearr_15487[(12)] = inst_15424);

return statearr_15487;
})();
var statearr_15488_16281 = state_15470__$1;
(statearr_15488_16281[(2)] = null);

(statearr_15488_16281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (17))){
var inst_15436 = (state_15470[(7)]);
var inst_15440 = cljs.core.chunk_first(inst_15436);
var inst_15441 = cljs.core.chunk_rest(inst_15436);
var inst_15442 = cljs.core.count(inst_15440);
var inst_15422 = inst_15441;
var inst_15423 = inst_15440;
var inst_15424 = inst_15442;
var inst_15425 = (0);
var state_15470__$1 = (function (){var statearr_15489 = state_15470;
(statearr_15489[(8)] = inst_15423);

(statearr_15489[(9)] = inst_15422);

(statearr_15489[(11)] = inst_15425);

(statearr_15489[(12)] = inst_15424);

return statearr_15489;
})();
var statearr_15490_16282 = state_15470__$1;
(statearr_15490_16282[(2)] = null);

(statearr_15490_16282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (3))){
var inst_15468 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15470__$1,inst_15468);
} else {
if((state_val_15471 === (12))){
var inst_15456 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15491_16284 = state_15470__$1;
(statearr_15491_16284[(2)] = inst_15456);

(statearr_15491_16284[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (2))){
var state_15470__$1 = state_15470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15470__$1,(4),in$);
} else {
if((state_val_15471 === (23))){
var inst_15464 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15492_16288 = state_15470__$1;
(statearr_15492_16288[(2)] = inst_15464);

(statearr_15492_16288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (19))){
var inst_15451 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15493_16289 = state_15470__$1;
(statearr_15493_16289[(2)] = inst_15451);

(statearr_15493_16289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (11))){
var inst_15422 = (state_15470[(9)]);
var inst_15436 = (state_15470[(7)]);
var inst_15436__$1 = cljs.core.seq(inst_15422);
var state_15470__$1 = (function (){var statearr_15494 = state_15470;
(statearr_15494[(7)] = inst_15436__$1);

return statearr_15494;
})();
if(inst_15436__$1){
var statearr_15495_16292 = state_15470__$1;
(statearr_15495_16292[(1)] = (14));

} else {
var statearr_15496_16293 = state_15470__$1;
(statearr_15496_16293[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (9))){
var inst_15458 = (state_15470[(2)]);
var inst_15459 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15470__$1 = (function (){var statearr_15497 = state_15470;
(statearr_15497[(15)] = inst_15458);

return statearr_15497;
})();
if(cljs.core.truth_(inst_15459)){
var statearr_15498_16294 = state_15470__$1;
(statearr_15498_16294[(1)] = (21));

} else {
var statearr_15499_16295 = state_15470__$1;
(statearr_15499_16295[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (5))){
var inst_15414 = cljs.core.async.close_BANG_(out);
var state_15470__$1 = state_15470;
var statearr_15500_16296 = state_15470__$1;
(statearr_15500_16296[(2)] = inst_15414);

(statearr_15500_16296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (14))){
var inst_15436 = (state_15470[(7)]);
var inst_15438 = cljs.core.chunked_seq_QMARK_(inst_15436);
var state_15470__$1 = state_15470;
if(inst_15438){
var statearr_15501_16297 = state_15470__$1;
(statearr_15501_16297[(1)] = (17));

} else {
var statearr_15502_16298 = state_15470__$1;
(statearr_15502_16298[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (16))){
var inst_15454 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15503_16299 = state_15470__$1;
(statearr_15503_16299[(2)] = inst_15454);

(statearr_15503_16299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (10))){
var inst_15423 = (state_15470[(8)]);
var inst_15425 = (state_15470[(11)]);
var inst_15430 = cljs.core._nth(inst_15423,inst_15425);
var state_15470__$1 = state_15470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15470__$1,(13),out,inst_15430);
} else {
if((state_val_15471 === (18))){
var inst_15436 = (state_15470[(7)]);
var inst_15445 = cljs.core.first(inst_15436);
var state_15470__$1 = state_15470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15470__$1,(20),out,inst_15445);
} else {
if((state_val_15471 === (8))){
var inst_15425 = (state_15470[(11)]);
var inst_15424 = (state_15470[(12)]);
var inst_15427 = (inst_15425 < inst_15424);
var inst_15428 = inst_15427;
var state_15470__$1 = state_15470;
if(cljs.core.truth_(inst_15428)){
var statearr_15504_16300 = state_15470__$1;
(statearr_15504_16300[(1)] = (10));

} else {
var statearr_15505_16301 = state_15470__$1;
(statearr_15505_16301[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_15506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15506[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__);

(statearr_15506[(1)] = (1));

return statearr_15506;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____1 = (function (state_15470){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15470);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15507){var ex__14094__auto__ = e15507;
var statearr_15508_16302 = state_15470;
(statearr_15508_16302[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15470[(4)]))){
var statearr_15509_16303 = state_15470;
(statearr_15509_16303[(1)] = cljs.core.first((state_15470[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16304 = state_15470;
state_15470 = G__16304;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__ = function(state_15470){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____1.call(this,state_15470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_15510 = f__14157__auto__();
(statearr_15510[(6)] = c__14156__auto__);

return statearr_15510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));

return c__14156__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15512 = arguments.length;
switch (G__15512) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15514 = arguments.length;
switch (G__15514) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15516 = arguments.length;
switch (G__15516) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14156__auto___16308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_15540){
var state_val_15541 = (state_15540[(1)]);
if((state_val_15541 === (7))){
var inst_15535 = (state_15540[(2)]);
var state_15540__$1 = state_15540;
var statearr_15542_16309 = state_15540__$1;
(statearr_15542_16309[(2)] = inst_15535);

(statearr_15542_16309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15541 === (1))){
var inst_15517 = null;
var state_15540__$1 = (function (){var statearr_15543 = state_15540;
(statearr_15543[(7)] = inst_15517);

return statearr_15543;
})();
var statearr_15544_16310 = state_15540__$1;
(statearr_15544_16310[(2)] = null);

(statearr_15544_16310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15541 === (4))){
var inst_15520 = (state_15540[(8)]);
var inst_15520__$1 = (state_15540[(2)]);
var inst_15521 = (inst_15520__$1 == null);
var inst_15522 = cljs.core.not(inst_15521);
var state_15540__$1 = (function (){var statearr_15545 = state_15540;
(statearr_15545[(8)] = inst_15520__$1);

return statearr_15545;
})();
if(inst_15522){
var statearr_15546_16311 = state_15540__$1;
(statearr_15546_16311[(1)] = (5));

} else {
var statearr_15547_16312 = state_15540__$1;
(statearr_15547_16312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15541 === (6))){
var state_15540__$1 = state_15540;
var statearr_15548_16313 = state_15540__$1;
(statearr_15548_16313[(2)] = null);

(statearr_15548_16313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15541 === (3))){
var inst_15537 = (state_15540[(2)]);
var inst_15538 = cljs.core.async.close_BANG_(out);
var state_15540__$1 = (function (){var statearr_15549 = state_15540;
(statearr_15549[(9)] = inst_15537);

return statearr_15549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15540__$1,inst_15538);
} else {
if((state_val_15541 === (2))){
var state_15540__$1 = state_15540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15540__$1,(4),ch);
} else {
if((state_val_15541 === (11))){
var inst_15520 = (state_15540[(8)]);
var inst_15529 = (state_15540[(2)]);
var inst_15517 = inst_15520;
var state_15540__$1 = (function (){var statearr_15550 = state_15540;
(statearr_15550[(7)] = inst_15517);

(statearr_15550[(10)] = inst_15529);

return statearr_15550;
})();
var statearr_15551_16314 = state_15540__$1;
(statearr_15551_16314[(2)] = null);

(statearr_15551_16314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15541 === (9))){
var inst_15520 = (state_15540[(8)]);
var state_15540__$1 = state_15540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15540__$1,(11),out,inst_15520);
} else {
if((state_val_15541 === (5))){
var inst_15517 = (state_15540[(7)]);
var inst_15520 = (state_15540[(8)]);
var inst_15524 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15520,inst_15517);
var state_15540__$1 = state_15540;
if(inst_15524){
var statearr_15553_16315 = state_15540__$1;
(statearr_15553_16315[(1)] = (8));

} else {
var statearr_15554_16316 = state_15540__$1;
(statearr_15554_16316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15541 === (10))){
var inst_15532 = (state_15540[(2)]);
var state_15540__$1 = state_15540;
var statearr_15555_16317 = state_15540__$1;
(statearr_15555_16317[(2)] = inst_15532);

(statearr_15555_16317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15541 === (8))){
var inst_15517 = (state_15540[(7)]);
var tmp15552 = inst_15517;
var inst_15517__$1 = tmp15552;
var state_15540__$1 = (function (){var statearr_15556 = state_15540;
(statearr_15556[(7)] = inst_15517__$1);

return statearr_15556;
})();
var statearr_15557_16318 = state_15540__$1;
(statearr_15557_16318[(2)] = null);

(statearr_15557_16318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_15558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15558[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_15558[(1)] = (1));

return statearr_15558;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_15540){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15540);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15559){var ex__14094__auto__ = e15559;
var statearr_15560_16319 = state_15540;
(statearr_15560_16319[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15540[(4)]))){
var statearr_15561_16320 = state_15540;
(statearr_15561_16320[(1)] = cljs.core.first((state_15540[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16321 = state_15540;
state_15540 = G__16321;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_15540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_15540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_15562 = f__14157__auto__();
(statearr_15562[(6)] = c__14156__auto___16308);

return statearr_15562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15564 = arguments.length;
switch (G__15564) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14156__auto___16323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_15602){
var state_val_15603 = (state_15602[(1)]);
if((state_val_15603 === (7))){
var inst_15598 = (state_15602[(2)]);
var state_15602__$1 = state_15602;
var statearr_15604_16324 = state_15602__$1;
(statearr_15604_16324[(2)] = inst_15598);

(statearr_15604_16324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15603 === (1))){
var inst_15565 = (new Array(n));
var inst_15566 = inst_15565;
var inst_15567 = (0);
var state_15602__$1 = (function (){var statearr_15605 = state_15602;
(statearr_15605[(7)] = inst_15567);

(statearr_15605[(8)] = inst_15566);

return statearr_15605;
})();
var statearr_15606_16335 = state_15602__$1;
(statearr_15606_16335[(2)] = null);

(statearr_15606_16335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15603 === (4))){
var inst_15570 = (state_15602[(9)]);
var inst_15570__$1 = (state_15602[(2)]);
var inst_15571 = (inst_15570__$1 == null);
var inst_15572 = cljs.core.not(inst_15571);
var state_15602__$1 = (function (){var statearr_15607 = state_15602;
(statearr_15607[(9)] = inst_15570__$1);

return statearr_15607;
})();
if(inst_15572){
var statearr_15608_16339 = state_15602__$1;
(statearr_15608_16339[(1)] = (5));

} else {
var statearr_15609_16340 = state_15602__$1;
(statearr_15609_16340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15603 === (15))){
var inst_15592 = (state_15602[(2)]);
var state_15602__$1 = state_15602;
var statearr_15610_16347 = state_15602__$1;
(statearr_15610_16347[(2)] = inst_15592);

(statearr_15610_16347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15603 === (13))){
var state_15602__$1 = state_15602;
var statearr_15611_16348 = state_15602__$1;
(statearr_15611_16348[(2)] = null);

(statearr_15611_16348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15603 === (6))){
var inst_15567 = (state_15602[(7)]);
var inst_15588 = (inst_15567 > (0));
var state_15602__$1 = state_15602;
if(cljs.core.truth_(inst_15588)){
var statearr_15612_16349 = state_15602__$1;
(statearr_15612_16349[(1)] = (12));

} else {
var statearr_15613_16350 = state_15602__$1;
(statearr_15613_16350[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15603 === (3))){
var inst_15600 = (state_15602[(2)]);
var state_15602__$1 = state_15602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15602__$1,inst_15600);
} else {
if((state_val_15603 === (12))){
var inst_15566 = (state_15602[(8)]);
var inst_15590 = cljs.core.vec(inst_15566);
var state_15602__$1 = state_15602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15602__$1,(15),out,inst_15590);
} else {
if((state_val_15603 === (2))){
var state_15602__$1 = state_15602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15602__$1,(4),ch);
} else {
if((state_val_15603 === (11))){
var inst_15582 = (state_15602[(2)]);
var inst_15583 = (new Array(n));
var inst_15566 = inst_15583;
var inst_15567 = (0);
var state_15602__$1 = (function (){var statearr_15614 = state_15602;
(statearr_15614[(7)] = inst_15567);

(statearr_15614[(8)] = inst_15566);

(statearr_15614[(10)] = inst_15582);

return statearr_15614;
})();
var statearr_15615_16352 = state_15602__$1;
(statearr_15615_16352[(2)] = null);

(statearr_15615_16352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15603 === (9))){
var inst_15566 = (state_15602[(8)]);
var inst_15580 = cljs.core.vec(inst_15566);
var state_15602__$1 = state_15602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15602__$1,(11),out,inst_15580);
} else {
if((state_val_15603 === (5))){
var inst_15567 = (state_15602[(7)]);
var inst_15575 = (state_15602[(11)]);
var inst_15566 = (state_15602[(8)]);
var inst_15570 = (state_15602[(9)]);
var inst_15574 = (inst_15566[inst_15567] = inst_15570);
var inst_15575__$1 = (inst_15567 + (1));
var inst_15576 = (inst_15575__$1 < n);
var state_15602__$1 = (function (){var statearr_15616 = state_15602;
(statearr_15616[(11)] = inst_15575__$1);

(statearr_15616[(12)] = inst_15574);

return statearr_15616;
})();
if(cljs.core.truth_(inst_15576)){
var statearr_15617_16353 = state_15602__$1;
(statearr_15617_16353[(1)] = (8));

} else {
var statearr_15618_16354 = state_15602__$1;
(statearr_15618_16354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15603 === (14))){
var inst_15595 = (state_15602[(2)]);
var inst_15596 = cljs.core.async.close_BANG_(out);
var state_15602__$1 = (function (){var statearr_15620 = state_15602;
(statearr_15620[(13)] = inst_15595);

return statearr_15620;
})();
var statearr_15621_16355 = state_15602__$1;
(statearr_15621_16355[(2)] = inst_15596);

(statearr_15621_16355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15603 === (10))){
var inst_15586 = (state_15602[(2)]);
var state_15602__$1 = state_15602;
var statearr_15622_16356 = state_15602__$1;
(statearr_15622_16356[(2)] = inst_15586);

(statearr_15622_16356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15603 === (8))){
var inst_15575 = (state_15602[(11)]);
var inst_15566 = (state_15602[(8)]);
var tmp15619 = inst_15566;
var inst_15566__$1 = tmp15619;
var inst_15567 = inst_15575;
var state_15602__$1 = (function (){var statearr_15623 = state_15602;
(statearr_15623[(7)] = inst_15567);

(statearr_15623[(8)] = inst_15566__$1);

return statearr_15623;
})();
var statearr_15624_16366 = state_15602__$1;
(statearr_15624_16366[(2)] = null);

(statearr_15624_16366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_15625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15625[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_15625[(1)] = (1));

return statearr_15625;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_15602){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15602);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15626){var ex__14094__auto__ = e15626;
var statearr_15627_16367 = state_15602;
(statearr_15627_16367[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15602[(4)]))){
var statearr_15628_16368 = state_15602;
(statearr_15628_16368[(1)] = cljs.core.first((state_15602[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16375 = state_15602;
state_15602 = G__16375;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_15602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_15602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_15629 = f__14157__auto__();
(statearr_15629[(6)] = c__14156__auto___16323);

return statearr_15629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15631 = arguments.length;
switch (G__15631) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14156__auto___16377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14157__auto__ = (function (){var switch__14090__auto__ = (function (state_15676){
var state_val_15677 = (state_15676[(1)]);
if((state_val_15677 === (7))){
var inst_15672 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
var statearr_15678_16378 = state_15676__$1;
(statearr_15678_16378[(2)] = inst_15672);

(statearr_15678_16378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (1))){
var inst_15632 = [];
var inst_15633 = inst_15632;
var inst_15634 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15676__$1 = (function (){var statearr_15679 = state_15676;
(statearr_15679[(7)] = inst_15633);

(statearr_15679[(8)] = inst_15634);

return statearr_15679;
})();
var statearr_15680_16379 = state_15676__$1;
(statearr_15680_16379[(2)] = null);

(statearr_15680_16379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (4))){
var inst_15637 = (state_15676[(9)]);
var inst_15637__$1 = (state_15676[(2)]);
var inst_15638 = (inst_15637__$1 == null);
var inst_15639 = cljs.core.not(inst_15638);
var state_15676__$1 = (function (){var statearr_15681 = state_15676;
(statearr_15681[(9)] = inst_15637__$1);

return statearr_15681;
})();
if(inst_15639){
var statearr_15682_16380 = state_15676__$1;
(statearr_15682_16380[(1)] = (5));

} else {
var statearr_15683_16381 = state_15676__$1;
(statearr_15683_16381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (15))){
var inst_15633 = (state_15676[(7)]);
var inst_15664 = cljs.core.vec(inst_15633);
var state_15676__$1 = state_15676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15676__$1,(18),out,inst_15664);
} else {
if((state_val_15677 === (13))){
var inst_15659 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
var statearr_15684_16382 = state_15676__$1;
(statearr_15684_16382[(2)] = inst_15659);

(statearr_15684_16382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (6))){
var inst_15633 = (state_15676[(7)]);
var inst_15661 = inst_15633.length;
var inst_15662 = (inst_15661 > (0));
var state_15676__$1 = state_15676;
if(cljs.core.truth_(inst_15662)){
var statearr_15685_16383 = state_15676__$1;
(statearr_15685_16383[(1)] = (15));

} else {
var statearr_15686_16384 = state_15676__$1;
(statearr_15686_16384[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (17))){
var inst_15669 = (state_15676[(2)]);
var inst_15670 = cljs.core.async.close_BANG_(out);
var state_15676__$1 = (function (){var statearr_15687 = state_15676;
(statearr_15687[(10)] = inst_15669);

return statearr_15687;
})();
var statearr_15688_16385 = state_15676__$1;
(statearr_15688_16385[(2)] = inst_15670);

(statearr_15688_16385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (3))){
var inst_15674 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15676__$1,inst_15674);
} else {
if((state_val_15677 === (12))){
var inst_15633 = (state_15676[(7)]);
var inst_15652 = cljs.core.vec(inst_15633);
var state_15676__$1 = state_15676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15676__$1,(14),out,inst_15652);
} else {
if((state_val_15677 === (2))){
var state_15676__$1 = state_15676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15676__$1,(4),ch);
} else {
if((state_val_15677 === (11))){
var inst_15637 = (state_15676[(9)]);
var inst_15633 = (state_15676[(7)]);
var inst_15641 = (state_15676[(11)]);
var inst_15649 = inst_15633.push(inst_15637);
var tmp15689 = inst_15633;
var inst_15633__$1 = tmp15689;
var inst_15634 = inst_15641;
var state_15676__$1 = (function (){var statearr_15690 = state_15676;
(statearr_15690[(7)] = inst_15633__$1);

(statearr_15690[(12)] = inst_15649);

(statearr_15690[(8)] = inst_15634);

return statearr_15690;
})();
var statearr_15691_16386 = state_15676__$1;
(statearr_15691_16386[(2)] = null);

(statearr_15691_16386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (9))){
var inst_15634 = (state_15676[(8)]);
var inst_15645 = cljs.core.keyword_identical_QMARK_(inst_15634,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15676__$1 = state_15676;
var statearr_15692_16393 = state_15676__$1;
(statearr_15692_16393[(2)] = inst_15645);

(statearr_15692_16393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (5))){
var inst_15637 = (state_15676[(9)]);
var inst_15642 = (state_15676[(13)]);
var inst_15641 = (state_15676[(11)]);
var inst_15634 = (state_15676[(8)]);
var inst_15641__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15637) : f.call(null,inst_15637));
var inst_15642__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15641__$1,inst_15634);
var state_15676__$1 = (function (){var statearr_15693 = state_15676;
(statearr_15693[(13)] = inst_15642__$1);

(statearr_15693[(11)] = inst_15641__$1);

return statearr_15693;
})();
if(inst_15642__$1){
var statearr_15694_16394 = state_15676__$1;
(statearr_15694_16394[(1)] = (8));

} else {
var statearr_15695_16395 = state_15676__$1;
(statearr_15695_16395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (14))){
var inst_15637 = (state_15676[(9)]);
var inst_15641 = (state_15676[(11)]);
var inst_15654 = (state_15676[(2)]);
var inst_15655 = [];
var inst_15656 = inst_15655.push(inst_15637);
var inst_15633 = inst_15655;
var inst_15634 = inst_15641;
var state_15676__$1 = (function (){var statearr_15696 = state_15676;
(statearr_15696[(14)] = inst_15656);

(statearr_15696[(15)] = inst_15654);

(statearr_15696[(7)] = inst_15633);

(statearr_15696[(8)] = inst_15634);

return statearr_15696;
})();
var statearr_15697_16396 = state_15676__$1;
(statearr_15697_16396[(2)] = null);

(statearr_15697_16396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (16))){
var state_15676__$1 = state_15676;
var statearr_15698_16397 = state_15676__$1;
(statearr_15698_16397[(2)] = null);

(statearr_15698_16397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (10))){
var inst_15647 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
if(cljs.core.truth_(inst_15647)){
var statearr_15699_16398 = state_15676__$1;
(statearr_15699_16398[(1)] = (11));

} else {
var statearr_15700_16399 = state_15676__$1;
(statearr_15700_16399[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (18))){
var inst_15666 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
var statearr_15701_16400 = state_15676__$1;
(statearr_15701_16400[(2)] = inst_15666);

(statearr_15701_16400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (8))){
var inst_15642 = (state_15676[(13)]);
var state_15676__$1 = state_15676;
var statearr_15702_16401 = state_15676__$1;
(statearr_15702_16401[(2)] = inst_15642);

(statearr_15702_16401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_15703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15703[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_15703[(1)] = (1));

return statearr_15703;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_15676){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15676);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15704){var ex__14094__auto__ = e15704;
var statearr_15705_16402 = state_15676;
(statearr_15705_16402[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15676[(4)]))){
var statearr_15706_16403 = state_15676;
(statearr_15706_16403[(1)] = cljs.core.first((state_15676[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16404 = state_15676;
state_15676 = G__16404;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_15676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_15676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14158__auto__ = (function (){var statearr_15707 = f__14157__auto__();
(statearr_15707[(6)] = c__14156__auto___16377);

return statearr_15707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14158__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
