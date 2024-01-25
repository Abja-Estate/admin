import Image from "next/image";

export default function AdminDashboardFooter() {
  return (
    <footer className="px-[20px] border-t-[2px] border-t-white py-[7px] grid place-items-center">
      <Image
        src="/images/abj-logo.svg"
        alt="Abj logo"
        width={28}
        height={40}
        draggable={false}
      />
      <p className="text-[11px] text-[#3A3A3A] text-center pt-[2px]">
        &copy; 2023 Abja Property Management
      </p>
    </footer>
  );
}
