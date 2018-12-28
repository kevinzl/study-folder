/**
 * sagas文件说明:
 * 主要用于一些大型的项目中，非常复杂的业务逻辑或者AJAX异步逻辑的单独抽离管理
 */
import { takeEvery, put, all } from 'redux-saga/effects';
import actionTypes from './actionType';
import * as Api from "../api/api";
import * as createAction from "./createAction";
// import store from "./index";

/**
 * 这个方法可以是普通方法也可是generator函数，推荐使用generator函数
 * saga-initSagaList的业务处理函数 getSagaInitList
 * @returns {IterableIterator<PutEffect<{type, obj}> | *>}
 */
function* getSagaInitList() {
    try {
        const res = yield Api.getTodoItemList();
        const action = createAction.getInitItemAction(res.obj);
        yield put(action); // store.dispatch
    }catch (e) {
        // console.log(e); // 异常处理
    }

    // 自我测试：直接这样写貌似也可以，需要import store
    /*yield Api.getTodoItemList({
        // id: 'mock_ids'
    }).then((res)=>{
        const action = createAction.getInitItemAction(res.obj);
        store.dispatch(action);
    });*/

}

/**
 * 普通函数-saga-initSagaList的业务处理函数
 */
/*function getSagaInitList() {
    console.log('13131')
}*/

 /**
 * ES6 generator函数
 * takeEvery: 捕捉Action (reducer)
 * saga-initSagaList
 * @returns {IterableIterator<ForkEffect | *>}
 */
function* initSagaList() {
    yield takeEvery( actionTypes.SAGA_INIT_LIST, getSagaInitList);
}

//test-saga 的业务函数-getSagaTest
function getSagaTest() {
    console.log('hello Saga! saga-test! saga-test! saga-test!');
}

//test-saga
function* testSaga() {
    // yield takeEvery('saga_test', getSagaTest);
    yield takeEvery(actionTypes.SAGA_TEST, getSagaTest);
}

//all-export多个业务
export default function* rootSaga() {
    yield all([
        initSagaList(),
        testSaga()
    ]);
}
