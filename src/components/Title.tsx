import React, { ReactElement } from "react";

interface TitleProps {
    text: string,
    id?: string,
    counter?: number
}

const Title = (props: TitleProps): ReactElement => {
    return <h1>{props.text}</h1>
}

export default Title;