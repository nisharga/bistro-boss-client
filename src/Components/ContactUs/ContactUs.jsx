import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"
import bannar from "../../assets/contact/banner.jpg"
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const [state, handleSubmit] = useForm('mpwaaerp');
  return (
    <div>
       <Helmet>
            <title>Bistro Boss | Contact Us</title>
        </Helmet>
        <Cover 
            image={bannar} 
            title="CONTACT US" 
            subtitle="Would you like to try a dish"
        /> 

<div className='container px-12 py-24'>
             
                <form onSubmit={handleSubmit} className='sm:mx-0 md:mx-48'>
                    {state.succeeded ? (
                        <h2 className='relative text-3xl capitalize font-signature text-accent group top-1 text-center animate-bounce'>
                            Congress!! Message Send Successfully
                        </h2>
                    ) : (
                         <>
                            <div className='col-span-12 mb-4'>
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    placeholder='Write your email for reply (or write N/A for anonymous message send)'
                                    className='py-2 md:py-3 rounded-md w-full pl-3 border-2 border-gray-800'
                                />
                            </div>
                            <div className='col-span-12'>
                                <ValidationError
                                    prefix='Email'
                                    field='email'
                                    errors={state.errors}
                                />
                                <textarea
                                    id='message'
                                    name='message'
                                    placeholder='Write your Message'
                                    className='py-2 md:py-3 rounded-md w-full pl-3 min-h-[200px] border-2 border-gray-800'
                                />
                                <ValidationError
                                    prefix='Message'
                                    field='message'
                                    errors={state.errors}
                                />
                            </div>
                            <div className='col-span-12'>
                                <button
                                    type='submit'
                                    disabled={state.submitting}
                                    className='py-2 md:py-3 rounded-md w-full mt-4  bg-gray-800 dark:text-white scale-100 hover:scale-125 delay-75 transition-all font-semibold'
                                >
                                    Submit
                                </button>
                            </div> 
                            </>
                    )}
                </form> 
        </div>
    </div>
  )
}

export default ContactUs