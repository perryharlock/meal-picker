import React from 'react'

import { Close, Search as SearchIcon } from '../../components/Icons'
import { SrOnly } from '../../components/SrOnly/SrOnly'

import styles from './Search.module.scss'

export type HeaderProps = {
  searchTerm: string;
  onChangeValue: (term: string) => void;
}

export const Search: React.FC<HeaderProps> = ({ searchTerm, onChangeValue }) => {
  return (
    <form className={styles.search__form}>
      <div className={styles.search__icon}>
        <SearchIcon />
      </div>
      <input
        className={styles.search__input}
        onChange={evt => onChangeValue(evt.target.value)}
        placeholder="Type a meal name"
        value={searchTerm}
      />
      <button type="button" className={styles.search__clear} onClick={() => onChangeValue('')}>
        <Close /><SrOnly>Reset basket</SrOnly>
      </button>
    </form>
  );
};