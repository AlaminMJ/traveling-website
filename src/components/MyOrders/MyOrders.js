import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import MyOrderCard from "../../Shared/MyOrderCard/MyOrderCard";

const MyOrders = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(`https://howling-grave-27683.herokuapp.com/myorder/${user?.email}`)
      .then((responst) => {
        setMyOrder(responst.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, myOrder]);

  const handelDeleteOrder = (id) => {
    if (window.confirm("Are You sure for Delete")) {
      fetch(`https://howling-grave-27683.herokuapp.com/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setMyOrder(myOrder.filter((item) => item._id !== id));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <h3 className="display-3 text-center py-2">My Orders</h3>
      <Container>
        <div className="card-wrap py-5">
          {myOrder.map((item) => (
            <MyOrderCard
              key={item._id}
              data={item.tourplace}
              handelDeleteOrder={handelDeleteOrder}
              deleteId={item._id}
              status={item.status}
            ></MyOrderCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyOrders;
