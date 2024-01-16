import clsx from "clsx";

interface RadioInputProps {
    checked?: boolean;
    onClick?: () => void;
}

export default function RadioInput({ checked, onClick }: RadioInputProps) {

    return (
        <div 
            className={clsx('shrink-0 h-[20px] w-[20px] rounded-[100%] border-[1px] grid place-items-center cursor-pointer', checked ? "border-primary" : "border-[#D9D9D9]")}
            onClick={onClick}
        >
            <div className={clsx("w-[10px] h-[10px] rounded-[100%] overflow-hidden bg-[#D9D9D9]")}>
                <div className={clsx("w-full h-full bg-primary transition-all", checked ? "scale-1" : "scale-0")}>

                </div>
            </div>
        </div>
    )
}