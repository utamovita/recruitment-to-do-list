import { GetServerSideProps } from "next";
import { Todo } from "@customTypes/todos.type";
import { TodosService } from "@services/todos.service";
import { TodosPage } from "@components/views/todos-page/todos-page.component";
import { handleError } from "@utils/error";

type Props = {
  initialTodos: Todo[];
};

const Home = ({ initialTodos }: Props) => {
  return (
    <TodosPage initialTodos={initialTodos}/>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const todos = await new TodosService().getData();

    return {
      props: {
        initialTodos: todos
      }
    };
  } catch (error) {
    const errorMessage = handleError('fetching todos data', error);

    throw new Error(errorMessage);
  }
};

export default Home;