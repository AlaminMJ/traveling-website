import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/allorder")
      .then((res) => setOrders(res.data));
  }, [orders]);
  const handelDeleteOrder = (id) => {
    if (window.confirm("Are you sure to Delet")) {
      fetch(`http://localhost:5000/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setOrders(orders.filter((item) => item._id !== id));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handelApprove = (id) => {
    axios
      .put(`http://localhost:5000/order/${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          alert("approve successfully");
          setOrders(orders.filter((item) => true));
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3 className="display-3 text-center py-5">Manage All Orders</h3>
      <Container>
        <Table
          striped
          bordered
          hover
          size="sm"
          className="text-center"
          responsive
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Address</th>
              <th>Date</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.lenght > 0}
            {orders.map((order, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.number}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>
                  <span
                    className={
                      order.status === "approve"
                        ? "status mt-1 active"
                        : "status mt-1"
                    }
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  <Button
                    variant={"success"}
                    className="mx-2"
                    size="sm"
                    onClick={() => handelApprove(order._id)}
                  >
                    Approve
                  </Button>
                  <Button
                    variant={"danger"}
                    className="mx-2"
                    size="sm"
                    onClick={() => handelDeleteOrder(order._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageAllOrders;
