import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full flex">
      <div className="h-full w-full flex flex-col gap-20 items-center justify-center relative">
        <h1 className="font-monsterrat text-8xl font-bold tracking-wider">FAMOUS</h1>

        <input type="text" className="bg-background border rounded-xl h-12"/>
      </div>
    </main>
  );
}
