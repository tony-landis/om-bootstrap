(ns om-bootstrap.core
  ;(:import [goog.dom query])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]
            [goog.dom :as gdom]
            [goog.style :as gstyle]
            [goog.events :as gevents]))



(defn focus-in [app owner] 
  (om/set-state! owner :opened true)
  (om/set-state! owner :click-delay true)
  ; onFocus happens before onClick, so we have to
  ; ignore onClick for 0.2 ms, in case
  (go (<! (timeout 200))
      (om/set-state! owner :click-delay false)))

(defn click-on [app owner] 
  (when-not (om/get-state owner :click-delay) 
    ;click-delay has expired, enable state change
    (om/set-state! owner :opened 
                   (if (om/get-state owner :opened) false true))))

(defn focus-out [app owner] 
  (om/set-state! owner :opened false))


; TODO - a simple way to set styles - alert, warning, etc.


(defn button [app owner opts]
  (reify 
    om/IInitState 
    (init-state [_] {:active false
                     :disabled false
                     :block false
                     :class "btn-primary"
                     :icon nil })
    om/IRenderState 
    (render-state [_ {:keys [active class disabled icon] :as state}]
      (let [href (:href app)
            text (or (:text app) app)
            cls (str "btn " 
                     (when (state "active ") "active ")
                     class)]
        (if href 
          (dom/a #js {:className cls :role "button"
                      :disabled disabled 
                      :href (if-not disabled href "javascript:void(0)") }
                 text)
          (dom/button #js {:className cls
                           :type "button"
                           :disabled disabled} 
                      text))))))


(defn button-group [app owner opts]
  (reify 
    om/IInitState 
    (init-state [_] {:vertical false
                     :justified false})
    om/IRenderState 
    (render-state [_ {:keys [vertical justified] :as state}]
      (let [cls (str "btn-group "
                     (when vertical "btn-group-vertical")
                     (when justified "btn-group-justified") )]
        (apply dom/div #js {:className cls}
               (om/build-all button app))))))


(defn button-dropdown [app owner opts]
  (reify 
    om/IInitState 
    (init-state [_] {:vertical false
                     :justified false
                     :dropup false
                     :opened false      ; current hover active
                     :click-delay false ; disable click timeout in process
                     :tabindex "2"      ; TODO global tracking?
                     })
    om/IRenderState 
    (render-state [_ {:keys [dropup vertical justified opened tabindex] :as state}]
      (let [cls (str "btn-group "
                     (when opened "open ")
                     (when dropup "dropup ")
                     (when vertical "btn-group-vertical ")
                     (when justified "btn-group-justified "))]
        (dom/div #js {:className cls
                      :onClick  #(click-on app owner)
                      :onFocus  #(focus-in app owner)  
                      :onBlur   #(focus-out app owner)
                      :tabIndex tabindex
                      :href     (or (:href app) "javascript:void(0)")
                      :style #js {"outline" 0} }
                 (om/build button app)
                 (om/build button 
                           (dom/span nil
                                     (dom/span #js {:className "caret"})  
                                     (dom/span #js {:className "sr-only"} "Toggle"))
                           {:state {:class "btn-primary dropdown-toggle"
                                    :icon "caret"}})
                 (dom/ul #js {:className "dropdown-menu"}
                         (dom/li nil (dom/a nil "test"))
                         (dom/li nil (dom/a nil "test"))))))))



(defn panel [app owner]
  "takes a string or child nodes for the body, 
  or a map with with :head, :body, :foot keys."
  (reify 
    om/IInitState 
    (init-state [_] {:class "panel-default"})
    om/IRenderState 
    (render-state [_ {:keys [class] :as state}]
      (let [head (:head app)
            foot (:foot app)
            body (or (:body app) app)]
        (dom/div #js {:className (str "panel " class)}
                 (when head (dom/div #js {:className "panel-heading"}
                                     (dom/div #js {:className "panel-title"} head)))
                 (dom/div #js {:className "panel-body"} body)
                 (when foot (dom/div #js {:className "panel-footer"} foot))
                 (:foot-b app)
                 )))))

(defn table [app owner]
  "takes ...."
  (reify 
    om/IInitState 
    (init-state [_] {:class ""})
    om/IRenderState 
    (render-state [_ {:keys [class] :as state}]
      (let [rows (:rows app)
            cols (:cols app)]
        (dom/table #js {:className (str "table " class)}
                   ; col titles
                   (when cols
                     (->> (map #(dom/th nil %) cols)
                          (apply dom/tr nil)
                          (dom/thead nil)))
                   ; rows
                   (->> (map (fn [row]
                               (->> (map #(dom/td nil %) row)
                                    (apply dom/tr nil)
                                    )) rows)
                        (apply dom/tbody nil)) )))))

(defn well [app owner]
  "takes ...."
  (reify 
    om/IInitState 
    (init-state [_] {:class ""})
    om/IRenderState 
    (render-state [_ {:keys [class] :as state}]
      (let [ ]
        (dom/div #js {:className (str "well " class)} app )))))


(defn badge [app owner]
  "takes ...."
  (reify 
    om/IInitState 
    (init-state [_] {:class ""})
    om/IRenderState 
    (render-state [_ {:keys [] :as state}]
      (let [;class (or (:class app) class) 
            app   (or (:text app) app)]
        (dom/span #js {:className (str "badge " )} app)))))



(defn list-group [app owner]
  "takes text or a dict with the key :text.
  optional keys - :href - turns the <li> into <a href..>
                  :badge {:text  :class }
  "
  (reify 
    om/IInitState 
    (init-state [_] {:class ""})
    om/IRenderState 
    (render-state [_ {:keys [class] :as state}]
      (let [app-fn ""]
        (->> (map (fn [{:keys [href text] :as item}] 
                    (let [props #js {:className (str "list-group-item "
                                                     (:class item))
                                     :href href}
                          dom-fn (if href dom/a dom/li)
                          badge-val (:badge item)]
                      (dom-fn props
                              (when badge-val (om/build badge badge-val))
                              (dom/span nil (or text item))
                              ))) app)
             (apply dom/ul #js {:className (str "list-group " class)})) ))))




(defn alert [app owner]
  "takes ...."
  (reify 
    om/IInitState 
    (init-state [_] {:class "alert-info"
                     :on-dismiss #(gdom/removeNode (om/get-node owner)) })
    om/IRenderState 
    (render-state [_ {:keys [class on-dismiss] :as state}]
      (let [class (or (:class app) class)
            app (or (:text app) app)]
        (dom/div #js {:className (str "alert " (or (:class app) class) )}
                 (when on-dismiss
                   (dom/button #js {:type "button"
                                    :className "close"
                                    :aria-hidden "true"
                                    :onClick on-dismiss } "x")) ; TODO - change x to &times;
                 app)))))


(defn label [app owner]
  "takes ...."
  (reify 
    om/IInitState 
    (init-state [_] {:class "label-default "})
    om/IRenderState 
    (render-state [_ {:keys [class] :as state}]
      (let [class (or (:class app) class) 
            app   (or (:text app) app)]
        (dom/span #js {:className (str "label " class)} app)))))



(defn pager [app owner]
  "takes ...."
  (reify 
    om/IInitState 
    (init-state [_] {:class " "})
    om/IRenderState 
    (render-state [_ {:keys [class] :as state}]
      (let [class (or (:class app) class) 
            app   (or (:text app) app)]
        (dom/ul #js {:className (str "pager " class)} 
                (dom/li #js {:className "previous disabled"} ; causes align to left  
                        (dom/a #js {:href "#prev-todo"} "← Previous")
                (dom/li #js {:className "next"} ; causes align to right
                        (dom/a #js {:href "#next-todo" } "Next →"))))))))



(defn paginate-to [i pos pages owner]
  (when (and (not= i pos)
             (>= i 1)
             (>= pages i))
    (om/set-state! owner :pos i) ))


(defn paginate [app owner]
  "takes .... "
  (reify 
    om/IInitState 
    (init-state [_] {:class " "  ; pagination-lg, pagination-sm
                     :pos 1
                     :pages 3
                     })
    om/IRenderState 
    (render-state [_ {:keys [class pos pages] :as state}]
      (let [prev (dom/li #js {:className (when (= 1 pos) "disabled ")}  
                         (dom/a #js {:onClick #(paginate-to 1 pos pages owner)}  
                                "←"))   
            fw   (dom/li #js {:className (when (= pages pos) "disabled ")}  
                         (dom/a #js {:onClick #(paginate-to pages pos pages owner) } 
                                "→"))   
            nums (map (fn [i] (dom/li #js {:className (when (= i pos) "active ")
                                           :onClick #(paginate-to i pos pages owner)}
                                      (dom/a nil i))) 
                      (range 1 (+ 1 pages)))]
            (apply dom/ul #js {:className "pagination"} 
                   (flatten [prev nums fw])) ))))



(defn breadcrumb [app owner]
  "takes ...."
  (reify 
    om/IInitState 
    (init-state [_] {:class ""})
    om/IRenderState 
    (render-state [_ {:keys [] :as state}]
      (let []
        (->> (map #(dom/li nil 
                           (dom/a #js {:href (:href %)}
                                  (or (:text %) %)
                                  )) app)
             (apply dom/ol #js {:className (str "breadcrumb ")} ))))))




(defn collapsible-panel [app owner]
  (reify 
    om/IInitState 
    (init-state [_] {:opened false
                     :event-ch nil
                     :index 0
                     })
    om/IRenderState 
    (render-state [_ {:keys [event-ch opened parent index] :as state}]
      (let []
        (dom/div #js {:className "panel panel-default"}
                 (dom/div #js {:className "panel-heading"}
                          (dom/h4 #js {:className "panel-title"}
                                  (dom/a #js {:href "javascript:void(0)"
                                              :onClick #(put! event-ch index)}
                                         (:title app))))
                 (when opened
                   (dom/div #js {:className "panel-body"} 
                            (dom/div #js {:className "panel-collapse collapse in"}
                                     (:body app)))))))))


(defn collapsible [app owner]
  (reify 
    om/IInitState 
    (init-state [_] {:class ""
                     :index 1
                     :event-ch (chan) })
    om/IWillMount
    (will-mount [_]
      (let [event-ch (om/get-state owner :event-ch)]
        (go (loop []
              (let [e (<! event-ch)]
                (prn "event : " e) 
                (prn  (om/get-state owner :index))
                (om/set-state! owner :index e)
                )
              (recur)))))
    om/IRenderState 
    (render-state [_ {:keys [index event-ch] :as state}]
      (let []
        (apply dom/div #js {:className "panel-group"}
                 (map (fn [[i ii]]
                        (om/build collapsible-panel ii 
                                  {:state {:opened (if (= index i) true false)
                                           :event-ch event-ch
                                           :index i }}))
                      (map-indexed vector (:items app))) )))))
