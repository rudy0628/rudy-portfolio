import useInput from '../../hooks/use-input';

import Input from '../UI/input/Input';
import classes from './Form.module.scss';

const isNotEmpty = value => value.trim().length !== 0;
const isEmail = value => value.trim().length !== 0 && value.includes('@');

const Form = () => {
	const {
		value: fullNameValue,
		hasError: fullNameHasError,
		isValid: fullNameIsValid,
		valueChangeHandler: fullNameChangeHandler,
		inputBlurHandler: fullNameBlurHandler,
		reset: fullNameReset,
	} = useInput(isNotEmpty);

	const {
		value: emailValue,
		hasError: emailHasError,
		isValid: emailIsValid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput(isEmail);

	const formIsValid = fullNameIsValid && emailIsValid;

	const submitHandler = e => {
		e.preventDefault();

		if (!formIsValid) return;

		fullNameReset();
		emailReset();
	};

	return (
		<div className={classes['cta__text-box']}>
			<h2 className="heading__secondary">聯絡我</h2>
			<p className={classes['cta__text']}>如果有問題，請填寫Email</p>
			<form
				className={classes['cta__form']}
				name="contact"
				method="post"
				// onSubmit={submitHandler}
			>
				<input type="hidden" name="form-name" value="contact" />
				<Input
					id="fullName"
					type="text"
					placeholder="王小名"
					value={fullNameValue}
					error={fullNameHasError ? 'Invalid FullName' : ''}
					onBlur={fullNameBlurHandler}
					onChange={fullNameChangeHandler}
				/>
				<Input
					id="email"
					type="email"
					placeholder="rudy@example.com"
					value={emailValue}
					error={emailHasError ? 'Invalid Email' : ''}
					onBlur={emailBlurHandler}
					onChange={emailChangeHandler}
				/>
				<button className="btn btn--form">送出</button>
			</form>
			<p className="line-break">或</p>
			<p className={classes['cta__text']}>寄送Eamil給我</p>
			<a
				href="mailto:s3352250zz@gmail.com"
				className="btn btn--outline"
				rel="noopener"
			>
				Email
			</a>
		</div>
	);
};

export default Form;
