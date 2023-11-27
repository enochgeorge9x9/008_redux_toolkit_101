import { createSlice, nanoid } from "@reduxjs/toolkit";

interface todo {
    id: string;
    text: string
}

interface initialState {
    todos: todo[]
}

const initialState: initialState = {
    todos: [
        {
            id: '1',
            text: 'First Todo'
        },
        {
            id: '2',
            text: 'Second Todo'
        }
    ]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            const id = action.payload
            state.todos = state.todos.filter((todo) => {
                return todo.id !== id
            })
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            state.todos.forEach((todo) => {
                if (todo.id === id) {
                    todo.text = text
                }
            })

        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer;