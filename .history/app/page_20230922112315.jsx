import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full flex">
      <div className="h-full w-full flex flex-col items-center justify-center relative gap-8">
        <h1 className="font-monsterrat text-8xl font-bold tracking-wider">FAMOUS</h1>

        <form className="relative w-full flex items-center justify-center" action="">
          <input type="text" className="bg-background border border-foreground rounded-full h-12 w-[40%]"/>
        </form>
      </div>
    </main>
  );
}
