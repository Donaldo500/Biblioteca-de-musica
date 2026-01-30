import React from "react";
import { Link } from 'react-router-dom';

type Songtype = {
    id: number;
    albumName: string;
    artist: string;
    songName: string;
    img: string;
    library: boolean;
};

interface SongProps{
    music: Songtype;
}

const Music = ({music}:SongProps) => {

    return(
        <>
            <Link to={`/song/${music.id}`}><img src={music.img} alt="Song_Image"/></Link>

            <div className="songinfo">
                <p>{music.songName}</p> 
                <p>{music.artist}</p>
                <p>Album: {music.albumName}</p>
            </div>

        </>
    );
}

export default Music;