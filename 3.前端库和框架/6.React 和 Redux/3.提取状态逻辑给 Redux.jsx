// 请在此处定义 ADD、addMessage()、messageReducer()、store：
const ADD = 'ADD';

const addMessage = (message)=>{return {type:ADD,message:message}};

const messageReducer = (state=[],action)=>{


    switch(action.type){
        case ADD:{

            return [
                ...state,
                action.message,
            ]

            break;
        }
        default:{
            return state;
        }
    }

}

const store = Redux.createStore(messageReducer);