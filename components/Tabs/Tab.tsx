import React from 'react';

export type TabProps = {
  title: string;
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};
