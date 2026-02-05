import { useState, useEffect } from "react";
import Music from "../Music";
import React from "react";
import useFetchSongs from "../../Hooks/useFetchSongs";
import { AddLibrary, AtLibrary, Bar, BarFather, NoContent, SearchEle, SearchMain } from "./styles";

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
            <SearchMain>
                {songs.map((song) => (
                    <SearchEle key={song.id}>
                        <Music music={song}/>

                        {
                            isInLibrary(song.id) ? (
                                <AtLibrary>In Library</AtLibrary>
                            ) : (
                                <AddLibrary onClick={() => addToLibrary(song.id)}>Add to Library</AddLibrary>
                            )
                        }   
                    </SearchEle>
                ))}
            </SearchMain>
        );
    }

    const renderContent = () => {
        if(fetchSongs.isLoading) return <NoContent>Loading...</NoContent>
        if(fetchSongs.error) return <NoContent>{fetchSongs.error}</NoContent>
        if(artist && fetchSongs.Songs.length === 0) return <NoContent>No se encontraron canciones del artista</NoContent>
        return renderSongs();
    }

    return(
        <div>
            <BarFather>
                <Bar error={fetchSongs.error}
                type="text"
                placeholder="Buscar Artista"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                onKeyDown={enterSearch}
                />

                <AddLibrary onClick={clickSearch}>Search</AddLibrary>
            </BarFather>
            

            {renderContent()}
        </div>
    );
}

export default SearchResults;