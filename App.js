import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  return (
    <View style={styles.container}>
      <Text style= {styles.textcolour1}>
        Bushra
      </Text>
      <Text style={styles.textcolour2}>
        Bushra2
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    alignItems:"center",
    justifyContent: "flex-start",
    
  },
  textcolour1:{
    backgroundColor: "pink"
  },
  textcolour2:{
    backgroundColor:"blue"
  }
});

export default App;
