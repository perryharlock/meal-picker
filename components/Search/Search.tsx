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
        <SrOnly>
          <label htmlFor="search-input">Enter a search term</label>
        </SrOnly>
        <input
          id="search-input"
          className={styles.search__input}
          onChange={(evt) => onChangeValue(evt.target.value, searchType)}
          placeholder="Type a meal name"
          value={searchTerm}
          data-testid="search-input"
        />
        {searchTerm && (
          <button type="button" className={styles.search__clear} onClick={() => onChangeValue('', searchType)}>
            <Close />
            <SrOnly>Reset basket</SrOnly>
          </button>
        )}
      </div>
      <RadioContainer label="Filters" labelHidden={true}>
        <Radio
          name="mealType"
          label="All"
          id="all"
          value="all"
          checked={searchType === '' ? true : false}
          onChange={() => onChangeValue(searchTerm, '')}
        />
        <Radio
          name="mealType"
          label="Meals"
          id="meal"
          value="meal"
          checked={searchType === 'meal' ? true : false}
          onChange={() => onChangeValue(searchTerm, 'meal')}
        />
        <Radio
          name="mealType"
          label="Baking"
          id="baking"
          value="baking"
          checked={searchType === 'baking' ? true : false}
          onChange={() => onChangeValue(searchTerm, 'baking')}
        />
        <Radio
          name="mealType"
          label="Drink"
          id="drink"
          value="drink"
          checked={searchType === 'drink' ? true : false}
          onChange={() => onChangeValue(searchTerm, 'drink')}
        />
      </RadioContainer>
    </form>
  );
};
