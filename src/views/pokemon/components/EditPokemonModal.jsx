import { BiSolidSave } from 'react-icons/bi';
import { ImSearch, ImCross } from 'react-icons/im';
import { Input } from '../../../components/inputs/input/Inputs'
import Modal from '../../../components/modals/Modal'
import { PrimaryButton, SecondaryButton } from '../../../components/buttons/Buttons'
import RangeInput from '../../../components/inputs/range-input/RangeInput'
import PropTypes from 'prop-types'

function CreatePokemonModal({ show, handleClose }) {

    return (
        <Modal show={show} handleClose={handleClose} title='Edit pokemon'>

            <div className="col-6 col-s-12">
                <div className="col-11 col-s-12 center-vertical">
                    <label className="col-4 col-s-12">Name: </label>
                    <Input placeholder='Name' icon={ImSearch} />
                </div>
                <div className="col-11 col-s-12 center-vertical">
                    <label className="col-4 col-s-12">Image: </label>
                    <Input placeholder='Url' icon={ImSearch} />
                </div>
            </div>

            <div className="col-6 col-s-12">
                <div className="col-11 col-s-12 center-vertical">
                    <label className="col-4 col-s-12">Attack: </label>
                    <RangeInput text='Attack' min={0} max={100} step={1} />
                </div>
                <div className="col-11 col-s-12 center-vertical">
                    <label className="col-4 col-s-12">Defense: </label>
                    <RangeInput text='Defense' min={0} max={100} step={1} />
                </div>
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

CreatePokemonModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default CreatePokemonModal