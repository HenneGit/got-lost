import localFont from "next/font/local";
import LanguageSwitcher from "@/components/LangugageSwitcher";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Start from "@/components/Start/Start";
import {GetStaticPropsContext} from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
     <Start/>
    </div>
  );
}
export async function getStaticProps({ locale }: GetStaticPropsContext ) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])), // Adjust based on your translation namespaces
    },
  };
}