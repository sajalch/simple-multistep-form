import React from "react";

export default function Sop() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form>
        <label>
          1. Tell me about a time you were asked to do something you had never
          done before. How did you react? What did you learn?
        </label>
        <br />
        <textarea
          rows="4"
          cols="100"
          type="text"
          placeholder="Enter a description for the long answer"
          required
        />
        <br />
        <label>
          2. Tell me about the last time something significant didn’t go
          according to plan at work. What was your role? What was the outcome?
        </label>
        <br />
        <textarea
          rows="4"
          cols="100"
          type="text"
          placeholder="Enter a description for the long answer"
          required
        />
        <br />
        <label>
          3. What are the three things that are most important to you in a job?
        </label>
        <br />
        <textarea
          rows="4"
          cols="100"
          type="text"
          placeholder="Enter a description for the long answer"
          required
        />

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
