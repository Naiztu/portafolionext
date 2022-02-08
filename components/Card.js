export default function Card({ image, title, descrip, anim, link }) {
  return (
    <>
    <span
      className="w-11/12 md:w-5/12 xl:w-3/12 mx-10 md:mx-4 mb-20 md:mb-10 rounded-lg overflow-hidden transition ease-in-out  duration-500  hover:scale-105 shadow-black shadow-sm cursor-pointer"
      data-aos={anim}
    >
      <div className="bg-white h-[500px]">
        <img
          src={image}
          alt={title}
          className="w-full object-none object-center h-1/2"
        />
        <div className="flex flex-col justify-center h-1/2">
          <div className="mx-auto text-center w-11/12">
            <h3>
              <div className="flex mx-auto">
              <a
                href={link}
                className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        border-b-2
                        border-transparent
                        hover:border-solid
                        hover:border-b-neutral-600
                        hover:text-neutral-600
                        mx-auto
                        px-4
                        "
              >
                {title}
              </a>
              </div>
            </h3>
            <p className="text-base text-body-color leading-relaxed mb-7">
              {descrip}
            </p>
            <a
              href={link}
              className="
                     inline-block
                     py-2
                     px-7
                     rounded-full
                     text-base text-body-color
                     font-medium
                     bg-gray-200
                      hover:bg-gray-300 
                     transition
                     "
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </span>
    </>
  );
}
