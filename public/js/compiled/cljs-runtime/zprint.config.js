goog.provide('zprint.config');
/**
 * Return version of this program.
 */
zprint.config.about = (function zprint$config$about(){
return "zprint-1.2.4";
});
zprint.config.zprintrc = ".zprintrc";
zprint.config.zprintedn = ".zprint.edn";
zprint.config.zprint_keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477)], null);
zprint.config.operational_options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"cwd-zprintrc?","cwd-zprintrc?",167207541),new cljs.core.Keyword(null,"parallel?","parallel?",-25273892),new cljs.core.Keyword(null,"search-config?","search-config?",-932850546),new cljs.core.Keyword(null,"url","url",276297046)], null);
zprint.config.explain_hide_keys = cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"configured?","configured?",642178633),new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872),new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408),new cljs.core.Keyword(null,"force-eol-blanks?","force-eol-blanks?",1917974011),new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947),new cljs.core.Keyword(null,"drop?","drop?",-2009514790),new cljs.core.Keyword(null,"dbg-ge","dbg-ge",257927017),new cljs.core.Keyword(null,"file?","file?",1755223728),new cljs.core.Keyword(null,"spaces?","spaces?",1967773960),new cljs.core.Keyword(null,"process-bang-zprint?","process-bang-zprint?",-1250782024),new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667),new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"return-cvec?","return-cvec?",1372433982),new cljs.core.Keyword(null,"test-for-eol-blanks?","test-for-eol-blanks?",676976305),new cljs.core.Keyword(null,"!zprint-elide-skip-next?","!zprint-elide-skip-next?",-325866990),new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"comma?","comma?",1532168963),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"elide","elide",-1239101386),new cljs.core.Keyword(null,"lines","lines",-700165781)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"dbg-local?","dbg-local?",-895545325),new cljs.core.Keyword(null,"hang-adjust","hang-adjust",-613514382),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null),new cljs.core.Keyword(null,"tuning","tuning",-48660925),new cljs.core.Keyword(null,"perf-vs-format","perf-vs-format",-1892061514),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"cache-path","cache-path",1799646239)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector-fn","vector-fn",1515528250),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581)], null)], true);
zprint.config.zfnstyle = cljs.core.PersistentHashMap.fromArrays(["map","binding","cond->","as->","with-local-vars","loop","defn","=","are","some->","if-not","when-first","when-some","defcc","fdef","if-let","doseq","try","s/fdef","with-redefs","matchm","defc","defcs","fn","for","defrecord","with-meta","catch","defexpect","with-redefs-fn","defui","s/or","swap!","apply",":require","s/def","cond","if","let","defproject","reify","defmulti","when-let",":import","not=","with-bindings","doto","cond-let","if-some","extend-protocol","or","case","alt","remove","mapcat","with-open","with-bindings*","filter","condp","when",new cljs.core.Keyword(null,"quote","quote",-262615245),"reset!","s/and","->","and","defmethod","do","some->>","fn*","interpose","deftest","match","extend","->>","defprotocol","extend-type","defn-","filterv","def","reduce","comment","assert-args","dotimes","proxy","assoc-in","assoc","mapv","when-not","cat","letfn","ns","deftype","defmacro","with-out-str"],[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guided","guided",-297376298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"areguide","areguide",780823189)], null)], null),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120),new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),(2)], null)], null)], null),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120),new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg2-extend-body","arg2-extend-body",1108891857),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635)], null)], null)], null)], null),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"gt2-force-nl","gt2-force-nl",-1746243317),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),(2)], null)], null)], null),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null)], null)], null),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false,new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"hang?","hang?",-579442854)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null)], null)], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"gt2-force-nl","gt2-force-nl",-1746243317),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437),false], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437)], null)], null)], null)], null),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437),false], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guided-body","guided-body",-2023833739),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"defprotocolguide","defprotocolguide",1456418058),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-not-none","default-not-none",245382312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"signature1","signature1",826156631)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guided-body","guided-body",-2023833739),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)], null),new cljs.core.Keyword(null,"element-best","element-best",1084358317),new cljs.core.Keyword(null,"options-reset","options-reset",610833739),new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element-best-*","element-best-*",-572827078)], null)], null)], null),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg2-extend-body","arg2-extend-body",1108891857),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"none-body","none-body",-171554854)]);
zprint.config.default_zprint_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"old?","old?",-1129887872),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.Keyword(null,"tuning","tuning",-48660925),new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692),new cljs.core.Keyword(null,"max-hang-depth","max-hang-depth",-915232220),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"future","future",1877842724),new cljs.core.Keyword(null,"max-depth-string","max-depth-string",-474325435),new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"promise","promise",1767129287),new cljs.core.Keyword(null,"spaces?","spaces?",1967773960),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408),new cljs.core.Keyword(null,"configured?","configured?",642178633),new cljs.core.Keyword(null,"dbg-ge","dbg-ge",257927017),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"color?","color?",-1891974356),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"agent","agent",-766455027),new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947),new cljs.core.Keyword(null,"search-config?","search-config?",-932850546),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"array","array",-2080713842),new cljs.core.Keyword(null,"fn-type-map","fn-type-map",608394799),new cljs.core.Keyword(null,"parse-string-all?","parse-string-all?",-744455473),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872),new cljs.core.Keyword(null,"file?","file?",1755223728),new cljs.core.Keyword(null,"fn-obj","fn-obj",465065936),new cljs.core.Keyword(null,"fn-gt2-force-nl","fn-gt2-force-nl",1348579537),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"test-for-eol-blanks?","test-for-eol-blanks?",676976305),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"!zprint-elide-skip-next?","!zprint-elide-skip-next?",-325866990),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667),new cljs.core.Keyword(null,"max-hang-span","max-hang-span",256100693),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"cwd-zprintrc?","cwd-zprintrc?",167207541),new cljs.core.Keyword(null,"parse-string?","parse-string?",2006674325),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"perf-vs-format","perf-vs-format",-1892061514),new cljs.core.Keyword(null,"style-map","style-map",1488693527),new cljs.core.Keyword(null,"fn-gt3-force-nl","fn-gt3-force-nl",-58306985),new cljs.core.Keyword(null,"process-bang-zprint?","process-bang-zprint?",-1250782024),new cljs.core.Keyword(null,"max-depth","max-depth",127060793),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"vector-fn","vector-fn",1515528250),new cljs.core.Keyword(null,"drop?","drop?",-2009514790),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.Keyword(null,"atom","atom",-397043653),new cljs.core.Keyword(null,"force-eol-blanks?","force-eol-blanks?",1917974011),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"max-hang-count","max-hang-count",637294812),new cljs.core.Keyword(null,"parallel?","parallel?",-25273892),new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"return-cvec?","return-cvec?",1372433982),new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842)],[true,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692),null,new cljs.core.Keyword(null,"fn-gt2-force-nl","fn-gt2-force-nl",1348579537),null,new cljs.core.Keyword(null,"fn-gt3-force-nl","fn-gt3-force-nl",-58306985),null,new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),null], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-justify","no-justify",1864362078),null,new cljs.core.Keyword(null,"ignore-for-variance","ignore-for-variance",1887521489),null], null)], null),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-justify","no-justify",1864362078),null,new cljs.core.Keyword(null,"ignore-for-variance","ignore-for-variance",1887521489),null], null)], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-no-sort","key-no-sort",-2047279260),null,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-justify","no-justify",1864362078),null,new cljs.core.Keyword(null,"ignore-for-variance","ignore-for-variance",1887521489),null], null)], null),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-if-parse-fails","ignore-if-parse-fails",-31062657),null], null)], null),(0),(1000000),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),1.1,new cljs.core.Keyword(null,"hang-type-flow","hang-type-flow",-1585576590),1.5,new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(10),new cljs.core.Keyword(null,"general-hang-adjust","general-hang-adjust",-1631406987),(-1),new cljs.core.Keyword(null,"hang-if-equal-flow?","hang-if-equal-flow?",-1113113992),true], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"arg2-force-nl","arg2-force-nl",-818337503),null,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),null,new cljs.core.Keyword(null,"flow","flow",590489032),null,new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),null,new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),null,new cljs.core.Keyword(null,"arg2-force-nl-body","arg2-force-nl-body",-2131843122),null,new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),null,new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null,new cljs.core.Keyword(null,"arg1-force-nl-body","arg1-force-nl-body",1109597845),null], null), null),(300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"split?","split?",-1633274741),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),"##",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),(1),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),2.0,new cljs.core.Keyword(null,"hang-size","hang-size",-347944063),(10),new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flow?","flow?",96929057),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.Keyword(null,"hang?","hang?",-579442854)],[true,false,(0),(2),(0),1000.0,true,null,(1),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["static",null], null), null),true]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"more-options","more-options",1399478268),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flow?","flow?",96929057),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"justify?","justify?",294994148),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581),new cljs.core.Keyword(null,"nl-separator-all?","nl-separator-all?",-1332523641),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"flow-all-if-any?","flow-all-if-any?",-1348609746),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"hang?","hang?",-579442854)],[false,false,(0),(2),false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),(4),new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(30)], null),(0),false,2.0,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-variance","max-variance",-899998186),(20),new cljs.core.Keyword(null,"ignore-for-variance","ignore-for-variance",1887521489),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [":else",null], null), null),new cljs.core.Keyword(null,"no-justify","no-justify",1864362078),null,new cljs.core.Keyword(null,"max-gap","max-gap",1570234983),null], null),null,false,null,(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),(5)], null),true]),null,false,null,(80),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"true","true",-1114210334),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"user-fn","user-fn",223976490),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"char","char",-641587586)],[new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"magenta","magenta",1687937081)])], null),null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"true","true",-1114210334),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"user-fn","user-fn",223976490),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"char","char",-641587586)],[new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"black","black",1294279647)]),false,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zloc?","zloc?",-1457193855),false,new cljs.core.Keyword(null,"surround","surround",2016177296),null], null),new cljs.core.Keyword(null,"lines","lines",-700165781),null,new cljs.core.Keyword(null,"elide","elide",-1239101386),null,new cljs.core.Keyword(null,"paragraph","paragraph",296707709),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"font-size:20px;font-family: Lucidia Concole, Courier, monospace"], null),new cljs.core.Keyword(null,"range?","range?",-506359425),null,new cljs.core.Keyword(null,"real-le?","real-le?",-1470682231),false,new cljs.core.Keyword(null,"real-le-length","real-le-length",1821160970),(20)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),true,false,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),new cljs.core.Keyword(null,"binding?","binding?",-1071925644),new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774),new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201),new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784),new cljs.core.Keyword(null,"hang?","hang?",-579442854),new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842)],[true,(1),false,false,false,null,true,true,false,false,null,null,null,false]),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hex?","hex?",890937870),false,new cljs.core.Keyword(null,"indent","indent",-148200125),(1),new cljs.core.Keyword(null,"object?","object?",-1313059217),false,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),true], null),cljs.core.PersistentArrayMap.EMPTY,false,null,null,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),null,new cljs.core.Keyword(null,"gt2-force-nl","gt2-force-nl",-1746243317),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring?","docstring?",-1820749410),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),false,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flow?","flow?",96929057),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"justify?","justify?",294994148),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581),new cljs.core.Keyword(null,"nl-separator-all?","nl-separator-all?",-1332523641),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"flow-all-if-any?","flow-all-if-any?",-1348609746),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"hang?","hang?",-579442854)],[false,false,(0),(2),false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),(4),new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(30)], null),(0),false,2.0,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-variance","max-variance",-899998186),(20),new cljs.core.Keyword(null,"no-justify","no-justify",1864362078),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["_",null], null), null),new cljs.core.Keyword(null,"ignore-for-variance","ignore-for-variance",1887521489),null,new cljs.core.Keyword(null,"max-gap","max-gap",1570234983),null], null),false,false,null,(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),(5)], null),true]),false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"directory","directory",-58912409),".zprint",new cljs.core.Keyword(null,"location","location",1815599388),"HOME"], null),null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hang-size","hang-size",-347944063),new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571),new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"nl-count","nl-count",-2027014043),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"pair-hang?","pair-hang?",-492564664),new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774),new cljs.core.Keyword(null,"constant-pair-fn","constant-pair-fn",-1611174375),new cljs.core.Keyword(null,"hang?","hang?",-579442854),new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419),new cljs.core.Keyword(null,"indent-only-style","indent-only-style",708921086)],[(100),null,(0),true,true,(2),null,(0),2.0,true,(4),false,false,false,null,0.5,(1),null,false,true,true,null,true,false,null,new cljs.core.Keyword(null,"input-hang","input-hang",-542766364)]),null,(4),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true,new cljs.core.Keyword(null,"record-type?","record-type?",-1195765660),true,new cljs.core.Keyword(null,"to-string?","to-string?",1452120886),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"count?","count?",-122202128),false,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),true,new cljs.core.Keyword(null,"inline?","inline?",-1674483791),true,new cljs.core.Keyword(null,"inline-align-style","inline-align-style",1548722575),new cljs.core.Keyword(null,"aligned","aligned",-1015148916)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interpose","interpose",576140629),null,new cljs.core.Keyword(null,"left-space","left-space",457574289),new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"ignore-if-parse-fails","ignore-if-parse-fails",-31062657),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["...",null], null), null)], null),false,false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache-dir","cache-dir",-201496618),"urlcache",new cljs.core.Keyword(null,"cache-secs","cache-secs",-19318294),(300)], null),null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"vector-pairs","vector-pairs",-407055230),new cljs.core.Keyword(null,"rod","rod",-649282206),new cljs.core.Keyword(null,"justified-original","justified-original",196017219),new cljs.core.Keyword(null,"rod-base","rod-base",-2127817501),new cljs.core.Keyword(null,"rj-var","rj-var",875112580),new cljs.core.Keyword(null,"ns-justify","ns-justify",2125872100),new cljs.core.Keyword(null,"pair-nl","pair-nl",-252106299),new cljs.core.Keyword(null,"community","community",1600340198),new cljs.core.Keyword(null,"extend-nl","extend-nl",-757494042),new cljs.core.Keyword(null,"quote-wrap","quote-wrap",-617241560),new cljs.core.Keyword(null,"require-pair","require-pair",1934860392),new cljs.core.Keyword(null,"moustache","moustache",923458761),new cljs.core.Keyword(null,"no-hang","no-hang",-667516119),new cljs.core.Keyword(null,"keyword-respect-nl","keyword-respect-nl",1810746249),new cljs.core.Keyword(null,"jrequireguide","jrequireguide",1216920553),new cljs.core.Keyword(null,"defprotocolguide","defprotocolguide",1456418058),new cljs.core.Keyword(null,"backtranslate","backtranslate",-446702708),new cljs.core.Keyword(null,"meta-alt","meta-alt",-1694001299),new cljs.core.Keyword(null,"binding-nl","binding-nl",-1642873971),new cljs.core.Keyword(null,"areguide-nj","areguide-nj",1635838414),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"ij-var","ij-var",-1056765777),new cljs.core.Keyword(null,"rjm-var","rjm-var",-1227600337),new cljs.core.Keyword(null,"respect-bl-off","respect-bl-off",1594684015),new cljs.core.Keyword(null,"binding-nl-all","binding-nl-all",2009633456),new cljs.core.Keyword(null,"pair-nl-all","pair-nl-all",1807307185),new cljs.core.Keyword(null,"meta-base","meta-base",1678860306),new cljs.core.Keyword(null,"map-nl","map-nl",727129906),new cljs.core.Keyword(null,"require-justify","require-justify",2040818707),new cljs.core.Keyword(null,"import-justify","import-justify",383725715),new cljs.core.Keyword(null,"indent-only","indent-only",-1042719117),new cljs.core.Keyword(null,"rod-no-ma-nl","rod-no-ma-nl",-1181746221),new cljs.core.Keyword(null,"sort-dependencies","sort-dependencies",-1642412524),new cljs.core.Keyword(null,"fast-hang","fast-hang",1004246004),new cljs.core.Keyword(null,"all-hang","all-hang",-1243746923),new cljs.core.Keyword(null,"areguide","areguide",780823189),new cljs.core.Keyword(null,"odr","odr",596166581),new cljs.core.Keyword(null,"justified","justified",-547284074),new cljs.core.Keyword(null,"signature1","signature1",826156631),new cljs.core.Keyword(null,"guideguide","guideguide",753675352),new cljs.core.Keyword(null,"respect-bl","respect-bl",-1800970408),new cljs.core.Keyword(null,"require-macros-justify","require-macros-justify",-1792426024),new cljs.core.Keyword(null,"how-to-ns","how-to-ns",366186553),new cljs.core.Keyword(null,"jrequiremacrosguide","jrequiremacrosguide",581235035),new cljs.core.Keyword(null,"jimportguide","jimportguide",1234484605),new cljs.core.Keyword(null,"respect-nl-off","respect-nl-off",-986698274),new cljs.core.Keyword(null,"respect-nl","respect-nl",-931658593),new cljs.core.Keyword(null,"map-nl-all","map-nl-all",1189494431),new cljs.core.Keyword(null,"dark-color-map","dark-color-map",-1749190913)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Consider vectors 'constants' for constant pairing",new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),(1),new cljs.core.Keyword(null,"constant-pair-fn","constant-pair-fn",-1611174375),(function (p1__28648_SHARP_){
return (((p1__28648_SHARP_ instanceof cljs.core.Keyword)) || (((typeof p1__28648_SHARP_ === 'string') || (((typeof p1__28648_SHARP_ === 'number') || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,p1__28648_SHARP_)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,p1__28648_SHARP_)) || (cljs.core.vector_QMARK_(p1__28648_SHARP_)))))))))));
})], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null),new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),(4),new cljs.core.Keyword(null,"constant-pair-fn","constant-pair-fn",-1611174375),null], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Rules of defn, experimental.  Very likely to change.",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 2, ["defn",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.optionfn.rodfn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multi-arity-nl?","multi-arity-nl?",-1175171752),true], null))], null)], null)], null),"defn-",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.optionfn.rodfn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multi-arity-nl?","multi-arity-nl?",-1175171752),true], null))], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Justify everything using pre-1.1.2 approach",new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-variance","max-variance",-899998186),(1000)], null)], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-variance","max-variance",-899998186),(1000)], null)], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-variance","max-variance",-899998186),(1000)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.optionfn.rodfn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multi-arity-nl?","multi-arity-nl?",-1175171752),true], null))], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Set max-variance for :require-justify",new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-variance","max-variance",-899998186),(20)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-justify","require-justify",2040818707),new cljs.core.Keyword(null,"require-macros-justify","require-macros-justify",-1792426024),new cljs.core.Keyword(null,"import-justify","import-justify",383725715)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a blank line after every value that flowed",new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Modify defaults to format to 'community' approach",new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),cljs.core.PersistentHashMap.fromArrays(["map","with-meta","apply","remove","filter","filterv","reduce","assoc","mapv"],[new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478)]),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),(1)], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a blank line between protocols",new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flow?","flow?",96929057),true,new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap quoted lists to right margin, like vectors",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Clarify namespaces in :require",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, [":require",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),(function() {
var G__28913 = null;
var G__28913__0 = (function (){
return "require-pair-option-fn";
});
var G__28913__3 = (function (opts,n,exprs){
if((!(clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(exprs)),".")))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784),null], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.Keyword(null,"vector-fn","vector-fn",1515528250),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),(1)], null)], null);
}
});
G__28913 = function(opts,n,exprs){
switch(arguments.length){
case 0:
return G__28913__0.call(this);
case 3:
return G__28913__3.call(this,opts,n,exprs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28913.cljs$core$IFn$_invoke$arity$0 = G__28913__0;
G__28913.cljs$core$IFn$_invoke$arity$3 = G__28913__3;
return G__28913;
})()
], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Format moustache elements nicely",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, ["app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"vector-pairs","vector-pairs",-407055230)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Turn off hang for every structure",new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"When a vector starts with a :keyword, :respect-nl in it",new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201),(function() {
var G__28914 = null;
var G__28914__0 = (function (){
return "keyword-respect-nl-option-fn-first";
});
var G__28914__2 = (function (options,element){
var k_QMARK_ = (element instanceof cljs.core.Keyword);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k_QMARK_,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vector","vector",1902966158).cljs$core$IFn$_invoke$arity$1(options)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),k_QMARK_], null)], null);
} else {
return null;
}
});
G__28914 = function(options,element){
switch(arguments.length){
case 0:
return G__28914__0.call(this);
case 2:
return G__28914__2.call(this,options,element);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28914.cljs$core$IFn$_invoke$arity$0 = G__28914__0;
G__28914.cljs$core$IFn$_invoke$arity$2 = G__28914__2;
return G__28914;
})()
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.guide.jrequireguide,new cljs.core.Keyword(null,"require","require",-468001333))], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Allow alteration of defprotocol in :fn-map",new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),zprint.guide.defprotocolguide], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Turn quote, deref, var, unquote into reader macros",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 4, ["quote",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-w-string","replace-w-string",1411008615),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419),"'"], null)], null)], null),"clojure.core/deref",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-w-string","replace-w-string",1411008615),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419),"@"], null)], null)], null),"var",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-w-string","replace-w-string",1411008615),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419),"#'"], null)], null)], null),"clojure.core/unquote",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-w-string","replace-w-string",1411008615),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419),"~"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Alternative for metadata. Experimental.",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 2, ["def",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"meta-base","meta-base",1678860306)], null)], null),"deftest",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"meta-base","meta-base",1678860306)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a blank line after every value that flowed",new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Do nice are formatting, but don't justify, use only in :fn-map",new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.guide.areguide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),false], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Format vectors containing hiccup information better",new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),(function() {
var G__28915 = null;
var G__28915__0 = (function (){
return "hiccup-option-fn";
});
var G__28915__3 = (function (opts,n,exprs){
var hiccup_QMARK_ = (((n >= (2))) && ((((((cljs.core.first(exprs) instanceof cljs.core.Keyword)) || ((cljs.core.first(exprs) instanceof cljs.core.Symbol)))) && (cljs.core.map_QMARK_(cljs.core.second(exprs))))));
if(((hiccup_QMARK_) && (cljs.core.not(new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vector","vector",1902966158).cljs$core$IFn$_invoke$arity$1(opts)))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784),new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718)], null)], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = (!(hiccup_QMARK_));
if(and__5043__auto__){
return new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vector","vector",1902966158).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784),null], null)], null);
} else {
return null;

}
}
});
G__28915 = function(opts,n,exprs){
switch(arguments.length){
case 0:
return G__28915__0.call(this);
case 3:
return G__28915__3.call(this,opts,n,exprs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28915.cljs$core$IFn$_invoke$arity$0 = G__28915__0;
G__28915.cljs$core$IFn$_invoke$arity$3 = G__28915__3;
return G__28915;
})()
,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null),new cljs.core.Keyword(null,"vector-fn","vector-fn",1515528250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(1),new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Set max-variance for :import-justify",new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-variance","max-variance",-899998186),(1000)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Set max-variance for :require-justify-macros",new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-variance","max-variance",-899998186),(20)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Disable respect blank lines for every type",new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),false], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),false], null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),false], null),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a blank line between every pair",new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator-all?","nl-separator-all?",-1332523641),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a blank line between every pair",new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator-all?","nl-separator-all?",-1332523641),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Alternative format for metadata. Experimental.",new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),zprint.optionfn.meta_base_fn], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"option-fn","option-fn",-959705456)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Add newline after every value that flows",new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Justify namespaces in :require",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, [":require",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jrequireguide","jrequireguide",1216920553),new cljs.core.Keyword(null,"rj-var","rj-var",875112580)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Justify :import",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, [":import",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jimportguide","jimportguide",1234484605),new cljs.core.Keyword(null,"ij-var","ij-var",-1056765777)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Enable indent only for every type of structure",new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),true], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),true], null),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),true], null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Rules of defn, experimental. No newlines between arities.  Very likely to change.",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 2, ["defn",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guided-body","guided-body",-2023833739),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.guide.rodguide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multi-arity-nl?","multi-arity-nl?",-1175171752),false], null))], null)], null)], null),"defn-",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guided-body","guided-body",-2023833739),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.guide.rodguide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multi-arity-nl?","multi-arity-nl?",-1175171752),false], null))], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"sort dependencies in lein defproject files",new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return-altered-zipper","return-altered-zipper",837872379),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Symbol(null,"defproject","defproject",-1469617526,null),zprint.rewrite.sort_dependencies], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Speed up formatting of very deeply nested structures",new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),(100),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581),(-600)], null),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),(100),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581),(-600)], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),(100),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581),(-300)], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),(0),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),(15)], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),(20),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581),(-150)], null),new cljs.core.Keyword(null,"vector-fn","vector-fn",1515528250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),(100),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581),(-300)], null)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Enable hangs everywhere (which they are by default)",new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Allow modification of areguide in :fn-map",new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.guide.areguide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null))], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"justify columns of rules, experimental",new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),zprint.guide.odrguide], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Justify everything possible",new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"defprotocol signatures with doc on newline, experimental",new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),zprint.guide.signatureguide1], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"output guides themselves, experimental",new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),zprint.guide.guideguide], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Enable respect blank lines for every type",new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),true], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),true], null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),true], null),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Justify namespaces in :require-macros",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, [":require-macros",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jrequiremacrosguide","jrequiremacrosguide",581235035),new cljs.core.Keyword(null,"rjm-var","rjm-var",-1227600337)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Make newlines and indentation match 'how to ns'",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, ["ns",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 2, [":import",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null)], null)], null),":require",new cljs.core.Keyword(null,"flow","flow",590489032)], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false,new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),(1)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.guide.jrequireguide,new cljs.core.Keyword(null,"require-macros","require-macros",707947416))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.guide.jrequireguide,new cljs.core.Keyword(null,"import","import",-1399500709))], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Disable respect newline for every type",new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),false], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),false], null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),false], null),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),false], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Enable respect newlines for every type",new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Add newline between all map pairs",new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("zprint.config","indent","zprint.config/indent",1996832930),(0),new cljs.core.Keyword(null,"nl-separator-all?","nl-separator-all?",-1332523641),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A color map that is pretty good for dark backgrounds",new cljs.core.Keyword(null,"color-map","color-map",-207789684),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"true","true",-1114210334),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"user-fn","user-fn",223976490),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"char","char",-641587586)],[new cljs.core.Keyword(null,"bright-magenta","bright-magenta",-1322676896),new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480),new cljs.core.Keyword(null,"bright-yellow","bright-yellow",-1656998459),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-magenta","bright-magenta",-1322676896),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-yellow","bright-yellow",-1656998459),new cljs.core.Keyword(null,"bright-white","bright-white",-1928690644),new cljs.core.Keyword(null,"bright-white","bright-white",-1928690644),new cljs.core.Keyword(null,"bright-yellow","bright-yellow",-1656998459),new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480),new cljs.core.Keyword(null,"bright-magenta","bright-magenta",-1322676896),new cljs.core.Keyword(null,"bright-green","bright-green",-105033853),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-yellow","bright-yellow",-1656998459),new cljs.core.Keyword(null,"bright-yellow","bright-yellow",-1656998459),new cljs.core.Keyword(null,"bright-blue","bright-blue",-1256551583),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-magenta","bright-magenta",-1322676896),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-black","bright-black",-1152416834),new cljs.core.Keyword(null,"bright-cyan","bright-cyan",-818637375),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-cyan","bright-cyan",-818637375)]),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"true","true",-1114210334),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"user-fn","user-fn",223976490),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"char","char",-641587586)],[new cljs.core.Keyword(null,"bright-magenta","bright-magenta",-1322676896),new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480),new cljs.core.Keyword(null,"bright-yellow","bright-yellow",-1656998459),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-magenta","bright-magenta",-1322676896),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-yellow","bright-yellow",-1656998459),new cljs.core.Keyword(null,"bright-white","bright-white",-1928690644),new cljs.core.Keyword(null,"bright-white","bright-white",-1928690644),new cljs.core.Keyword(null,"bright-yellow","bright-yellow",-1656998459),new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480),new cljs.core.Keyword(null,"bright-magenta","bright-magenta",-1322676896),new cljs.core.Keyword(null,"bright-green","bright-green",-105033853),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-yellow","bright-yellow",-1656998459),new cljs.core.Keyword(null,"bright-yellow","bright-yellow",-1656998459),new cljs.core.Keyword(null,"bright-blue","bright-blue",-1256551583),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-magenta","bright-magenta",-1322676896),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-black","bright-black",-1152416834),new cljs.core.Keyword(null,"bright-cyan","bright-cyan",-818637375),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"bright-cyan","bright-cyan",-818637375)])], null)], null)]),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gt3-force-nl","gt3-force-nl",-1297517534),null,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),null,new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),null], null), null),null,(1000000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"use-previous-!zprint?","use-previous-!zprint?",1580246174),false,new cljs.core.Keyword(null,"continue-after-!zprint-error?","continue-after-!zprint-error?",1653518106),false], null)], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hang-size","hang-size",-347944063),new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571),new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"pair-hang?","pair-hang?",-492564664),new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774),new cljs.core.Keyword(null,"constant-pair-fn","constant-pair-fn",-1611174375),new cljs.core.Keyword(null,"hang?","hang?",-579442854),new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),new cljs.core.Keyword(null,"indent-only-style","indent-only-style",708921086)],[(100),null,(0),true,true,(2),(0),2.0,true,(4),false,false,null,0.5,(1),true,true,null,true,false,new cljs.core.Keyword(null,"input-hang","input-hang",-542766364)]),null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497),new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),new cljs.core.Keyword(null,"sort?","sort?",-567661924)],[false,true,(2),false,false,true,true,false,true]),zprint.config.zfnstyle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expand?","expand?",-1744295862),true,new cljs.core.Keyword(null,"size","size",1098693007),(8)], null),(4),false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flow?","flow?",96929057),new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962),new cljs.core.Keyword(null,"key-value-options","key-value-options",694765603),new cljs.core.Keyword(null,"key-depth-color","key-depth-color",1448522819),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"comma?","comma?",1532168963),new cljs.core.Keyword(null,"justify?","justify?",294994148),new cljs.core.Keyword(null,"key-no-sort","key-no-sort",-2047279260),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675),new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581),new cljs.core.Keyword(null,"nl-separator-all?","nl-separator-all?",-1332523641),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"key-value-color","key-value-color",676042889),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060),new cljs.core.Keyword(null,"key-order","key-order",-356936372),new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668),new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),new cljs.core.Keyword(null,"flow-all-if-any?","flow-all-if-any?",-1348609746),new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377),new cljs.core.Keyword(null,"hang-adjust","hang-adjust",-613514382),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"key-color","key-color",-209002572),new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853),new cljs.core.Keyword(null,"hang?","hang?",-579442854),new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867),new cljs.core.Keyword(null,"sort?","sort?",-567661924)],[false,null,false,(0),null,null,(2),true,false,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["...",null], null), null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),(4),new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(30)], null),(0),false,1000.0,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-variance","max-variance",-899998186),(20),new cljs.core.Keyword(null,"ignore-for-variance","ignore-for-variance",1887521489),null,new cljs.core.Keyword(null,"no-justify","no-justify",1864362078),null,new cljs.core.Keyword(null,"max-gap","max-gap",1570234983),null], null),null,null,false,null,null,null,false,false,null,(1),false,(-1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),1000.0], null),null,false,true,false,false,true]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"indent","indent",-148200125),(1),new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),true,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571),true], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"comma?","comma?",1532168963),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"key-order","key-order",-356936372),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"hang?","hang?",-579442854),new cljs.core.Keyword(null,"sort?","sort?",-567661924)],[null,(2),null,1000.0,true,null,(1),true,null]),false,false]);
zprint.config.no_color_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"user-fn","user-fn",223976490),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"none","none",1333468478)],[new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478)]);
zprint.config.configured_options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(zprint.config.default_zprint_options);
zprint.config.explained_options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(zprint.config.default_zprint_options);
zprint.config.explained_sequence = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
zprint.config.write_options_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * Take two arguments of things to merge and figure it out.
 *   Works for sets too.
 */
zprint.config.merge_with_fn = (function zprint$config$merge_with_fn(val_in_result,val_in_latter){
if(((cljs.core.map_QMARK_(val_in_result)) && (cljs.core.map_QMARK_(val_in_latter)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(zprint.config.merge_with_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_in_result,val_in_latter], 0));
} else {
if(((cljs.core.set_QMARK_(val_in_result)) && (cljs.core.set_QMARK_(val_in_latter)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,val_in_result,cljs.core.seq(val_in_latter));
} else {
return val_in_latter;

}
}
});
/**
 * Do a merge of maps all the way down.
 */
zprint.config.merge_deep = (function zprint$config$merge_deep(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28928 = arguments.length;
var i__5770__auto___28929 = (0);
while(true){
if((i__5770__auto___28929 < len__5769__auto___28928)){
args__5775__auto__.push((arguments[i__5770__auto___28929]));

var G__28930 = (i__5770__auto___28929 + (1));
i__5770__auto___28929 = G__28930;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,zprint.config.merge_with_fn,maps);
}));

(zprint.config.merge_deep.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.config.merge_deep.cljs$lang$applyTo = (function (seq28649){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28649));
}));

/**
 * Take two arguments of things to merge and figure it out.
 */
zprint.config.merge_with_fn_doc = (function zprint$config$merge_with_fn_doc(doc_string,val_in_result,val_in_latter){
if(((cljs.core.map_QMARK_(val_in_result)) && (cljs.core.map_QMARK_(val_in_latter)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.merge_with_fn_doc,doc_string),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_in_result,val_in_latter], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),doc_string,new cljs.core.Keyword(null,"value","value",305978217),val_in_latter], null);
}
});
/**
 * Do a merge of maps all the way down, keeping track of where every
 *   value came from.
 */
zprint.config.merge_deep_doc = (function zprint$config$merge_deep_doc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28934 = arguments.length;
var i__5770__auto___28935 = (0);
while(true){
if((i__5770__auto___28935 < len__5769__auto___28934)){
args__5775__auto__.push((arguments[i__5770__auto___28935]));

var G__28936 = (i__5770__auto___28935 + (1));
i__5770__auto___28935 = G__28936;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return zprint.config.merge_deep_doc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(zprint.config.merge_deep_doc.cljs$core$IFn$_invoke$arity$variadic = (function (doc_string,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.merge_with_fn_doc,doc_string),maps);
}));

(zprint.config.merge_deep_doc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.config.merge_deep_doc.cljs$lang$applyTo = (function (seq28650){
var G__28651 = cljs.core.first(seq28650);
var seq28650__$1 = cljs.core.next(seq28650);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28651,seq28650__$1);
}));

/**
 * Remove a single key from a map or remove a series of
 *   keys from an internal map.
 */
zprint.config.remove_key = (function zprint$config$remove_key(m,k){
if(cljs.core.coll_QMARK_(k)){
var map_key = cljs.core.first(k);
var keys_to_remove = cljs.core.next(k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,map_key,(function (){var G__28654 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(map_key) : m.call(null,map_key));
var G__28655 = keys_to_remove;
return (zprint.config.remove_keys.cljs$core$IFn$_invoke$arity$2 ? zprint.config.remove_keys.cljs$core$IFn$_invoke$arity$2(G__28654,G__28655) : zprint.config.remove_keys.call(null,G__28654,G__28655));
})());
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * Remove keys from a map at multiple levels.
 */
zprint.config.remove_keys = (function zprint$config$remove_keys(m,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28656_SHARP_,p2__28657_SHARP_){
return zprint.config.remove_key(p1__28656_SHARP_,p2__28657_SHARP_);
}),m,ks);
});
/**
 * Get the key seq for every terminal element in a map.
 */
zprint.config.key_seq = (function zprint$config$key_seq(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__28659){
var vec__28660 = p__28659;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28660,(1),null);
var ks = (zprint.config.key_seq.cljs$core$IFn$_invoke$arity$1 ? zprint.config.key_seq.cljs$core$IFn$_invoke$arity$1(v) : zprint.config.key_seq.call(null,v));
if(cljs.core.truth_(ks)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28658_SHARP_){
return cljs.core.cons(k,((cljs.core.coll_QMARK_(p1__28658_SHARP_))?p1__28658_SHARP_:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28658_SHARP_], null)));
}),ks);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
} else {
return null;
}
});
/**
 * Given a key sequence and two maps, remove the elements of the set at
 *   the key sequence in the second map from set in the first map.
 */
zprint.config.remove_elements = (function zprint$config$remove_elements(map_remove,map_orig,ks){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(map_orig,ks,clojure.set.difference,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(map_remove,ks));
});
/**
 * Take two maps, and remove all of the elemnts in the second maps sets
 *   from equivalent places in the first map.
 */
zprint.config.remove_set_elements = (function zprint$config$remove_set_elements(map_orig,map_remove){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.remove_elements,map_remove),map_orig,zprint.config.key_seq(map_remove));
});
/**
 * Take an options map, and remove the set elements that are at the :remove
 *   key, and also remove the :remove key.
 */
zprint.config.perform_remove = (function zprint$config$perform_remove(doc_string,doc_map,options,new_options){
var map_remove = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(new_options);
var options_out = zprint.config.remove_set_elements(options,map_remove);
var remove_ks_seq = zprint.config.key_seq(map_remove);
var new_options_out = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_options,new cljs.core.Keyword(null,"remove","remove",-131428414));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [options_out,new_options_out,(zprint.config.diff_deep_ks.cljs$core$IFn$_invoke$arity$4 ? zprint.config.diff_deep_ks.cljs$core$IFn$_invoke$arity$4(doc_string,doc_map,remove_ks_seq,options_out) : zprint.config.diff_deep_ks.call(null,doc_string,doc_map,remove_ks_seq,options_out))], null);
});
/**
 * Given a function and map and a key, replace the value with 
 *   (f leaf) or (map-leaves f m).
 */
zprint.config.map_leaf = (function zprint$config$map_leaf(f,m,k){
var v = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
if((!(cljs.core.map_QMARK_(v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(zprint.config.map_leaves.cljs$core$IFn$_invoke$arity$2 ? zprint.config.map_leaves.cljs$core$IFn$_invoke$arity$2(f,v) : zprint.config.map_leaves.call(null,f,v)));
}
});
/**
 * Return a map of the same shape but where every leaf value
 *   (i.e., not map value) has been replaced by the (f leaf-value).
 */
zprint.config.map_leaves = (function zprint$config$map_leaves(f,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.map_leaf,f),m,cljs.core.keys(m));
});
/**
 * Create a map with a :value and :set-by elements.
 */
zprint.config.value_set_by = (function zprint$config$value_set_by(set_by,_,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-by","set-by",-1411360264),set_by,new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
/**
 * Update an existing doc-map with labels of everything that shows up
 *   in the ks-seq.
 */
zprint.config.diff_deep_ks = (function zprint$config$diff_deep_ks(doc_string,doc_map,changed_key_seq,existing){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28664_SHARP_,p2__28665_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__28664_SHARP_,p2__28665_SHARP_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.value_set_by,doc_string),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(existing,p2__28665_SHARP_));
}),doc_map,changed_key_seq);
});
/**
 * Diff two maps.
 */
zprint.config.diff_map = (function zprint$config$diff_map(before,after){
return cljs.core.second(clojure.data.diff(before,after));
});
/**
 * Return current explained-seqence and add one to it.
 */
zprint.config.inc_explained_sequence = (function zprint$config$inc_explained_sequence(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(zprint.config.explained_sequence,cljs.core.inc);
});
/**
 * Take an updated-map and generate calculated options
 *   from it.  Takes the updated-map and further updates
 *   it, being smart about things that were set to nil.
 *   Presently updates [:map :key-value] and [:reader-cond :key-value]
 */
zprint.config.add_calculated_options = (function zprint$config$add_calculated_options(updated_map){
var G__28666 = updated_map;
var G__28666__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)))?cljs.core.assoc_in(G__28666,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null),cljs.core.zipmap(new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)),cljs.core.range.cljs$core$IFn$_invoke$arity$0())):G__28666);
var G__28666__$2 = (((((new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)) == null)) && ((!((new cljs.core.Keyword(null,"key-value","key-value",-34906839).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)) == null))))))?zprint.util.dissoc_two(G__28666__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null)):G__28666__$1);
var G__28666__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)))?cljs.core.assoc_in(G__28666__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null),cljs.core.zipmap(new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)),cljs.core.range.cljs$core$IFn$_invoke$arity$0())):G__28666__$2);
if((((new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)) == null)) && ((!((new cljs.core.Keyword(null,"key-value","key-value",-34906839).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)) == null)))))){
return zprint.util.dissoc_two(G__28666__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null));
} else {
return G__28666__$3;
}
});
/**
 * Replace options to be used on every call.  You must have validated
 *   these options already!
 */
zprint.config.reset_options_BANG_ = (function zprint$config$reset_options_BANG_(var_args){
var G__28669 = arguments.length;
switch (G__28669) {
case 2:
return zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (updated_map,doc_map){
cljs.core.reset_BANG_(zprint.config.configured_options,zprint.config.add_calculated_options(updated_map));

if(cljs.core.truth_(doc_map)){
return cljs.core.reset_BANG_(zprint.config.explained_options,doc_map);
} else {
return null;
}
}));

(zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (updated_map){
return zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2(updated_map,null);
}));

(zprint.config.reset_options_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Remove any previously set options.
 */
zprint.config.reset_default_options_BANG_ = (function zprint$config$reset_default_options_BANG_(){
cljs.core.reset_BANG_(zprint.config.configured_options,zprint.config.default_zprint_options);

return cljs.core.reset_BANG_(zprint.config.explained_options,zprint.config.default_zprint_options);
});
/**
 * Return any previously set options.
 */
zprint.config.get_options = (function zprint$config$get_options(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(zprint.config.configured_options),new cljs.core.Keyword(null,"version","version",425292698),zprint.config.about());
});
/**
 * Do a (get-options), but make sure that they are configured first.
 */
zprint.config.get_configured_options = (function zprint$config$get_configured_options(){
var G__28671_28945 = cljs.core.PersistentArrayMap.EMPTY;
var G__28672_28946 = new cljs.core.Keyword(null,"report-errors","report-errors",1591528828);
(zprint.config.configure_if_needed_BANG_.cljs$core$IFn$_invoke$arity$2 ? zprint.config.configure_if_needed_BANG_.cljs$core$IFn$_invoke$arity$2(G__28671_28945,G__28672_28946) : zprint.config.configure_if_needed_BANG_.call(null,G__28671_28945,G__28672_28946));

return zprint.config.get_options();
});
/**
 * Return the base default options.
 */
zprint.config.get_default_options = (function zprint$config$get_default_options(){
return zprint.config.default_zprint_options;
});
/**
 * If the mapentry was explicitly set, return it as {:k {:set-by x
 *   :value y}}.  If the key has information below it that was explicitly
 *   set, return that as [k stuff] where stuff is a seq of maps whose
 *   ultimate value is {:set-by x :value y}.
 */
zprint.config.find_set = (function zprint$config$find_set(p__28673){
var vec__28674 = p__28673;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28674,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28674,(1),null);
var mapentry = vec__28674;
if(cljs.core.map_QMARK_(v)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"set-by","set-by",-1411360264),null], null), null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(v)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
} else {
var result = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zprint.config.find_set,v);
var result__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,result);
if((!(cljs.core.empty_QMARK_(result__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,result__$1], null);
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Call find-set on all the elements of a map.
 */
zprint.config.map_set = (function zprint$config$map_set(options){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zprint.config.find_set,options);
});
/**
 * Handle the three things returned from find-set, a regular map, nil,
 *   or a key with a seq of things that ultimately had a set map underneath,
 *   and build a map from each.
 */
zprint.config.extract_map = (function zprint$config$extract_map(m){
if(cljs.core.map_QMARK_(m)){
return m;
} else {
if((m == null)){
return m;
} else {
if(cljs.core.seq_QMARK_(cljs.core.first(cljs.core.next(m)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(m),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var G__28682 = cljs.core.first(cljs.core.next(m));
return (zprint.config.form_map.cljs$core$IFn$_invoke$arity$1 ? zprint.config.form_map.cljs$core$IFn$_invoke$arity$1(G__28682) : zprint.config.form_map.call(null,G__28682));
})())]);
} else {
return null;

}
}
}
});
/**
 * Given the vector of things from map-set, reconstruct a map out of
 *   the information.
 */
zprint.config.form_map = (function zprint$config$form_map(map_set_result){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.config.extract_map,map_set_result);
});
/**
 * Take an option map, and return a new options map with only the
 *   set values shows.
 */
zprint.config.only_set = (function zprint$config$only_set(options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,zprint.config.form_map(zprint.config.map_set(options)));
});
/**
 * Set options to be used on every call.
 */
zprint.config.set_explained_options_BANG_ = (function zprint$config$set_explained_options_BANG_(doc_map){
return cljs.core.reset_BANG_(zprint.config.explained_options,doc_map);
});
/**
 * Return any previously set doc-map.
 */
zprint.config.get_explained_options = (function zprint$config$get_explained_options(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zprint.config.remove_keys(cljs.core.deref(zprint.config.explained_options),zprint.config.explain_hide_keys),new cljs.core.Keyword(null,"version","version",425292698),zprint.config.about());
});
/**
 * Return any previously set doc-map.
 */
zprint.config.get_explained_set_options = (function zprint$config$get_explained_set_options(){
return zprint.config.only_set(zprint.config.get_explained_options());
});
/**
 * Return any previously set doc-map complete.
 */
zprint.config.get_explained_all_options = (function zprint$config$get_explained_all_options(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(zprint.config.explained_options),new cljs.core.Keyword(null,"version","version",425292698),zprint.config.about());
});
/**
 * Return the base explained options, matches get-default-options
 */
zprint.config.get_default_explained_all_options = (function zprint$config$get_default_explained_all_options(){
return zprint.config.default_zprint_options;
});
/**
 * Throw an exception if write-options? is not true.
 */
zprint.config.ensure_option_access = (function zprint$config$ensure_option_access(s){
if(cljs.core.truth_(cljs.core.deref(zprint.config.write_options_QMARK_))){
return null;
} else {
throw (new Error(["Routine: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"' requires option access and does not have it!"].join('')));
}
});
/**
 * Validate the new options, and update both the saved options
 *   and the doc-map as well.  Will throw an exceptino for errors.
 */
zprint.config.internal_set_options_BANG_ = (function zprint$config$internal_set_options_BANG_(doc_string,doc_map,existing_options,new_options){
zprint.config.ensure_option_access("internal-set-options!");

var vec__28820 = (zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4 ? zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4(doc_string,doc_map,existing_options,new_options) : zprint.config.config_and_validate.call(null,doc_string,doc_map,existing_options,new_options));
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28820,(0),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28820,(1),null);
var error_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28820,(2),null);
if(cljs.core.truth_(error_vec)){
throw (new Error(["set-options! for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_string)," found these errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_vec)].join('')));
} else {
zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2(updated_map,new_doc_map);

return null;
}
});
zprint.config.is_in_repl_QMARK_ = (function zprint$config$is_in_repl_QMARK_(){
return null;
});
/**
 * Given an options map, return an options map with only the operational
 *   options remaining.
 */
zprint.config.select_op_options = (function zprint$config$select_op_options(options){
return cljs.core.select_keys(options,zprint.config.operational_options);
});
/**
 * Do external configuration regardless of whether or not it has
 *   already been done, replacing any internal configuration.  Returns
 *   nil if successful, a vector of errors if not. 
 */
zprint.config.config_configure_all_BANG_ = (function zprint$config$config_configure_all_BANG_(var_args){
var G__28824 = arguments.length;
switch (G__28824) {
case 1:
return zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (op_options){
zprint.config.ensure_option_access("config-configure-all!");

var vec__28825 = (zprint.config.config_and_validate_all.cljs$core$IFn$_invoke$arity$1 ? zprint.config.config_and_validate_all.cljs$core$IFn$_invoke$arity$1(op_options) : zprint.config.config_and_validate_all.call(null,op_options));
var zprint_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28825,(0),null);
var doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28825,(1),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28825,(2),null);
if(cljs.core.truth_(errors)){
return errors;
} else {
zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2(zprint_options,doc_map);

zprint.config.internal_set_options_BANG_("internal",zprint.config.get_explained_all_options(),zprint.config.get_options(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configured?","configured?",642178633),true], null));

if(cljs.core.truth_((function (){var and__5043__auto__ = zprint.config.is_in_repl_QMARK_();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"set-by","set-by",-1411360264).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(zprint.config.get_explained_all_options())));
} else {
return and__5043__auto__;
}
})())){
zprint.config.internal_set_options_BANG_("REPL execution default",zprint.config.get_explained_all_options(),zprint.config.get_options(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parallel?","parallel?",-25273892),true], null));
} else {
}

return null;
}
}));

(zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(zprint.config.config_configure_all_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Attempt to lock the options using the write-options? atom.
 *   Tries 1000 times, waiting 1ms between tries. Always returns nil.
 */
zprint.config.lock_options = (function zprint$config$lock_options(){
var n = (0);
while(true){
if(((cljs.core.compare_and_set_BANG_(zprint.config.write_options_QMARK_,null,true)) || ((n > (1000))))){
return null;
} else {
var G__28953 = (n + (1));
n = G__28953;
continue;
}
break;
}
});
/**
 * Unlock the options using write-options?
 */
zprint.config.unlock_options = (function zprint$config$unlock_options(){
if(cljs.core.compare_and_set_BANG_(zprint.config.write_options_QMARK_,true,null)){
return null;
} else {
throw (new Error("When unlocking the options, we found we didn't have them locked!"));
}
});
/**
 * Call config-configure-all!, but protect the call by gaining
 *   access to the options using lock-options and unlock-options.
 */
zprint.config.protected_configure_all_BANG_ = (function zprint$config$protected_configure_all_BANG_(var_args){
var G__28829 = arguments.length;
switch (G__28829) {
case 0:
return zprint.config.protected_configure_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return zprint.config.protected_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.protected_configure_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
zprint.config.lock_options();

var error_vec = zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$0();
zprint.config.unlock_options();

return error_vec;
}));

(zprint.config.protected_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (op_options){
zprint.config.lock_options();

var error_vec = zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1(op_options);
zprint.config.unlock_options();

return error_vec;
}));

(zprint.config.protected_configure_all_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Test to see if we are already configured, and if we are not,
 *   then perform a configuration and return any errors detected.  If
 *   no-configure? is non-nil then don't read in any files.  This does
 *   not set :configured? true, so if you call with no-configure? true
 *   you better set :configured? true yourself!  Handle multithreaded
 *   case of several executions of zprint-str-internal at once, each
 *   trying to figure out if we are already configured.  If no-unlock?
 *   is true, then don't (unlock-options) when finished.
 */
zprint.config.configure_if_needed_BANG_ = (function zprint$config$configure_if_needed_BANG_(var_args){
var G__28833 = arguments.length;
switch (G__28833) {
case 4:
return zprint.config.configure_if_needed_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 0:
return zprint.config.configure_if_needed_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return zprint.config.configure_if_needed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.configure_if_needed_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (op_options,report_errors_QMARK_,no_configure_all_QMARK_,no_unlock_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"configured?","configured?",642178633).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options()))){
if(cljs.core.truth_(no_unlock_QMARK_)){
return zprint.config.lock_options();
} else {
return null;
}
} else {
zprint.config.lock_options();

var error_vec = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"configured?","configured?",642178633).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return no_configure_all_QMARK_;
}
})())?null:zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1(op_options));
if(cljs.core.truth_((function (){var and__5043__auto__ = report_errors_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.empty_QMARK_(error_vec)));
} else {
return and__5043__auto__;
}
})())){
zprint.config.unlock_options();

throw (new Error(["When configuring these errors were found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_vec)].join('')));
} else {
}

if(cljs.core.truth_(no_unlock_QMARK_)){
} else {
zprint.config.unlock_options();
}

return error_vec;
}
}));

(zprint.config.configure_if_needed_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return zprint.config.configure_if_needed_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,null,null,null);
}));

(zprint.config.configure_if_needed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (op_options,report_errors_QMARK_){
return zprint.config.configure_if_needed_BANG_.cljs$core$IFn$_invoke$arity$4(op_options,report_errors_QMARK_,null,null);
}));

(zprint.config.configure_if_needed_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Add some options to the current options, checking to make sure
 *   that they are correct. op-options are operational options that
 *   affect where to get options or how to do the processing, but do
 *   not affect the format of the output directly.
 */
zprint.config.config_set_options_BANG_ = (function zprint$config$config_set_options_BANG_(var_args){
var G__28836 = arguments.length;
switch (G__28836) {
case 3:
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (new_options,doc_str,op_options){
var error_vec = zprint.config.configure_if_needed_BANG_.cljs$core$IFn$_invoke$arity$4(op_options,null,new cljs.core.Keyword(null,"configured?","configured?",642178633).cljs$core$IFn$_invoke$arity$1(new_options),new cljs.core.Keyword(null,"no-unlock","no-unlock",-834628601));
if(cljs.core.truth_(error_vec)){
zprint.config.unlock_options();

throw (new Error(["set-options! for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_str)," found these errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_vec)].join('')));
} else {
}

zprint.config.internal_set_options_BANG_(doc_str,zprint.config.get_explained_all_options(),zprint.config.get_options(),new_options);

return zprint.config.unlock_options();
}));

(zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (new_options){
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$3(new_options,["repl or api call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.config.inc_explained_sequence())].join(''),zprint.config.select_op_options(new_options));
}));

(zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (new_options,doc_str){
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$3(new_options,doc_str,zprint.config.select_op_options(new_options));
}));

(zprint.config.config_set_options_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * If the sequence is empty, then return nil, else return the sequence.
 */
zprint.config.empty_to_nil = (function zprint$config$empty_to_nil(empty_seq){
if(cljs.core.empty_QMARK_(empty_seq)){
return null;
} else {
return empty_seq;
}
});
/**
 * Validate an options map, source-str is a descriptive phrase 
 *   which will be included in the errors (if any). Returns nil 
 *   for success, a string with error(s) if not.
 */
zprint.config.validate_options = (function zprint$config$validate_options(var_args){
var G__28848 = arguments.length;
switch (G__28848) {
case 2:
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2 = (function (options,source_str){
if(cljs.core.truth_(options)){
return zprint.config.empty_to_nil(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28843_SHARP_){
return (((p1__28843_SHARP_ == null)) || (cljs.core.empty_QMARK_(p1__28843_SHARP_)));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,zprint.spec.validate_basic.cljs$core$IFn$_invoke$arity$2(options,source_str))))));
} else {
return null;
}
}));

(zprint.config.validate_options.cljs$core$IFn$_invoke$arity$1 = (function (options){
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2(options,null);
}));

(zprint.config.validate_options.cljs$lang$maxFixedArity = 2);

/**
 * Take a [doc-string new-map styles-applied [existing-map doc-map
 *   error-str] style-name] and produce a new [existing-map doc-map
 *   error-str] from the style defined in the new-map if it exists,
 *   or the existing-map if it doesn't.
 */
zprint.config.apply_one_style = (function zprint$config$apply_one_style(doc_string,new_map,p__28849,style_name){
var vec__28850 = p__28849;
var existing_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28850,(0),null);
var doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28850,(1),null);
var error_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28850,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,new cljs.core.Keyword(null,"not-specified","not-specified",1542080231))) || ((style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
} else {
var style_map = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,new cljs.core.Keyword(null,"default","default",-1987822328)))?zprint.config.get_default_options():(function (){var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style-map","style-map",1488693527),style_name], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(existing_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style-map","style-map",1488693527),style_name], null));
}
})());
var style_map__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(style_map,new cljs.core.Keyword(null,"doc","doc",1913296891));
var existing_map__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(existing_map,new cljs.core.Keyword(null,"styles-applied","styles-applied",-1132259153),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"styles-applied","styles-applied",-1132259153).cljs$core$IFn$_invoke$arity$1(existing_map),style_name));
if(cljs.core.truth_(style_map__$1)){
var vec__28853 = (function (){var G__28856 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_string)," specified :style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name)].join('');
var G__28857 = doc_map;
var G__28858 = existing_map__$1;
var G__28859 = style_map__$1;
return (zprint.config.internal_config.cljs$core$IFn$_invoke$arity$4 ? zprint.config.internal_config.cljs$core$IFn$_invoke$arity$4(G__28856,G__28857,G__28858,G__28859) : zprint.config.internal_config.call(null,G__28856,G__28857,G__28858,G__28859));
})();
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28853,(0),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28853,(1),null);
var error_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28853,(2),null);
var new_doc_map__$1 = (cljs.core.truth_(new_doc_map)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_doc_map,new cljs.core.Keyword(null,"styles-applied","styles-applied",-1132259153),new cljs.core.Keyword(null,"styles-applied","styles-applied",-1132259153).cljs$core$IFn$_invoke$arity$1(updated_map)):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map,new_doc_map__$1,(cljs.core.truth_((function (){var or__5045__auto__ = error_str;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return error_vec;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_str),(cljs.core.truth_(error_str)?",":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_vec)].join(''):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map__$1,doc_map,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_str),(cljs.core.truth_(error_str)?",":null),["Style '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name),"' not found!"].join('')].join('')], null);
}
}
});
/**
 * Given an existing-map and a new-map, if the new-map specifies a
 *   style, apply it if it exists, looking first in the new-map for the style
 *   and then in the existing-map for the style.  Otherwise do nothing. 
 *   Use config-and-validate to actually apply the style, which in turn
 *   means that we need to pass down styles-applied through that routine.
 *   Return [updated-map new-doc-map error-string]
 */
zprint.config.apply_style = (function zprint$config$apply_style(doc_string,doc_map,existing_map,new_map){
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new_map,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"not-specified","not-specified",1542080231));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,new cljs.core.Keyword(null,"not-specified","not-specified",1542080231))) || ((style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__28860_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28860_SHARP_,style_name);
}),new cljs.core.Keyword(null,"styles-applied","styles-applied",-1132259153).cljs$core$IFn$_invoke$arity$1(existing_map)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,["Circular style error: style '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name),"' has already been applied in this call.","  Styles already applied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"styles-applied","styles-applied",-1132259153).cljs$core$IFn$_invoke$arity$1(existing_map))].join('')], null);
} else {
var vec__28861 = (((!(cljs.core.coll_QMARK_(style_name))))?zprint.config.apply_one_style(doc_string,new_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null),style_name):cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.config.apply_one_style,doc_string,new_map),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null),style_name));
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(0),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(1),null);
var error_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(2),null);
var another_style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(updated_map,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"not-specified","not-specified",1542080231));
var another_style_QMARK_ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(another_style_name,new cljs.core.Keyword(null,"not-specified","not-specified",1542080231))) || ((another_style_name == null)))));
var another_style_error = ((another_style_QMARK_)?["Internal Error: While processing style: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name),"' found that"," this style: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(another_style_name),"' showed up in :style,"," Styles already applied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"styles-already-applied","styles-already-applied",-207002074).cljs$core$IFn$_invoke$arity$1(existing_map))," Please submit an issue on GitHub regarding"," this problem!"].join(''):null);
if(another_style_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map,new_doc_map,(cljs.core.truth_(error_string)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_string),",",another_style_error].join(''):another_style_error)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map,new_doc_map,error_string], null);
}
}
}
});
zprint.config.opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol(null,"jrequireguide","jrequireguide",-1437515216,null),zprint.guide.jrequireguide,new cljs.core.Symbol(null,"defprotocolguide","defprotocolguide",-1198017711,null),zprint.guide.defprotocolguide,new cljs.core.Symbol(null,"signatureguide1","signatureguide1",-1074512268,null),zprint.guide.signatureguide1,new cljs.core.Symbol(null,"guideguide","guideguide",-1900760417,null),zprint.guide.guideguide,new cljs.core.Symbol(null,"rodguide","rodguide",-1306534639,null),zprint.guide.rodguide,new cljs.core.Symbol(null,"areguide","areguide",-1873612580,null),zprint.guide.areguide,new cljs.core.Symbol(null,"odrguide","odrguide",212495609,null),zprint.guide.odrguide,new cljs.core.Symbol(null,"rodfn","rodfn",267663234,null),zprint.optionfn.rodfn], null)], null)], null);
zprint.config.sci_ctx = sci.core.init(zprint.config.opts);
/**
 * Read an options map from a string using sci/eval-string to read
 *   in the structure, and to create sandboxed function for any functions
 *   defined in the options-map (i.e. in the string).  Any failures
 *   from eval-string are not caught and propagate back up the call
 *   stack.
 */
zprint.config.sci_load_string = (function zprint$config$sci_load_string(s){
return sci.core.eval_string_STAR_(zprint.config.sci_ctx,s);
});
/**
 * Read in an options map from one file or another file. Possibly neither of
 *   them exist, which is fine if optional? is truthy. Return
 *   [options-from-file error-string full-path-of-file].  It is acceptable to
 *   not have a file if optional? is truthy, but if the file exists, then 
 *   regardless of optional?, errors are detected and reported.
 */
zprint.config.get_config_from_file = (function zprint$config$get_config_from_file(var_args){
var G__28865 = arguments.length;
switch (G__28865) {
case 2:
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2 = (function (filename,optional_QMARK_){
return null;
}));

(zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$1 = (function (filename){
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2(filename,null);
}));

(zprint.config.get_config_from_file.cljs$lang$maxFixedArity = 2);

/**
 * Take a vector of filenames, and look in exactly one directory for
 *   all of the filenames.  Return the [option-map error-str full-file-path]
 *   from get-config-from-file for the first one found, or nil if none found.
 */
zprint.config.get_config_from_path = (function zprint$config$get_config_from_path(filename_vec,file_sep,dir_vec){
var dirspec = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(file_sep,dir_vec));
var config_vec = cljs.core.some((function (p1__28866_SHARP_){
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2(p1__28866_SHARP_,new cljs.core.Keyword(null,"optional","optional",2053951509));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.str,dirspec,file_sep),filename_vec));
return config_vec;
});
/**
 * Take a vector of directories dir-vec and check for all of the
 *   filenames in filename-vec in the directory specified by dir-vec.
 *   When one is found, return (using reduced) the [option-map error-str
 *   full-file-path] from get-config-from-file, or nil if none are
 *   found.  Will now accept fns from any of the files since using
 *   sci/eval-string.
 */
zprint.config.get_config_from_dirs = (function zprint$config$get_config_from_dirs(filename_vec,file_sep,dir_vec,_){
var config_vec = zprint.config.get_config_from_path(filename_vec,file_sep,dir_vec);
if(cljs.core.truth_(config_vec)){
return cljs.core.reduced(config_vec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["."], null),dir_vec)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".."], null);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".."], null),dir_vec);
}
}
});
/**
 * Take a vector of filenames and scan up the directory tree from
 *   the current directory to the root, looking for any of the files
 *   in each directory.  Look for them in the order given in the vector.
 *   Return nil or a vector from get-config-from-file: [option-map
 *   error-str full-file-path].
 */
zprint.config.scan_up_dir_tree = (function zprint$config$scan_up_dir_tree(filename_vec,file_sep){
return null;
});
/**
 * Read in an options map from a string.
 */
zprint.config.get_config_from_map = (function zprint$config$get_config_from_map(map_string){
if(cljs.core.truth_(map_string)){
try{var opts_map = zprint.config.sci_load_string(map_string);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts_map,null], null);
}catch (e28867){var e = e28867;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,["Unable to read configuration from map",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_string)," because ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
}} else {
return null;
}
});
/**
 * If it is a string, and it is true or false (any case), turn it
 *   into true or false, else leave it the way it is.
 */
zprint.config.strtf__GT_boolean = (function zprint$config$strtf__GT_boolean(sexpr){
if((!(typeof sexpr === 'string'))){
return sexpr;
} else {
var lc_sexpr = clojure.string.lower_case(clojure.string.trim(sexpr));
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lc_sexpr,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lc_sexpr,"false")))))){
return sexpr;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lc_sexpr,"true")){
return true;
} else {
return false;
}
}
}
});
/**
 * Return true if a sequence starts with another sequence.
 */
zprint.config.starts_with_QMARK_ = (function zprint$config$starts_with_QMARK_(coll,seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28868_SHARP_,p2__28869_SHARP_){
var and__5043__auto__ = p1__28868_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return p2__28869_SHARP_;
} else {
return and__5043__auto__;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,coll,seq));
});
/**
 * Given a map of environment variable entries from cprop, which contain
 *   a sequence key and a keyword value, build a map to merge with the
 *   fn-map.
 */
zprint.config.build_fn_map_update = (function zprint$config$build_fn_map_update(m){
var mapseq = cljs.core.seq(m);
var fn_map_entries = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28870_SHARP_){
return zprint.config.starts_with_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zprint","zprint",1501225152),new cljs.core.Keyword(null,"fn-map","fn-map",565481146)], null),cljs.core.first(p1__28870_SHARP_));
}),mapseq);
var fn_map_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28871_SHARP_){
return cljs.core.name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__28871_SHARP_),(2)));
}),fn_map_entries);
var fn_map_vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28872_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__28872_SHARP_));
}),fn_map_entries);
return cljs.core.zipmap(fn_map_keys,fn_map_vals);
});
/**
 * Given the current options map and a map of environment variables
 *   from cprop, update the fn-map as described by the environment variable
 *   map.
 */
zprint.config.update_fn_map = (function zprint$config$update_fn_map(options,env_map){
var fn_map_update = zprint.config.build_fn_map_update(env_map);
if(cljs.core.empty_QMARK_(fn_map_update)){
return options;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"fn-map","fn-map",565481146),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fn-map","fn-map",565481146).cljs$core$IFn$_invoke$arity$1(options),fn_map_update], 0)));
}
});
/**
 * If a particular key-path exists in an existing map, replace it
 *   with a new key-path.  The existing key-path can have a nil value.
 */
zprint.config.replace_existing = (function zprint$config$replace_existing(existing,p__28873){
var vec__28874 = p__28873;
var k_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28874,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28874,(1),null);
if(((cljs.core.seq(k_path)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(existing,k_path,new cljs.core.Keyword(null,"not-present","not-present",125254321)),new cljs.core.Keyword(null,"not-present","not-present",125254321))))){
return cljs.core.assoc_in(existing,k_path,v);
} else {
return existing;
}
});
/**
 * Takes a map with multiple levels, and merge only the value from
 *   the second map where the path of the keys already exists in the first
 *   map.  Will not add any new keys to the first map.
 */
zprint.config.merge_existing = (function zprint$config$merge_existing(existing,new$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.config.replace_existing,existing,new$);
});
/**
 * Update the current :next-inner map in the options map.  If the
 *   :next-inner doesn't exist or the value is map, just add to it.  If the
 *   value is a vector of maps, then update the first map in the vector.
 */
zprint.config.update_next_inner = (function zprint$config$update_next_inner(options,ks,ks_value){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"update-next-inner: ks:",ks,"ks-value:",ks_value], 0));
} else {
}

var next_inner = new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"unset","unset",-513298114));
if(((cljs.core.map_QMARK_(next_inner)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unset","unset",-513298114),next_inner)))){
return cljs.core.assoc_in(options,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-inner","next-inner",608504966)], null),ks),ks_value);
} else {
if(cljs.core.vector_QMARK_(next_inner)){
var next_inner_map = cljs.core.assoc_in(cljs.core.first(next_inner),ks,ks_value);
var next_inner_vector = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_inner,(0),next_inner_map);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),next_inner_vector);
} else {
return options;

}
}
});
/**
 * Process one subvector from the :next-inner-restore key in an options map.
 *   If the subvector is a sequence of keywords, save the value
 *   of that element in the :next-inner map.  If the first
 *   element in the vector is itself a vector of keywords, then that vector
 *   is a key-sequence to a set, and the second element of the vector is
 *   an element in the set.  In that case, modify the :next-inner map to
 *   recreate the current state of that element in the set when it is 
 *   executed (which might be to add it, or to ensure that it doesn't
 *   exist).  Return the modified options map with :next-inner populated
 *   appropriately.
 */
zprint.config.restore_vector = (function zprint$config$restore_vector(existing_map,new_updated_map,restore_vector){
if((cljs.core.first(restore_vector) instanceof cljs.core.Keyword)){
var ks_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(existing_map,restore_vector,new cljs.core.Keyword(null,"unset","unset",-513298114));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ks_value,new cljs.core.Keyword(null,"unset","unset",-513298114))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(restore_vector),new cljs.core.Keyword(null,"fn-map","fn-map",565481146))){
return zprint.config.update_next_inner(new_updated_map,restore_vector,new cljs.core.Keyword(null,"none","none",1333468478));
} else {
return new_updated_map;
}
} else {
return zprint.config.update_next_inner(new_updated_map,restore_vector,ks_value);
}
} else {
if(cljs.core.sequential_QMARK_(cljs.core.first(restore_vector))){
var ks = cljs.core.first(restore_vector);
var set_element = cljs.core.second(restore_vector);
var the_set = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(existing_map,ks,new cljs.core.Keyword(null,"unset","unset",-513298114));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_set,new cljs.core.Keyword(null,"unset","unset",-513298114))) || ((!(cljs.core.set_QMARK_(the_set)))))){
return new_updated_map;
} else {
var element_exists_QMARK_ = (the_set.cljs$core$IFn$_invoke$arity$1 ? the_set.cljs$core$IFn$_invoke$arity$1(set_element) : the_set.call(null,set_element));
if(cljs.core.truth_(element_exists_QMARK_)){
return zprint.config.update_next_inner(new_updated_map,ks,cljs.core.PersistentHashSet.createAsIfByAssoc([set_element]));
} else {
return zprint.config.update_next_inner(new_updated_map,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414)], null),ks),cljs.core.PersistentHashSet.createAsIfByAssoc([set_element]));
}
}
} else {
return new_updated_map;

}
}
});
/**
 * Given a map with a top-level :next-inner-restore key, the value of this key
 *   is a vector of vectors.  The vectors are either a sequence of keywords,
 *   which are a key-sequence of an element.  In this case, save the value
 *   of that element in the :next-inner map.  In the case where the first
 *   element in the vector is itself a vector of keywords, they that vector
 *   is a key-sequence to a set, and the second element of the vector is
 *   an element in the set.  In this case, modify the :next-inner map to
 *   recreate the current state of that element in the set when it is 
 *   executed (which might be to add it, or to ensure that it doesn't
 *   exist).  Return the modified options map with :next-inner populated
 *   accordingly
 */
zprint.config.process_restore = (function zprint$config$process_restore(new_updated_map,existing_map){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(new_updated_map));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(new_updated_map);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(new_updated_map),"process-restore: next-inner:",new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(new_updated_map),"next-inner-restore:",new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733).cljs$core$IFn$_invoke$arity$1(new_updated_map)], 0));
} else {
}

var restore_vec = new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733).cljs$core$IFn$_invoke$arity$1(new_updated_map);
var new_updated_map__$1 = (function (){var next_inner = new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$2(new_updated_map,new cljs.core.Keyword(null,"unset","unset",-513298114));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_inner,new cljs.core.Keyword(null,"unset","unset",-513298114))){
return new_updated_map;
} else {
if(cljs.core.map_QMARK_(next_inner)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_updated_map,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,next_inner], null));
} else {
if(cljs.core.vector_QMARK_(next_inner)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_updated_map,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),next_inner));
} else {
return new_updated_map;

}
}
}
})();
var result = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.restore_vector,existing_map),new_updated_map__$1,restore_vec),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733));
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(new_updated_map__$1));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(new_updated_map__$1);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(new_updated_map__$1),"process-restore: (:next-inner result)",new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(result)], 0));
} else {
}

return result;
});
/**
 * Do the internals of config-and-validate.  This is also what is
 *   called when styles are being processed.  Returns [updated-map
 *   new-doc-map error-str]
 */
zprint.config.internal_config = (function zprint$config$internal_config(doc_string,doc_map,existing_map,new_map){
if((!(cljs.core.empty_QMARK_(new_map)))){
var vec__28877 = zprint.config.perform_remove(doc_string,doc_map,existing_map,new_map);
var existing_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(0),null);
var new_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(1),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(2),null);
var existing_map__$2 = (function (){var new_style_map = new cljs.core.Keyword(null,"style-map","style-map",1488693527).cljs$core$IFn$_invoke$arity$1(new_map__$1);
if((new_style_map == null)){
return existing_map__$1;
} else {
return zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([existing_map__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style-map","style-map",1488693527),new cljs.core.Keyword(null,"style-map","style-map",1488693527).cljs$core$IFn$_invoke$arity$1(new_map__$1)], null)], 0));
}
})();
var vec__28880 = zprint.config.apply_style(doc_string,new_doc_map,existing_map__$2,new_map__$1);
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880,(0),null);
var new_doc_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880,(1),null);
var style_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880,(2),null);
var new_map__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_map__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var new_updated_map = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([updated_map,new_map__$2], 0));
var new_updated_map__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733).cljs$core$IFn$_invoke$arity$1(new_updated_map))?zprint.config.process_restore(new_updated_map,existing_map__$2):new_updated_map);
var new_doc_map__$2 = zprint.config.diff_deep_ks(doc_string,new_doc_map__$1,zprint.config.key_seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_map__$2,new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733))),new_updated_map__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.config.add_calculated_options(new_updated_map__$1),new_doc_map__$2,style_errors], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
}
});
/**
 * Validate a new map and merge it correctly into the existing
 *   options map.  You MUST do this whenever you have an options map
 *   which is to be merged into an existing options map, since a simple
 *   merge-deep will miss things like styles. Returns [updated-map
 *   new-doc-map error-str] It is important that this routine not throw
 *   exceptions on errors, but rather return them in the error-str.
 *   Various routines that call this one will wrap any errors in a
 *   larger context to make the response to the user more useful.
 *   Depends on existing-map to be the full, current options map!
 */
zprint.config.config_and_validate = (function zprint$config$config_and_validate(var_args){
var G__28884 = arguments.length;
switch (G__28884) {
case 5:
return zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$5 = (function (doc_string,doc_map,existing_map,new_map,validate_QMARK_){
if((!(cljs.core.empty_QMARK_(new_map)))){
var _ = null;
var new_map__$1 = zprint.spec.coerce_to_boolean(new_map);
var errors = (cljs.core.truth_(validate_QMARK_)?zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2(new_map__$1,doc_string):null);
var vec__28885 = zprint.config.internal_config(doc_string,doc_map,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(existing_map,new cljs.core.Keyword(null,"styles-applied","styles-applied",-1132259153),cljs.core.PersistentVector.EMPTY),new_map__$1);
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28885,(0),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28885,(1),null);
var internal_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28885,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map,new_doc_map,(cljs.core.truth_(internal_errors)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(internal_errors)].join(''):errors)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
}
}));

(zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4 = (function (doc_string,doc_map,existing_map,new_map){
return zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$5(doc_string,doc_map,existing_map,new_map,new cljs.core.Keyword(null,"validate","validate",-201300827));
}));

(zprint.config.config_and_validate.cljs$lang$maxFixedArity = 5);

/**
 * Do configuration and validation of options.
 *   op-options are options that control where to look for information.
 *   Returns [new-map doc-map errors]
 */
zprint.config.config_and_validate_all = (function zprint$config$config_and_validate_all(op_options){
var default_map = zprint.config.get_default_options();
var default_doc_map = zprint.config.get_default_explained_all_options();
var vec__28888 = zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4("Operational options",default_doc_map,default_map,op_options);
var op_options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28888,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28888,(1),null);
var op_option_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28888,(2),null);
var op_options__$2 = zprint.config.select_op_options(op_options__$1);
var home = null;
var file_separator = null;
var zprintrc_file = [home,file_separator,zprint.config.zprintrc].join('');
var vec__28891 = (cljs.core.truth_((function (){var and__5043__auto__ = home;
if(cljs.core.truth_(and__5043__auto__)){
return file_separator;
} else {
return and__5043__auto__;
}
})())?zprint.config.get_config_from_path(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.config.zprintrc,zprint.config.zprintedn], null),file_separator,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [home], null)):null);
var opts_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28891,(0),null);
var errors_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28891,(1),null);
var rc_filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28891,(2),null);
var home_config = vec__28891;
var vec__28894 = zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4(["Home directory file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rc_filename)].join(''),default_doc_map,default_map,opts_rcfile);
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894,(0),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894,(1),null);
var rc_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894,(2),null);
var vec__28897 = (cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"search-config?","search-config?",-932850546).cljs$core$IFn$_invoke$arity$1(updated_map);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"search-config?","search-config?",-932850546).cljs$core$IFn$_invoke$arity$1(op_options__$2);
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return file_separator;
} else {
return and__5043__auto__;
}
})())?zprint.config.scan_up_dir_tree(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.config.zprintrc,zprint.config.zprintedn], null),file_separator):null);
var search_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28897,(0),null);
var search_errors_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28897,(1),null);
var search_filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28897,(2),null);
var search_config = vec__28897;
var vec__28900 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(home_config,search_config))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [search_rcfile,search_errors_rcfile,search_filename], null):null);
var search_rcfile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28900,(0),null);
var search_errors_rcfile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28900,(1),null);
var search_filename__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28900,(2),null);
var vec__28903 = zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4([":search-config? file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_filename__$1)].join(''),new_doc_map,updated_map,search_rcfile__$1);
var search_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28903,(0),null);
var search_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28903,(1),null);
var search_rc_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28903,(2),null);
var vec__28906 = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(new cljs.core.Keyword(null,"search-config?","search-config?",-932850546).cljs$core$IFn$_invoke$arity$1(updated_map));
if(and__5043__auto__){
var and__5043__auto____$1 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"cwd-zprintrc?","cwd-zprintrc?",167207541).cljs$core$IFn$_invoke$arity$1(search_map);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"cwd-zprintrc?","cwd-zprintrc?",167207541).cljs$core$IFn$_invoke$arity$1(op_options__$2);
}
})();
if(cljs.core.truth_(and__5043__auto____$1)){
return file_separator;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?zprint.config.get_config_from_path(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.config.zprintrc,zprint.config.zprintedn], null),file_separator,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["."], null)):null);
var cwd_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28906,(0),null);
var cwd_errors_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28906,(1),null);
var cwd_filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28906,(2),null);
var vec__28909 = zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4([":cwd-zprintrc? file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cwd_filename)].join(''),search_doc_map,search_map,cwd_rcfile);
var updated_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28909,(0),null);
var new_doc_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28909,(1),null);
var cwd_rc_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28909,(2),null);
var all_errors = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(new cljs.core.List(null,op_option_errors,(new cljs.core.List(null,errors_rcfile,(new cljs.core.List(null,rc_errors,(new cljs.core.List(null,search_errors_rcfile__$1,(new cljs.core.List(null,search_rc_errors,(new cljs.core.List(null,cwd_errors_rcfile,(new cljs.core.List(null,cwd_rc_errors,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)))));
var all_errors__$1 = ((cljs.core.empty_QMARK_(all_errors))?null:all_errors);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map__$1,new_doc_map__$1,all_errors__$1], null);
});
/**
 * s is string containing a comment.  See if it starts out ;!zprint
 *   (with any number of ';' allowed), and if it does, attempt to parse
 *   it as an options-map.  Return [options error-str] with only options
 *   populated if it works, and only error-str if it doesn't.  Can't use
 *   config-and-validate here as we don't have anything to merge into.
 *   Use sci/eval-string to create sandboxed functions if any exist in
 *   the options map.
 */
zprint.config.get_options_from_comment = (function zprint$config$get_options_from_comment(zprint_num,s){
var s_onesemi = clojure.string.replace(s,/^;+/,";");
var comment_split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s_onesemi,/^;!zprint /);
var temp__5804__auto__ = cljs.core.second(comment_split);
if(cljs.core.truth_(temp__5804__auto__)){
var possible_options = temp__5804__auto__;
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.config.sci_load_string(possible_options),null], null);
}catch (e28912){var e = e28912;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,["Unable to create zprint options-map from: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(possible_options),"' found in !zprint directive number: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint_num)," because: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
}} else {
return null;
}
});
/**
 * Take a vector of strings and concatenate them into one string with
 *   newlines between them.
 */
zprint.config.vec_str_to_str = (function zprint$config$vec_str_to_str(vec_str){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",vec_str));
});
zprint.config.help_str = zprint.config.vec_str_to_str(cljs.core.PersistentVector.fromArray([zprint.config.about(),""," The basic call uses defaults, prints to stdout","","   (zprint x)",""," All zprint functions also allow the following arguments:","","   (zprint x <width>)","   (zprint x <width> <options>)","   (zprint x <options>)",""," Format a function to stdout (accepts arguments as above)","","   (zprint-fn <fn-name>)",""," Output to a string instead of stdout:","","   (zprint-str x)","   (zprint-fn-str <fn-name>)",""," Syntax color output for an ANSI terminal:","","   (czprint x)","   (czprint-fn <fn-name>)","   (czprint-str x)","   (czprint-fn-str <fn-name>)",""," The first time you call a zprint printing function, it configures"," itself from $HOME/.zprintrc.",""," Explain current configuration, shows all possible configurable"," values as well as source of non-default values:","","   (zprint nil :explain)",""," Change current configuration from running code:","","   (set-options! <options>)",""," Format a complete file (recognizing ;!zprint directives):","","   (zprint-file infile file-name outfile <options>)",""," Format a string containing multiple \"top level\" forms, essentially"," a file contained in a string, (recognizing ;!zprint directives):","","   (zprint-file-str file-str zprint-specifier <options> <doc-str>)",""," Output information to include when submitting an issue:","","   (zprint nil :support)",""], true));

//# sourceMappingURL=zprint.config.js.map
