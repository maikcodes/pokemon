import '../styles/Table.css'
import useWindowDimensions from '../hooks/useWindowDimensions';
import { IconButton } from './Buttons';
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { GiBroadsword, GiCheckedShield } from 'react-icons/gi'

function Table() {

    const tableData = [
        { id: 1, name: 'Pikachu', url: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png', attack: 100, defense: 100 },
        { id: 2, name: 'Pikachu', url: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png', attack: 100, defense: 100 },
        { id: 3, name: 'Pikachu', url: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png', attack: 100, defense: 100 },
        { id: 4, name: 'Pikachu', url: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png', attack: 100, defense: 100 },
        { id: 5, name: 'Pikachu', url: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png', attack: 100, defense: 100 },
        { id: 6, name: 'Pikachu', url: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png', attack: 100, defense: 100 },
        { id: 7, name: 'Pikachu', url: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png', attack: 100, defense: 100 },
        { id: 8, name: 'Pikachu', url: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png', attack: 100, defense: 100 },
        { id: 9, name: 'Pikachu', url: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png', attack: 100, defense: 100 },
        { id: 10, name: 'Pikachu', url: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png', attack: 100, defense: 100 },
    ]

    const imageStyle = {
        width: '50px',
        height: '50px',
    };

    const tableHeads = Object.keys(tableData[0]);
    const tableHeadsNoId = tableHeads.slice(1, tableHeads.length)

    const { height, width } = useWindowDimensions();
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
                            tableData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>
                                        <div className='row-center'>
                                            <img className='' style={imageStyle} src={row.url} alt={`Image of ${row.name}_${row.id}`} />
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
                                            <IconButton icon={<AiFillEdit />} onClick={() => { }} />
                                            <IconButton icon={<RiDeleteBin2Fill />} onClick={() => { }} />
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
                        {
                            tableHeadsNoId.map(tableHead => <th key={tableHead}>{tableHead.replace(/\b\w/g, char => char.toUpperCase())}</th>)
                        }
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>
                                    <div className='row-center'>
                                        <img style={imageStyle} src={row.url} alt={`Image of ${row.name}_${row.id}`} />
                                    </div>
                                </td>
                                <td><div className='row-center'>{row.attack}</div></td>
                                <td><div className='row-center'>{row.defense}</div></td>
                                <td>
                                    <div className="row-spaced">
                                        <div className='col-12'>
                                            <IconButton icon={<AiFillEdit />} onClick={() => { }} />
                                        </div>
                                        <div className='col-12'>
                                            <IconButton icon={<RiDeleteBin2Fill />} onClick={() => { }} />
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

export default Table