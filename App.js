
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import ContactUs from './ContactUs';
export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
        <View>
        <ContactUs/>
        </View>
       </ScrollView>
       </KeyboardAvoidingView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    padding:10,
    textAlign:'justify'
  }
});
