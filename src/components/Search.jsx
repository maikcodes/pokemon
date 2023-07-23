import { useState } from 'react'
import { PrimaryButton } from "./Buttons"
import { FaPlus } from 'react-icons/fa';
import '../styles/Search.css'
import { InputIcon } from "./Inputs";
import { ImSearch } from 'react-icons/im'
import Modal from './Modal.jsx'

function Search() {
    const [createModalShow, setCreateModalShow] = useState();

    const handleShowModal = () => {
        setCreateModalShow(true);
    };

    const handleHideModal = () => {
        setCreateModalShow(false);
    };
    return (
        <>
            <Modal show={createModalShow} handleClose={handleHideModal} title='Add new pokemon'>
                <div className='modal-spaced'>
                    <div className='container'>
                        <label>Name :</label>
                        <InputIcon placeholder='Search ...' icon={ImSearch} />
                        <label>Url :</label>
                        <InputIcon placeholder='Search ...' icon={ImSearch} />
                    </div>
                    <div className='container-left'>
                        <div>
                            <label>Attack : </label>
                            <input type="range" style={{ width: 100 }} />
                        </div>
                        <div>
                            <label>Attack : </label>
                            <input type="range" style={{ width: 100 }} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <PrimaryButton icon={<FaPlus />} text='Save' onClick={handleShowModal} />
                    <PrimaryButton icon={<FaPlus />} text='Cancel' onClick={handleHideModal} />
                </div>
            </Modal>
            <div className="row-spaced">
                <InputIcon placeholder='Search ...' icon={ImSearch} />
                <PrimaryButton icon={<FaPlus />} text='New' onClick={handleShowModal} />
            </div>
        </>
    )
}

export default Search