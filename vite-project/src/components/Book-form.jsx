import { useState } from "react"
import { Button } from "./Button"
import { Input } from "./Input"

export const BookForm = ({ onAdd }) => {

    const [bookName, setBookName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const title = bookName.trim()
        if (!title) return

        onAdd(title)
        setBookName("")
    }

    return (
        <form onSubmit={handleSubmit} className="add-book-row">
            <Input value={bookName} onChange={(e) => setBookName(e.target.value)}/>
            <Button>Добавить на полку</Button>
        </form>

    )
}
