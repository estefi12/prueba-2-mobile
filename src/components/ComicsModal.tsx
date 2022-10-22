import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {MouseEventHandler, ReactElement, ReactNode, useEffect, useState} from "react";
import {characterComics} from "../services/marvel_api";

interface ComicsModalProps {
    characterId: number,
    title: string,
    onHide: MouseEventHandler,
    show?: boolean,
}

interface ComicProps {
    title: string
}

const ComicsModal = (props: ComicsModalProps): ReactElement => {
    const [comicsList, setComicsList] = useState([]);

    useEffect(() => {
        characterComics(props.characterId).then((res) => {
            setComicsList(res.data.data.results);
        });
    }, [])
    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    {comicsList.map((comic: ComicProps): ReactNode => {
                        return <li>{comic.title}</li>
                    })}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ComicsModal