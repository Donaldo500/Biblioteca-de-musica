import Music from "../Music";
import React from "react";
import { LibraryELement, RemoveButton, UserImg } from "./styles";
import { LibraryList } from "./styles";

type Song = {
    id: number;
    albumName: string;
    artist: string;
    songName: string;
    img: string;
    library: boolean; 
};

interface LibraryProps{
    songsLibrary: Song[];
    setSongsLibrary: React.Dispatch<React.SetStateAction<Song[]>>;
}

const Library = ({ songsLibrary, setSongsLibrary }:LibraryProps) => {

    const removeToLibrary = (id: number) => {
        setSongsLibrary(prevSongs =>
            prevSongs.map(song =>
                song.id === id
                ? {...song, library: false}
                : song
            )
        );
    };

    return(
        <div>
            <UserImg>
                <img src ="/img/COQUETA.jpeg" alt ="User img"/>
                <h2>Tu Biblioteca</h2>      
            </UserImg>  

            <LibraryList>
                {songsLibrary.filter(song => song.library)
                    .map((song) => (  
                        <LibraryELement key={song.id}>
                            <Music music={song}/>

                            <RemoveButton onClick={() => removeToLibrary(song.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </RemoveButton>
                        </LibraryELement>  
                ))}
            </LibraryList>
        </div>
    );
}

export default Library;