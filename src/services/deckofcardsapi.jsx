const getDeckId = async () => {
	const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
	const res = await fetch(url);
	const data = await res.json();
	return data?.deck_id;
};

const getCards20 = async deckId => {
	const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=20`;
	const res = await fetch(url);	
	const data = await res.json();
	
	return data?.cards;
};

const getCards2 = async deckId => {
	const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`;
	const res = await fetch(url);	
	const data = await res.json();
	
	return data?.cards;
};

const DeckOfCardsAPI = {
	getDeckId,
	getCards20,
	getCards2,
	
};

export default DeckOfCardsAPI;
