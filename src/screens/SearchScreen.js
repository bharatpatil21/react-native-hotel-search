import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';

import useResults from '../hocks/useResults';
import ResultList from '../components/ResultList';
const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();
	
	const filterResultByPrice = (price) => {
		// price === 1 || 2 || 3
		return results.filter((result) => {
			return result .price_range === price;
		})
	}

	return(
		<>
			<SearchBar
				term={term}
				onTermChange= {setTerm}
				onTermSubmit={() => searchApi(term)}
				/>
			{errorMessage ? <Text>{errorMessage}</Text>: null}
			<ScrollView>
				<ResultList
					title='Cost Effective'
					results={filterResultByPrice(3)}
					/>
				<ResultList
					title='Bit Pricier'
					results={filterResultByPrice(2)}
					/>
				<ResultList
					title='Big Spender'
					results={filterResultByPrice(1)}
					/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({

});

export default SearchScreen;