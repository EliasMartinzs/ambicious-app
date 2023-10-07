"use client";
import { SignOutButton, SignedOut, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Users() {
  const { user } = useUser();
  const router = useRouter();

  const userInfo = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    fullName: user?.fullName || "",
    image: user?.imageUrl || "",
  };

  return (
    <div className="w-full flex-start mt-5">
      <Image
        src={userInfo.image}
        width={70}
        height={70}
        alt={userInfo.fullName}
        className="object-contain rounded-full"
      />
      <div className="ml-5">
        <h4 className="text-lg capitalize">{userInfo.fullName}</h4>
        <SignOutButton signOutCallback={() => router.push("/")}>
          Sair
        </SignOutButton>
      </div>
    </div>
  );
}
