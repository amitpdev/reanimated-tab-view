import React, { useCallback, useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { RTVFlatList } from 'reanimated-tab-view';
import { Image } from 'expo-image';

type Photo = {
  url: string;
};

const { width: screenWidth } = Dimensions.get('window');
const photoWidth = (screenWidth - 4) / 3; // 3 photos per row with 2px gaps
const photoHeight = photoWidth * 1.6;

export const InstagramPhotoGrid: React.FC = React.memo(() => {
  const data = useMemo(() => photos, []);
  const renderItem = useCallback(
    ({ item }: { item: Photo }) => <InstagramPhoto item={item} />,
    []
  );
  const keyExtractor = useCallback(
    (_: Photo, index: number) => `photo-${index}`,
    []
  );

  return (
    <RTVFlatList
      data={data}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
});

const InstagramPhoto = React.memo(({ item }: { item: Photo }) => {
  const source = useMemo(() => ({ uri: item.url }), [item.url]);
  const placeholder = useMemo(() => ({ blurhash }), []);
  return (
    <View style={styles.photoContainer}>
      <Image
        source={source}
        style={styles.photo}
        contentFit="cover"
        placeholder={placeholder}
      />
    </View>
  );
});

const photos: Photo[] = Array.from({ length: 500 }, (_, index) => {
  const randomIndex = index % 5;
  return {
    url: `https://picsum.photos/100/180?random=${randomIndex}`,
  };
});

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photoContainer: {
    width: photoWidth,
    height: photoHeight,
    paddingRight: 2,
    paddingBottom: 2,
    backgroundColor: 'rgb(128,128,128)',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
});
