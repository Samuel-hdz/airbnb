import React from "react";

interface CustomButtonProps {
    label: String;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
    return(
        <div
        onClick={onClick} 
        className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-center rounded-xl text-white transition cursor-pointer ${className}`}>
            {label}
        </div>
    )
}

export default CustomButton;