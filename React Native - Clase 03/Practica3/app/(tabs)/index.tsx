import { View,  StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function App(){
    const [activada, setActivada] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.cajas}>
            </View>
            <View style={styles.cajas}>
            </View>
            <TouchableOpacity  onPress={() => setActivada(!activada)} 
                style={[
                    styles.cajas,
                    activada && styles.cajaActiva 
                ]}>
            </TouchableOpacity> 
        </View>

    );
}

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
        alignItems: 'center',
        
    },

    cajas:{
        backgroundColor: '#993ef9',
        width: 150,
        height: 100,
        borderRadius: 20,
    },

    cajaActiva: {
    backgroundColor: '#ff6b6b',
  }
});
