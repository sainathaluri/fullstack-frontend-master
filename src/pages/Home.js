import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



export default function Home() {
  const [users, setUsers] = useState([]);

  // const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

 
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/employees");
    setUsers(result.data);
  };

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:8082/employees/${id}`);
  //   loadUsers();
  // };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">EmailID</th>
              <th scope="col">Visa Status</th>
              <th scope="col">Date Of Birth</th> 
              <th scope="col">College Graduation</th>
              <th scope="col">Visa StartDate</th>
              <th scope="col">Visa EndDate</th>
              <th scope="col">Working Status</th>
              {/* <th scope="col">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((employee, index) => {
              console.log(employee)
              return(
              <tr>
                <th scope="row" key={index}>
                  {index+1}
                </th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailID}</td>
                <td>{employee.visaStatus}</td>
                <td>{employee.dob}</td>
                <td>{employee.clgOfGrad}</td>
                <td>{employee.visaStartDate}</td>
                <td>{employee.visaExpiryDate}</td>
                <td>{employee.onBench ? 'Yes' : 'No'}</td>
                {
                !employee.length ===  0  && 
                <tr>
                    <td colSpan='8'> No record found</td>
                </tr>
            }
                {
                  <Link
                  className="btn"
                  to={`/purchase-order`}
                  
                >
                  Purchase Order
                </Link>
                
                /* <td>
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
                </td> */}
              </tr>
)})}
          </tbody>
        </table>
      </div>
    </div>
  );
}
