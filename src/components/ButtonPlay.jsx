import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import useGame from '../hooks/useGame';

const ButtonPlay = () => {
	const { requestCards20 } = useGame();
	const { requestCards2 } = useGame();
	const handleClick20 = () => {
		requestCards20();
		
	};
	const handleClick2 = () => {
		requestCards2();
	};

	return (
		<Stack gap={2} className='col-md-5 mx-auto'>
			<Button onClick={handleClick20} variant='secondary'>
				Play Cards 10
			</Button>
			<Button onClick={handleClick2} variant='secondary'>
				Play Cards 2
			</Button>
		</Stack>
		
	);
};

export default ButtonPlay;
