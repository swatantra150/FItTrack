import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ExerciseDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params?.params || {}; // Safely access params

  // Debugging: Log params to inspect the data structure
  console.log('Params:', params);
  console.log('Instructions:', params.instructions);

  // Ensure instructions is an array and handle it properly
  const instructions = Array.isArray(params.instructions) ? params.instructions : [];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: params.gifUrl || 'https://via.placeholder.com/150' }} // Placeholder if gifUrl is not available
          style={styles.image}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="close-circle-outline" size={hp(4)} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.name}>{params.name || 'Exercise Name'}</Text>
        <Text style={[styles.label,{color:'#00cec9'}]}>Equipment: <Text style={styles.value}>{params.equipment || 'Not available'}</Text></Text>
        <Text style={[styles.label,{color:'#6c5ce7'}]}>Secondary Muscles: <Text style={styles.value}>{params.secondaryMuscles?.join(', ') || 'Not available'}</Text></Text>
        <Text style={[styles.label,{color:'#74b9ff'}]}>Target: <Text style={[styles.value,{color:'#ff7675'}]}>{params.target || 'Not available'}</Text></Text>
        <Text style={[styles.instructionsLabel,{color:'#ffeaa7'}]}>Instructions</Text>
        {
          instructions.length > 0 ? (
            instructions.map((instruction, index) => (
              <Text key={index} style={[styles.instruction,{color:'#EE5A24'}]}>{instruction}</Text>
            ))
          ) : (
            <Text style={styles.instruction}>No instructions available.</Text>
          )
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: wp(100),
    height: hp(50),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    position: 'absolute',
    top: hp(4),
    left: wp(85),
    height: hp(5.5),
    width: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a background to make the icon stand out
    borderRadius: hp(5.5) / 2,
  },
  scrollViewContent: {
    padding: 16,
  },
  name: {
    fontSize: 25,
    marginLeft: 5,
    marginBottom: 10,
    color:'#2d3436'
  },
  label: {
    fontSize: hp(2),
    marginBottom: 5,
  },
  value: {
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  instructionsLabel: {
    fontSize: hp(2.9),
    fontWeight: 'bold',
    marginVertical: 10,
  },
  instruction: {
    fontSize: hp(1.7),
    marginBottom: 5,
  },
});

export default ExerciseDetail;
