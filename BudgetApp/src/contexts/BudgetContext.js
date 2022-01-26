import React, { useContext } from 'react';
import {v4 as uuidV4 } from 'uuid'
import  useLocalStorage  from '../hooks/useLocalStorage';
const BudgetsContext = React.createContext();

export default function useBudgets() {
    return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage('budgets',[]);
    const [expenses, setExpense] = useLocalStorage('expenses',[]);
    function getBudgetExpenses(budgetId){
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
    function addExpense(description, amount, budgetId ){
        setExpense(prevExpenses => {
            return [...prevExpenses, {id: uuidV4(), description, amount, budgetId}]
        })
    }
    function addBudget(name, max){
        setBudgets(prevBudgets =>{
            if(prevBudgets.find(budget =>budget.name === name)){
                return prevBudgets
            }
            return [...prevBudgets, { id:uuidV4() , name, max}]
        })
    }
    function deleteExpense({ id }){
        setExpense(prevExpenses => {
            return prevExpenses.filter(expenses => expenses.id !== id);
        })
    }
    function deleteBudget(id){
        setBudgets(prevBudget =>{
            return prevBudget.filter(budget => budget.id !== id);
        })
    }
    return <BudgetsContext.Provider value={{
         budgets,
         expenses,
         getBudgetExpenses,
         addExpense,
         addBudget,
         deleteExpense,
         deleteBudget 
    } } >
        {children}
    </BudgetsContext.Provider>
}