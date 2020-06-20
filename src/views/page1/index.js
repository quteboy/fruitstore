import React, { useState } from "react";
import { Link } from "react-router-dom";

const FruitNames = ['Apple', 'Banana', 'Orange', 'Mango'];


export default function PageOneView() {
  const [selectedFruit, setSelectedFruit] = useState('Banana');
  const [selectedDesc, setSelectedDesc] = useState();
  const [addedBy, setAddedBy] = useState();
  const [addedDate, setAddedDate] = useState();

  return (
    <div style={{ width: `100%`, overflowX: `hidden` }}>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">My Fruit Store</span>
      </nav>

      <div style={{ padding: `16px 4px 16px 16px` }}>
        <nav className="nav nav-pills flex-row flex-sm-row">
          <Link className="flex-sm-fill text-sm-center nav-link active disabled" to="/page1">Page 1</Link>
          <Link className="flex-sm-fill text-sm-center nav-link" to="/page2">Page2</Link>
        </nav>
        <hr />
      </div>

      <div className="container">
        <form autoComplete="off" action="javascript:" onSubmit={(e) => {
          console.log(selectedFruit, selectedDesc, addedBy, addedDate)
        }}>
          <div className="row">
            <div className="col-md" >
              <div className="card" style={{ background: `lightBlue` }}>
                <div className="form-group" style={{ padding: 8, textAlign: 'center' }}>
                  <h5 className="card-title">Fruit Name</h5>
                  <br />
                  <select value={selectedFruit} onChange={(evt) => { setSelectedFruit(evt.target.value) }}
                    name="selectedFruit"
                    className="form-control"
                  >
                    {
                      FruitNames.map((item, idx) => {
                        return <option key={idx} value={item}>{item}</option>
                      })
                    }
                  </select>
                </div>

                <hr />

                <div className="card-body">
                  <h5 className="card-title" style={{ padding: 8, textAlign: 'center' }}>Fruit Description</h5>
                  <p className="card-text">
                    <textarea val={selectedDesc} onChange={(evt) => { setSelectedDesc(evt.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="3" required>

                    </textarea>
                  </p>
                </div>
              </div>

            </div>
            <div className="col-md">
              <div className="card">
                <div className="card-body">
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-6 col-form-label">Fruit Selected</label>
                    <div className="col-6">
                      <input name="selectedFruit2" type="text" className="form-control" readOnly value={selectedFruit} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-6 col-form-label">Added By</label>
                    <div className="col-6">
                      <input val={addedBy} onChange={(evt) => { setAddedBy(evt.target.value) }} name="addedby" type="text" className="form-control" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-6 col-form-label">Date Added</label>
                    <div className="col-6">
                      <input val={addedDate} onChange={(evt) => { setAddedDate(evt.target.value) }} name="addedDate" type="date" className="form-control" required />
                    </div>
                  </div>
                  <div className="form-group row" style={{ float: `right`, margin: 24 }}>

                    <button type="reset" className="btn btn-light btn-sm mr-4">Reset</button>
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="container">
        <br /><br /><br /><br /><br />

        <div className="row">
          <div className="col-md" >
            <Link to="/" className="btn btn-dark btn-block">Back 2 Home</Link>
          </div>
        </div>
      </div>


    </div >

  )
}
