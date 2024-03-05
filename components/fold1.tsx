import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Fold1() {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-40">
      <Image src="/1.png" width={350} height={350} />
      <h1 className="text-4xl font-bold my-4">React Native UStyle</h1>
      <p className="text-center text-lg text-muted-foreground max-w-md mb-8">
        A seamless drop-in replacement for React Native that supercharges your
        development experience.
      </p>
      <div className="flex gap-3">
        <Link href="/docs/installation" prefetch passHref>
          <Button>Get Started</Button>
        </Link>
        <Button variant="ghost">Give a Star ⭐️</Button>
      </div>
    </div>
  );
}
