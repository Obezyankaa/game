import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const ShareIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G id="icon / 24 / share">
      <Path
        id="Vector"
        d="M17.5005 8.9C21.0005 9.49961 21.5105 11.06 21.5105 15.11V15.24C21.5105 19.71 19.7205 21.5 15.2505 21.5H8.74047C4.27047 21.5 2.48047 19.71 2.48047 15.24V15.11C2.48047 11.09 3.00049 9.49961 6.50049 8.9M12.0005 15V3.62M15.3505 5.85L12.0005 2.5L8.65047 5.85"
        stroke="#EDEDED"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ShareIcon;
