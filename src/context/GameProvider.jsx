import { useState } from 'react';
import DeckOfCardsAPI from '../services/deckofcardsapi';
import GameContext from './GameContext';

const GameProvider = ({ children }) => {
	const [playerOne, setPlayerOne] = useState({
		name: '',
		cards: [],
	});
	
	const [playerTwo, setPlayerTwo] = useState({
		name: '',
		cards: [],
	});
	const [idGame, setIdGame] = useState(null);
	const [winName, setWinName] = useState('');
	const [showToast, setShowToast] = useState(false);

	const playGameId = async () => {
		setIdGame(await DeckOfCardsAPI.getDeckId());
	
	};

	const requestCards20 = async () => {
		const cards20 = await DeckOfCardsAPI.getCards20(idGame);
		
		setPlayerOne({ ...playerOne, cards: [...playerOne.cards, 
			cards20[0],cards20[2],
			cards20[4],cards20[6],
			cards20[8],cards20[10],
			cards20[12],cards20[14],
			cards20[16],cards20[18],
		] });
		
		setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, 
			cards20[1],cards20[3],
			cards20[5],cards20[7],
			cards20[9],cards20[11],
			cards20[13],cards20[15],
			cards20[17],cards20[19],
		] }); 

	

		const findCardPlayerOne = playerOne.cards.find(
			card => card.suit === cards20[0].suit,
			card => card.suit === cards20[2].suit,
			
		);

		const findCardPlayerTwo = playerTwo.cards.find(
			card => card.suit === cards20[1].suit,
			card => card.suit === cards20[3].suit,
			
		);

		const SuitCardPlayerOne = playerOne.cards.find(
			card => card.suit ===  cards20[0].suit === cards20[2].suit === cards20[4].suit,
			
			
		);

		const SuitCardPlayerTwo = playerTwo.cards.find(
			card => card.suit === cards20[1].suit === cards20[3].suit === cards20[5].suit,
			
			
		);
		

		if (findCardPlayerOne || findCardPlayerTwo || SuitCardPlayerOne || SuitCardPlayerTwo) {
			setWinName(findCardPlayerOne ? playerOne.name : playerTwo.name && SuitCardPlayerOne ? playerOne.name : playerTwo.name );
			setShowToast(true);
		}
	};

	const requestCards2 = async () => {
		const cards2 = await DeckOfCardsAPI.getCards20(idGame);
		
		setPlayerOne({ ...playerOne, cards: [...playerOne.cards, 
			cards2[0],
		
		] });
		
		setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, 
			cards2[1]
			
		] }); 
		
	

		const findCardPlayerTwo = playerTwo.cards.find(
			card => card.value === cards2[1].value,
			
			
			
		);

		const SuitCardPlayerOne = playerOne.cards.find(
			card => card.suit === cards2[0].suit === cards2[2].suit === cards2[4].suit === cards2[6].suit,
			
			
		);

		const SuitCardPlayerTwo = playerTwo.cards.find(
			card => card.suit === cards2[1].suit === cards2[3].suit === cards2[5].suit === cards2[5].suit,
			
			
		);


		if (findCardPlayerTwo || SuitCardPlayerOne || SuitCardPlayerTwo) {
			setWinName(findCardPlayerTwo ? playerOne.name : playerTwo.name && SuitCardPlayerOne ? playerOne.name : playerTwo.name );
			
			setShowToast(true);
		}

	}




	return (
		<GameContext.Provider
			value={{
				playerOne,
				setPlayerOne,
				playerTwo,
				setPlayerTwo,
				playGameId,
				requestCards20,
				requestCards2,
				showToast,
				setShowToast,
				winName,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export default GameProvider;
