import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Feed(){
return(
    <View style={styles.container}>
     <SafeAreaView style={styles.droidSafeArea}/>
     <View style={styles.appTitle}>
         <View style={styles.appIcon}>
             <Image
             source={require("../assets/logo.png")}
             style={styles.IconImage}>

             </Image>
         </View>
         <View style={styles.appTitleTextContainer}>
             <Text style={styles.appTitleText}>Spectagram</Text>
         </View>

     </View>
     <View style={styles.cardContainer}>
         <FlatList
         keyExtractor={this.keyExtractor}
         data={posts}
         renderItem={this.renderItem}/>
     </View>
    </View>
);


const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
})



}
