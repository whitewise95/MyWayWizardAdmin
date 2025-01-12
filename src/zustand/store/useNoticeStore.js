import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";

const UseNoticeStore = create(
    immer((set) => ({
        todos: [
            {
                id: 1,
                title: "Learn Zustand",
                tasks: [{id: 1, task: "Read documentation", done: false}],
            },
        ],
        addTask: (todoId, newTask) =>
            set((state) => {
                const todo = state.todos.find((todo) => todo.id === todoId);
                if (todo) {
                    todo.tasks.push(newTask); // 불변성 유지: immer가 자동으로 처리
                }
                // return { todos: state.todos }; // 변경된 참조가 기존 상태와 같아 리렌더링되지 않음
            }),
        toggleTask: (todoId, taskId) =>
            set((state) => {
                const todo = state.todos.find((todo) => todo.id === todoId);
                if (todo) {
                    const task = todo.tasks.find((task) => task.id === taskId);
                    if (task) {
                        task.done = !task.done; // 불변성 유지: immer가 자동으로 처리
                    }
                }
                // return { todos: state.todos }; // 변경된 참조가 기존 상태와 같아 리렌더링되지 않음
            }),
    }))
);

export default UseNoticeStore;