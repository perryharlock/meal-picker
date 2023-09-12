import React from 'react';
import Head from 'next/head';
import Script from 'next/script'

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ShoppingList } from '../ShoppingList/ShoppingList';
import { useStateContext } from '../../context/StateContext';

import styles from './Layout.module.scss';

export const Layout: React.FC = ({ children }) => {
  const { shoppingListVisible, shoppingListLength, toggleShoppingList } = useStateContext();

  return (
    <div className={`${styles.layout} ${shoppingListVisible ? styles['layout--no-scroll'] : ''}`}>
      <Head>
        <title>mealpicker</title>
        <meta name="description" content="Meal picker app" />
        <link rel="icon" href="favicon.ico" />
        
      </Head>
      <Script id="clarity-test-test">
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "itk2uibzew");`}
    </Script>
      <Header shoppingListLength={shoppingListLength} toggleShoppingList={toggleShoppingList} />

      <main className={styles.layout__main}>{children}</main>

      <Footer />

      {shoppingListVisible ? <ShoppingList /> : ''}
    </div>
  );
};
