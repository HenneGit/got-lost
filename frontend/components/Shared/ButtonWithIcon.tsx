import React from 'react';
import {Button} from "@/components/ui/button";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import {useTranslation} from "next-i18next";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import {LostItemTypeEnum} from "@/model/lost-item-type.enum";

interface ButtonWithIconProps {
    icon: LostItemTypeEnum;
    onClick?: () => void;
}


const IconRecord: Record<LostItemTypeEnum, React.ReactElement> = {
    [LostItemTypeEnum.WALLET]: <WalletOutlinedIcon/>,
    [LostItemTypeEnum.BAG]: <ShoppingBagOutlinedIcon/>,
    [LostItemTypeEnum.KEY]: <VpnKeyOutlinedIcon/>,
    [LostItemTypeEnum.CAMERA]: <CameraAltOutlinedIcon/>,
    [LostItemTypeEnum.PHONE]: <PhoneAndroidOutlinedIcon/>,
    [LostItemTypeEnum.CLOTHES]: <CheckroomOutlinedIcon/>,
    [LostItemTypeEnum.JEWELERY]: <DiamondOutlinedIcon/>,
    [LostItemTypeEnum.CARD]: <CreditCardOutlinedIcon/>,
    [LostItemTypeEnum.OTHER]: <HelpOutlineOutlinedIcon/>,
};



const ButtonWithIcon = ({icon, onClick}: ButtonWithIconProps) => {
    const {t} = useTranslation();
    const SvgIcon = IconRecord[icon] || <div>:-)</div>;
    return (
        <div>
            <Button onClick={onClick}>
                {SvgIcon}
                {t(icon)}
            </Button>
        </div>
    );
};

export default ButtonWithIcon;
