import './Button.css'

function Button ()  {
    const  click = () => {
        // Your logic for handling the button click goes here
        window.location.reload()
      };
return <button onClick={click}>New Quote</button>

}

export default Button;