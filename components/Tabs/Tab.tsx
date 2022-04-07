import React from 'react'

import styles from './Tabs.module.scss'

export type TabProps = {
  tabId: string;
  title: string;
  activeTab: string; 
  handleClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, tab: string) => void;
};

export const Tab: React.FC<TabProps> = ({ tabId, title, activeTab, handleClick }) => {
  return (
    <li role="presentation">
      <a
        onClick={e => handleClick(e, tabId)}
        role="tab"
        href={`#${tabId}`}
        aria-controls={tabId}
        tabIndex={activeTab === tabId ? 0 : -1}
      >
          {title}{activeTab === tabId ? 'active' : 'not active'}
      </a>
    </li>
  );
};