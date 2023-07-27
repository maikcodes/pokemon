import { ImSearch } from 'react-icons/im'
import { InputIcon } from "../inputs/input/Inputs";

function Search({handleOnChange}) {
    return (
        <div className='col-s-12'>
            <InputIcon placeholder='Search ...' icon={ImSearch}  onChange={handleOnChange}/>
        </div>
    )
}

export default Search