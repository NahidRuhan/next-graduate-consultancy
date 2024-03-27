"use client";

import Image from "next/image";
import banner from "@/public/assets/contact-us/Contact.jpg";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can add your logic for form submission, API calls, etc.
  };

  return (
    <div>
      <div>
        <Image className="w-full" src={banner} alt="" />
      </div>
      <div className="my-10">
        <div>
          <h1 className="text-5xl font-bold my-10 text-center justi">
            {/* <AiFillAliwangwang></AiFillAliwangwang> */}
            Just a Call Away
          </h1>
        </div>
        <div className="lg:flex lg:justify-around">
          <div className="card lg:card-side bg-base-100 shadow-xl rounded-box flex gap-3">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4703659968923!2d90.4233264202831!3d23.796931647538397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c767f5f1e359%3A0xe2c21d160dda922f!2sMostafa%20Arcade!5e0!3m2!1sen!2sbd!4v1707638616526!5m2!1sen!2sbd"
                width="400"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="card-body bg-logoRed text-white rounded-btn">
              <h2 className="card-title text-white">Head Office:</h2>
              <p>
                House 192, Road 2, Avenue 3,<br></br>
                Mirpur DOHS, Dhaka 1216
              </p>

              <h2 className="text-white font-bold">Call Us at:</h2>
              <p>
                (+880)1330993330 <br></br>(+880)1330993332
              </p>
              <p>
                (+880)1330993334 <br></br>(+880)1330993335
              </p>

              <h2 className="text-white font-bold">Mail Us at:</h2>
              <p>
                info@graduateconsultancy.com <br></br>
                canada@graduateconsultancy.com
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-4 p-5 rounded-md bg-gray-100 hover:bg-red">
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto grid gap-4 p-1  hover:bd-logoRed"
            >
              <div className="md:flex md:items-center mb-4">
                <div className="md:w-1/2 px-2">
                  <input
                    type="text"
                    placeholder="Name:"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className=" px-4 py-2 form-input mt-1 w-full rounded focus:border-logoRed"
                    required
                  />
                </div>

                <div className="md:w-1/2 mt-4 md:mt-0 px-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email:"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input mt-1 w-full rounded focus:border-logoRed  px-4 py-2"
                    required
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-4 px-2">
                <div className="md:w-1/2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone:"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input mt-1 w-full rounded focus:border-logoRed  px-4 py-2"
                    required
                  />
                </div>

                <div className="md:w-1/2 mt-4 md:mt-0 px-2">
                  <select
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="form-select mt-1 w-full rounded focus:border-logoRed  px-4 py-2"
                    placeholder="Services:"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="careerCounseling">Career Counseling</option>
                    <option value="universitySelection">
                      University Selection
                    </option>
                    <option value="visaDocument">Visa Document</option>
                    <option value="studentVisa">Student Visa</option>
                    <option value="sopResumePreparation">
                      SOP|Resume Preparation
                    </option>
                    <option value="spouseVisa">Spouse Visa</option>
                    <option value="visitorVisa">Visitor Visa</option>
                    <option value="prImmigration">PR|Immigration Visa</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="bankSolvency">Bank Solvency</option>
                    <option value="airTicket">Air Ticket</option>
                    <option value="preDepartureGuidance">
                      Pre-Departure Guidance
                    </option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message:"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea mt-1 rounded w-full px-4 py-2"
                  required
                />
              </div>

              <button
                type="submit"
                style={{ marginBottom: "1.5em", marginTop: "-1em" }}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
