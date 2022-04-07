import React, { useState, Children } from 'react'

import styles from './Tabs.module.scss'
import { Tab } from './Tab'

export type TabsProps = {
  tabs: {title: string}[];
};

export const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState('tab0')

  const selectTab = (tab: string) => {
    setActiveTab(tab);
  } 

  const handleClick = (e: any, tab: string) => {
    e.preventDefault();
    selectTab(tab);
  };

  return (
    <div>
      <ul role="presentation">
        {tabs.map((tab, index) => (
          <Tab
            handleClick={e => handleClick(e, `tab${index}`)}
            tabId={`tab${index}`}
            title={tab.title}
            activeTab={activeTab}
            key={`tab${index}`}
          />
        ))}
      </ul>
      {Children.map(children, (child, index) => {
        return (
          <div id={`tab${index}`} aria-labelledby={`tab${index}`} role="tabpanel">
            {child} {activeTab === `tab${index}` ? 'active' : 'not active'}
          </div>
        )
      })}
    </div>
  );
};