import React from "react";
import { Musictext, Musicimg, SongInf, Mimg } from "./styles";

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
            <Musicimg to={`/song/${music.id}`}><Mimg src={music.img} alt="Song_Image"/></Musicimg>

            <SongInf>
                <Musictext>{music.songName}</Musictext> 
                <Musictext>{music.artist}</Musictext>
                <Musictext>Album: {music.albumName}</Musictext>
            </SongInf>

        </>
    );
}

export default Music;