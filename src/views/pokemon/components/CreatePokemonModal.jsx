import { BiSolidSave } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import { Input } from '../../../components/inputs/input/Inputs'
import Modal from '../../../components/modals/Modal'
import { PrimaryButton, SecondaryButton } from '../../../components/buttons/Buttons'
import RangeInput from '../../../components/inputs/range-input/RangeInput'

function CreatePokemonModal(props) {
    const { show, handleClose, pokemon, handleDataChange, handleSubmit } = props

    return (
        <Modal show={show} handleClose={handleClose} title='Create pokemon'>
            <form onSubmit={handleSubmit}>

                <div className="col-6 col-s-12">
                    <div className="col-11 col-s-12 center-vertical">
                        <label className="col-4 col-s-12">Name: </label>
                        <Input
                            valueFor='name'
                            value={pokemon.name}
                            onChange={handleDataChange}
                            placeholder='Name'
                        />
                    </div>
                    <div className="col-11 col-s-12 center-vertical">
                        <label className="col-4 col-s-12">Image: </label>
                        <Input
                            valueFor='image_url'
                            value={pokemon.image_url}
                            onChange={handleDataChange}
                            placeholder='Url'
                        />
                    </div>
                </div>

                <div className="col-6 col-s-12">
                    <div className="col-11 col-s-12 center-vertical">
                        <label className="col-4 col-s-12">Attack: </label>
                        <RangeInput
                            value={pokemon.attack}
                            valueFor="attack"
                            onChange={handleDataChange}
                            min={0} max={100} step={1}
                        />
                    </div>
                    <div className="col-11 col-s-12 center-vertical">
                        <label className="col-4 col-s-12">Defense: </label>
                        <RangeInput
                            value={pokemon.defense}
                            valueFor="defense"
                            onChange={handleDataChange}
                            min={0} max={100} step={1}
                        />
                    </div>
                </div>

                <div className="col-s-12 col-12">
                    <div className='row-center'>
                        <PrimaryButton type='submit' icon={<BiSolidSave />} text='Save' />
                        <SecondaryButton icon={<ImCross />} text='Cancel' onClick={handleClose} />
                    </div>
                </div>

            </form >
        </Modal>
    )
}

export default CreatePokemonModal