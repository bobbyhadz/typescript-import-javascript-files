import { getEmployee } from './employee';

type Employee = {
  id: number;
  name: string;
  salary: number;
};

const emp = getEmployee(1, 'James', 100) as Employee;

console.log(emp.id); // 👉️ 1
console.log(emp.name); // 👉️ "James"
console.log(emp.salary); // 👉️ 100
