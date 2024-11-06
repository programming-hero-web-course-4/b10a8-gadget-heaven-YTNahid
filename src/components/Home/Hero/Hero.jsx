import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/banner.jpg';

const Hero = () => {
  return (
    <section className="section mt-[-120px] lg:mt-[-80px]">
      <div className="row bg-white lg:border border-border-color lg:rounded-3xl lg:p-1 overflow-hidden max-w-[1540px]">
        <div className="column items-center bg-primary-color lg:rounded-3xl max-w-[1540px] pt-40 pb-[150px] lg:pt-32 lg:pb-[260px]">
          <h1 className="heading text-center max-w-[850px] text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="text text-white max-w-[600px] text-center">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it
            all!
          </p>
          <Link
            to={'/dashboard'}
            className="px-7 py-4 border border-white  rounded-full bg-white font-bold text-primary-color hover:bg-transparent hover:text-white"
          >
            <button>Dashboard</button>
          </Link>
        </div>
      </div>
      <div className="row justify-center items-center">
        <div className="column bg-white/25 border-2 border-white p-5 rounded-3xl mt-[-130px] lg:mt-[-230px] w-[90%]">
          <img src={bannerImg} alt="Banner" className="rounded-3xl lg:h-[550px] object-cover object-center" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
