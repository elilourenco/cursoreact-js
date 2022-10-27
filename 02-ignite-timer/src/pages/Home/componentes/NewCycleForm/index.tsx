import {FormContainer, MinutesAmountInput, TaskInput} from "./styles"
import { useForm, useFormContext } from "react-hook-form";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";









export function NewCycleForm(){
    const {activeCycle} = useContext(CyclesContext)
    const {register}= useFormContext()

    
    return(
    <FormContainer>
        <label htmlFor=""> Vou trabalhar aqui</label>
        <TaskInput id="task" 
        list="task-suggestions"
         placeholder="Dê um nome para o seu projecto"
         disabled={!!activeCycle}
         {...register('task')}/>

        <datalist id="task-suggestions">
         <option value="Projecto 1"/>
         <option value="Projecto 2"/>
         <option value="Projecto 3"/>
         <option value="Banana"/>
        </datalist>
        <label htmlFor="">durante</label>
        <MinutesAmountInput
         type="number"
          id="minutesAmount"
           placeholder="00"
           step={5}
           min={1}
           max={60}
           disabled={!!activeCycle}
           
           {...register('minutesAmount',{valueAsNumber:true})}
           />
        <span>Minutes</span>
     </FormContainer>)
}