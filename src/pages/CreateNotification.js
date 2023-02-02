import React, { useState } from "react";

const CreateNotification = () => {
  const [adminId, setAdminId] = useState("");
  const [description, setDescription] = useState("");
  const [endTime, setEndTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");


  const handleSubmit = async () => {

  // API call to the Java backend to insert a report
      fetch(`http://localhost:8080/api/v1/notifications/createnotification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
               adminId,
               description,
                endTime,
               eventDate,
               startTime,
             }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Successfully created notification!")
          window.location.href = "/notification";
          // handle success or error response from the backend
        })
        .catch((error) => {
          console.error(error);
        });
    };


  return (
    <form>
      <div>

        <input
          type="number"
          hidden
          id="adminId"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="eventDate">Date:</label>
        <input
          type="text"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="text"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endTime">End Time:</label>
        <input
          type="text"
          id="endTime"
          value={endTime}
          onChange={(e) => setStartTime(e.target.value)}
                            />
                          </div>

<button type="submit">Create Notification</button>
      <div> create notification form </div>
</form>
  );
};

export default CreateNotification;