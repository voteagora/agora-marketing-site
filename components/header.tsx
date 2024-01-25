import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="">
      <Link href="/">
        <div className="flex gap-1 items-center">
          <img src="../assets/agora-logo.svg" className="h-5 w-5" />
          <div className="text-stone-900 font-serif text-lg">
            Agora{" "}
            <span className="opacity-20 hover:opacity-100 transition-all hidden md:inline">
              , the onchain governance company
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
