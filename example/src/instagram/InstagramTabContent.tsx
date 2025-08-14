import React, { useMemo } from 'react';
import { StyleSheet, type ViewProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  type SharedValue,
} from 'react-native-reanimated';
import type { Route } from 'react-native-tab-view';
import { VideosTab } from './assets/VideosTab';
import { PhotosTab } from './assets/PhotosTab';
import { TaggedTab } from './assets/TaggedTab';

const ACTIVE_COLOR = 'rgba(255, 255, 255, 1)';
const INACTIVE_COLOR = 'rgba(255, 255, 255, 0.5)';

const IconMap = {
  videos: VideosTab,
  photos: PhotosTab,
  tagged: TaggedTab,
};

type InstagramTabContentProps = ViewProps & {
  activePercentage: SharedValue<number>;
  route: Route;
};

export const InstagramTabContent = React.memo<InstagramTabContentProps>(
  (props) => {
    const { activePercentage, route, style } = props;

    const Icon = IconMap[route.key as keyof typeof IconMap];

    const animatedActiveLabelStyle = useAnimatedStyle(() => {
      return {
        opacity: Math.max(0, 1 - activePercentage.value / 100),
      };
    }, [activePercentage]);

    const animatedInactiveLabelStyle = useAnimatedStyle(() => {
      return {
        opacity: activePercentage.value / 100,
      };
    }, [activePercentage]);

    const activeLabel = useMemo(() => {
      return (
        <Animated.View style={[animatedActiveLabelStyle, style]}>
          <Icon stroke={ACTIVE_COLOR} />
        </Animated.View>
      );
    }, [Icon, animatedActiveLabelStyle, style]);
    const inactiveLabel = useMemo(() => {
      return (
        <Animated.View
          style={[styles.inactiveLabel, animatedInactiveLabelStyle]}
        >
          <Icon stroke={INACTIVE_COLOR} />
        </Animated.View>
      );
    }, [Icon, animatedInactiveLabelStyle]);

    return (
      <>
        {activeLabel}
        {inactiveLabel}
      </>
    );
  }
);

const styles = StyleSheet.create({
  inactiveLabel: {
    position: 'absolute',
  },
});
