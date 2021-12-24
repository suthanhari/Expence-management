import { useFormik } from 'formik'
import React from 'react'

function Salryform() {

    let formik = useFormik({

        initialValues: {
            name: "",
            date: "",
            salary: 0,

        },
        onSubmit: async (values) => {
            try {

                await fetch(" http://localhost:4001/Income",{
                    method: "post",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }

                })
                alert("Salary updated");
            } catch (error) {

                console.log(error);
            }
        }

    })

    return (
        <>
            <form class="row g-3" onSubmit={formik.handleSubmit}>
                <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name"
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <div class="col-md-6">
                    <label for="date" class="form-label">Date</label>
                    <input type="date" class="form-control" id="date"
                        name='date'
                        onChange={formik.handleChange}
                        value={formik.values.date}
                    />
                </div>
                <div class="col-12">
                    <label for="salary" class="form-label">Salary</label>
                    <input type="number" class="form-control" id="inputAddress"
                        name='salary'
                        onChange={formik.handleChange}
                        value={formik.values.salary}
                    />
                </div>


                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Salryform
