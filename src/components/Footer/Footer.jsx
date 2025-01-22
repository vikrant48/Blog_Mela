import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'


function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-200">
                  &copy; Copyright {new Date().getFullYear()}. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-100">
                Company
              </h3>
              <ul>
                {["Features", "Pricing", "Affiliate Program", "Press Kit"].map((item) => (
                  <li className="mb-4" key={item}>
                    <Link
                      className="text-base font-medium text-gray-50 hover:text-gray-900 transition duration-200"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-100">
                Support
              </h3>
              <ul>
                {["Account", "Help", "Contact Us", "Customer Support"].map((item) => (
                  <li className="mb-4" key={item}>
                    <Link
                      className="text-base font-medium text-gray-50 hover:text-gray-900 transition duration-200"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-100">
                Legals
              </h3>
              <ul>
                {["Terms & Conditions", "Privacy Policy", "Licensing"].map((item) => (
                  <li className="mb-4" key={item}>
                    <Link
                      className="text-base font-medium text-gray-50 hover:text-gray-900 transition duration-200"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Footer