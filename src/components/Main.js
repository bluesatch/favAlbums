import Figure from "./Figure"

const Main =({ albums })=> {

    const figureComponents = albums.map(album => {
        return (<Figure 
                    key={album.id}
                    id={album.id}
                    artist={album.artist}
                    title={album.title}
                    imgUrl={album.imgUrl} 
                />)
    })

    return (
        <main className="main my-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 row-cols-md-4">
                    { figureComponents }
                </div>
            </div>
        </main>
    )
}

export default Main