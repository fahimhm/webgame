import profile from '../assets/profile.jpeg';

export default function MiniProfile() {
  return (
    <div className="border border-black rounded-2xl py-[30px] px-5">
      <div className='border  border-black rounded-2xl w-[260px] h-[210px] mx-auto overflow-hidden mb-6'>
        <img src={profile} alt="myprofile" className='object-top' />
      </div>
      <div className='w-full font-sans'>
        <h1 className='mb-4 text-4xl font-bold px-9'>Fahim Maula</h1>
        <div>
          <p className='mb-4 text-base font-medium'>A web developer and data analyst who will bring you solutions</p>
          <ul className='flex items-center justify-center px-16 space-x-4'>
            <li><div className='w-8 p-[6px] border border-black aspect-square'></div></li>
            <li><div className='w-8 p-[6px] border border-black aspect-square'></div></li>
            <li><div className='w-8 p-[6px] border border-black aspect-square'></div></li>
            <li><div className='w-8 p-[6px] border border-black aspect-square'></div></li>
            <li><div className='w-8 p-[6px] border border-black aspect-square'></div></li>
          </ul>
        </div>
      </div>
    </div>
  );
};