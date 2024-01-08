import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  const [data, setData] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);

  useEffect(() => {
    const fetchData = async () => {
      const URL =
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10";

      try {
        const response = await axios.get(URL);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Update isMobile state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Check if data and data.Items are defined
  if (!data || !data.Items) {
    return <div>Loading...</div>;
  }

  // Filter popular and recommended items
  const popularItems = data.Items.filter((item) => item.IsPopular);
  const recommendedItems = data.Items.filter((item) => item.IsRecommended);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 3 : 5,
    slidesToScroll: isMobile ? 3 : 5,
  };

  return (
    <div className="bg-slate-50 pb-[70px] sm:px-[2.5rem]">
      {/* Populer Items */}
      <div className="mx-[15px]">
        <div className="flex justify-between">
          <h2 className="font-bold">Popular</h2>
          <div className="flex items-center">
            <Link className="hidden text-red-500 sm:flex" to="#">
              AddMore
            </Link>
            <div className="flex items-center">
              <p className="hidden sm:flex">
                <FaAngleLeft />
              </p>
              <p>
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
        <div>
          <Slider {...sliderSettings}>
            {popularItems.map((item) => (
              <div key={item.Id} className="h-[200px] rounded-lg ">
                <div className="flex flex-col items-center">
                  <img
                    src={item.ImageUrl}
                    alt={item.Name}
                    className="rounded-md object-cover w-[110px] h-[150px] mb-2 "
                  />
                  <p>{item.Name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* recommended items */}
      <div className="mx-[15px]">
        <div className="flex justify-between">
          <h2 className="font-bold">Recommended</h2>
          <div className="flex items-center">
            <Link className="hidden text-red-500 sm:flex" to="#">
              AddMore
            </Link>
            <div className="flex items-center">
              <p className="hidden sm:flex">
                <FaAngleLeft />
              </p>
              <p>
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
        <div>
          <Slider {...sliderSettings}>
            {recommendedItems.map((item) => (
              <div key={item.Id} className="h-[200px] rounded-lg ">
                <div className="flex flex-col items-center">
                  <img
                    src={item.ImageUrl}
                    alt={item.Name}
                    className="rounded-md object-cover w-[110px] h-[150px] mb-2 "
                  />
                  <p>{item.Name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Category;
