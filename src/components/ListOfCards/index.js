import React, { useState, useEffect } from "react";
import getPexels from "../../services/getPexels";
import Card from "../Card";

export default function ListOfCards({ params }) {
    const { keyword } = params
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getPexels({ query: keyword }).then(photos => setPhotos(photos));
    }, [keyword]);

    return (
        <>
            {
                photos.map(({ id, src, photographer, photographer_url, alt }) =>
                    <Card
                        key={id}
                        id={id}
                        src={src}
                        photographer={photographer}
                        photographer_url={photographer_url}
                        alt={alt}
                    />
                )
            }
        </>
    )
}