import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

function* loadComic(action) {
  yield take('INCREMENT');
	var data = yield call('http://localhost:8081/comic/api/v1/comics/init');
	// When the data has finished loading, we dispatch the dataLoaded action.
	put(dataLoaded(data));
}

function* fetchDataApi() {
  yield fork(loadComic);
}

export default fetchDataApi;
