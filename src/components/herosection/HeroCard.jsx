import Link from "next/link";

const HeroCard = ({ heroSlider, currentIndex }) => {
  return (
    <div className="w-full h-full flex">
      {heroSlider.map((slide, i) => {
        return (
          <Link href={`/${slide.id}`} className={`relative  min-w-full `}>
            <div className="relative h-[600px]">
              <img
                src={`${heroSlider[currentIndex].social_image}`}
                alt=""
                className="rounded-lg size-full object-cover "
              />
            </div>
            <div className="bg-white absolute bottom-3 left-3 p-10 w-1/2 rounded-lg">
              <span className="bg-blue-600 px-4 py-1 rounded-lg  ">
                Technology
              </span>
              <p className="text-4xl flex flex-wrap my-4 ">
                {" "}
                Grid system for better Design User Interface
              </p>
              <p className="text-gray-500">August 20, 2022</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HeroCard;
