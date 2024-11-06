import { useEffect } from 'react';
import { FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  useEffect(() => {
    document.title = 'Gadget Heaven - Contact';
  }, []);
  return (
    <section className="section">
      <div className="row bg-white border border-border-color rounded-3xl p-1 overflow-hidden max-w-[1540px]">
        <div className="column items-center bg-primary-color rounded-3xl max-w-[1540px] py-6 lg:py-8">
          <h2 className="heading text-center max-w-[850px] text-white">Contact Us</h2>
          <p className="text text-white max-w-[500px] text-center">Do not hesitate to contact us for any enquiry</p>
        </div>
      </div>
      <div className="row pb-12">
        <div className="column">
          <div className="flex items-center gap-5">
            <FaPhoneAlt className="text-xl"></FaPhoneAlt> +88 01900000331
          </div>
          <div className="flex items-center gap-5">
            <MdEmail className="text-xl"></MdEmail> nahid1coc@gmail.com
          </div>
          <div className="flex items-center gap-5">
            <FaMapMarkedAlt className="text-xl"></FaMapMarkedAlt> Banani, Dhaka
          </div>
        </div>
        <div className="column">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text font-bold">
                Name
              </label>
              <input type="text" id="name" placeholder="Enter your name" className="p-4" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text font-bold">
                Email
              </label>
              <input type="email" id="email" placeholder="Enter your email" className="p-4" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text font-bold">
                Message
              </label>
              <textarea id="message" placeholder="Enter your message" className="p-4" rows={4} />
            </div>
            <button className="btn bg-primary-color text-white font-bold max-w-[170px] m-auto px-8 py-3 rounded-full">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
