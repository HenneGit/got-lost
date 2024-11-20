import "@/styles/globals.css";

import {appWithTranslation} from 'next-i18next'
import Layout from "@/components/Layout/Layout";
import {AppProps} from "next/app";

const MyApp = ({Component, pageProps} :AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
)

export default appWithTranslation(MyApp)