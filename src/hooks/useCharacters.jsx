import { useEffect } from "react"
import { getCharacters } from "../services/getCharacters";
import { useDispatch, useSelector } from "react-redux";
import { increaseCharacters, setCharacters } from "../features/characters/charactersSlice";
import { setLoading } from "../features/loading/loadingSlice";
import { setResponseStatus } from "../features/responseStatus/responseStatusSlice";

export const useCharacter = () => {
    const characters = useSelector( state => state.characters )
    const page = useSelector( state => state.page.value )
    const search = useSelector( state => state.search.value )
    const filter = useSelector( state => state.filter )
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( setLoading(true) )
        getCharacters({search, page, status: filter.status, gender: filter.gender, species: filter.species })
        .then( data => {
            if( data.length === 0 ) {
                dispatch( setCharacters( data ) )
                dispatch( setLoading(false))
                dispatch( setResponseStatus(false) )
                return;
            }

            if( page === 1 ) {
                dispatch( setCharacters( data ) )
            } else {
                dispatch( increaseCharacters( data ) )
            }
            dispatch( setLoading(false))
        })
    }, [ dispatch, search, page, filter ] )


   

    return { characters }
}

export default useCharacter;