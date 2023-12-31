import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Orders.css";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
 let location = useLocation();
 console.log(location);
  // const { id } = useParams();
  const { empId } = useParams();

  useEffect(() => {
    loadUsers();
    console.log(empId);
    setUsers(location.state);
  }, []);

 
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/employees/${employeeId}/orders");
    setUsers(result.data);
  };


  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Date Of Joining</th>
              <th scope="col">Project End Date</th>
              <th scope="col">Client Name</th>
              <th scope="col">Vendor PhoneNo</th>
              <th scope="col">Vendor Email</th>
              {/* <th scope="col">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {users.length == 0 ? <p className="para">No Orders</p> : users.map((employeePO, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employeePO.dateOfJoining}</td>
                <td>{employeePO.projectEndDate}</td>
                <td>{employeePO.endClientName}</td>
                <td>{employeePO.vendorPhoneNo}</td>
                <td>{employeePO.vendorEmailId}</td>
               
                {
                users.length ===  0  && 
                <tr>
                    <td colSpan='8'> No record found</td>
                </tr>
            }
                {/* {
                  <Link
                  className="btn"
                  to={`/employee-po/${employeePO.id}`}
                >
                  Purchase Order
                </Link>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td> } */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
