import React from "react";
import "./Collections.css"
import Card from "../Card";
import { collectionsPhotosData } from "./CollectionsData";

export default function Collections() {
    return (
        <div className="collections">
            {collectionsPhotosData.map(({ className, title, id, src, alt, avg_color }) => (
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
            ))}
        </div>
    )
}

// src, alt, photographer, photographer_url, avg_color, className