import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  height: 25px;
  width: 24px;
  stroke-width: 1px;
  stroke: none;
  fill: none;
`;

export default function GoogleIcon() {
  return (
    <Svg viewBox="0 0 24 25">
      <path
        d="M5.29584832,12.1894085 C5.29584832,11.4101873 5.43530566,10.6631383 5.68421053,9.96243906 L1.32749264,6.875 C0.478391631,8.47488453 0,10.2776174 0,12.1894085 C0,14.0995638 0.477803204,15.9012061 1.32572736,17.5 L5.68009153,14.4065627 C5.43354037,13.7091352 5.29584832,12.9648127 5.29584832,12.1894085"
        fill="#FBBC05"
      />
      <path
        d="M12.1876072,5.02344273 C13.902852,5.02344273 15.4521053,5.63741907 16.6693758,6.64210761 L20.2105263,3.06988167 C18.0526377,1.17213664 15.2861139,0 12.1876072,0 C7.37717556,0 3.24288235,2.77908015 1.26315789,6.83969636 L5.35982639,10 C6.30376432,7.10538067 8.9944854,5.02344273 12.1876072,5.02344273"
        fill="#EA4335"
      />
      <path
        d="M12.2408221,19.9765573 C9.03214607,19.9765573 6.32831801,17.8946193 5.37978199,15 L1.26315789,18.1597455 C3.25252594,22.2209198 7.40695803,25 12.2408221,25 C15.2243182,25 18.0727063,23.9350301 20.2105263,21.9396071 L16.3029582,18.9026568 C15.2004102,19.6009154 13.8120782,19.9765573 12.2408221,19.9765573"
        fill="#34A853"
      />
      <path
        d="M24,12.8183031 C24,12.1054796 23.8857143,11.3378235 23.7142857,10.625 L12,10.625 L12,15.2857691 L18.7428571,15.2857691 C18.4057143,16.8748172 17.488,18.0964871 16.1748571,18.8915594 L20.1908571,21.875 C22.4988571,19.816585 24,16.7503473 24,12.8183031"
        fill="#4285F4"
      />
    </Svg>
  );
}