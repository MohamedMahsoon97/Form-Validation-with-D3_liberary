import './Form-Img.scss';
import Bg from '../../Img/bg.png'

const FormImg = () => {
	return (
            <div className="form__img">
                  <img className='form__img-img' src={Bg} alt=""/>
                  <div className='form__details'>
                        <h2 className='form__details--title'>Choose a date range</h2>
                        <p className='form__details--text'>Lorem ipsum dolar set amet , consecuter adibaction elit , Manis immerdiet bebendum </p>
                  </div>
            </div>
      )
};

export default FormImg;