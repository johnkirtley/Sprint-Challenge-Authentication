import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Styled from 'styled-components';

const Title = Styled.h2`
text-align: center;
`;

const Joke = Styled.p`
    color: black;
    border: 2px solid black;
    border-radius: 10px;
    padding: 2% 3%;
`;

const JokeContainer = Styled.div`
 display: flex;
 flex-flow: column;
 justify-content: center;
 align-items: center;
`;

const Logout = Styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 1%;
    margin-top: 1%;
`;

export const Jokes = props => {
	const [jokes, setJokes] = useState([]);
	const [currentJoke, setCurrentJoke] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axiosWithAuth()
			.get('http://localhost:3300/api/jokes')
			.then(res => {
				console.log(res.data);
				setJokes(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const getJoke = () => {
		console.log('working');
		const random = Math.floor(Math.random() * 19);
		console.log(random);
		setCurrentJoke(jokes[random]);
		setIsLoading(false);
	};

	const logout = () => {
		window.localStorage.clear('token');
		props.history.push('/login');
	};

	return (
		<div>
			<Logout>
				<button onClick={() => logout()}>Logout</button>
			</Logout>
			<Title>Jokes 😂</Title>
			<JokeContainer>
				{isLoading ? <p></p> : <Joke>{currentJoke.joke}</Joke>}
				<button onClick={() => getJoke()}>Click for joke</button>
			</JokeContainer>
		</div>
	);
};
