import { StyleSheet, Text, View,FlatList,Image,} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
const ExerciseList = ({data}) => {
    const router=useRoute()
    
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => <ExerciseCard router={router}  index={index} item={item} />}
      />
    </View>
  )
}
const ExerciseCard=({item,router,index})=>{
    const navigation=useNavigation();
    return(
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('ExerciseDetail',{params:item})}>
            <View>
                <Image
                source={{uri:item.gifUrl}}
                style={{width:wp(40),height:hp(40),borderRadius:20}}
                />
            </View>
            <Text style={{fontSize:15,color:'#ff7675'}}>
                {
                    item?.name?.length>20?item.name.slice(0,20)+'...':item.name
                }
            </Text>
        </TouchableOpacity>
      </Animated.View>
    )
}
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
})
export default ExerciseList