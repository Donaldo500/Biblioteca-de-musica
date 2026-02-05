import Library from "./components/Library";
import Header from "./components/Header";
import SearchResults from "./components/Searchresults";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SongDetails from "./components/SongDetail";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyle from "./theme/GlobalStyles";

function App() {
  
  const [artist, setArtist] = useState("");
  const [songs, setSongs] = useState([]);
  const [songsLibrary, setSongsLibrary] = useState([]);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">

        <Header navigate={navigate}/>

        <Routes>
          <Route path="/" element={<SearchResults setArtist={setArtist} artist={artist} songs={songs} setSongs={setSongs} songsLibrary={songsLibrary} setSongsLibrary={setSongsLibrary}/>} />
          <Route path="/library" element={<Library songsLibrary={songsLibrary} setSongsLibrary={setSongsLibrary}/>} />
          <Route path="song/:id" element={<SongDetails songs={songs} songsLibrary={songsLibrary}/>} />
        </Routes>

      </div>
    </ThemeProvider>
  );
}

export default App;