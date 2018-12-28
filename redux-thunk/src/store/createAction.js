/**
 * 统一管理Action的创建
 */
import actionTypes from './actionType';
import * as Api from '../api/api';

// export const getIntValAction = (val) => ({
//     type: INT_CHANGE,
//     intVal: val
// });

//input-change
export const getIntValAction = (val) => {
    const action = {
        type: actionTypes.INT_CHANGE,
        intVal: val
    }
    return action;
}

//add-item
export const getAddItemAction = (val) => {
    const action = {
        type: actionTypes.ADD_ITEM,
        intVal: val
    }
    return action;
}

// del-item
export const getDelItemAction = (id) => {
    const action = {
        type: actionTypes.DELETE_ITEM,
        id: id
    }
    return action;
}

// init-item
export const getInitItemAction = (obj) => {
    const action = {
        type: actionTypes.INIT_ITEM_LIST,
        obj
    }
    return action;
}

// 返回一个函数Action, 可以直接接受到store的dispatch方法
export const getInitItemThunkAction = () => {
    return (dispatch) => {
        Api.getTodoItemList().then((res)=>{
            const action = getInitItemAction(res.obj);
            dispatch(action);
        })
    }

    // const initList = (dispatch) => {
    //     Api.getTodoItemList().then((res)=>{
    //         const action = getInitItemAction(res.obj);
    //         dispatch(action);
    //     })
    // }
    // return initList;
}
