import{r as a,j as t,W as c}from"./main-C06Jgh32.js";const i=768;function u(){const[e,n]=a.useState(void 0),[s,d]=a.useState(!1);return a.useEffect(()=>{if(typeof window>"u")return;const r=window.matchMedia(`(max-width: ${i-1}px)`),p=()=>{n(window.innerWidth<i)},o=()=>{d("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)};return r.addEventListener("change",p),window.addEventListener("resize",o),n(window.innerWidth<i),o(),()=>{r.removeEventListener("change",p),window.removeEventListener("resize",o)}},[]),{isMobile:!!e,isTouch:s,isDesktop:!e&&!s}}const h=()=>{const e=typeof window<"u"?window.location.origin:"https://dataopsgroup.com";return t.jsx(c,{children:t.jsx("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "${e}/#organization",
            "name": "DataOps Group",
            "url": "${e}",
            "logo": {
              "@type": "ImageObject",
              "@id": "${e}/#logo",
              "url": "${e}/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png",
              "width": "512",
              "height": "512",
              "caption": "DataOps Group Logo"
            },
            "image": {
              "@type": "ImageObject",
              "url": "${e}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png",
              "width": "1200",
              "height": "630"
            },
            "description": "DataOps Group is a HubSpot consultancy that helps businesses optimize their HubSpot implementation and maximize their ROI through data-driven strategies and expert implementation.",
            "sameAs": [
              "https://www.linkedin.com/company/dataops-group/",
              "https://twitter.com/dataops_group"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "230 S College Ave",
              "addressLocality": "Fayetteville",
              "addressRegion": "AR",
              "postalCode": "72701",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.0822",
              "longitude": "-94.1719"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+14798442052",
                "contactType": "customer service",
                "email": "info@dataopsgroup.com",
                "availableLanguage": "English",
                "contactOption": "TollFree",
                "areaServed": "US"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+14798442052",
                "contactType": "sales",
                "email": "sales@dataopsgroup.com",
                "availableLanguage": "English",
                "contactOption": "TollFree",
                "areaServed": "US"
              }
            ],
            "areaServed": "Worldwide",
            "foundingDate": "2020-01-01",
            "founder": {
              "@type": "Person",
              "@id": "${e}/#person-geoff-tucker",
              "name": "Geoff Tucker",
              "jobTitle": "Chief Executive Officer",
              "url": "${e}/about",
              "image": "${e}/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png"
            },
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "10"
            }
          }
        `})})},g=()=>{const e=typeof window<"u"?window.location.origin:"https://dataopsgroup.com";return t.jsx(c,{children:t.jsx("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "${e}/#website",
            "url": "${e}",
            "name": "DataOps Group",
            "description": "HubSpot consultancy helping businesses optimize their HubSpot implementation and maximize their ROI through data-driven strategies and expert implementation.",
            "publisher": {
              "@id": "${e}/#organization"
            },
            "inLanguage": "en-US",
            "copyrightHolder": {
              "@id": "${e}/#organization"
            },
            "copyrightYear": "2025",
            "isPartOf": {
              "@id": "${e}/#organization"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${e}/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `})})};export{h as O,g as W,u};
