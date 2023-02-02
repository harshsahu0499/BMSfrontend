import React, { useState, useEffect } from "react";
import "../styles/Login.css";

const Notification = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState("");

const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
       e.preventDefault();
       try {
       const response = await fetch(`http://localhost:8080/api/v1/notifications`
       ,
        {
        method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {


                    console.error(error);
                  }

       };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>


          </tr>
        </thead>
        <tbody>


            <tr>

                    <td>General Meeting</td>
                    <td>2023-02-10</td>
                    <td>09:00AM</td>
                    <td>11:00AM</td>

            </tr>
            <tr>
                     <td>Trash collection</td>
                                        <td>2023-02-14</td>
                                        <td>07:00AM</td>
                                        <td>07:30AM</td>
            </tr>
            <tr>
                     <td>Trash collection</td>
                                        <td>2023-02-23</td>
                                        <td>07:00AM</td>
                                        <td>07:30AM</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Notification;
