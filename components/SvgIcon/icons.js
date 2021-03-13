const icons = {
  Logo: `<svg width="60" height="68" viewBox="0 0 60 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M59.976 13.6739C59.9095 12.4694 58.9478 11.5076 57.7432 11.4411C57.488 11.4269 54.0308 11.2588 49.5977 12.0824C48.6507 7.62492 47.1517 4.46953 47.0773 4.31461C46.5548 3.22699 45.2985 2.7068 44.1601 3.10617C43.998 3.16301 40.7079 4.33406 36.8871 6.81527C34.345 3.11426 31.7905 0.793359 31.5787 0.603633C30.68 -0.201211 29.32 -0.201211 28.4211 0.603633C28.2094 0.793242 25.6549 3.11426 23.1128 6.81527C19.292 4.33406 16.0018 3.16301 15.8398 3.10617C14.7015 2.70656 13.4448 3.22699 12.9226 4.31461C12.8482 4.46941 11.3493 7.62492 10.4022 12.0824C5.96919 11.2588 2.51204 11.4269 2.25681 11.4411C1.05235 11.5076 0.0904784 12.4693 0.0240331 13.6739C-0.00784184 14.2514 -0.660693 27.9101 7.61696 36.1876C14.6366 43.207 25.5255 43.8042 29.0254 43.8042C29.4889 43.8042 29.8219 43.7938 30 43.7864C30.178 43.7938 30.5107 43.8042 30.9746 43.8042C34.4753 43.8041 45.364 43.2065 52.383 36.1876C60.6607 27.9101 60.0078 14.2514 59.976 13.6739ZM43.6549 8.45672C44.0891 9.66375 44.6093 11.3237 45.0069 13.251C43.6665 13.6937 42.3075 14.2421 40.9765 14.9198C40.5146 13.4991 39.9417 12.1499 39.3071 10.8887C40.9465 9.81199 42.4915 9.00492 43.6549 8.45672ZM16.3477 8.45789C17.5113 9.00632 19.055 9.81304 20.6927 10.8886C20.0582 12.1498 19.4852 13.4989 19.0234 14.9197C17.6927 14.2423 16.3337 13.6939 14.9937 13.2512C15.3913 11.3312 15.9127 9.66843 16.3477 8.45789ZM10.9641 32.8406C5.98091 27.8578 4.96407 20.0231 4.77657 16.1933C7.80645 16.341 13.337 17.0088 17.9829 19.746C17.9099 20.4507 17.8709 21.1665 17.8709 21.8921C17.8709 28.8221 21.4173 34.8721 24.4005 38.7355C20.3208 38.1728 14.8118 36.6885 10.9641 32.8406ZM30.0001 38.0378C27.4234 35.1957 22.6042 28.9378 22.6042 21.892C22.6041 14.8457 27.4243 8.58714 29.9999 5.74629C32.5766 8.58832 37.3959 14.8462 37.3959 21.892C37.3959 28.9378 32.5768 35.1956 30.0001 38.0378ZM49.0362 32.8405C45.2067 36.6699 39.6936 38.1566 35.6078 38.7248C38.5895 34.8608 42.1294 28.8157 42.1294 21.8918C42.1294 21.1663 42.0902 20.4505 42.0173 19.7459C46.6666 17.0066 52.2015 16.3399 55.2287 16.1926C55.0484 20.0167 54.0416 27.8351 49.0362 32.8405Z"/>
  <path d="M11.56 49.52V58.8H15.72V60H10.2V49.52H11.56ZM20.3268 49.328C21.5214 49.328 22.4014 49.6267 22.9668 50.224C23.5321 50.8213 23.8148 51.6693 23.8148 52.768V56.752C23.8148 57.8507 23.5321 58.6987 22.9668 59.296C22.4014 59.8933 21.5214 60.192 20.3268 60.192C19.1321 60.192 18.2521 59.8933 17.6868 59.296C17.1214 58.6987 16.8388 57.8507 16.8388 56.752V52.768C16.8388 51.6693 17.1214 50.8213 17.6868 50.224C18.2521 49.6267 19.1321 49.328 20.3268 49.328ZM20.3268 50.528C19.6228 50.528 19.0894 50.704 18.7268 51.056C18.3748 51.408 18.1988 51.9253 18.1988 52.608V56.896C18.1988 57.5787 18.3748 58.1013 18.7268 58.464C19.0894 58.816 19.6228 58.992 20.3268 58.992C21.0308 58.992 21.5588 58.816 21.9108 58.464C22.2734 58.1013 22.4548 57.5787 22.4548 56.896V52.624C22.4548 51.9413 22.2734 51.424 21.9108 51.072C21.5588 50.7093 21.0308 50.528 20.3268 50.528ZM32.4513 49.52V50.752H29.4113V60H28.0513V50.752H25.0113V49.52H32.4513ZM40.9535 56.688C40.9535 57.8187 40.6655 58.688 40.0895 59.296C39.5135 59.8933 38.6655 60.192 37.5455 60.192C36.4362 60.192 35.5882 59.8987 35.0015 59.312C34.4255 58.7253 34.1375 57.8613 34.1375 56.72V49.52H35.4975V56.896C35.4975 57.5787 35.6735 58.1013 36.0255 58.464C36.3882 58.816 36.8948 58.992 37.5455 58.992C38.2068 58.992 38.7135 58.816 39.0655 58.464C39.4175 58.1013 39.5935 57.5787 39.5935 56.896V49.52H40.9535V56.688ZM45.9803 49.328C46.5563 49.328 47.3083 49.4133 48.2363 49.584L48.2043 50.784C47.3296 50.6133 46.5883 50.528 45.9803 50.528C45.3616 50.528 44.9136 50.6507 44.6363 50.896C44.3696 51.1413 44.2363 51.5147 44.2363 52.016V52.432C44.2363 52.6987 44.2683 52.912 44.3323 53.072C44.4069 53.2213 44.5349 53.3547 44.7163 53.472C44.8976 53.5787 45.1696 53.6907 45.5323 53.808L47.0203 54.304C47.7349 54.5493 48.2363 54.8747 48.5243 55.28C48.8229 55.6853 48.9723 56.2773 48.9723 57.056V57.36C48.9723 58.3093 48.6949 59.0187 48.1403 59.488C47.5963 59.9573 46.7003 60.192 45.4523 60.192C44.8443 60.192 44.0656 60.0853 43.1163 59.872L43.1483 58.64C44.0336 58.8533 44.7909 58.96 45.4203 58.96C46.2203 58.96 46.7856 58.8427 47.1163 58.608C47.4469 58.3627 47.6123 57.984 47.6123 57.472V56.944C47.6123 56.5707 47.5269 56.288 47.3563 56.096C47.1963 55.8933 46.9083 55.7227 46.4923 55.584L44.8443 55.04C44.1083 54.7947 43.5963 54.48 43.3083 54.096C43.0203 53.7013 42.8763 53.1093 42.8763 52.32V52.144C42.8763 51.216 43.1216 50.5173 43.6123 50.048C44.1136 49.568 44.9029 49.328 45.9803 49.328Z"/>
  </svg>    
  `,
  Instagram: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  Facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>`,
  Delivery:
    '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" clip-rule="evenodd"><path d="M5 11v1h8v-7h-10v-1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3h-1c-.552 0-1-.448-1-1v-6h-2v-2h7v2h-3zm3 5.8c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-10v2h.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h5.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm1-5v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705zm-16-3h8v2h-8v-2z"/></svg>',
  Location: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>`,
};

export default icons;
