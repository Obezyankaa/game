import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const QuestionIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G id="icon / 24 / question">
      <Path
        id="Ellipse 220"
        d="M13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21C11 20.4477 11.4477 20 12 20C12.5523 20 13 20.4477 13 21Z"
        fill="#EDEDED"
      />
      <Path
        id="Ellipse 221"
        d="M7 8.5C7 5.73858 9.23858 3.5 12 3.5C14.7614 3.5 17 5.73858 17 8.5C17 11.2614 14.7614 13.5 12 13.5V17"
        stroke="#EDEDED"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default QuestionIcon;
