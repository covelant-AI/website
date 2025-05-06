"use client";
import { useState } from "react";

export default function ContactForm(){
    const [submissionStatus, setSubmissionStatus] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Gather form values using FormData
        const formData = new FormData(event.target);
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          companyName: formData.get("companyName"),
          inquiryType: formData.get("inquiryType"),
          message: formData.get("message"),
        };
        console.log("Form data:", data);
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
            event.target.reset();
          } else {
            console.error("Failed to submit form:", response.statusText);
            setSubmissionStatus("Error submitting your message.");
          }
        } catch (error) {
          console.error("Error while submitting the form:", error);
          setSubmissionStatus("Error submitting your message.");
        }
      };

   return  <>
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg max-lg:mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-black font-semibold">Full Name</label>
              <input 
                type="text"
                name="name" 
                placeholder="Alex Johnson" 
                className="w-full px-4 py-4 text-black border border-gray-200 shadow-sm rounded-2xl focus:outline-none focus:ring-1 focus:ring-teal-100"
              />
            </div>

            <div>
              <label className="block text-black font-medium font-semibold">Email</label>
              <input 
                type="email"
                name="email" 
                placeholder="alex.johnson@email.com" 
                className="w-full text-black px-4 py-4 border border-gray-200 shadow-sm  rounded-2xl focus:outline-none focus:ring-1 focus:ring-teal-100"
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
              <select className="w-full text-black px-4 py-4 shadow-sm  border border-gray-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-teal-100" name="inquiryType">
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
                className="w-full min-h-[258px] border border-gray-200 text-black shadow-sm px-4 py-2 border rounded-2xl focus:outline-none focus:ring-1 focus:ring-teal-100"
                rows="4"
              ></textarea>
            </div>

            <button className="w-full bg-[#42B6B1] text-2xl text-white font-semibold py-3 rounded-2xl hover:bg-teal-600 transition">
              Send
            </button>
            {submissionStatus && (
              <div className="text-center text-sm text-green-600">
                {submissionStatus}
              </div>
            )}
          </form>  
        </div>
    </>
}