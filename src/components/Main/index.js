import React from "react";
import PexelsResults from "../PexelsResults";
import './Main.css'

export default function Main({ params }) {
  return (
    <div className="main">
      <PexelsResults params={params} />
    </div>
  );
}
