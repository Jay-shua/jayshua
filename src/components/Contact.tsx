import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import Confetti from "react-confetti";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Simulate send
    setShowConfetti(true);
    reset();
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 w-5/6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-organic text-center mb-12"
        >
          Contact Me
        </motion.h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded dark:bg-charcoal dark:border-gray-600"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className="w-full p-2 border rounded dark:bg-charcoal dark:border-gray-600"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 border rounded dark:bg-charcoal dark:border-gray-600"
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3 mx-auto flex bg-forest-green text-white rounded-full"
          >
            Send Message
          </button>
        </form>
        {showConfetti && <Confetti />}
        <div className="mt-8 text-center">
          <div className="flex flex-row gap-x-3 justify-center items-center">
            <a href="mailto:jayshua.designs@gmail.com" className="block mb-2">
            jayshua.designs@gmail.com
          </a>
          <a
            href="https://github.com/jay-shua"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/oluwasemilore-atoro-tywo/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2"
          >
            LinkedIn
          </a>
          </div>
          
          <a
            href="/src/assets/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-earth-brown text-white rounded-full"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
