import { Description } from "@mui/icons-material";
import Card from "../../Elements/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const CardBill = () => {
  const [bill, setBill] = useState(null);
  const getData = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/bills",
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      setBill(response.data.data);
    } catch (error) {
      if (error.response) {
        if (error.response.status == 401) {
          setOpen(true);
          setMsg({
            severity: "error",
            desc: "Session Has Expired. Please Login.",
          });

          setIsLoggedIn(false);
          setName("");

          localStorage.removeItem("refreshToken");
          navigate("/login");
        } else {
          console.log(error.response);
        }
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card
      title="Upcoming Bill"
      desc={
        <div className="h-full flex flex-col justify-around">
          {/* Display loading spinner if data is not yet fetched */}
          {bill === null ? (
            <div className="flex justify-center items-center">
              <CircularProgress color="inherit" />
            </div>
          ) : bill.length > 0 ? (
            bill.map((item, index) => (
              <div key={index} className="lg:flex justify-between pt-3 pb-3">
                <div className="flex">
                  <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                    <span className="text-xs">${item.month}</span>
                    <span className="text-2xl font-bold">${item.date}</span>
                  </div>
                  <div className="">
                    <img
                      className="h-6"
                      src={`/images/${item.logo}`}
                      alt={item.name}
                    />
                    <span className="font-bold">${item.name}</span>
                    <br />
                    <span className="text-xs">
                      Last Charge - ${item.lastCharge}
                    </span>
                  </div>
                </div>
                <div className="flex place-content-center flex-col">
                  <span className="p-2 border rounded-lg font-bold text-center">
                    ${item.amount}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No bills found</p>
          )}
        </div>
      }
    />
  );
};

export default CardBill;
