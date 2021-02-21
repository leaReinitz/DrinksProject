import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        _id: state.userReducer.user._id,
        email: state.userReducer.user.email,
        password: state.userReducer.user.password,
    }
}


export default connect(mapStateToProps)(function Drinks(props) {

    const { _id } = props
    const [drinks, setDrinks] = useState([])
    const [stateFilerDrinks, setStateFilerDrinks] = useState([])
    const [string, setString] = useState("")
    useEffect(() => {
        if (string === "") {
            setStateFilerDrinks(drinks)
        }
    }, [string])

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
            .then(res => {
                setDrinks(res.data.drinks)
                setStateFilerDrinks(res.data.drinks)
            }).catch(err => {
                alert(err)
            })
    }, [])

    function search() {
        let filterDrinks = drinks.filter((drink) => {
            if (drink.strDrink.toLowerCase().indexOf(string.toLowerCase()) !== -1) {
                return true
            }
            else
                return false
        })
        const newSearch = {
            string: string,
            userId: _id
        }
        setStateFilerDrinks(filterDrinks)
        axios.post("http://localhost:4000/saveNewSearh", newSearch,
            {
                headers: {
                    Authorization: `Beare ${localStorage.getItem("token")}`
                }
            })
            .then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err);

            })
    }
    return (
        <>
            <div className="divOfSearch">
                <div className="input-group" >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                        onChange={(e) => { setString(e.target.value) }}
                        className="inputSearch"/>
                    <button className="btn btn-outline-success my-2 my-sm-0"
                        onClick={search}
                        style={{ width: "50%" }}>Search</button>
                </div>

            </div>
            <div className="container" style={{ height: '300px' }}>
                <div className="row">
                    {stateFilerDrinks[0] && stateFilerDrinks.map((drink, i) => (
                        <div key={i} className="col-3" >
                            <div className="card m-3" >
                                <img className="card-img-top" src={drink.strDrinkThumb} alt="Card image cap" />
                                <div className="card-body ">
                                    <h5 className="card-title">{drink.strDrink}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
)