import React from 'react';
import { CustomText } from './basicComponents/CustomText';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export const ProfileActionButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.primaryButton]}>
        <CustomText style={styles.text}>Follow</CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <CustomText style={styles.text}>Message</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    paddingVertical: 10,
  },
  button: {
    paddingVertical: 5,
    borderRadius: 10,
    flex: 1,
    backgroundColor: 'rgb(96, 96, 96)',
  },
  primaryButton: {
    backgroundColor: 'rgb(101, 126, 223)',
  },
  text: {
    textAlign: 'center',
  },
});
