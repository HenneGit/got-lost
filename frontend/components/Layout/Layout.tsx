import React from 'react';
import Nav from "@/components/Layout/Nav";
import Meta from "@/components/Layout/Meta";
import styles from '../../styles/layout.module.css';
const Layout = ({ children }) => {

    return (
        <>
            <Meta />
            <Nav />
            <div >
                <main className={styles.main}>
                    <div className={styles.container}>
                        {children}
                    </div>
                </main>
            </div>
        </>

    );
};

export default Layout;
