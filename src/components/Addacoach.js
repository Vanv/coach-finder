import React from 'react';

const Addacoach = () => {
    return (
        <div>
            <div className="fields">
                <h3>Add a Coach</h3>
                <span className="inputLabel"> Name:</span> <input className="form-control" type="text" value="Name"/>
            </div>
            <div  className="fields">
                <span className="inputLabel">Sports 1:</span> <input className="form-control" type="text" value="Name of the sport1"/>
            </div>
            <div className="fields">
                <span className="inputLabel">Sports 2:</span> <input className="form-control" type="text" value="Name of the sport2"/>
            </div>
            <div className="fields">
                <span className="inputLabel">Sports 3:</span> <input className="form-control" type="text" value="Name of the sport3"/>
            </div>
            <div className="fields">
                <span className="inputLabel">Email:</span> <input className="form-control" type="text" value="email"/>
            </div>
            <div className="fields">
                <span className="inputLabel">Mobile:</span> <input className="form-control" type="text" value=""/>
            </div> 

             <div className="fields">
                <input type="submit" className="btn btn-primary btn-lg" value="Submit"/>
            </div>   

        </div>
    )
}

export default Addacoach;
