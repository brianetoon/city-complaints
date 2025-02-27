import Complaint from "../components/Complaint";
import useStore from "../store";

export default function Tracking() {
  // Zustand
  const store = useStore()
  const { complaints } = store;

  return (
    <div>
      <h2>My Tracked Complaints</h2>
      <ul className="complaint-list">
        {complaints.map(complaint => {
          if (complaint.tracked) {
            return (
              <Complaint 
                complaint={complaint} 
                key={complaint.unique_key}
            />
            )
          }
        })}
      </ul>
    </div>
  )
}
