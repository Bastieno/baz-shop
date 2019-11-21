import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';

import ShopActionTypes from './shop.types';

// worker saga
export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get()
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapShot); 
    yield put(fetchCollectionsSuccess(collectionMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message)) 
  }
}

// Listener saga (listens for the FETCH_COLLECTIONS_START action-type and 
// invokes the fetchCollectionsAsync )
export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ])
}
 