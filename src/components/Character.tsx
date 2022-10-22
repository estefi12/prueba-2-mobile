import React, {ReactElement, useState} from "react";
import {Button} from "react-bootstrap";
import ComicsModal from "./ComicsModal";

interface CharacterProps {
    thumbnail: { path: string, extension: string },
    name: string,
    description: string,
    detail: string,
    characterId: number,
}

const Character = (props: CharacterProps): ReactElement => {
    const [modalShow, setModalShow] = useState(false)
    return <>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <img width={200} src={`${props.thumbnail.path}.${props.thumbnail.extension}`}/>

        <Button onClick={()=> {
            setModalShow(true)
            console.log("djsdsbdfhdbh")
        }}
                variant={"primary"}>Ver más</Button>

        <ComicsModal characterId={props.characterId}
                     title={props.name}
                     show={modalShow}
                     onHide={() => setModalShow(false)} />
    </>
}

export default Character;

