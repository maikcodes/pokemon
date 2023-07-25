import '../styles/Search.css'
import { InputIcon } from "./Inputs";
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