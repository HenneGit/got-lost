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

interface ButtonWithIconProps {
    icon: string;
    onClick?: () => null;
}

type IconMap = {
    [key: string]: React.ReactElement;
}

const iconsMap: IconMap = {
    "wallet": <WalletOutlinedIcon/>,
    "bag": <ShoppingBagOutlinedIcon/>,
    "key": <VpnKeyOutlinedIcon/>,
    "camera": <CameraAltOutlinedIcon/>,
    "phone": <PhoneAndroidOutlinedIcon/>,
    "clothes": <CheckroomOutlinedIcon/>,
    "jewelery": <DiamondOutlinedIcon/>,
    "card": <CreditCardOutlinedIcon/>,
    "other": <HelpOutlineOutlinedIcon/>,
}


const MyComponent = ({icon, onClick}: ButtonWithIconProps) => {
    const {t} = useTranslation();
    const SvgIcon = iconsMap[icon] || <div>:-)</div>;
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