import React, { useState, useEffect } from "react";
import getPexels from "../../services/getPexels";
import Card from "../Card";
import "./Main.css";

export default function Main() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPexels().then(photos => setPhotos(photos));
  }, []);

  return (
    <div>
      <div className="main">
      {photos.map((photo) => <Card src={photo}/>)}
    </div>
    </div>
  );
}
