goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17489){
var map__17490 = p__17489;
var map__17490__$1 = cljs.core.__destructure_map(map__17490);
var m = map__17490__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17491_17656 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17492_17657 = null;
var count__17493_17658 = (0);
var i__17494_17659 = (0);
while(true){
if((i__17494_17659 < count__17493_17658)){
var f_17660 = chunk__17492_17657.cljs$core$IIndexed$_nth$arity$2(null,i__17494_17659);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17660], 0));


var G__17661 = seq__17491_17656;
var G__17662 = chunk__17492_17657;
var G__17663 = count__17493_17658;
var G__17664 = (i__17494_17659 + (1));
seq__17491_17656 = G__17661;
chunk__17492_17657 = G__17662;
count__17493_17658 = G__17663;
i__17494_17659 = G__17664;
continue;
} else {
var temp__5804__auto___17665 = cljs.core.seq(seq__17491_17656);
if(temp__5804__auto___17665){
var seq__17491_17666__$1 = temp__5804__auto___17665;
if(cljs.core.chunked_seq_QMARK_(seq__17491_17666__$1)){
var c__5568__auto___17667 = cljs.core.chunk_first(seq__17491_17666__$1);
var G__17668 = cljs.core.chunk_rest(seq__17491_17666__$1);
var G__17669 = c__5568__auto___17667;
var G__17670 = cljs.core.count(c__5568__auto___17667);
var G__17671 = (0);
seq__17491_17656 = G__17668;
chunk__17492_17657 = G__17669;
count__17493_17658 = G__17670;
i__17494_17659 = G__17671;
continue;
} else {
var f_17672 = cljs.core.first(seq__17491_17666__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17672], 0));


var G__17673 = cljs.core.next(seq__17491_17666__$1);
var G__17674 = null;
var G__17675 = (0);
var G__17676 = (0);
seq__17491_17656 = G__17673;
chunk__17492_17657 = G__17674;
count__17493_17658 = G__17675;
i__17494_17659 = G__17676;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17677 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17677], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17677)))?cljs.core.second(arglists_17677):arglists_17677)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17502_17683 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17503_17684 = null;
var count__17504_17685 = (0);
var i__17505_17686 = (0);
while(true){
if((i__17505_17686 < count__17504_17685)){
var vec__17521_17687 = chunk__17503_17684.cljs$core$IIndexed$_nth$arity$2(null,i__17505_17686);
var name_17688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17521_17687,(0),null);
var map__17524_17689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17521_17687,(1),null);
var map__17524_17690__$1 = cljs.core.__destructure_map(map__17524_17689);
var doc_17691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524_17690__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524_17690__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17688], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17692], 0));

if(cljs.core.truth_(doc_17691)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17691], 0));
} else {
}


var G__17693 = seq__17502_17683;
var G__17694 = chunk__17503_17684;
var G__17695 = count__17504_17685;
var G__17696 = (i__17505_17686 + (1));
seq__17502_17683 = G__17693;
chunk__17503_17684 = G__17694;
count__17504_17685 = G__17695;
i__17505_17686 = G__17696;
continue;
} else {
var temp__5804__auto___17697 = cljs.core.seq(seq__17502_17683);
if(temp__5804__auto___17697){
var seq__17502_17698__$1 = temp__5804__auto___17697;
if(cljs.core.chunked_seq_QMARK_(seq__17502_17698__$1)){
var c__5568__auto___17699 = cljs.core.chunk_first(seq__17502_17698__$1);
var G__17700 = cljs.core.chunk_rest(seq__17502_17698__$1);
var G__17701 = c__5568__auto___17699;
var G__17702 = cljs.core.count(c__5568__auto___17699);
var G__17703 = (0);
seq__17502_17683 = G__17700;
chunk__17503_17684 = G__17701;
count__17504_17685 = G__17702;
i__17505_17686 = G__17703;
continue;
} else {
var vec__17527_17704 = cljs.core.first(seq__17502_17698__$1);
var name_17705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17527_17704,(0),null);
var map__17530_17706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17527_17704,(1),null);
var map__17530_17707__$1 = cljs.core.__destructure_map(map__17530_17706);
var doc_17708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17530_17707__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17530_17707__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17705], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17709], 0));

if(cljs.core.truth_(doc_17708)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17708], 0));
} else {
}


var G__17711 = cljs.core.next(seq__17502_17698__$1);
var G__17712 = null;
var G__17713 = (0);
var G__17714 = (0);
seq__17502_17683 = G__17711;
chunk__17503_17684 = G__17712;
count__17504_17685 = G__17713;
i__17505_17686 = G__17714;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17531 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17532 = null;
var count__17533 = (0);
var i__17534 = (0);
while(true){
if((i__17534 < count__17533)){
var role = chunk__17532.cljs$core$IIndexed$_nth$arity$2(null,i__17534);
var temp__5804__auto___17715__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17715__$1)){
var spec_17716 = temp__5804__auto___17715__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17716)], 0));
} else {
}


var G__17717 = seq__17531;
var G__17718 = chunk__17532;
var G__17719 = count__17533;
var G__17720 = (i__17534 + (1));
seq__17531 = G__17717;
chunk__17532 = G__17718;
count__17533 = G__17719;
i__17534 = G__17720;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17531);
if(temp__5804__auto____$1){
var seq__17531__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17531__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17531__$1);
var G__17722 = cljs.core.chunk_rest(seq__17531__$1);
var G__17723 = c__5568__auto__;
var G__17724 = cljs.core.count(c__5568__auto__);
var G__17725 = (0);
seq__17531 = G__17722;
chunk__17532 = G__17723;
count__17533 = G__17724;
i__17534 = G__17725;
continue;
} else {
var role = cljs.core.first(seq__17531__$1);
var temp__5804__auto___17729__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17729__$2)){
var spec_17730 = temp__5804__auto___17729__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17730)], 0));
} else {
}


var G__17731 = cljs.core.next(seq__17531__$1);
var G__17732 = null;
var G__17733 = (0);
var G__17734 = (0);
seq__17531 = G__17731;
chunk__17532 = G__17732;
count__17533 = G__17733;
i__17534 = G__17734;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__17735 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__17736 = cljs.core.ex_cause(t);
via = G__17735;
t = G__17736;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__17568 = datafied_throwable;
var map__17568__$1 = cljs.core.__destructure_map(map__17568);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17568__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17568__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17568__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17569 = cljs.core.last(via);
var map__17569__$1 = cljs.core.__destructure_map(map__17569);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17569__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17569__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17569__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17570 = data;
var map__17570__$1 = cljs.core.__destructure_map(map__17570);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17571 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17571__$1 = cljs.core.__destructure_map(map__17571);
var top_data = map__17571__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17571__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17575 = phase;
var G__17575__$1 = (((G__17575 instanceof cljs.core.Keyword))?G__17575.fqn:null);
switch (G__17575__$1) {
case "read-source":
var map__17576 = data;
var map__17576__$1 = cljs.core.__destructure_map(map__17576);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17576__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17576__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17577 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17577__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17577,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17577);
var G__17577__$2 = (cljs.core.truth_((function (){var fexpr__17578 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17578.cljs$core$IFn$_invoke$arity$1 ? fexpr__17578.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17578.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17577__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17577__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17577__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17577__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17579 = top_data;
var G__17579__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17579,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17579);
var G__17579__$2 = (cljs.core.truth_((function (){var fexpr__17580 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17580.cljs$core$IFn$_invoke$arity$1 ? fexpr__17580.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17580.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17579__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17579__$1);
var G__17579__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17579__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17579__$2);
var G__17579__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17579__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17579__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17579__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17579__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17581 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17581,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17581,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17581,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17581,(3),null);
var G__17584 = top_data;
var G__17584__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17584,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17584);
var G__17584__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17584__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17584__$1);
var G__17584__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17584__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17584__$2);
var G__17584__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17584__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17584__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17584__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17584__$4;
}

break;
case "execution":
var vec__17585 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17585,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17585,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17585,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17585,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17567_SHARP_){
var or__5045__auto__ = (p1__17567_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__17588 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17588.cljs$core$IFn$_invoke$arity$1 ? fexpr__17588.cljs$core$IFn$_invoke$arity$1(p1__17567_SHARP_) : fexpr__17588.call(null,p1__17567_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__17589 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17589__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17589,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17589);
var G__17589__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17589__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17589__$1);
var G__17589__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17589__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17589__$2);
var G__17589__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17589__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17589__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17589__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17589__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17575__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17594){
var map__17595 = p__17594;
var map__17595__$1 = cljs.core.__destructure_map(map__17595);
var triage_data = map__17595__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__17599 = phase;
var G__17599__$1 = (((G__17599 instanceof cljs.core.Keyword))?G__17599.fqn:null);
switch (G__17599__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17604 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17605 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17606 = loc;
var G__17607 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17616_17739 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17617_17740 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17618_17741 = true;
var _STAR_print_fn_STAR__temp_val__17619_17742 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17618_17741);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17619_17742);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17590_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17590_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17617_17740);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17616_17739);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17604,G__17605,G__17606,G__17607) : format.call(null,G__17604,G__17605,G__17606,G__17607));

break;
case "macroexpansion":
var G__17628 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__17629 = cause_type;
var G__17630 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17631 = loc;
var G__17632 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17628,G__17629,G__17630,G__17631,G__17632) : format.call(null,G__17628,G__17629,G__17630,G__17631,G__17632));

break;
case "compile-syntax-check":
var G__17633 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__17634 = cause_type;
var G__17635 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17636 = loc;
var G__17637 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17633,G__17634,G__17635,G__17636,G__17637) : format.call(null,G__17633,G__17634,G__17635,G__17636,G__17637));

break;
case "compilation":
var G__17638 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__17639 = cause_type;
var G__17640 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17641 = loc;
var G__17642 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17638,G__17639,G__17640,G__17641,G__17642) : format.call(null,G__17638,G__17639,G__17640,G__17641,G__17642));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__17643 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__17644 = symbol;
var G__17645 = loc;
var G__17646 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17647_17743 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17648_17744 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17649_17745 = true;
var _STAR_print_fn_STAR__temp_val__17650_17746 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17649_17745);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17650_17746);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17593_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17593_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17648_17744);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17647_17743);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17643,G__17644,G__17645,G__17646) : format.call(null,G__17643,G__17644,G__17645,G__17646));
} else {
var G__17651 = "Execution error%s at %s(%s).\n%s\n";
var G__17652 = cause_type;
var G__17653 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17654 = loc;
var G__17655 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17651,G__17652,G__17653,G__17654,G__17655) : format.call(null,G__17651,G__17652,G__17653,G__17654,G__17655));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17599__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
