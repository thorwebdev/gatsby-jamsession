import React, { useEffect } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => {
  let stripe;
  const redirectToCheckout = async () => {
    const { error } = await stripe.redirectToCheckout({
      items: [{ sku: "sku_ETXp5bDxchZWMI", quantity: 1 }],

      // Note that it is not guaranteed your customers will be redirected to this
      // URL *100%* of the time, it's possible that they could e.g. close the
      // tab between form submission and the redirect.
      successUrl: "http://localhost:8000/page-2",
      cancelUrl: "http://localhost:8000"
    });
  };
  useEffect(() => {
    stripe = window.Stripe("pk_test_Lhxb61IjIdgFGPu1j3V4MsQH", {
      betas: ["checkout_beta_4"]
    });
  });
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <button role="link" onClick={redirectToCheckout}>
        BUY MY COOL EBOOK
      </button>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
