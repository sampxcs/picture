import React, { useState, useEffect } from "react";
import getPexels from "../../services/getPexels";
import Card from "../Card";
import "./Main.css";

export default function Main() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPexels({ /* query:"cats" */ }).then(photos => setPhotos(photos));
  }, []);

  return (
    <div>
      <div className="main">
      {photos.map((photo) => <Card key={photo.id} src={photo.src} photographer={photo.photographer} photographer_url={photo.photographer_url} alt={photo.alt}/>)}
    </div>
    </div>
  );
}
