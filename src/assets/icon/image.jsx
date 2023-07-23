import * as React from "react";
const ImgIcon = (props) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"
      stroke="#00b8d9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={8.5}
      cy={8.5}
      r={2.5}
      stroke="#00b8d9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5262 12.6211L6 22H18.1328C20.2686 22 22 20.2686 22 18.1328V18C22 17.5335 21.8251 17.3547 21.5099 17.0108L17.4804 12.615C16.6855 11.7479 15.3176 11.7507 14.5262 12.6211Z"
      stroke="#00b8d9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ImgIcon;
