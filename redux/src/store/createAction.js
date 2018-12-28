/**
 * 统一管理Action的创建
 */
import actionTypes from './actionType';

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

export const getDelItemAction = (id) => {
    const action = {
        type: actionTypes.DELETE_ITEM,
        id: id
    }
    return action;
}

