import './test.css'
import { Input } from "./components/Inputs";


function Test() {
  return (
    <div className='modal-test'>
      <div className='modal-container'>

        <div className='modal-grid-item'>
          <div className='col-12'>
            <label className='col-2'>Name</label>
            <Input />
          </div>
        </div>

        <div className='modal-grid-item'>
          <div className='row-spaced'>
            <label>Attack</label>
            <input type="range" />
            <p>100</p>
          </div>
        </div>

        <div className='modal-grid-item'>
          <label htmlFor="">Name</label>
          <Input />
        </div>

        <div className='modal-grid-item'>
          <div className='row-spaced'>
            <label>Defense</label>
            <input type="range" />
            <p>100</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Test