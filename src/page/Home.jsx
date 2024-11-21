import React from 'react';
import Videoo from '../Homepage/Videoo';
import Footer from '../componts/Footer';
import { RiTeamFill } from "react-icons/ri";
function Home() {
  return (
    <div>
      <Videoo />
      <div>
        <section id="our-team" className="bg-gray-100 py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
           Meet Our Chef's
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6 my-6 text-center">
                <img
                  src="./image/1688045591267.jpg"
                  alt="Team Member 1"
                  className="w-full rounded-full mb-4 border-4 border-purple-500 hover:border-purple-700 transition-all"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-purple-600 transition-colors">
                  Omkar Mane
                </h3>
                <p className="text-gray-600">specialist for non-veg</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6 my-6 text-center">
                <img
                  src="./image/bapu.jpg"
                  alt="Team Member 2"
                  className="w-full rounded-full mb-4 border-4 border-purple-500 hover:border-purple-700 transition-all"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-purple-600 transition-colors">
                  Bapu Kolekar
                </h3>
                <p className="text-gray-600">specialist for veg</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6 my-6 text-center">
                <img
                  src="./image/pratik.jpg"
                  alt="Team Member 3"
                  className="w-full rounded-full mb-4 border-4 border-purple-500 hover:border-purple-700 transition-all"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-purple-600 transition-colors">
                  Pratik Jadhav
                </h3>
                <p className="text-gray-600">specialists for fast-food</p>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6 my-6 text-center">
                <img
                  src="/image/logo1.png"
                  alt="Team Member 4"
                  className="w-full rounded-full mb-4 border-4 border-purple-500 hover:border-purple-700 transition-all"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-purple-600 transition-colors">
                  Peter Johnson
                </h3>
                <p className="text-gray-600">Specialist for designing food</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
