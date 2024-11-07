import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {Button} from "@/components/ui/button";

export default function LanguageSwitcher() {
    const {t, i18n} = useTranslation();
    const router = useRouter();
    const switchLanguage = (locale: string) => {
        router.push(router.pathname, router.asPath, {locale});
    };

    return (
        <div className="flex gap-2">
            <Button
                onClick={() => switchLanguage('en')}
            >
                English
            </Button>
            <Button
                onClick={() => switchLanguage('de')}
            >
                Deutsch
            </Button>
            <div>{t('welcome')}</div>
        </div>
    );
}