import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function AppApi() {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(json => {
setUsuarios(json);
setLoading(false);
})
.catch(error =>{
  console.error('Error al obtener datos de los usuarios: ', error);
})
}, []);

if (loading) {
return <ActivityIndicator size="large" color="blue" />;
}

return (
<View style={{ flex: 1, padding: 20, backgroundColor: '#e4f1fd' }}>
<Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 10, color: '#00488c' }}>
Lista de usuarios
</Text>
<FlatList
data={usuarios}
keyExtractor={item => item.id.toString()}
renderItem={({ item }) => (
<View style={{
padding: 10,
marginBottom: 5,
backgroundColor: '#b5cde3',
borderRadius: 10,
maxWidth: '50%'
}}>
<Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
<Text>{item.email}</Text>
</View>
)}
/>
</View>
);
}