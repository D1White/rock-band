import { FC } from 'react';

interface ScyterLogoProps {
  color?: string;
}

const ScyterLogo: FC<ScyterLogoProps> = ({ color }) => {
  return (
    <svg
      width="96"
      height="35"
      viewBox="0 0 96 35"
      fill={color && '#030101'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.996 16.516C2.396 16.516 1.88 16.06 1.448 15.148C1.016 14.236 0.8 13.12 0.8 11.8V4.312C0.8 3.856 2.06 3.076 4.58 1.972C7.1 0.843998 8.552 0.279999 8.936 0.279999C9.224 0.279999 9.632 0.759999 10.16 1.72C10.28 1.96 10.448 2.284 10.664 2.692C10.904 3.1 11.096 3.436 11.24 3.7C11.552 4.276 11.948 4.564 12.428 4.564V5.284C12.044 5.452 11.528 5.704 10.88 6.04C9.368 6.88 8.552 7.3 8.432 7.3C8.072 7.3 7.616 6.592 7.064 5.176C6.536 3.76 6.104 3.052 5.768 3.052C5.336 3.052 5.12 3.412 5.12 4.132V12.16C5.12 13.12 5.336 13.6 5.768 13.6C5.864 13.6 6.608 13.288 8 12.664C9.392 12.04 10.232 11.728 10.52 11.728C11.096 11.728 11.6 12.196 12.032 13.132C12.488 14.044 12.716 15.22 12.716 16.66V24.328C12.716 24.784 11.336 25.576 8.576 26.704C5.84 27.808 4.268 28.36 3.86 28.36C3.692 28.36 3.5 28.156 3.284 27.748C3.068 27.34 2.78 26.764 2.42 26.02C2.084 25.252 1.772 24.616 1.484 24.112C1.22 23.608 0.848 23.356 0.368 23.356V22.636C0.752 22.468 1.256 22.216 1.88 21.88C3.416 21.04 4.244 20.62 4.364 20.62C4.724 20.62 5.228 21.448 5.876 23.104C6.548 24.76 7.052 25.588 7.388 25.588C7.628 25.588 7.856 25.492 8.072 25.3C8.288 25.108 8.396 24.844 8.396 24.508V16.408C8.396 15.328 8.096 14.788 7.496 14.788C7.304 14.788 6.548 15.076 5.228 15.652C3.908 16.228 3.164 16.516 2.996 16.516ZM21.061 10.972C20.821 10.972 20.605 11.092 20.413 11.332V21.268C20.413 23.116 21.205 24.256 22.789 24.688C23.605 24.88 24.577 24.976 25.705 24.976V26.02C21.769 27.34 19.669 28 19.405 28C18.685 28 17.953 27.496 17.209 26.488C16.465 25.456 16.093 24.256 16.093 22.888V10.792C16.093 10.624 17.461 10.036 20.197 9.028C22.957 7.996 24.541 7.48 24.949 7.48C25.093 7.48 25.261 7.828 25.453 8.524C25.645 9.22 25.861 10.06 26.101 11.044C26.365 12.028 26.629 12.76 26.893 13.24C27.181 13.696 27.709 13.924 28.477 13.924V14.644C27.949 14.884 27.049 15.316 25.777 15.94C24.529 16.54 23.857 16.84 23.761 16.84C23.401 16.84 22.945 15.868 22.393 13.924C21.841 11.956 21.397 10.972 21.061 10.972ZM42.5637 9.892V24.184C42.5637 25.096 42.1557 26.392 41.3397 28.072C40.5237 29.776 39.6597 31.264 38.7477 32.536C37.8357 33.832 37.2117 34.48 36.8757 34.48C36.2757 34.48 35.4717 34.3 34.4637 33.94C33.4557 33.58 32.5917 33.22 31.8717 32.86L30.8277 32.32V31.24H32.0517C32.9877 31.24 34.0557 30.7 35.2557 29.62C36.4557 28.564 37.4517 27.148 38.2437 25.372C35.5317 26.644 33.9717 27.28 33.5637 27.28C32.8197 27.28 32.1477 26.812 31.5477 25.876C30.9717 24.916 30.6837 23.848 30.6837 22.672V12.772C30.6837 11.452 30.0957 10.672 28.9197 10.432V9.64L32.8437 7.444C33.3717 7.66 33.8637 8.02 34.3197 8.524C34.7757 9.004 35.0037 9.46 35.0037 9.892V19.648C35.0037 21.328 35.2677 22.456 35.7957 23.032C36.3237 23.584 37.1397 23.86 38.2437 23.86V12.772C38.2437 11.308 37.7517 10.48 36.7677 10.288V9.496L40.4037 7.444C40.9317 7.66 41.4237 8.02 41.8797 8.524C42.3357 9.004 42.5637 9.46 42.5637 9.892ZM50.4716 3.736V8.02H52.3076L51.9476 9.784H50.4716V22.672C50.4716 24.136 50.9636 24.964 51.9476 25.156V25.948L48.3116 28C47.7836 27.784 47.2916 27.436 46.8356 26.956C46.3796 26.452 46.1516 25.984 46.1516 25.552V9.82H44.6756L45.0356 8.308C45.7556 8.308 46.6196 7.828 47.6276 6.868C48.6596 5.884 49.2716 4.84 49.4636 3.736H50.4716ZM54.0617 25.552V7.732C54.0617 7.084 53.9537 6.628 53.7377 6.364C53.5217 6.076 53.1497 5.932 52.6217 5.932V4.924C55.7417 3.292 58.5257 1.756 60.9737 0.315998L61.5497 1.468C61.3097 1.588 60.9737 1.828 60.5417 2.188C60.1097 2.524 59.7497 2.872 59.4617 3.232C58.7417 4.144 58.3817 5.176 58.3817 6.328V9.388C60.8537 8.116 62.2937 7.48 62.7017 7.48C63.4697 7.48 64.2017 7.96 64.8977 8.92C65.5937 9.88 65.9417 10.936 65.9417 12.088V22.672C65.9417 23.992 66.5297 24.772 67.7057 25.012V25.804L63.7817 28C63.2537 27.784 62.7617 27.436 62.3057 26.956C61.8497 26.452 61.6217 25.984 61.6217 25.552V15.112C61.6217 12.76 61.1897 11.428 60.3257 11.116C59.9177 10.972 59.2697 10.9 58.3817 10.9V22.672C58.3817 24.136 58.8737 24.964 59.8577 25.156V25.948L56.2217 28C55.6937 27.784 55.2017 27.436 54.7457 26.956C54.2897 26.452 54.0617 25.984 54.0617 25.552ZM78.3505 7.48C78.4705 7.48 78.7705 7.672 79.2505 8.056C79.7305 8.416 80.2105 8.932 80.6905 9.604C81.1705 10.252 81.4105 10.888 81.4105 11.512V17.56C81.4105 17.992 80.7745 18.52 79.5025 19.144C78.2305 19.768 76.9945 20.284 75.7945 20.692C74.6185 21.076 73.9825 21.268 73.8865 21.268C73.8865 23.116 74.6905 24.256 76.2985 24.688C77.0905 24.88 78.0385 24.976 79.1425 24.976V26.02C75.2065 27.34 73.1065 28 72.8425 28C72.1225 28 71.3905 27.496 70.6465 26.488C69.9025 25.456 69.5305 24.256 69.5305 22.888V10.792C69.5305 10.624 70.8985 10.036 73.6345 9.028C76.3705 7.996 77.9425 7.48 78.3505 7.48ZM77.0905 13.204C77.0905 12.532 76.9345 11.968 76.6225 11.512C76.3105 11.032 75.9145 10.792 75.4345 10.792C74.9545 10.792 74.4265 10.972 73.8505 11.332V19.648C76.0105 19.048 77.0905 17.752 77.0905 15.76V13.204ZM83.0594 9.64L87.0194 7.48C87.1874 7.528 87.3794 7.6 87.5954 7.696C87.8354 7.768 88.1474 7.996 88.5314 8.38C88.9394 8.764 89.1434 9.196 89.1434 9.676C89.2634 9.628 89.8274 9.256 90.8354 8.56C91.8674 7.84 92.5274 7.48 92.8154 7.48C93.5834 7.48 94.3034 7.984 94.9754 8.992C95.6474 10 95.9834 10.924 95.9834 11.764V13.528L92.2754 15.616L91.6634 15.112C91.6634 13.096 91.4714 11.944 91.0874 11.656C90.6554 11.344 90.0074 11.188 89.1434 11.188V22.672C89.1434 24.136 89.6354 24.964 90.6194 25.156V25.948L86.9834 28C86.4554 27.784 85.9634 27.436 85.5074 26.956C85.0514 26.452 84.8234 25.984 84.8234 25.552V13.6C84.8234 12.544 84.6314 11.752 84.2474 11.224C83.8874 10.696 83.4914 10.432 83.0594 10.432V9.64Z" />
    </svg>
  );
};

export default ScyterLogo;