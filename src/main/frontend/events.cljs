(ns frontend.events
  (:require
    [js-to-cljs.core :refer [parse-str]]
    [re-frame.core :refer [reg-event-db]]
    [frontend.db :as db]))

(reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))


(reg-event-db
 ::transform-code
 (fn [db [_ code]]
   (assoc db :transformed-code (parse-str code))))
