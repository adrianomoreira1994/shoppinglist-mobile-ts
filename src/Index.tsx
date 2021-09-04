import React from 'react';
import { useFonts } from 'expo-font';


import Routes from './routes';

const Index = () => {
  const [loaded] = useFonts({
    OpenSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
    OpenSansRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
    OpenSansSemiBold: require('../assets/fonts/OpenSans-SemiBold.ttf'),
    LemonadaBold: require('../assets/fonts/Lemonada-Bold.ttf'),
    AllanBold: require('../assets/fonts/Allan-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Routes />
  );
}

export default Index;