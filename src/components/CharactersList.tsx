import React, {ReactElement, ReactNode} from "react";
import Character from "./Character";

interface CharactersListProps {
    charactersList: any,
}

interface CharacterProps {
    thumbnail: { path: string, extension: string },
    name: string,
    id: number,
    description: string,
    urls: [{ url: string }]
}


const CharactersList = (props: CharactersListProps): ReactElement => {
    return <ol>
        {
            props.charactersList.map((character: CharacterProps): ReactNode => {
                return <li key={character.name}>
                    <Character thumbnail={character.thumbnail}
                               name={character.name}
                               characterId={character.id}
                               description={character.description} detail={character.urls[0].url}
                    />
                </li>
            })
        }
    </ol>
}

export default CharactersList;