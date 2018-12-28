/**
 * 统一管理 reducer
 * 不可以改变原来的state,会返回新的state
 */
import actionTypes from './actionType';

const defaultState = {
    intVal: '', //input 输入的值
    itemList: [] //list数据
}

const reducer = (state = defaultState, action) => {
    //input-change
    if(action.type === actionTypes.INT_CHANGE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.intVal = action.intVal;
        return newState;
    }

    //add-item
    if(action.type === actionTypes.ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.itemList.push(newState.intVal);
        newState.intVal = '';
        return newState;
    }

    //delete-item
    if(action.type === actionTypes.DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.itemList.splice(action.id, 1);
        return newState;
    }


    return state;
}

export default reducer;

/*
export default (state = defaultState, action) => {
    //input-change
    if(action.type === actionTypes.INT_CHANGE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.intVal = action.intVal;
        return newState;
    }

    //add-item
    if(action.type === actionTypes.ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.itemList.push(state.intVal);
        newState.intVal = '';
        return newState;
    }

    return state;
}
*/
