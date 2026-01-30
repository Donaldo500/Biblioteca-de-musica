import { useState, useEffect } from "react";
import Music from "../Music";
import React from "react";
import useFetchSongs from "../../Hooks/useFetchSongs";

interface SearchProps{
    setArtist: (value:string) => void;
    artist: string;
    songs: Song[];
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
    setSongsLibrary: React.Dispatch<React.SetStateAction<Song[]>>;
    songsLibrary: Song[];
}

type Song = {
    id: number;
    albumName: string;
    artist: string;
    songName: string;
    img: string;
    library: boolean; 
};

const SearchResults = ({setArtist, artist, songs, setSongs, songsLibrary, setSongsLibrary}:SearchProps) =>{

    const [search, setSearch] = useState<string>("");
    const fetchSongs = useFetchSongs(artist);

    useEffect(() => {
        if (fetchSongs.Songs.length === 0) return;
            setSongs(fetchSongs.Songs);
    }, [fetchSongs]);

    const isInLibrary = (id: number) => {
        return songsLibrary.some(song => song.id === id && song.library);
    }

    const addToLibrary = (id: number) => {
    const songToAdd = songs.find(song => song.id === id);
    if(!songToAdd) return;

        setSongsLibrary(prev => {
            const existingSong = prev.find(s => s.id === id);

            if (existingSong) {
                if (!existingSong.library) {
                    return prev.map(s =>
                        s.id === id ? {...s, library: true} : s
                    );
                }
                return prev; 
            }

            return [...prev, {...songToAdd, library: true}];
        });
    };


    const clickSearch = () => {
        setArtist(search);
    }

    const enterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            setArtist(search);
        }
    }

    const renderSongs = () =>{
        return(
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        <Music music={song}/>

                        {
                            isInLibrary(song.id) ? (
                                <p id="atLibrary">In Library</p>
                            ) : (
                                <button onClick={() => addToLibrary(song.id)}>Add to Library</button>
                            )
                        }   
                    </li>
                ))}
            </ul>
        );
    }

    const renderContent = () => {
        if(fetchSongs.isLoading) return <p className="bigtext">Loading...</p>
        if(fetchSongs.error) return <p className="bigtext">{fetchSongs.error}</p>
        if(artist && fetchSongs.Songs.length === 0) return <p className="bigtext">No se encontraron canciones del artista</p>
        return renderSongs();
    }

    return(
        <div className="search">
                <div>
                    <input
                    type="text"
                    placeholder="Buscar Artista"
                    value={search}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                    onKeyDown={enterSearch}
                    id="searchbar"
                    />

                    <button onClick={clickSearch}>Search</button>
                </div>
                

                {renderContent()}
            </div>
    );
}

export default SearchResults;