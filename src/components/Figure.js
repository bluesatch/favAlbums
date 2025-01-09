const Figure =(props)=> {

    return (
        <div className="col">
            <figure className="figure" id={props.id}>
                <img src={props.imgUrl} alt={props.title} className="img-fluid image figure-img" />
                <figcaption className="figcaption figure-caption">{props.title} | {props.artist}</figcaption>
            </figure>
        </div>
    )
}

export default Figure