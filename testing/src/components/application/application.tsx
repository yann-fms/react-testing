import React from 'react'
export const Application = () => {
  return (
    <>
      <h1>Job Application</h1>
      <h2>Application</h2>
      <p>All fileds are mandatory</p>
      <span title="close">X</span>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Yann"
            onChange={() => {}}
          />
          <img src="./image.png" alt="logo" />
        </div>
        <div data-testid="custom-element">Custom Element</div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United State</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
            <option value="FR">France</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  )
}
