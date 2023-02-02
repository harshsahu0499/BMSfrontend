import React, { useState } from "react";

const CreateNotificationForm = () => {
const [formData, setFormData] = useState({
    adminId: 1,
    description: "",
    endTime: "",
    eventDate: "",
    startTime: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // API call to the Java backend to sign up a new user
    fetch("http://localhost:8080/api/v1/notifications/createnotification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.alert("Notification created successfully")
        window.location.href = "/createnotification";
        // handle success or error response from the backend
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <form onSubmit={handleSubmit}>
      <div>


        <input
          type="number"
          hidden
          id="adminId"
          name="adminId"
          value={1}
          onChange={handleInputChange}
        />
      </div>
      <div>

      <table >
            <tr><label htmlFor="description"> Description:</label></tr>
            <tr><textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                        /></tr>
          </table>
      </div>
      <div>
      <table>
      <tr>
       <label htmlFor="eventDate">Date:</label>
      </tr>
      <tr>
      <input
                type="text"
                name="eventDate"
                id="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
              />
      </tr>
      </table>


      </div>
      <div>
      <table>
      <tr><label htmlFor="startTime">Start Time:</label></tr>
      <tr><input
                    type="text"
                    name="startTime"
                    id="startTime"
                    value={formData.startTime}
                    onChange={handleInputChange}
                  /></tr>
      </table>


      </div>
      <div>
      <table>
      <tr><label htmlFor="endTime">End Time:</label></tr>
      <tr><input
                    type="text"
                    name="endTime"
                    id="endTime"
                    value={formData.endTime}
                    onChange={handleInputChange}
                                      /></tr>
      </table>


                          </div>

<button type="submit">Create Notification</button>
      <div> create notification form </div>
</form>
  );
};

export default CreateNotificationForm;