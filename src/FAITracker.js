import React, { useEffect } from "react";

const FAITracker = () => {
  useEffect(() => {
    // Inline script for faitracker initialization
    const faitrackerScript = document.createElement('script');
    faitrackerScript.type = 'text/javascript';
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

    // LinkedIn script
    const linkedinScript = document.createElement('script');
    linkedinScript.type = 'text/javascript';
    linkedinScript.innerHTML = `
      _linkedin_partner_id = "7151122";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `;
    document.head.appendChild(linkedinScript);

    const linkedinScript2 = document.createElement('script');
    linkedinScript2.type = 'text/javascript';
    linkedinScript2.innerHTML = `
      (function(l) {
        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q=[]}
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);})(window.lintrk);
    `;
    document.head.appendChild(linkedinScript2);

    // External Factors.ai script
    const factorsScript = document.createElement('script');
    factorsScript.src = "https://app.factors.ai/assets/factors.js";
    factorsScript.async = true;
    document.head.appendChild(factorsScript);

    // LinkedIn noscript image
    const linkedinImg = document.createElement('img');
    linkedinImg.height = 1;
    linkedinImg.width = 1;
    linkedinImg.style.display = 'none';
    linkedinImg.alt = '';
    linkedinImg.src = 'https://px.ads.linkedin.com/collect/?pid=7151122&fmt=gif';
    document.body.appendChild(linkedinImg);

    // Cleanup function
    return () => {
      document.head.removeChild(faitrackerScript);
      document.head.removeChild(linkedinScript);
      document.head.removeChild(linkedinScript2);
      document.head.removeChild(factorsScript);
      document.body.removeChild(linkedinImg);
    };
  }, []);

  return null;
};

export default FAITracker;