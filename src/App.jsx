// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { PrimaryButton, SecondaryButton } from "./components/Buttons"
import { FaPlus } from 'react-icons/fa';
import Search from './components/Search.jsx'
import Table from './components/Table.jsx'
import './App.css'
import { Input } from "./components/Inputs";
import { ImCross, ImSearch } from 'react-icons/im'
import { BiSolidSave } from 'react-icons/bi'
import Modal from './components/Modal'
import RangeInput from './components/RangeInput';
import { useState } from 'react'


function App() {
  const [createModalShow, setCreateModalShow] = useState();

  const handleShowModal = () => {
    setCreateModalShow(true);
  };

  const handleHideModal = () => {
    setCreateModalShow(false);
  };

  return (
    <>
      <div className="container">
        <div>
          <h3 className="font-color-blue">Pokemon List</h3>
        </div>
        <div className="row-spaced-column">
          <Search />
          <div className='col-s-12'>
            <PrimaryButton icon={<FaPlus />} text='New' onClick={handleShowModal} />
          </div>
        </div>
        <Table />
      </div>

      <Modal show={createModalShow} handleClose={handleHideModal} title='Add new pokemon'>


        <div className="col-6 col-s-12">
          <div className="col-11 col-s-12 center-vertical">
            <label className="col-4 col-s-12">Name: </label>
            <Input placeholder='Name' icon={ImSearch} />
          </div>
          <div className="col-11 col-s-12 center-vertical">
            <label className="col-4 col-s-12">Image: </label>
            <Input placeholder='Url' icon={ImSearch} />
          </div>
        </div>

        <div className="col-6 col-s-12">
          <div className="col-11 col-s-12 center-vertical">
            <label className="col-4 col-s-12">Attack: </label>
            <RangeInput text='Attack' min={0} max={100} step={1} />
          </div>
          <div className="col-11 col-s-12 center-vertical">
            <label className="col-4 col-s-12">Defense: </label>
            <RangeInput text='Defense' min={0} max={100} step={1} />
          </div>
        </div>

        <div className="col-s-12 col-12">
          <div className='row-center'>
            <PrimaryButton icon={<BiSolidSave />} text='Save' onClick={() => { }} />
            <SecondaryButton icon={<ImCross />} text='Cancel' onClick={handleHideModal} />
          </div>
        </div>

      </Modal>
    </>
  )
}

export default App
