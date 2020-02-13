import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ResultDetails = ({result}) => {
	return(
		<View style={styles.container}>
			<Image style={styles.thumbImage} source={{uri: result.thumb}}/>
			<Text style={styles.name}>{result.name}</Text>
			<Text>
				{result.user_rating.aggregate_rating} Stars, {result.all_reviews_count} Reviews
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginLeft: 15
	},
	thumbImage: {
		width: 200,
		height: 120,
		borderRadius: 4,
		marginBottom: 5
	},
	name: {
		fontWeight: 'bold'
	}
});

export default ResultDetails;