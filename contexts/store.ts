export type PostType = {
  title: string;
  description: string;
  imageUrl: string;
}

export type StoreType = {
  posts: PostType[],
  isLoading: boolean
}

const store: StoreType = {
  posts: [],
  isLoading: false
}

export default store