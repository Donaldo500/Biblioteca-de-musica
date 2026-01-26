const Song = ({song}) => {
    return(
        <>
            <img src={song.img} alt="Song_Image"/>

            <div className="songinfo">
                <p>{song.title}</p> 
                <p>{song.artist}</p>
            </div>

        </>
    );
}

export default Song;