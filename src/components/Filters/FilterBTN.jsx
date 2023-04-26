import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../features/filter/filter'
import { setFilterButton } from '../../features/filter/filterButton'
import { setPage } from '../../features/page/pageSlice'

export const FilterBTN = ({ name, index, items }) => {
    const dispatch = useDispatch()
    const filterButton = useSelector( state => state.filterButton ) 

    const handleClick = () => {
        dispatch(
            setFilter({
                [name]: items,
            }),
        )

        dispatch(
            setPage(1)
        )
    }

    const changeHover = (name, value) => {

        dispatch( setFilterButton({
            [name]: value
        }) )
    }

    return (
        <div>
            <div onClick={() => handleClick()} className="cursor-pointer flex items-center">
                <input type="radio" name={name} id={`${name}-${index}`} className={`hidden ${
                    filterButton[name] === items ? 'x' : ''
                }`} />

                <label
                    htmlFor={`${name}-${index}`}
                    className=" cursor-pointer  py-2 px-4 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    onClick={() => changeHover(name,items)}
                >
                    {items}
                </label>
            </div>
        </div>
    )
}

export default FilterBTN
