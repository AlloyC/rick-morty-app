import { useDispatch } from "react-redux";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import { setFilter } from "../../features/filter/filter";
import { setFilterButton } from "../../features/filter/filterButton";
import { setSearch } from "../../features/search/searchSlice";


const Filters = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch( setFilter({
            gender: '',
            species: '',
            status: ''
        }) )

        dispatch( setSearch('') )

        dispatch( setFilterButton({
            gender: '',
            status: '',
            species: ''
        }) )
        
    }

    return(
        <div className="Filter">
        <h1 className="text-4xl" >Filter</h1>
        <button className="py-2 px-4 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-4 mt-4" onClick={handleClick} >Clear Filter</button>

        <div>
            <Gender />
            <Status />
            <Species />
        </div>

    </div>
    ) 
}

export default Filters;