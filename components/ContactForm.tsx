import React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full rounded-md border border-slate-600 bg-slate-800 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm p-4"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full rounded-md border border-slate-600 bg-slate-800 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm p-4"
          placeholder="Your Email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full rounded-md border border-slate-600 bg-slate-800 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm p-4"
          placeholder="Your Message"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
      >
        Send
      </button>
    </form>
  );
};