import { useState } from "react";
import useStore from "../store";

export default function Complaint({ complaint }) {
  const [showResponse, setShowResponse] = useState(false);
  // Zustand
  const store = useStore()
  const { complaints, updateComplaints} = store;

  // Note: this could (and should) be moved to the store
  const toggleTracked = (updatedComplaint) => {
    updatedComplaint.tracked = !updatedComplaint.tracked
    const updatedComplaints = complaints.map(complaint => {
      return complaint.unique_key === updatedComplaint.unique_key ? updatedComplaint : complaint
    });

    updateComplaints(updatedComplaints);
  }

  return (
    <li className="complaint">
      <b>{complaint.complaint_type}</b>

      <button onClick={() => toggleTracked(complaint)}>
        {complaint.tracked ? "Untrack Complaint" : "Track Complaint"}
      </button>

      <button 
        onClick={() => setShowResponse(!showResponse)}
        className="toggle"
      >
        Toggle Response
      </button>

      {showResponse && <p>{complaint.resolution_description}</p>}
    </li>
  )
}
