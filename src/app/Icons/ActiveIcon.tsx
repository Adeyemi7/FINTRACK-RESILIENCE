"use client";

import * as React from "react";

const ActiveIcon = ({
  width = 6,
  height = 7,
  fill = "#087A2E",
  ...props
}: React.SVGProps<SVGSVGElement> & { fill?: string }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 6 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={3} cy={3.25} r={3} fill={fill} />
  </svg>
);

export default ActiveIcon;
