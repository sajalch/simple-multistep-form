import React from "react";

export default function DocumentCollection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form>
        <label>1. 10th Marksheet*</label>
        <br />
        <input type="file" placeholder="5kb" required />
        <br />
        <label>2. 12th Marksheet*</label>
        <br />
        <input type="file" placeholder="5kb" required />
        <br />
        <label>3. Graduation Marksheet*</label>
        <br />
        <input type="file" placeholder="5kb" required />
        <br />
        <label>4. Post Graduation Marksheet</label>
        <br />
        <input type="file" placeholder="5kb" required />
        <br />
        <label>5. Offer Letter*</label>
        <br />
        <input type="file" placeholder="5kb" required />
        <br />
        <label>6. Salary Slips*</label>
        <br />
        <input type="file" placeholder="5kb" required />
        <br />
        <label>7. Bank Statement*</label>
        <br />
        <input type="file" placeholder="5kb" required />
        <br />
        <label>8. Increment Letter (if any)</label>
        <br />
        <input type="file" placeholder="5kb" required />
        <br />
        <label>9. Others (if any)</label>
        <br />
        <input type="file" placeholder="5kb" required />
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
