(ns frontend.subs
  (:require [re-frame.core :refer [reg-sub]])) 

(reg-sub
  ::transformed-code
 (fn [db]
   (:transformed-code db)))
