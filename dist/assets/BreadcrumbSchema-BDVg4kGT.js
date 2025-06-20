import{j as e,W as o}from"./main-C06Jgh32.js";const s=({items:i})=>e.jsx(o,{children:e.jsx("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              ${i.map((t,n)=>`{
                "@type": "ListItem",
                "position": ${n+1},
                "name": "${t.name}",
                "item": "${window.location.origin}${t.url}"
              }`).join(",")}
            ]
          }
        `})});export{s as B};
