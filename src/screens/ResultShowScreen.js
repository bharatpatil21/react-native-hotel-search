import React,  { useState , useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image} from 'react-native';


import zomato from '../api/zomato';

const ResultShowScreen = ({navigation}) => {
	const[result, setResult] = useState(null);
	const id = navigation.getParam('id');
	const getResult = async (id) => {
		const response = await zomato.get('/restaurant', {
			params: {
				res_id: id
			}
		});
		let newphotos = [];
		response.data.photos.forEach(photo => {
			newphotos.push(photo.photo);
		});
		response.data['photos'] = newphotos;
		setResult(response.data);
	}

	useEffect(() => {
		getResult(id);
	}, [])


	if (!result) {
		return null;
	}
	return (
		<View>
			<Text>{result.name}</Text>
			<FlatList
			data={result.photos}
			keyExtractor={(photo) => photo.id}
			renderItem={({item}) => {
				return <Image style={styles.image} source={{uri: item.url}}/>
			}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height:200,
		width: 300
	}
});


export default ResultShowScreen;