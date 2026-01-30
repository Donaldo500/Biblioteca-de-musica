import axios from "axios";
import { useEffect, useState } from "react";

type Album = {
    idAlbum: number;
    strAlbumThumb: string;
};

type TrackAPI = {
  idTrack: number;
  strTrack: string;
  strArtist: string;
  strAlbum: string;
};

type Songs = {
    id: number;
    albumName: string;
    artist: string;
    songName: string;
    img: string;
    library: boolean;
};

type FetchSongsState = {
    Songs: Songs[];
    isLoading: boolean;
    error: null | string;
};

const useFetchSongs = (inputArtist:string) => {
    const [Songs, setSongs] = useState<FetchSongsState>({Songs: [], isLoading: true, error:null});

    useEffect(() => {

        const fetchSongs = async() =>{
            try {
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${inputArtist}`);

                const Album: Album[] = response.data.album || [];
                
                const tracksalb = Album.map((alb) => (
                    axios.get(`https://www.theaudiodb.com/api/v1/json/123/track.php?m=${alb.idAlbum}`)
                ))

                const trackers = await Promise.all(tracksalb);

                setSongs({Songs: trackers.flatMap(
                    (res, index) => (res.data.track || []).map((track:TrackAPI) => ({
                        id: track.idTrack,
                        albumName: track.strAlbum,
                        artist: track.strArtist,
                        songName: track.strTrack,
                        img: Album[index].strAlbumThumb,
                        library: false,
                    }))
                ), isLoading: false, error: null})

            } catch (error :any) {
                setSongs({Songs: [], isLoading: false, error: "No se encontraron canciones del artista"});
            }
        }

        fetchSongs();
    }, [inputArtist]);

    return Songs;
}

export default useFetchSongs;