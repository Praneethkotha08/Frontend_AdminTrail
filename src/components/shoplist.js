import Axios from "axios";
import {useParams} from "react-router-dom";

function ShopList(props) {
    const { _id, carName, model, year, price, img1} = props.obj;
    const redirectdelete=()=>{
        if(localStorage.getItem('islogged')==='true'){
          handleClick();
        } 
        else{
          window.location.href='/#/signin';
        }
      }
        const { id } = useParams();

      const redirect=()=>{
        if(localStorage.getItem('islogged')==='true'){
          console.log(id);
          window.location.href='/#/modify/'+_id;
        } 
        else{
          window.location.href='/#/signin';
        }
      }
    const handleClick = () =>{
        Axios.delete("https://backendss-uvix.onrender.com/carRoute/delete-car/" + _id )
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
       
        <div className="col-md-4 mb-4" >
            <div className="card"style={{ backgroundColor: "#ffac3c", color: "#282c4c" }}>
              <img className="card-img-top" src={img1} alt={carName} />
              <div className="card-body">
                <h5 className="card-title">{carName}</h5>
                <p className="card-text">Model:{model}</p>
                <p className="card-text">Year:{year}</p>
                <p className="card-text">Price: {price}</p>

                <button onClick={redirectdelete} className="text-light btn btn-danger">Delete</button>
<button className="btn btn-success mx-2" onClick={redirect}>
    Edit
</button>
              </div>
            </div>
          </div>
    )
}
export default ShopList;
