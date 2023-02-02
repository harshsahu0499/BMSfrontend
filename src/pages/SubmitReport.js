import React, { useState } from 'react';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    userId: 1,
    location: "",
    description: "",
    priority: "",
    image: "",
    dateTime: new Date(),
    status:"Open"
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();

    // API call to the Java backend to insert a report
    fetch(`http://localhost:8080/api/v1/reports/submitreports/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Thank you for reporting, We will get back to you")
        window.location.href = "/notifications";
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
          id="userId"
          name="userId"
          hidden
          value={formData.userId}
          onChange={handleInputChange}
        />

      <table>
      <tr><label htmlFor="location"> Location:</label> </tr>
      <tr> <input
                     type="text"
                     id="location"
                     name="location"
                     value={formData.location}
                     onChange={handleInputChange}
                   />
                   </tr></table>


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
        <td> <label htmlFor="priority">Priority:</label></td>
        <td>   <select
                       id="priority"
                       name="priority"
                       value={formData.priority}
                       onChange={handleInputChange}
                     >
                       <option value="">-- Select a priority --</option>
                       <option value="high">High</option>
                       <option value="medium">Medium</option>
                       <option value="low">Low</option>
                     </select>
        </td>
      </tr>
      </table>
      </div>
        <br />
      <div>
      <table>
      <tr>
         <label htmlFor="image">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Image:</label>
      </tr>

      <tr> <input
                       type="file"
                       id="image"
                       name="image"
                       onChange={handleInputChange}
                     />

      </tr>
      </table>


      </div>

       <div>
            <table>
            <tr>
              <td>   <select
                             id="status"
                             name="status"
                             hidden
                             value={formData.priority}
                             onChange={handleInputChange}
                           >
                             <option value="">-- Select report status --</option>
                             <option value="Open">High</option>
                             <option value="Closed">Medium</option>
                           </select>
              </td>
            </tr>
            </table>
            </div>

      <button type="submit">Submit Report</button>
      <div> submit report form </div>
    </form>
  );
};

export default ReportForm;