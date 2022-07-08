import React, { useState, useEffect } from "react";
import getPexels from "../../services/getPexels";
import Card from "../Card";

export default function ListOfCards({ params }) {
    let { keyword } = params
    if ( !keyword ) keyword = "Nature"
    
    const [photos, setPhotos] = useState([]);
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        getPexels({ query: keyword }).then(photos => {
            setPhotos(photos)
            setLoading(false)
        });
    }, [keyword]);

    if (loading) return <i>CARGANDO...</i>

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