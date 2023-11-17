import Axios from "axios";
import { useState, useEffect } from "react";

function Upgrade() {
  const [arr3, setArr3] = useState([]);

  useEffect(() => {
    Axios.get("https://backendss-uvix.onrender.com/upgradeRoute/")
      .then((res) => {
        if (res.status === 200) {
          setArr3(res.data);
        } else {
          return Promise.reject("Error in Axios request");
        }
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <table
        style={{ maxWidth: "95%", margin: "50px auto" }}
        className="table table-bordered table-striped text-light justify-content-center"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
         {
            arr3.map((item)=>(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.carName}</td>
                    <td>{item.model}</td>
                    <td>{item.type}</td>
                </tr>
            ))
         }
        </tbody>
      </table>
    </div>
  );
}

export default Upgrade;