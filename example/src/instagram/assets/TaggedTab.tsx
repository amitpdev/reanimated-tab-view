import * as React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export const TaggedTab = ({ stroke = '#000', ...props }: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.95 3.95 0 005.546 21.4v.603M12.072 14.63a3.556 3.556 0 100-7.11 3.556 3.556 0 000 7.11z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
