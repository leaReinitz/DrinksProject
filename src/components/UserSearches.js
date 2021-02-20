import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


function mapStateToProps(state) {
  
    return{
        _id:state.userReducer.user._id,
        firstName:state.userReducer.user.firstName,
        lastName:state.userReducer.user.lastName,
    }
}

export default connect(mapStateToProps)( function UserSearches(props) {
    const {_id}=props;
    const [searches, setSearches] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/getSearchesByUserId/${_id}`, {headers: {
            Authorization:`Beare ${localStorage.getItem("token")}`}
          }).then(res=>{
            setSearches(res.data);
        }).catch(err=>{
            alert(err+" Please log in again")
        })
    }, [])

    return (
        <>
        <div style={{    width: "50%",marginLeft: "25%"}}>
            <Link className="nav-link" to={"/drinks"}>go back to all the drinks</Link>
            <Table striped bordered hover size="sm"  className="auth-inner">
                <thead>
                    <tr>
                        <th>string of search</th>
                        <th>date of search</th>
                    </tr>
                </thead>
                <tbody>
                    {searches.map((search, i) => (
                        <tr key={i}>
                            <td>{search.string}</td>
                            <td>{search.date}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
        </>
    );
}
)