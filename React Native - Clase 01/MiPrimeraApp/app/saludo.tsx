import { Text, View } from 'react-native';
export default function Saludo() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text style={{ fontSize: 20, color: 'blue' }}>Hola desde otra pantalla </Text>
</View>
);
}