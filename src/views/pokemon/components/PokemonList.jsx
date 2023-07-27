import { AiFillEdit } from 'react-icons/ai'
import { IconButton } from '../../../components/buttons/Buttons';
import { GiBroadsword, GiCheckedShield } from 'react-icons/gi'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import useWindowDimensions from '../../../hooks/useWindowDimensions';

function PokemonList(props) {
    const { pokemonList, searchFilter, handleEdit, handleDelete } = props;

    const imageStyle = {
        width: '50px',
        height: '50px',
    };

    const nameStyle = {
        maxWidth: '50px',
        overflow: 'hidden',
        wordWrap: 'break-word',
    };

    const { width } = useWindowDimensions();

    if (width < 768) {
        return (
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
                            pokemonList
                                .filter(
                                    pokemon => pokemon.name.match(new RegExp(`.*${searchFilter}.*`, 'i'))
                                )
                                .map((pokemon, index) => (
                                    <tr key={index}>
                                        <td style={nameStyle}>{pokemon.name}</td>
                                        <td>
                                            <div className='row-center'>
                                                <img className='' style={imageStyle} src={pokemon.image_url} alt={`Image of ${pokemon.name}_${pokemon.id}`} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='row-center'>
                                                <p className='center'><GiBroadsword /> {pokemon.attack}</p>
                                                <p className='center'><GiCheckedShield /> {pokemon.defense}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="row-center">
                                                <IconButton icon={<AiFillEdit />} onClick={() => handleEdit(pokemon)} />
                                                <IconButton icon={<RiDeleteBin2Fill />} onClick={() => handleDelete(pokemon)} />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className="row">
            <table className="info-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Attack</th>
                        <th>Defense</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemonList
                            .filter(
                                pokemon => pokemon.name.match(new RegExp(`.*${searchFilter}.*`, 'i'))
                            )
                            .map((pokemon, index) => (
                                <tr key={index}>
                                    <td style={nameStyle}>{pokemon.name}</td>
                                    <td>
                                        <div className='row-center'>
                                            <img style={imageStyle} src={pokemon.image_url} alt={`Image of ${pokemon.name}_${pokemon.id}`} />
                                        </div>
                                    </td>
                                    <td><div className='row-center'>{pokemon.attack}</div></td>
                                    <td><div className='row-center'>{pokemon.defense}</div></td>
                                    <td>
                                        <div className="row-spaced">
                                            <div className='col-12'>
                                                <IconButton icon={<AiFillEdit />} onClick={() => handleEdit(pokemon)} />
                                            </div>
                                            <div className='col-12'>
                                                <IconButton icon={<RiDeleteBin2Fill />} onClick={() => handleDelete(pokemon)} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PokemonList