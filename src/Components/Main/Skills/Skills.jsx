import React from 'react';

const Skills = () => {
  return (
    <section className=" py-16 px-4 mt-[500px] lg:mt-0 md:px-20 md:mt-[200px]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 ">Skills</h2>
        <progress className="progress w-56 mb-8 "></progress>

        {/* Coding Skills */}
        <div className="flex flex-col mb-10 md:flex-row md:space-x-8">
          <div className="w-full md:w-1/2 md:pr-8">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Coding Skills</h3>
            <div className="flex flex-col">
              {[
                { skill: 'HTML', progress: 90 },
                { skill: 'CSS', progress: 80 },
                { skill: 'React', progress: 75 },
                { skill: 'JavaScript', progress: 85 },
              ].map((item, index) => (
                <div key={index} className="mb-4">
                  <p className="text-gray-700">{item.skill}</p>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                          {item.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="flex h-2 mb-4 overflow-hidden rounded-full">
                      <div
                        style={{ width: `${item.progress}%` }}
                        className="flex flex-col bg-teal-500 shadow-none whitespace-nowrap text-white justify-center"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
       

          {/* Professional Skills */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Professional Skills</h3>
            <div className="flex flex-col">
              {[
                { skill: 'Web Development', progress: 80 },
                { skill: 'Website Design', progress: 70 },
                // Add more professional skills as needed
              ].map((item, index) => (
                <div key={index} className="mb-4">
                  <p className="text-gray-700">{item.skill}</p>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                          {item.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="flex h-2 mb-4 overflow-hidden rounded-full">
                      <div
                        style={{ width: `${item.progress}%` }}
                        className="flex flex-col bg-teal-500 shadow-none whitespace-nowrap text-white justify-center"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
