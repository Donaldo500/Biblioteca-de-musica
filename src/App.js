import Library from "./components/Library";
import Header from "./components/Header";
import SearchResults from "./components/Searchresults";
import { useState, useEffect } from "react";
import './CSS/App.css';

function App() {
  let content;

  const addToLibrary = (id) => {
    setSongs(prevSongs =>
      prevSongs.map(song =>
        song.id === id
        ? {...song, library: true}
        : song
      )
    );
  };

  const removeToLibrary = (id) => {
    setSongs(prevSongs =>
      prevSongs.map(song =>
        song.id === id
        ? {...song, library: false}
        : song
      )
    );
  };

  const [songs, setSongs] = useState([
    { id: 1, 
      title: "Shape of You", 
      artist: "Ed Sheeran", 
      img: "/img/Shape of you.jpg", 
      library: false},

    { id: 2, 
      title: "Blinding Lights", 
      artist: "The Weekend", 
      img: "/img/Blinding lights.png", 
      library: false},

    { id: 3, 
      title: "Levitating", 
      artist: "Dua Lipa", 
      img: "/img/Levitating.jpg", 
      library: false},

    { id: 4, 
      title: "Someone Like You", 
      artist: "Adele", 
      img: "/img/Someone like you.jfif", 
      library: false},
  ]);

  useEffect(() => {
    const librarySongs = songs.filter(song => song.library);
    console.log("La Biblioteca se actualizó", librarySongs);
  }, [songs]);
  
  const [view, setview] = useState("search");

  if(view === "library"){
    content = <Library songs={songs} removeToLibrary={removeToLibrary}/>

  }else{
    content = <SearchResults songs={songs} addToLibrary={addToLibrary}/>
  }

  return (
    <>
      <Header setview={setview} />
      {/*
      {view === "library" && <Library />}
      {view === "search" && <SearchResults />}
      Dato nuevo, en js otra cualidad de && ademas de ser AND es que hace return al primer false que encuntre
      */}
      {content}
    </>
  );
}

export default App;