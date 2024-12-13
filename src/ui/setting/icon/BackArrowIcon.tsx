import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const BackArrowIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G id="icon / 24 / arrow">
      <Path
        id="Vector"
        d="M15 19.92L8.47997 13.4C7.70997 12.63 7.70997 11.37 8.47997 10.6L15 4.08"
        stroke="#EDEDED"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default BackArrowIcon;
