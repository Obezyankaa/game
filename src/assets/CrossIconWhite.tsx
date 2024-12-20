import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CrossIconWhite = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19 6L6 19M6 6L19 19"
      stroke="#EDEDED"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CrossIconWhite;