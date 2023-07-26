import { BiSolidSave } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import Modal from '../../../components/modals/Modal'
import PropTypes from 'prop-types'
import { PrimaryButton, SecondaryButton } from '../../../components/buttons/Buttons'



function DeletePokemonModal({ show, handleClose, name }) {

    return (
        <Modal show={show} handleClose={handleClose} title='Delete pokemon'>

            <div className="col-s-12 col-12 ">
                <p>Are yo sure to want to delete pokemon {name} </p>
            </div>

            <div className="col-s-12 col-12">
                <div className='row-center'>
                    <PrimaryButton icon={<BiSolidSave />} text='Save' onClick={() => { }} />
                    <SecondaryButton icon={<ImCross />} text='Cancel' onClick={handleClose} />
                </div>
            </div>
        </Modal>
    )
}

DeletePokemonModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    name: PropTypes.string
}

export default DeletePokemonModal