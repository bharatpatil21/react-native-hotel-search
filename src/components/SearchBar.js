import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return(
		<View style={styles.backgroundStyle}>
			<Feather name="search" size={30} style={styles.iconStyle}/>
			<TextInput style={styles.inputStyle}
				autoCapitalize="none"
				autoCorrect= { false }
				placeholder="Search"
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 10,
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginBottom: 5
	},
	inputStyle: {
		borderColor: 'black',
		fontSize: 18
	},
	iconStyle: {
		fontSize: 25,
		alignSelf: 'center',
		marginHorizontal: 10
	}
});

export default SearchBar;