import { put, takeEvery } from "redux-saga/effects";
import { SET_USER_DATA,  USER_LIST } from "./constants";



function* userList(){
    const url = "https://dummyjson.com/users"
    let data = yield fetch(url)
    let mydata = yield data.json();
    console.log(mydata);
    yield put({type:SET_USER_DATA, data})
}


export default function* SagaData(){
    yield takeEvery(USER_LIST, userList)
}