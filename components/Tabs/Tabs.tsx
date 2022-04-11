import React, { useState, Children, ReactElement } from 'react'

import { TabProps } from './Tab'

import styles from './Tabs.module.scss'

export const Tabs: React.FC = ({ children }) => {
  const [activeTab, setActiveTab] = useState('tab0')

  const selectTab = (tab: string) => {
    setActiveTab(tab);
  } 

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, tab: string) => {
    e.preventDefault();
    selectTab(tab);
  }

  return (
    <div>
      <ul className={styles.tab__nav} role="presentation">
        {Children.map(children, (child, index) => {
          const item = child as ReactElement<TabProps>;
          const isActive = activeTab === `tab${index}`;
          const tab = `tab${index}`;
  
          return (
            <li className={`${styles.tab} ${isActive ? styles[`tab--active`] : ''}`} role="presentation">
              <a
                onClick={e => handleClick(e, tab)}
                role="tab"
                href={`#${tab}`}
                aria-controls={tab}
                aria-selected={isActive}
                tabIndex={activeTab === tab ? 0 : -1}
              >
                  {item.props.title}
              </a>
            </li>
          )
        })}
      </ul>
      {Children.map(children, (child, index) => {
        const isActive = activeTab === `tab${index}`;
        const tab = `tab${index}`;

        return (
          <div
            id={tab}
            aria-labelledby={tab}
            aria-hidden={!isActive}
            role="tabpanel"
            className={`${styles.tab__content} ${isActive ? styles[`tab__content--active`] : ''}`}
          >
            {child}
          </div>
        )
      })}
    </div>
  );
};