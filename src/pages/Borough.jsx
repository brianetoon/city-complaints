import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Complaint from "../components/Complaint";
import useStore from "../store";

export default function Borough({ limit }) {
  const params = useParams();
  // Zustand
  const store = useStore()
  const { complaints, updateComplaints } = store

    const fetchData = async () => {
      try {
        const response = await fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${params.id}&$limit=${limit}`)
        const data = await response.json();

        const formattedData = data.map(item => {
          return {...item, tracked: false }
        });

        console.log(formattedData)

        updateComplaints(formattedData)
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, [params, limit])

  return (
    <div>
      <h2>{ params.id }</h2>
      <ul className="complaint-list">
        {complaints.map(complaint => (
          <Complaint 
            complaint={complaint} 
            key={complaint.unique_key} 
          />
        ))}
      </ul>
    </div>
  )
}
