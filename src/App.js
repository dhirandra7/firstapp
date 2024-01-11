import { useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)
  const [guessval,Setguess] = useState([]);
  const [userval,Setuserval] = useState();
  const [hint,Sethint]=useState('');
  const [win,setwin]=useState(false);

  function handlesubmit(){
    const uservalue = parseInt(userval);
    if (uservalue === number) {
      setwin(true);
      alert('Congratulations!');
    } else {
      if (uservalue > number) {
        Sethint('high');
      } else {
        Sethint('low');
      }

      Setguess([...guessval, uservalue]);

      if (guessval.length >= 6) {
        setwin(true);
        alert(`abe ja na chutiye . correct number ye tha ${number}.  🖕`)
      }
    }
  }

  function restartgame(){
    Setguess([]);
    setNumber(Math.floor(Math.random() * 100) + 1);
    setwin(false);
    Sethint('');

  }
   
  return (
  
    <div className='App'>
      <h1>Number guessing game</h1>
      <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>
      <p>Your guess</p>
      <input type='number' onChange={(e)=>Setuserval(e.target.value)} value={userval}></input>
      <button onClick={handlesubmit}>Submit</button>
      {guessval.length > 0 && (
        <>
      <p>Previuos Numbers:</p>
      <ul>
            {guessval.map((guess, index) => (
              <li key={index}>{guess}</li>
            ))}
          </ul>

      <p className='hinttxt'>abe bohot jyada {hint} hai</p>

      {win && <button onClick={restartgame}>Restart</button>}
      </>
      )}
    </div>
  );
}

export default App;

