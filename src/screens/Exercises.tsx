import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { FetchExercisesBodyParts } from '../api/ExerciseDb.tsx';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList.tsx';
import { ScrollView } from 'react-native-virtualized-view';
const ExercisesScreen = () => {
    const route=useRoute()
  const { bodyParts,image } = route.params;
  const [exercises, setExercises] = useState([]);
  //const item=useRoute()
const navigation=useNavigation()
  useEffect(() => {
    const fetchExercises = async () => {
      const data = await FetchExercisesBodyParts(bodyParts);
      if (data) {
       //console.log(data)
        setExercises(data);
      } else {
        console.log('Failed to fetch exercises');
      }
    };
    fetchExercises();
  }, [bodyParts]);

  return (
   <ScrollView> 
    <StatusBar style='light'/>
    <Image
     source={image}
    style={styles.image}/>
    <TouchableOpacity 
      onPress={()=>navigation.goBack()}
      style={styles.backButton}>
        <Ionicons  name="arrow-back-outline" size={hp(4)}/>
    </TouchableOpacity>
    {/* exercise */}
    <View>
        <Text style={{color:'#00b894',fontSize:35}}>{bodyParts}</Text>
        <ExerciseList data={exercises}/>
    </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      imageContainer: {
        position: 'relative',
      },
      image: {
        height: hp(40),
        width: wp(100),
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      },
      backButton: {
        position: 'absolute',
        top: hp(4),
        left: wp(4),
        height: hp(5.5),
        width: hp(5.5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red', // Optional: Adds a background to make the icon stand out
        borderRadius: hp(5.5) / 2,
      },
});

export default ExercisesScreen;
