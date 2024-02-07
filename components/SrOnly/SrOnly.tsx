import React from 'react';
import styles from './SrOnly.module.scss';

export const SrOnly: React.FC = ({ children }) => (
  <span className={styles['sr-only']}>{children}</span>
);
