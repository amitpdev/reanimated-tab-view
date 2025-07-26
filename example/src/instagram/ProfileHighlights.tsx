import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ProfileImage } from './ProfileImage';
import { CustomText } from './basicComponents/CustomText';
import { CustomView } from './basicComponents/CustomView';

export const ProfileHighlights = () => {
  return (
    <CustomView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.highlightsContainer}>
          {highlights.map((highlight) => (
            <View style={styles.highlightItem} key={highlight.id}>
              <ProfileImage imageUrl={highlight.image} size={35} />
              <CustomText style={styles.highlightName}>
                {highlight.name}
              </CustomText>
            </View>
          ))}
        </View>
      </ScrollView>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  highlightsContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
  },
  highlightItem: {
    alignItems: 'center',
    gap: 5,
  },
  highlightName: {
    fontSize: 12,
  },
});

const highlights = [
  {
    id: 1,
    image: {
      uri: 'https://fastly.picsum.photos/id/545/200/200.jpg?hmac=kDM7O5d6Tf22m2hu2UChghwNG-KvIuZzEQg5Dk-g3gQ',
    },
    name: 'Tokyo',
  },
  {
    id: 2,
    image: {
      uri: 'https://fastly.picsum.photos/id/859/200/200.jpg?hmac=vEU-8IgIt_Q7UmUqqkedPnQX0g_C-6w4WPB2VHTzfgg',
    },
    name: 'Paris',
  },
  {
    id: 3,
    image: {
      uri: 'https://fastly.picsum.photos/id/1055/200/200.jpg?hmac=23b3LoSYozZgCujiEcPGpgSvTaW35YghR4_EK2eJU9w',
    },
    name: 'London',
  },
  {
    id: 4,
    image: {
      uri: 'https://fastly.picsum.photos/id/930/200/200.jpg?hmac=RFuPrtDvQpcnLHYqLKXd8mbb6jxqDE1g0387zdxBVNg',
    },
    name: 'New York',
  },
  {
    id: 5,
    image: {
      uri: 'https://fastly.picsum.photos/id/545/200/200.jpg?hmac=kDM7O5d6Tf22m2hu2UChghwNG-KvIuZzEQg5Dk-g3gQ',
    },
    name: 'Berlin',
  },
  {
    id: 6,
    image: {
      uri: 'https://fastly.picsum.photos/id/859/200/200.jpg?hmac=vEU-8IgIt_Q7UmUqqkedPnQX0g_C-6w4WPB2VHTzfgg',
    },
    name: 'Madrid',
  },
  {
    id: 7,
    image: {
      uri: 'https://fastly.picsum.photos/id/1055/200/200.jpg?hmac=23b3LoSYozZgCujiEcPGpgSvTaW35YghR4_EK2eJU9w',
    },
    name: 'Rome',
  },
  {
    id: 8,
    image: {
      uri: 'https://fastly.picsum.photos/id/930/200/200.jpg?hmac=RFuPrtDvQpcnLHYqLKXd8mbb6jxqDE1g0387zdxBVNg',
    },
    name: 'Barcelona',
  },
];
