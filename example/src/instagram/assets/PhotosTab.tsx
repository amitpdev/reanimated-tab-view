import * as React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export const PhotosTab = ({ stroke = '#000', ...props }: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3 3h18v18H3V3zM9.015 3v18M14.985 3v18M21 9.015H3M21 14.985H3"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
