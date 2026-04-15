
const DisplayProfile = ({name, age, location, email, role, bio, subscribed}) => {
  return (
    <>
        <h2>Display Profile</h2>
        <h4>Name: {name}</h4>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
        <p>Email: {email}</p>
        <p>Role: {role}</p>
        <p>Bio: {bio}</p>
        {subscribed && <h6>You are a Premium Subcriber!</h6>}
    </>
  )
}

export default DisplayProfile