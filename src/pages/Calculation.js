import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Dashboard = () => {
    return (
        
        <div className="outer-border shadow p-3 mb-5 bg-white rounded">
            <h1 className="container text-center mb-5" style={{ textDecoration: "underline" }} >Calculation page</h1>

            <div class="form-group row inputField mb-3">
                <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputPassword" placeholder='Enter Frist Number' />
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputPassword" placeholder='Enter Second Number' />
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputPassword" placeholder='Result' disabled/>
                </div>
            </div>

            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3 m-3">Add</button>
                <button type="submit" class="btn btn-secondary mb-3 m-3">Subtraction</button>
                <button type="submit" class="btn btn-success mb-3 m-3">Multiplication</button>
                <button type="submit" class="btn btn-info mb-3 m-3">Division</button>
            </div>

        </div>
    );
};

export default Dashboard;