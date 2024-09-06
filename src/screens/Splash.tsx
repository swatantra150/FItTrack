import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
const screenwidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
const Splash = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image 
        style={styles.imgProp}
        source={require('../assests/welcome.png')} // Ensure the path to your image is correct
      />
      <LinearGradient 
        colors={['transparent', '#18181b']}
        style={styles.linearGradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <Animated.View entering={FadeInDown.delay(100).springify()}
         style={styles.textContainer}>
        <View>
          <Text style={styles.text}>Best
            <Text style={{color:'#b71540'}}> Workouts</Text></Text>
        </View>
        <View>
          <Text style={styles.text}>For You</Text>
        </View>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(500).springify()}
         style={styles.btnProp}>
            <TouchableOpacity 
            style={styles.textProp}
            onPress={()=>navigation.navigate('Home')}>
                <Text style={styles.text3}>Get Started</Text>
            </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgProp: {
    height: screenHeight,
    width: screenwidth,
  },
  linearGradient: {
    width: wp(100),
    height: hp(70),
    position: 'absolute',
    bottom: 0,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:80,
    
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing:2
  },
  btnProp: {
    height: hp(7),
    width: wp(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#b71540',
    marginBottom: 50,
    alignSelf: 'center',
    marginTop: -140, // Adjust this value to set the distance between text and button
  },
  textProp:{
    height:hp(7),
    width:wp(80),
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
  },
  text3:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }
});

export default Splash;
