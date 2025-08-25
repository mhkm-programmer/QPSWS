import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({
  title = "Qatar Parking Shade & Welding Solutions | Doha, Qatar",
  description = "Professional Parking Shade installation and Welding Solutions across Doha, Qatar. Affordable, reliable, and available 24/7 with certified technicians.",
  keywords = "Parking Shade Doha, Welding Qatar, Car Parking Shades Qatar, Welding Services Qatar",
  canonical = "https://www.qatarshadeweld.com",
  image = "https://8upload.com/image/68a21a1bd76fb/Doha_Plumber.png",
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Qatar Parking Shade and Welding Solutions",
    "url": "https://www.qatarshadeweld.com",
    "logo": image,
    "image": image,
    "description": description,
    "telephone": "+97474402654",
    "email": "parkingwelding.qa@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Doha",
      "addressCountry": "Qatar"
    },
    "sameAs": [
      "https://www.facebook.com/people/Welding-Solutions-and-car-parking-shade/61561350087585/",
      "https://www.instagram.com/mahamod4506"
    ],
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Qatar"
    }
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph (Facebook / LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default PageTitle;
