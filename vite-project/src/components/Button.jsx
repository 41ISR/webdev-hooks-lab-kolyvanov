export const Button = ({children,...rest}) => {
    return (
        <button {...rest} className="btn" id="addBtn">
            {children}
        </button>
    )
}