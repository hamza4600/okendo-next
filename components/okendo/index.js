import { useEffect, useRef } from "react";
import Script from "next/script";
import Head from "next/head";

const Reviews = ({ productId, stars }) => {
  const containerRef = useRef(null);

  const initialiseWidget = () =>
    window.okeWidgetApi.initWidget(containerRef.current);

  useEffect(() => {
    if (window.okeWidgetApi?.initWidget && containerRef.current) {
      initialiseWidget();
    } else {
      document.addEventListener("oke-script-loaded", initialiseWidget);
    }

    return () => {
      document.removeEventListener("oke-script-loaded", initialiseWidget);
    };
  }, [productId]);

  if (!productId) {
    console.error("Okendo Reviews: Product ID is required");
    return null;
  }

  if (stars) {
    return (
      <div
        ref={containerRef}
        data-oke-star-rating
        data-oke-reviews-product-id={`shopify-${productId}`}
      />
    );
  }
  if (!stars) {
    return (
      <div
        ref={containerRef}
        data-oke-widget
        data-oke-reviews-product-id={`shopify-${productId}`}
      />
    );
  }
};

const OkendoReviews = ({
  appId = "1ec34ba6-5bcc-4cb7-8506-0f7f27207988", // pass you own app id
  productId = "11516559628",
}) => (
  <>
    <Head>
      <meta name="oke:subscriber_id" content={appId} />
    </Head>
    <Script
      defer
      src="https://cdn-static.okendo.io/reviews-widget-plus/js/okendo-reviews.js"
    />

    <h1>Product Reviews</h1>

    <Reviews productId={productId} stars={true} />
    <Reviews productId={productId} />
  </>
);

export default OkendoReviews;
