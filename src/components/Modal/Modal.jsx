import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../features/modal/modalSlice';

const Modal = () => {
    const dispatch = useDispatch()
    const modalProps = useSelector( state => state.modal )

    const handleModalValue = () => {
        dispatch( setModal({ value: false}) )
    }


    return (
        <>
            <div className="Overlay">
                <div className="Modal">
                    <div className='Modal__top'>
                    <h2 className='text-2xl'><b>{modalProps.name}</b></h2>
                    <h1 className='text-2xl' onClick={ handleModalValue }><b>Close</b></h1>
                    </div>
                    
                    <img src={ modalProps.image } alt="" />
                    <div className='type'></div>
                    <p className='text-2xl'><b>{modalProps.species}</b> </p>
                    <p className='text-xl'> <b>{modalProps.gender}</b> </p>
                    <div className={ modalProps.status === 'Alive' ? 'bg-green-500 text-white font-bold py-2 px-4 rounded alive' : 'bg-red-500  text-white font-bold p-2 inline rounded dead '} ><b>{ modalProps.status }</b> </div>
    
                   

                </div>
            </div>
        </>
    )
}

export default Modal;