import useTodo from "@hooks/use-todos.hook";
import { Filter } from "@components/views/todos-page/filter/filter.component";
import { ToDoList } from "@components/views/todos-page/to-do-list/to-do-list.component";
import { Todo } from "@customTypes/todos.type";
import { PageSpinner } from "@components/shared/spinner.component";

type TodosPageProps = {
  initialTodos: Todo[];
}

function TodosPage(props: TodosPageProps) {
  const { initialTodos } = props;
  const { todos, toggleTodo, filter, setFilter, isLoading } = useTodo(initialTodos);

  if (isLoading) {
    return <PageSpinner />;
  }
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">To do List</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export { TodosPage };