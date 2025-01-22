'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mldgrvbl");
  
  if (state.succeeded) {
    return <p className="text-white">Thanks for reaching out!</p>;
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border border-violet-500 bg-black/20 text-white shadow-sm focus:border-violet-400 focus:ring focus:ring-violet-400 focus:ring-opacity-50"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm"
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
          required
          className="mt-1 block w-full rounded-md border border-violet-500 bg-black/20 text-white shadow-sm focus:border-violet-400 focus:ring focus:ring-violet-400 focus:ring-opacity-50"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-violet-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-violet-600 hover:to-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  );
}