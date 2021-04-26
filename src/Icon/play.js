import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Play(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320.001 320.001"
      {...props}
    >
      <Path d="M295.84 146.049l-256-144a16.026 16.026 0 00-15.904.128A15.986 15.986 0 0016 16.001v288a15.986 15.986 0 007.936 13.824A16.144 16.144 0 0032 320.001c2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z" />
    </Svg>
  )
}

export default Play;
