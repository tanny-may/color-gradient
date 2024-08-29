import styles from './GradientForm.module.css';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function GradientForm({ width, height }) {
	const [color1, setColor1] = useState('white');
	const [color2, setColor2] = useState('black');
	const [inputValue1, setinputValue1] = useState('');
	const [inputValue2, setinputValue2] = useState('');

	// const input1 = useRef();
	// function clearInputs() {
	// 	console.log(input1);
	// 	input1.current.value = '';
	// }

	const wrapperStyles = {
		width: width,
		height: height,
		background: `linear-gradient(${color1}, ${color2})`,
	};

	function clearInputs() {
		setinputValue1('');
		setinputValue2('');
	}

	function handleSubmit(e) {
		e.preventDefault();
		setColor1(inputValue1);
		setColor2(inputValue2);
	}


	return (
		<div className={styles.wrapper} style={wrapperStyles}>
			<form onSubmit={handleSubmit}>
				<label className={styles.inputs}>
					<input
						// ref={input1}
						name='color1'
						className={styles.input}
						value={inputValue1}
						minLength='4'
						maxLength='7'
						onChange={(e) => {setinputValue1(e.target.value)}}
					></input>
					<input
						name='color2'
						className={styles.input}
						value={inputValue2}
						minLength='4'
						maxLength='7'
						onChange={(e) => {setinputValue2(e.target.value)}}
					></input>
				</label>

				<button className={styles.button} type='submit'>
					PAINT
				</button>
				<button className={styles.button} type='button' onClick={clearInputs}>
					CLEAR
				</button>
			</form>
		</div>
	);
}


