import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import Button from '@/components/Button';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.Container} >
      <View style={styles.v1}>
        <Text style={styles.titleContainer}>National Ambulance Service</Text>
        <FormField title="Username" placeholder="Username" />
        <FormField title="Password" placeholder="Password" />
      </View>
      <View>
        <Button title="Login" containerStyles={styles.button} textStyles={styles.textStyle} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    fontSize: 32,
    color: "white",
    paddingBottom: 35,
  },
  Container: {
    backgroundColor: "#10251E",
    height: "100%",
  },
  v1: {
    alignItems: "center",
    paddingTop: 200,
  },
  button: {
    padding: 0,
    marginTop: 40,
    borderRadius: 8,
    width: 399,
    marginLeft: 14,
  },
  textStyle: {
    padding: 5,
  }
});
