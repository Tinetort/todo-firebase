import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplited: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: 'flex',
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,
}

const Todo = ({ todo, toggleComlete, deleteTodo }) => {
    return (
        <li className={todo.comleted ? style.liComplited : style.li}>
            <div className={style.row}>
                <input
                    onChange={() => toggleComlete(todo)}
                    type="checkbox"
                    checked={todo.comleted ? 'checked' : ''}
                />
                <p
                    onClick={() => toggleComlete(todo)}
                    className={todo.comleted ? style.textComplete : style.text}
                >
                    {todo.text}
                </p>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>
                <FaRegTrashAlt />
            </button>
        </li>
    )
}

export default Todo
