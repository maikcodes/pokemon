import './Search.css'
import { InputIcon } from "../inputs/input/Inputs";
import { ImSearch } from 'react-icons/im'


function Search() {
    return (
        <>
            <div className='col-s-12'>
                <InputIcon placeholder='Search ...' icon={ImSearch} />
            </div>
        </>
    )
}

export default Search