import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewLog = () => {
    const[data,changeData] =useState([])

const fetchData =() => {
    axios.get("http://localhost:3000/view-log").then(
        (response) => {
            changeData(response.data)
        }
    ).catch()
}

useEffect(
    ()=> {
        fetchData()
    },[]
)
    return (

        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                            <div className="card" >

                                                <div className="card-body">
                                                    <div>
                                                        <strong>Name :</strong> {value.name} <br />
                                                        <strong>Department :</strong> {value.dep} <br />
                                                        <strong>Semenster :</strong> {value.sem} <br />
                                                        <strong>Course : </strong> {value.course} <br />
                                                        <strong>System Number : </strong> {value.sysNo} <br />
                                                        <strong>Login Time : </strong> {value.loginTime} <br />
                                                        <strong>logout Time: </strong> {value.logoutTime} <br />
                                                        <strong>Date : </strong> {value.date} <br />
                                                        



                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ViewLog