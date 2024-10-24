import Dock from '../components/Dock';
import MiniProfile from '../components/MiniProfile';
import ContactMeForm from '../components/ContactMeForm';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='grid grid-cols-1 px-5 border border-black grid-rows-[100px_repeat(6,_auto)_100px]'>
      <div className='h-[100px] flex items-center justify-center'>
        <Navbar />
      </div>
      <div id='home'>
        <MiniProfile />
      </div>
      <div>Title</div>
      <div id='project'>Projects</div>
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