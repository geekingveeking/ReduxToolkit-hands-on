import { createSlice } from "@reduxjs/toolkit";

const initialState={
users:[
   
]
};

export const nameSlice=createSlice(

    {
        name:"customerNames",
        initialState,
        reducers:{
            addName:(state,action)=>{
                    state.users.push(action.payload);
                   
                  
            },
            masterCheckbox:(state,action)=>{
                state.users.forEach((element)=>{
                    element.isChecked=action.payload;
                })

            },
            toggleChecked:(state,action)=>{
                state.users[action.payload].isChecked=!state.users[action.payload].isChecked;

            },
            deleteChecked:(state)=>{
                   state.users= state.users.filter((element)=>!(element.isChecked));
            },
            deleteAll:(state)=>{
                    state.users=[];

            }
            }
        }
    
)

export const {addName,deleteChecked,deleteAll,toggleChecked,masterCheckbox} = nameSlice.actions;
export default  nameSlice.reducer;