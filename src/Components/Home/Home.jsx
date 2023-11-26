import React from "react";
import { Link, NavLink } from "react-router-dom";
import animal1 from "../../assets/animal1.webp";
import animal3 from "../../assets/animal3.webp";
import pillu1 from "../../assets/pillu1.avif";
import billu1 from "../../assets/billu1.jpg";
import icon from "../../assets/icon.jpg";
import icon1 from "../../assets/icon1.jpg";
import pillu2 from "../../assets/pillu2.jpg";
import pillu4 from "../../assets/pillu4.jpg";
import pillu5 from "../../assets/pillu5.jpg";
import homedog from "../../assets/homedog.jpg";
import pillu3 from "../../assets/pillu3.jpeg";
import homevideo from "../../assets/homevideo.mp4";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* VIDEO */}
      <video src={homevideo} muted autoPlay loop></video>
      {/* SUBHEADING */}
      <div className="flex flex-col items-center text-slate-600 bg-white py-16">
        <h3 className="text-3xl font-extrabold tracking-wide ">
          India’s street animals need help, rescue and rehabilitation. Help us
          Help them.
        </h3>
      </div>

      {/* ABOUT */}
      <div class=" lg:py-6 px-4 mx-auto w-screen bg-sky-950 flex-col items-center ">
        <p id="About"></p>
        <h2 class="mb-8 text-5xl tracking-tight transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer  underline-offset-4 turn-yellow-hover antialiased font-extrabold text-center text-white ">
          About Us
        </h2>
        <div className="flex flex-col items-center">
          <p class="mb-8 lg:mb-16 font-light  text-center text-white  text-2xl">
            Our mission is to provide a platform that connects animal lovers
            with pets in need of a <br />
            forever home, while also providing emergency medical care for stray
            animals <br />
            in distress. We strive to make a difference in the lives of these
            innocent creatures
            <br /> by offering options to adopt , report stray animals in need
            of immediate <br />
            assistance. Together, we can create a better world for all animals.
          </p>
        </div>
        <div className="bg-sky-950 flex justify-center">
          <a href="http://localhost/volunteer/"><button className="bg-sky-200 text-xl border border-sky-200 rounded-full p-3 text-black hover:translate-y-2 hover:border-4 hover:border-double ">
            BECOME VOLUNTEER
          </button></a>
        </div>
      </div>

      {/* DATA BLOCK */}

      <div className="flex flex-col items-center pt-2 pb-2 bg-sky-100">
        <div className="h-96 w-3/5 flex flex-col border border-transparent rounded-lg my-4">
          <div className="flex flex-row">
            <div className="w-96 h-20 bg-white font-semibold font-mono text-center text-2xl pr-0.5 tracking-wide">
              {" "}
              CHANGING THE LIVES{" "}
            </div>
            <div className="h-20 w-3/4 bg-white  font-mono font-semibold text-2xl tracking-wide">
              {" "}
              OF MOST OF STREET ANIMALS ANYWHERE
            </div>
            <div className="h-20 w-52 bg-white font-mono font-semibold text-2xl tracking-wide text-start">
              IN WORLD
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-96 h-28 bg-sky-950"></div>
            <div className="h-28 w-3/4 bg-sky-950">
              <p className="font-semibold text-2xl text-white pt-5">
                {" "}
                <span className="font-bold text-4xl text-white">15</span> Years
                in the city of Bhopal
              </p>
            </div>
            <div className="h-28 w-52 bg-sky-950"></div>
          </div>

          <div>
            <div className="bg-sky-950 h-48 w-full flex justify-around">
              <div>
                <img src={animal3} className="h-48 w-60 pt-2" alt="" />
              </div>
              <div>
                <p className="font-semibold text-2xl text-white text-center">
                  {" "}
                  <span className="font-bold text-4xl text-white">
                    21897
                  </span>{" "}
                  Rescues
                </p>
                <p className="font-semibold text-2xl text-white text-center">
                  {" "}
                  <span className="font-bold text-4xl text-white">
                    23144
                  </span>{" "}
                  Surgeries
                </p>
                <p className="font-semibold text-2xl text-white text-center">
                  {" "}
                  <span className="font-bold text-4xl text-white">10987</span>
                  Adoptions{" "}
                </p>
                <p className="font-semibold text-2xl text-white text-center">
                  {" "}
                  <span className="font-bold text-4xl text-white">
                    3452
                  </span>{" "}
                  Complex rescues
                </p>
              </div>
              <div>
                <img src={animal1} className="h-48 w-60 pt-2" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GREY ANIMALS */}
      <div className="flex justify-evenly mb-3 mt-4">
        <div className="flex flex-col items-center pb-4">
          <img src={icon} alt="" />
          <NavLink
            to="/Adopt"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-3xl text-sky-950 font-extrabold mb-5   "
                  : "text-3xl text-sky-950 font-extrabold mb-5"
              }  text-3xl text-sky-950 font-extrabold mb-5 `
            }
          >
            ADOPT
          </NavLink>
          <p className="text-lg text-slate-500 font-small">
            {" "}
            &nbsp; Even if you can't adopt please give
            <br /> loving care to a needy pup or an old
            <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; dog.
          </p>
        </div>
        <div className="flex flex-col items-center pb-4 ">
          <img src={icon1} alt="" />

          <NavLink
            to="/Foster"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-3xl text-sky-950 font-extrabold mb-5   "
                  : "text-3xl text-sky-950 font-extrabold mb-5"
              }  text-3xl text-sky-950 font-extrabold mb-5 `
            }
          >
            FOSTER
          </NavLink>

          <p className="text-lg text-slate-500 font-small">
            {" "}
            &nbsp;Our animals are lovable characters,
            <br /> but what they need most is you as a<br /> &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; best
            friend.
          </p>
        </div>
      </div>

      {/* MEET OUR FRIENDS */}
      <div
        id="meet"
        className="w-full bg-black  text-white flex justify-center py-7 text-5xl font-semibold tracking-wide"
      >
        MEET OUR FRIENDS HERE
      </div>

      {/* FIRST ROW OF CARDS */}
      <div className="bg-sky-950">
        <div className="flex justify-evenly mb-3">
          {/* first */}
          <div className=" h-80 w-80 bg-no-repeat bg-cover bg-[url('https://st2.depositphotos.com/3225059/5436/i/450/depositphotos_54369727-stock-photo-stray-dog-with-sad-eyes.jpg')]">
            <div class="w-full h-full flex  justify-center items-center backdrop-blur-md">
              <div class="card">
                <div class="content">
                  <div class="front">
                    <Link to="http://localhost/adopt/index.html">
                      <img
                        className="rounded-t-large h-full  w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer "
                        src={pillu1}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="back">
                    <div className="p-6 flex flex-col items-center">
                      <h5 className="mb-2 text-3xl font-bold leading-tight text-white ">
                        BONGO
                      </h5>

                      <p className="mb-4 text-xl text text-black  ">
                        <div className="p-1 ">DOG</div>
                        <div className="p-1">MALE</div>
                        <div className="p-1">HUSKY</div>
                        <div className="p-1">8 YEARS</div>
                       
                      </p>
                      <div className=" flex justify-center">
          <a className="bg-sky-200 text-lg border rounded-full p-1 text-black hover:translate-y-2 hover:border-4 hover:border-double " href="http://localhost/adopt/index.html">ADOPT ME</a>
        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>4
          </div>

          {/* Second */}
          <div className=" h-80 w-80 bg-no-repeat bg-cover bg-[url('https://st2.depositphotos.com/3225059/5436/i/450/depositphotos_54369727-stock-photo-stray-dog-with-sad-eyes.jpg')]">
            <div class="w-full h-full flex  justify-center items-center backdrop-blur-md">
              <div class="card">
                <div class="content">
                  <div class="front">
                    <Link to="http://localhost/adopt/index.html">
                      <img
                        className="rounded-t-large h-full  w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer "
                        src={pillu2}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="back">
                    <div className="p-6 flex flex-col items-center">
                      <h5 className="mb-2 text-3xl font-bold leading-tight text-white ">
                        GOOGLE
                      </h5>

                      <p className="mb-4 text-xl text text-black ">
                        <div className="p-1">DOG</div>
                        <div className="p-1">MALE</div>
                        <div className="p-1">Pug</div>
                        <div className="p-1">4 YEARS</div>
                      </p>
                      <div className=" flex justify-center">
                      <a className="bg-sky-200 text-lg border rounded-full p-1 text-black hover:translate-y-2 hover:border-4 hover:border-double " href="http://localhost/adopt/index.html">ADOPT ME</a>
        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third */}
          <div className=" h-80 w-80 bg-no-repeat bg-cover bg-[url('https://st2.depositphotos.com/3225059/5436/i/450/depositphotos_54369727-stock-photo-stray-dog-with-sad-eyes.jpg')]">
            <div class="w-full h-full flex  justify-center items-center backdrop-blur-md">
              <div class="card">
                <div class="content">
                  <div class="front">
                    <Link to="http://localhost/adopt/index.html">
                      <img
                        className="rounded-t-large h-full  w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer "
                        src={billu1}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="back">
                    <div className="p-6 flex flex-col items-center">
                      <h5 className="mb-2 text-3xl font-bold leading-tight text-white ">
                        RUSSIA
                      </h5>

                      <p className="mb-4 text-xl text text-black ">
                        <div className="p-1">CAT</div>
                        <div className="p-1">FEMALE</div>
                        <div className="p-1">RAGDOLL</div>
                        <div className="p-1">2.5 YEARS</div>
                      </p>
                      <div className=" flex justify-center">
                      <a className="bg-sky-200 text-lg border rounded-full p-1 text-black hover:translate-y-2 hover:border-4 hover:border-double " href="http://localhost/adopt/index.html">ADOPT ME</a>
        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND ROW OF CARDS */}
        <div className="flex justify-evenly mt-2">
          {/* first */}
          <div className=" h-80 w-80 bg-no-repeat bg-cover bg-[url('https://st2.depositphotos.com/3225059/5436/i/450/depositphotos_54369727-stock-photo-stray-dog-with-sad-eyes.jpg')]">
            <div class="w-full h-full flex  justify-center items-center backdrop-blur-md">
              <div class="card">
                <div class="content">
                  <div class="front">
                    <Link to="http://localhost/adopt/index.html">
                      <img
                        className="rounded-t-large h-full  w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer "
                        src={pillu3}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="back">
                    <div className="p-6 flex flex-col items-center">
                      <h5 className="mb-2 text-3xl font-bold leading-tight text-white ">
                        SWAGGY
                      </h5>

                      <p className="mb-4 text-xl text-black ">
                        <div className="p-1">DOG</div>
                        <div className="p-1">FEMALE</div>
                        <div className="p-1">POMERANIAN</div>
                        <div className="p-1">2 YEARS</div>
                      </p>
                      <div className=" flex justify-center">
                      <a className="bg-sky-200 text-lg border rounded-full p-1 text-black hover:translate-y-2 hover:border-4 hover:border-double " href="http://localhost/adopt/index.html"> ADOPT ME</a>
        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second */}
          <div className=" h-80 w-80 bg-no-repeat bg-cover bg-[url('https://st2.depositphotos.com/3225059/5436/i/450/depositphotos_54369727-stock-photo-stray-dog-with-sad-eyes.jpg')]">
            <div class="w-full h-full flex  justify-center items-center backdrop-blur-md">
              <div class="card">
                <div class="content">
                  <div class="front">
                    <Link to="http://localhost/adopt/index.html">
                      <img
                        className="rounded-t-large h-full  w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer "
                        src={pillu4}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="back">
                    <div className="p-6 flex flex-col items-center">
                      <h5 className="mb-2 text-3xl font-bold leading-tight text-white ">
                        SHERU
                      </h5>

                      <p className="mb-4 text-xl text text-black ">
                        <div className="p-1">DOG</div>
                        <div className="p-1">MALE</div>
                        <div className="p-1">G-Shepherd</div>
                        <div className="p-1">5 YEARS</div>
                      </p>
                      <div className=" flex justify-center">
                      <a className="bg-sky-200 text-lg border rounded-full p-1 text-black hover:translate-y-0 hover:border-0 hover:border-double " href="http://localhost/adopt/index.html">ADOPT ME</a>
        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third */}
          <div className=" h-80 w-80 bg-no-repeat bg-cover bg-[url('https://st2.depositphotos.com/3225059/5436/i/450/depositphotos_54369727-stock-photo-stray-dog-with-sad-eyes.jpg')]">
            <div class="w-full h-full flex  justify-center items-center backdrop-blur-md">
              <div class="card">
                <div class="content">
                  <div class="front">
                    <Link to="http://localhost/adopt/index.html">
                      <img
                        className="rounded-t-large h-full  w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer "
                        src={pillu5}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="back">
                    <div className="p-6 flex flex-col items-center">
                      <h5 className="mb-2 text-3xl font-bold leading-tight text-white ">
                        SKY
                      </h5>

                      <p className="mb-2 text-xl text text-black ">
                        <div className="p-1">CAT</div>
                        <div className="p-1">FEMALE</div>
                        <div className="p-1">RAGDOLL</div>
                        <div className="p-1">2.5 YEARS</div>
                      </p>
                      <div className=" flex justify-center">
                      <a className="btn bg-sky-200 text-lg border rounded-full p-1 text-black hover:translate-y-0 hover:border-0 hover:border-double " href="http://localhost/adopt/index.html">ADOPT ME</a>
                        {/* <button className="bg-sky-200 text-lg border rounded-full p-1 text-black hover:translate-y-0 hover:border-0 hover:border-double ">
          ADOPT ME
          </button></a> */}
        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
