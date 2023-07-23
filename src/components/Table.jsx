import '../styles/Table.css'
import useWindowDimensions from '../hooks/useWindowDimensions';


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
                                    <td><img style={imageStyle} src={row.url} alt={`Image of ${row.name}_${row.id}`} /></td>
                                    <td>
                                        <div className='row'>
                                            <p>Attack: {row.attack}</p>
                                            <p>Defense: {row.defense}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="row">
                                            <button>Edit</button>
                                            <button>Delete</button>
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
                                <td><img style={imageStyle} src={row.url} alt={`Image of ${row.name}_${row.id}`} /></td>
                                <td>{row.attack}</td>
                                <td>{row.defense}</td>
                                <td>
                                    <div className="row">
                                        <button>Edit</button>
                                        <button>Delete</button>
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