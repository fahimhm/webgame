import Dock from '../components/Dock';
import MiniProfile from '../components/MiniProfile';
import ContactMeForm from '../components/ContactMeForm';


export default function Home() {
  return (
    <div>
      {/* Top section for contact me button and other feature in the future */}
      <div className='relative w-full h-16 mb-3 border border-black'>
        {/* <ContactMeButton className='absolute right-0' onClick={() => alert('Clicked')} /> */}
      </div>

      <div className='relative'>
        <MiniProfile />

        <h1 className='text-[52px] font-bold uppercase leading-none'>
          Fullstack developer
        </h1>
        <h2 className='mt-3 leading-1'>
          Passionate about building solutions with my coding and full-stack skills. Transforming designs and ideas into high-quality, user-friendly and responsive web applications.
        </h2>
        
        <div className='relative flex flex-wrap justify-center w-full mt-16 border border-black'>
          <div className='w-20 mx-6 my-2 border border-blue-800 h-28'></div>
          <div className='w-20 mx-6 my-2 border border-blue-800 h-28'></div>
          <div className='w-20 mx-6 my-2 border border-blue-800 h-28'></div>
        </div>
      </div>

      <div className='relative my-10 border border-black'>
        <div className='border border-red-600 max-w-[350px] h-[240px] mb-5'></div>
        <div className='border border-red-600 max-w-[350px] h-[240px] mb-5'></div>
      </div>
      
      <div className='relative mt-12'>
        <h2 className='text-5xl font-bold leading-none uppercase'>
          recent projects
        </h2>
        <div className='flex flex-wrap justify-center w-full mt-5 border border-black'>
          <div className='w-full my-2 border border-blue-800 h-28'></div>
          <div className='w-full my-2 border border-blue-800 h-28'></div>
          <div className='w-full my-2 border border-blue-800 h-28'></div>
        </div>
      </div>

      <div className='relative mt-12'>
        <h2 className='text-[42px] font-bold leading-none uppercase'>
          10 years of experience
        </h2>
        <div className='flex flex-wrap justify-center w-full mt-5 border border-black'>
          <div className='w-full my-2 border border-blue-800 h-28'></div>
          <div className='w-full my-2 border border-blue-800 h-28'></div>
          <div className='w-full my-2 border border-blue-800 h-28'></div>
        </div>
      </div>

      <div className='relative mt-12'>
        <h2 className='text-[42px] font-bold leading-none uppercase'>
          developer thoughts
        </h2>
        <div className='flex flex-wrap justify-center w-full mt-5 border border-black'>
          <div className='w-full my-2 border border-blue-800 h-28'></div>
          <div className='w-full my-2 border border-blue-800 h-28'></div>
          <div className='w-full my-2 border border-blue-800 h-28'></div>
        </div>
      </div>

      <div className='relative mt-12'>
        <h2 className='text-[42px] font-bold leading-none uppercase'>
          let&apos;s work together
        </h2>

        <ContactMeForm />
      </div>

      <div className='lg:relative lg:w-full lg:h-32 lg:mt-10'></div>
      <div className="fixed bottom-0 hidden pb-10 mx-auto transform -translate-x-1/2 lg:block left-1/2"> {/* only shows on Desktop */}
        <Dock />
      </div>
    </div>
  );
}

