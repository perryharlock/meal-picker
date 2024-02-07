import React from 'react';
import Link from 'next/link';

import styles from './Breadcrumb.module.scss';

export type BreadcrumbProps = {
  name: string;
  url: string;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ name, url }) => {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol>
        <li>
          <Link href="/">
            <a>All Meals</a>
          </Link>
        </li>
        <li>
          <Link href={url}>
            <a aria-current="page">{name}</a>
          </Link>
        </li>
      </ol>
    </nav>
  );
};
