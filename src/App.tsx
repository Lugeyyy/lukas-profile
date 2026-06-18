import "./index.css";

import { Nav } from "./components/Nav";
import { Hero } from "./components/sections/Hero";
import { Bio } from "./components/sections/Bio";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Goals } from "./components/sections/Goals";
import { Contact } from "./components/sections/Contact";
import { DataProvider, useData } from "./context/DataContext";

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c1917]">
      <div className="animate-pulse text-[#78716c] font-mono text-sm">Loading...</div>
    </div>
  );
}

function AppContent() {
  const { loading } = useData();

  if (loading) return <LoadingState />;

  return (
    <div className="min-h-screen bg-[#1c1917]">
      <Nav />
      <Hero />
      <main className="max-w-6xl mx-auto px-6 md:px-12">
        <Bio />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Goals />
      </main>
      <footer className="border-t border-[#44403c]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Contact />
        </div>
      </footer>
    </div>
  );
}

export function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

export default App;
