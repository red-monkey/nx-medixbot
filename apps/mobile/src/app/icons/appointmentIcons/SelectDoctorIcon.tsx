import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SelectDoctorIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 25}
    height={props.height || 25}
    viewBox={`0 0 ${props.width || 25} ${props.height || 25}`}
    fill="none"
    {...props}
  >
    <Path
     fillRule="evenodd" clipRule="evenodd" d="M7.22818 2.79866C7.22182 2.82641 7.21614 2.85141 7.211 2.87405C7.20613 2.89557 7.20172 2.91508 7.1976 2.93306L7.19272 2.95419C6.12198 3.85971 5.5312 4.87452 5.28046 5.90551C5.02293 6.96434 5.13568 7.9908 5.38103 8.86659C5.62622 9.74197 6.01079 10.4923 6.32899 11.0193C6.489 11.2844 6.63466 11.4969 6.74171 11.6449C6.79536 11.719 6.83945 11.7772 6.87112 11.818C6.88698 11.8385 6.8997 11.8545 6.90892 11.8661L6.92023 11.8801L6.92381 11.8845L6.92509 11.8861L6.92598 11.8872L7.16624 12.1789L7.18283 12.1766C7.99699 14.1392 9.93175 15.5197 12.1889 15.5197C14.633 15.5197 16.6991 13.901 17.3738 11.6773C17.4931 11.6292 17.5882 11.562 17.6552 11.5078C17.9473 11.2712 18.2396 10.8326 18.4856 10.3731C18.9966 9.41813 19.5251 7.95341 19.5251 6.5883C19.5252 3.94592 17.8272 2.35981 16.014 1.43742C14.2117 0.520597 12.1711 0.184644 11.1555 0.0492375C10.2353 -0.0734584 9.49071 0.0375035 8.89703 0.333616C8.30132 0.630735 7.92136 1.08246 7.67648 1.52813C7.43616 1.96567 7.31935 2.4096 7.24838 2.71168C7.24092 2.74342 7.23424 2.77229 7.22818 2.79866ZM12.1889 14.1653C10.4106 14.1653 8.89919 13.0229 8.34845 11.4321C8.49236 11.1678 8.6376 10.7995 8.77921 10.2805C8.86073 9.98147 8.9306 9.56976 8.99995 9.1495L9.02534 8.99537C9.08981 8.60316 9.15842 8.18568 9.24171 7.77044C9.33611 7.29954 9.44521 6.85342 9.57832 6.47732C9.61862 6.36349 9.65932 6.26144 9.69987 6.17056C11.5536 7.30604 13.1284 7.79632 14.291 7.99263C14.9307 8.10064 15.442 8.11906 15.8021 8.10862L15.8292 8.10775L15.8574 8.10673C15.8871 8.1867 15.9189 8.28048 15.9511 8.38864C16.0964 8.87552 16.2519 9.658 16.2519 10.7795C16.2519 10.8154 16.2529 10.8537 16.2557 10.8936L16.1798 10.8683C15.8216 12.746 14.171 14.1653 12.1889 14.1653ZM6.68518 8.50125C6.86653 9.14856 7.14511 9.7268 7.40088 10.171C7.41023 10.1408 7.41972 10.1094 7.42931 10.0768C7.4435 10.0286 7.45793 9.9777 7.47253 9.92412C7.53198 9.70614 7.59096 9.36966 7.6637 8.92888L7.68875 8.77652L7.68903 8.77482C7.7531 8.38519 7.82567 7.94377 7.91377 7.50418C8.0136 7.00645 8.13751 6.4891 8.30159 6.02543C8.46153 5.57356 8.68102 5.1093 9.00423 4.76936L9.39651 4.35676L9.87032 4.67231C11.8198 5.97065 13.4245 6.47278 14.5165 6.65718C15.0638 6.7496 15.4862 6.76288 15.7629 6.75483C15.9013 6.75082 16.0034 6.74148 16.0666 6.73396C16.0896 6.73126 16.1074 6.72882 16.12 6.72696L16.1321 6.7251L16.1415 6.72346L16.5899 6.63307L16.8402 7.02136L16.271 7.38818C16.8402 7.02136 16.8404 7.02163 16.8405 7.02197L16.8418 7.02386L16.8436 7.02685L16.848 7.03381L16.8595 7.05258C16.8682 7.0672 16.8791 7.08595 16.8918 7.10905C16.9174 7.15524 16.9503 7.21847 16.9879 7.29941C17.0632 7.46139 17.1572 7.69372 17.2489 8.00149C17.3491 8.33743 17.4463 8.76169 17.514 9.28047C17.8725 8.48411 18.1708 7.47574 18.1708 6.5883C18.1708 4.66169 16.9777 3.44717 15.3999 2.64456C13.8112 1.83638 11.9607 1.52292 10.9765 1.39169C10.2574 1.29583 9.79861 1.39735 9.50154 1.54556C9.20644 1.69276 9.00809 1.91719 8.86351 2.18025C8.71452 2.45147 8.63091 2.74887 8.56677 3.02151C8.55911 3.05409 8.55092 3.09021 8.54239 3.12771C8.52058 3.22352 8.49683 3.32829 8.47508 3.40574C8.4595 3.46113 8.43323 3.54788 8.39023 3.63374L8.38989 3.63449C8.36978 3.67463 8.29509 3.82382 8.13148 3.93474C7.22169 4.68336 6.77924 5.47395 6.59647 6.22555C6.40862 6.99778 6.48305 7.77972 6.68518 8.50125ZM8.06784 16.099L8.06789 16.0991C8.07753 16.1183 8.08702 16.1373 8.09637 16.1557C8.1064 16.1755 8.11629 16.1948 8.12605 16.2134H10.878C11.4919 16.2132 11.7988 16.2133 12.1057 16.2134H12.1229H13.3302H16.0824C16.2369 15.9197 16.5888 15.4511 16.9293 15.5287C17.6942 15.7028 18.4648 15.9457 19.2053 16.2443L19.2279 16.233C19.2311 16.2393 19.2342 16.2457 19.2372 16.252L19.2403 16.2584C22.0271 17.3901 24.3782 19.3097 24.3782 21.3234V25.0005H0V21.3234C0 18.7668 3.78932 16.3621 7.44888 15.5287C7.74768 15.4606 7.92455 15.8133 8.06784 16.099ZM18.0834 17.2689C17.7926 17.1673 17.498 17.0752 17.2021 16.9936L16.8999 17.5677H13.3302H12.1143H10.8784H7.3085L7.02823 17.0353C6.9467 17.0587 6.8653 17.0831 6.78404 17.1081C6.77957 17.1527 6.77605 17.2031 6.77396 17.2596C6.76515 17.4932 6.78262 17.7702 6.82108 18.0526C6.85948 18.3342 6.91656 18.6043 6.98009 18.8222C6.99017 18.8568 7.00026 18.8893 7.01015 18.9198C8.01981 19.0378 8.80322 19.8962 8.80322 20.9374C8.80322 22.0595 7.89372 22.969 6.77171 22.969C5.6497 22.969 4.7402 22.0595 4.7402 20.9374C4.7402 20.215 5.11739 19.5806 5.68553 19.2204L5.67992 19.2014C5.59534 18.9113 5.52545 18.5748 5.4792 18.2356C5.4511 18.0298 5.43092 17.8168 5.42218 17.6071C4.58479 17.9645 3.80469 18.3966 3.15041 18.874C1.8485 19.8238 1.35434 20.712 1.35434 21.3234V23.6461H23.0238V21.3234C23.0238 20.712 22.5297 19.8238 21.2278 18.874C20.6967 18.4864 20.0827 18.1289 19.4225 17.8167C19.4118 17.9575 19.3966 18.0981 19.3778 18.2356C19.3466 18.4648 19.3045 18.6927 19.2544 18.9059H19.638C19.8945 18.9059 20.1289 19.0508 20.2436 19.2803L20.9208 20.6346C20.9679 20.7287 20.9923 20.8324 20.9923 20.9374V22.2918C20.9923 22.6658 20.6892 22.969 20.3151 22.969H18.9608V21.6146H19.638V21.0973L19.2195 20.2603H17.3478L16.9293 21.0973V21.6146H17.6065V22.969H16.2521C15.8781 22.969 15.5749 22.6658 15.5749 22.2918V20.9374C15.5749 20.8324 15.5994 20.7287 15.6465 20.6346L16.3236 19.2803C16.4383 19.0508 16.6728 18.9059 16.9293 18.9059H17.8513C17.8598 18.8795 17.8683 18.8516 17.8769 18.8222C17.9404 18.6043 17.9975 18.3342 18.0359 18.0526C18.0739 17.774 18.0914 17.5005 18.0834 17.2689ZM7.44888 20.9374C7.44888 21.3263 7.13631 21.6246 6.77171 21.6246C6.40714 21.6246 6.09454 21.3263 6.09454 20.9374C6.09454 20.5486 6.40714 20.2503 6.77171 20.2503C7.13631 20.2503 7.44888 20.5486 7.44888 20.9374Z" 
      fill={props.fill || '#333333'}
    />
  </Svg>
);

export default SelectDoctorIcon;
