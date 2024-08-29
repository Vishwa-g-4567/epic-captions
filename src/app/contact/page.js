import PageHeaders from "@/components/PageHeaders";

export default function ContactPage() {
  return (
    <div>
      <PageHeaders h1Text={"Have you any Question?"} h2Text={"Contact Me"} />

      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-white/20 border border-gray-50 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-300"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-white/20 border border-gray-50 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-300"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            for="phone"
            className="block mb-2 text-sm font-medium text-white"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-white/20 border border-gray-50 text-white text-sm rounded-lg w-full p-2.5 block placeholder-gray-300"
            placeholder="87658 25436"
            pattern="[0-9]{5} [0-9]{5}"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-white/20 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-300"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="subject"
            className="block mb-2 text-sm font-medium text-white"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="bg-white/20 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-300"
            placeholder="Your Subject"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            className="bg-white/20 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-300"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label for="remember" className="ms-2 text-sm font-medium text-white">
            I agree with the{" "}
            <a href="#" className="text-blue-500 hover:underline">
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
