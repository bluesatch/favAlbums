import { useState, useEffect } from "react"

import Header from "./components/Header"
import Main from "./components/Main"
import data from "./data"

const App =()=> {

    const [ albums, setAlbums ] = useState([])

    // useEffect handles side effects
    useEffect(()=> {
        setAlbums(data)
    },[])
    // dependency array lets React know when to re-render

    return (
        <>
            <Header />
            <Main albums={albums}/>
        </>
    )
}

export default App