import React from 'react';
import styles from './Radio.module.scss';

import { SrOnly } from '../../components/SrOnly/SrOnly';

interface RadioContainerProps {
  className?: string;
  label: string;
  labelHidden?: boolean;
}

export const RadioContainer: React.FC<RadioContainerProps> = ({
  className,
  label,
  labelHidden,
  children,
}) => {
  return (
    <div className={className ? className : ''}>
      {labelHidden ? (
          <SrOnly>
            <p>{label}</p>
        </SrOnly>
      ) : (
        <p>{label}</p>
      )}
      <div className={styles.radio__layout}>{children}</div>
    </div>
  );
};