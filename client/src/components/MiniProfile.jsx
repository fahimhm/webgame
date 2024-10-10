import profile from '../assets/profile.jpeg';

export default function MiniProfile() {
  return (
    <div className='relative w-full max-w-[750px] xl:w-[344px] h-[448.188px] lg:h-[540px] xl:h-[640px] antialiased mx-auto rounded-2xl mb-8 py-[30px] px-5 border border-black'>
    <div className='w-full h-full mx-auto rounded-2xl'>
      <div className='w-full h-[46%] rounded-2xl mb-5 overflow-hidden border border-red-600'> {/*bg-gradient-to-t from-primaryAcc to-secondaryAcc border-4 border-primaryAcc*/}
        <img src={profile} alt="myprofile" />
      </div>
      <div className='text-3xl font-bold uppercase border border-black'>Fahim Maula</div>
      <div className='px-2 mt-5 mb-3 mb-8 text-lg antialiased font-medium leading-none border border-blue-700 text-wrap'>A Web Dev who brings your designs and ideas to live.</div>
      <div className='flex items-center justify-around mx-5 border border-red-600'>
        <div className='mx-2 border border-yellow-500'>A</div>
        <div className='mx-2 border border-yellow-500'>B</div>
        <div className='mx-2 border border-yellow-500'>C</div>
        <div className='mx-2 border border-yellow-500'>D</div>
      </div>
    </div>
  </div>
  );
};