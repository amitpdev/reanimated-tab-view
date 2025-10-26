import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import type { TabIndicatorProps } from '../types/TabIndicator';
import { useTabLayoutContext } from '../providers/TabLayout';
import { useInternalContext } from '../providers/Internal';
import { usePropsContext } from '../providers/Props';

const TabIndicator = React.memo((props: TabIndicatorProps) => {
  const { style } = props;

  const { tabBarType, tabBarPosition, tabBarIndicatorStyle } =
    usePropsContext();
  const { animatedRouteIndex } = useInternalContext();

  const {
    routeIndexToTabWidthMapSV,
    routeIndexToTabOffsetMapSV,
    routeIndexToTabContentWidthMapSV,
  } = useTabLayoutContext();

  const animatedTabIndicatorContainerStyle = useAnimatedStyle(() => {
    const currentIndex = Math.floor(animatedRouteIndex.value);
    
    // Calculate offset by summing widths
    let translateX = 0;
    for (let i = 0; i < currentIndex; i++) {
      translateX += routeIndexToTabWidthMapSV.value[i] ?? 0;
    }
    
    const width = routeIndexToTabWidthMapSV.value[currentIndex] ?? 0;

    return { 
      transform: [{ translateX }], 
      width
    };
  }, []);

  return (
    <Animated.View
      style={[styles.tabIndicatorContainer, animatedTabIndicatorContainerStyle]}
    >
      <Animated.View
        style={[
          styles.tabIndicator,
          tabBarType === 'primary' && styles.primaryTabIndicator,
          tabBarPosition === 'top' && styles.topTabIndicator,
          tabBarPosition === 'bottom' && styles.bottomTabIndicator,
          tabBarIndicatorStyle,
          style,
        ]}
      />
    </Animated.View>
  );
});
export default TabIndicator;

const styles = StyleSheet.create({
  tabIndicatorContainer: {
    position: 'absolute',
    left: 0,
    height: '100%',
    justifyContent: 'center',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    width: '100%',
    backgroundColor: 'yellow',
  },
  topTabIndicator: {
    bottom: 0,
  },
  bottomTabIndicator: {
    top: 0,
  },
  primaryTabIndicator: {
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
  },
});
