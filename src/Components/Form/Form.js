import { useEffect, useState } from "react";
import "./Form.scss";

function App() {
	// React States
      
	// User Login info
	const database = {
            email: "",
		password: "",
		password2: "",
		fullname: "",
		number: "",
	};
      
	const [formValues , setFormValues] = useState(database);
      const [errorMessages, setErrorMessages] = useState({});
      const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e) => {
            const {name , value} = e.target;
            setFormValues ({...formValues , [name] : value});
	};

      const handleSubmit = (e) => {
            e.preventDefault();
            setErrorMessages(validate(formValues));
            setIsSubmitted(true);
      };

      // useEffect( () => {
      //       console.log(errorMessages);
      //       if(Object.keys(errorMessages).length === 0 && isSubmitted){
      //             console.log(formValues);
      //       }
      // } , [errorMessages]);

      const validate = (values) => {
            const errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

            if (!values.email) {
                  errors.email = "Email is required!";
            } else if (!regex.test(values.email)){
                  errors.email = "This is not a valid email format!";
            }
            if (!values.password) {
                  errors.password = "Password is required!";
            } else if (values.password.length < 4){
                  errors.password = "Password must be more than 4!";
            } else if (values.password.length > 10){
                  errors.password = "Password must be less than 10!";
            }
            if (!values.password2) {
                  errors.password2 = "Password is required!";
            } else if (values.password2.length < 4){
                  errors.password2= "Password must be more than 4!";
            } else if (values.password2.length > 10){
                  errors.password2 = "Password must be less than 10!";
            }
            if (!values.fullname) {
                  errors.fullname = "Fullname is required!";
            }
            if (!values.number) {
                  errors.number = "Number is required!";
            }
            return errors;
      }

	// JSX code for login form
	const renderForm = (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<div className="form__input">
					<label className="form__input--label">
						Your email address{"*"}
                                    <p>{errorMessages.email}</p>
					</label>
					<input
						type="email"
						name="email"
                                    placeholder="email"
						value={formValues.email}
						onChange={handleChange}
						
					/>
				</div>
				<div className="form__input">
					<label className="form__input--label">
						Your Password{"*"}
                                    <p>{errorMessages.password}</p>
					</label>
					<input
						type="password"
						name="password"
                                    placeholder="password"
						value={formValues.password}
						onChange={handleChange}
						
					/>
				</div>
				<div className="form__input">
					<label className="form__input--label">
						Confirm Your Password{"*"}
                                    <p>{errorMessages.password2}</p>
					</label>
					<input
						type="password"
						name="password2"
                                    placeholder="password confirm"
						value={formValues.password2}
						onChange={handleChange}
						
					/>
				</div>
				<div className="form__input">
					<label className="form__input--label">
						Your FullName{"*"}
                                    <p>{errorMessages.fullname}</p>
					</label>
					<input
						type="text"
						name="fullname"
                                    placeholder="fullname"
						value={formValues.fullname}
						onChange={handleChange}
					/>
				</div>
				<div className="form__input">
					<label className="form__input--label">
						Your Phone Number{"*"}
                                    <p>{errorMessages.number}</p>
					</label>
					<input
						type="text"
						name="number"
                                    placeholder="number"
						value={formValues.number}
						onChange={handleChange}
						
					/>
				</div>
				<div className="form__input check__form">
					<input
						type="checkbox"
						className="checkbox"
						id="check-label"
						
					/>
					<label
						className="form__input--label"
						htmlFor="check-label"
					>
						I read and agree the Terms & Conditions
					</label>
				</div>
				<div className="form__button">
					<input type="submit" value="Create Account" />
				</div>
			</form>
		</div>
	);

	return (
		<div className="login-form">
			<div className={!isSubmitted ? "title" : "hide-title"}>Create an account</div>
			{Object.keys(errorMessages).length === 0 && isSubmitted ? (
				<div className="logged__successfully">
					User is successfully logged in
				</div>
			) : (
				renderForm
			)}
		</div>
	);
}

export default App;
