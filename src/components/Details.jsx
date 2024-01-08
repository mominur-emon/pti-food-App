const Details = () => {
  return (
    <>
      <div className="bg-slate-50 pb-[70px] sm:px-[2.5rem] md:hidden">
        <div className="text-center pt-10 mx-6">
          <h1 className="text-2xl font-bold">
            Deliver Food To Your Door Step|
          </h1>
          <p className="mt-2 mb-[80px]">
            Authentic Food, Quick Service, Fast Delivery
          </p>
        </div>

        <div>
          <div className="relative h-[200px] rounded-[30px] bg-orange-400 mx-2">
            <img
              src="/images/Image1.png"
              alt=""
              className="object-cover w-full h-[135%] absolute top-[-70px]  "
            />
          </div>
        </div>
      </div>
      {/* start md */}
      <div className="hidden md:flex bg-slate-50 py-[70px] md:px-[4rem]">
        <div className="bg-orange-400 w-full h-[200px] rounded-2xl flex items-center justify-end overflow-hidden">
          <div className="pl-4 pt-14 mx-6 ">
            <h1 className="text-2xl font-bold text-white">
              Deliver Food To Your Door Step|
            </h1>
            <p className="mt-2 mb-[80px] text-slate-200 text-sm">
              Authentic Food, Quick Service, Fast Delivery
            </p>
          </div>

          <div className="pr-4">
            <img src="/images/Image1.png" alt="" className=" w-[400px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
