import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Book(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 410.8 410.8"
      {...props}
    >
      <Path d="M327 0H118.44C89.4 0 58.28 16 58.28 60.16v37.28H31.64a8 8 0 000 16h26.64v84H31.64a8 8 0 000 16h26.64v84H31.64a8 8 0 000 16h26.64v37.2c0 44.32 31.04 60.16 60.16 60.16H327c44.32 0 60.16-31.04 60.16-60.16V60.16C387.16 15.84 356.12 0 327 0zm44.16 350.64c0 13.28-4.32 44.16-44.16 44.16H118.44c-13.28 0-44.16-4.32-44.16-44.16v-37.2h26.64a8 8 0 000-16H74.28v-84h26.64a8 8 0 000-16H74.28v-84h26.64a8 8 0 000-16H74.28V60.16c0-40 30.88-44.16 44.16-44.16H327c13.28 0 44.16 4.32 44.16 44.16v290.48z" />
      <Path d="M335.32 255.44l.4-143.04a8 8 0 00-8.96-8l-132.48 16a8 8 0 00-7.04 8v125.04a41.763 41.763 0 00-16.48-3.2 52.891 52.891 0 00-15.36 2.32 45.76 45.76 0 00-27.52 20.88 25.6 25.6 0 00-2.48 20c3.6 11.92 16 19.6 32 19.6a53.027 53.027 0 0015.36-2.32c20.8-6.32 33.52-22.96 30.24-38.64v-136l116.48-14.4v115.2a41.837 41.837 0 00-16.48-3.2 53.027 53.027 0 00-15.36 2.32 48.88 48.88 0 00-24 15.52 27.521 27.521 0 00-5.92 25.2c3.6 11.92 16 19.6 32 19.6a53.1 53.1 0 0015.36-2.32 48.722 48.722 0 0024-15.6 27.84 27.84 0 006.24-22.96zm-166.96 39.6c-12.32 3.76-25.44 0-27.52-6.64a10.24 10.24 0 011.2-8 30.638 30.638 0 0118.08-13.12 36.983 36.983 0 0110.72-1.68c8.56 0 15.28 3.28 16.8 8 1.76 7.12-5.52 17.28-19.28 21.44zM317 268.4a33.197 33.197 0 01-16 10.24c-12.32 3.76-25.44 0-27.52-6.64a12.32 12.32 0 012.88-10.56 33.278 33.278 0 0116-10.24 36.983 36.983 0 0110.72-1.68c8.56 0 15.28 3.28 16.8 8a12.32 12.32 0 01-2.96 10.88h.08z" />
    </Svg>
  )
}

export default Book;