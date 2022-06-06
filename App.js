
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import Bienvenida from './src/components/Bienvenida';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginForm />
      <Bienvenida/>
      
    

    
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
});
