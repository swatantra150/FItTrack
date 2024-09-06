import { StatusBar, StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicon from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';
const screenwidth = Dimensions.get('window').width;
const Home = () => {
  return (
   <SafeAreaView style={{flex:1}}>
    <StatusBar style='dark'/>
    <View style={styles.boxProp}>
        <View style={{marginLeft:25,marginTop:20}}>
            <Text style={{fontSize:40,fontWeight:'bold',color:'#1289A7'}}>Ready To</Text>
            <Text style={{color:'#e55039',fontSize:40,fontWeight:'bold'}}>WorkOut</Text>
        </View>
        <View style={{flexDirection:'column'}}>
         <Image 
         source={require('../assests/avatar.png')}
         style={styles.imgProp}/>
         <Ionicon name="notifications-circle-outline" size={30} color='#3c6382'
         style={{marginLeft:120}}/>
         </View>
    </View>
    {/* image slider */}
    <View>
        <ImageSlider/>
    </View>
    {/* Body Parts */}
    <View style={{flex:1}}>
        <BodyParts/>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    boxProp:{
        flexDirection:'row'
    },
    imgProp:{
        height:70,
        width:70,
        marginLeft:100,
        marginTop:15,
        borderRadius:50
    },
    sliderProp:{
          height:300,
          width:screenwidth,
          backgroundColor:'#e55039'
    }
})

export default Home

