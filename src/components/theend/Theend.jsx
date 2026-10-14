
import React from 'react'

const Theend = () => {
  return (
    <footer className="bg-blue-950 text-white px-4 pt-12
                       sm:px-6 sm:pt-14
                       md:px-8 md:pt-16
                       lg:px-12 lg:pt-20">

      {/* Footer Main Grid */}
      <div className="grid grid-cols-1 gap-8
                      sm:grid-cols-2 sm:gap-8
                      lg:grid-cols-4 lg:gap-10">

        {/* Logo and Description */}
        <div>
          <img
            src="/header/logo.svg"
            alt="Ecomas logo"
            className="w-32 sm:w-36 md:w-40"
          />

          <p className="pt-4 text-sm leading-6 text-gray-300
                        md:text-base">
            We are a team of designers and developers that create
            high quality WordPress websites.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-5">
            <img
              src="/facebook/facebook1.png"
              alt="Facebook"
              className="h-7 w-7 rounded-lg border object-cover
                         cursor-pointer"
            />

            <img
              src="/facebook/facebook2.svg"
              alt="Social media"
              className="h-7 w-7 rounded-lg border object-contain
                         cursor-pointer"
            />

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center
                         rounded-lg border text-sm font-bold
                         hover:text-amber-400"
            >
              in
            </a>
          </div>
        </div>

        {/* My Account */}
        <div>
          <h2 className="pb-4 font-mulish font-bold text-base md:text-lg">
            My Account
          </h2>

          <ul className="list-disc space-y-3 pl-5 text-sm text-gray-300">
            <li className="cursor-pointer hover:text-amber-400">
              Track Orders
            </li>
            <li className="cursor-pointer hover:text-amber-400">
              Shipping
            </li>
            <li className="cursor-pointer hover:text-amber-400">
              Wishlist
            </li>
            <li className="cursor-pointer hover:text-amber-400">
              Order History
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h2 className="pb-4 font-mulish font-bold text-base md:text-lg">
            Information
          </h2>

          <ul className="list-disc space-y-3 pl-5 text-sm text-gray-300">
            <li className="cursor-pointer hover:text-amber-400">
              Our Story
            </li>
            <li className="cursor-pointer hover:text-amber-400">
              Careers
            </li>
            <li className="cursor-pointer hover:text-amber-400">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-amber-400">
              Terms &amp; Conditions
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="pb-2 font-mulish font-bold text-base md:text-lg">
            Talk To Us
          </h2>

          <p className="pt-3 text-sm text-gray-300">
            Got Questions? Call Us
          </p>

          <p className="pt-2 text-xl font-bold sm:text-2xl">
            +670 413 90 762
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 pt-6">
            <img
              src="/mail/mail.svg"
              alt="Email"
              className="h-5 w-5 object-contain"
            />
            <p className="break-all text-sm text-gray-300">
              cartly@gmail.com
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 pt-4">
            <img
              src="/mail/location.svg"
              alt="Location"
              className="mt-1 h-5 w-5 shrink-0 object-contain"
            />
            <p className="text-sm leading-6 text-gray-300">
              79 Sleepy Hollow St. Jamaica,
              <br />
              New York 1432
            </p>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 py-5
                      text-center text-sm text-gray-300
                      md:mt-14 md:flex md:items-center
                      md:justify-between md:text-left">

        <p>
          © All Rights Reserved | By{" "}
          <span className="font-semibold text-white">Ecomas</span>
        </p>

        {/* Payment Methods */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3
                        md:mt-0 md:justify-end">
          <img
            src="/paypal/pay1.png"
            alt="Payment method 1"
            className="h-6 w-auto object-contain sm:h-7"
          />
          <img
            src="/paypal/pay2.png"
            alt="Payment method 2"
            className="h-6 w-auto object-contain sm:h-7"
          />
          <img
            src="/paypal/pay3.png"
            alt="Payment method 3"
            className="h-6 w-auto object-contain sm:h-7"
          />
          <img
            src="/paypal/pay4.png"
            alt="Payment method 4"
            className="h-6 w-auto object-contain sm:h-7"
          />
        </div>

      </div>

    </footer>
  )
}

export default Theend
