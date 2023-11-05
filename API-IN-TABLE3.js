import  React  from "react";
import Axios from "axios"
import {  useState} from "react"

function SearchItem () {
    const [id, setId ] = useState (0);
    const [data, setData] = useState ( null);
   
    const fetchData = () => {

    Axios.get (`https://fakestoreapi.com/products/${id}`).then ( (res) => {
        //console.log (data); //data is in json format
        setData(res.data);
       console.log (res.data); 
    });
    
    }

    return (
        <>
        <div className = "App" 

            style = {{ 
                margin: "50px auto", 
                width : "600px",
                height: "300px",
                border: "5px solid green",
                backgroundColor: "seashell",
                textAlign: "center",
                borderRadius: "20px", 
                boxShadow: "2px 5px 6px #888888"
            }}>
                <input 
                    style = {{
                        marginTop: "50px",
                        fontSize: "30px", 
                        width: "350px", 
                        height: "50px", 
                        border: "3px solid green"
                    }}
                
                    placeholder = "Type ITEM ID here (1-20)"
                    onChange = { (event) => {setId (event.target.value)
                }} />
                <p>
                <button className="btn-lg btn-primary m-4" onClick = {fetchData}>Submit</button></p>

        </div>


        <h1 class = "text-center"
            style = {{
                color: "darkblue", 
                backgroundColor: "teal"
                }}><button>STORING API DATA IN TABLE </button></h1>
        
        <div class="container" >
            <table class="table table-bordered" 
            style = {{
                fontSize: "25px", 
                backgroundColor: "#ffe6ff",
                border: "3px solid #802000",
                boxShadow: "2px 5px 6px #888888"
                }}>
                <thead class=" table-primary">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                </tr>
                </thead>
                <tbody id = "table_body">
                <tr>
                    <td>Title={data?.title}</td>
                    <td>Description={data?.description}</td>
                    <td>Price={data?.price}</td>
                    <td>Image = <img src = {data?.image} style = {{ width : "200px"}}/></td>
                </tr>
            
                </tbody>
            </table>
        </div>
        
        </>
    );
    }
    
    export  default SearchItem  
    
    
