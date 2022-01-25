
import { Button, Stack } from 'react-bootstrap';
import  Container  from 'react-bootstrap/Container';
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
  <Container>
     <Stack direction='horizontal' gap='2' className='mb-4'>
       <h1 className='me-auto'> Budgets </h1>
       <Button variant='primary'> Add Expenses</Button>
       <Button variant='outline-primary'> Add Budgets</Button>
     </Stack> 
     <div
       style={{
         display:"grid",
         gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
         gap: "1rem",
         alignItems: "flex-start",
       }}
       >
         <BudgetCard name="pk" amount={6000} max={1000} ></BudgetCard>
     </div>
  </Container>
    
  );
}

export default App;
