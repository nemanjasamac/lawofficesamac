import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IconComponents = {
  privredno: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 6H9.5C9.22386 6 9 6.22386 9 6.5V7.5C9 7.77614 9.22386 8 9.5 8H10.5C10.7761 8 11 7.77614 11 7.5V6.5C11 6.22386 10.7761 6 10.5 6Z" fill="#D4AF37" />
      <path d="M14.5 6H13.5C13.2239 6 13 6.22386 13 6.5V7.5C13 7.77614 13.2239 8 13.5 8H14.5C14.7761 8 15 7.77614 15 7.5V6.5C15 6.22386 14.7761 6 14.5 6Z" fill="#D4AF37" />
      <path d="M10.5 9.5H9.5C9.22386 9.5 9 9.72386 9 10V11C9 11.2761 9.22386 11.5 9.5 11.5H10.5C10.7761 11.5 11 11.2761 11 11V10C11 9.72386 10.7761 9.5 10.5 9.5Z" fill="#D4AF37" />
      <path d="M14.5 9.5H13.5C13.2239 9.5 13 9.72386 13 10V11C13 11.2761 13.2239 11.5 13.5 11.5H14.5C14.7761 11.5 15 11.2761 15 11V10C15 9.72386 14.7761 9.5 14.5 9.5Z" fill="#D4AF37" />
      <path d="M10.5 13H9.5C9.22386 13 9 13.2239 9 13.5V14.5C9 14.7761 9.22386 15 9.5 15H10.5C10.7761 15 11 14.7761 11 14.5V13.5C11 13.2239 10.7761 13 10.5 13Z" fill="#D4AF37" />
      <path d="M14.5 13H13.5C13.2239 13 13 13.2239 13 13.5V14.5C13 14.7761 13.2239 15 13.5 15H14.5C14.7761 15 15 14.7761 15 14.5V13.5C15 13.2239 14.7761 13 14.5 13Z" fill="#D4AF37" />
      <path d="M18.25 19.25H17.75V4C17.7474 3.80189 17.6676 3.61263 17.5275 3.47253C17.3874 3.33244 17.1981 3.25259 17 3.25H7C6.80189 3.25259 6.61263 3.33244 6.47253 3.47253C6.33244 3.61263 6.25259 3.80189 6.25 4V19.25H5.75C5.55109 19.25 5.36032 19.329 5.21967 19.4697C5.07902 19.6103 5 19.8011 5 20C5 20.1989 5.07902 20.3897 5.21967 20.5303C5.36032 20.671 5.55109 20.75 5.75 20.75H18.25C18.4489 20.75 18.6397 20.671 18.7803 20.5303C18.921 20.3897 19 20.1989 19 20C19 19.8011 18.921 19.6103 18.7803 19.4697C18.6397 19.329 18.4489 19.25 18.25 19.25ZM16.25 19.25H11V17C11 16.8674 10.9473 16.7402 10.8536 16.6464C10.7598 16.5527 10.6326 16.5 10.5 16.5H9.5C9.36739 16.5 9.24021 16.5527 9.14645 16.6464C9.05268 16.7402 9 16.8674 9 17V19.25H7.75V4.75H16.25V19.25Z" fill="#D4AF37" />
    </svg>
  ),
  ugovorno: () => (

    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="File / Note_Edit">
        <path id="Vector" d="M10.0002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2839 19.7822 18.9076C20 18.4802 20 17.921 20 16.8031V14M16 5L10 11V14H13L19 8M16 5L19 2L22 5L19 8M16 5L19 8" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  ),
  porodicno: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3 18C3 15.3945 4.66081 13.1768 6.98156 12.348C7.61232 12.1227 8.29183 12 9 12C9.70817 12 10.3877 12.1227 11.0184 12.348C11.3611 12.4703 11.6893 12.623 12 12.8027C12.3107 12.623 12.6389 12.4703 12.9816 12.348C13.6123 12.1227 14.2918 12 15 12C15.7082 12 16.3877 12.1227 17.0184 12.348C19.3392 13.1768 21 15.3945 21 18V21H15.75V19.5H19.5V18C19.5 15.5147 17.4853 13.5 15 13.5C14.4029 13.5 13.833 13.6163 13.3116 13.8275C14.3568 14.9073 15 16.3785 15 18V21H3V18ZM9 11.25C8.31104 11.25 7.66548 11.0642 7.11068 10.74C5.9977 10.0896 5.25 8.88211 5.25 7.5C5.25 5.42893 6.92893 3.75 9 3.75C10.2267 3.75 11.3158 4.33901 12 5.24963C12.6842 4.33901 13.7733 3.75 15 3.75C17.0711 3.75 18.75 5.42893 18.75 7.5C18.75 8.88211 18.0023 10.0896 16.8893 10.74C16.3345 11.0642 15.689 11.25 15 11.25C14.311 11.25 13.6655 11.0642 13.1107 10.74C12.6776 10.4869 12.2999 10.1495 12 9.75036C11.7001 10.1496 11.3224 10.4869 10.8893 10.74C10.3345 11.0642 9.68896 11.25 9 11.25ZM13.5 18V19.5H4.5V18C4.5 15.5147 6.51472 13.5 9 13.5C11.4853 13.5 13.5 15.5147 13.5 18ZM11.25 7.5C11.25 8.74264 10.2426 9.75 9 9.75C7.75736 9.75 6.75 8.74264 6.75 7.5C6.75 6.25736 7.75736 5.25 9 5.25C10.2426 5.25 11.25 6.25736 11.25 7.5ZM15 5.25C13.7574 5.25 12.75 6.25736 12.75 7.5C12.75 8.74264 13.7574 9.75 15 9.75C16.2426 9.75 17.25 8.74264 17.25 7.5C17.25 6.25736 16.2426 5.25 15 5.25Z" fill="#D4AF37" />
    </svg>
  ),
  krivicno: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.99923 21H19.9992M11.9992 21V7M11.9992 7C13.1038 7 13.9992 6.10457 13.9992 5M11.9992 7C10.8947 7 9.99923 6.10457 9.99923 5M13.9992 5C13.9992 3.89543 13.1038 3 11.9992 3C10.8947 3 9.99923 3.89543 9.99923 5M13.9992 5H19.9992M9.99923 5H3.99923M5.99923 17C7.51177 17 8.76287 16.1584 8.96934 14.7513C8.98242 14.6621 8.98897 14.6175 8.98385 14.5186C8.98031 14.4503 8.95717 14.3256 8.93599 14.2605C8.90531 14.1664 8.86812 14.1003 8.79375 13.968L5.99923 9L3.2047 13.968C3.13575 14.0906 3.10128 14.1519 3.06939 14.2584C3.04977 14.3239 3.02706 14.4811 3.02735 14.5494C3.02781 14.6606 3.03453 14.6899 3.04799 14.7486C3.30295 15.86 4.5273 17 5.99923 17ZM17.9992 17C19.5118 17 20.7629 16.1584 20.9693 14.7513C20.9824 14.6621 20.989 14.6175 20.9838 14.5186C20.9803 14.4503 20.9572 14.3256 20.936 14.2605C20.9053 14.1664 20.8681 14.1003 20.7937 13.968L17.9992 9L15.2047 13.968C15.1358 14.0906 15.1013 14.1519 15.0694 14.2584C15.0498 14.3239 15.0271 14.4811 15.0273 14.5494C15.0278 14.6606 15.0345 14.6899 15.048 14.7486C15.303 15.86 16.5273 17 17.9992 17Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  radno: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 5V4C6 2.34315 7.34315 1 9 1H15C16.6569 1 18 2.34315 18 4V5H20C21.6569 5 23 6.34315 23 8V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V8C1 6.34315 2.34315 5 4 5H6ZM8 4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V5H8V4ZM19.882 7H4.11803L6.34164 11.4472C6.51103 11.786 6.8573 12 7.23607 12H11C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12H16.7639C17.1427 12 17.489 11.786 17.6584 11.4472L19.882 7ZM11 14H7.23607C6.09975 14 5.06096 13.358 4.55279 12.3416L3 9.23607V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V9.23607L19.4472 12.3416C18.939 13.358 17.9002 14 16.7639 14H13C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14Z" fill="#D4AF37" />
    </svg>
  ),
  intelektualna: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.7086 1.53214C10.9786 1.05676 10.078 0.917375 9.27255 1.04467C8.46803 1.17183 7.62325 1.5904 7.12591 2.39445C6.9332 2.70601 6.81024 3.04646 6.7559 3.40767C5.97312 3.35525 5.18086 3.59264 4.58547 4.08919C3.98255 4.59201 3.59741 5.34432 3.59741 6.25684C3.59741 6.55614 3.63851 6.86315 3.72008 7.17654C3.42298 7.23942 3.13697 7.34918 2.86932 7.50027C1.98542 7.99927 1.36438 8.90663 1.11913 9.88841C0.869371 10.8882 0.989124 12.0467 1.70052 13.0391C2.0609 13.5419 2.54903 13.9691 3.1623 14.305C3.01053 14.5081 2.88229 14.7271 2.77811 14.9565C2.35249 15.8935 2.32044 17.0038 2.64559 17.98C2.97535 18.9701 3.69756 19.8871 4.83624 20.3254C5.57833 20.6111 6.42615 20.6665 7.35551 20.4749C7.39798 20.9494 7.52745 21.3806 7.74983 21.7577C8.22598 22.5651 9.0236 22.9458 9.80541 22.9947C10.5523 23.0414 11.3758 22.778 12 22.2458C12.6242 22.778 13.4477 23.0414 14.1946 22.9947C14.9764 22.9458 15.774 22.5651 16.2502 21.7577C16.4725 21.3806 16.602 20.9494 16.6445 20.4749C17.5738 20.6665 18.4217 20.6111 19.1638 20.3254C20.3024 19.8871 21.0246 18.9701 21.3544 17.98C21.6796 17.0038 21.6475 15.8935 21.2219 14.9565C21.1177 14.7271 20.9895 14.5081 20.8377 14.305C21.451 13.9691 21.9391 13.5419 22.2995 13.0391C23.0109 12.0467 23.1306 10.8882 22.8809 9.88841C22.6356 8.90663 22.0146 7.99927 21.1307 7.50027C20.863 7.34918 20.577 7.23942 20.2799 7.17654C20.3615 6.86315 20.4026 6.55614 20.4026 6.25684C20.4026 5.34432 20.0175 4.59201 19.4145 4.08919C18.8191 3.59264 18.0269 3.35525 17.2441 3.40767C17.1898 3.04646 17.0668 2.70601 16.8741 2.39445C16.3767 1.5904 15.532 1.17183 14.7274 1.04467C13.922 0.917375 13.0214 1.05676 12.2914 1.53214C11.9861 1.73097 12.0139 1.73097 11.7086 1.53214ZM13.0033 20.0518L13.0033 17.5288C13.0045 17.0494 13.1133 16.3457 13.3939 15.7998C13.6573 15.2872 13.9946 15.0268 14.5082 15.0268C15.0623 15.0268 15.5115 14.5773 15.5115 14.0227C15.5115 13.4682 15.0623 13.0186 14.5082 13.0186C13.9202 13.0186 13.4216 13.16 13.0033 13.3894V12.5084C13.0045 12.029 13.1133 11.3254 13.3939 10.7794C13.6573 10.2668 13.9946 10.0064 14.5082 10.0064C15.0623 10.0064 15.5115 9.55688 15.5115 9.00234C15.5115 8.4478 15.0623 7.99826 14.5082 7.99826C13.9202 7.99826 13.4216 8.13957 13.0033 8.36902L13.0033 3.97532C13.005 3.57853 13.1671 3.35779 13.3859 3.21528C13.6436 3.04746 14.0284 2.96723 14.4144 3.02824C14.8013 3.08939 15.0539 3.26704 15.1679 3.45142C15.2603 3.60078 15.3726 3.9329 15.091 4.59054C14.9015 5.03294 15.0524 5.54766 15.4507 5.8175C15.849 6.08734 16.3825 6.03639 16.7226 5.69604C17.0903 5.32811 17.7563 5.32032 18.1299 5.63189C18.2795 5.75662 18.396 5.94564 18.396 6.25684C18.396 6.59422 18.2548 7.14633 17.705 7.91672C17.4235 8.31116 17.4637 8.85055 17.8006 9.19878C18.1375 9.54701 18.6749 9.60465 19.0779 9.33577C19.5101 9.04741 19.8566 9.08664 20.1448 9.24934C20.4837 9.44063 20.8032 9.85112 20.9342 10.3755C21.0607 10.8818 20.9923 11.4176 20.669 11.8686C20.3466 12.3184 19.6765 12.8121 18.3565 13.0323C17.8683 13.1137 17.5124 13.5392 17.5182 14.0344C17.5239 14.5296 17.8896 14.9467 18.3795 15.0167C18.8812 15.0884 19.207 15.3732 19.3952 15.7874C19.5966 16.231 19.6273 16.8151 19.4508 17.345C19.2789 17.861 18.9351 18.2619 18.4434 18.4511C17.9498 18.6411 17.1399 18.6809 15.9267 18.129C15.5761 17.9695 15.1653 18.025 14.8694 18.2716C14.5735 18.5183 14.4448 18.9127 14.5382 19.2866C14.6621 19.7827 14.8668 20.9406 14.0694 20.9905C13.5184 21.0249 13.0062 20.6055 13.0033 20.0518ZM10.9967 3.97532C10.995 3.57853 10.8329 3.35779 10.6141 3.21528C10.3564 3.04746 9.97157 2.96723 9.58558 3.02824C9.19869 3.08939 8.94611 3.26704 8.83207 3.45142C8.73968 3.60078 8.62739 3.9329 8.90901 4.59054C9.09846 5.03294 8.94757 5.54766 8.54931 5.8175C8.15105 6.08734 7.61747 6.03639 7.27739 5.69604C6.90975 5.32811 6.24365 5.32032 5.87006 5.63189C5.72051 5.75662 5.604 5.94564 5.604 6.25684C5.604 6.59422 5.74515 7.14633 6.29501 7.91672C6.57653 8.31116 6.53629 8.85055 6.19937 9.19878C5.86246 9.54701 5.32505 9.60465 4.92206 9.33577C4.48987 9.04741 4.1434 9.08664 3.8552 9.24934C3.51634 9.44063 3.19679 9.85112 3.06581 10.3755C2.93933 10.8818 3.0077 11.4176 3.33095 11.8686C3.65342 12.3184 4.32349 12.8121 5.64353 13.0323C6.13166 13.1137 6.48757 13.5392 6.48182 14.0344C6.47607 14.5296 6.11037 14.9467 5.62048 15.0167C5.1188 15.0884 4.793 15.3732 4.60484 15.7874C4.40339 16.231 4.37273 16.8151 4.54922 17.345C4.7211 17.861 5.06489 18.2619 5.55656 18.4511C6.05021 18.6411 6.86015 18.6809 8.0733 18.129C8.42388 17.9695 8.83474 18.025 9.13063 18.2716C9.42652 18.5183 9.5552 18.9127 9.4618 19.2866C9.33788 19.7827 9.13324 20.9406 9.93058 20.9905C10.4816 21.0249 10.9938 20.6055 10.9967 20.0518L10.9967 20.0472V17.5292C10.9955 17.0498 10.8868 16.3459 10.6061 15.7998C10.3427 15.2872 10.0054 15.0268 9.49176 15.0268C8.93765 15.0268 8.48846 14.5773 8.48846 14.0227C8.48846 13.4682 8.93765 13.0186 9.49176 13.0186C10.0798 13.0186 10.5784 13.16 10.9967 13.3894V12.5088C10.9955 12.0294 10.8868 11.3255 10.6061 10.7794C10.3427 10.2668 10.0054 10.0064 9.49176 10.0064C8.93765 10.0064 8.48846 9.55688 8.48846 9.00234C8.48846 8.4478 8.93765 7.99826 9.49176 7.99826C10.0798 7.99826 10.5784 8.13957 10.9967 8.36902L10.9967 3.97532Z" fill="#D4AF37" />
    </svg>
  ),
  upravno: () => (
    <svg fill="#D4AF37" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32" height="32" viewBox="796 796 200 200" enableBackground="new 796 796 200 200" xmlSpace="preserve">
      <g>
        <path d="M936.46,868.211c4.939,4.94,12.946,4.938,17.884,0c4.94-4.938,4.941-12.946,0-17.885l-50.619-50.622
		c-4.94-4.94-12.947-4.938-17.887,0c-4.939,4.938-4.939,12.946,0,17.885L936.46,868.211z"/>
        <path d="M817.588,885.841c-4.938-4.94-12.946-4.94-17.884,0c-4.939,4.938-4.941,12.945,0,17.885l50.619,50.619
		c4.94,4.94,12.946,4.94,17.887,0c4.94-4.938,4.94-12.946,0-17.886L817.588,885.841z"/>
        <path d="M989.605,963.929l-75.06-63.993c3.388-3.902,6.598-7.964,9.563-12.216l1.549-2.22c3.202-4.592,2.651-10.82-1.308-14.779
		L883.328,829.7c-3.959-3.959-10.187-4.509-14.779-1.307l-3.618,2.523c-13.254,9.244-24.769,20.759-34.014,34.012l-2.524,3.619
		c-3.203,4.593-2.653,10.822,1.306,14.78l41.023,41.021c3.959,3.959,10.186,4.51,14.778,1.307l2.22-1.549
		c4.25-2.964,8.312-6.172,12.213-9.558l63.994,75.058c3.297,3.867,8.06,6.181,13.136,6.38c5.079,0.202,10.01-1.725,13.603-5.317
		c3.595-3.593,5.522-8.523,5.32-13.602C995.785,971.988,993.471,967.227,989.605,963.929z"/>
      </g>
    </svg>
  ),
  medjunarodno: () => (
    <svg fill="#D4AF37" width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5A7.76 7.76 0 0 0 0 8a7.76 7.76 0 0 0 8 7.5A7.76 7.76 0 0 0 16 8 7.76 7.76 0 0 0 8 .5zm6.71 6.8L13.48 7c-.25-.07-.27-.09-.29-.12-.15-.2-.32-.47-.48-.73 0-.09-.13-.23-.16-.31s.35-.6.51-.84a2.43 2.43 0 0 1 .59-.45 5.87 5.87 0 0 1 1.06 2.75zM8 1.75l-.09.17a.19.19 0 0 1 0-.1c0 .06-.15.15-.25.25l-.3.29a.85.85 0 0 0-.08 1.08h-.12a1.05 1.05 0 0 0-.81.42 1.27 1.27 0 0 0-.2 1.07V5a3 3 0 0 0-.43.11l-.24.08-.64.21a1.2 1.2 0 0 0-.81.8 1 1 0 0 0 .2.93 5.67 5.67 0 0 0 1.38 1.09 4.17 4.17 0 0 0 1.67.65h1.68a1.2 1.2 0 0 1 1.04.51.49.49 0 0 1 .13.43.77.77 0 0 1-.15.35 2.71 2.71 0 0 0-.95 1.61 11.11 11.11 0 0 1-.48 1.38c-.12.31-.23.61-.31.85a3.32 3.32 0 0 1-1-.08 3.28 3.28 0 0 0-.5-2.12 2.24 2.24 0 0 1-.53-1.42 2.11 2.11 0 0 0-1.47-2.29 10.81 10.81 0 0 1-2.9-2.64A6.79 6.79 0 0 1 8 1.75zM1.25 8a5.64 5.64 0 0 1 .12-1.16 10.29 10.29 0 0 0 2.94 2.42c.6.22.69.45.69 1.12a3.45 3.45 0 0 0 .86 2.27A3.05 3.05 0 0 1 6 14a6.35 6.35 0 0 1-4.75-6zm8.32 6.08c0-.15.12-.32.18-.48a10.2 10.2 0 0 0 .55-1.6 1.55 1.55 0 0 1 .54-.86 1.91 1.91 0 0 0 .57-1.3 1.71 1.71 0 0 0-.47-1.27 2.45 2.45 0 0 0-2-.9H7.35a4.77 4.77 0 0 1-2-1.11l.47-.16.27-.08a.79.79 0 0 1 .38-.07l.09.15a.64.64 0 0 0 .81.29.65.65 0 0 0 .34-.8v-.18c-.11-.3-.24-.72-.32-1A1.42 1.42 0 0 0 8.68 4a1 1 0 0 0-.18-1 3.44 3.44 0 0 0 .33-.34 1 1 0 0 0 .22-.8 6.93 6.93 0 0 1 3.73 1.8 3 3 0 0 0-.79.7 9.14 9.14 0 0 0-.64 1.09 1.46 1.46 0 0 0 .24 1.39c.18.31.38.61.56.86a1.58 1.58 0 0 0 1 .58c.22.06 1 .22 1.55.33a6.44 6.44 0 0 1-5.13 5.47z" /></svg>
  ),
  steta: () => (
    <svg fill="#D4AF37" width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.634 17.918a1.765 1.765 0 0 0 1.201 1.291l.18.791H4v2h16v-2H6.683a.84.84 0 0 0-.007-.278l-.196-.863 10.357-2.356.196.863a.886.886 0 0 0 1.06.667l.863-.197a.885.885 0 0 0 .667-1.06l-.251-1.103c.446-.416.67-1.046.525-1.683l-.59-2.59a1.76 1.76 0 0 0-1.262-1.307l-2.049-3.378a2.774 2.774 0 0 0-2.982-1.263l-7.868 1.79a2.769 2.769 0 0 0-2.144 2.43l-.387 3.932a1.76 1.76 0 0 0-.57 1.724l.589 2.59zm3.02-.688a1.327 1.327 0 1 1-.59-2.589 1.327 1.327 0 0 1 .59 2.589zm11.222-2.552a1.328 1.328 0 1 1-.59-2.587 1.328 1.328 0 0 1 .59 2.587zM5.589 9.192l7.869-1.791a.773.773 0 0 1 .83.351l1.585 2.613-.566.129-10.046 2.287-.568.129.299-3.042a.772.772 0 0 1 .597-.676zM18.405 4 17 2l-.5 3L19 9l3 1-2-2.539 2-.933-2-.933L22 2z" /></svg>
  ),
  gdpr: () => (
    <svg width="32" height="32" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="si-glyph si-glyph-person-talk">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="#D4AF37">
          <path d="M5.524,12.285 C4.664,12.285 3.509,11.836 2.923,11.099 C0.114,11.099 0.029,15 0.029,15 L10.966,15 C10.967,15 11.186,11.083 8.029,11.083 C7.445,11.828 6.386,12.285 5.524,12.285 Z" className="si-glyph-fill">

          </path>
          <path d="M7.938,6.264 C7.938,7.515 6.833,9.907 5.469,9.907 C4.105,9.907 3,7.515 3,6.264 C3,5.015 4.104,4 5.469,4 C6.833,4 7.938,5.015 7.938,6.264 L7.938,6.264 Z" className="si-glyph-fill">

          </path>
          <path d="M12.527,0.041 C10.617,0.041 9.066,1.199 9.066,2.631 C9.066,3.937 10.36,5.013 12.037,5.192 L11.051,7.004 L13.807,5.035 C15.084,4.654 15.989,3.722 15.989,2.631 C15.988,1.199 14.439,0.041 12.527,0.041 L12.527,0.041 Z" className="si-glyph-fill">
          </path>
        </g>
      </g>
    </svg>
  ),
  bankarski: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.82333 6.00037C6.2383 6.36683 6.5 6.90285 6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.90285 9.5 3.36683 9.2383 3.00037 8.82333M5.82333 6.00037C5.94144 6 6.06676 6 6.2 6H17.8C17.9332 6 18.0586 6 18.1767 6.00037M5.82333 6.00037C4.94852 6.00308 4.46895 6.02593 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3.02593 7.46895 3.00308 7.94852 3.00037 8.82333M3.00037 8.82333C3 8.94144 3 9.06676 3 9.2V14.8C3 14.9332 3 15.0586 3.00037 15.1767M3.00037 15.1767C3.36683 14.7617 3.90285 14.5 4.5 14.5C5.60457 14.5 6.5 15.3954 6.5 16.5C6.5 17.0971 6.2383 17.6332 5.82333 17.9996M3.00037 15.1767C3.00308 16.0515 3.02593 16.531 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.46895 17.9741 4.94852 17.9969 5.82333 17.9996M5.82333 17.9996C5.94144 18 6.06676 18 6.2 18H17.8C17.9332 18 18.0586 18 18.1767 17.9996M21 15.1771C20.6335 14.7619 20.0973 14.5 19.5 14.5C18.3954 14.5 17.5 15.3954 17.5 16.5C17.5 17.0971 17.7617 17.6332 18.1767 17.9996M21 15.1771C21.0004 15.0589 21 14.9334 21 14.8V9.2C21 9.06676 21 8.94144 20.9996 8.82333M21 15.1771C20.9973 16.0516 20.974 16.5311 20.782 16.908C20.5903 17.2843 20.2843 17.5903 19.908 17.782C19.5311 17.9741 19.0515 17.9969 18.1767 17.9996M20.9996 8.82333C20.6332 9.2383 20.0971 9.5 19.5 9.5C18.3954 9.5 17.5 8.60457 17.5 7.5C17.5 6.90285 17.7617 6.36683 18.1767 6.00037M20.9996 8.82333C20.9969 7.94852 20.9741 7.46895 20.782 7.09202C20.5903 6.71569 20.2843 6.40973 19.908 6.21799C19.5311 6.02593 19.0515 6.00308 18.1767 6.00037M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  medijacija: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 7.99995H20M20 7.99995H19C17 6.00173 14 3.99974 12 5.99995M20 7.99995V15.9999M12 5.99995L8.99956 9.00158C8.9202 9.08097 8.88052 9.12066 8.84859 9.1558C8.15499 9.91889 8.15528 11.0842 8.84927 11.847C8.88121 11.8821 8.92098 11.9218 9.00031 12.0011C9.07967 12.0804 9.11936 12.1201 9.15449 12.152C9.91743 12.8453 11.0824 12.8452 11.8451 12.1516C11.8802 12.1197 11.9199 12.08 11.9992 12.0007L12.9996 11.0003M12 5.99995C10 3.99974 7 6.0018 5 8.00001H4M2 8.00001H4M4 8.00001V15.9999M20 15.9999V18.9999H22M20 15.9999H17.1716M15 12.9999L16.5 14.4999C16.5796 14.5796 16.6195 14.6194 16.6515 14.6547C17.3449 15.4175 17.3449 16.5824 16.6515 17.3452C16.6195 17.3805 16.5796 17.4203 16.5 17.4999C16.4204 17.5795 16.3805 17.6194 16.3453 17.6515C15.5824 18.3449 14.4176 18.3449 13.6547 17.6515C13.6195 17.6194 13.5796 17.5795 13.5 17.4999L13 16.9999C12.4548 17.5452 12.1821 17.8178 11.888 17.9636C11.3285 18.2408 10.6715 18.2408 10.112 17.9636C9.81788 17.8178 9.54525 17.5452 9 16.9999C8.31085 17.9188 6.89563 17.7912 6.38197 16.7639L6 15.9999H4M4 15.9999V18.9999H2" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

function PracticeAreaCard({ icon, title, shortDescription, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-bg-light/30 p-8 rounded-lg hover:bg-bg-light/50 transition-all duration-300 group cursor-pointer"
    >
      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-all">
        {icon.includes("/") ?
          IconComponents[icon.split("/").pop().replace(".svg", "")] ?
            IconComponents[icon.split("/").pop().replace(".svg", "")]() :
            <span className="text-accent text-3xl">⚖️</span>
          :
          <span className="text-accent text-3xl">{icon}</span>
        }
      </div>
      <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-accent transition-all">{title}</h3>
      <p className="text-text-secondary mb-6">{shortDescription}</p>
      <div className="flex items-center text-accent font-medium">
        <span className="mr-2">Saznajte više</span>
        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </div>
    </div>
  );
}

function DetailModal({ area, onClose }) {
  if (!area) return null;

  return (
    <div className="fixed inset-0 bg-bg-secondary/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-bg-primary rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-accent transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="p-8">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
            {area.icon.includes("/") ?
              IconComponents[area.icon.split("/").pop().replace(".svg", "")] ?
                IconComponents[area.icon.split("/").pop().replace(".svg", "")]() :
                <span className="text-accent text-3xl">⚖️</span>
              :
              <span className="text-accent text-3xl">{area.icon}</span>
            }
          </div>

          <h2 className="text-3xl font-bold mb-6">{area.title}</h2>

          {area.fullDescription.map((paragraph, index) => (
            <p key={index} className="text-text-secondary mb-4">{paragraph}</p>
          ))}

          {area.bulletPoints && (
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Naše usluge uključuju:</h3>
              <ul className="space-y-3">
                {area.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                    </div>
                    <p className="text-text-secondary">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-bg-light">
            <Link
              to="/kontakt"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-bg-secondary font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-accent/20"
            >
              Konsultacije za {area.title.toLowerCase()}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function OblastiPrava() {
  const [selectedArea, setSelectedArea] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedArea) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedArea]);

  const practiceAreas = [
    {
      icon: "/images/oblasti/privredno.svg",
      title: "Privredno i korporativno pravo",
      shortDescription: "Naš tim će vam pružiti usluge u oblasti privrednog i korporativnog prava",
      fullDescription: [
        "Privredno pravo predstavlja skup pravnih pravila koja regulišu osnivanje, organizaciju i poslovanje privrednih društava, kao i njihove međusobne odnose i transakcije.",
        "Naša kancelarija pruža sveobuhvatnu pravnu podršku privrednim subjektima u svim fazama njihovog poslovanja, od osnivanja do složenih korporativnih transakcija i restrukturiranja.",
                "Pruzicemo vam usluge:"

      ],
      bulletPoints: [
        "Osnivanja privrednih subjekata",
        "Registracija privrednih subjekata pred Agencijom za privredne registre",
        "Promena pravne forme privrednog društva",
        "Zastupanje u postupku statusne promene privrednog društva",
        "Pravni Due diligence izveštaji",
        "Vođenje pregovora",
        "Izrada i analiza ugovora",
        "Izrada svih akata društva( odluka o promeni poslovnog imena, o promeni direktora, izrada osnivačkog akta...)",
        "Naplata i obezbeđenje potraživanja",
        "Zastupanje u privrednim sporovima",
        "Sastavljanje predloga za izvršenje kao i pravnih lekova u izvršnom postupku",
        "Zastupanje u izvršnom postupku",
      ]
    },
    {
      icon: "/images/oblasti/ugovorno.svg",
      title: "Ugovorno pravo i imovinsko pravni odnosi",
      shortDescription: "Zastupamo klijente u svim vrstama ugovornih odnosa i rešavanju imovinsko-pravnih pitanja.",
      fullDescription: [
        "Nastojimo da sve sporne odnose rešavamo putem pregovora, te uspostavljanju kompromisa. Naš tim će vam pružiti stručnost, produktivnost, brzinu u rešavanju spornih pitanja iz ugovornog prava i imovinsko pravnih odnosa..",
                "Pruzicemo vam usluge:"

      ],
      bulletPoints: [
        "Zastupanja u pregovorima povodom zaključenja ugovora",
        "Sastavljanje ugovora- (Ugovor o doživotnom izdržavanju, Ugovor o raspodeli imovine za života, Ugovor o kupoprodaji, Ugovor o prometu nepokretnosti, Ugovor o poklonu, Ugovor o delu, Ugovor o poredovanju, Ugovor o trgovinskom zastupanju-agenturi, Ugovor o jemstvu, Ugovor o zakupu...)",
        "Pisanje tužbi, odgovora na tužbu, podnesaka u imovinsko pravnim sporovima",
        "Zastupanje pred sudom u svim vrstama imovinsko pravnih sporova",
        "Zastupanje u postupku izvršenja",
        "Savetovanje kod sastavljanja testamenta",
        "Pokretanje ostavinskog postupka",
      ]
    },
    {
      icon: "/images/oblasti/porodicno.svg",
      title: "Porodično pravo",
      shortDescription: "Nudimo podršku u svim porodičnim pitanjima, uključujući razvode, starateljstvo i podelu imovine.",
      fullDescription: [
        "S obzirom na prirodu porodičnog prava kao i na osetljivost ličnih odnosa, koji iz njega proizilaze, naš tim će vam pružiti efikasnu pravnu pomoć u rešavanju porodičnih sporova.",
        "Pruzicemo vam usluge:"
      ],
      bulletPoints: [
        "Sastavljanje tužbi",
        "Zastupanja u brakorazvodnim sporovima",
        "Zastupanje u svim porodičnim sporovima (izdržavanje supružnika, dece i ostalih srodnika, potpuno ili delimično lišenje roditeljkog prava, vršenje roditeljskog prava...)",
        "Sastavljanje bračnog ugovora i ugovora o sporazumnom upravljanju i raspolaganju zajedničkom imovinom",
        "Zastupanje u postupku zaštite od nasilja u porodici",
        "Zastupanje u postupcima usvojenja, starateljstva, hraniteljstva",
        "Zastupanje u postupcima zaštite prava deteta"
      ]
    },
    {
      icon: "/images/oblasti/krivicno.svg",
      title: "Krivično pravo",
      shortDescription: "Obezbeđujemo stručnu odbranu u krivičnim postupcima za širok spektar krivičnih dela.",
      fullDescription: [
        "Naš tim će vam pružiti adekvatnu i efikasnu odbranu u svim fazama krivičnog postupka i učiniti sve da odbrana bude uspešna. Takođe, u krivičnom postupku pružamo adekvatnu zaštitu prava oštećenog, koja uključuje izradu krivičnih prijava, privatnih tužbi kao i isticanje imovinsko pravnog zahteva.",
        "Pruzicemo vam usluge:"
      ],
      bulletPoints: [
        "Sastavljanje privatne tužbe, krivične prijave, žalbe kao i vanrednih pravnih lekova",
        "Zastupanje okrivljenog u predistražnom postupku, istražnom postupku i u postupku pred sudom u slučaju potvrđivanja optužnog akta",
        "Zastupanje oštećenog u krivičnom postupku",
        "Zastupanje maloletnih učinilaca krivičnih dela",
      ]
    },
    {
      icon: "/images/oblasti/radno.svg",
      title: "Radno pravo",
      shortDescription: "Savetujemo i poslodavce i zaposlene o pravima i obavezama iz radnog odnosa i zastupamo ih u radnim sporovima.",
      fullDescription: [
        "Radno pravo je najzastupljenije u svakodnevnom životu, međutim odlikuje ga niz specifičnosti, kao što su rok za pokretanje radnog spora, postupak u slučaju nezakonitog prestanka radnog odnosa, odnosno obaveza poslodavca u slučaju otkaza kao i isplata zarade, a sa kojima zasposleni najčešće nisu upoznati.",
        "Naš tim će vam pružiti usluge",
      ],
      bulletPoints: [
        "Zastupanje u mirnom rešavanju spornih pitanja iz radnog odnosa",
        "Pokretanja radnog spora",
        "Zastupanje u individualnim radnim sporovima",
        "Zastupanje u kolektivnim radnim sporovima, odnosno u sporovima između sindikalne organizacije i udruženja poslodavaca",
        "Usklađenost pravnih akata sa Zakonom o radu",
        "Davanje pravnih saveta i mišljenja u pojedinačnim pitanjima iz radnog prava"
      ]
    },
    {
      icon: "/images/oblasti/intelektualna.svg",
      title: "Pravo intelektualne svojine",
      shortDescription: "Štitimo prava autora i nosilaca intelektualne svojine i pružamo podršku u vezi sa autorskim pravima i patentima.",
      fullDescription: [
        "Stručni tim naše kancelarije pruža usluge registracije prava intelektualne svojine kao i zaštitu vaših prava, ukoliko neko neovlašćeno iskorišćava vašu intelektualnu svojinu, odnosno vaše autorsko delo, patent, žig, dizajn ali i „know how“, odnosno skup operativnih, prikrivenih informacija.",
        "Pravne usluge:"
      ],
      bulletPoints: [
        "Zastupanje prilikom registracije",
        "Zastupanje u postupku zaštite prava intelektualne svojine",
        "Zaštita poslovne tajne",
        "Zaštita u postupku nelojalne konkurencije",
      ]
    },
    {
      icon: "/images/oblasti/upravno.svg",
      title: "Upravno pravo",
      shortDescription: "Zastupamo klijente pred državnim organima i institucijama u upravnim postupcima i sporovima.",
      fullDescription: [
        "Uz pomoć našeg tima ostvarićete zaštitu vaših prava u skladu sa Zakonom o upravnom postupku i Zakonom o upravnom sporu. Posedujemo dugogodišnje iskustvo kao i stručnjake u oblasti upravnog prava. Pružamo pravnu pomoć i zastupanje kako u upravnom postupku tako i upravnom sporu.",
        "Pružamo pravne usluge:"
      ],
      bulletPoints: [
        "Sastavljanje upravnih akata",
        "Zastupanje pred Republičkim geodetskim zavodom i nadležnim službama za katastar nepokretnosti ( upis objekta, upis promene nosioca prava svojine na nepokretnosti, upis promene oblika prava svojine-pretvaranje prava korišćenja u pravo svojine)",
        "Sastavljanje tužbe, podnesaka, žalbe, prigovora, vanrednih pravnih lekova",
        "Pokretanje upravnog spora zbog ćutanja uprave",
        "Zastupanje u upravnom postupku i u upravnom sporu",
      ]
    },
    {
      icon: "/images/oblasti/medjunarodno.svg",
      title: "Međunarodno pravo",
      shortDescription: "Pružamo pravne usluge za međunarodne pravne odnose i prekogranične pravne predmete.",
      fullDescription: [
        "Advokatska kancelarija Samac i saradnici je usmerena ka pružanju stručne, kvalitetne pravne pomoći svojim klijentima u svim oblastima međunarodnog prava. Naročito, posedujemo stručna znanja i veštine u oblasti međunarodnog privatnog prava, u domenu porodičnopravnog, naslednopravnog, statusnog, te obligacionog odnosa. Takođe, pružamo pravnu pomoć i u domenu procesnog međunarodog privatnog prava, naročito u postupku priznanja i izvršenja stranih sudskih i arbitražnih odluka.",
        "U našoj kancelariji možete ostvariti pravne usluge:"
      ],
      bulletPoints: [
        "Davanje pravnog mišljenja u vezi primene merodavnog prava",
        "Vođenje postupka medijacije",
        "Iniciranje sudskog postupka domaćih i stranih fizičkih i pravnih lica",
        "Zastupanja u sudskom postupku domaćih i stranih fizičkih i pravnih lica",
        "Zastupanje u arbitražnom postupku",
        "Zastupanje u postupku priznanja i izvršenja stranih sudskih i arbitražnih odluka",
        "Zastupanje u postupku poništaja domaće arbitražne odluke",
        "Zastupanje u svim drugim postupcima sa inostranim elementom",
      ]
    },
    {
      icon: "/images/oblasti/steta.svg",
      title: "Naknada štete",
      shortDescription: "Pomažemo klijentima u ostvarivanju prava na naknadu materijalne i nematerijalne štete.",
      fullDescription: [
        "Naš tim je posebno specijalizovan u oblasti naknade štete, te posedujemo dugogodišnje iskustvo u ovoj oblasti. Brojni klijenti su nam ukazali poverenje, neki od njih su i Generali osiguranje ado, Milenijum osiguranje, Hydrosistems doo... Takođe, zastupamo i fizička lica u vansudskom i sudskom postupku naknade štete.",
        "Veliki broj fizičkih lica ne poznaje svoja prava ili ne zna na koji način da ostvari svoja prava, zbog toga će vam naša kancelarija pomoći i pružiti pravnu pomoć u naplati štete. Uz našu pomoć možete ostvariti naknadu štete ukoliko ste pretrpeli povredu na radu, ukoliko ste neosnovano lišeni slobode, naknadu štete usled telesnih povreda koje ste zadobili od ujeda psa lutalice. Najveći broj angažmana naše kancelarije je vezan za naknadu štete iz saobraćajne nezgode i to naknadu materijalne štete, odnosno štete na vozilu i nematerijalne štete na ime fizičkog bola, straha, umanjenja opšte životne aktivnosti, naruženosti, duševnih bolova usled smrti bliskog lica ili teškog invaliditeta bliskog lica.",
        "Pružamo pravne usluge:"
      ],
      bulletPoints: [
        "Zastupamo klijente u postupku naknade štete od osiguravajućeg društva",
        "Proučavamo kompletnu dokumentaciju",
        "Pribavljamo Zapisnik o uviđaju saobraćajne nezgode i drugu dokumentaciju od tužilaštva i drugih državnih organa",
        "Podnosimo odštetni zahtev, prigovor",
        "Zastupanje u postupcima usvojenja, starateljstva, hraniteljstva",
        "Zastupamo u sudskom postupku i preduzimamo sve druge radnje, koje su neophodne u vezi ostvarivanja vaših prava."
      ]
    },
    {
      icon: "/images/oblasti/gdpr.svg",
      title: "GDPR/Zaštita podataka o ličnosti",
      shortDescription: "Savetujemo o usklađenosti sa propisima o zaštiti podataka i pomažemo u implementaciji GDPR-a.",
      fullDescription: [
        "Naš tim pruža svim fizičkim i pravnim licima zaštitu podataka o ličnosti u skladu sa Zakonom o zaštiti podataka o ličnosti.",
        "“Podatak o ličnosti“ je svaki podatak koji se odnosi na fizičko lice čiji je identitet određen ili odrediv, neposredno ili posredno, posebno na osnovu oznake identiteta, kao što je ime i identifikacioni broj, podataka o lokaciji, identifikatora u elektronskim komunikacionim mrežama ili jednog, odnosno više obeležja njegovog fizičkog, fiziološkog, genetskog, mentalnog, ekonomskog, kulturnog i društvenog identiteta.",
        "Lični podaci svakog pravnog subjekta, odnosno fizičkog ili pravnog lica su trenutno najugroženija i najosetljivija informacija, koja je podložna zloupotrebi i raznim vrstama malverzacija. Naime, imajući u vidu sveopštu ekspanziju tehnološkog razvoja i napretka, te nadaleko veći prostor u kojem se lični podaci mogu objaviti, ovo pravo je od izuzetne važnosti, pa je neophodno da svaki pojedinac bude obazriv i da u slulčaju povrede dobije adekvatnu zaštitu.",
        "Veliki broj ljudi svoje lične podatke objavljuje putem interneta, najćešče na društvenim mrežama kao i putem drugih sredstava za elektronsku komunikaciju uključujući i elektronsko bankarstvo, elektronsku trgovinu, gde svako od pojedinaca dostavlja nepoznatim licima i organizacijama svoje lične, osetljive podatke, koji se mogu zloupotrebiti. Naš tim će vam pružiti pravnu pomoć u zaštiti svojih ličnih podataka. Pružićemo vam i pravnu pomoć u primeni Opšte uredbe o zaštiti podataka (General data Protection Regulation, skraćeno GDPR).",
        "Pružamo pravnu pomoć:"
      ],
      bulletPoints: [
        "Zastupanje u postupku zaštite prava podataka o ličnosti",
        "Zastupanje u postupku naknade štete prouzrokovane zloupotrebom podataka o ličnosti",
        "Davanje pravnih saveta pravnim licima u vezi zaštite podataka o ličnosti, odnosno zaštiti ličnih podataka zaposlenih",
        "Analiza usklađenosti načina poslovanja sa zahtevima GDPR-a",
        "Izrada neophodne dokumentacije prema regulativi GDPR-a",
      ]
    },
    {
      icon: "/images/oblasti/bankarski.svg",
      title: "Bankarski krediti - pravna zaštita",
      shortDescription: "Pružamo pravnu podršku u vezi sa kreditnim aranžmanima i sporovima sa finansijskim institucijama.",
      fullDescription: [
        "Naša advokatska kancelarija se bavi i zastupanjem u postupcima povodom nezakonitog naplaćivanja naknade za obradu kreditnog zahteva od strane banaka. Ukoliko ste zaključili ugovor o kreditu sa bankom, pri čemu Vam je banka naplatila troškove obrade kreditnog zahteva, na raspolaganju Vam je mogućnost da zahtevate vraćanje naknade, koju ste platitli, tako što će se tužbom utvrditi ništavost nezakonite odredbe ugovora o kreditu i kao posledica ništavosti se zahtevati naknada na ime neosnovanog obogaćenja od strane banke.",
        "Vrhovni kasacioni sud je dana 22.05.2018. godine, potvrdio stav nižih sudova kojima je utvrđena nezakonitost naplate naknade za obradu kredita, te je time potvrđen stav da banke nisu imale pravo da naplaćuju navedenu naknadu.",
        "Osim troškova obrade kreditnog zahteva, banke su nezakonito naplaćivale i premije osiguranja stambenih kredita osiguranih kod Nacionalne korporacije za osiguranje stambenih kredita (NKOSK) jer je plaćanje premije osiguranja bila obaveza banke, a ne korisnika kredita. Naša advokatska kancelarija će Vam omogućiti da naplatite naknadu na ime premije osiguranja.",
        "O ovom pitanju je Vrhovni kasacioni sud zauzeo stav i to Rešenjem kojim se odbija revizija banke i potvrđuje nezakonitost naplate premije osiguranja kod NKOSK."
      ],
    },
    {
      icon: "/images/oblasti/medijacija.svg",
      title: "Medijacija - mirno rešavanje sporova",
      shortDescription: "Pomažemo u alternativnom rešavanju sporova kroz posredovanje i pregovore.",
      fullDescription: [
        "Advokatska kancelarija Samac i saradnici ima licencirane posrednike za mirno rešavanje sporova.",
        "Ukoliko želite da spor rešite mirnim putem, bez pokretanja sudskog postupka i izazivanja parničnih troškova, naša advokatska kancelarija će Vam pružiti mogućnost brzog i lakog okončanja Vašeg spora putem posrednika.",
        "Medijacija je alternativni način rešavanja sporova u kojem stranke uz pomoć treće nepristrasne osobe(medijatora) traže rešenje spora mirnim putem, bez pokretanja sudskog postupka."
      ],
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative bg-bg-secondary py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary to-bg-secondary/70"></div>
          <div className="absolute inset-0 bg-[url('/images/oblasti-hero.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Oblasti <span className="text-accent">prava</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Specijalizovani smo za raznovrsne pravne oblasti, pružajući stručnu pomoć pravnim licima i građanima
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard
                key={index}
                icon={area.icon}
                title={area.title}
                shortDescription={area.shortDescription}
                onClick={() => setSelectedArea(area)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-accent/10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Potrebna vam je pravna pomoć?</h2>
          <p className="text-text-secondary mb-8 max-w-3xl mx-auto">
            Svaki pravni izazov zahteva personalizovan pristup. Zakažite konsultacije sa našim timom kako bismo razumeli vaš slučaj i ponudili najbolje rešenje.
          </p>
          <Link
            to="/kontakt"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-bg-secondary font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-accent/20 text-lg"
          >
            Zakažite konsultacije
          </Link>
        </div>
      </div>

      {selectedArea && (
        <DetailModal
          area={selectedArea}
          onClose={() => setSelectedArea(null)}
        />
      )}
    </div>
  );
}

export default OblastiPrava;