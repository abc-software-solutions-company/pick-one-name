import * as HttpRequest from '@/api/http-request';

import {IAxiosResponse} from '../axios-client';

export interface ITask {
  id?: string;
  name: string;
  isDone?: boolean;
  createdAt?: string;
  updatedAt?: string;
  todoListId?: number;
}

type Task = IAxiosResponse<ITask>;
type Tasks = IAxiosResponse<ITask[]>;

const getTasks = () => HttpRequest.get<Tasks>('/tasks');
const getTask = (id: string) => HttpRequest.get<Task>(`/tasks/${id}`);
const createTask = (data: ITask) => HttpRequest.post<ITask>('/tasks', data);
const deleteTask = (id: string) => HttpRequest.destroy<ITask>(`/tasks/${id}`);
const updateTask = (id: string, data: ITask) => HttpRequest.patch<ITask>(`/tasks/${id}`, data);

export default {getTasks, getTask, createTask, deleteTask, updateTask};
