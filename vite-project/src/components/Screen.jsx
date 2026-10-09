import { BookForm } from "./Book-form"
import { BookList } from "./Book-list"
import { FilterChip } from "./Filter-chip"

export const Screen = ({ books, showOnlyUnread, onToggleFilter, onAdd, onToggleRead, onDelete }) => {

    const visibleBooks = showOnlyUnread
        ? books.filter(book => !book.done)
        : books

    return (
        <section className="screen active" id="screen-shelf">
            <p className="greeting">Добрый вечер</p>
            <BookForm onAdd={onAdd} />
            <div className="list-toolbar">
                <span className="toolbar-title">Книги</span>
                <FilterChip checked={showOnlyUnread} onChange={onToggleFilter} />
            </div>
            <BookList books={visibleBooks} onToggleRead={onToggleRead} onDelete={onDelete} />

        </section>
    )

}
