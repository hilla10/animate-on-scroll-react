import cardItem from '../utils';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Card = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, []);

  return (
    <section>
      {cardItem.map(({ id, title, desc, img }) => (
        <div
          key={id}
          className={`${id % 2 === 0 ? 'flex-reverse' : ''} card`}
          data-aos={`${
            id % 2 === 0 ? 'fade-left' : id === 1 ? '' : 'fade-right'
          }`}>
          <img src={img} alt={title} />
          <div className='content'>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button className='btn'>Buy Now</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
