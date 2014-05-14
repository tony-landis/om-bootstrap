(ns examples.core 
  (:require ;[cljs.repl.browser]
            [om-bootstrap.core :as bs]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            ;[sablono.core :as html :refer-macros [html]]
            ;[ankha.core :as ankha]
            ))

(enable-console-print!)

;;
;; Examples
;;


(def app-state 
  (atom 
    {:button {:text "Click Me"
              :sizes ["tiny" "large"]}
     :topbar {:title "Grok Om" 
              :class "hide-for-small"
              :left  :topbar-search
              :right [{:text "Button" :href "#2"}
                      {:text "Dropdown" 
                       :items [{:text "First"}
                               {:text "Second"} ]}] }
     :collapsible {:items [{:title "BBB" :body "BBB BBB"}
                           {:title "CCC" :body "CCC CCC"} 
                           {:title "DDD" :body "DDD DDD"}]}
     }))



(defn app-layout [app owner]
  (reify 
    om/IRenderState 
    (render-state [_ state]
      (dom/div #js {:style #js {:margin "40px"}}

               (dom/h1 nil "Om-bootstrap")

               ; panel with buttons
               (om/build bs/panel
                         (dom/div nil 
                                  (om/build bs/button-dropdown (get-in app [:topbar :right 1]))
                                  (dom/span nil " ")
                                  (om/build bs/button (get-in app [:topbar :right 0]))
                                  (dom/span nil " ")
                                  (om/build bs/button-group (get-in app [:topbar :right])) ))    

               (dom/div nil (om/build bs/panel 
                                      {:head "A table in a Panel"
                                       :body "Some random text lorum ipsom dolor."
                                       :foot-b (om/build bs/table 
                                                         {:cols ["Col1" "Col2" "Col3" ]
                                                          :rows [["a1" "a2" "a3"]
                                                                 ["b1" "b2" "b3"] ]})}))

               (om/build bs/panel
                         (dom/div nil 
                                  (dom/h3 nil "Pagination and Pager")
                                  (om/build bs/paginate app)
                                  (om/build bs/pager app)))
               
               (om/build bs/breadcrumb (get-in app [:topbar :right]))

               (dom/div nil (om/build bs/panel {:body "Basic Panel example"
                                                :head "Panel Heading" 
                                                :foot "Footer of the panel"}))

               (om/build bs/collapsible (get-in app [:collapsible]))

               (om/build bs/panel 
                         (apply dom/div nil
                                (om/build-all bs/label 
                                              ["Default"
                                               {:text "Primary" :class "label-primary"}
                                               {:text "Success" :class "label-success"}
                                               {:text "Info" :class "label-info"}
                                               {:text "Warning" :class "label-warning"}
                                               {:text "Danger" :class "label-danger"}] )))

               (om/build bs/alert {:text "Success alert :)" :class "alert-success"})
               (om/build bs/alert {:text "Info alert..." :class "alert-info"})
               (om/build bs/alert {:text "Danger alert!" :class "alert-danger"})

               (om/build bs/list-group 
                         ["Item One"
                          {:text "Item in Dict" :class "list-group-item-success"}
                          {:text "Item with Badge" :badge {:text "2"}}
                          {:text "Item is Link " :href "#item" :class "list-group-item-info" }
                          {:text "Item is Link + Badge " :href "#item" :badge {:text "21" :class ""}} ])

               (dom/div nil 
                        (om/build bs/well " I am in a well and cant' seem to get out. Help!"))
               ))))

(om/root app-layout app-state {:target (. js/document (getElementById "main"))})
