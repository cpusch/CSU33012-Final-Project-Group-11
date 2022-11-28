import { useState, useEffect } from "react";

export default function App() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 componentWillMount(){
  this.useEffect();
}

 useEffect(() => {
  fetch(`http://127.0.0.1:8000/commits`)
   .then((response) => console.log(response));
 }, []);
 

 return <div className="App">App</div>;
}