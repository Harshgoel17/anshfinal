import { Button } from "@/components/ui/button";
import { MagicWandIcon, MagnifyingGlassIcon, StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full flex">
      <div className="absolute z-[-5] w-screen h-screen">
        <div className="absolute w-[22%] h-[32%] rounded-full bg-violet-500/20 blur-3xl -left-4 -top-4">

        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center relative gap-8">
        <h1 className="font-monsterrat text-8xl font-bold tracking-wider">FAMOUS</h1>
          <input type="text" className="bg-background border border-foreground/20 rounded-full h-12 w-[35%] px-5" value={'Who is my bestie?'}/>
          <div className="flex gap-7">
          <Button className="rounded-[5px] flex gap-2" type="submit">
              <MagnifyingGlassIcon className="w-4 h-4 text-violet-700"/>
              Search
            </Button>
            <Button className="rounded-[5px] flex gap-2" type="submit">
              <MagicWandIcon className="w-4 h-4 text-violet-700"/>
              Feeling Blessed
            </Button>
          </div>

          <div className="absolute bottom-8 items-center flex gap-2">
            <StarFilledIcon className="text-violet-500"/>
            <p className=" opacity-70">You are doing amazing! and you have people behind you to push you further</p>
          </div>

      </div>
    </main>
  );
}
