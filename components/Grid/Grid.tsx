import React from 'react';

import styles from './Grid.module.scss';

export type GridProps = {
  className?: string;
};

export const Grid: React.FC<GridProps> = ({ children, className }) => (
  <div className={`${styles.container} ${className ? className : ''}`}>{children}</div>
);
