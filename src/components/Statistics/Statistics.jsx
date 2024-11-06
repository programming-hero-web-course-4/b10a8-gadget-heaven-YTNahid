import { useEffect } from 'react';

const Statistics = () => {
  useEffect(() => {
    document.title = 'Gadhet Heaven - Satistics';
  }, []);

  return (
    <section className="section">
      <div className="row bg-white border border-border-color rounded-3xl p-1 overflow-hidden max-w-[1540px]">
        <div className="column items-center bg-primary-color rounded-3xl max-w-[1540px] py-6 lg:py-8">
          <h2 className="heading text-center max-w-[850px] text-white">Statistics</h2>
          <p className="text text-white max-w-[500px] text-center">Compare our products with price here</p>
        </div>
      </div>
      <dov className="row">
        <div className="column">
          <h2 className="heading text-center">No Data to show here</h2>
        </div>
      </dov>
    </section>
  );
};

export default Statistics;
