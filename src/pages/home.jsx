import CharacterList from "../components/Characters/CharacterList";
import Modal from "../components/Modal/Modal";
import Search from "../components/Search/Search";
import '../App.css'
import { useSelector } from "react-redux";
import Filters from "../components/Filters/Filters";

const Home = () => {
  
  const modalState = useSelector( state => state.modal.state )


    return (
    <div className="App">
        <Search />
        { modalState ? <Modal /> : null }

        <div className="Contenedor">
        <Filters />
        <CharacterList />
        </div>
        

    </div>
  )
}

export default Home;
