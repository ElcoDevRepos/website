import React from "react";
import { Helmet } from "react-helmet";

const FAITracker = () => {
  return (
    <Helmet>
      {/* Inline script for faitracker initialization */}
      <script type="text/javascript">
        {`
          window.faitracker = window.faitracker || function() {
            this.q = [];
            var t = new CustomEvent("FAITRACKER_QUEUED_EVENT");
            return this.init = function(t, e, a) {
              this.TOKEN = t;
              this.INIT_PARAMS = e;
              this.INIT_CALLBACK = a;
              window.dispatchEvent(new CustomEvent("FAITRACKER_INIT_EVENT"));
            },
            this.call = function() {
              var e = { k: "", a: [] };
              if (arguments && arguments.length >= 1) {
                for (var a = 1; a < arguments.length; a++) e.a.push(arguments[a]);
                e.k = arguments[0];
              }
              this.q.push(e), window.dispatchEvent(t);
            },
            this.message = function() {
              window.addEventListener("message", (event) => {
                if (event.data.origin === "faitracker") {
                  this.call("message", event.data.type, event.data.message);
                }
              });
            },
            this.message(),
            this.init("to2lxri0d2wnl458ign6jw0gjraya6dv", { host: "https://api.factors.ai" }),
            this;
          }();
        `}
      </script>

      {/* External Factors.ai script */}
      <script src="https://app.factors.ai/assets/factors.js" async></script>
    </Helmet>
  );
};

export default FAITracker;