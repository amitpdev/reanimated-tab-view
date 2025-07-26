import * as React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export const VideosTab = ({ stroke = '#000', ...props }: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M2.05 7.002h19.9"
        stroke={stroke}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M13.504 2.001l2.858 5.001M7.207 2.11l2.795 4.892M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552v3.449z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.763 17.664a.908.908 0 01-.454-.787V11.63a.91.91 0 011.364-.788l4.545 2.624a.91.91 0 010 1.575l-4.545 2.624a.91.91 0 01-.91 0v-.001z"
        fill={stroke}
      />
    </Svg>
  );
};
