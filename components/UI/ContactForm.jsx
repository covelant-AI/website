"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSubmissionStatus("");

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      companyName: formData.get("companyName"),
      inquiryType: formData.get("inquiryType"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        setSubmissionStatus("Your message has been submitted!");
        event.target.reset();
      } else {
        setSubmissionStatus("Error submitting your message.");
      }
    } catch (error) {
      setSubmissionStatus("Error submitting your message.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg max-lg:mx-4">
      <form className="space-y-6 max-lg:px-2 w-auto" onSubmit={handleSubmit}>
        <div>
          <label className="block text-black font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Alex Johnson"
            className="w-full pr-40 max-sm:pr-10 pl-4 py-4 text-black border border-gray-200 shadow-sm rounded-2xl focus:outline-none focus:ring-1 focus:ring-teal-100"
          />
        </div>

        <div>
          <label className="block text-black font-medium font-semibold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="alex.johnson@email.com"
            className="w-full text-black px-4 py-4 border border-gray-200 shadow-sm rounded-2xl focus:outline-none focus:ring-1 focus:ring-teal-100"
          />
        </div>

        <div>
          <label className="block text-black font-medium font-semibold">Company Name <span className='font-medium text-gray-400'>(if applicable)</span></label>
          <input
            type="text"
            name="companyName"
            placeholder="NovaTech Solutions"
            className="w-full px-4 py-4 border border-gray-200 text-black shadow-sm rounded-2xl focus:outline-none focus:ring-1 focus:ring-teal-100"
          />
        </div>

        <div>
          <label className="block text-black font-medium font-semibold">Inquiry Type</label>
          <select
            className="w-full text-black px-4 py-4 shadow-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-teal-100 appearance-none"
            name="inquiryType"
          >
            <option className='text-gray-400'>None Selected</option>
            <option>General Inquiry</option>
            <option>Partnership</option>
            <option>Support</option>
          </select>
        </div>

        <div>
          <label className="block text-black font-medium font-semibold">Your Message</label>
          <textarea
            placeholder="Type your message"
            name="message"
            className="w-full min-h-[258px] border border-gray-200 text-black shadow-sm px-4 py-2 rounded-2xl focus:outline-none focus:ring-1 focus:ring-teal-100"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full text-2xl font-semibold py-3 rounded-2xl transition ${
            loading ? "bg-teal-300 cursor-not-allowed" : "bg-[#42B6B1] hover:bg-teal-600 text-white"
          }`}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin mr-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Sending...
            </div>
          ) : (
            "Send"
          )}
        </button>

        {submissionStatus && (
          <div className="text-center text-sm text-green-600">
            {submissionStatus}
          </div>
        )}
      </form>
    </div>
  );
}
