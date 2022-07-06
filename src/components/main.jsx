import "../App.css";
import { useState } from "react";
export const Main = () => {
  const [togle, setTogle] = useState(false);
  const [inputFields, setInputFields] = useState([
    {
      fullName: "Default Rule",
    },
  ]);
  const [conditioninput, setConditioninput] = useState([{}]);
  const [conditioninputtwo, setConditioninputtwo] = useState([{}]);

  const [name, setName] = useState("");

  const addinputfiled = () => {
    setInputFields([...inputFields, { fullName: name || "default" }]);
  };

  const addcondition = () => {
    setConditioninput([...conditioninput, {}]);
  };
  const addconditiontwo = () => {
    setConditioninputtwo([...conditioninputtwo, {}]);
  };
  const removeInputfileds = (index) => {
    const items = [...inputFields];
    items.splice(index, 1);
    setInputFields(items);
    // console.log(index);
  };
  const deletecondition = (index) => {
    const items = [...conditioninput];
    items.splice(index, 1);
    setConditioninput(items);
  };
  const deleteconditiontwo = (index) => {
    const items = [...conditioninputtwo];
    items.splice(index, 1);
    setConditioninputtwo(items);
  };
  return (
    <div className="main_div">
      <div className="nav_div">
        <div>
          <img
            src="./circle.png"
            alt=""
            style={{ marginTop: "0.7rem" }}
            width={"30px"}
            height={"30px"}
          />
          <div>
            <span>Demo Custom App</span> <br />
            <span className="second_span">APP NAME</span>
          </div>
          <img
            className="greaterthansymbol"
            src="./arrow-point-to-right.png"
            alt=""
          />
          <div>
            <span>Assessment</span>
            <br />
            <span className="second_span">STAGE</span>
          </div>
          <img
            className="greaterthansymbol"
            src="./arrow-point-to-right.png"
            alt=""
          />
          <div>
            <span>Create PO</span>
            <br />
            <span className="second_span">BUTTON</span>
          </div>
          <img
            className="greaterthansymbol"
            src="./arrow-point-to-right.png"
            alt=""
          />
          <div>Button Rules</div>
        </div>
        <div>
          <span>App Saved on 2022 july 17 4:23pm </span>
          <button onClick={() => setTogle(togle ? false : true)}>
            {togle ? `EDIT` : `SAVE`}
          </button>
        </div>
      </div>
      <div className="second_sub_div">
        <div>
          <span>
            <img
              src="./arrowhead-thin-outline-to-the-left.png"
              //   width={"20px"}
              height={"10px"}
              alt=""
            />
          </span>
          <span>Back to Stages</span>
          <div className="rules_first_div">
            <span> RULES 2</span>
            <br />
            <input
              type="text"
              placeholder="Enter Box Name"
              onChange={(e) => setName(e.target.value)}
              name=""
              id=""
            />
            {inputFields.map((data, index) => {
              const { fullName } = data;

              return (
                <div className="manual_added_div">
                  <div>
                    <span>{fullName}</span>
                  </div>
                  <img
                    src="./delete.png"
                    onClick={() => removeInputfileds(index)}
                    alt="delete img"
                    width={"20px"}
                    height={"20px"}
                  />
                </div>
              );
            })}
            <button
              disabled={togle}
              className="add_filed_btn"
              onClick={addinputfiled}
            >
              ADD New Rules
            </button>
          </div>
        </div>
        <div className="rules_second_div">
          <span>Default Rule</span>
          <div className="button_div">
            <label> Button Name</label>
            <br />
            <input type="text" />
          </div>
          <div className="if_all_div">
            <select name="" id="">
              <option value="">If All</option>
              <option value="">If All1</option>
              <option value="">If All2</option>
            </select>
            <span>of the following conditions are met</span>
          </div>
          <div className="condtion_div">
            {conditioninput.map((data, index) => {
              // console.log(data);
              const { name } = data;
              return (
                <div className="each_condtion_div">
                  <h1>{name}</h1>
                  <select>
                    <option value="">Text</option>
                  </select>
                  <select>
                    <option value="">Contains</option>
                  </select>
                  <input type="text" name="" id="" />
                  <img
                    onClick={() => deletecondition(index)}
                    src="./delete.png"
                    width={"20px"}
                    height={"20px"}
                    alt=""
                  />
                </div>
              );
            })}
            <button
              disabled={togle}
              className="add_condition_btn"
              onClick={addcondition}
            >
              Add New Conditions
            </button>
          </div>

          <hr />
          <div>
            <p>Perform the following action</p>
            {conditioninputtwo.map((index) => {
              return (
                <div style={{ display: "flex" }}>
                  <div className="last_condition_div">
                    <img
                      src="./play-button.png"
                      width={"20px"}
                      height={"20px"}
                      alt=""
                    />
                    <span>START NEW APP</span>
                    <a href=".#">SETUP</a>
                  </div>
                  <img
                    className="down_img"
                    onClick={(index) => deleteconditiontwo(index)}
                    src="./delete.png"
                    width={"20px"}
                    height={"20px"}
                    alt=""
                  />
                </div>
              );
            })}
            <button
              disabled={togle}
              className="last_btn"
              onClick={addconditiontwo}
            >
              Add another action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
