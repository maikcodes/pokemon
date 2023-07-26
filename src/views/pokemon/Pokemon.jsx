import { PrimaryButton } from "../../components/buttons/Buttons"
import { FaPlus } from 'react-icons/fa';
import Search from '../../components/search/Search'
import { useState, useEffect } from 'react'
import CreatePokemonModal from './components/CreatePokemonModal'
import PokemonList from './components/PokemonList'
import '../App.css'
import { getAllPokemon } from "./PokemonRepository";
import { PokemonModel } from "./domain/PokemonModel";

function Pokemon() {

    const [pokemon, setPokemon] = useState(PokemonModel);

    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const loadPokemonList = async () => {
            const res = await getAllPokemon()
            console.log(res)
            setPokemonList(res)
        }

        loadPokemonList()
    }, [])


    const [createModalShow, setCreateModalShow] = useState(false);
    const handleCreateShow = () => setCreateModalShow(true);
    const handleCreateClose = () => setCreateModalShow(false);

    return (
        <>
            <div className="container">
                <div>
                    <h3 className="font-color-blue">Pokemon List</h3>
                </div>
                <div className="row-spaced-column">
                    <Search />
                    <div className='col-s-12'>
                        <PrimaryButton icon={<FaPlus />} text='New' onClick={handleCreateShow} />
                    </div>
                </div>
                <PokemonList pokemonList={pokemonList} />
            </div>
            <CreatePokemonModal show={createModalShow} handleClose={handleCreateClose} />
        </>
    )
}

export default Pokemon