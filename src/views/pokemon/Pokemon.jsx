import '../App.css'
import { createPokemon, getAllPokemon, editPokemon, deletePokemon } from "./PokemonRepository";
import CreatePokemonModal from './components/CreatePokemonModal'
import DeletePokemonModal from "./components/DeletePokemonModal";
import EditPokemonModal from "./components/EditPokemonModal";
import { FaPlus } from 'react-icons/fa';
import PokemonList from './components/PokemonList'
import { PokemonModel } from './domain/PokemonModel'
import { PrimaryButton } from "../../components/buttons/Buttons"
import Search from '../../components/search/Search'
import { useState, useEffect } from 'react'

function Pokemon() {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemon, setPokemon] = useState(PokemonModel)
    const [createModalShow, setCreateModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [searchFilter, setSearchFilter] = useState('');

    useEffect(() => {
        const loadPokemonList = async () => {
            const res = await getAllPokemon()
            setPokemonList(res)
        }

        loadPokemonList()
    }, [])

    const clearPokemon = () => {
        setPokemon(PokemonModel)
    }

    const handleCreateShow = () => {
        setCreateModalShow(true)
        clearPokemon()
    };
    const handleCreateClose = () => {
        clearPokemon()
        setCreateModalShow(false)
    };

    const handleEditShow = (editingPokemon) => {
        clearPokemon()
        setPokemon(editingPokemon);
        setEditModalShow(true)
    };
    const handleEditClose = () => {
        clearPokemon()
        setEditModalShow(false);
    }

    const handleDeleteShow = (deletingPokemon) => {
        clearPokemon()
        setPokemon(deletingPokemon);
        setDeleteModalShow(true)
    };
    const handleDeleteClose = () => {
        clearPokemon()
        setDeleteModalShow(false);
    }

    const handleDataChange = (event) => {
        const { name, value } = event.target
        setPokemon({ ...pokemon, [name]: value })
    }

    const handleCreateNewPokemon = () => {
        createPokemon(pokemon)
    }

    const handleEditPokemon = () => {
        editPokemon(pokemon)
    };

    const handleDeletePokemon = () => {
        deletePokemon(pokemon.id)
    };

    const handleFilterChange = (event) => {
        setSearchFilter(event.target.value)
    }

    return (
        <>
            <div className="container">
                <div>
                    <h3 className="font-color-blue">Pokemon List</h3>
                </div>
                <div className="row-spaced-column">
                    <Search handleOnChange={handleFilterChange} />
                    <div className='col-s-12'>
                        <PrimaryButton icon={<FaPlus />} text='New' onClick={handleCreateShow} />
                    </div>
                </div>
                <PokemonList
                    pokemonList={pokemonList}
                    searchFilter={searchFilter}
                    handleEdit={handleEditShow}
                    handleDelete={handleDeleteShow}
                    setPokemon={setPokemon}
                />
            </div>
            <CreatePokemonModal
                show={createModalShow}
                handleClose={handleCreateClose}
                pokemon={pokemon}
                handleDataChange={handleDataChange}
                handleSubmit={handleCreateNewPokemon}
            />
            <EditPokemonModal
                show={editModalShow}
                handleClose={handleEditClose}
                pokemon={pokemon}
                handleDataChange={handleDataChange}
                handleSubmit={handleEditPokemon}
            />
            <DeletePokemonModal
                show={deleteModalShow}
                handleClose={handleDeleteClose}
                handleSubmit={handleDeletePokemon}
                name={pokemon.name}
            />
        </>
    )
}

export default Pokemon