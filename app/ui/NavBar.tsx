import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between px-40">
      <Link href="/">
        <Image
          className="object-cover"
          src="/logo.png"
          alt="logo"
          width={200}
          height={100}
        />
      </Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
}
