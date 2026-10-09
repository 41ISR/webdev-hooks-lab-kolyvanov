import { BookItem } from "./Book-item"

export const BookList = ({ books, onToggleRead, onDelete }) => {
    return (
        <div className="book-list" id="bookList">
            {books.map(book => (
                <BookItem
                    key={book.id}
                    {...book}
                    onToggleRead={onToggleRead}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}
