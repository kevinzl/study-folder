import React, { Component } from 'react';
import store from '../../store/index';
import * as createAction from '../../store/createAction';
import './Todo.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            intVal: '',
            itemList: []
        }

        // 监听-store
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount(){
        this.handleStoreChange();
    }

    // stroe-change
    handleStoreChange = () => {
        // 获取store-数据
        const stores = store.getState();
        this.setState({
            intVal: stores.intVal,
            itemList: stores.itemList
        });
    }

    // input-change
    intValChange = (e) => {
        const intVal = e.target.value;

        // 指定-Action
        const action = createAction.getIntValAction(intVal);

        // 派发-Action
        store.dispatch(action);
    }

    // add-item
    addItem = () => {
        if(this.state.intVal){
            const action = createAction.getAddItemAction();
            store.dispatch(action);
        }
    }

    // del-item
    delItem = (id) => {
        console.log(id);
        const action = createAction.getDelItemAction(id);
        store.dispatch(action);
    }


    render() {
        const { itemList, intVal } = this.state;
        return (
            <div className="Todo">
                <div className="add_top"><input placeholder='add todo' value={ intVal } onChange={ this.intValChange }/> <button onClick={ this.addItem }>Add Item</button></div>

                <div className="add_list">
                {
                    itemList.map((item, index)=>{
                        return(
                            <div className="add_item" key={index}>{ item } <span onClick={ ()=> { this.delItem(index) } } className="btn_close">X</span></div>
                        )
                    })
                }

                </div>

            </div>
        );
    }
}

export default Todo;
