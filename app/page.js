import { Hero } from "@/Components/Hero";
import NewSection from "@/Components/NewSection";

export default function Home() {
  return (
      <div className="flex-col">
          <Hero />
          <NewSection />
      </div>
  );
}
