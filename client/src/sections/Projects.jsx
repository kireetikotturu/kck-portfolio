import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects as staticProjects } from '../data/portfolioData';
import { fetchProjects } from '../utils/api';

export default function Projects() {
  const [projects, setProjects] = useState(staticProjects);

  useEffect(() => {
    let active = true;
    fetchProjects()
      .then((data) => {
        if (active && Array.isArray(data) && data.length > 0) setProjects(data);
      })
      .catch(() => {
        // Backend not running / unreachable — static data already shown, no-op.
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="projects" className="section">
      <SectionHeading index="03" eyebrow="Selected work" title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id || project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
