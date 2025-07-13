import { About } from '@/components/home/about';
import { Education } from '@/components/home/education';
import { Experience } from '@/components/home/experience';
import { Projects } from '@/components/home/projects';
import { Divider } from '@/components/reusable/divider';

export default function Home() {
  return (
    <>
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Education />
      <Divider />
      <Projects />
    </>
  );
}
