import img from '/public/images/s.png';
import myImg from '/public/images/image.png';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen lg:h-[600px] bg-base-200 relative">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="relative -mt-24" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <img src={img} className="max-w-sm mt-20  lg:h-[500px] rounded-lg" />
            <img src={myImg} className="absolute -top-[105px] h-[500px] lg:-top-[200px] left-0 max-w-sm mt-20 lg:h-[700px] rounded-lg" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;