(ns frontend.views
  (:require
    [reagent.core :as r]
    [re-frame.core :refer [subscribe dispatch]]
    [frontend.events :as events]
    [frontend.subs :as subs]))

(defn header []
     [:header.sans-serif
      [:h1.f2.lh-title.fw9.mb3.mt0.pt3.bt.bw2 "JavaScript To ClojureScript"]
      [:h2.f3.mid-gray.lh-title "Transform your JS source to Cljs!"]])

(defn transform-code-button [text]
 [:div.mv4.absolute.left-0.tracked
    [:a.link.br.bw2.b--black.pa3.bg-red.white.b.ttc {:href "#0" :on-click #(dispatch [::events/transform-code @text])} [:span.ml6.underline-hover "transform code"]]])

(defn javascript-code [text]
  [:div.fl.fl-ns.w-50.pa1.bg-white.h-100.br2.br--left-ns
   [header]
   [:textarea.h5.db.border-box.hover-black.w-100.ba.b--black-20.pa2.br2.mb2.code
    {:id "js-code" :name "js-code" :on-change #(reset! text (-> % .-target .-value))}]
   [transform-code-button text]])

(defn clojurescript-code [transformed-code]
     [:div.fl.fl-ns.w-50.bg-light-blue.h-100.pa1.br2.br--right-ns
      (when transformed-code
        [:p.ph3.f5.lh-copy.measure.mt0-ns.code transformed-code])]) 

(defn footer []
  [:footer.absolute.bottom-0.left-0.bg-black.washed-blue.w-100.pv1.i.garamond
   [:span "from "]
   [:a.link.washed-blue {:href "https://github.com/glippi"} "glippi "]
   [:span "with "]
   [:span.red.b "λove"]])

(defn main []
  (let [text (r/atom "")
        transformed-code @(subscribe [::subs/transformed-code])]
    [:<>
     [javascript-code text]
     [clojurescript-code transformed-code]
     [footer]]))
