import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
const BodyParts = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading,{color:'#D980FAf'}]}>Exercise</Text>
      <FlatList
        data={bodyParts}
        keyExtractor={item => item.name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => <BodyPartCard index={index} item={item} />}
      />
    </View>
  );
};

const BodyPartCard = ({ item, index }) => {
    const navigation=useNavigation()
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}
    style={styles.cardContainer}>
      <TouchableOpacity style={styles.card}
      onPress={()=>navigation.navigate('Exercises',{bodyParts:item.name,image:item.image})}>
        <Image 
          source={item.image}
          resizeMode='cover'
          style={styles.imgProp}
        />
        <LinearGradient 
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.gradient}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
        />
        <Text style={styles.text}>{item?.name}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flatListContent: {
    paddingBottom: 50,
    paddingTop: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20, // Space between rows
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10, // Space between columns
  },
  card: {
    width: wp(40),
    height: wp(50),
    borderRadius: 15,
    overflow: 'hidden',
  },
  imgProp: {
    height: '100%',
    width: '100%',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    bottom: 0,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    position: 'absolute',
    bottom: 10,
    left: 50,
    color: 'white',
    fontSize: hp(2.3),
    fontWeight: 'bold',
  },
});

export default BodyParts;
