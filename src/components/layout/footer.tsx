import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-footer-background font-inter text-[10px] lg:text-xs text-text-muted flex items-center justify-around lg:justify-normal gap-0 lg:gap-2 h-auto lg:h-14 px-8 py-3.5 lg:px-36">
      <p className="hidden lg:block">Sandro Luz Tattoo Shop</p>
      <div className="hidden lg:block w-1.5 h-1.5 bg-brand-color rounded-full border border-black" />
      <p className="hidden lg:block">Rua Limoeiro, 1000 - Catalão - SP</p>
      <div className="lg:hidden">
        <p>Sandro Luz Tattoo Shop</p>
        <p>Rua Limoeiro, 1000 - Catalão - SP</p>
      </div>
      <div className="w-1.5 h-1.5 bg-brand-color rounded-full border border-black" />
      <p className="flex items-center gap-1">
        <FaWhatsapp /> (+55 11) 99999 9999
      </p>
    </footer>
  );
}
