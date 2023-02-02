import React, { useState, useEffect } from "react";
import "../styles/Notification.css";

const ViewUserReport = () => {
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");
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
       const response = await fetch(`http://localhost:8080/api/v1/reports/${userId}`
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
      <div>
              <input
                type="number"
                id="userId"
                name="userId"
                hidden
                value={1}
                onChange={handleInputChange}
              />
              </div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </form>
      <table id="tab">
        <thead>
          <tr>

            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Date</th>
            <th>Image</th>

          </tr>
        </thead>
        <tbody>


            <tr>
                    <td>Broken window</td>
                    <td>High</td>
                    <td>Open</td>
                    <td>2023-02-01</td>
                    <td>brokenWindow.png</td>

            </tr>
            <tr>
                    <td>Wet floor</td>
                    <td>High</td>
                    <td>Open</td>
                    <td>2023-01-31</td>
                    <td>wet_floor_20230202.jpg</td>
            </tr>
            <tr>
                    <td>Heater is not working</td>
                    <td>High</td>
                    <td>Closed</td>
                    <td>2023-02-02</td>
                    <td> </td>

            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewUserReport;
