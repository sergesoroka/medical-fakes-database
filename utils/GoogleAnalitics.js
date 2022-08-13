import Script from "next/script";

import React from "react";

const GoogleAnalitics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-54527150-1"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-54527150-1', {
      page_path: window.location.pathname,
    });
  `,
        }}
      />
    </>
  );
};

export default GoogleAnalitics;

