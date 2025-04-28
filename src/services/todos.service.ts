import { validateData } from "@validation/validation";
import { TodosDto, TodosDtoType } from "../dto/todos.dto";
import { todosApi } from "@api/todos.api";
import { Todo } from "@customTypes/todos.type";
import { handleError } from "@utils/error";

class TodosService {
  public async getData() {
    try {
      const response = await todosApi.fetch();

      return this.processTodosData(response.data, "fetchTodos");
    } catch(error) {
      const errorMessage = handleError("fetching todos", error);
      throw new Error(errorMessage);
    }
  }

  private processTodosData(response: unknown, actionName: string) {
    let validatedResponse;

    try {
      validatedResponse = this.validateDto(response);
    } catch (error) {
      const errorMessage = handleError(`validating error: ${actionName}`, error);
      throw new Error(errorMessage);
    }

    try {
      return this.mapToDomain(validatedResponse);
    } catch (error) {
      const errorMessage = handleError(`mapping data error: ${actionName}`, error);
      throw new Error(errorMessage);
    }
  }

  private validateDto(data: unknown) {
    return validateData<TodosDtoType>(data, TodosDto);
  }

  private mapToDomain(data: TodosDtoType): Todo[] {
    return data.map((item) => ({
      userId: item.userId,
      id: item.id,
      title: item.title,
      completed: item.completed,
    }));
  }
}

export { TodosService };