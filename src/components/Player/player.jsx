import React, { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";

export const Player = ({ type, movieId }) => {
    const {imdb_id} = useParams();
    const [video, setVideo] = useState("https://www.youtube.com/watch?v=7GPSpmJbjV0")
    return (
        <>
            <iframe src={`https://autoembed.to/movie/imdb/${imdb_id}`} width="100%" height="600" frameBorder={0} allowFullScreen />
        </>
    );
}