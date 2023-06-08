import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AlbumView(){

    const { id } = useParams();

    const [ albumData, setAlbumdata ] = useState([]);

    return (
        <div>
            <h2> The ID Passed Was : { id }</h2>
            <p> Album Data Goes Here! </p>
        </div>
    )
}