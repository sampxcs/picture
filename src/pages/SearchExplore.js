import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function SearchExplore({ params }) {
  return (
    <>
      <Main params={params} />
      <Footer />
    </>
  );
}
