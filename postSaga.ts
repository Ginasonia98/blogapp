import { takeLatest, put, select } from 'redux-saga/effects';
import { setPosts, getPostSuccess, getPostFetch } from './postSlice';

function* fetchPostsSaga(): Generator<any, void, any> {
  const posts = yield select((state) => state.post.posts);

  const newPost = {
    title: 'Post 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'URL_IMAGE_3',
  };

  const updatedPosts = [...posts, newPost];

  yield put(setPosts(updatedPosts));
  yield put(getPostSuccess(updatedPosts)); // Dispatch getPostSuccess action to update the posts state
}

export default function* postSaga(): Generator {
  yield takeLatest(getPostFetch.type, fetchPostsSaga);
}
