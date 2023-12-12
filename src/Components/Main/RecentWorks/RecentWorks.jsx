import img1 from '/public/images/bloodDonation.png'
import img2 from '/public/images/bistroBoss.png'
import img3 from '/public/images/fruitBrust.png'
import img4 from '/public/images/donationCamp.png'


const RecentWorks = () => {
    return (
        <div>
            <section className="py-16 px-4 mt-[750px] lg:mt-[100px] md:px-20 md:mt-[600px]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">My Recent Works</h2>
 
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 ">
      <div className="relative overflow-hidden group">
    <img className="h-auto max-w-full rounded-lg transition-all duration-300 filter brightness-100 hover:brightness-75 hover:blur-md" src={img1} alt="" />
    <div className="absolute bottom-0 w-full h-full backdrop-filter backdrop-blur-md opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href="https://blood-donation-f7ec4.web.app/">
      <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">Live Link</button>
      </a>
      <a href="https://github.com/nahida30/blood-donation-server">
      <button className="bg-gray-700 text-white px-4 py-2 rounded">GitHub</button>
      </a>
    </div>

  </div>
  <div className="relative overflow-hidden group">
    <img className="h-auto max-w-full rounded-lg transition-all duration-300 filter brightness-100 hover:brightness-75 hover:blur-md" src={img2} alt="" />
    <div className="absolute bottom-0 w-full h-full backdrop-filter backdrop-blur-md opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href="https://bejewelled-licorice-aacd3a.netlify.app">
      <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">Live Link</button>
      </a>
      <a href="https://github.com/nahida30/bistro-boss">
      <button className="bg-gray-700 text-white px-4 py-2 rounded">GitHub</button>
      </a>
    </div>
  </div>
  <div className="relative overflow-hidden group">
    <img className="h-auto max-w-full rounded-lg transition-all duration-300 filter brightness-100 hover:brightness-75 hover:blur-md" src={img3} alt="" />
    <div className="absolute bottom-0 w-full h-full backdrop-filter backdrop-blur-md opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href="https://nahida30.github.io/fruit-brust/">
      <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">Live Link</button>
      </a>
      <a href="https://github.com/nahida30/fruit-brust">
      <button className="bg-gray-700 text-white px-4 py-2 rounded">GitHub</button>
      </a>
    </div>
  </div>
  <div className="relative overflow-hidden group">
    <img className="h-auto max-w-full rounded-lg transition-all duration-300 filter brightness-100 hover:brightness-75 hover:blur-md" src={img4} alt="" />
    <div className="absolute bottom-0 w-full h-full backdrop-filter backdrop-blur-md opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href="https://loquacious-khapse-ac1afb.netlify.app/">
      <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">Live Link</button>
      </a>
      <a href="https://github.com/nahida30/image-gallery-react-task">
      <button className="bg-gray-700 text-white px-4 py-2 rounded">GitHub</button>
      </a>
    </div>
  </div>
    </div>
    </section>

   
    </div>

    );
};

export default RecentWorks;