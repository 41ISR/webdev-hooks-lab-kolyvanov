export const Input = ({...rest}) => {
    return (
        <input 
            className="input" id="bookInput" placeholder="Название книги..." 
            {...rest}
        />
    )
}