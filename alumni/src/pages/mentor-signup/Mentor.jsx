import React from "react";
import { Link } from "react-router-dom";

export default function MentorshipProgram() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-blue-900 tracking-tight">
            Mentor Techies
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-600">
          <a href="#" className="hover:text-blue-900 transition">
            Mentors
          </a>
          <a href="#" className="hover:text-blue-900 transition">
            About
          </a>
        </div>

        <div className="hidden md:block">
          <button className="px-8 py-3 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:shadow-xl transition border border-gray-100">
            Enroll now
          </button>
        </div>
      </nav>

      {/* TEMPORARY BUTTON*/}
      <div className="mt-4">
        <Link to="/finder">
          <button className="px-4 py-2 bg-red-100 text-red-600 border border-red-300 rounded shadow-sm text-sm font-bold hover:bg-red-200 transition">
            TEMP: Click here to go to Request Form
          </button>
        </Link>
      </div>

      {/* Header */}
      <header className="px-6 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            Be Job Ready in <br />
            <span className="text-orange-500">90 Days</span> with our <br />
            Tech <span className="text-blue-200">Mentorship</span> <br />{" "}
            Program
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-md">
            We get you internship-ready with a career mentor and a tech
            recruiter. You can never go wrong when it comes to getting your Tech
            Job with us.
          </p>

          <button className="mt-8 px-8 py-3 bg-blue-900 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 transition cursor-pointer">
            Get a Mentor
          </button>
        </div>

        <div className="relative h-[450px] w-full">
          <div className="absolute top-10 right-10 w-48 h-48 bg-blue-100 rounded-full -z-10 blur-2xl"></div>

          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Success"
            className="absolute top-0 left-4 w-[65%] h-[75%] object-cover rounded-3xl shadow-lg z-0"
          />

          <img
            src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Mentoring"
            className="absolute bottom-4 right-4 w-[60%] h-[60%] object-cover rounded-3xl shadow-2xl border-4 border-white z-10"
          />
        </div>
      </header>

      {/* WHAT WE DO DIFFERENTLY */}
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 flex flex-col justify-start">
            <span className="uppercase text-xs font-bold tracking-widest text-gray-900 mb-2">
              WHY US
            </span>
            <h2 className="text-4xl font-bold text-blue-600 mb-6 leading-tight">
              What we do <br /> differently
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We give you a custom experience to unlock your tech potential and
              start your journey to your dream job. Our program is designed to
              help you develop your creative skills and gain real-world
              experience through internships.
            </p>

            <div>
              <button className="px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition">
                Get a Mentor
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-sm hover:shadow-md transition flex flex-col h-full">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Mentorship Program
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team of experienced mentors provide personalized guidance
                and support to help you reach your career goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-sm hover:shadow-md transition flex flex-col h-full">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Internship Program
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer an intensive internship program for ambitious learners
                looking to take their career paths to the next level.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-sm hover:shadow-md transition flex flex-col h-full">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Job Search
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our Tech recruiters provide comprehensive guidance to help
                individuals reach their professional goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-sm hover:shadow-md transition flex flex-col h-full">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Networking
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We have the perfect place to connect with industry professionals
                and find mentors in the fields of tech and IT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WE HOLD YOUR HAND SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Mentoring Session"
            className="rounded-3xl shadow-lg"
          />
        </div>
        <div>
          <span className="uppercase text-xs font-bold tracking-widest text-gray-500">
            About Us
          </span>
          <h2 className="text-3xl font-bold text-blue-600 mt-2 mb-6">
            We hold your hand till you get the Job.
          </h2>
          <p className="text-gray-600 mb-6">
            At Mentor Techies, we are not a coding boot camp. We are a tech
            community that helps techies secure their dream job. We utilize a
            mentor-based platform that allows tech newbies to leverage the
            experience of senior devs.
          </p>
          <button className="px-8 py-3 border border-gray-400 rounded-full font-bold hover:bg-gray-50 transition">
            Know more about us
          </button>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">
          Be Job Ready in 4 Steps
        </h2>

        {/* Updated to grid-cols-2 (2x2 layout) with larger gaps */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          <StepCard
            number="01"
            title="Get an Internship"
            color="bg-blue-600"
            desc="Get an intern role with an organization"
          />
          <StepCard
            number="02"
            title="Get Mentored"
            color="bg-lime-600"
            desc="Get projects from mentors who are expert in your field"
          />
          <StepCard
            number="03"
            title="Get Paired"
            color="bg-orange-600"
            desc="You will be paired with a tech recruiter who will guide you through your CV till you get a job"
          />
          <StepCard
            number="04"
            title="Get Employed"
            color="bg-pink-500"
            desc="Viola! All through the four steps our goal is to be with you till you get a job"
          />
        </div>
      </section>

      {/* MENTORS SECTION */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          We have experts to give you <br /> professional mentoring
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
          <MentorCard
            name="Vladimir K"
            role="Software Engineer"
            img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          />
          <MentorCard
            name="Majisola O"
            role="Product Designer"
            img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          />
          <MentorCard
            name="Claude Scott"
            role="DevOps Engineer"
            img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          />
          <MentorCard
            name="Ben N"
            role="UI/UX Designer"
            img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          />
        </div>
        <p className="mt-15 text-gray-600 text-sm">
          Our top mentors will provide you with the guidance and resources and
          resources you need to reach your goals.
        </p>
        <button className="mt-12 px-8 py-3 bg-blue-900 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 transition cursor-pointer">
          See all Mentors
        </button>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Testimonials from our Mentees
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <TestimonialCard
            quote="Mentorship Tech helped me move from a novice to a Senior Developer in less than a year. The mentors are amazing!"
            name="Jane G"
            role="Frontend Dev"
            // Placeholder Image 1
            imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
          />
          <TestimonialCard
            quote="The structured learning path and project-based approach helped me land my first job at a top tech company."
            name="Ken"
            role="Product Designer"
            // Placeholder Image 2
            imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
          />
          <TestimonialCard
            quote="Moving from sales to tech was scary, but the mentors here made it seamless. I'm now a working Data Analyst."
            name="Natasha"
            role="Data Analyst"
            // Placeholder Image 3
            imageSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 px-6 border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-sm">
            <p className="text-gray-500 text-sm leading-relaxed">
              We are a mentorship community that helps talents get dream jobs in
              the United Kingdom, United States, and Africa.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Get in touch</h4>
            <p className="text-gray-500 text-sm">Global Kingdom, Estate</p>
            <p className="text-gray-500 text-sm">Technologics Center</p>
            <p className="text-gray-500 text-sm mt-2">
              hello@mentortechies.com
            </p>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-12">
          Copyright © 2026 Mentor Techies. Powered by Mentor Techies.
        </div>
      </footer>
    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function StepCard({ number, title, color, desc }) {
  return (
    <div className="text-left flex flex-col h-full">
      {/* Number Box */}
      <div
        className={`w-12 h-12 ${color} text-white font-bold text-lg flex items-center justify-center rounded-lg mb-4 shadow-sm`}
      >
        {number}
      </div>

      {/* Text Content */}
      <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
        {desc}
      </p>

      {/* Bottom Line Separator*/}
      <div className="w-full h-[1px] bg-blue-200 mt-auto"></div>
    </div>
  );
}

function MentorCard({ name, role, img }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={img}
        alt={name}
        className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-white shadow-md"
      />
      <h3 className="font-bold text-gray-900 text-base">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}

function TestimonialCard({ quote, name, role, imageSrc }) {
  return (
    <div className="bg-blue-50 p-8 rounded-2xl relative bborder border-black-400 shadow-sm hover:shadow-md transition">
      {/* Large Quote Icon */}
      <span className="absolute top-4 left-4 text-6xl text-blue-200 opacity-100 font-serif leading-none">
        “
      </span>

      <div className="relative z-10">
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">{quote}</p>

        {/* Author Block with Image */}
        <div className="flex items-center gap-4">
          {/* Image Container */}
          <img
            src={imageSrc}
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <h4 className="font-bold text-gray-900 text-base">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
