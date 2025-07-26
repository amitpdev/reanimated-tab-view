import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomText } from './basicComponents/CustomText';

export const ProfileStats = () => {
  return (
    <View style={styles.container}>
      <CustomText style={[styles.bold, styles.name]}>Mark Anthony</CustomText>
      <View style={styles.statsContainer}>
        <View>
          <CustomText style={[styles.bold, styles.statText]}>1350</CustomText>
          <CustomText style={styles.subText}>posts</CustomText>
        </View>
        <View>
          <CustomText style={[styles.bold, styles.statText]}>1.1M</CustomText>
          <CustomText style={styles.subText}>followers</CustomText>
        </View>
        <View>
          <CustomText style={[styles.bold, styles.statText]}>1278</CustomText>
          <CustomText style={styles.subText}>following</CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
  },
  statText: {
    fontSize: 15,
  },
  subText: {
    fontSize: 14,
  },
  container: {
    flex: 1,
  },
  statsContainer: {
    paddingTop: 5,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textAlignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
