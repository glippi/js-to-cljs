goog.provide('rewrite_clj.node.token');
rewrite_clj.node.token.choose_qualifier = (function rewrite_clj$node$token$choose_qualifier(map_qualifier,sym_qualifier){
if(cljs.core.not((function (){var and__5043__auto__ = map_qualifier;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(sym_qualifier));
} else {
return and__5043__auto__;
}
})())){
var or__5045__auto__ = sym_qualifier;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return map_qualifier;
}
} else {
return null;
}
});
rewrite_clj.node.token.symbol_qualifier = (function rewrite_clj$node$token$symbol_qualifier(value){
if(cljs.core.truth_((function (){var and__5043__auto__ = (value instanceof cljs.core.Symbol);
if(and__5043__auto__){
return cljs.core.namespace(value);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),cljs.core.namespace(value)], null);
} else {
return null;
}
});
rewrite_clj.node.token.symbol_sexpr = (function rewrite_clj$node$token$symbol_sexpr(value,map_qualifier,p__10371){
var map__10372 = p__10371;
var map__10372__$1 = cljs.core.__destructure_map(map__10372);
var auto_resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10372__$1,new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983));
var q = rewrite_clj.node.token.choose_qualifier(map_qualifier,rewrite_clj.node.token.symbol_qualifier(value));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var G__10373 = (cljs.core.truth_(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351).cljs$core$IFn$_invoke$arity$1(q))?(function (){var G__10375 = (function (){var or__5045__auto__ = (function (){var G__10376 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(q);
if((G__10376 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__10376);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"current","current",-1088038603);
}
})();
var fexpr__10374 = (function (){var or__5045__auto__ = auto_resolve;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return rewrite_clj.node.protocols.default_auto_resolve;
}
})();
return (fexpr__10374.cljs$core$IFn$_invoke$arity$1 ? fexpr__10374.cljs$core$IFn$_invoke$arity$1(G__10375) : fexpr__10374.call(null,G__10375));
})():new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(q));
if((G__10373 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10373);
}
})(),cljs.core.name(value));
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.token.TokenNode = (function (value,string_value,__meta,__extmap,__hash){
this.value = value;
this.string_value = string_value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.token.TokenNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k10378,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__10387 = k10378;
var G__10387__$1 = (((G__10387 instanceof cljs.core.Keyword))?G__10387.fqn:null);
switch (G__10387__$1) {
case "value":
return self__.value;

break;
case "string-value":
return self__.string_value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10378,else__5346__auto__);

}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__10388){
var vec__10389 = p__10388;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10389,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10389,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#rewrite-clj.node.token.TokenNode{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value],null))], null),self__.__extmap));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10377){
var self__ = this;
var G__10377__$1 = this;
return (new cljs.core.RecordIter((0),G__10377__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string-value","string-value",1109600561)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1106307029 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10379,other10380){
var self__ = this;
var this10379__$1 = this;
return (((!((other10380 == null)))) && ((((this10379__$1.constructor === other10380.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10379__$1.value,other10380.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10379__$1.string_value,other10380.string_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10379__$1.__extmap,other10380.__extmap)))))))));
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_ndoe){
var self__ = this;
var _ndoe__$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return self__.value;
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.count(self__.string_value);
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.string_value;
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k10378){
var self__ = this;
var this__5350__auto____$1 = this;
var G__10397 = k10378;
var G__10397__$1 = (((G__10397 instanceof cljs.core.Keyword))?G__10397.fqn:null);
switch (G__10397__$1) {
case "value":
case "string-value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k10378);

}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__10377){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__10398 = cljs.core.keyword_identical_QMARK_;
var expr__10399 = k__5352__auto__;
if(cljs.core.truth_((pred__10398.cljs$core$IFn$_invoke$arity$2 ? pred__10398.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__10399) : pred__10398.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__10399)))){
return (new rewrite_clj.node.token.TokenNode(G__10377,self__.string_value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10398.cljs$core$IFn$_invoke$arity$2 ? pred__10398.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__10399) : pred__10398.call(null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__10399)))){
return (new rewrite_clj.node.token.TokenNode(self__.value,G__10377,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__10377),null));
}
}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value,null))], null),self__.__extmap));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__10377){
var self__ = this;
var this__5342__auto____$1 = this;
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,G__10377,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(rewrite_clj.node.token.TokenNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"string-value","string-value",-1544835208,null)], null);
}));

(rewrite_clj.node.token.TokenNode.cljs$lang$type = true);

(rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.token/TokenNode",null,(1),null));
}));

(rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"rewrite-clj.node.token/TokenNode");
}));

/**
 * Positional factory function for rewrite-clj.node.token/TokenNode.
 */
rewrite_clj.node.token.__GT_TokenNode = (function rewrite_clj$node$token$__GT_TokenNode(value,string_value){
return (new rewrite_clj.node.token.TokenNode(value,string_value,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.token/TokenNode, taking a map of keywords to field values.
 */
rewrite_clj.node.token.map__GT_TokenNode = (function rewrite_clj$node$token$map__GT_TokenNode(G__10381){
var extmap__5385__auto__ = (function (){var G__10405 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10381,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string-value","string-value",1109600561)], 0));
if(cljs.core.record_QMARK_(G__10381)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__10405);
} else {
return G__10405;
}
})();
return (new rewrite_clj.node.token.TokenNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__10381),new cljs.core.Keyword(null,"string-value","string-value",1109600561).cljs$core$IFn$_invoke$arity$1(G__10381),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.protocols.MapQualifiable}
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.token.SymbolNode = (function (value,string_value,map_qualifier,__meta,__extmap,__hash){
this.value = value;
this.string_value = string_value;
this.map_qualifier = map_qualifier;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.token.SymbolNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k10407,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__10412 = k10407;
var G__10412__$1 = (((G__10412 instanceof cljs.core.Keyword))?G__10412.fqn:null);
switch (G__10412__$1) {
case "value":
return self__.value;

break;
case "string-value":
return self__.string_value;

break;
case "map-qualifier":
return self__.map_qualifier;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10407,else__5346__auto__);

}
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__10413){
var vec__10414 = p__10413;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10414,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10414,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$MapQualifiable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$MapQualifiable$map_context_apply$arity$2 = (function (node,map_qualifier__$1){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),map_qualifier__$1);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$MapQualifiable$map_context_clear$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),null);
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#rewrite-clj.node.token.SymbolNode{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),self__.map_qualifier],null))], null),self__.__extmap));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10406){
var self__ = this;
var G__10406__$1 = this;
return (new cljs.core.RecordIter((0),G__10406__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string-value","string-value",1109600561),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new rewrite_clj.node.token.SymbolNode(self__.value,self__.string_value,self__.map_qualifier,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (2093419088 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10408,other10409){
var self__ = this;
var this10408__$1 = this;
return (((!((other10409 == null)))) && ((((this10408__$1.constructor === other10409.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10408__$1.value,other10409.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10408__$1.string_value,other10409.string_value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10408__$1.map_qualifier,other10409.map_qualifier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10408__$1.__extmap,other10409.__extmap)))))))))));
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.token.symbol_sexpr(self__.value,self__.map_qualifier,opts);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.count(self__.string_value);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.string_value;
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new rewrite_clj.node.token.SymbolNode(self__.value,self__.string_value,self__.map_qualifier,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k10407){
var self__ = this;
var this__5350__auto____$1 = this;
var G__10420 = k10407;
var G__10420__$1 = (((G__10420 instanceof cljs.core.Keyword))?G__10420.fqn:null);
switch (G__10420__$1) {
case "value":
case "string-value":
case "map-qualifier":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k10407);

}
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__10406){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__10421 = cljs.core.keyword_identical_QMARK_;
var expr__10422 = k__5352__auto__;
if(cljs.core.truth_((pred__10421.cljs$core$IFn$_invoke$arity$2 ? pred__10421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__10422) : pred__10421.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__10422)))){
return (new rewrite_clj.node.token.SymbolNode(G__10406,self__.string_value,self__.map_qualifier,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10421.cljs$core$IFn$_invoke$arity$2 ? pred__10421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__10422) : pred__10421.call(null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__10422)))){
return (new rewrite_clj.node.token.SymbolNode(self__.value,G__10406,self__.map_qualifier,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10421.cljs$core$IFn$_invoke$arity$2 ? pred__10421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),expr__10422) : pred__10421.call(null,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),expr__10422)))){
return (new rewrite_clj.node.token.SymbolNode(self__.value,self__.string_value,G__10406,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.token.SymbolNode(self__.value,self__.string_value,self__.map_qualifier,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__10406),null));
}
}
}
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),self__.map_qualifier,null))], null),self__.__extmap));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__10406){
var self__ = this;
var this__5342__auto____$1 = this;
return (new rewrite_clj.node.token.SymbolNode(self__.value,self__.string_value,self__.map_qualifier,G__10406,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(rewrite_clj.node.token.SymbolNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"string-value","string-value",-1544835208,null),new cljs.core.Symbol(null,"map-qualifier","map-qualifier",392413807,null)], null);
}));

(rewrite_clj.node.token.SymbolNode.cljs$lang$type = true);

(rewrite_clj.node.token.SymbolNode.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.token/SymbolNode",null,(1),null));
}));

(rewrite_clj.node.token.SymbolNode.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"rewrite-clj.node.token/SymbolNode");
}));

/**
 * Positional factory function for rewrite-clj.node.token/SymbolNode.
 */
rewrite_clj.node.token.__GT_SymbolNode = (function rewrite_clj$node$token$__GT_SymbolNode(value,string_value,map_qualifier){
return (new rewrite_clj.node.token.SymbolNode(value,string_value,map_qualifier,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.token/SymbolNode, taking a map of keywords to field values.
 */
rewrite_clj.node.token.map__GT_SymbolNode = (function rewrite_clj$node$token$map__GT_SymbolNode(G__10410){
var extmap__5385__auto__ = (function (){var G__10424 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10410,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string-value","string-value",1109600561),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720)], 0));
if(cljs.core.record_QMARK_(G__10410)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__10424);
} else {
return G__10424;
}
})();
return (new rewrite_clj.node.token.SymbolNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__10410),new cljs.core.Keyword(null,"string-value","string-value",1109600561).cljs$core$IFn$_invoke$arity$1(G__10410),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720).cljs$core$IFn$_invoke$arity$1(G__10410),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.token.TokenNode);
rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.token.SymbolNode);
/**
 * Returns true if `n` is a node representing a symbol.
 */
rewrite_clj.node.token.symbol_node_QMARK_ = (function rewrite_clj$node$token$symbol_node_QMARK_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),rewrite_clj.node.protocols.node_type(n));
});
/**
 * Create node for an unspecified token of `value`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/token-node 'sym) n/string)
 * ;; => "sym"
 * 
 * (-> (n/token-node 42) n/string)
 * ;; => "42"
 * ```
 */
rewrite_clj.node.token.token_node = (function rewrite_clj$node$token$token_node(var_args){
var G__10426 = arguments.length;
switch (G__10426) {
case 1:
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));

(rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2 = (function (value,string_value){
if((value instanceof cljs.core.Symbol)){
return rewrite_clj.node.token.__GT_SymbolNode(value,string_value,null);
} else {
return rewrite_clj.node.token.__GT_TokenNode(value,string_value);
}
}));

(rewrite_clj.node.token.token_node.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.node.token.js.map
