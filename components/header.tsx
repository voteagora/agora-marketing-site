import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="mb-12">
      <Link href="/">
        <div className="flex gap-2 items-center">
          <Image
            src="https://vote.optimism.io/static/media/logo.7b1572b4e59227c8b584411dc5557599.svg"
            width={16}
            height={16}
            alt="Agora logo"
          />
          <div className="text-stone-900 font-serif text-lg">Agora <span className="opacity-20 hover:opacity-100 transition-all hidden md:inline">, the onchain governance company</span></div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
