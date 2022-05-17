import React from 'react';
import './App.scss';
import FormImg from './Components/Form-Img/Form-Img';
import Form from './Components/Form/Form'

const App = () => {
    return (
        <div className='container'>
            <div className='container__left'>
                <FormImg />
            </div>
            <div className='container__right'>
                <Form />
            </div>
        </div>
    )
}

export default App;