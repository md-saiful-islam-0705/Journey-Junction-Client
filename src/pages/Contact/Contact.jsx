import { Typewriter } from 'react-simple-typewriter';
const Contact = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
              <span className="text-3xl font-bold text-gradient bg-gradient-to-r from-violet-600 to-pink-500 text-transparent bg-clip-text">
                <Typewriter
                  words={['Contact Us']}
                  loop={false}
                  cursor={false}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <p className="text-lg mb-4">Feel free to get in touch with us!</p>
              <form className="w-full border p-4 rounded-md">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
        </div>
    );
};

export default Contact;