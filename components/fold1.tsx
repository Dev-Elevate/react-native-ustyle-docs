import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Fold1() {
  return (
    <div>
      <Link
        href="https://peerlist.io/rayan1810/project/react-native-ustyle"
        passHref
        target="_blank"
      >
        <Image
          className="absolute top-16 left-6 md:left-12"
          src="/peerlist-badge.png"
          width={150}
          height={350}
          alt="Peerlist Badge"
        />
      </Link>
      <div className="w-full mt-20 flex md:flex-row flex-col-reverse  justify-center items-center mb-40">
        <div className="h-80 flex flex-col flex-1 items-center md:items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-bold my-4">
            React Native UStyle
          </h1>
          <p className="text-center md:text-start text-lg text-muted-foreground max-w-md mb-8">
            A seamless drop-in replacement for React Native that supercharges
            your development experience.
          </p>
          <div className="flex gap-3">
            <Link href="/docs/installation" prefetch passHref>
              <Button>Get Started</Button>
            </Link>
            <Link
              href="https://github.com/Dev-Elevate/react-native-ustyle/stargazers"
              target="_blank"
              prefetch
              passHref
            >
              <Button variant="ghost">Give a Star ⭐️</Button>
            </Link>
          </div>
        </div>
        <Image src="/1.png" width={350} height={350} alt="RNU logo" />
      </div>
    </div>
  );
}
