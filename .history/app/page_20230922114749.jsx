import { Button } from "@/components/ui/button";
import { MagicWandIcon, MagnifyingGlassIcon, StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full flex">
      <div className="absolute z-[-5] w-screen h-screen p-3">
        <div className="absolute w-[22%] h-[32%] rounded-full bg-violet-500/20 blur-3xl -left-4 -top-4">

        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center relative gap-8">
        <h1 className="font-monsterrat lg:text-7xl font-bold tracking-wider text-7xl">Gugulu</h1>
          <input type="text" className="bg-background border border-foreground/20 rounded-full h-12 w-[80%] md:w-[60%] lg:w-[35%] px-5" value={'Who is my bestie?'}/>
          <div className="flex gap-7">
          <Button className="rounded-[5px] flex gap-2" type="submit">
              <MagnifyingGlassIcon className="w-4 h-4 text-violet-700"/>
              Search
            </Button>
            <Button className="rounded-[5px] flex gap-2 hover:bg-gradient-to-tr hover:from-violet-500 hover:to-indigo-500 group hover:text-white transition-none" type="submit">
              <MagicWandIcon className="w-4 h-4 text-violet-700 group-hover:text-white"/>
              Feeling Blessed
            </Button>
          </div>

          <div className="absolute bottom-8 items-center flex gap-2 px-3">
            <StarFilledIcon className="text-violet-500"/>
            <p className="text-sm opacity-70">You are doing amazing! and you have people behind you to push you further</p>
          </div>

      </div>
    </main>
  );
}
