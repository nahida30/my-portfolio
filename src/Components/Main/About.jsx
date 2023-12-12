import image from '/public/images/image.png'

const About = () => {
    return (
      <section className="bg-base-200 py-16 px-20">
      <div className="container mx-auto flex items-center justify-center flex-col-reverse lg:flex-row">
        <div className="mb-10 lg:mr-10 ">
          <img
            src={image}
            alt="Profile"
            className="w-52 h-52 lg:w-[700px] lg:h-96 rounded-full border-4 border-purple-500 "
          />
        </div>
        <div className="mt-44 text-center lg:text-left lg:mt-0">
          <h2 className="text-4xl font-bold text-purple-700 mb-2">About Me</h2>
          <p className="text-xl text-gray-700 text-left p-0">
            As a passionate frontend developer with a keen interest in creating
            interactive and user-friendly web applications. I specialize in HTML, CSS, JavaScript,
            and modern frontend libraries like React.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            My goal is to build elegant and responsive websites that provide a seamless and
            enjoyable user experience. I love staying up-to-date with the latest web technologies
            and applying them to create innovative solutions.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open
            source projects, or enjoying a good cup of coffee while sketching out new design
            ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;