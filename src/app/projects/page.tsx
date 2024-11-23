import Header from '@/components/Header';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Projects />
      </main>
    </div>
  );
}
