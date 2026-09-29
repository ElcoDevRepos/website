import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

/** Google Analytics 4, Factors.ai, the LinkedIn Insight tag and Vercel Analytics, loaded after the page is interactive. */
export function Tracking() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-NZY90G4L7Y" strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NZY90G4L7Y');`}
      </Script>
      <Script id="factors" strategy="lazyOnload">
        {`window.faitracker=window.faitracker||function(){this.q=[];var t=new CustomEvent("FAITRACKER_QUEUED_EVENT");return this.init=function(t,e,a){this.TOKEN=t,this.INIT_PARAMS=e,this.INIT_CALLBACK=a,window.dispatchEvent(new CustomEvent("FAITRACKER_INIT_EVENT"))},this.call=function(){var e={k:"",a:[]};if(arguments&&arguments.length>=1){for(var a=1;a<arguments.length;a++)e.a.push(arguments[a]);e.k=arguments[0]}this.q.push(e),window.dispatchEvent(t)},this.message=function(){window.addEventListener("message",function(t){"faitracker"===t.data.origin&&this.call("message",t.data.type,t.data.message)})},this.message(),this.init("to2lxri0d2wnl458ign6jw0gjraya6dv",{host:"https://api.factors.ai"}),this}();`}
      </Script>
      <Script src="https://app.factors.ai/assets/factors.js" strategy="lazyOnload" />
      <Script id="linkedin" strategy="lazyOnload">
        {`_linkedin_partner_id="7151122";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s)})(window.lintrk);`}
      </Script>
      <Analytics />
    </>
  );
}
