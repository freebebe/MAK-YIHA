import React from "react";

const AddTrip = (({ newTrip }) => {
  let date, place, type;
  const submit = (e) => {
    e.preventDefault();
    newTrip({
      date: date.value,
      place: place.value,
      type: type.value,
    });
    date.value = place.value = type.value = "";
  };
  return (
    <div className="form-container">
      <from className="form black-container">
        <label htmlFor="
            ">
          <h3></h3>
          <br />
          <br />
          <br />
        </label>
        <label htmlFor="
    ">
          Date: <br />
          <input id="date" type="date" required ref={(input) => date = input} />
        </label>
        <label htmlFor="">
          Place: <br />
          <input
            id="date"
            type="text"
            required
            ref={(input) => place = input}
          />
        </label>
        <label htmlFor="">
          Type: <br />
          <select ref={(input) => type = input}>
            <option value="tt"></option>
            <option value="tt2"></option>
            <option value="tt3"></option>
          </select>
        </label>
        <input type="submit" value="SUBMIT" />
      </from>
    </div>
  );
};
