import React, {useState} from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {useTranslation} from "next-i18next";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Button} from "@/components/ui/button"
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Start = () => {

    const {t} = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = (stepNo: number) => {
        setCurrentStep(stepNo);
    };

    const nextCard = () => {

    }

    return (
        <div>
            {currentStep === 1 &&
                <Card>
                    <CardHeader>
                        <CardTitle>{t('welcome')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{t('welcomeText')}</p>
                    </CardContent>
                    <CardFooter className={'flex justify-end'}>
                        <div onClick={() => handleNext(2)}
                             className="flex justify-center items-center w-10 h-10 border-2 border-lightgray rounded-full hover:border-black transition-colors">
                            <ArrowForwardIcon
                                className={"text-gray-400 hover:text-gray-900 cursor-pointer rounded-t-3xl"}/>
                        </div>
                    </CardFooter>
                </Card>
            }
            {currentStep === 2 &&
                <Card>
                    <CardHeader>
                        <CardTitle>{t('lostItem')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={'flex flex-wrap gap-4'}>
                            <Button>
                                <ShoppingBagOutlinedIcon/>
                                {t('bag')}</Button>
                            <Button>
                                <WalletOutlinedIcon/>
                                {t('wallet')}</Button>
                            <Button>
                                <VpnKeyOutlinedIcon/>
                                {t('key')}</Button>
                            <Button>
                                <CameraAltOutlinedIcon/>
                                {t('camera')}</Button>
                            <Button>
                                <PhoneAndroidOutlinedIcon/>
                                {t('phone')}</Button>
                            <Button>
                                <CheckroomOutlinedIcon/>
                                {t('clothes')}</Button>
                            <Button>
                                <DiamondOutlinedIcon/>
                                {t('jewelery')}</Button>
                            <Button>
                                <CreditCardOutlinedIcon/>
                                {t('card')}</Button>
                            <Button>
                                <HelpOutlineOutlinedIcon/>
                                {t('other')}</Button>
                        </div>
                    </CardContent>
                    <CardFooter className={'flex justify-end'}>
                        <div onClick={() => handleNext(3)}
                             className="flex justify-center items-center w-10 h-10 border-2 border-lightgray rounded-full hover:border-black transition-colors">
                            <ArrowForwardIcon
                                className={"text-gray-400 hover:text-gray-900 cursor-pointer rounded-t-3xl"}/>
                        </div>
                    </CardFooter>
                </Card>
            }
            {currentStep === 3 &&
                <Card>
                    <CardHeader>
                        <CardTitle>3 Karte</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{t('welcomeText')}</p>
                    </CardContent>
                    <CardFooter className={'flex justify-end'}>
                        <div onClick={() => handleNext(1)}
                             className="flex justify-center items-center w-10 h-10 border-2 border-lightgray rounded-full hover:border-black transition-colors">
                            <ArrowForwardIcon
                                className={"text-gray-400 hover:text-gray-900 cursor-pointer rounded-t-3xl"}/>
                        </div>
                    </CardFooter>
                </Card>
            }

        </div>
    );
};

export default Start;
