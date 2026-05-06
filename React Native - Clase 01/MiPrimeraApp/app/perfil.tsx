import { Text, View } from 'react-native';
export default function Perfil() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text style={{ fontSize: 20, color: 'red' }}>Nombre: Julieta Romano</Text>
<Text style={{ fontSize: 20, color: 'red' }}>Edad: 17</Text>
<Text style={{ fontSize: 20, color: 'red' }}>Curso: 7mo 2da Prog.</Text>
</View>
);
}