import React from "react";

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center p-8 max-w-3xl mx-auto">
      <h2 className="text-blue-500 text-lg font-semibold mb-2">Contact Me</h2>
      <p className="text-center text-sm text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <form className="w-full space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 border-b border-gray-400">
            <label className="text-xs text-gray-500">Name</label>
            <input
              type="text"
              className="w-full bg-transparent focus:outline-none p-1"
              placeholder="Your Name"
            />
          </div>
          <div className="flex-1 border-b border-gray-400">
            <label className="text-xs text-gray-500">Email</label>
            <input
              type="email"
              className="w-full bg-transparent focus:outline-none p-1"
              placeholder="Your Email"
            />
          </div>
        </div>

        <div className="border-b border-gray-400">
          <label className="text-xs text-gray-500">Message</label>
          <textarea
            className="w-full bg-transparent focus:outline-none p-1 h-24"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white text-sm px-6 py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
