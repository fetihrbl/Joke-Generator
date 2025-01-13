import { useState } from "react";
import '../styles/Joke.css';
import Button from "./Button";

function Joke() {

    const [joke, setJoke] = useState('');

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res) => res.json())
        .then((data) => setJoke(data.joke));
    }

    
    return (
        <div className="joje">
            <Button callApi={fetchApi}/>
            <p>{joke}</p>
        </div>
    )
}
export default Joke;