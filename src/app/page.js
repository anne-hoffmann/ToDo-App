import React from 'react';
import TodoList from './components/TodoApp';
import Greeting from './components/Greeting';

const Home = () => {
  return (
    <section className='h-screen bg-[#F1F1F1]'>
      <Greeting />
      <TodoList />
    </section>
  )
}

export default Home