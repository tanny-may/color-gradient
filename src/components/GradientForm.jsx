import styles from './GradientForm.module.css';
import { useState } from 'react';

const inputs = {
	inputValue1: '',
	inputValue2: '',
	inputValue3: '',
};

// eslint-disable-next-line react/prop-types
export function GradientForm({ width, height }) {
	const [background, setBackground] = useState('white');
	const [inputValues, setInputValues] = useState(inputs);

	const wrapperStyles = {
		width: width,
		height: height,
		background,
	};

	function clearInputs() {
		setInputValues(inputs);
		setBackground('white');
	}

	function handleSubmit(e) {
		e.preventDefault();
		setBackground(`linear-gradient(${Object.values(inputValues).join(', ')}`);
	}

	function handleChange(e) {
		setInputValues({ ...inputValues, [e.target.name]: e.target.value });
	}

	return (
		<div className={styles.wrapper} style={wrapperStyles}>
			<form onSubmit={handleSubmit}>
				<label className={styles.inputs}>
					{Object.keys(inputValues).map((el, i) => {

						return (
							<input
								key={i}
								name={el}
								className={styles.input}
								value={inputValues[el]}
								onChange={handleChange}
							></input>
						);
					})}
				</label>

				<div className={styles.buttons}>
					<button className={styles.button} type='submit'>
						PAINT
					</button>
					<button className={styles.button} type='button' onClick={clearInputs}>
						CLEAR
					</button>
				</div>
			</form>
		</div>
	);
}