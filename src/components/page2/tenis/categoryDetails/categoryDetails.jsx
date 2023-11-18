import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { ToastContainer } from 'react-toastify';

const CategoryDetails = (props = {}) => {
  const [number, setNumber] = useState(1);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const incrementNumber = () => {
    setNumber(number + 1);
  };
  const decrementNumber = () => {
    number != 1 && setNumber(number - 1);
  };
  const handleSubmitClick = () => {
    if (username == '' || address == '' || phonenumber == '') {
      toast.error('Please Complete All Form Fields First.');
    }
    else {
      const phoneNumber = '+923004439445';
      const message = `Name: ${username}
      \nEmail: ${email}
      \nPhone Number: ${phonenumber}
      \nProduct: ${props.data[1]}
      \nQuantity: ${number}
      \nAddress: ${address}
      \nTotal Price: ${number * props.data[3]}
      `;
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink);
      toast.success('Thankyou for filling the form.')
      document.getElementById(props.data[1]).close();
      setEmail("");
      setUsername("");
      setPhoneNumber("");
      setAddress("");
    }
  };
  return (
    <section className='flex flex-col items-center justify-between gap-3 p-5'>
      <h1 className='text-themeColor text-3xl'>{props.data[1]}</h1>
      <section className='flex flex-col items-center gap-3'>
      <div className='text-base mt-2'>
        <section className="w-full">
          <section className='w-auto'>
            {Object.entries(props.data[2]).map(([key, value], i) => (
              <section key={i} className='flex flex-row gap-2 justify-between'>
                <section className='flex flex-row gap-3 items-start'>
                  <p className="font-semibold">{key}:</p>
                </section>
                <p className='text-right'>{value}</p>
              </section>
            ))}
          </section>
        </section>
      </div>
        <h2 className='text-themeColor text-3xl'>PKR {props.data[3]} <span className='text-sm'>/bag</span></h2>
        <h2 className='text-themeColor text-sm'>Total Price {(props.data[3] * number).toLocaleString()}</h2>
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
      </section>
      <dialog id={`${props.data[1]}`} className="m-auto modal min-w-[80vw] max-w-[80vw]  h-[80vh] lg:h-fit">
        <ToastContainer />
        <div className="modal-box flex flex-col gap-5 items-center w-full h-full">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
          </form>
          <div className="modal-box w-full h-full bg-bgLight flex flex-col gap-3 font-text">
            <p className='text-xs ms:px-5 text-center'>Please fill below fields to place order.</p>
            <section className='flex flex-col gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Name: <span className='text-red-700'>*</span></p>
              <input value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='rounded-lg text-base mx-4 px-4 py-1' type="text" name="username" id="username" />
            </section>

            <section className='flex flex-col gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Phone Number: <span className='text-red-700'>*</span></p>
              <input value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className='rounded-lg text-base mx-4 px-4 py-1' type="tel" name="phonenumber" id="phonenumber" />
            </section>
            <section className='flex flex-col gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Address: <span className='text-red-700'>*</span></p>
              <input value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='rounded-lg text-base mx-4 px-4 py-1' type="text" name="address" id="address" />
            </section>
            <section className='flex flex-col gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Email:</p>
              <input value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='rounded-lg text-base mx-4 px-4 py-1' type="email" name="email" id="email" />
            </section>
            <section className='flex flex-col ms:flex-row justify-around gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Product:</p>
              <p className='ms:text-lg font-bold px-4 py-1'>{props.data[1]}</p>
            </section>
            <section className='flex flex-col ms:flex-row justify-around gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Quantity:</p>
              <p className='ms:text-lg font-bold px-4 py-1'>{number} Bags</p>
            </section>
            <section className='flex flex-col ms:flex-row justify-around gap-1'>
              <p className="text-base ms:text-2xl font-heading font-bold">Total Price:</p>
              <p className='ms:text-lg font-bold px-4 py-1'>{number * props.data[3]}-/Pkr</p>
            </section>
            <section className='flex flex-row justify-around gap-1'>
              <button onClick={handleSubmitClick} className='btn-sm md:btn-md btn border-0 bg-themeColor'>Confirm Order</button>
            </section>
          </div>
        </div>
      </dialog>
    </section>
  );
}

export default CategoryDetails;
