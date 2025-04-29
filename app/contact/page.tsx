"use client";
import Image from "next/image";
import { useState, FormEvent } from "react";

interface FormDataFields {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  companyName: FormDataEntryValue | null;
  inquiryType: FormDataEntryValue | null;
  message: FormDataEntryValue | null;
}

export default function ContactUsPage() {
  const [submissionStatus, setSubmissionStatus] = useState<string>("");

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        setSubmissionStatus("Your message has been submitted!");
        event.currentTarget.reset();
      } else {
        console.error("Failed to submit form:", response.statusText);
        setSubmissionStatus("Error submitting your message.");
      }
    } catch (error) {
      console.error("Error while submitting the form:", error);
      setSubmissionStatus("Error submitting your message.");
    }
  };

  return (
    <section className="relative flex justify-center items-center min-h-screen py-20 px-6 md:px-20 lg:px-40 bg-[#F9F9F9] overflow-hidden font-Figtree">
      {/* Background Gradient */}
      <div
        className="absolute w-[2083.718px] h-[1152.138px] -rotate-[9.35deg] flex-shrink-0 rounded-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(8, 113, 151, 0.08) 61.09%, rgba(0, 180, 173, 0.12) 78%, rgba(176, 199, 255, 0.40) 100%)",
          filter: "blur(50px)",
        }}
      ></div>

      <div className="relative flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-5xl">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/3 relative">
          <Image
            src="/carousel/b2.png"
            alt="Contact Us"
            layout="fill"
            className="object-cover"
          />
          <div
            className="relative text-center pt-10 font-figtree text-[26px] font-semibold leading-normal flex justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(180deg, #FFF -15.97%, #A5DFFF 126.39%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The next generation sports analytics
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-2/3 p-10 px-16">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-black font-semibold text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Alex Johnson"
                  className="w-full p-3 text-black border border-gray-200 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label className="text-black font-semibold text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="alex.johnson@email.com"
                  className="w-full p-3 text-black border border-gray-200 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-black font-semibold text-sm">
                Company Name <span className="text-gray-500">(if applicable)</span>
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="NovaTech Solutions"
                className="w-full p-3 text-black border border-gray-200 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="text-black font-semibold text-sm">
                Inquiry Type
              </label>
              <select
                name="inquiryType"
                className="w-full text-black p-3 border border-gray-200 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">None Selected</option>
                <option value="Business Inquiry">Business Inquiry</option>
                <option value="Support Request">Support Request</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-black font-semibold text-sm">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Type your message"
                className="w-full p-3 text-black border border-gray-200 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 h-28"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-4/5 bg-[#42B6B1] text-white font-semibold py-3 rounded-2xl hover:bg-teal-600 transition-all"
              >
                Send
              </button>
            </div>
            {submissionStatus && (
              <div className="text-center text-sm text-green-600">
                {submissionStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

