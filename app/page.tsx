import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { NavBar } from "@/components/ui/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavBar navItems={[]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
