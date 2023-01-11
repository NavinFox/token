import React, { useEffect, useState } from "react";
import "./form.css";

const Form = () => {

  //initial data
  const [state, setState] = useState({
    blueToken: 6,
    bluePrefix: "A",
    blueRow: 3,
    redToken: 6,
    redPrefix: "A",
    redRow: 3,
  });

  //empty to set data
  const [blueGrid, setBlueGrid] = useState([]);
  const [redGrid, setRedGrid] = useState([]);


  //crear page
  const handleClear = () => {
    setState({
      blueToken: "",
      bluePrefix: "",
      blueRow: "",
      redToken: "",
      redPrefix: "",
      redRow: "",
    });
  }

 // generate
  const onSubmit = (event) => {
    event.preventDefault();
    displayGrid(state.blueToken, state.bluePrefix, state.blueRow, "blue");
    displayGrid(state.redToken, state.redPrefix, state.redRow, "red");
  };

  //leeter save dynamic
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }
 //method call
  useEffect(() => {
    displayGrid(state.blueToken, state.bluePrefix, state.blueRow, "blue");
    displayGrid(state.redToken, state.redPrefix, state.redRow, "red");
  }, []);

  const displayGrid = (token, prefix, row, color) => {
    let element = [];
    let rowCount = 1;

    console.log(token, prefix, row, color)
    for (let index = 0; index < token; index++) {
      element.push(
        <>
        <div className="box" key={color + prefix + (index + 1)}>
          <div className="box-padding" style={{ backgroundColor: color }}>
            {prefix + (index + 1)}
          </div>
        </div>{rowCount == row && <br />}
        </>
      );
      //flex show in line
      if (rowCount == row) rowCount = 1;
      else rowCount += 1;
    }
    
    // which grid should update
    if (color === "red") setRedGrid(element);
    else setBlueGrid(element);
  };

  return (
    <div>
      <h1>Token Generator Application</h1>
      <hr></hr>
      <div className="form container">
        <div className="">
          <form onSubmit={onSubmit}>
            <label>Number of blue tokens</label>
            <input name="blueToken" type="text" value={state.blueToken} onChange={handleChange} />
            <br />
            <label>Blue token prefix</label>
            <input
              name="bluePrefix"
              type="text"
              value={state.bluePrefix}
              onChange={handleChange}
            />
            <br />
            <label>Blue token per row</label>
            <input name="blueRow" type="text" value={state.blueRow} onChange={handleChange} /> <br />
            <label>Number of red tokens</label>
            <input name="redToken" type="text" value={state.redToken} onChange={handleChange} /> <br />
            <label>Red token prefix</label>
            <input name="redPrefix" type="text" value={state.redPrefix} onChange={handleChange} />
            <br />
            <label>Red token per row</label>
            <input name="redRow" type="text" value={state.redRow} onChange={handleChange} /> <br />
            <button name="btn" type="submit">Generate</button>
            <button onClick={handleClear} >Clear</button>
          </form>
        </div>
        <div className="display">
          <div className="demo">{blueGrid}</div>
          <div className="demo">{redGrid}</div>
          {/* <div  className='box' id=''></div> <br/>
          <p className='box1'  id='output1'></p> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
