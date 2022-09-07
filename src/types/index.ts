export interface IAnyObj {
  [k: string]: any;
}

export interface IQueryOptions {
  page: number;
  pageSize: number;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface IMeta {
  pagination: IPagination;
}

interface IBastAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface IData<T> {
  id: number;
  attributes: T;
}

interface IError {
  status: number;
  name: string;
  message: string;
  details: IAnyObj;
}

export interface IBaseApiResponse<T> {
  data: T;
  meta: IMeta | IAnyObj;
  error: IError;
}

interface IImageFormat {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: unknown;
  size: number;
  url: string;
  width: number;
}

interface IImageFormatList {
  large: IImageFormat;
  medium: IImageFormat;
  small: IImageFormat;
  thumbnail: IImageFormat;
}

export interface IImageAttributes extends IBastAttributes {
  alternativeText: string;
  caption: string;
  ext: string;
  url: string;
  formats: IImageFormatList;
  height: number;
  width: number;
  placeholder: string;
}

export interface IImage {
  data: IData<IImageAttributes>;
}

export interface IPostAttributes extends IBastAttributes {
  content: any;
  description: string;
  title: string;
  image: IImage;
  slug: string;
}

export interface ISectionItemAttributes extends IBastAttributes {
  title: string;
  description: string;
  url: string;
  image: IImage;
  order: number;
}

export interface IPost {
  data: IData<IPostAttributes>[];
}

export interface ISectionItem {
  data: IData<ISectionItemAttributes>[];
}

export interface ICategoryAttributes extends IBastAttributes {
  name: string;
  description: string;
  posts: IPost;
  slug: string;
  type: string;
}

export interface ISectionAttributes extends IBastAttributes {
  name: string;
  description: string;
  items: ISectionItem;
}

export interface ICategory {
  name: string;
  slug: string;
}
export interface IAuthor {
  fullName: string;
  avatar: IImage;
}

interface ICategoryDataForPost<T> {
  data: T;
}
interface IAuthorDataForPost<T> {
  data: T;
}
interface IPostsDataForPost<T> {
  data: T;
}

export interface IPostAttributes extends IBastAttributes {
  title: string;
  description: string;
  body: string;
  categories: ICategoryDataForPost<IData<ICategory>[]>;
  cover: IImage;
  author: IAuthorDataForPost<IData<IAuthor>>;
  relatedPosts: IPostsDataForPost<IData<IPostAttributes>[]>;
}

export type ICategoriesResponse = IBaseApiResponse<
  IData<ICategoryAttributes>[]
>;

export type ICategoryResponse = IBaseApiResponse<IData<ICategoryAttributes>>;
export type ISectionResponse = IBaseApiResponse<IData<ISectionAttributes>>;
export type IPostResponse = IBaseApiResponse<IData<IPostAttributes>>;

export type ISectionsResponse = IBaseApiResponse<IData<ISectionAttributes>[]>;
export type IPostsResponse = IBaseApiResponse<IData<IPostAttributes>[]>;
