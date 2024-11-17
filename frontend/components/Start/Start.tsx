import React, {useState} from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {useTranslation} from "next-i18next";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ButtonWithIcon from "@/components/Shared/ButtonWithIcon";
import {DatePicker} from "@/components/Shared/DatePicker";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {createUndefinedObject, LostItem, LostItemTypeEnum, LostItemInquiry} from "@/model/lost-item-type.enum";
import LostItemInputs from "@/components/Start/LostItemInputs/LostItemInputs";

const Start = () => {

    const {t} = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);
    const [lostItem, setLostItem] = useState<LostItem>({location: undefined, date: undefined, fields: undefined, type: undefined});

    const buttons = Object.values(LostItemTypeEnum);
    const handleNext = (stepNo: number) => {
        setCurrentStep(stepNo);
    };

    const onItemCategoryClick = (itemCategory: LostItemTypeEnum) => {
        setCurrentStep((prevCount) => prevCount + 1);
        setLostItem(createUndefinedObject<>)
    }
    const setLocation = (date: string) => {
        setLostItem((prevItem) => ({
            ...prevItem,
            location: date
        }));
    }

    const setDate = (date: Date | undefined) => {
        setLostItem((prevItem) => ({
            ...prevItem,
            date: date
        }));
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
                            {buttons.map((lostItemType, index) => (
                                <ButtonWithIcon key={index} icon={lostItemType}
                                                onClick={() => onItemCategoryClick(lostItemType)}/>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className={'flex justify-end'}>

                    </CardFooter>
                </Card>
            }
            {currentStep === 3 &&
                <Card>
                    <CardHeader>
                        <CardTitle>{t('whereAndWhen')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={'flex flex-col items-center justify-center gap-5'}>
                            <div>
                                <h1>{t('when')}</h1>
                                <DatePicker onDateChange={setDate}/>
                            </div>
                            <div>
                                <h1>{t('where')}</h1>
                                <Select onValueChange={setLocation}>
                                    <SelectTrigger className="w-[280px]">
                                        <SelectValue placeholder={t('pickAPlace')}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Club</SelectLabel>
                                            <SelectItem value="RSO">RSO</SelectItem>
                                            <SelectItem value="menschMeier">Mensch Meier</SelectItem>
                                        </SelectGroup>
                                        <SelectGroup>
                                            <SelectLabel>Festival</SelectLabel>
                                            <SelectItem value="mc">Mystic Creatures</SelectItem>
                                            <SelectItem value="banana">Bucht der Träumer</SelectItem>
                                            <SelectItem value="pineapple">Garbic</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className={'flex justify-end'}>
                        <div onClick={() => handleNext(4)}
                             className="flex justify-center items-center w-10 h-10 border-2 border-lightgray rounded-full hover:border-black transition-colors">
                            <ArrowForwardIcon
                                className={"text-gray-400 hover:text-gray-900 cursor-pointer rounded-t-3xl"}/>
                        </div>
                    </CardFooter>
                </Card>
            }
            {currentStep === 4 &&
                <Card>
                    <CardHeader>
                        <CardTitle>{t('whereAndWhen')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <LostItemInputs lostItem={lostItem}/>
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
        </div>
    );
};

export default Start;
