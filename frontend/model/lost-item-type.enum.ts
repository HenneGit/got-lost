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




export interface LostItem {
    type?: LostItemTypeEnum;
    location?: string;
    date?: Date;
    fields?: LostItemInquiry;

}

export interface LostItemInquiry {
    material?: string;
    manufacturer?: string;
    color?: string;
}

export interface LostItemWithContent extends LostItemInquiry {
    content?: string;
}

export interface LostClothing extends LostItemInquiry {
    size: string;
}

export interface LostCard extends LostItemInquiry {
    countryOfOrigin?: string;
    serialNumber?: number;
    cardType?: string;
    sex?: string;
    birthDay?: Date;
    city?: string;

}

export interface LostCellPhone extends LostItemInquiry {
    homeScreen?: string;
    case?: string;
    model?: string;
}

export interface LostJewelery extends LostItemInquiry {
    jeweleryType?: string;
}

export interface LostOther extends LostItemInquiry {
    otherDescription?: string;
}

export interface LostCamera extends LostItemInquiry {
    cameraModel?: string;
}

export interface LostKey extends LostItemInquiry {
    numberOfKeys?: number;
    keyFob?: string;
    whichCar?: string;
}







