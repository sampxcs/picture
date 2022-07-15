import React from "react";
import "./Collections.css";
import Card from "../Card";
import { collectionsPhotosData, collectionsFireData, collectionsEarthData, collectionsAirData, collectionsWaterData } from "./CollectionsData";

export default function Collections() {
  return (
    <div className="main">
      <h2 className="title-explore">
        Discover the best royalty free images of nature & videos shared by
        creators.
      </h2>
      <h2 className="title-collections">Popular Collections.</h2>
      <div className="collections">
        {collectionsPhotosData.map(
          ({ className, title, id, src, alt, avg_color }) => (
            <div className="card-collection" key={id}>
              <Card
                className={className}
                title={title}
                id={id}
                src={src}
                alt={alt}
                avg_color={avg_color}
              />
            </div>
          )
        )}
      </div>
      {/* <h2 className="title-collections">Amazing Videos.</h2>
      <div className="collections">
        {collectionsPhotosData.map(
          ({ className, title, id, src, alt, avg_color }) => (
            <div className="card-collection" key={id}>
              <Card
                className={className}
                title={title}
                id={id}
                src={src}
                alt={alt}
                avg_color={avg_color}
              />
            </div>
          )
        )}
      </div> */}
      <h2 className="title-collections">Water.</h2>
      <div className="collections">
        {collectionsWaterData.map(
          ({ className, title, id, src, alt, avg_color }) => (
            <div className="card-collection" key={id}>
              <Card
                className={className}
                title={title}
                id={id}
                src={src}
                alt={alt}
                avg_color={avg_color}
              />
            </div>
          )
        )}
      </div>
      <h2 className="title-collections">Earth.</h2>
      <div className="collections">
        {collectionsEarthData.map(
          ({ className, title, id, src, alt, avg_color }) => (
            <div className="card-collection" key={id}>
              <Card
                className={className}
                title={title}
                id={id}
                src={src}
                alt={alt}
                avg_color={avg_color}
              />
            </div>
          )
        )}
      </div>
      <h2 className="title-collections">Air.</h2>
      <div className="collections">
        {collectionsAirData.map(
          ({ className, title, id, src, alt, avg_color }) => (
            <div className="card-collection" key={id}>
              <Card
                className={className}
                title={title}
                id={id}
                src={src}
                alt={alt}
                avg_color={avg_color}
              />
            </div>
          )
        )}
      </div>
      <h2 className="title-collections">Fire.</h2>
      <div className="collections">
        {collectionsFireData.map(
          ({ className, title, id, src, alt, avg_color }) => (
            <div className="card-collection" key={id}>
              <Card
                className={className}
                title={title}
                id={id}
                src={src}
                alt={alt}
                avg_color={avg_color}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

// src, alt, photographer, photographer_url, avg_color, className
