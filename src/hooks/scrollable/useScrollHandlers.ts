import {
  cancelAnimation,
  useWorkletCallback,
  type SharedValue,
} from 'react-native-reanimated';
import { GestureSource } from '../../constants/scrollable';
import { useHeaderContext } from '../../providers/Header';
import { useSceneRendererContext } from '../../providers/SceneRenderer';
import type { NativeScrollEvent } from 'react-native';

export const useScrollHandlers = (scrollYSV: SharedValue<number>) => {
  const { animatedTranslateYSV, translateYBounds, gestureSourceSV } =
    useHeaderContext();

  const { isRouteFocused } = useSceneRendererContext();

  const onBeginDrag = useWorkletCallback(() => {
    if (!isRouteFocused) {
      return;
    }
    cancelAnimation(animatedTranslateYSV);
    gestureSourceSV.value = GestureSource.SCROLL;
  }, [animatedTranslateYSV, gestureSourceSV, isRouteFocused]);

  const onScroll = useWorkletCallback(
    (event: NativeScrollEvent) => {
      scrollYSV.value = event.contentOffset.y;
      if (!isRouteFocused) {
        return;
      }
      if (gestureSourceSV.value === GestureSource.SCROLL) {
        animatedTranslateYSV.value = Math.min(
          Math.max(event.contentOffset.y, translateYBounds.lower),
          translateYBounds.upper
        );
      }
    },
    [animatedTranslateYSV, gestureSourceSV, translateYBounds, isRouteFocused]
  );

  return { onBeginDrag, onScroll };
};
