import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="w-full grid place-items-center h-screen relative">
      <Image
        src="/themes/mystical.webp"
        fill
        className="object-cover"
        alt="banner"
      />
      <h2
        className="text-6xl font-black flex items-center justify-center z-50 text-pink-500 bg-white/20 rounded-lg p-2
      "
      >
        Ambicious
      </h2>
      <SignIn />;
    </section>
  );
}
