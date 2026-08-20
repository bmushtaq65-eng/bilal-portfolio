
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Capabilities from './sections/Capabilities';
import Projects from './sections/Projects';
import AIAutomation from './sections/AIAutomation';
import Skills from './sections/Skills';
import ExperienceEducation from './sections/ExperienceEducation';
import GitHubCTA from './sections/GitHubCTA';
import WhyWorkWithMe from './sections/WhyWorkWithMe';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <AIAutomation />
        <Skills />
        <ExperienceEducation />
        <GitHubCTA />
        <WhyWorkWithMe />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
