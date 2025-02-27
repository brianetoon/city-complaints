import { NavLink } from "react-router-dom";

export default function Navigation({ limit, setLimit }) {
  return (
    <header>
      <nav>
        <h1>311 Requests</h1>

        <input 
          type="number" 
          placeholder="Request Limit" 
          value={limit} 
          onChange={(e) => setLimit(e.target.value)}
        />

        <ul> 
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/tracking">Tracked Complaints</NavLink></li>
          <li><b>Boroughs:</b></li>
          <li><NavLink to={`/borough/BROOKLYN`}>Brooklyn</NavLink></li>
          <li><NavLink to={`/borough/MANHATTAN`}>Manhattan</NavLink></li>
          <li><NavLink to={`/borough/QUEENS`}>Queens</NavLink></li>
          <li><NavLink to={`/borough/BRONX`}>Bronx</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
