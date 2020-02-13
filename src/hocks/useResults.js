import { useEffect, useState } from 'react';
import zomato from '../api/zomato';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async (searchTerm) => {
		try {
			const response = await zomato.get('/search', {
				params: {
					q: searchTerm
				}
			});
			let newResult = [];
			response.data.restaurants.forEach(restaurant => {
				newResult.push(restaurant.restaurant);
			});
			setResults(newResult);
			setErrorMessage('');
		} catch (error) {
			setErrorMessage('Something went wrong');
		}
	}

	// Call searchApi when component
	// is first rendered
	// searchApi('wakad');
	useEffect(() => {
		searchApi('wakad');
	},[])

	return [searchApi, results, errorMessage]
}