import React from 'react';
import { Todolist } from './todolist';

function App() {
    const tasks = [
        { id: 1, title: 'Bread', isDone: true },
        { id: 2, title: 'Milk', isDone: true },
        { id: 3, title: 'Apples', isDone: false },
    ];
    const tasks1 = [
        { id: 1, title: 'React', isDone: false },
        { id: 2, title: 'Algorithms', isDone: false },
        { id: 3, title: 'JS', isDone: true },
    ];
    const tasks2 = [
        { id: 1, title: 'Bon Jovi', isDone: true },
        { id: 2, title: 'Epidemia', isDone: true },
        { id: 3, title: 'Nightwish', isDone: false },
    ];

    return (
        <div className='App'>
            <Todolist title='What to buy' tasks={tasks} />
            <Todolist title='What to learn' tasks={tasks1} />
            <Todolist title='What to listen' tasks={tasks2} />
        </div>
    );
}

export default App;
