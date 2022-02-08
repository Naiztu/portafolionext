export default function Custom404() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-body bg-repeat ">
        <img src="/assets/404.svg" className=" w-7/12 md:w-5/12" alt="Error 404"></img>
        <p className="text-black italic w-11/12 text-center">
          {"Sorry, but you are looking for something that isn't here."}
        </p>
      </div>

    </div>
  );
}
