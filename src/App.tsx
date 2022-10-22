import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {characters, series} from './services/marvel_api';
import Title from "./components/Title";
import CharactersList from "./components/CharactersList";
import SeriesList from "./components/SeriesList";

function App() {

    const [charactersList, setCharactersList] = useState([])
    const [seriesList, setSeriesList] = useState([])

    useEffect(() => {
        characters().then((res) => {
            setCharactersList(res.data.data.results)
        });
        series().then((res) => {
            setSeriesList(res.data.data.results)
            console.log(res.data.data.results)
        }).catch((e) => {
            console.log(e)
        });
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <Title text={"Series"}/>
                <SeriesList series={seriesList}/>
                <Title text={"Personajes"}/>
                <CharactersList charactersList={charactersList}/>
            </header>
        </div>
    );
}

export default App;
