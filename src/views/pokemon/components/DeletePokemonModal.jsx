import { BiSolidSave } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import Modal from '../../../components/modals/Modal'
import { PrimaryButton, SecondaryButton } from '../../../components/buttons/Buttons'

function DeletePokemonModal(props) {
    const { show, handleClose, handleSubmit, name } = props

    return (
        <Modal show={show} handleClose={handleClose} title='Delete pokemon'>

            <form onSubmit={handleSubmit}>
                <div className="col-s-12 col-12">
                    <p className='max-width'>Are yo sure to want to delete pokemon {name}? <br />This action is irreversible</p>
                </div>

                <div className="col-s-12 col-12">
                    <div className='row-center'>
                        <PrimaryButton
                            type='submit'
                            icon={<BiSolidSave />}
                            text='Accept'
                        />
                        <SecondaryButton
                            icon={<ImCross />}
                            text='Cancel'
                            onClick={handleClose}
                        />
                    </div>
                </div>
            </form>

        </Modal>
    )
}

export default DeletePokemonModal