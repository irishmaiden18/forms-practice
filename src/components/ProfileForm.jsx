import { useState } from "react"
import DisplayProfile from "./DisplayProfile"

const ProfileForm = () => {

    // set up the default form data for before the user enters anything
    const defaultFormData = {
        name: "",
        age: 0,
        location: "",
        email: "",
        role: "",
        bio: "",
        subscribed: false
    }

    // set up state variable using an object to keep track of various inputs
    const [formData, setFormData] = useState(defaultFormData)

    // set up display data to track the user input we want to capture and display on submit
    // const[displayData, setDisplayData] = useState(null)

    // set up display data for our external profile component
    const [displayProfile, setDisplayProfile] = useState({
        name: "N/A",
        age: "N/A",
        location: "N/A",
        email: "N/A",
        role: "N/A",
        bio: "N/A",
        subscribed: false
    })

    // set up a function to happen on change to any field to record the input
    const handleChange = (event) => {

        // destructure the event to get the name, value & checked property
        const {name, value, checked, type} = event.target

        // create an object to track the updated informatio the user enters
        const updatedFormData = {

            // copy over existing formData into our new object
            ...formData,

            
            // add the new data. 
            // *note* that the bracket notation [] evaluates what we pass into the brackets and allows us to use it as a key, which we need here because we need a one-word value for the property
            // this is the same as [event.target.name]: event.target.value/checkbox
            // this says if type = checkbox, use checked value else use value
            [name]: type === "checkbox" ? checked : value
        }

        // set our form data to the updated data using our set function
        setFormData(updatedFormData)
    }

    // the function to run on form submission
    const handleSubmit = (event) => {

        // prevent the page from refreshing on submit
        event.preventDefault()

        // // alert the user of the name, age, location, email or role fields are left empty
        // if ((formData.name === "") || (formData.age === 0) || (formData.location === "") || (formData.email === "") || (formData.role === "")) {
        //     alert("You have not filled out the entire form!")
        // }
        const {name, age, email, location, role} = formData

        if (name && age && email && location && role) {
            setDisplayProfile(formData)
        } else {
            alert("All fields must be filled out")
        }

        // set our displayData equal to our formData at the time of submission
        // setDisplayData(formData)

        // clear our form inputs after submit
        setFormData(defaultFormData)
    }


  return (
    <>
        <h2>Profile Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Age: </label>
                <input 
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Location: </label>
                <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email: </label>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Role: </label>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option>Choose a Role</option>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                    <option value="instructor">Instructor</option>
                    <option value="guest">Guest</option>
                </select>
            </div>
            <div>
                <label>Bio: </label>
                <div>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        style={{width: "400px", resize: "none"}}
                        rows={16}
                    />
                </div>
            </div>
            <div>
                <label>Subscribe: </label>
                <input
                    name="subscribed"
                    type="checkbox"
                    checked={formData.subscribed}
                    onChange={handleChange}
                />
            </div>
            <button>Submit</button>
        </form>

        {/* Display area */}
        {/* {displayData && (
            <>
                <h3>Name: {displayData.name}</h3>
                <p>Age: {displayData.age}</p>
                <p>Location: {displayData.location}</p>
                <p>Email: {displayData.email}</p>
                <p>Role: {displayData.role}</p>
                <p>Bio: {displayData.bio}</p>
                {displayData.subscribed ? <p>{displayData.name} is subscribed</p> :<p>{displayData.name} is NOT subscribed</p>}
            </>
        )} */}
        <DisplayProfile {...displayProfile}/>
    </>
  )
}

export default ProfileForm