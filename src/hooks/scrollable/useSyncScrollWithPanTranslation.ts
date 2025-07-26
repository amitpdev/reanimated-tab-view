import {
  scrollTo,
  useAnimatedReaction,
  type SharedValue,
} from 'react-native-reanimated';
import { useHeaderContext } from '../../providers/Header';
import { useSceneRendererContext } from '../../providers/SceneRenderer';
import { GestureSource } from '../../constants/scrollable';

export const useSyncScrollWithPanTranslation = (
  scrollRef: React.RefObject<
    React.Component<Record<string, any>, Record<string, any>, any>
  >,
  scrollYSV: SharedValue<number>
) => {
  const { animatedTranslateYSV, gestureSourceSV, translateYBounds } =
    useHeaderContext();
  const { isRouteFocused } = useSceneRendererContext();

  useAnimatedReaction(
    () => animatedTranslateYSV.value,
    (animatedTranslateY) => {
      const scrollToY = animatedTranslateY;
      if (
        !isRouteFocused &&
        (scrollToY < translateYBounds.upper ||
          (scrollToY === translateYBounds.upper &&
            scrollYSV.value <= translateYBounds.upper))
      ) {
        scrollTo(scrollRef, 0, scrollToY, false);
      } else {
        if (gestureSourceSV.value === GestureSource.PAN) {
          scrollTo(scrollRef, 0, scrollToY, false);
        }
      }
    },
    [
      animatedTranslateYSV,
      gestureSourceSV,
      isRouteFocused,
      scrollRef,
      scrollYSV,
      translateYBounds,
    ]
  );
};
