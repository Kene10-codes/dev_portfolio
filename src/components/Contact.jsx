import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {styles} from '../styles';
import {slideIn} from '../utils/motion';
import {SectionContainer} from '../hoc';

function Contact () {
  const formRef = useRef ();
  const [form, setForm] = useState ({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState (false);

  const handleChange = e => {
    const {name, value} = e.target;
    setForm ({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault ();

    emailjs
      .send (
        'service_gnuvquj',
        'template_6wm7qxg',
        {
          from_name: form.name,
          to_name: 'Kenechukwu',
          from_email: form.email,
          to_email: 'nwobodokenechukwu2@gmail.com',
          message: form.message,
        },
        '5j7tNwF6Er13bfjF3'
      )
      .then (
        () => {
          setLoading (false);
          alert ('Thank you. I will get back to you ASAP');
          setForm ({
            name: '',
            email: '',
            message: '',
          });
        },
        error => {
          setLoading (false);
          console.log (error);
          alert ('Something went wrong!');
        }
      );
  };

  const {name, email, message} = form;
  return (
    <div className="flex justify-center">

      <motion.div
        variants={slideIn ('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col  gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email Address</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              row="7"
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Have a message for us??"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl shadow-primary"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </motion.div>
    </div>
  );
}

export default SectionContainer (Contact, 'contact');
