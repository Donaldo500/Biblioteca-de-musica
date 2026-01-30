import Library from "./components/Library";
import Header from "./components/Header";
import SearchResults from "./components/Searchresults";
import { useState } from "react";
import './CSS/App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import SongDetails from "./components/SongDetail";

function App() {
  
  const [artist, setArtist] = useState("");
  const [songs, setSongs] = useState([]);
  const [songsLibrary, setSongsLibrary] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="App">

      <Header navigate={navigate}/>

      <Routes>
        <Route path="/" element={<SearchResults setArtist={setArtist} artist={artist} songs={songs} setSongs={setSongs} songsLibrary={songsLibrary} setSongsLibrary={setSongsLibrary}/>} />
        <Route path="/library" element={<Library songsLibrary={songsLibrary} setSongsLibrary={setSongsLibrary}/>} />
        <Route path="song/:id" element={<SongDetails songs={songs} songsLibrary={songsLibrary}/>} />
      </Routes>

    </div>
  );
}

export default App;