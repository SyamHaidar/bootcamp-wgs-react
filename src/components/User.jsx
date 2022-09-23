const User = ({ name, age }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px', marginBottom: '8px' }}>
      <span>Name: {name}</span>
      <span style={{ margin: '0 8px' }}>&ndash;</span>
      <span>Age: {age}</span>
    </div>
  )
}

export default User
