import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <a
        className="text-poly-red font-black text-4xl"
        onClick={() => window.scrollTo(0, 0)}
      >
        P<span className="text-poly-red/50">.</span>
      </a>
    </Link>
  );
};
