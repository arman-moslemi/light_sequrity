import * as React from "react";
const Bag = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.32}
      d="M2.162 8.5C2 9.603 2 11.05 2 13C2 16.771 2 18.657 3.172 19.828C4.343 21 6.229 21 10 21H14C17.771 21 19.657 21 20.828 19.828C22 18.657 22 16.771 22 13C22 11.05 22 9.603 21.838 8.5C19.561 9.98 18.102 10.923 16.75 11.505V12C16.7511 12.0985 16.7327 12.1962 16.696 12.2876C16.6593 12.379 16.6049 12.4623 16.536 12.5327C16.3968 12.6748 16.2069 12.7559 16.008 12.758C15.8091 12.7601 15.6175 12.6831 15.4753 12.544C15.3332 12.4048 15.2521 12.2149 15.25 12.016C13.1197 12.5776 10.8803 12.5776 8.75 12.016C8.74788 12.2149 8.66683 12.4048 8.52467 12.544C8.38252 12.6831 8.19091 12.7601 7.992 12.758C7.79309 12.7559 7.60317 12.6748 7.46401 12.5327C7.32486 12.3905 7.24788 12.1989 7.25 12V11.504C5.898 10.924 4.44 9.98 2.162 8.5Z"
      fill={props.bodyColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.581 2.24999H10.561C10.447 2.24999 10.359 2.24999 10.275 2.25499C9.75542 2.28658 9.25549 2.46498 8.8333 2.76945C8.4111 3.07392 8.084 3.49197 7.88999 3.97499C7.84737 4.08839 7.80736 4.20276 7.76999 4.31799L7.76599 4.32999C7.66284 4.60265 7.48845 4.84265 7.26099 5.02499C7.03399 5.03299 6.81699 5.04199 6.60899 5.05499C4.96499 5.15099 3.92199 5.42099 3.17099 6.17199C2.92699 6.41599 2.73299 6.69199 2.58099 7.00999C2.63945 7.03005 2.69521 7.05726 2.74699 7.09099C4.84699 8.45599 6.16699 9.31099 7.26299 9.85799C7.29767 9.67415 7.3998 9.5099 7.54935 9.39749C7.69889 9.28507 7.88506 9.23261 8.0713 9.25039C8.25753 9.26818 8.4304 9.35493 8.55597 9.49361C8.68154 9.6323 8.75074 9.81291 8.74999 9.99999V10.458C10.87 11.098 13.13 11.098 15.25 10.458V9.99999C15.2505 9.81382 15.3203 9.6345 15.4458 9.49692C15.5712 9.35933 15.7433 9.27332 15.9286 9.25561C16.114 9.2379 16.2993 9.28976 16.4485 9.4011C16.5977 9.51243 16.7002 9.67529 16.736 9.85799C17.833 9.30999 19.153 8.45599 21.253 7.09099C21.3051 7.05722 21.3612 7.03001 21.42 7.00999C21.2719 6.69896 21.0716 6.41554 20.828 6.17199C20.078 5.42199 19.035 5.15199 17.391 5.05399C17.194 5.04299 16.988 5.03399 16.773 5.02599C16.5214 4.82098 16.3271 4.55433 16.209 4.25199L16.205 4.24299C16.169 4.13599 16.141 4.05199 16.11 3.97399C15.9158 3.49116 15.5887 3.07332 15.1665 2.76903C14.7443 2.46474 14.2445 2.28649 13.725 2.25499C13.6297 2.2505 13.5344 2.24883 13.439 2.24999H10.581ZM14.818 4.81599L14.813 4.80499L14.808 4.79299L14.803 4.78099L14.8 4.77099L14.798 4.76599L14.794 4.75399L14.79 4.74199L14.788 4.73599L14.785 4.72799L14.783 4.72099L14.781 4.71499C14.7615 4.65414 14.7405 4.59378 14.718 4.53399C14.6298 4.31442 14.4812 4.12437 14.2893 3.98594C14.0974 3.84751 13.8702 3.76638 13.634 3.75199C13.5624 3.74949 13.4907 3.74882 13.419 3.74999H10.581C10.438 3.74999 10.398 3.74999 10.366 3.75199C10.1298 3.76638 9.90258 3.84751 9.71069 3.98594C9.5188 4.12437 9.37014 4.31442 9.28199 4.53399L9.27899 4.54099L9.27099 4.56199C9.24331 4.63808 9.2173 4.71476 9.19299 4.79199L9.19199 4.79799L9.18899 4.80499L9.18699 4.81299L9.18499 4.81899L9.18099 4.83099L9.17599 4.84299L9.17499 4.84799L9.17099 4.85799L9.16599 4.86999L9.16199 4.88199L9.15699 4.89199C9.14306 4.92829 9.12839 4.9653 9.11299 5.00099L9.99999 4.99999H14.896C14.8676 4.93955 14.8423 4.87818 14.818 4.81599Z"
      fill={props.headColor}
    />
  </svg>
);
export default Bag;
