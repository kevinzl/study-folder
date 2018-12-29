import React, { Component } from 'react';
import store from '../../store';
import * as createAction from '../../store/createAction';
import * as Api from '../../api/api';
import { connect } from 'react-redux';
import './Todo.css';

class Todo extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

        // ajax-初始化数据
        /*Api.getTodoItemList({
            // id: 'mock_ids'
        }).then((res)=>{
            const action = createAction.getInitItemAction(res.obj);
            store.dispatch(action);
        });*/

        // ajax-初始化数据 - redux-thunk
        const action = createAction.getInitItemThunkAction(); //这个action就是一个函数action
        store.dispatch(action);

    }

    render() {
        const { intVal, itemList, intValChange, addItem, delItem } = this.props;
        return (
            <div className="Todo">
                <div className="add_top">
                    <input placeholder='add todo' value={ intVal } onChange={ intValChange } />
                    <button onClick={ ()=>{ addItem(intVal) } }>Add Item</button>
                </div>
                <div className="add_list">
                {
                    itemList.map((item, index)=>{
                        return(
                            <div className="add_item" key={index}>{ item } <span onClick={ ()=>{ delItem(index) } } className="btn_close">X</span></div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

// UI-组件-性能优化
/*
const Todo = (props) => {
    const { intVal, itemList, intValChange, addItem, delItem } = props;
    return (
        <div className="Todo">
            <div className="add_top">
                <input placeholder='add todo' value={ intVal } onChange={ intValChange } />
                <button onClick={ ()=>{ addItem(intVal) } }>Add Item</button>
            </div>
            <div className="add_list">
                {
                    itemList.map((item, index)=>{
                        return(
                            <div className="add_item" key={index}>{ item } <span onClick={ ()=>{ delItem(index) } } className="btn_close">X</span></div>
                        )
                    })
                }
            </div>
        </div>
    );
}
*/

// 把的store数据挂载到Props上,通过对象的方式返回出去
const mapStateToProps = (state) => {
    return {
        intVal: state.intVal,
        itemList: state.itemList
    };
}

// 把的store.dispatch方法挂载到Props上
const mapDispatchToProps = (dispatch) => {
    return {
        // input-change
        intValChange(e) {
            const intVal = e.target.value;
            const action = createAction.getIntValAction(intVal);
            dispatch(action);
        },

        // add-item
        addItem(intVal) {
            if(intVal){
                const action = createAction.getAddItemAction();
                dispatch(action);
            }
        },

        // del-item
        delItem(id) {
            const action = createAction.getDelItemAction(id);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
