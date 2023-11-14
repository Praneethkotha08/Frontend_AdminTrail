import Axios from "axios";
import {Link} from "react-router-dom";
function ShopList(props) {
    const { _id, carName, model, year, price, img1} = props.obj;
    const handleClick = () =>{
        Axios.delete("https://project-final-backend-bq77.onrender.com/carRoute/delete-car/" + _id )
        .then((res)=>{
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return (
       
        <div className="col-md-4 mb-4">
            <div className="card" style={{ backgroundColor: "#ffac3c", color: "#282c4c" }}>
              <img className="card-img-top" src={img1} alt={carName} />
              <div className="card-body">
                <h5 className="card-title">{carName}</h5>
                <p className="card-text">Model:{model}</p>
                <p className="card-text">Year:{year}</p>
                <p className="card-text">Price: {price}</p>

                <button onClick={handleClick} class="text-light btn btn-danger">Delete</button>
                <Link class="text-decoration-none text-light mx-3" to={"/modify/" + _id}>
<button class="btn btn-success">
    Edit
</button>
</Link>
              </div>
            </div>
          </div>
    )
}
export default ShopList;
