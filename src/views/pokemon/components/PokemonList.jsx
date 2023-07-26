import { AiFillEdit } from 'react-icons/ai'
import DeletePokemonModal from './DeletePokemonModal'
import EditPokemonModal from './EditPokemonModal'
import { IconButton } from '../../../components/buttons/Buttons';
import { GiBroadsword, GiCheckedShield } from 'react-icons/gi'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useState } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import PropTypes from 'prop-types'
import { PokemonModel } from "../domain/PokemonModel";


function PokemonList({ pokemonList }) {

    const [editModalShow, setEditModalShow] = useState(false);
    const handleEditShow = () => setEditModalShow(true);
    const handleEditClose = () => setEditModalShow(false);

    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const handleDeleteShow = () => setDeleteModalShow(true);
    const handleDeleteClose = () => setDeleteModalShow(false);

    const imageStyle = {
        width: '50px',
        height: '50px',
    };

    const { width } = useWindowDimensions();

    if (width < 768) {
        return (
            <>
                <div className="row">
                    <table className="info-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Info</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pokemonList.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.name}</td>
                                        <td>
                                            <div className='row-center'>
                                                <img className='' style={imageStyle} src={row.image_url} alt={`Image of ${row.name}_${row.id}`} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='row-center'>
                                                <p className='center'><GiBroadsword /> {row.attack}</p>
                                                <p className='center'><GiCheckedShield /> {row.defense}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="row-center">
                                                <IconButton icon={<AiFillEdit />} onClick={handleEditShow} />
                                                <IconButton icon={<RiDeleteBin2Fill />} onClick={handleDeleteShow} />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                < EditPokemonModal show={editModalShow} handleClose={handleEditClose} />
                < DeletePokemonModal show={deleteModalShow} handleClose={handleDeleteClose} />
            </>
        )
    }

    const tableHeads = Object.keys(PokemonModel);
    const tableHeadsNoId = tableHeads.slice(1, tableHeads.length)

    return (
        <>
            <div className="row">
                <table className="info-table">
                    <thead>
                        <tr>
                            {
                                tableHeadsNoId.map(tableHead => <th key={tableHead}>{tableHead.replace(/\b\w/g, char => char.toUpperCase())}</th>)
                            }
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pokemonList.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>
                                        <div className='row-center'>
                                            <img style={imageStyle} src={row.image_url} alt={`Image of ${row.name}_${row.id}`} />
                                        </div>
                                    </td>
                                    <td><div className='row-center'>{row.attack}</div></td>
                                    <td><div className='row-center'>{row.defense}</div></td>
                                    <td>
                                        <div className="row-spaced">
                                            <div className='col-12'>
                                                <IconButton icon={<AiFillEdit />} onClick={handleEditShow} />
                                            </div>
                                            <div className='col-12'>
                                                <IconButton icon={<RiDeleteBin2Fill />} onClick={handleDeleteShow} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            < EditPokemonModal show={editModalShow} handleClose={handleEditClose} />
            < DeletePokemonModal show={deleteModalShow} handleClose={handleDeleteClose} />
        </>
    )
}

PokemonList.propTypes = {
    pokemonList: PropTypes.array.isRequired
}

export default PokemonList