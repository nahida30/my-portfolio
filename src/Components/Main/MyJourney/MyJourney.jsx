import React from 'react';

const MyJourney = () => {
  return (
<section className=" py-16 px-4 mt-[200px] lg:mt-0 md:px-20 md:mt-[10px]">
  <div className="mx-auto max-w-screen-xl ">
    <h2 className="text-4xl font-bold text-purple-700 mb-8">My Journey</h2>
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Education</h2>

        {/* School information */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-purple-700 mb-2">High School</h3>
          <p className="text-gray-700">
            Dhanmondi Govt. Girls High School<br />
            Subject: Science<br />
            Passing Year: 2017
          </p>
        </div>

        {/* College information */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-purple-700 mb-2">College</h3>
          <p className="text-gray-700">
            Birshreshtha Munshi Abdur Rouf Public College<br />
            Subject: Science<br />
            Passing Year: 2019
          </p>
        </div>

        {/* University information */}
        <div>
          <h3 className="text-xl font-bold text-purple-700 mb-2">University</h3>
          <p className="text-gray-700">
            Bangladesh University of Business and Technology<br />
            Subject: Computer Science and Engineering<br />
            Passing Year: 2023
          </p>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Experience</h2>

        <div className="mb-4">
          <h3 className="text-xl font-bold text-purple-700 mb-2">Website Design</h3>
          <p>
            Website design is the process of creating the visual aesthetics and layout of a website. It involves combining elements such as colors, typography, images, and interactive features to produce a user-friendly and visually appealing interface.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold text-purple-700 mb-2">Frontend Framework (React)</h3>
          <p>
            React, a leading frontend framework, specializes in crafting dynamic and interactive user interfaces by managing the application's view layer.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-purple-700 mb-2">Database Framework (MongoDB)</h3>
          <p>
            MongoDB, a widely-used NoSQL database, distinguishes itself through its flexible and scalable architecture. Embracing a document-oriented model, MongoDB allows developers to store, retrieve, and manage data in JSON-like BSON format, providing versatility for various data types.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default MyJourney;
