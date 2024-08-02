import { useState } from "react"
import { Container, Button, Box} from "./bohlam.styled";


export default function Bohlam() {
    const [bohlam, setBohlam] = useState(false)

    const HandBohlam = () => {
        setBohlam(bohlam === false ? true : false)
    }
    return(
        <>
        <Container ChangeBg={bohlam} >
            <Box ChangeColor={bohlam}></Box>
            <Button onClick={HandBohlam}>{bohlam === false ? "gelap" : "terang"}</Button>
        </Container>
        </>
    )
}