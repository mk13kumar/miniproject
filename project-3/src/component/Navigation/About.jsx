import React, { useEffect, useState } from "react";
// import styles from "./component/contactForm/contact.module.css";
const About = () => {
  const [localStorageData, setLocalStorageData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState({ name: "", email: "", text: "" });
  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setLocalStorageData(JSON.parse(data)); // convert string to array
    }
  }, []);

  const handleDelete = (index) => {
    const updatedData = [...localStorageData];
    updatedData.splice(index, 1);
    setLocalStorageData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData)); // update localStorage too
  };

  const handleEditItem = (item, index) => {
    setEditItem(item);
    setEditIndex(index);
    setShowPopup(true);
  };

  const handleSave = () => {
    const updatedData = [...localStorageData];
    updatedData[editIndex] = editItem;
    setLocalStorageData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditItem({ ...editItem, [name]: value });
  };

  return (
    <div>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
            }}
          >
            <h3>Edit Item</h3>
            <input
              name="name"
              value={editItem.name}
              onChange={handleChange}
              placeholder="Name"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <input
              name="email"
              value={editItem.email}
              onChange={handleChange}
              placeholder="Email"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <textarea
              name="text"
              value={editItem.text}
              onChange={handleChange}
              placeholder="Text"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <button onClick={handleSave}>Save</button>
            <button
              onClick={() => setShowPopup(false)}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <table style={{ border:"2px", margin:"30px "}}>
        <thead>
          <tr>
            <th>Name </th>
            <th>Email </th>
            <th>Text </th>
          </tr>
        </thead>
        <tbody>
          {localStorageData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.text}</td>
              <td>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => handleDelete(index)}
                ></i>
              </td>
              <td>
                <i
                  className="fas fa-pen"
                  aria-hidden="true"
                  style={{ cursor: "pointer", color: "black" }}
                  onClick={() => handleEditItem(item, index)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default About;
