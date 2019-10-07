const Todo = (props) => {
  const {
    completed,
    note,
    updateStatus,
    deleteTodo
  } = props;

  return (
    <div className={completed ? 'note completed' : 'note'}>
      <div>
        <input
          onChange={updateStatus}
          className="note-toggle"
          type="checkbox"
          checked={completed}/>
        <label>{note}</label>
      </div>
      <div className="button" onClick={deleteTodo}>x</div>
    </div>
  )
};


export default Todo;
