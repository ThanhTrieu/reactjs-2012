
const ButtonComponent = (props) => {
  return (
    <>
      <button
        type={props.type}
        onClick={() => props.click()}
      >{props.children}</button> 
    </>
  )
}

export default ButtonComponent;