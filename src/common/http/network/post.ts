import {IAxiosResponse} from '../axios-types';
import * as HttpRequest from '../http-request';
import {IPost} from '../models/post';

type Post = IAxiosResponse<IPost>;
type Posts = IAxiosResponse<IPost[]>;

const getAllPosts = () => HttpRequest.get<Posts>(`posts`);
const getPost = (id: string) => HttpRequest.get<Post>(`posts/${id}`);
const createPost = (data: IPost) => HttpRequest.post<IPost>('posts', data);
const updatePost = (id: string, data: IPost) => HttpRequest.patch<IPost>(`posts/${id}`, data);
const deletePost = (id: string) => HttpRequest.destroy<IPost>(`posts/${id}`);

const api = {
  getAllPosts,
  getPost,
  createPost,
  deletePost,
  updatePost
};

export default api;
