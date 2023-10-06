import { Button } from "@/components/ui/button";
import { MagicWandIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full flex">
      <div className="h-full w-full flex flex-col items-center justify-center relative gap-8">
        <h1 className="font-monsterrat text-8xl font-bold tracking-wider">FAMOUS</h1>
          <input type="text" className="bg-background border border-foreground/20 rounded-full h-12 w-[35%] px-5"/>
          <div className="flex gap-7">
            <Button className=" rounded-[5px]" type="submit">Search</Button>
            <Button className="rounded-[5px]" type="submit">Feeling Blessed</Button>
          </div>

          <div className="absolute bottom-8 flex gap-2">
            <MagicWandIcon />
            <p className=" opacity-70">You are doing amazing! and you have people behind you to push you further</p>
          </div>

      </div>
    </main>
  );
}
