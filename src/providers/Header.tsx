import React, { createContext, useContext, useMemo } from 'react';
import { useSharedValue, type SharedValue } from 'react-native-reanimated';
import { useInternalContext } from './Internal';
import { GestureSource } from '../constants/scrollable';

type HeaderContext = {
  animatedTranslateYSV: SharedValue<number>;
  gestureSourceSV: SharedValue<GestureSource>;
  translateYBounds: { lower: number; upper: number };
};

const HeaderContext = createContext<HeaderContext>({
  animatedTranslateYSV: { value: 0 },
  gestureSourceSV: { value: GestureSource.SCROLL },
  translateYBounds: { lower: 0, upper: 0 },
});

type HeaderContextProviderProps = {
  children: React.ReactNode;
};

export const HeaderContextProvider = React.memo<HeaderContextProviderProps>(
  function HeaderContextProvider({ children }) {
    const animatedTranslateYSV = useSharedValue(0);

    const gestureSourceSV = useSharedValue<GestureSource>(GestureSource.SCROLL);

    const { tabViewHeaderLayout } = useInternalContext();

    const translateYBounds = useMemo(() => {
      return {
        lower: 0,
        upper: tabViewHeaderLayout.height,
      };
    }, [tabViewHeaderLayout.height]);

    const value = useMemo(
      () => ({
        animatedTranslateYSV,
        translateYBounds,
        gestureSourceSV,
      }),
      [animatedTranslateYSV, translateYBounds, gestureSourceSV]
    );

    return (
      <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
    );
  }
);

export const useHeaderContext = () => useContext(HeaderContext);
