import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Income() {

    const [income, setIncome] = useState([]);
    const [total, setTotal] = useState(0);

   
    useEffect(async () => {
        try {
            let data = await fetch("http://localhost:4001/Income")
            let setdata = await data.json()
            setIncome(setdata)

        } catch (error) {
            console.log(error);
        }

    }, [])
    return (
        <>


            <div className="container-fluid">



                <div className="d-sm-flex align-items-center justify-content-between mb-4">

                    <h1 className="h3 mb-0 text-gray-800">user</h1>
                    <Link className="nav-link" to="/usersform">
                        <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                            <i className="fas fa-download fa-sm text-white-50"></i> Create Income

                        </a>

                    </Link>
                </div>

                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Salary</th>

                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Salary</th>


                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        income.map((value) => {

                                            return <tr>
                                                <td>{value.name}</td>
                                                <td>{value.date}</td>
                                                <td>{value.salary}</td>

                                               
                                            </tr>

                                        })

                                    }

                                </tbody>
                            </table>

                            <table className='card'>
                                <thead>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    <tr>{total}</tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Income
