import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Productlist from './components/Productlist';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize:20, fontWeight:"bold",paddingTop:10}}>
          Products
        </Text>
      </View>
      <Productlist/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    marginTop:50,
    width:"100%",
    height:50,
    backgroundColor:'lightblue',
    justifyContent:"center",
    alignItems:"center",
    elevation:20,
    shadowColor:"black",
    shadowOffset:30,

  }
});
