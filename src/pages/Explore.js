import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Home({ params }) {
  return (
    <>
      <Main params={params} />
      <Footer />
    </>
  );
}
