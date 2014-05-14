#_
(defproject om-bootstrap "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]])

(defproject om-bootstrap "0.1.0-SNAPSHOT"
  :description "Bootstrap framework components for Om"
  :url "http://om-bootstrap.tonylandis.com"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2197"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.6.2"]
                 [sablono "0.2.16"]
                 ; following only for dev mode
                 [ankha "0.1.2"]
                 [com.cemerick/piggieback "0.1.3"]]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :plugins [[com.keminglabs/cljx "0.3.2"]]
  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :clj}
                  {:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :cljs}]}
  :profiles {:dev {:plugins [[lein-cljsbuild "1.0.3"]]
                   :cljsbuild {:builds [{:id "examples"
                                         :source-paths ["src" "target/classes"]
                                         :compiler {:output-to "out/examples.js"
                                                    :output-dir "out"
                                                    :optimizations :none ;:simple
                                                    :pretty-print true
                                                    :source-map true
                                                    }}]}}})

