import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full flex">
      <div className="h-full w-full flex flex-col items-center justify-center relative gap-8">
        <h1 className="font-monsterrat text-8xl font-bold tracking-wider">FAMOUS</h1>
          <input type="text" className="bg-background border border-foreground/20 rounded-full h-12 w-[35%] px-5"/>
          <Button className="" type="submit">Search</Button>
          <Button className="" type="submit">Feeling Blessed</Button>

      </div>
    </main>
  );
}
