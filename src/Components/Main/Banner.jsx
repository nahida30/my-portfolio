import img from '/public/images/s.png';
import myImg from '/public/images/image.png';
import Resume from './CV.pdf';

const Banner = () => {
  
  return (
    <div>
      <div className="hero relative lg:h-[80vh]">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="relative -mt-2" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <img src={img} className="max-w-sm mt-20  lg:h-[500px] rounded-lg" />
            <img src={myImg} className="absolute -top-[105px] h-[500px] lg:-top-[200px] left-0 max-w-sm mt-20 lg:h-[700px] rounded-lg" />
          </div>
          <div className='lg:-mt-32'>
    <h1 className="text-5xl font-bold">Hello</h1>
    <h2 className="text-5xl font-bold">I am <span className='text-5xl font-bold text-purple-700'>Nahida</span></h2>
    <p className="py-6 text-xl">
        As a web developer, I play the role of a digital architect, using HTML, CSS, JavaScript and React Js to bring online experiences to life. Collaboration is a big part of my work, closely working with designers and clients to materialize their ideas.
    </p>

    {/* <div className="flex gap-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/public/images/instagram.png" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <img src="/public/images/github.png" alt="GitHub" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/public/images/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
        </a>
    </div> */}
    <a href={Resume} download>
          <button className="btn btn-primary">Download CV</button>
        </a>
</div>

        </div>
      </div>
    </div>
  );
};

export default Banner;