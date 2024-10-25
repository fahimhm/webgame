import PropTypes from 'prop-types';

function ArticleItem({title, subtitle}) {
  return (
    <li className="grid px-5 py-2 border border-yellow-400 grid-cols-[90px_auto]">
      <div className="flex flex-col items-start justify-center pl-3">
        <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        <p className="text-base font-normal">{subtitle}</p>
      </div>
    </li>
  );
};

export default function Article() {
  const projects = [
    {title: 'Project Name 1', subtitle: 'subheadline of project 1'},
    {title: 'Project Name 2', subtitle: 'subheadline of project 2'},
    {title: 'Project Name 3', subtitle: 'subheadline of project 3'},
  ];

  return (
    <div>
      <h2 className="px-16 mb-5 text-4xl font-bold uppercase">thoughts</h2>
      <ul>
        {projects.map((project) => (
          <ArticleItem key={project.title} title={project.title} subtitle={project.subtitle} />
        ))}
      </ul>
    </div>
  );
};

ArticleItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};