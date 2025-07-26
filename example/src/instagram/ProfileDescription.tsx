import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomText } from './basicComponents/CustomText';

export const ProfileDescription = () => {
  return (
    <View style={styles.container}>
      <CustomText>Check this out</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
});
