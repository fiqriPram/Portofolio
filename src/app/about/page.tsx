import About from '@/components/About';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <About />
      </main>
    </div>
  );
}
