import React from 'react';

const MyJourney = () => {
  return (
    <section className="py-16 px-4 mt-[200px] lg:mt-0 md:px-20 md:mt-[5px]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">My Journey</h2>

        {/* Flex container for education and experience */}
        <div className="flex flex-col md:flex-row md:space-x-8">

          {/* Education section */}
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold text-purple-700 mb-4">Education</h3>

              {/* School information */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-purple-700">High School</h4>
                <p >School Name: Dhanmondi Govt. Girls High School</p>
                <p >Subject: Science</p>
                <p >Passing Year: 2017</p>
              </div>

              {/* College information */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-purple-700">College</h4>
                <p >College Name: Birshreshtha Munshi Abdur Rouf Public College</p>
                <p >Subject:  Science</p>
                <p >Passing Year: 2019</p>
              </div>

              {/* University information */}
              <div>
                <h4 className="text-lg font-bold text-purple-700">University</h4>
                <p >University Name: Bangladesh University of Business And Technology</p>
                <p >Subject: Information Technology</p>
                <p >Passing Year: 2023</p>
              </div>
            </div>
          </div>

          {/* Experience section */}
          <div className="w-full md:w-1/2 md:pl-8">
          <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold text-purple-700 mb-4">Education</h3>

              {/* School information */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-purple-700">Website Design</h4>
                <p>Website design is the process of creating the visual aesthetics and layout of a website. It involves combining elements such as colors, typography, images, and interactive features to produce a user-friendly and visually appealing interface. </p>
              </div>

              {/* College information */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-purple-700">Frontend Framework (React)</h4>
                <p>React, a leading frontend framework, specializes in crafting dynamic and interactive user interfaces by managing the application's view layer. </p>
                
              </div>

              {/* University information */}
              <div>
                <h4 className="text-lg font-bold text-purple-700">Database Framework (MongoDB)</h4>
                <p>MongoDB, a widely-used NoSQL database, distinguishes itself through its flexible and scalable architecture. Embracing a document-oriented model, MongoDB allows developers to store, retrieve, and manage data in JSON-like BSON format, providing versatility for various data types.</p>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyJourney;
