/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (formdata) => {
    window.location.href = `mailto:boulatekwamboka@gmail.com?subject=${formdata.subject}&body=Hello Boulate, My name is ${formdata.name}. ${formdata.message} (${formdata.email})`;
  }

  return (
    <div className="section-component-div">
      <h3 className="section-header">Contact</h3>
      <div>
        <h4 className="text-4xl font-semibold text-center">
          I've got what you need.{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Let's Talk</span>
        </h4>
        <div className="space-y-10 py-10">
          <div className="contact-div">
            <PhoneIcon className="contact-icon" />
            <p className="text-2xl">+2545678905678</p>
          </div>
          <div className="contact-div">
            <MapPinIcon className="contact-icon" />
            <p className="text-2xl">Nairobi, Kenya</p>
          </div>
          <div className="contact-div">
            <EnvelopeIcon className="contact-icon" />
            <p className="text-2xl">boulatekwamboka@gmail.com</p>
          </div>
        </div>

        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input 
            {...register('name')}
            type="text" className="contact-input" placeholder="Name" />
            <input 
            {...register('email')}
            type="email" className="contact-input" placeholder="Email" />
          </div>
          <input 
          {...register('subject')}
          type="text" placeholder="Subject" className="contact-input" />
          <textarea 
          {...register('message')}
          placeholder="Message" className="contact-input" />
          <button
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
