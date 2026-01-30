import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Music from "../Music";

type Songtype = {
    id: number;
    albumName: string;
    artist: string;
    songName: string;
    img: string;
    library: boolean;
};

interface infoProps{
    songs?: Songtype[];
    songsLibrary?: Songtype[];
}

type trackstate = {
    track: Songtype | null;
    isLoading: boolean;
    error: null | string;
}

const SongDetails = ({songs, songsLibrary}:infoProps) =>{
    const {id} = useParams<{id : string}>();
    const [infoSong, setInfoSongs] = useState<trackstate>({track: null, isLoading: true, error:null})

    useEffect(() => {
        if(!id) {
            setInfoSongs({
                track: null,
                isLoading: false,
                error: "ID Invalido",
            });
            return;
        }

        const songId = Number(id);

        const allSongs = [...(songsLibrary ?? []), ...(songs ?? []).filter(s => !(songsLibrary ?? []).some(lib => lib.id === s.id))];

        console.log(songsLibrary);
      
        const foundSong = allSongs.find((s) => Number(s.id) === songId);

        if(foundSong){
            setInfoSongs({track: (foundSong), isLoading: false, error: null});
        }else{
            setInfoSongs({track: null, isLoading: false, error: "Cancion no encontrada"});
        }

    }, [id, songs, songsLibrary]);

    const renderSong = () => {
        if(!infoSong.track) return null;

        return(
            <>
                <Music music={infoSong.track}/>
            </>
        );
    }

    const infoSongRender = () => {
        if(infoSong.isLoading) return <p className="songdetatext">Loading...</p>
        if(infoSong.error) return <p className="songdetatext">No se encontro la cancion</p>
        return renderSong();
    }

    return(
        <div className="songDetails">
            {infoSongRender()}
        </div>
    );
}

export default SongDetails;