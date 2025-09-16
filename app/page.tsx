import Starfield from "@/components/Starfield"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/ProjectCard"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center text-white overflow-hidden">
      {/* 星空背景 */}
      <Starfield />

      {/* 头像 + 自我介绍 */}
      <div className="relative z-10 flex flex-col items-center mt-10">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
          <Image
            src="/avatar.jpg"  // 把头像放在 public/avatar.jpg
            alt="Yifan Yao"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h2 className="mt-6 text-2xl font-semibold">Hi, I’m <span className="text-blue-400">Yifan Yao</span> 👋</h2>
        <p className="mt-2 text-center text-white/70 max-w-xl">
          A math-minded game engineer passionate about building scalable systems, immersive mechanics, 
          and turning complex ideas into playable experiences.
        </p>
      </div>

      {/* slogan */}
      <h1 className="mt-12 text-4xl md:text-6xl font-bold text-center relative z-10">
        Math-minded game engineer{" "}
        <span className="text-blue-400">crafting the future</span>
      </h1>

      <p className="mt-6 text-lg text-gray-400 relative z-10 text-center">
        From combat state machines to tunable economy models — turning ideas into playable, scalable experiences.
      </p>

      {/* 按钮区 */}
      <div className="mt-8 flex gap-4 relative z-10">
        <Button asChild size="lg" className="shadow-md shadow-cyan-500/30">
<a href="./resume.pdf" download>Download Resume</a>

        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href="#projects">View Projects</a>
        </Button>
      </div>

      {/* 技能标签 */}
      <div className="mt-10 flex flex-wrap gap-3 justify-center relative z-10">
        {["Unity", "C#", "TypeScript", "SQL", "Machine Learning", "Systems Design", "Numerical Analyse"].map((skill) => (
          <span key={skill} className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm">
            {skill}
          </span>
        ))}
      </div>

      {/* 项目展示 */}
      <section id="projects" className="mt-20 container mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Online MMORPG Demo"
            subtitle="Client-server architecture"
            tags={["Unity", "C#", "MMORPG", "3D"]}
            video="/NetGame.mp4"
          />
          <ProjectCard
            title="Tricker Trigger — Turn-based JRPG"
            subtitle="Combat flow, AP/Tension, Animator state machines, team combos."
            tags={["Unity", "C#", "JRPG", "3D"]}
            video="/tricker-trigger.mp4"
          />
          <ProjectCard
            title="3DRPG Demo"
            subtitle="UI/UX, Environmental Building, Attacking System, NPC Interface"
            tags={["Unity","C#", "3D"]}
            video="/rpg.mp4"
          />
          <ProjectCard
            title="2D Farming Game Demo"
            subtitle="UI/UX, Environmental Building,Inventory System"
            tags={["Unity", "C#", "2D"]}
            video="/farming.mp4"
          />
        </div>
      </section>
    </main>
  )
}

