import React from 'react'
import {Link} from 'react-router-dom'
import pawsonparadelogo from '../../assets/pawsonparadelogo.png'

export default function Footer() {
    return (
        <footer class="bg-black text-white shadow-inner">
      <div class="flex p-5 justify-between">
        <div class="flex flex-1 flex-col text-center sm:flex-row items-center justify-center space-x-3">
          <div>
            <Link to="#top">
              <img class="rounded-full w-24 cursor-pointer hover:scale-110" src={pawsonparadelogo} className='h-32 w-32' alt="logo"/>
            </Link>
          </div>
          <div>
            <div class="space-y-2">
              <h3 class="text-2xl">Adopt a pet</h3>
              <div>Give life to an animal in need</div>
            </div>
          </div>
        </div>

        
        <div class="md:flex flex-col hidden text-center items-center flex-1">
          <form id="subscription-form">
          <div class="space-y-2">
            <h3 class="text-2xl">Subscribe to our newsletter</h3>
            <div class="text-md">
              Get the latest news and updates delivered straight to your inbox.
            </div>
            <div class="text-center">
              <input class="my-1 mr-2 p-2 rounded-md text-black" type="email" id="email" name="email" placeholder="Enter your email address"/>
              <div id="error-message" class="text-yellow-900 hidden">Email address is required.</div>
              <button class="bg-sky-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer  text-black py-2 px-4 rounded-md" type="submit" id="subscribe-button">
                Subscribe
              </button>
            </div>
          </div>
        </form>
        </div>
        
        

        
        
      </div>

      <div class="pt-5 pb-8 flex flex-col text-center md:hidden mt-8 items-center flex-1">
        <div class="space-y-2">
          <h3 class="text-2xl text-center">Subscribe to our newsletter</h3>
          <div class="text-md">
            Get the latest news and updates delivered straight to your inbox.
          </div>
          <div class="text-center">
            <input class="my-1 mr-2 p-2 rounded-md" type="email" id="email" name="email" placeholder="Enter your email address" />
            <button class="bg-yellow-800 hover:bg-amber-100 text-white py-2 px-4 rounded-md" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div id="copyright">
        <p>
          Copyright © <span id="date">2023</span> [PAWSONPARADE] All Right Reserved.
        </p>
      </div>
    </footer>
    );
}