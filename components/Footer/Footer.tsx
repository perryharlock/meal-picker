import React from 'react';

import { Grid } from '../Grid/Grid';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Grid>
        <a
          href="https://www.perryharlock.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer__highlight}
        >
          &copy; {new Date().getFullYear()} Crayons by Perry Harlock
        </a>
      </Grid>
    </footer>
  );
};
