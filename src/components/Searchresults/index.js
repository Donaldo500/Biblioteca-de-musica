import { useState } from "react";
import Song from "../Song";

const SearchResults = ({songs, addToLibrary}) =>{
    

    const [search, setSearch] = useState("");

    return(
        <div className="search">
            <input
                type="text"
                placeholder="Buscar cancion"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="searchbar"
            />

            <ul>
                {songs.filter((song) =>
                song.title.toLowerCase().includes(search.toLowerCase()) ||
                song.artist.toLowerCase().includes(search.toLowerCase()))
                .map((song) => (
                    <li key={song.id}>
                        <Song song={song}/>

                        <button onClick={() => addToLibrary(song.id)}>Add to Library</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;