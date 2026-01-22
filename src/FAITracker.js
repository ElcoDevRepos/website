import { useEffect } from "react";

const FAITracker = () => {
  useEffect(() => {
    // ---------- Factors.ai inline script ----------
    const faitrackerScript = document.createElement("script");
    faitrackerScript.type = "text/javascript";
    faitrackerScript.innerHTML = `
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
    `;
    document.head.appendChild(faitrackerScript);

    // ---------- LinkedIn base ----------
    const linkedinScript = document.createElement("script");
    linkedinScript.type = "text/javascript";
    linkedinScript.innerHTML = `
      _linkedin_partner_id = "7151122";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `;
    document.head.appendChild(linkedinScript);

    const linkedinScript2 = document.createElement("script");
    linkedinScript2.type = "text/javascript";
    linkedinScript2.innerHTML = `
      (function(l) {
        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q=[]}
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);
    `;
    document.head.appendChild(linkedinScript2);

    // ---------- Factors.ai external ----------
    const factorsScript = document.createElement("script");
    factorsScript.src = "https://app.factors.ai/assets/factors.js";
    factorsScript.async = true;
    document.head.appendChild(factorsScript);

    // ---------- Apollo tracker ----------
    const apolloScript = document.createElement("script");
    const cacheBuster = Math.random().toString(36).substring(7);

    apolloScript.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${cacheBuster}`;
    apolloScript.async = true;
    apolloScript.defer = true;
    apolloScript.onload = () => {
      if (window.trackingFunctions?.onLoad) {
        window.trackingFunctions.onLoad({
          appId: "69723a7b1c8c6d00211db404",
        });
      }
    };
    document.head.appendChild(apolloScript);

    // ---------- LinkedIn noscript pixel ----------
    const linkedinImg = document.createElement("img");
    linkedinImg.height = 1;
    linkedinImg.width = 1;
    linkedinImg.style.display = "none";
    linkedinImg.alt = "";
    linkedinImg.src =
      "https://px.ads.linkedin.com/collect/?pid=7151122&fmt=gif";
    document.body.appendChild(linkedinImg);

    // ---------- Cleanup ----------
    return () => {
      document.head.removeChild(faitrackerScript);
      document.head.removeChild(linkedinScript);
      document.head.removeChild(linkedinScript2);
      document.head.removeChild(factorsScript);
      document.head.removeChild(apolloScript);
      document.body.removeChild(linkedinImg);
    };
  }, []);

  return null;
};

export default FAITracker;
