import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from 'react-native';

type ProfileImageProps = {
  imageUrl: ImageSourcePropType;
  size?: number;
  showActivityIndicator?: boolean;
};

export const ProfileImage = ({
  imageUrl,
  size = 60,
  showActivityIndicator = true,
}: ProfileImageProps) => {
  if (!showActivityIndicator) {
    return (
      <Image
        source={imageUrl}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Image
        source={imageUrl}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderWidth: 2,
    borderColor: 'rgb(192, 192, 192)',
    borderRadius: 100,
  },
});
