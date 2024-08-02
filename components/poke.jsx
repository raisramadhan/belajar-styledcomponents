import { useState } from "react"


export default function Poke() {
    const [lamp, setLamp] = useState(false);

    const HandleLamp = () => {
        setLamp(lamp === false ? true : false);
    }

    return(
        <>
        <button onClick={HandleLamp}>{lamp === false ? "off" : "on"}</button>
        </>
    );
}