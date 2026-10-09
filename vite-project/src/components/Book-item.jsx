export const BookItem = ({ cover, name, author, done, id, onToggleRead, onDelete }) => {
    return (
        <div className="book-row" data-id={id}>
            <div className="book-cover" style={{ background: "#4f6b52" }}>
                {cover}
            </div>
            <div className="book-info">
                <p className={done ? "book-title done" : "book-title"}>{name}</p>
                <div className="book-author">{author}</div>
            </div>
            <div
                className={done ? "read-check checked" : "read-check"}
                data-role="toggle"
                onClick={() => onToggleRead(id)}
            >
                <span className="check-circle">✓</span>
                <span className="read-label">Прочитано</span>
            </div>
            <button
                className="delete-btn"
                data-role="delete"
                title="Убрать с полки"
                onClick={() => onDelete(id)}
            >
                ✕
            </button>
        </div>
    )
}
