import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useLocalStorageState from '../hooks/useLocalStorageState';
import { FiTrash2, FiCheckSquare, FiSquare } from 'react-icons/fi'; // Use icons

// Keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
`;

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

// Styled Components using CSS Variables
const TodoContainer = styled.div`
  padding: 3rem 1.5rem;
  max-width: 650px; /* Slightly wider */
  margin: 2rem auto;
  background-color: var(--color-white);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  animation: ${fadeIn} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--color-black);
  font-weight: 700;
  font-size: 1.8rem;
`;

const AddTaskForm = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.9rem 1rem;
  border: 1px solid var(--color-gray-border);
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  background-color: var(--color-gray-bg);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px rgba(92, 158, 255, 0.25);
    background-color: var(--color-white);
  }
`;

const AddButton = styled.button`
  background: var(--gradient-primary, var(--color-primary));
  color: var(--color-white);
  border: none;
  padding: 0.9rem 1.8rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 12px rgba(92, 158, 255, 0.3);

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(92, 158, 255, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 2px 6px rgba(92, 158, 255, 0.25);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const TaskListUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid var(--color-gray-border);
  animation: ${slideIn} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  opacity: 0; /* Start hidden for animation */
  animation-delay: ${props => props.index * 0.07}s; /* Stagger animation */
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(92, 158, 255, 0.05); /* Subtle hover background */
  }
`;

const TaskContent = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;

const TaskText = styled.span`
  word-break: break-word;
  color: ${props => props.completed ? 'var(--color-gray-light)' : 'var(--color-gray-dark)'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  transition: color 0.2s ease;
`;

const CheckboxIcon = styled.span`
  color: ${props => props.completed ? 'var(--color-primary)' : 'var(--color-gray-medium)'};
  font-size: 1.3rem;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
      transform: scale(1.15);
  }
`;

const RemoveButton = styled.button`
  background-color: transparent;
  color: var(--color-gray-light);
  border: none;
  padding: 0.5rem;
  border-radius: 50%; /* Circular button */
  cursor: pointer;
  font-size: 1.1rem;
  margin-left: 1rem;
  display: flex; /* Center icon */
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.15s ease;

  &:hover {
    background-color: rgba(231, 76, 60, 0.1); /* Light red background */
    color: var(--color-error); /* Red */
    transform: scale(1.1);
  }
`;

// ToDoList Component using the custom hook and refined styles
const ToDoList = () => {
  const [tasks, setTasks] = useLocalStorageState('todoTasks', []);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks(prevTasks => [...prevTasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleRemoveTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TodoContainer>
      <Title>Lista de Tarefas</Title>
      <AddTaskForm>
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Adicionar nova tarefa..."
          aria-label="Nova tarefa"
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <AddButton onClick={handleAddTask}>Adicionar</AddButton>
      </AddTaskForm>
      <TaskListUl>
        {tasks.map((task, index) => (
          <TaskItem key={task.id} index={index}>
            <TaskContent onClick={() => handleToggleComplete(task.id)}>
              <CheckboxIcon completed={task.completed}>
                {task.completed ? <FiCheckSquare /> : <FiSquare />}
              </CheckboxIcon>
              <TaskText completed={task.completed}>
                {task.text}
              </TaskText>
            </TaskContent>
            <RemoveButton onClick={() => handleRemoveTask(task.id)} aria-label={`Remover tarefa ${task.text}`}>
              <FiTrash2 />
            </RemoveButton>
          </TaskItem>
        ))}
      </TaskListUl>
    </TodoContainer>
  );
};

export default ToDoList;
