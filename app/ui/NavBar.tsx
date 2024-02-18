import Link from "next/link";
import Logo from "@/app/ui/Logo";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-10 flex h-16 flex-row items-center justify-between bg-red-600 px-20 text-lg font-semibold text-white">
      <Link href="/">
        <Logo />
      </Link>
      <Link
        className="red_button rounded-lg px-3 py-1 underline duration-75 hover:bg-white hover:text-red-600"
        href="/profile"
      >
        Profile
      </Link>
    </div>
  );
}
