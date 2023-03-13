import HeroSection from '@/components/HeroSection'
import React, { useState } from 'react'
import { MdLocationPin, MdCall, MdEmail } from "react-icons/md";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router';
import slide1 from '../../assets/bg1.jpg'
import slide2 from '../../assets/bg2.jpg'

const ContactUs = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [auth, setAuth] = useState(true)
  // const [recaptchaToken, setRecaptchaToken] = useState('');

  const router = useRouter()

  const intialValues = {
    email: "", // for title field
    fullName: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required().label('Email Address'),
    fullName: Yup.string().required().label('Full Name'),
    subject: Yup.string().required().label('Subject'),
    message: Yup.string().required().label('Message'),
  });


  const onSubmit = (data, { resetForm }) => {
    setIsSubmitting(true)
    const emailBody = `Name: ${data.fullName}\n\n${data.message}`;
    const emailUrl = `mailto:${data.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailBody)}`;
    router.push(`${emailUrl}`, "_blank")
  };

  return (

    <>

      <HeroSection slide1={slide1} slide2={slide2} headerText={"Contact Us"} />

      <section className='section-pad container mx-auto'>
        <h1 className='headerText'>Contact Us</h1>


        <section className='container mx-auto flex lg:flex-row flex-col items-center relative'>
          <div className='lg:w-1/2 space-y-10 p-6 lg:p-16 xl:p-20'>
            <div className='flex items-center gap-6'>
              <MdLocationPin className='text-axis text-3xl flex-none' />
              <div>
                <h2 className='mini-heading'>Find us at Office</h2>
                <p className='subtitles'>                            115 Office Court Building, Oud Metha P.O.Box 23240 Dubai, Lorem Ipsum Emirates.</p>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <MdCall className='text-axis text-3xl' />
              <div>
                <h2 className='mini-heading'>Give us a call</h2>
                <p className='subtitles'>+993 4 000 9000</p>
                <p className='subtitles'>+901 4 009 9000</p>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <MdEmail className='text-axis text-3xl' />
              <div>
                <h2 className='mini-heading'>Send us an Email</h2>
                <p className='subtitles'>bookings@fragrancepalacio.com</p>
              </div>
            </div>
          </div>


          <div className='lg:w-1/2 space-y-8 lg:shadow-xl p-6 lg:p-16 xl:p-20 rounded-3xl'>
            <div>
              <h2 className='text-axis mini-heading'>Send us a message</h2>
              <p className='subtitles'>You can contact us with anything related to our Products. We`ll get in touch with you as soon as possible</p>
            </div>


            <div className="space-y-4">
              <Formik
                initialValues={intialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Form>
                  <div className="my-4 md:mt-0 lg:py-1.5">
                    <label className="block text-sm">
                      <span className="text-gray-700">
                        Full Name
                      </span>
                      <Field
                        name="fullName"
                        className="block w-full mt-1 border focus:ring-0 border-slate-400 p-3 text-sm font-medium focus:border-twclip focus:outline-none focus:shadow-outline-twclip rounded"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="span"
                        className="text-red-500"
                      />
                    </label>
                  </div>

                  <div className="my-4 md:mt-0 lg:py-1.5">
                    <label className="block text-sm">
                      <span className="text-gray-700">
                        Email Address
                      </span>
                      <Field
                        type="email"
                        name="email"
                        className="block w-full mt-1 border focus:ring-0 border-slate-400 p-3 text-sm font-medium focus:border-twclip focus:outline-none focus:shadow-outline-twclip rounded"
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="text-red-500"
                      />
                    </label>
                  </div>

                  <div className="my-4 md:mt-0 lg:py-1.5">
                    <label className="block text-sm">
                      <span className="text-gray-700">
                        Subject
                      </span>
                      <Field
                        name="subject"
                        className="block w-full mt-1 border focus:ring-0 border-slate-400 p-3 text-sm font-medium focus:border-twclip focus:outline-none focus:shadow-outline-twclip rounded"
                      />
                      <ErrorMessage
                        name="subject"
                        component="span"
                        className="text-red-500"
                      />
                    </label>
                  </div>


                  <div className="my-4 md:mt-0 lg:py-1.5">
                    <label className="block text-sm">
                      <span className="text-gray-700">
                        Message
                      </span>
                      <Field
                        as="textarea"
                        rows="4"
                        name="message"
                        className="block w-full mt-1 border focus:ring-0 border-slate-400 p-3 text-sm font-medium focus:border-twclip focus:outline-none focus:shadow-outline-twclip rounded"
                      />
                      <ErrorMessage
                        name="message"
                        component="span"
                        className="text-red-500"
                      />
                    </label>
                  </div>


                  <button disabled={ isSubmitting}
                    className="btn"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <div className="flex gap-1.5 items-center justify-center">
                        Loading...
                        <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>
                      </div>
                    ) : (
                      <p>Submit</p>
                    )}
                  </button>
                </Form>
              </Formik>


            </div>
          </div>
        </section >
      </section>

    </>


  )
}

export default ContactUs