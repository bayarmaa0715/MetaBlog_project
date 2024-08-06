export default function Contact() {
  return (
    <main className="md:px-[330px] px-5 mb-20">
      <div className="grid gap-5">
        <h1 className="font-semibold text-2xl">Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="flex justify-between gap-3">
          <div className="border-[1px] p-4 rounded-lg w-1/2 ">
            <h1 className="font-semibold text-2xl">Address</h1>
            <p>1328 Oak Ridge Drive,Saint Louis, Missouri</p>
          </div>
          <div className="border-[1px] p-4 rounded-lg w-1/2">
            <h1 className="font-semibold text-2xl">Contact</h1>
            <p>313-332-8662 info@email.com</p>
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg grid gap-5">
          <h1>Leave a Message</h1>
          <div className="grid grid-cols-2 gap-5 ">
            {" "}
            <input
              type="text"
              name=""
              placeholder="Your Name"
              id=""
              className="rounded-[5px] px-5 py-2"
            />
            <input
              type="email"
              name=""
              placeholder="Your Email"
              id=""
              className="rounded-[5px] px-5 py-2"
            />
            <input
              type="text"
              name=""
              placeholder="Subject"
              id=""
              className="col-span-2 rounded-[5px] px-5 py-2"
            />
            <input
              type="text"
              name=""
              placeholder="Write a message"
              id=""
              className="col-span-2 row-span-7 rounded-[5px] px-5  placeholder:text-center 	"
            />
          </div>
          <div>
            {" "}
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white ">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
