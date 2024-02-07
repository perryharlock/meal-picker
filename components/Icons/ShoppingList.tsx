import React from 'react';

const ShoppingList: React.FC = () => {
  return (
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.89474 1.5H30V4.5H7.89474V1.5Z" />
      <path d="M7.89474 25.5H30V28.5H7.89474V25.5Z" />
      <path d="M7.89474 13.5H30V16.5H7.89474V13.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.31579 24H0V30H6.31579V24ZM4.73684 25.5H1.57895V28.5H4.73684V25.5Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.31579 12H0V18H6.31579V12ZM4.73684 13.5H1.57895V16.5H4.73684V13.5Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.31579 0H0V6H6.31579V0ZM4.73684 1.5H1.57895V4.5H4.73684V1.5Z"
      />
    </svg>
  );
};

export { ShoppingList };
