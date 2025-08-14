import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ProfileImage } from './ProfileImage';
import { ProfileStats } from './ProfileStats';
import { CustomView } from './basicComponents/CustomView';
import { ProfileDescription } from './ProfileDescription';
import { ProfileActionButtons } from './ProfileActionButtons';
import { ProfileHighlights } from './ProfileHighlights';

export const HEADER_HEIGHT = 250;

export const InstagramHeader = () => {
  return (
    <CustomView style={styles.header}>
      <CustomView style={styles.profileDetailsContainer}>
        <View style={styles.profileImageContainer}>
          <ProfileImage imageUrl={require('./assets/MainProfilePic.jpg')} />
          <ProfileStats />
        </View>
        <ProfileDescription />
        <ProfileActionButtons />
      </CustomView>
      <ProfileHighlights />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
  },
  profileDetailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  profileImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
