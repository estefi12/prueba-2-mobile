import React, {ReactElement} from "react";

interface SerieProps {
    title: string,
    image: string,
    year: number
}

const Serie = (props: SerieProps): ReactElement => {
    return <>
        <p>{props.title}</p>
        <p>{props.year}</p>
        <img src={props.image} width={200}/>
    </>
}

export default Serie;