import * as React from "react";
const BulletIcon = (props) => (
  <svg
    fill={props.headColor}
    width="20px"
    height="20px"
    viewBox="-96 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"i-bullet"}</title>
    <path d="M160 352Q120 352 92 324 64 296 64 256 64 216 92 188 120 160 160 160 200 160 228 188 256 216 256 256 256 296 228 324 200 352 160 352Z" />
  </svg>
);
export default BulletIcon;