import React, {ReactElement} from "react";
import loadingImg from "../images/loading.gif";

interface LoadingProps {
    show?: boolean
}

const Loading = (props: LoadingProps): ReactElement => {
    return props.show ? (<img src={loadingImg} alt={"Cargando..."} /> ) : <></>
}

export default Loading;