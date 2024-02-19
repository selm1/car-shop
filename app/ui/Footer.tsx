import Link from "next/link";
import Logo from "@/app/ui/Logo";
export default function Footer() {
  return (
    <footer className="mt-auto flex min-h-48 w-full flex-col items-center justify-center gap-5 bg-gray-800 text-left text-lg text-white">
      <Logo />
      <p>All rights reserved</p>
      <Link className="underline" href="/about">
        About
      </Link>
    </footer>
  );
}
