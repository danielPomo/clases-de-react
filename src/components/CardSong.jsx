

const CardSong = ({src, trackName, band, album, released}) => {

    return (
        <div className="card-song">
            <img src= {src} alt="" />
            <h1>{trackName}</h1>
            <h2>{band}</h2>
            <h2>{album}</h2>
            <h2>{released}</h2>
        </div>
    )
}

export default CardSong