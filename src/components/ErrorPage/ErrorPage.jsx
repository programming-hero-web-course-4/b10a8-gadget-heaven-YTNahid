import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="section">
      <div className="row">
        <div className="column items-center">
          <h1 className="heading">404</h1>
          <h3 className="heading">Page Not Found</h3>
          <Link to={'/'}>
            <button className="flex self-start items-center gap-3 px-6 py-3 border border-primary-color  rounded-full bg-primary-color font-bold text-white hover:bg-transparent hover:text-primary-color">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
