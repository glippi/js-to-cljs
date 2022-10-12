goog.provide('js_to_cljs.core');
var module$node_modules$acorn$dist$acorn=shadow.js.require("module$node_modules$acorn$dist$acorn", {});
if((typeof js_to_cljs !== 'undefined') && (typeof js_to_cljs.core !== 'undefined') && (typeof js_to_cljs.core.parse_frag !== 'undefined')){
} else {
js_to_cljs.core.parse_frag = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__25589 = cljs.core.get_global_hierarchy;
return (fexpr__25589.cljs$core$IFn$_invoke$arity$0 ? fexpr__25589.cljs$core$IFn$_invoke$arity$0() : fexpr__25589.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js-to-cljs.core","parse-frag"),(function (step,state){
if(cljs.core.truth_((function (){var and__5043__auto__ = step;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__5043__auto__;
}
})())){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(state),step);
} else {
}

return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(step);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
js_to_cljs.core.block = (function js_to_cljs$core$block(bodies,state,sep){
var ops = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25590_SHARP_){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(p1__25590_SHARP_,state);
}),bodies));
var body = clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,ops);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_((function (){var and__5043__auto__ = locals;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq(cljs.core.deref(locals));
} else {
return and__5043__auto__;
}
})())){
return ["(let [",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(locals)], 0))),"] ",body,")"].join('');
} else {
if(((cljs.core.not(new cljs.core.Keyword(null,"single?","single?",-593061958).cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ops),(1))))){
return body;
} else {
return ["(do ",body,")"].join('');

}
}
});
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"Program",(function (step,state){
return js_to_cljs.core.block(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(step),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"root?","root?",-2045639518),true),"\n");
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"BlockStatement",(function (step,state){
return js_to_cljs.core.block(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(step),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"root?","root?",-2045639518),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], 0))," ");
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ExpressionStatement",(function (step,state){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expression","expression",202311876).cljs$core$IFn$_invoke$arity$1(step),state);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ForStatement",(function (p__25591,state){
var map__25592 = p__25591;
var map__25592__$1 = cljs.core.__destructure_map(map__25592);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25592__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25592__$1,new cljs.core.Keyword(null,"test","test",577538877));
var update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25592__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25592__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var vec__25593 = (cljs.core.truth_(init)?js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"declarations","declarations",1621100858).cljs$core$IFn$_invoke$arity$1(init)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"root?","root?",-2045639518),false)):null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25593,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25593,(1),null);
var test__$1 = (cljs.core.truth_(test)?js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(test,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true)):"true");
var add_let_QMARK_ = (function (){var and__5043__auto__ = init;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(state));
} else {
return and__5043__auto__;
}
})();
return [(cljs.core.truth_(add_let_QMARK_)?["(let [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),"] "].join(''):null),"(while ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test__$1)," ",js_to_cljs.core.block(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(body),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"root?","root?",-2045639518),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"single?","single?",-593061958),false,new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], 0))," "),(cljs.core.truth_(update)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(update,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),false)))].join(''):null),")",(cljs.core.truth_(add_let_QMARK_)?")":null)].join('');
}));
js_to_cljs.core.get_operator = (function js_to_cljs$core$get_operator(operator){
var G__25596 = operator;
switch (G__25596) {
case "&&":
return "and";

break;
case "||":
return "or";

break;
case "==":
return "=";

break;
case "===":
return "=";

break;
case "!=":
return "not=";

break;
case "!==":
return "not=";

break;
case "!":
return "not";

break;
default:
return operator;

}
});
js_to_cljs.core.binary_exp = (function js_to_cljs$core$binary_exp(p__25597,state){
var map__25598 = p__25597;
var map__25598__$1 = cljs.core.__destructure_map(map__25598);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25598__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25598__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25598__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true);
var left__$1 = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(left,state__$1);
var right__$1 = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(right,state__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(operator,"??")){
return ["(if (some? ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left__$1),") ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(right__$1),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.get_operator(operator))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(right__$1),")"].join('');
}
});
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"UnaryExpression",(function (p__25599,state){
var map__25600 = p__25599;
var map__25600__$1 = cljs.core.__destructure_map(map__25600);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25600__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var argument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25600__$1,new cljs.core.Keyword(null,"argument","argument",1183001841));
var operator__$1 = js_to_cljs.core.get_operator(operator);
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(argument,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true))),")"].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"BinaryExpression",(function (step,state){
return js_to_cljs.core.binary_exp(step,state);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"LogicalExpression",(function (step,state){
return js_to_cljs.core.binary_exp(step,state);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"Literal",(function (p__25601,_){
var map__25602 = p__25601;
var map__25602__$1 = cljs.core.__destructure_map(map__25602);
var p = map__25602__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25602__$1,new cljs.core.Keyword(null,"value","value",305978217));
var regex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25602__$1,new cljs.core.Keyword(null,"regex","regex",939488856));
if(cljs.core.truth_(regex)){
var temp__5802__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(regex));
if(cljs.core.truth_(temp__5802__auto__)){
var flags = temp__5802__auto__;
return ["#",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["(?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flags),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(regex))].join('')], 0))].join('');
} else {
return ["#",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(regex)], 0))].join('');
}
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"Identifier",(function (p__25603,_){
var map__25604 = p__25603;
var map__25604__$1 = cljs.core.__destructure_map(map__25604);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25604__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return name;
}));
js_to_cljs.core.call_expr = (function js_to_cljs$core$call_expr(p__25606,state){
var map__25607 = p__25606;
var map__25607__$1 = cljs.core.__destructure_map(map__25607);
var callee = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25607__$1,new cljs.core.Keyword(null,"callee","callee",-156445786));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25607__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var callee__$1 = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(callee,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"special-js?","special-js?",-1908923973),true], 0)));
var args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25605_SHARP_){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(p1__25605_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true));
}),arguments$);
var vec__25608 = cljs.core.split_with(cljs.core.complement(cljs.core.vector_QMARK_),args);
var non_rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25608,(0),null);
var vec__25611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25608,(1),null);
var seq__25612 = cljs.core.seq(vec__25611);
var first__25613 = cljs.core.first(seq__25612);
var seq__25612__$1 = cljs.core.next(seq__25612);
var vec__25614 = first__25613;
var fst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25614,(0),null);
var rst = seq__25612__$1;
var rest = ((cljs.core.seq(rst))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["(concat ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fst)," [",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",rst),"])"].join('')], null):(cljs.core.truth_(fst)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fst], null):null));
if(typeof callee__$1 === 'string'){
if(cljs.core.truth_(rest)){
return ["(apply ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [callee__$1], null),non_rest,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0))),")"].join('');
} else {
return ["(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cons(callee__$1,args)),")"].join('');
}
} else {
return ["(.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(callee__$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(callee__$1))," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args),")"].join('');
}
});
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"CallExpression",(function (prop,state){
return js_to_cljs.core.call_expr(prop,state);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"NewExpression",(function (props,state){
return js_to_cljs.core.call_expr(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callee","callee",-156445786),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.str,"."),state);
}));
js_to_cljs.core.if_then_else = (function js_to_cljs$core$if_then_else(p__25617,state){
var map__25618 = p__25617;
var map__25618__$1 = cljs.core.__destructure_map(map__25618);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25618__$1,new cljs.core.Keyword(null,"test","test",577538877));
var consequent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25618__$1,new cljs.core.Keyword(null,"consequent","consequent",234514643));
var alternate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25618__$1,new cljs.core.Keyword(null,"alternate","alternate",-931038644));
if(cljs.core.truth_(alternate)){
return ["(if ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(test,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(consequent,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(alternate,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true))),")"].join('');
} else {
return ["(when ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(test,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(consequent,state)),")"].join('');
}
});
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"IfStatement",(function (element,state){
return js_to_cljs.core.if_then_else(element,state);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ConditionalExpression",(function (element,state){
return js_to_cljs.core.if_then_else(element,state);
}));
js_to_cljs.core.random_identifier = (function js_to_cljs$core$random_identifier(){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("-temp-");
});
js_to_cljs.core.to_obj_params = (function js_to_cljs$core$to_obj_params(fun,param){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25619){
var vec__25620 = p__25619;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25620,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," (.-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fun),")"].join('');
}),param);
});
js_to_cljs.core.to_default_param = (function js_to_cljs$core$to_default_param(p__25623){
var vec__25624 = p__25623;
var fun = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25624,(0),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25624,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fun,["(if (undefined? ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fun),") ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(default$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fun),")"].join('')], null);
});
js_to_cljs.core.normalize_params = (function js_to_cljs$core$normalize_params(params,state){
var params__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25627_SHARP_){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(p1__25627_SHARP_,state);
}),params);
var params_detailed = (function (){var iter__5523__auto__ = (function js_to_cljs$core$normalize_params_$_iter__25628(s__25629){
return (new cljs.core.LazySeq(null,(function (){
var s__25629__$1 = s__25629;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25629__$1);
if(temp__5804__auto__){
var s__25629__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25629__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__25629__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__25631 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__25630 = (0);
while(true){
if((i__25630 < size__5522__auto__)){
var param = cljs.core._nth(c__5521__auto__,i__25630);
cljs.core.chunk_append(b__25631,((cljs.core.vector_QMARK_(param))?((cljs.core.vector_QMARK_(cljs.core.first(param)))?(function (){var id = js_to_cljs.core.random_identifier();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fun","fun",-1265158045),id,new cljs.core.Keyword(null,"extracts-to","extracts-to",-157612342),js_to_cljs.core.to_obj_params(id,param)], null);
})():new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fun","fun",-1265158045),cljs.core.first(param),new cljs.core.Keyword(null,"extracts-to","extracts-to",-157612342),js_to_cljs.core.to_default_param(param)], null)):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fun","fun",-1265158045),param], null)));

var G__25750 = (i__25630 + (1));
i__25630 = G__25750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25631),js_to_cljs$core$normalize_params_$_iter__25628(cljs.core.chunk_rest(s__25629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25631),null);
}
} else {
var param = cljs.core.first(s__25629__$2);
return cljs.core.cons(((cljs.core.vector_QMARK_(param))?((cljs.core.vector_QMARK_(cljs.core.first(param)))?(function (){var id = js_to_cljs.core.random_identifier();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fun","fun",-1265158045),id,new cljs.core.Keyword(null,"extracts-to","extracts-to",-157612342),js_to_cljs.core.to_obj_params(id,param)], null);
})():new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fun","fun",-1265158045),cljs.core.first(param),new cljs.core.Keyword(null,"extracts-to","extracts-to",-157612342),js_to_cljs.core.to_default_param(param)], null)):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fun","fun",-1265158045),param], null)),js_to_cljs$core$normalize_params_$_iter__25628(cljs.core.rest(s__25629__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(params__$1);
})();
var let_params = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"extracts-to","extracts-to",-157612342),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params_detailed], 0)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fun","fun",-1265158045),params_detailed)),new cljs.core.Keyword(null,"lets","lets",-1868055709),((cljs.core.seq(let_params))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",let_params):null)], null);
});
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"FunctionDeclaration",(function (p__25632,state){
var map__25633 = p__25632;
var map__25633__$1 = cljs.core.__destructure_map(map__25633);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25633__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25633__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25633__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var body__$1 = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(body,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),false));
var map__25634 = js_to_cljs.core.normalize_params(params,state);
var map__25634__$1 = cljs.core.__destructure_map(map__25634);
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25634__$1,new cljs.core.Keyword(null,"params","params",710516235));
var lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25634__$1,new cljs.core.Keyword(null,"lets","lets",-1868055709));
var norm_body = (cljs.core.truth_(lets)?["(let [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lets),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(body__$1),")"].join(''):body__$1);
return ["(defn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(id,state))," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params__$1),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(norm_body),")"].join('');
}));
js_to_cljs.core.parse_fun = (function js_to_cljs$core$parse_fun(p__25636,state){
var map__25637 = p__25636;
var map__25637__$1 = cljs.core.__destructure_map(map__25637);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25637__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25637__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25637__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25635_SHARP_){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(p1__25635_SHARP_,state);
}),params));
var body__$1 = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(body,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),false));
return ["(fn",(function (){var temp__5804__auto__ = (function (){var G__25639 = id;
if((G__25639 == null)){
return null;
} else {
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(G__25639,state);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var name = temp__5804__auto__;
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return null;
}
})()," [",params__$1,"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(body__$1),")"].join('');
});
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"FunctionExpression",(function (step,state){
return js_to_cljs.core.parse_fun(step,state);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ArrowFunctionExpression",(function (step,state){
return js_to_cljs.core.parse_fun(step,state);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ReturnStatement",(function (p__25640,state){
var map__25641 = p__25640;
var map__25641__$1 = cljs.core.__destructure_map(map__25641);
var argument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25641__$1,new cljs.core.Keyword(null,"argument","argument",1183001841));
if(cljs.core.truth_(argument)){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(argument,state);
} else {
return "(js* \"return\")";
}
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ForOfStatement",(function (p__25642,state){
var map__25643 = p__25642;
var map__25643__$1 = cljs.core.__destructure_map(map__25643);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25643__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25643__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25643__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return ["(doseq [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"declarations","declarations",1621100858).cljs$core$IFn$_invoke$arity$1(left)))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(right,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true))),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(body,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),false))),")"].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ForInStatement",(function (p__25644,state){
var map__25645 = p__25644;
var map__25645__$1 = cljs.core.__destructure_map(map__25645);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25645__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25645__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25645__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return ["(doseq [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"declarations","declarations",1621100858).cljs$core$IFn$_invoke$arity$1(left)))))," (js/Object.keys ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(right,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true))),")] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(body,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),false))),")"].join('');
}));
js_to_cljs.core.template_lit = (function js_to_cljs$core$template_lit(tag,p__25647,state){
var map__25648 = p__25647;
var map__25648__$1 = cljs.core.__destructure_map(map__25648);
var expressions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25648__$1,new cljs.core.Keyword(null,"expressions","expressions",255689909));
var quasis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25648__$1,new cljs.core.Keyword(null,"quasis","quasis",295513357));
if(cljs.core.truth_(tag)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"cljs-requires","cljs-requires",2038654418).cljs$core$IFn$_invoke$arity$1(state),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shadow.cljs.modern","shadow.cljs.modern",-1528387157,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"modern","modern",1883960323,null)], null));
} else {
}

var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true);
var elems = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(quasis,expressions);
var parsed = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25646_SHARP_){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(p1__25646_SHARP_,state__$1);
}),elems);
var last = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(quasis),state__$1);
var parsed__$1 = (function (){var G__25649 = parsed;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last,"\"\"")){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__25649,last);
} else {
return G__25649;
}
})();
if(cljs.core.truth_(tag)){
return ["(modern/js-template ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(tag,state__$1))," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",parsed__$1),")"].join('');
} else {
if(cljs.core.seq(parsed__$1)){
return ["(str ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",parsed__$1),")"].join('');
} else {
return "\"\"";

}
}
});
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"TaggedTemplateExpression",(function (p__25650,state){
var map__25651 = p__25650;
var map__25651__$1 = cljs.core.__destructure_map(map__25651);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25651__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var quasi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25651__$1,new cljs.core.Keyword(null,"quasi","quasi",-537288821));
return js_to_cljs.core.template_lit(tag,quasi,state);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"TemplateLiteral",(function (prop,state){
return js_to_cljs.core.template_lit(null,prop,state);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"TemplateElement",(function (p__25652,_){
var map__25653 = p__25652;
var map__25653__$1 = cljs.core.__destructure_map(map__25653);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25653__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cooked","cooked",-1929433679).cljs$core$IFn$_invoke$arity$1(value)], 0));
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ThrowStatement",(function (p__25654,state){
var map__25655 = p__25654;
var map__25655__$1 = cljs.core.__destructure_map(map__25655);
var argument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25655__$1,new cljs.core.Keyword(null,"argument","argument",1183001841));
return ["(throw ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(argument,state)),")"].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"AssignmentExpression",(function (p__25656,state){
var map__25657 = p__25656;
var map__25657__$1 = cljs.core.__destructure_map(map__25657);
var a = map__25657__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25657__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25657__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25657__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var vars = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(left,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"special-js?","special-js?",-1908923973),true], 0)));
var val = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(right,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true));
var attr = (new cljs.core.Delay((function (){
return cljs.core.second(vars);
}),null));
var obj = (new cljs.core.Delay((function (){
var f = cljs.core.first(vars);
if(cljs.core.vector_QMARK_(f)){
return ["(.-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(f))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(f)),")"].join('');
} else {
return f;
}
}),null));
if(typeof vars === 'string'){
return ["(js* ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["~{} ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)," ~{}"].join('')], 0))," ",vars," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),")"].join('');
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"computed","computed",-1482016762).cljs$core$IFn$_invoke$arity$1(left))){
return ["(aset ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(obj))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(attr))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),")"].join('');
} else {
return ["(aset ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(obj))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(attr)], 0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),")"].join('');

}
}
}));
js_to_cljs.core.make_destr_def = (function js_to_cljs$core$make_destr_def(p__25658,val){
var vec__25659 = p__25658;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25659,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25659,(1),null);
return ["(def ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," (.-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),"))"].join('');
});
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"VariableDeclaration",(function (p__25664,state){
var map__25665 = p__25664;
var map__25665__$1 = cljs.core.__destructure_map(map__25665);
var declarations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25665__$1,new cljs.core.Keyword(null,"declarations","declarations",1621100858));
var declarations__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25662_SHARP_){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(p1__25662_SHARP_,state);
}),declarations);
if(cljs.core.truth_(new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(state))){
var defs = (function (){var iter__5523__auto__ = (function js_to_cljs$core$iter__25666(s__25667){
return (new cljs.core.LazySeq(null,(function (){
var s__25667__$1 = s__25667;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25667__$1);
if(temp__5804__auto__){
var s__25667__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25667__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__25667__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__25669 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__25668 = (0);
while(true){
if((i__25668 < size__5522__auto__)){
var vec__25670 = cljs.core._nth(c__5521__auto__,i__25668);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25670,(1),null);
cljs.core.chunk_append(b__25669,((cljs.core.vector_QMARK_(k))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(1)))?js_to_cljs.core.make_destr_def(cljs.core.first(k),v):(function (){var sym = js_to_cljs.core.random_identifier();
var inner = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__25668,sym,vec__25670,k,v,c__5521__auto__,size__5522__auto__,b__25669,s__25667__$2,temp__5804__auto__,declarations__$1,map__25665,map__25665__$1,declarations){
return (function (p1__25663_SHARP_){
return js_to_cljs.core.make_destr_def(p1__25663_SHARP_,sym);
});})(i__25668,sym,vec__25670,k,v,c__5521__auto__,size__5522__auto__,b__25669,s__25667__$2,temp__5804__auto__,declarations__$1,map__25665,map__25665__$1,declarations))
,k);
return ["(let [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"] ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",inner),")"].join('');
})()):((((typeof v === 'string') && (clojure.string.starts_with_QMARK_(v,"(fn "))))?["(defn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(v,(4))].join(''):["(def ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),")"].join(''))));

var G__25751 = (i__25668 + (1));
i__25668 = G__25751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25669),js_to_cljs$core$iter__25666(cljs.core.chunk_rest(s__25667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25669),null);
}
} else {
var vec__25673 = cljs.core.first(s__25667__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25673,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25673,(1),null);
return cljs.core.cons(((cljs.core.vector_QMARK_(k))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(1)))?js_to_cljs.core.make_destr_def(cljs.core.first(k),v):(function (){var sym = js_to_cljs.core.random_identifier();
var inner = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym,vec__25673,k,v,s__25667__$2,temp__5804__auto__,declarations__$1,map__25665,map__25665__$1,declarations){
return (function (p1__25663_SHARP_){
return js_to_cljs.core.make_destr_def(p1__25663_SHARP_,sym);
});})(sym,vec__25673,k,v,s__25667__$2,temp__5804__auto__,declarations__$1,map__25665,map__25665__$1,declarations))
,k);
return ["(let [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"] ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",inner),")"].join('');
})()):((((typeof v === 'string') && (clojure.string.starts_with_QMARK_(v,"(fn "))))?["(defn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(v,(4))].join(''):["(def ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),")"].join(''))),js_to_cljs$core$iter__25666(cljs.core.rest(s__25667__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(declarations__$1);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",defs);
} else {
return null;
}
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ContinueStatement",(function (_,___$1){
return "(js* \"continue\")";
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"VariableDeclarator",(function (p__25676,state){
var map__25677 = p__25676;
var map__25677__$1 = cljs.core.__destructure_map(map__25677);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25677__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25677__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var vars = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(state);
var init__$1 = (cljs.core.truth_(init)?js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(init,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true)):"nil");
var body = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true)),init__$1], null);
if(cljs.core.truth_(vars)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(vars,cljs.core.conj,body);
} else {
return body;
}
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ObjectExpression",(function (p__25679,state){
var map__25680 = p__25679;
var map__25680__$1 = cljs.core.__destructure_map(map__25680);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25680__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var kvs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25681){
var vec__25682 = p__25681;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25682,(1),null);
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25678_SHARP_){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(p1__25678_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true));
}),properties));
return ["#js {",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",kvs),"}"].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ArrayExpression",(function (p__25686,state){
var map__25687 = p__25686;
var map__25687__$1 = cljs.core.__destructure_map(map__25687);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25687__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25685_SHARP_){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(p1__25685_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true));
}),elements);
return ["#js [",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",vals),"]"].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"Property",(function (p__25688,state){
var map__25689 = p__25688;
var map__25689__$1 = cljs.core.__destructure_map(map__25689);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25689__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25689__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true)),js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(value,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true))], null);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"MemberExpression",(function (p__25690,state){
var map__25691 = p__25690;
var map__25691__$1 = cljs.core.__destructure_map(map__25691);
var m = map__25691__$1;
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25691__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25691__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var computed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25691__$1,new cljs.core.Keyword(null,"computed","computed",-1482016762));
var obj = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(object,state);
var prop = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(property,state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"special-js?","special-js?",-1908923973).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj,prop], null);
} else {
if(cljs.core.not(computed)){
return ["(.-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj),")"].join('');
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\"?\d+\"?/,prop))){
return ["(nth ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(prop)),")"].join('');
} else {
return ["(aget ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),")"].join('');

}
}
}
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ObjectPattern",(function (p__25693,state){
var map__25694 = p__25693;
var map__25694__$1 = cljs.core.__destructure_map(map__25694);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25694__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25692_SHARP_){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(p1__25692_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true));
}),properties);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"AssignmentPattern",(function (p__25695,state){
var map__25696 = p__25695;
var map__25696__$1 = cljs.core.__destructure_map(map__25696);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25696__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25696__$1,new cljs.core.Keyword(null,"right","right",-452581833));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(left,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true)),js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(right,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true))], null);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"SpreadElement",(function (p__25697,state){
var map__25698 = p__25697;
var map__25698__$1 = cljs.core.__destructure_map(map__25698);
var argument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25698__$1,new cljs.core.Keyword(null,"argument","argument",1183001841));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(argument,state)], null);
}));
js_to_cljs.core.gen_properties = (function js_to_cljs$core$gen_properties(class$,p__25699){
var vec__25700 = p__25699;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25700,(0),null);
var map__25703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25700,(1),null);
var map__25703__$1 = cljs.core.__destructure_map(map__25703);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25703__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25703__$1,new cljs.core.Keyword(null,"set","set",304602554));
return ["(.defineProperty js/Object (.-prototype ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),") ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([property], 0))," #js {",(cljs.core.truth_(get)?[":get (fn [] ",clojure.string.replace_first(get,/.*this\]/,"(this-as this")].join(''):null),(cljs.core.truth_(set)?(function (){var vec__25707 = cljs.core.re_find(/\[this (.*)\]/,set);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25707,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25707,(1),null);
return [":set (fn [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params),"] ",clojure.string.replace_first(set,/.*this.*\]/,"(this-as this")].join('');
})():null),")})"].join('');
});
js_to_cljs.core.class_declaration = (function js_to_cljs$core$class_declaration(p__25711,state){
var map__25712 = p__25711;
var map__25712__$1 = cljs.core.__destructure_map(map__25712);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25712__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var superClass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25712__$1,new cljs.core.Keyword(null,"superClass","superClass",1620148005));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25712__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"cljs-requires","cljs-requires",2038654418).cljs$core$IFn$_invoke$arity$1(state),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shadow.cljs.modern","shadow.cljs.modern",-1528387157,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"modern","modern",1883960323,null)], null));

var class_name = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(id,state);
var map__25713 = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(body,state);
var map__25713__$1 = cljs.core.__destructure_map(map__25713);
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25713__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25713__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25713__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var super$ = (function (){var G__25714 = superClass;
if((G__25714 == null)){
return null;
} else {
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(G__25714,state);
}
})();
var defclass = ["(modern/defclass ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name),(cljs.core.truth_(super$)?[" (extends ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(super$),")"].join(''):null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(constructor$)?constructor$:"(constructor [this])")),((cljs.core.seq(methods$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cons(" Object",methods$)):null),")"].join('');
var G__25715 = defclass;
if(cljs.core.truth_(properties)){
return [G__25715,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cons("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25710_SHARP_){
return js_to_cljs.core.gen_properties(class_name,p1__25710_SHARP_);
}),properties)))].join('');
} else {
return G__25715;
}
});
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ClassDeclaration",(function (props,state){
return js_to_cljs.core.class_declaration(props,state);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ClassExpression",(function (props,state){
return js_to_cljs.core.class_declaration(props,state);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ClassBody",(function (p__25716,state){
var map__25717 = p__25716;
var map__25717__$1 = cljs.core.__destructure_map(map__25717);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25717__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"js-class?","js-class?",-1261991574),true);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,b){
var G__25718 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(b);
switch (G__25718) {
case "constructor":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(b,state__$1));

break;
case "get":
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword(null,"get","get",1683182755)], null),js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(b,state__$1));

break;
case "set":
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword(null,"set","set",304602554)], null),js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(b,state__$1));

break;
default:
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.conj,js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(b,state__$1));

}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentVector.EMPTY], null),body);
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"MethodDefinition",(function (p__25719,state){
var map__25720 = p__25719;
var map__25720__$1 = cljs.core.__destructure_map(map__25720);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25720__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25720__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__25721 = value;
var map__25721__$1 = cljs.core.__destructure_map(map__25721);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25721__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25721__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__25722 = js_to_cljs.core.normalize_params(params,state);
var map__25722__$1 = cljs.core.__destructure_map(map__25722);
var lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25722__$1,new cljs.core.Keyword(null,"lets","lets",-1868055709));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25722__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body__$1 = (function (){var G__25723 = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(body,state);
var G__25723__$1 = (((G__25723 == null))?null:cljs.core.not_empty(G__25723));
if((G__25723__$1 == null)){
return null;
} else {
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25723__$1)].join('');
}
})();
var norm_body = (cljs.core.truth_(lets)?[" (let [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lets),"]",body__$1,")"].join(''):body__$1);
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(key,state))," [this",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__25725 = params__$1;
if(cljs.core.seq(params__$1)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25725)].join('');
} else {
return G__25725;
}
})()),"]",norm_body,")"].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ThisExpression",(function (_,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"js-class?","js-class?",-1261991574).cljs$core$IFn$_invoke$arity$1(state))){
return "this";
} else {
return "(js* \"this\")";
}
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"TryStatement",(function (p__25726,state){
var map__25727 = p__25726;
var map__25727__$1 = cljs.core.__destructure_map(map__25727);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25727__$1,new cljs.core.Keyword(null,"block","block",664686210));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25727__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var finalizer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25727__$1,new cljs.core.Keyword(null,"finalizer","finalizer",21832092));
return ["(try ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(block,state)),(cljs.core.truth_(handler)?[" (catch :default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"param","param",2013631823).cljs$core$IFn$_invoke$arity$1(handler),state))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(handler),state)),")"].join(''):null),(cljs.core.truth_(finalizer)?[" (finally ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(finalizer,state)),")"].join(''):null),")"].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"SwitchStatement",(function (p__25729,state){
var map__25730 = p__25729;
var map__25730__$1 = cljs.core.__destructure_map(map__25730);
var discriminant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25730__$1,new cljs.core.Keyword(null,"discriminant","discriminant",861681484));
var cases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25730__$1,new cljs.core.Keyword(null,"cases","cases",253862775));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true);
var test = js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(discriminant,state__$1);
var cases__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25728_SHARP_){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(p1__25728_SHARP_,state__$1);
}),cases);
return ["(case ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cases__$1),")"].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"SwitchCase",(function (p__25731,state){
var map__25732 = p__25731;
var map__25732__$1 = cljs.core.__destructure_map(map__25732);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25732__$1,new cljs.core.Keyword(null,"test","test",577538877));
var consequent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25732__$1,new cljs.core.Keyword(null,"consequent","consequent",234514643));
var body = js_to_cljs.core.block(consequent,state," ");
if(cljs.core.truth_(test)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(test,state))," ",body].join('');
} else {
return body;
}
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"ArrayPattern",(function (p__25734,state){
var map__25735 = p__25734;
var map__25735__$1 = cljs.core.__destructure_map(map__25735);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25735__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return ["[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25733_SHARP_){
return js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(p1__25733_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true));
}),elements)),"]"].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"WhileStatement",(function (p__25736,state){
var map__25737 = p__25736;
var map__25737__$1 = cljs.core.__destructure_map(map__25737);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25737__$1,new cljs.core.Keyword(null,"test","test",577538877));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25737__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return ["(while ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(test,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(body,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),false))),")"].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"BreakStatement",(function (_,___$1){
return null;
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"RestElement",(function (p__25738,state){
var map__25739 = p__25738;
var map__25739__$1 = cljs.core.__destructure_map(map__25739);
var argument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25739__$1,new cljs.core.Keyword(null,"argument","argument",1183001841));
return ["& ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(argument,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true)))].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,"UpdateExpression",(function (p__25740,state){
var map__25741 = p__25740;
var map__25741__$1 = cljs.core.__destructure_map(map__25741);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25741__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25741__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var argument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25741__$1,new cljs.core.Keyword(null,"argument","argument",1183001841));
var macro = (cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator),"~{}"].join(''):["~{}",cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)].join(''));
return ["(js* ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([macro], 0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(argument,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"single?","single?",-593061958),true))),")"].join('');
}));
js_to_cljs.core.parse_frag.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (dbg,state){
cljs.core.tap_GT_(dbg);

js_to_cljs.core.t = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(dbg);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(dbg))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(dbg)], null));
}));
js_to_cljs.core.from_js = (function js_to_cljs$core$from_js(code){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(JSON.stringify(module$node_modules$acorn$dist$acorn.parse(code,({"ecmaVersion": (2020)})))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
js_to_cljs.core.add_requires = (function js_to_cljs$core$add_requires(code,requires){
var G__25742 = code;
if(cljs.core.seq(requires)){
return ["(ns your.ns (:require ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",requires),")) ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25742)].join('');
} else {
return G__25742;
}
});
js_to_cljs.core.parse_str = (function js_to_cljs$core$parse_str(var_args){
var G__25744 = arguments.length;
switch (G__25744) {
case 1:
return js_to_cljs.core.parse_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return js_to_cljs.core.parse_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(js_to_cljs.core.parse_str.cljs$core$IFn$_invoke$arity$1 = (function (code){
var reqs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
return js_to_cljs.core.add_requires(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(js_to_cljs.core.from_js(code),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cljs-requires","cljs-requires",2038654418),reqs,new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null)),cljs.core.deref(reqs));
}));

(js_to_cljs.core.parse_str.cljs$core$IFn$_invoke$arity$2 = (function (code,opts){
var reqs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var pepe = js_to_cljs.core.add_requires(js_to_cljs.core.parse_frag.cljs$core$IFn$_invoke$arity$2(js_to_cljs.core.from_js(code),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"format-opts","format-opts",-1172531713).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"cljs-requires","cljs-requires",2038654418),reqs)),cljs.core.deref(reqs));
if(cljs.core.truth_(pepe)){
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$3(cljs.core.not(new cljs.core.Keyword(null,"disable","disable",1717637504).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"zprint-opts","zprint-opts",-1124124318).cljs$core$IFn$_invoke$arity$1(opts))),"file: example.cljs",new cljs.core.Keyword(null,"zprint-opts","zprint-opts",-1124124318).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return null;
}
}));

(js_to_cljs.core.parse_str.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=js_to_cljs.core.js.map
