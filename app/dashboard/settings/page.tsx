import {
  ArrowDropDown,
  CalenderIcon,
  EditIcon,
  NigeriaFlagIcon,
} from "@/components/svgs";
import Image from "next/image";

export default function Settings() {
  return (
    <div className="p-[40px] rounded-[10px] border-[1px] border-[#7F947B] bg-white flex flex-col gap-[40px]">
      <header>
        <h1 className="text-[333436] text-[24px] font-semibold mb-[16px]">
          My Account
        </h1>
        <div className="flex gap-[28px] pb-[16px] border-b-[1px] border-b-[#949494]">
          <div>
            <Image
              src="/images/admin-user-img-1.svg"
              alt="User Profile"
              width={60}
              height={60}
              draggable={false}
            />
            <div className="pt-[5px]">
              <button className="text-[14px] font-semibold text-[#00000066]">
                Edit image
              </button>
            </div>
          </div>
          <div className="my-auto flex gap-[16px] items-center">
            <button className="text-white bg-primary text-[14px] w-[109px] h-[39px] rounded-[10px]">
              Upload New
            </button>
            <button className="text-[#949494] bg-transparent border-[1px] border-[#949494] text-[14px] w-[106px] h-[39px] rounded-[8px]">
              Delete
            </button>
          </div>
        </div>
      </header>
      <PersonalInformation />
      <ContactInformation />
    </div>
  );
}

const PersonalInformation = () => {
  return (
    <div className="p-[16px] rounded-[10px] shadow-[0px_4px_16px_0px_#00000040]">
      <header className="flex items-center justify-between mb-[24px]">
        <h1 className="text-[18px] font-semibold">Personal Information</h1>
        <div className="flex items-center p-[10px] gap-[16px]">
          Edit
          <EditIcon />
        </div>
      </header>
      <form className="grid grid-cols-2 gap-x-[80px] gap-y-[16px]">
        <fieldset>
          <label className="text-[18px] text-[#949494] inline-block mb-[4px]">
            First Name
          </label>
          <input
            className="rounded-[10px] h-[39px] px-[16px] block w-full border-[1px] border-[#949494] text-[14px] text-[#333436]"
            value="Micheal"
            readOnly={true}
          />
        </fieldset>
        <fieldset>
          <label className="text-[18px] text-[#949494] inline-block mb-[4px]">
            Last Name
          </label>
          <input
            className="rounded-[10px] h-[39px] px-[16px] block w-full border-[1px] border-[#949494] text-[14px] text-[#333436]"
            value="Ibaro"
            readOnly={true}
          />
        </fieldset>
        <fieldset>
          <label className="text-[18px] text-[#949494] inline-block mb-[4px]">
            Username
          </label>
          <input
            className="rounded-[10px] h-[39px] px-[16px] block w-full border-[1px] border-[#949494] text-[14px] text-[#333436]"
            value="@michealibaro"
            readOnly={true}
          />
        </fieldset>
        <fieldset>
          <label className="text-[18px] text-[#949494] inline-block mb-[4px]">
            Date of Birth
          </label>
          <div className="rounded-[10px] h-[39px] px-[16px] block w-full border-[1px] border-[#949494] text-[14px] text-[#333436] flex items-center justify-between gap-[10px]">
            <span className="flex-1">9-Sep-1994</span>
            <CalenderIcon />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

const ContactInformation = () => {
  return (
    <div className="p-[16px] rounded-[10px] shadow-[0px_4px_16px_0px_#00000040]">
      <header className="flex items-center justify-between mb-[24px]">
        <h1 className="text-[18px] font-semibold">Contact Information</h1>
        <div className="flex items-center p-[10px] gap-[16px]">
          Edit
          <EditIcon />
        </div>
      </header>
      <form className="grid grid-cols-2 gap-x-[80px] gap-y-[16px]">
        <fieldset>
          <label className="text-[18px] text-[#949494] inline-block mb-[4px]">
            Phone Number
          </label>
          <input
            className="rounded-[10px] h-[39px] px-[16px] block w-full border-[1px] border-[#949494] text-[14px] text-[#333436]"
            value="(+234) 70 2456 6754"
            readOnly={true}
          />
        </fieldset>
        <fieldset>
          <label className="text-[18px] text-[#949494] inline-block mb-[4px]">
            E-Mail Address
          </label>
          <input
            className="rounded-[10px] h-[39px] px-[16px] block w-full border-[1px] border-[#949494] text-[14px] text-[#333436]"
            value="micheal.ibaro@gmail.com"
            readOnly={true}
          />
        </fieldset>
        <fieldset>
          <label className="text-[18px] text-[#949494] inline-block mb-[4px]">
            City
          </label>
          <input
            className="rounded-[10px] h-[39px] px-[16px] block w-full border-[1px] border-[#949494] text-[14px] text-[#333436]"
            value="@michealibaro"
            readOnly={true}
          />
        </fieldset>
        <fieldset>
          <label className="text-[18px] text-[#949494] inline-block mb-[4px]">
            State
          </label>
          <input
            className="rounded-[10px] h-[39px] px-[16px] block w-full border-[1px] border-[#949494] text-[14px] text-[#333436]"
            value="Lagos"
            readOnly={true}
          />
        </fieldset>
        <fieldset>
          <label className="text-[18px] text-[#949494] inline-block mb-[4px]">
            Country
          </label>
          <div className="rounded-[10px] h-[39px] px-[16px] px-[10px] block w-full border-[1px] border-[#949494] text-[14px] text-[#333436] flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <NigeriaFlagIcon />
              <span className="text-[#333436] text-[14px]">NIG</span>
            </div>
            <ArrowDropDown />
          </div>
        </fieldset>
        <fieldset className="row-start-4 col-span-2">
          <label className="text-[18px] text-[#949494] inline-block mb-[4px]">
            Address
          </label>
          <input
            className="rounded-[10px] h-[39px] px-[16px] block w-full border-[1px] border-[#949494] text-[14px] text-[#333436]"
            value="78, Lanre Awolokun Street, Kampala"
            readOnly={true}
          />
        </fieldset>
      </form>
    </div>
  );
};
