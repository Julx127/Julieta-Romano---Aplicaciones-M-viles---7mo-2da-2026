import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

export default function App(){
    const [formulario, setFormulario]=useState({nombre:'', contraseña:''});
    return(
        <View style={{padding:20}}>
            <View style={{flexDirection:'row', alignItems:'center', margin:5}}>
                <Text>Ingrese su nombre: </Text>
                <TextInput 
                style={{borderWidth: 1, padding: 8, marginTop: 10, borderRadius:5, margin: 1}}
                placeholder='Escribi aqui' 
                value={formulario.nombre} 
                onChangeText={(valor)=>setFormulario({...formulario, nombre: valor})}
            />
            </View>
            
            <View style={{flexDirection:'row', alignItems:'center', margin:5}}>
                <Text>Ingrese su contraseña: </Text>
                <TextInput 
                style={{borderWidth: 1, padding: 8, marginTop: 10, borderRadius:5, margin: 1}}
                placeholder='Escribi aqui' 
                value={formulario.contraseña}
                secureTextEntry 
                onChangeText={(valor)=>setFormulario({...formulario, contraseña: valor})}
            />
            </View>

            <Text style={{margin:5}}>Hola, {formulario.nombre}</Text>
        </View>
    );
}