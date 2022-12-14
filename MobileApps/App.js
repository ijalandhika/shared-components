/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import {Skeleton, Card} from 'core-ui';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
const practitioner = {
  facility: 'A’dvanced Center for Daycare Surgery Abu Dhabi (ACDS)',
  practitioner: 'Dr. Rashid al Ahmed',
  images: {
    url: 'https://img.okadoc.co/plain/200x200/uploads/doctor/photo/65657/okadoc-doctor-psychiatrist-azeri-mednet-out-network-20220208095351.jpg',
    alt: 'this is just testing',
  },
};

const App = () => {
  const delay = 5;

  const [show, setShow] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {!show && <Skeleton />}
          {show && (
            <Card
              facility={practitioner.facility}
              practitioner={practitioner.practitioner}
              images={practitioner.images}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
