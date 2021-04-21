import React from "react";

export default function IA() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form>
        <label>1. Email*</label>
        <br />
        <input type="email" placeholder="Example - userid@gmail.com" required />
        <br />
        <label>2. Location</label>
        <br />
        <input
          type="text"
          placeholder="Search or enter your location"
          required
        />
        <br />
        <label>3. Interview Date</label>
        <br />
        <input type="date" placeholder="Enter Date" required />
        <br />
        <label>5. Time Zone</label>
        <br />
        <select title="Search or Select a time zone from below">
          <option value="">Search or Select a time zone from below</option>
        </select>
        <br />
        <label>6. Interview Medium</label>
        <br />
        <select title="Search or Select medium of Interview from below">
          <option value="">
            Search or Select medium of Interview from below
          </option>
        </select>
        <br />

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
