export enum LostItemTypeEnum {
    BAG = "bag",
    WALLET = "wallet",
    KEY = "key",
    PHONE = "phone",
    CAMERA = "camera",
    CLOTHES = "clothes",
    JEWELERY = "jewelery",
    CARD = "card",
    OTHER = "other",
}


const lostItemTypeMapping: Record<LostItemTypeEnum, any> = {
    [LostItemTypeEnum.BAG]: {} as LostItemWithContent,
    [LostItemTypeEnum.CLOTHES]: {} as LostClothing,
    [LostItemTypeEnum.CARD]: {} as LostCard,
    [LostItemTypeEnum.PHONE]: {} as LostCellPhone,
    [LostItemTypeEnum.JEWELERY]: {} as LostJewelery,
    [LostItemTypeEnum.OTHER]: {} as LostOther,
    [LostItemTypeEnum.CAMERA]: {} as LostCamera,
    [LostItemTypeEnum.KEY]: {} as LostKey,
    [LostItemTypeEnum.WALLET]: {} as LostItemWithContent,
};


export interface LostItem {
    type?: LostItemTypeEnum;
    location?: string;
    date?: Date;
    fields?: LostItemInquiry;

}

export interface LostItemInquiry {
    material: string;
    manufacturer: string;
    color: string;
}

export interface LostItemWithContent extends LostItemInquiry {
    content: string[];
}

export interface LostClothing extends LostItemInquiry {
    size: string;
}

export interface LostCard extends LostItemInquiry {
    countOfOrigin: string;
    serialNumber: number;
    type: string;
}

export interface LostCellPhone extends LostItemInquiry {
    homeScreen: string;
    case: string;
    model: string;
}

export interface LostJewelery extends LostItemInquiry {
    type: string;
}

export interface LostOther extends LostItemInquiry {
    description: string;
}

export interface LostCamera extends LostItemInquiry {
    serialNumber: string;
}

export interface LostKey extends LostItemInquiry {
    numberOfKeys: number;
    keyFob?: string;
    whichCar?: string;
}

export function createUndefinedObject<T extends LostItemInquiry>(): { [K in keyof T]: undefined } {

    return Object.create(null) as { [K in keyof T]: undefined };
}







