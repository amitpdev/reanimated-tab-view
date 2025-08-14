import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  type ForwardedRef,
} from 'react';
import { type ScrollViewProps } from 'react-native';
import Animated from 'react-native-reanimated';
import { RTVScrollViewWithoutScrollHandler } from './RTVScrollView';
import type { FlatListProps } from 'react-native';
import { useScrollHandlers } from '../../hooks/scrollable/useScrollHandlers';

function _RTVFlatList<T>(
  props: FlatListProps<T>,
  ref: React.ForwardedRef<Animated.FlatList<T>>
) {
  const {
    onScroll,
    onScrollEndDrag,
    onScrollBeginDrag,
    onMomentumScrollEnd,
    onMomentumScrollBegin,
    ...restProps
  } = props;

  const flatListRef = useRef<Animated.FlatList<T>>(null);

  const handleScroll = useScrollHandlers({
    onScroll,
    onScrollEndDrag,
    onScrollBeginDrag,
    onMomentumScrollEnd,
    onMomentumScrollBegin,
  });

  const renderScrollComponent = useCallback(
    (scrollViewProps: ScrollViewProps) => {
      return <RTVScrollViewWithoutScrollHandler {...scrollViewProps} />;
    },
    []
  );
  useImperativeHandle(ref, () => flatListRef.current as any);

  return (
    <Animated.FlatList
      ref={flatListRef}
      {...restProps}
      renderScrollComponent={renderScrollComponent}
      onScroll={handleScroll}
    />
  );
}

export const RTVFlatList = React.memo(forwardRef(_RTVFlatList)) as <T>(
  props: FlatListProps<T> & {
    ref?: ForwardedRef<Animated.FlatList<T>>;
  }
) => ReturnType<typeof _RTVFlatList>;
