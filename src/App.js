import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import ModalAddNew from './components/ModalAddNew';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [isShowModalAddNew, setisShowModalAddNew] = useState(false);
  const handleClose = () => {
    setisShowModalAddNew(false)
  }

  return (
    <>
      <div className='app-container'>
        <Header />
        <Container>
          <div className='my-3 add-new'>
            <span><b>List Users:</b></span>
            <button className='btn btn-success'
              onClick={() => setisShowModalAddNew(true)}>Add new user</button>
          </div>
          <TableUsers />
        </Container>
        <ModalAddNew
          show={isShowModalAddNew}
          handleClose={handleClose}
        />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      // transition={Bounce}
      />

    </>
  );
}

export default App;
