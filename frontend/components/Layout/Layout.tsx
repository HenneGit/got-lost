import React, {ReactNode} from 'react';
import Nav from "@/components/Layout/Nav";
import Meta from "@/components/Layout/Meta";
import styles from '../../styles/layout.module.css';


type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
