import React from 'react';
import Link from 'next/link';

import styles from './Breadcrumb.module.scss';

export type BreadcrumbProps = {
  name: string;
  url: string;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ name, url }) => {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol>
        <li>
          <Link href={isProd ? '/meal-picker' : '/'}>
            <a>All Meals</a>
          </Link>
      </li>
      <li>
        <Link href={isProd ? `/meal-picker${url}` : url}>
          <a aria-current="page">{name}</a>
        </Link>
      </li>
      </ol>
    </nav>
  );
};
