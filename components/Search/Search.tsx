import React from 'react';

import { Close, Search as SearchIcon } from '../../components/Icons';
import { SrOnly } from '../../components/SrOnly/SrOnly';
import { Radio } from '../../components/Radio/Radio';
import { RadioContainer } from '../../components/Radio/RadioContainer';

import styles from './Search.module.scss';

export type HeaderProps = {
  searchTerm: string;
  searchType: string;
  onChangeValue: (term: string, type: string) => void;
};

export const Search: React.FC<HeaderProps> = ({ searchTerm, searchType, onChangeValue }) => {
  return (
    <form className={styles.search__form}>
      <div className={styles['search__input-container']}>
        <div className={styles.search__icon}>
          <SearchIcon />
        </div>
        <input
          className={styles.search__input}
          onChange={(evt) => onChangeValue(evt.target.value, searchType)}
          placeholder="Type a meal name"
          value={searchTerm}
        />
        <button type="button" className={styles.search__clear} onClick={() => onChangeValue('', searchType)}>
          {searchTerm ? (
            <>
              <Close />
              <SrOnly>Reset basket</SrOnly>
            </>
          ) : (
            ''
          )}
        </button>
      </div>
      <RadioContainer label="Filters" labelHidden={true}>
        <Radio name="mealType" label="All" id="all" value='all' checked={true} onChange={() => onChangeValue(searchTerm, '')} />
        <Radio name="mealType" label="Meals" id="meal" value='meal' onChange={() => onChangeValue(searchTerm, 'meal')} />
        <Radio name="mealType" label="Baking" id="baking" value='baking' onChange={() => onChangeValue(searchTerm, 'baking')} />
        <Radio name="mealType" label="Drink" id="drink" value='drink' onChange={() => onChangeValue(searchTerm, 'drink')} />
      </RadioContainer>
    </form>
  );
};
