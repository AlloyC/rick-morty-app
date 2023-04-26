import { useDispatch } from 'react-redux'
import { setModal } from '../../features/modal/modalSlice'

export const Character = ({ props }) => {
    const dispatch = useDispatch()


    const changeState = (props) => {
        const modalProps = {
            gender: props.gender,
            species: props.species,
            status: props.status,
            name: props.name,
            image: props.image,
            id: props.id,
            state: true,
        }

        dispatch(setModal(modalProps))
    }

    return (
        <div
            onClick={() => changeState(props)}
            className=" cardContenedor border border-gray-300 rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-100 m-2"
        >
            <h3 className="text-lg font-bold mb-2 text-center ">{props.name}</h3>
            <img src={props.image} alt={`Esta imagen representa a ${props.name}`} className="rounded-lg mb-2" />
        </div>
    )
}

export default Character
