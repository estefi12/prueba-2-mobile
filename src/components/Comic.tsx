import React, {ReactElement} from "react";

interface ComicProps {
    thumbnail: { path: string, extension: string },
    name: string,
    description: string,
    detail: string
}

const Comic = (props: ComicProps): ReactElement => {
    return <>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <img width={200} src={`${props.thumbnail.path}.${props.thumbnail.extension}`}/>
        <a href={props.detail} className={"btn btn-primary"}>Ver más</a>
    </>
}

export default Comic;

