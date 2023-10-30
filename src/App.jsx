import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import People from './componets/people';
import Film from './componets/films';


function App() {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);

  async function getPeople() {
    setFilms([]);
    const response = await fetch("https://api-ghibli.herokuapp.com/people");
    const peopleResponse = await response.json();
    setPeople(people.concat(peopleResponse))
  }

  return (
    <div className="App">
      <div className="justify-content-center"><img src="https://static.wikia.nocookie.net/studio-ghibli/images/a/a6/Studio_Ghibli.svg/revision/latest?cb=20181208224725"></img><h1>
        <button onClick={() => getFilms()}>Show Films</button> <button onClick={() => getPeople()}>People</button></h1></div>
      {people.map((person)=>{return <People {...person}></People>})}
      {films.map((film)=>{return <Film {...film}></Film>})}
    </div>
  );
}



async function getFilms() {
  const response = await fetch("https://api-ghibli.herokuapp.com/films");
  const films = await response.json();
  console.log(films[0])
}


export default App;
