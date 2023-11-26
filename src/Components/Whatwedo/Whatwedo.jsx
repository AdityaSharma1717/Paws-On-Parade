import React from "react";

import { Link, NavLink } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import playpet from "../../assets/playpet.png";
import Adopt from "../../assets/Adopt.png";
import rescueanimal from "../../assets/rescueanimal.avif";
import SpecialRescues from "../../assets/SpecialRescues.jpeg";
import surgery from "../../assets/surgery.png";
import mobhosp from "../../assets/mobhosp.png";
import animalhosp from "../../assets/animalhosp.jpg";
import animalclinic from "../../assets/animalclinic.png";
import kuttashelter from "../../assets/kuttashelter.png";
import aniclinic from "../../assets/aniclinic.jpeg";
import diagnos from "../../assets/diagnos.jpeg";
import shelter from "../../assets/shelter.jpeg";
import education from "../../assets/education.jpeg";
import anicre from "../../assets/anicre.jpeg";
import heart from "../../assets/heart.jpg";
import volunteer from "../../assets/volunteer.png";
import newclinic from "../../assets/newclinic.png";
import newmed from "../../assets/newmed.png";
import newed from "../../assets/newed.png";
import newvet from "../../assets/newvet.png";
import bed from "../../assets/bed.png";
import whatwedopic from "../../assets/whatwedopic.webp";


function Whatwedo() {
  return (
    <>
      <div className="flex flex-col items-center ">
        {/* HEADING */}
        <div
          id="whatwedohead"
          class="w-full h-52 bg-[url('https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] 
        bg-cover bg-center mb-10"
        >
          <div class="w-full h-full flex  justify-center items-center backdrop-blur-none">
            <span class="text-white font-bold text-4xl underline decoration-3 w-1/2 text-center">
              WHAT WE DO
            </span>
          </div>
        </div>
      </div>

      {/*  HORIZONTAL DIV STARTING*/}
      <div class=" left-100">
        {/* FIRST HORIZONTAL DIV*/}

        <a
          href="#birth"
          activeClass="active"
          spy={true}
          smooth="true"
          offset={-50}
          duration={-500}
        >
          <div
            className="bg-sky-200 h-20 w-3/5 border-4 rounded-r-full border-sky-950 
ml-20 flex duration-1000 ease-in-out justify-evenly m-10 transition delay-150 hover:-translate-y-1 
hover:scale-110 hover:cursor-pointer opacity-0 animate-fade-left-in"
          >
            <div className="text-black font-semibold text-3xl px-4 py-5">
              ANIMAL BIRTH CONTROL SURGERIES
            </div>
            <div className="ml-12">
              <img src={surgery} className="h-16 w-20" alt="" />
            </div>

            <style>
              {`@keyframes fade-left-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-fade-left-in {
  animation: fade-left-in 3s ease-in-out forwards;
}
        `}
            </style>
          </div>
        </a>

        {/* SECOND HORIZONTAL DIV*/}
        <a href="#rescue">
          <div
            className="bg-sky-200 h-20 w-3/5 border-4 rounded-l-full border-sky-950 
ml-96 flex  justify-evenly m-10 transition ease-in-out delay-150 hover:-translate-y-1 
hover:scale-110 duration-1000 hover:cursor-pointer opacity-0 animate-fade-right-in"
          >
            <div>
              <img src={playpet} className=" h-16 w-20" alt="" />{" "}
            </div>
            <div className="text-black font-semibold text-3xl px-4  py-5">
              RESCUE ANIMAL IN DISTRESS
            </div>

            <style>
              {`
        @keyframes fade-right-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .animate-fade-right-in {
            animation: fade-right-in 3s ease-in-out forwards;
          }
        `}
            </style>
          </div>
        </a>

        {/* THIRD HORIZONTAL DIV*/}

        <a href="#foster">
          <div
            className="bg-sky-200 h-20 w-3/5 border-4 rounded-r-full border-sky-950 
ml-20 flex duration-1000 ease-in-out justify-evenly m-10 transition delay-150 hover:-translate-y-1 
hover:scale-110 hover:cursor-pointer opacity-0 animate-fade-left-in"
          >
            <div className="text-black font-semibold text-3xl px-4 py-5">
              ADOPTION AND FOSTERING
            </div>
            <div className="ml-12">
              <img src={kuttashelter} className="h-16 w-20" alt="" />
            </div>

            <style>
              {`@keyframes fade-left-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-fade-left-in {
  animation: fade-left-in 3s ease-in-out forwards;
}
        `}
            </style>
          </div>
        </a>

        {/* FOURTH HORIZONTAL DIV*/}
        <a href="special">
          <div
            className="bg-sky-200 h-20 w-3/5 border-4 rounded-l-full border-sky-950 
ml-96 flex  justify-evenly m-10 transition ease-in-out delay-150 hover:-translate-y-1 
hover:scale-110 duration-1000 hover:cursor-pointer opacity-0 animate-fade-right-in"
          >
            <div>
              <img src={volunteer} className=" h-16 w-20" alt="" />{" "}
            </div>
            <div className="text-black font-semibold text-3xl px-4  py-5">
              SPECIAL RESCUES AND DISASTER RELIEF
            </div>

            <style>
              {`
        @keyframes fade-right-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .animate-fade-right-in {
            animation: fade-right-in 3s ease-in-out forwards;
          }
        `}
            </style>
          </div>
        </a>

        {/* FIFTH HORIZONTAL DIV*/}
        <a href="#hospital">
          <div
            className="bg-sky-200 h-20 w-3/5 border-4 rounded-r-full border-sky-950 
ml-20 flex duration-1000 ease-in-out justify-evenly m-10 transition delay-150 hover:-translate-y-1 
hover:scale-110 hover:cursor-pointer opacity-0 animate-fade-left-in"
          >
            <div className="text-black font-semibold text-3xl px-4 py-5">
              ANIMAL HOSPITAL
            </div>
            <div className="ml-12">
              <img src={newclinic} className="h-16 w-20" alt="" />
            </div>

            <style>
              {`@keyframes fade-left-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-fade-left-in {
  animation: fade-left-in 3s ease-in-out forwards;
}
        `}
            </style>
          </div>
        </a>

        {/* SIXTH HORIZONTAL DIV*/}
        <a href="mobile">
          <div
            className="bg-sky-200 h-20 w-3/5 border-4 rounded-l-full border-sky-950 
ml-96 flex  justify-evenly m-10 transition ease-in-out delay-150 hover:-translate-y-1 
hover:scale-110 duration-1000 hover:cursor-pointer opacity-0 animate-fade-right-in"
          >
            <div>
              <img src={newmed} className=" h-16 w-20" alt="" />{" "}
            </div>
            <div className="text-black font-semibold text-3xl px-4  py-5">
              MOBILE HOSPITAL AND VET ON WHEELS
            </div>

            <style>
              {`
        @keyframes fade-right-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .animate-fade-right-in {
            animation: fade-right-in 3s ease-in-out forwards;
          }
        `}
            </style>
          </div>
        </a>
        {/* SEVENTH HORIZONTAL DIV*/}

        <a href="#clinic">
          <div
            className="bg-sky-200 h-20 w-3/5 border-4 rounded-r-full border-sky-950 
ml-20 flex duration-1000 ease-in-out justify-evenly m-10 transition delay-150 hover:-translate-y-1 
hover:scale-110 hover:cursor-pointer opacity-0 animate-fade-left-in"
          >
            <div className="text-black font-semibold text-3xl px-4 py-5">
              ANIMAL OUTPATIENT CLINIC
            </div>
            <div className="ml-12">
              <img src={newvet} className="h-16 w-20" alt="" />
            </div>

            <style>
              {`@keyframes fade-left-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-fade-left-in {
  animation: fade-left-in 3s ease-in-out forwards;
}
        `}
            </style>
          </div>
        </a>

        {/* EIGTH HORIZONTAL DIV*/}
        <a href="diagnostics">
          <div
            className="bg-sky-200 h-20 w-3/5 border-4 rounded-l-full border-sky-950 
ml-96 flex  justify-evenly m-10 transition ease-in-out delay-150 hover:-translate-y-1 
hover:scale-110 duration-1000 hover:cursor-pointer opacity-0 animate-fade-right-in"
          >
            <div>
              <img src={bed} className=" h-16 w-20" alt="" />{" "}
            </div>
            <div className="text-black font-semibold text-3xl px-4  py-5">
              DIAGNOSTICS
            </div>

            <style>
              {`
        @keyframes fade-right-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .animate-fade-right-in {
            animation: fade-right-in 3s ease-in-out forwards;
          }
        `}
            </style>
          </div>
        </a>

        {/* NINTH HORIZONTAL DIV*/}
        <a href="#shelter">
          <div
            className="bg-sky-200 h-20 w-3/5 border-4 rounded-r-full border-sky-950 
ml-20 flex duration-1000 ease-in-out justify-evenly m-10 transition delay-150 hover:-translate-y-1 
hover:scale-110 hover:cursor-pointer opacity-0 animate-fade-left-in"
          >
            <div className="text-black font-semibold text-3xl px-4 py-5">
              ANIMAL SHELTER
            </div>
            <div className="ml-12">
              <img src={kuttashelter} className="h-16 w-20" alt="" />
            </div>

            <style>
              {`@keyframes fade-left-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-fade-left-in {
  animation: fade-left-in 3s ease-in-out forwards;
}
        `}
            </style>
          </div>
        </a>

        {/* TENTH HORIZONTAL DIV*/}
        <a href="education">
          <div
            className="bg-sky-200 h-20 w-3/5 border-4 rounded-l-full border-sky-950 
ml-96 flex  justify-evenly m-10 transition ease-in-out delay-150 hover:-translate-y-1 
hover:scale-110 duration-1000 hover:cursor-pointer opacity-0 animate-fade-right-in"
          >
            <div>
              <img src={newed} className=" h-16 w-20" alt="" />{" "}
            </div>
            <div className="text-black font-semibold text-3xl px-4  py-5">
              HUMANE EDUCATION PROGRAM
            </div>

            <style>
              {`
        @keyframes fade-right-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .animate-fade-right-in {
            animation: fade-right-in 3s ease-in-out forwards;
          }
        `}
            </style>
          </div>
        </a>
      </div>

      {/*  HORIZONTAL DIV ENDING*/}

      {/*  VERTICAL DIV STARTING*/}
      <div className=" flex flex-col items-center">
        {/* FIRST VERTICAL DIV*/}
        <div id="birth" className=" flex flex-row bg-slate-200 w-3/4 m-6">
          <div className="bg-sky-200 text-black text-bold tracking-wider font-black text-4xl p-24 w-4/12 inline-block ">
            <h1 className="mt-3 mb-4">ANIMAL</h1>
            <h1 className="mt-3 mb-4">BIRTH</h1>
            <h1 className="mt-3">CONTROL</h1>
          </div>
          <div className="inline-block w-5/12 ">
            <img src="https://bluecrossofindia.org/images/ABC_1.png" className="h-full" alt="" />
          </div>
          <div className="bg-sky-950 text-white p-24 w-2/5 text-lg ">
            As an NGO dedicated to animal birth control,
            <br /> we have made significant strides in curbing the stray animal
            population.
            <br /> Our efforts include conducting spaying and neutering
            campaigns,
            <br />
            reaching out to communities for awareness, and providing medical
            care to countless animals in need. Through partnerships <br />
            with local veterinary clinics and passionate volunteers, we've
            successfully sterilized numerous stray animals, .
          </div>
        </div>
        {/* SECOND HORIZONTAL DIV*/}
        <div id="rescue" className=" flex flex-row bg-slate-200 w-3/4 m-6">
          <div className="bg-sky-200 text-black text-bold tracking-wider font-black text-4xl p-24 w-4/12 inline-block ">
            <h1 className="mt-3 mb-4">RESCUE</h1>
            <h1 className="mt-3 mb-4">OF </h1>
            <h1 className="mt-3 mb-4">DISTRESSED</h1>
            <h1 className="mt-3 mb-4">ANIMALS</h1>
            <br />
            <br />
            <br />
            <h1 className="mt-3 mb-4">23451</h1>
            <h1 className="mt-3 mb-4 text-3xl">RESCUES</h1>
          </div>
          <div className="inline-block w-5/12 ">
            <img src={rescueanimal} className="h-full" alt="" />
          </div>
          <div className="bg-sky-950 text-white p-24 w-2/5 text-lg ">
            Our NGO is committed to rescuing distressed animals in dire
            situations. Our dedicated team of volunteers responds promptly to
            distress calls, providing immediate medical attention and safe
            shelter. We've successfully saved numerous animals from perilous
            situations, rehabilitating them back to health. Through our
            collective efforts, we continue to be a lifeline for animals in
            need, offering them a chance at a brighter future.
          </div>
        </div>
        {/* THIRD HORIZONTAL DIV*/}
        <div id="foster" className=" flex flex-row bg-slate-200 w-3/4 m-6">
          <div className="bg-sky-200 text-black text-bold tracking-wider font-black text-4xl p-24 w-4/12 inline-block ">
            <h1 className="mt-3 mb-4">ADOPTION</h1>
            <h1 className="mt-3 mb-4">AND</h1>
            <h1 className="mt-3 mb-4">FOSTERING</h1>
            <br />
            <br />
            <h1 className="mt-3 mb-4">8745</h1>
            <h3 className="mt-3 mb-4 text-3xl">Adoptions</h3>
            <h3 className="mt-3 mb-4 text-3xl">facilitated</h3>
          </div>
          <div className="inline-block w-5/12 ">
            <img src={Adopt} className="h-full" alt="" />
          </div>
          <div className="bg-sky-950 text-white p-24 w-2/5 text-lg ">
            Our NGO has facilitated over 500 adoptions, finding forever homes
            for rescued animals. Additionally, our fostering program has
            provided temporary care and rehabilitation for more than 300 animals
            in need. This initiative not only ensures the well-being of the
            animals but also creates a nurturing environment, leading to
            successful, permanent placements. We're proud to have made a
            positive impact on so many lives.
          </div>
        </div>
        {/* FOURTH HORIZONTAL DIV*/}
        <div id="special" className=" flex flex-row bg-slate-200 w-3/4 m-6">
          <div className="bg-sky-200 text-black text-bold tracking-wider font-black text-4xl p-24 w-4/12 inline-block ">
            <h1 className="mt-3 mb-4">SPECIAL</h1>
            <h1 className="mt-3 mb-4">RESCUES </h1>
            <h1 className="mt-3 mb-4">AND</h1>
            <h1 className="mt-3 mb-4">DISASTER</h1>
            <h1 className="mt-3 mb-4">RELIEF</h1>
          </div>
          <div className="inline-block w-5/12 ">
            <img src={SpecialRescues} className="h-full" alt="" />
          </div>
          <div className="bg-sky-950 text-white p-24 w-2/5 text-lg ">
            Our NGO specializes in high-risk rescues and disaster relief for
            animals. Over the past year, we've executed 30 complex rescues from
            hazardous situations. In times of natural disasters, we've provided
            emergency care and shelter to over 1000 animals in affected areas.
            These efforts, supported by a dedicated team and generous donors,
            have saved countless lives and demonstrated our unwavering
            commitment to animal welfare in times of crisis.
          </div>
        </div>
        {/* FIFTH HORIZONTAL DIV*/}
        <div id="hospital" className=" flex flex-row bg-slate-200 w-3/4 m-6">
          <div className="bg-sky-200 text-black text-bold tracking-wider font-black text-4xl p-24 w-4/12 inline-block ">
            <h1 className="mt-3 mb-4">ANIMAL</h1>
            <h1 className="mt-3 mb-4">HOSPITAL</h1>
            <br />
            <br />
            <h1 className="mt-3 mb-4 font-black text-4xl">8+</h1>
            <h1 className="mt-3 mb-4 text-2xl">daily-admissions</h1>
            <br />
            <br />
            <h1 className="mt-3 mb-4">Treatment and Rehabilitation Section</h1>
            <h1 className="mt-3 mb-4 text-2xl">Rabies Isolation</h1>
            <h1 className="mt-3 mb-4 text-2xl">Puppy Treatment</h1>
            <h1 className="mt-3 mb-4 text-2xl">Adult Dog Treatment</h1>
            <h1 className="mt-3 mb-4 text-2xl">Kitten Treatment</h1>
            <h1 className="mt-3 mb-4 text-2xl"> Adult Cat Treatment</h1>
          </div>
          <div className="inline-block w-5/12 ">
            <img src={animalhosp} className="h-full" alt="" />
          </div>
          <div className="bg-sky-950 text-white p-24 w-2/5 text-lg ">
            Our state-of-the-art animal hospital has provided critical care to
            over 5,000 animals in the past year. Equipped with modern facilities
            and staffed by skilled veterinarians, we offer a wide range of
            medical services, from routine check-ups to complex surgeries. Our
            hospital has maintained a remarkable 95% recovery rate, a testament
            to our commitment to the well-being of every patient that comes
            through our doors.
            <br />
            <br />
            <br />
            Operation <br />
            Two Small Animal OTs for Dogs <br />
            One Small Animal OT for Cats <br />
            One Large Animal OT. <br /> <br />
            Sanitation: <br />
            Daily Cleaning, Deep Disinfection, Fumigation, Blow Torching, High
            Pressure Cleaning (to elaborate)
          </div>
        </div>
        {/* SIXTH HORIZONTAL DIV*/}
        <div id="mobile" className=" flex flex-row bg-slate-200 w-3/4 m-6">
          <div className="bg-sky-200 text-black text-bold tracking-wider font-black text-4xl p-24 w-4/12 inline-block ">
            <h1 className="mt-3 mb-4">MOBILE</h1>
            <h1 className="mt-3 mb-4">HOSPITAL</h1>
            <h1 className="mt-3 mb-4">FOR</h1>
            <h1 className="mt-3 mb-4">STREET ANIMALS</h1>
            <br />
            <br />

            <h3 className="mt-3 mb-4 text-3xl">a paradigm</h3>
            <h3 className="mt-3 mb-4 text-3xl">shift</h3>
            <h3 className="mt-3 mb-4 text-3xl">in</h3>
            <h3 className="mt-3 mb-4 text-3xl">street animal</h3>
            <h3 className="mt-3 mb-4 text-3xl">healthcare</h3>
          </div>
          <div className="inline-block w-5/12 ">
            <img src={mobhosp} className="h-1/2 " alt="" />
          </div>
          <div className="bg-sky-950 text-white p-24 w-2/5 text-lg ">
            In March 2022 we launched India's first fully equipped mobile
            hospital for on-site treatment of street animals delivering a
            paradigm shift in how street animal health is managed - yet again
            being the torchbearer for others to follow. It is equipped with an
            air conditioned and full feature operation theatre, on-board oxygen,
            catching nets and even spacious boarding space for two animals.
          </div>
        </div>
        {/* SEVENTH HORIZONTAL DIV*/}
        <div id="clinic" className=" flex flex-row bg-slate-200 w-3/4 m-6">
          <div className="bg-sky-200 text-black text-bold tracking-wider font-black text-4xl p-24 w-4/12 inline-block ">
            <h1 className="mt-3 mb-4">ANIMAL</h1>
            <h1 className="mt-3 mb-4">OUTPATIENT</h1>
            <h1 className="mt-3 mb-4">CLINIC</h1>

            <br />
            <br />

            <h3 className="mt-3 mb-4 text-3xl">9AM TO</h3>
            <h3 className="mt-3 mb-4 text-3xl">4.30PM</h3>
            <h3 className="mt-3 mb-4 text-3xl">365</h3>
            <h3 className="mt-3 mb-4 text-3xl">days</h3>
            <h3 className="mt-3 mb-4 text-3xl">Clinic</h3>
          </div>
          <div className="inline-block w-5/12 ">
            <img src={aniclinic} className="h-full" alt="" />
          </div>
          <div className="bg-sky-950 text-white p-24 w-2/5 text-lg ">
            Our animal outpatient clinic serves as a vital resource for pet
            owners and strays alike. With over 3,000 visits in the past year, we
            offer essential veterinary services such as vaccinations, check-ups,
            and minor procedures. Our dedicated team of experienced
            veterinarians ensures compassionate and expert care for every
            patient. The clinic plays a pivotal role in promoting responsible
            pet ownership and the overall health of the community's animals.
          </div>
        </div>
        {/* EIGTH HORIZONTAL DIV*/}
        <div id="diagnostics" className=" flex flex-row bg-slate-200 w-3/4 m-6">
          <div className="bg-sky-200 text-black text-bold tracking-wider font-black text-4xl p-24 w-4/12 inline-block ">
            <h1 className="mt-3 mb-4">DIAGNOSTICS</h1>
            <br />
            <br />

            <h3 className="mt-3 mb-4 text-3xl">state-of-th-art</h3>
            <h3 className="mt-3 mb-4 text-3xl">diagnostics</h3>
            <h3 className="mt-3 mb-4 text-3xl">equipments</h3>
          </div>
          <div className="inline-block w-5/12 ">
            <img src={diagnos} className="h-1/2 " alt="" />
          </div>
          <div className="bg-sky-950 text-white p-24 w-2/5 text-lg ">
            - Cutting-edge technology for precise diagnostics <br />
            - Over 2,000 diagnostic tests conducted annually <br />
            - Comprehensive services including bloodwork and imaging <br />
            - Specialized screenings for specific conditions <br />
            - Swift and accurate diagnosis for prompt treatment <br />
            - Skilled technicians and veterinarians ensure accuracy <br />
            - Commitment to animal welfare through advanced diagnostics <br />
            - Continual investment in technology for improved assessments <br />
            - Integral part of providing top-tier care to our animal patients.{" "}
            <br />
          </div>
        </div>
        {/* NINTH HORIZONTAL DIV*/}
        <div id="shelter" className=" flex flex-row bg-slate-200 w-3/4 m-4">
          <div className="bg-sky-200 text-black text-bold tracking-wider font-black text-4xl p-24 w-4/12 inline-block ">
            <h1 className="mt-3 mb-4">ANIMAL</h1>
            <h1 className="mt-3 mb-4">SHELTERS</h1>
            <h1 className="mt-3 mb-4">500+</h1>

            <h3 className="mt-3 mb-4 text-3xl">residents</h3>
            <h3 className="mt-3 mb-4 ">2</h3>
            <h3 className="mt-3 mb-4 text-3xl">locations</h3>
          </div>
          <div className="inline-block w-5/12 ">
            <img src={shelter} className="h-full " alt="" />
          </div>
          <div className="bg-sky-950 text-white p-24 w-2/5 text-lg ">
            Our animal shelter provides a safe haven for over 300 animals
            annually. With spacious, clean facilities and a caring staff , we
            offer a temporary home for abandoned, abused, and neglected animals.
            Our dedicated team works tirelessly to ensure each resident receives
            proper nutrition, exercise, and medical attention. Through adoption
            drives and outreach efforts, we successfully find loving forever
            homes for hundreds of animals in need, creating a brighter future
            for them.
          </div>
        </div>
        {/* TENTH HORIZONTAL DIV*/}
        <div id="education" className=" flex flex-row bg-slate-200 w-3/4 m-6">
          <div className="bg-sky-200 text-black text-bold tracking-wider font-black text-4xl p-24 w-4/12 inline-block ">
            <h1 className="mt-3 mb-4">HUMANE</h1>
            <h1 className="mt-3 mb-4">EDUCATION</h1>
            <h1 className="mt-3 mb-4">PROGRAMS</h1>
            <br />
            <br />
            <h3 className="mt-3 mb-4 text-2xl">
              “Teaching a child not to step on a caterpillar is as valuable to
              the child as it is to the caterpillar.”
            </h3>
            <h3 className="mt-3 mb-4 text-3xl">-Bradley Miller</h3>
          </div>
          <div className="inline-block w-5/12 ">
            <img src={education} className="h-full" alt="" />
          </div>
          <div className="bg-sky-950 text-white p-24 w-2/5 text-lg ">
            Being compassionate to animals is a wonderful trait to have in every
            human being. At impressionable ages, it is imperative that children
            are made aware of the importance of being compassionate to animals.
            Every human can prevent animal cruelty, care for and protect the
            ecosystem we live in that animals are an integral part of. Such an
            awareness when inculcated early, will stay with them throughout
            their lives.
          </div>
        </div>
      </div>
      {/*  VERTICAL DIV ENDING*/}
    </>
  );
}

export default Whatwedo;
