import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ProfileImage } from './ProfileImage';
import { ProfileStats } from './ProfileStats';
import { CustomView } from './basicComponents/CustomView';
import { ProfileDescription } from './ProfileDescription';
import { ProfileActionButtons } from './ProfileActionButtons';
import { ProfileHighlights } from './ProfileHighlights';

export const InstagramHeader = () => {
  return (
    <>
      <CustomView style={styles.container}>
        <View style={styles.profileImageContainer}>
          <ProfileImage imageUrl={require('./assets/MainProfilePic.jpg')} />
          <ProfileStats />
        </View>
        <ProfileDescription />
        <ProfileActionButtons />
      </CustomView>
      <ProfileHighlights />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  profileImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
