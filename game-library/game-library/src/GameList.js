import { useState } from 'react'

function GameList() {

    const [list, setList] = useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b166fbf8d5mshcdce65c68847cb9p1922eejsn8aba99914eaa',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        }
    };
    
    fetch('https://rawg-video-games-database.p.rapidapi.com/games?key=e3850c85a52843c6bebc944b2b3ea54f', options)
        .then(response => response.json())
        .then(response => setList(response))
        .catch(err => console.error(err));

        const gameList = list.map(game => game.results.id)

    return(
        <div>
            game list
        </div>
    )
}

export default GameList;