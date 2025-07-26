import React from 'react';
import { StyleSheet, Text, type TextProps } from 'react-native';

type CustomTextProps = TextProps;

export const CustomText = ({ children, style, ...props }: CustomTextProps) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
