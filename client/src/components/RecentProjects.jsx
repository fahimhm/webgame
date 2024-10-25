import PropTypes from 'prop-types';

function ProjectItem({title, subtitle}) {
  return (
    <li className='px-2 py-5 grid grid-cols-[90px_auto]'>
      <div className='border border-dashed aspect-square'>Img</div>
      <div className='flex flex-col items-start justify-center pl-3'>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </li>
  );
};

export default function RecentProjects() {
  const projects = [
    {title: 'Project 1', subtitle: 'Subtitle Project 1'},
    {title: 'Project 2', subtitle: 'Subtitle Project 2'},
  ];

  return (
    <div>
      <h2 className="px-16 mb-5 text-4xl font-bold uppercase">recent projects</h2>
      <ul>
        {projects.map((project) => (
          <ProjectItem key={project.title} title={project.title} subtitle={project.subtitle} />
        ))}
      </ul>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};