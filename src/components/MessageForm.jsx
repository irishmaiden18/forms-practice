import { useState } from "react"

const MessageForm = () => {

    // set up state variable and setting function
    const [message, setMessage] = useState("")

    // set up display state variable and setting function for the data we want to display
    const [displayMessage, setDisplayMessage] = useState(null)

    // function to run on form submission
    const handleSubmit = (event) => {

        // stop the page from reloading
        event.preventDefault()

        // set display message to whatever the value of message is at submit
        setDisplayMessage(message)

        // clear message
        setMessage("")
    }

  return (
    <>
        <h2>Message Form</h2>
        
        {/* on submit run the handleSubmit function */}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Message: </label>
                <input
                    type="text"
                    // set the value to the state variable message so that it is connected
                    value={message}
                    // record the data the user inputs by creating an onchange event
                    onChange={(event) => setMessage(event.target.value)}/>
            </div>

            {/* simple submit button */}
            <button>Submit</button>

            {/* Display area for displaying our data, only display if displayMessage exists. it is set to null initially which is falsey so this works */}
            {displayMessage && (
                <p>Message: {displayMessage}</p>
            )}
        </form>
    </>
  )
}

export default MessageForm