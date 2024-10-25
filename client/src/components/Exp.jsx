import PropTypes from 'prop-types';

function ExpItem({title, main, sub}) {
  return (
    <li className='flex flex-col items-start px-2 py-4'>
      <h3 className='mb-5 text-lg font-semibold'>{title}</h3>
      <p className='mb-5 text-base font-normal text-left'>{main}</p>
      <p className='mb-4 text-base font-normal text-left'>{sub}</p>
    </li>
  );
};

export default function Exp() {
  const exps = [
    {title: 'Grab', main: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum est laudantium ex quos laborum molestiae unde assumenda atque reiciendis deleniti!', sub: 'Jan 2022 - Present'},
    {title: 'Shopee International', main: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis debitis in necessitatibus placeat magni consequuntur magnam ratione delectus dolorum?', sub: 'Nov 2019 - Dec 2021'},
  ];

  return (
    <div>
      <h2 className="px-12 mb-5 text-4xl font-bold uppercase">5 years of experience</h2>
      <ul>
        {exps.map((exp) => (
          <ExpItem key={exp.title} title={exp.title} main={exp.main} sub={exp.sub} />
        ))}
      </ul>
    </div>
  );
};

ExpItem.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
};