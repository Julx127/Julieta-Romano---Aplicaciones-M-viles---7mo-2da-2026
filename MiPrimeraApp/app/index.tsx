import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link href="/saludo" style={{ fontSize: 20, color: 'blue' }}>
        Ir a saludo
      </Link>
      <Link href="/perfil" style={{ fontSize: 20, color: 'red' }}>
        Ir a perfil
      </Link>
    </View>
  );
}