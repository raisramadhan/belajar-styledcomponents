import { useState } from "react"


export default function Home() {
    const [tombol, setTombol] = useState(false)

    const HandleTombol = () => {
        setTombol(tombol === true ? false : true)
    }
    return (
        <>
        <button onClick={HandleTombol}>{tombol === false ? "mati" : "hidup"}</button>
        </>
    )
}