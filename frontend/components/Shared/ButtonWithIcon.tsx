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
import {LostItemEnum} from "@/model/lost-item.enum";

interface ButtonWithIconProps {
    icon: LostItemEnum;
    onClick?: () => void;
}


const IconRecord: Record<LostItemEnum, React.ReactElement> = {
    [LostItemEnum.WALLET]: <WalletOutlinedIcon/>,
    [LostItemEnum.BAG]: <ShoppingBagOutlinedIcon/>,
    [LostItemEnum.KEY]: <VpnKeyOutlinedIcon/>,
    [LostItemEnum.CAMERA]: <CameraAltOutlinedIcon/>,
    [LostItemEnum.PHONE]: <PhoneAndroidOutlinedIcon/>,
    [LostItemEnum.CLOTHES]: <CheckroomOutlinedIcon/>,
    [LostItemEnum.JEWELERY]: <DiamondOutlinedIcon/>,
    [LostItemEnum.CARD]: <CreditCardOutlinedIcon/>,
    [LostItemEnum.OTHER]: <HelpOutlineOutlinedIcon/>,
};



const MyComponent = ({icon, onClick}: ButtonWithIconProps) => {
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

export default MyComponent;
