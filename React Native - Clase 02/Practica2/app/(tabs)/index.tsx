import React, { ReactNode } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

interface CardProps {
  title: string;
  image: any;
  children: ReactNode;
}

function Card({ title, image, children }: CardProps){
  return (
    <View style={styles.card}>
      <Image 
        source={image} 
        style={styles.image} 
      />
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.content}>
        {children}
      </View>

      <Button title="SABER MAS" color="#9ba1b8"/>
    </View>
  );
};


export default function App() {
  return (
    <ScrollView style={styles.container}>
  
      <Card title="MANHATTAN" image={require('./imgs/manhattan.jpg')}>
        <Text>Manhattan - New York City - New York - EE.UU</Text>
        <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>The Big Apple</Text>
      </Card>

      <Card title="BROOKLYN" image={require('./imgs/brooklyn.jpg')}>
        <Text>Brooklyn - New York City - New York - EE.UU</Text>
      </Card>

      <Card title="QUEENS" image={require('./imgs/queens.jpg')}>
        <Text>Queens - New York City - New York - EE.UU</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9c3d1',
  },
  card: {
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
  },
  image: {
    width: '100%',
    height: 600,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  content: {
    marginVertical: 10,
  },
  button:{
    backgroundColor: '#9396ba',
  }
});
