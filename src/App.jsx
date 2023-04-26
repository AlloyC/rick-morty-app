import './App.css'
import Nav from './components/Nav/Nav'
import Home from './pages/home'
import useCharacter from './hooks/useCharacters';

function App() {
  useCharacter();

    return (
        <>
            <Nav />

            <Home />
        </>
    )
}

export default App
