import clsx from "clsx";

interface SwitchToggleProps {
    isOn?: boolean;
    onClick?: () => void;
}

export default function SwitchToggle({isOn, onClick}: SwitchToggleProps) {

    return (
        <div 
            onClick={onClick} 
            className={clsx("rounded-[36px] h-[24px] w-[50px] p-[2.9px]", isOn ? "bg-primary" : "bg-[#2A4C2399]")}
        >
            <div className={clsx("w-[18.15px] h-[18.15px] rounded-[100%] bg-white transition", isOn ? "translate-x-[142%]" : "translate-x-0")}></div>
        </div>
    )
}