import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-800 bg-gray-900">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between p-3 font-medium text-white">
        <Link href="/" className="hover:text-blue-400">New meeting</Link>
        <SignedIn>
          <div className="flex items-center gap-5">
            <Link href="/meetings" className="hover:text-blue-400">Meetings</Link>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}
