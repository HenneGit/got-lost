import {
    LostCamera,
    LostCard,
    LostCellPhone,
    LostClothing, LostItem, LostItemInquiry,
    LostItemTypeEnum,
    LostItemWithContent, LostJewelery, LostKey, LostOther
} from "@/model/lost-item-type.enum";


const emptyLostItemInquiry = {
    material: undefined,
    manufacturer: undefined,
    color: undefined
} as LostItemInquiry;

const lostItemTypeMapping: Record<LostItemTypeEnum, any> = {
    [LostItemTypeEnum.BAG]: {...emptyLostItemInquiry, content: undefined} as LostItemWithContent,
    [LostItemTypeEnum.CLOTHES]: {...emptyLostItemInquiry, size: ""} as LostClothing,
    [LostItemTypeEnum.CARD]: {...emptyLostItemInquiry, countOfOrigin: undefined, serialNumber: undefined, type: undefined} as LostCard,
    [LostItemTypeEnum.PHONE]: {...emptyLostItemInquiry, homeScreen: undefined, case: undefined, model: undefined} as LostCellPhone,
    [LostItemTypeEnum.JEWELERY]: {...emptyLostItemInquiry, type: undefined} as LostJewelery,
    [LostItemTypeEnum.OTHER]: {...emptyLostItemInquiry, description: undefined} as LostOther,
    [LostItemTypeEnum.CAMERA]: {...emptyLostItemInquiry, serialNumber: undefined} as LostCamera,
    [LostItemTypeEnum.KEY]: {...emptyLostItemInquiry, numberOfKeys: undefined, keyFob: undefined, whichCar: undefined} as LostKey,
    [LostItemTypeEnum.WALLET]: {...emptyLostItemInquiry, content: undefined} as LostItemWithContent,
};


export function createUndefinedObject(item: LostItem): Partial<LostItem> {
    console.log(item);
    if (item.type) {
        const specificObject = lostItemTypeMapping[item.type];
        console.log(specificObject);
        return {
            ...item,
            fields: specificObject,
        };
    }
    //error
    return {
        type: item.type,
        fields: undefined,
    };
}
