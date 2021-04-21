import React from "react";

export default function DetailsCollection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form>
        <label>Enter Name</label>
        <br />
        <input type="text" placeholder="Enter Name" required />
        <br />
        <label>Enter Name</label>
        <br />
        <input type="email" placeholder="Enter Email" required />
        <br />
        <label>Date of Birth</label>
        <br />
        <input type="date" placeholder="Enter Date" required />
        <br />
        <label>Enter Contact</label>
        <br />
        <input type="number" placeholder="Enter Phone" required />
        <input
          style={{ visibility: "hidden" }}
          type="submit"
          value="Submit"
          required
        />
      </form>
    </div>
  );
}
