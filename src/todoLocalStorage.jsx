export const getLocalStorageTodoData = () => {
  const data = localStorage.getItem('todos');
  return data ? JSON.parse(data) : [];
};

export const setLocalStorageTodoData = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};