import React from 'react';
import styles from './Radio.module.scss';

export interface RadioProps {
  name: string;
  label: string;
  checked?: boolean;
  id: string;
  value: string | number;
  onChange?: () => void;
}

export const Radio: React.FC<RadioProps> = ({
  name,
  label,
  checked,
  id,
  value,
  onChange,
}) => {
  return (
    <div className={styles['radio__wrapper']}>
      <input
        name={name}
        id={id}
        value={value}
        data-testid={`radio-${id}`}
        defaultChecked={checked}
        type="radio"
        className={styles['radio']}
        onChange={onChange}
      />
      <span className={styles['radio__label']}>
        <label htmlFor={id}>{label}</label>
      </span>
    </div>
  );
};
