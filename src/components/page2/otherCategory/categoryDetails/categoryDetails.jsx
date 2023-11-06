import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { ToastContainer } from 'react-toastify';

const CategoryDetails = (props = {}) => {
  const [number, setNumber] = useState(1000);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');

  const incrementNumber = () => {
    setNumber(number + 1000);
  };
  const decrementNumber = () => {
    number != 1000 && setNumber(number - 1000);
  };
  const handleSubmitClick = () => {
    if (username == '' || email == '' || phonenumber == '') {
      toast.error('Please Complete All Form Fields First.');
    }
    else {
      const phoneNumber = '+923004439445';
      const message = `Name: ${username}
      \nEmail: ${email}
      \nPhone Number: ${phonenumber}
      \nProduct: ${props.data[1]}
      \nQuantity: ${number}
      \nTotal Price: ${number}
      `;
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink);
      toast.success('Thankyou for filling the form.')
      document.getElementById('my_modal_4').close();
      setEmail("");
      setUsername("");
      setPhoneNumber("");
    }
  };
  return (
    <section className='flex flex-col items-center gap-3 p-5'>
      <h1 className='text-themeColor text-3xl'>{props.data[1]}</h1>
      <a href="" className='text-sm text-darkColor underline'>Download Report</a>
      <h2 className='text-themeColor text-3xl'>PKR 17.0</h2>
      <section className='flex flex-col ms:flex-row gap-2'>
        <section className="rounded-lg flex flex-row items-center border-2 border-bgLight justify-between p-2 w-fit mx-2">
          <button className='text-sm' onClick={() => decrementNumber()}>
            <AiOutlineMinus />
          </button>
          <p className="px-2 w-fit text-sm">{number}</p>
          <button className='text-sm' onClick={() => incrementNumber()}>
            <AiOutlinePlus />
          </button>
        </section>
        <button onClick={() => document.getElementById(props.data[1]).showModal()} className='rounded-lg bg-themeColor text-black  px-3 py-2 w-fit text-sm'>Place Order</button>
      </section>
      <dialog id={`${props.data[1]}`} className="m-auto modal min-w-[80vw] max-w-[80vw]  h-[80vh] lg:h-fit">
        <ToastContainer />
        <div className="modal-box flex flex-col gap-5 items-center w-full h-full">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
          </form>
          <div className="modal-box w-full h-full bg-bgLight flex flex-col gap-3 font-text">
            <p className='text-xs ms:px-5 text-center'>We are collecting your detail and will contact you in order to proceed with your order.</p>
            <section className='flex flex-col gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Name:</p>
              <input value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='rounded-lg text-base mx-4 px-4 py-1' type="text" name="username" id="username" />
            </section>
            <section className='flex flex-col gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Email:</p>
              <input value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='rounded-lg text-base mx-4 px-4 py-1' type="email" name="email" id="email" />
            </section>
            <section className='flex flex-col gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Phone Number:</p>
              <input value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className='rounded-lg text-base mx-4 px-4 py-1' type="tel" name="phonenumber" id="phonenumber" />
            </section>
            <section className='flex flex-col ms:flex-row justify-around gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Product:</p>
              <p className='ms:text-lg font-bold px-4 py-1'>{props.data[1]}</p>
            </section>
            <section className='flex flex-col ms:flex-row justify-around gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Quantity:</p>
              <p className='ms:text-lg font-bold px-4 py-1'>{number} Bricks</p>
            </section>
            <section className='flex flex-col ms:flex-row justify-around gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Total Price:</p>
              <p className='ms:text-lg font-bold px-4 py-1'>{number}-/Pkr</p>
            </section>
            <section className='flex flex-row justify-around gap-1'>
              <button onClick={handleSubmitClick} className='btn-sm md:btn-md btn'>Send Details</button>
            </section>
            {/* <iframe className='w-full h-full' src="https://docs.google.com/forms/d/e/1FAIpQLSfjMUTbqz6CTpcUKyLU6jUBzVDkJJzHmv3K7hZLxA53NI8VgQ/viewform?embedded=true">Loading…</iframe> */}
          </div>
        </div>
      </dialog>
    </section>
  );
}

export default CategoryDetails;
