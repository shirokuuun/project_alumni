import React from 'react';
import { Link } from 'react-router-dom'; 

export default function MentorshipProgram() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
    {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
           <span className="font-bold text-xl text-blue-900 tracking-tight">Mentor Techies</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-600">
          <a href="#" className="hover:text-blue-900 transition">Mentors</a>
          <a href="#" className="hover:text-blue-900 transition">About</a>
        </div>

        <div className="hidden md:block">
           <button className="px-8 py-3 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:shadow-xl transition border border-gray-100">
            Enroll now
          </button>
        </div>

      </nav>

        {/* TEMPORARY BUTTON*/}
          <div className="mt-4">
            <Link to="/request">
                <button className="px-4 py-2 bg-red-100 text-red-600 border border-red-300 rounded shadow-sm text-sm font-bold hover:bg-red-200 transition">
                 TEMP: Click here to go to Request Form
                </button>
            </Link>
          </div>

    {/* Header */}
      <header className="px-6 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            Be Job Ready in <br/>
            <span className="text-orange-500">90 Days</span> with our <br/>
            Tech <span className="text-blue-200">Mentorship</span> <br/> Program
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-md">
            We get you internship-ready with a career mentor and a tech recruiter. You can never go wrong when it comes to getting your Tech Job with us.
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
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <span className="uppercase text-xs font-bold tracking-widest text-gray-500">WHY US?</span>
            <h2 className="text-3xl font-bold text-blue-600 mt-2 mb-4">What we do differently</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We give you a custom experience to unlock your tech potential and kick start your career. Our program is designed to help you build your creative confidence through mentorship.
            </p>
            <button className="px-6 py-2 border border-gray-400 rounded-full text-sm font-bold hover:bg-white transition">
              Get scholarship
            </button>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <FeatureCard 
              title="Mentorship Program" 
              desc="Work closely with expert mentors to get guidance, feedback and support in your career path."
            />
            <FeatureCard 
              title="Internship Program" 
              desc="Gain hands-on experience by working on real-world projects that matter."
            />
            <FeatureCard 
              title="Job Search" 
              desc="Our tech recruiters provide resume reviews and mock interviews to get you hired."
            />
            <FeatureCard 
              title="Networking" 
              desc="Connect with industry professionals and grow your professional network."
            />
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
            <span className="uppercase text-xs font-bold tracking-widest text-gray-500">MENTORS</span>
            <h2 className="text-3xl font-bold text-blue-600 mt-2 mb-6">We hold your hand till you get the Job.</h2>
            <p className="text-gray-600 mb-6">
              At Mentor Techies, we are not a coding boot camp. We are a tech community that helps techies secure their dream job. We utilize a mentor-based platform that allows tech newbies to leverage the experience of senior devs.
            </p>
            <button className="px-8 py-3 border border-gray-400 rounded-full font-bold hover:bg-gray-50 transition">
              Know more about us
            </button>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-12">Be Job Ready in 4 Steps</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <StepCard number="01" title="Get an Internship" color="bg-blue-500" desc="Use your skills to get real world experience." />
          <StepCard number="02" title="Get Mentored" color="bg-green-500" desc="Expert mentors guide you at every step." />
          <StepCard number="03" title="Get Hired" color="bg-orange-500" desc="We help you polish your resume and portfolio." />
          <StepCard number="04" title="Get Employed" color="bg-pink-500" desc="Unstack your career and grow with your new job." />
        </div>
      </section>

      {/* MENTORS SECTION */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">We have experts to give you <br/> professional mentoring</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
            <MentorCard name="Vladimir K" role="Software Engineer" img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" />
            <MentorCard name="Majisola O" role="Product Designer" img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" />
            <MentorCard name="Claude Scott" role="DevOps Engineer" img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" />
            <MentorCard name="Ben N" role="UI/UX Designer" img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" />
        </div>
        <button className="mt-12 px-8 py-3 bg-blue-900 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 transition">
            See all Mentors
        </button>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Testimonials from our Mentees</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
           <TestimonialCard 
             quote="Mentorship Tech helped me move from a novice to a Senior Developer in less than a year. The mentors are amazing!"
             name="Jane G" role="Frontend Dev"
           />
           <TestimonialCard 
             quote="The structured learning path and project-based approach helped me land my first job at a top tech company."
             name="Comfort" role="Product Designer"
           />
           <TestimonialCard 
             quote="Moving from sales to tech was scary, but the mentors here made it seamless. I'm now a working Data Analyst."
             name="Natasha" role="Data Analyst"
           />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 px-6 border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-sm">
                <p className="text-gray-500 text-sm leading-relaxed">
                    We are a mentorship community that helps talents get dream jobs in the United Kingdom, United States, and Africa.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-gray-900 mb-4">Get in touch</h4>
                <p className="text-gray-500 text-sm">Global Kingdom, Estate</p>
                <p className="text-gray-500 text-sm">Technologics Center</p>
                <p className="text-gray-500 text-sm mt-2">hello@mentortechies.com</p>
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

function FeatureCard({ title, desc }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
        </div>
    );
}

function StepCard({ number, title, color, desc }) {
    return (
        <div className="text-left">
            <div className={`w-10 h-10 ${color} text-white font-bold flex items-center justify-center rounded-lg mb-4`}>
                {number}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-xs text-gray-500">{desc}</p>
            <div className={`h-1 w-12 ${color.replace('bg-', 'bg-opacity-50 ')} mt-4 rounded-full`}></div>
        </div>
    );
}

function MentorCard({ name, role, img }) {
    return (
        <div className="flex flex-col items-center">
            <img src={img} alt={name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-md" />
            <h3 className="font-bold text-gray-900 text-sm">{name}</h3>
            <p className="text-xs text-gray-500">{role}</p>
        </div>
    );
}

function TestimonialCard({ quote, name, role }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
            <span className="text-4xl text-gray-200 absolute top-4 left-4">“</span>
            <p className="text-sm text-gray-600 mt-6 mb-6 italic relative z-10">{quote}</p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div> {/* Placeholder Avatar */}
                <div>
                    <h4 className="font-bold text-gray-900 text-xs">{name}</h4>
                    <p className="text-xs text-gray-500">{role}</p>
                </div>
            </div>
        </div>
    );
}