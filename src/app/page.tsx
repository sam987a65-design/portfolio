import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import VoiceGreeting from '@/components/ui/VoiceGreeting'
import AIGame from '@/components/ui/AIGame'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <VoiceGreeting />
      <AIGame />
    </>
  )
}
