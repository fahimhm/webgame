import { Navbar, MiniProfile, MainTitle, ContactMeForm, Dock, RecentProjects } from '../components';

export default function Home() {
  return (
    <div className='grid grid-cols-1 px-5 border border-black grid-rows-[100px_repeat(6,_auto)_100px]'>
      <div className='h-[100px] flex items-center justify-center'>
        <Navbar />
      </div>
      <div id='home' className='mb-10'>
        <MiniProfile />
      </div>
      <div><MainTitle /></div>
      <div id='project' className='mb-20'><RecentProjects /></div>
      <div id='experience'>Experience</div>
      <div id='article'>Article</div>
      <div id='contact'>
        <ContactMeForm />
      </div>
      <footer className="fixed bottom-0 hidden pb-10 mx-auto transform -translate-x-1/2 lg:block left-1/2">
        <Dock />
      </footer>
    </div>
  );
};