import { useState } from "react";
function List(){
    const [marks,setMarks]=useState([1,2,3,4,5])
    return (
        <div>
            <p>This is list data</p>
                {
                    marks.map((i)=>{
                         return <p key={i}>{i}</p>
                    })
                }

        </div>
    )

}
export default List