import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {characters, series} from './services/marvel_api';
import Title from "./components/Title";
import CharactersList from "./components/CharactersList";
import SeriesList from "./components/SeriesList";
import Loading from "./components/Loading";

function App() {

    const [charactersList, setCharactersList] = useState([])
    const [seriesList, setSeriesList] = useState([])
    const [loadingSeries, setLoadingSeries] = useState(true)
    const [loadingChars, setLoadingChars] = useState(true)

    useEffect(() => {
        characters().then((res) => {
            setCharactersList(res.data.data.results)
            setLoadingChars(false);
        });
        series().then((res) => {
            setSeriesList(res.data.data.results)
            setLoadingSeries(false)
        }).catch((e) => {
            console.log(e)
        });
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <Title text={"Series"}/>
                <Loading show={loadingSeries} />
                <SeriesList series={seriesList}/>
                <Title text={"Personajes"}/>
                <Loading show={loadingChars} />
                <CharactersList charactersList={charactersList}/>
            </header>
        </div>
    );
}

export default App;
