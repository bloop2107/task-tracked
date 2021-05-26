import PropTypes from 'prop-types'



const Button = ({ color, text, onShow,inputShow }) => {
    return (
        // </button>
        <button onClick={() => onShow(inputShow.show)} className={"focus:outline-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " + color}>
            {text}
        </button>

    )
}

Button.defaultProps = {
    color: 'bg-blue-500',
    text: 'Add'
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
}


export default Button
