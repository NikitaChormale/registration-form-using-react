import React, { useEffect, useState } from 'react'
import "./Home.css"
import imgmarathi from "./marathi1.jpg";
import imgenglish from "./english1.jpg";
import imghindi from "./hindi.jpg";


function Home() {
     
  
const [formdata,setFormData]=useState({
    name:"",
    age:"",
    city:"",
    error:"",
    gender:"",
    subject:[],
});
useEffect (()=>{
   const storeData=localStorage.getItem("userData");
   if(storeData){
    const parsedData=JSON.parse(storeData);
    setFormData({
        name:parsedData.name||"",
        age:parsedData.age || "",
        error: "",
    });
   }
},[]);


useEffect(()=>{
    if(name.length>0 && name.length<3){
        setFormData
        ({...formdata,error:
            "name must be at least 3 charcter"})
    }
    else if( formdata.name.length>20){
        setFormData
        ({...formdata,error:
            "name must be at less than 20 charcter"})
    }
     else if (formdata.age<18){
       setFormData
        ({...formdata,error:
            "you must be at least 18 years old"});
    }
    else if(formdata.age>60){
        setFormData
        ({...formdata,error:
            "you must be less than 60 years old"})
    }
    else{
    setFormData
        ({...formdata,error:""})
}
},[formdata.name,formdata.age]);

const saveName=()=>{
    if (formdata.error){
        alert( formdata.error);
        return;
    }
localStorage.setItem("userData",JSON.stringify(formdata));

};



  return (
  
    <div>
        <h1>Hello ,{formdata.name}</h1>
        <p>You are {formdata.age ?formdata.age : "unknown"} years old.</p>
        <p>{formdata.city} is  a Great placeto live!.</p>
        <p>you choose to learn {formdata.subject.join(" ")|| "no subject"}.</p>

        <div>
      <input text="text"
       placeholder='Enter your Name'
      className='input'
      onChange={(e)=>{
        setFormData({...formdata,name:e.target.value});
        
      }}
      value={formdata.name}

      />
      </div>
      <div>
      <input 
      type="number"
       placeholder='Enter your Age'
      className='input'
      value={formdata.age}
      onChange={(e)=>{
        setFormData({...formdata,age:e.target.value});
      }}
      />
      </div>
      <div>
        <select 
        onChange={(e)=>{
            setFormData({
                ...formdata,city:e.target.value
            })
            value={formdata,city}
          className='input'
        }}>
            <option value="pune">Select Your city</option>
            <option value="pune">pune</option>
            <option value="solapur">Solapur</option>
            <option value="latur">Latur</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="ngp">Nagpur</option>
        </select>
      </div>
      <div>
        <p> select Gender:</p>
        <input
         type='radio'
         name='gender'
         value='female'
         checked={formdata.gender==="female"}
         onChange={(e)=>{
            setFormData({
                ...formdata,gender:e.target.value
            });
         }}
         
         />{""}
         Female
         <input type='radio'
         name='gender'
         value='male'
         checked={formdata.gender==="male"}
         onChange={(e)=>{
            setFormData({
                ...formdata,gender:e.target.value
            });
         
        }}
         />{""}
         Male
      </div>
      <div>
        
        <input 
        type='checkbox'
        value="Marathi"
        checked={formdata.subject.includes("Marathi")}
        onChange={(e)=> {
            const val=e.target.value;

            if(formdata.subject.includes(val)){
            setFormData({
                ...formdata,subject:formdata.subject.filter(
                    (subject)=>subject!==val
                ),
            });
        }
        else{
            setFormData({
                ...formdata,subject:[...formdata.subject,val],
            });
        }
        }}
        />{" "} Marathi

        <input 
        type='checkbox'
        value="Hindi"
        checked={formdata.subject.includes("Hindi")}
        onChange={(e)=> {
            const val=e.target.value;

            if(formdata.subject.includes(val)){
            setFormData({
                ...formdata,subject:formdata.subject.filter(
                    (subject)=>subject!==val
                ),
            });
        }
        else{
            setFormData({
                ...formdata,subject:[...formdata.subject,val],
            });
        }
        }}
        />{" "} Hindi


<input 
        type='checkbox'
        value="English"
        checked={formdata.subject.includes("English")}
        onChange={(e)=> {
            const val=e.target.value;

            if(formdata.subject.includes(val)){
            setFormData({
                ...formdata,subject:formdata.subject.filter(
                    (subject)=>subject!==val
                ),
            });
        }
        else{
            setFormData({
                ...formdata,subject:[...formdata.subject,val],
            });
        }
        }}
        />{" "} English
      </div>
    
{
    formdata.subject.includes("Marathi")? (
        <img src={imgmarathi} alt='marathi' className='subject-img'/>
    ): 
    null
}
{
    formdata.subject.includes("Hindi")? (
        <img src={imghindi} alt='hindi' className='subject-img'/>
    ): 
    null
}
{
    formdata.subject.includes("English")? (
        <img src={imgenglish} alt='english' className='subject-img'/>
    ): 
    null
}

      <p className='error-text'>{formdata.error}</p>
      <div>
        
        <button className={`btn ${formdata.error ? "btn-disabled":null}`}
         onClick={saveName} >
            Save
        </button>
        
        <button
        className="btn"
        onClick={()=>{
            localStorage.clear()
            setFormData({name:"",
                age:"",
                error:"",
                city:"",
                gender:"",
                subject:[]
        });
        }}>
            Clear
        </button>
      </div>
    </div>
    
  )
}

export default Home
