import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function ContactMeForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });

  const handleForm = async (e) => {
    e.preventDefault();
    const { name, email, budget, message } = data;
    try {
      const response = await axios.post('/contact', { name, email, budget, message });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({});
        toast.success('Your message has been sent successfully!');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleForm} method='post' className='mt-5 border border-black'>
      <div className='flex space-x-4'>
        <label htmlFor='name' className='flex-grow block text-left'>
          Name
        <input type='text' name='name' value={data.name} onChange={(e) => setData({...data, name: e.target.value })} required placeholder='Your Name' className='outline-black w-full rounded-md py-2.5 px-4 border text-sm' />
        </label>

        <label htmlFor='email' className='flex-grow block text-left'>
          Email
        <input type='email' name='email' value={data.email} onChange={(e) => setData({...data, email: e.target.value })} required placeholder='your@email.com' className='outline-black w-full rounded-md py-2.5 px-4 border text-sm' />
        </label>
      </div>

      <div className='flex mt-4'>
        <label htmlFor='budget' className='flex-grow block text-left'>
          Budget
        <select
          name='budget' 
          value={data.budget} 
          onChange={(e) => setData({...data, budget: e.target.value})} 
          required 
          className='outline-black w-full rounded-md py-2.5 px-4 border text-sm'
        >
          <option value=''>Select...</option>
          <option value='&lt;$500'>&lt;$500</option>
          <option value='$500-$1000'>$500-$1000</option>
          <option value='$1000-$5000'>$1000-$5000</option>
        </select>
        </label>
      </div>

      <div className='flex mt-4'>
        <label htmlFor='message' className='flex-grow block text-left'>
          Message
        <textarea name='message' value={data.message} onChange={(e) => setData({...data, message: e.target.value })} required placeholder='Message' className='outline-black w-full h-24 rounded-md py-2.5 px-4 border text-sm' />
        </label>
      </div>

      <button className='inline-block w-full px-4 py-2 mt-4 text-xs font-semibold tracking-widest text-white uppercase border border-transparent rounded-md bg-[#f84525] hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>Submit</button>
    </form>
  );
};





//       <div style={{ marginTop: '1rem' }}>
//         <label>
//           Message:
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             style={{ width: '100%', height: '100px' }}
//           />
//         </label>
//       </div>
//       <div style={{ marginTop: '1rem' }}>
//         <button type="submit" style={{ width: '100%' }}>Submit</button>
//       </div>
//     </form>
//   );
// };