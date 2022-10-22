import React, {ReactElement, ReactNode} from "react";
import Serie from "./Serie";

interface SeriesListProps {
    series: any
}

interface SerieProps {
    thumbnail: { path: string, extension: string },
    title: string,
    startYear: number
}

const SeriesList= (props: SeriesListProps): ReactElement=>{
    return <ul>{
        props.series.map((serie:SerieProps): ReactNode=> {
            return <li>
                <Serie title={serie.title}
                       image={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                       year={serie.startYear} />
            </li>
        })
    }
    </ul>
}

export default SeriesList;