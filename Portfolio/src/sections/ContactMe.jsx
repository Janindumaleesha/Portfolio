import React from 'react';

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-20 min-h-screen flex items-center"
    >
      <div className="max-w-4xl w-full bg-gray-800 rounded-2xl shadow-xl p-12 mx-auto text-gray-200">
        <h2 className="text-indigo-400 text-4xl font-extrabold mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-center text-indigo-300 mb-10 text-lg max-w-xl mx-auto">
          Feel free to reach out to discuss projects, opportunities, or just a friendly hello!
        </p>

        <form className="space-y-8 max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-5 py-4 placeholder-indigo-400 text-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-5 py-4 placeholder-indigo-400 text-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
              aria-label="Your Email"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-5 py-4 placeholder-indigo-400 text-indigo-100 resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            required
            aria-label="Your Message"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold px-14 py-4 rounded-full shadow-lg transition transform hover:scale-[1.05]"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
