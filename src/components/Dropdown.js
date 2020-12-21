import React, { useState,useEffect,useRef } from 'react';

const Dropdown = ({label,options,selected,onSelectedChange})=>{
    const [open,setOpen] = useState(false);
    const ref = useRef();

    const onClickFunc = (e)=>{
            if(ref.current.contains(e.target)){
                return;
            }
            setOpen(false);
        }
    

    useEffect(()=>{
        document.body.addEventListener('click',onClickFunc);

        return()=>{
            document.body.removeEventListener('click',onClickFunc);
        }
    },[]);
    console.log(options)
    const renderedOptions = options.map((option)=>{
        console.log(option.value)
        if(option.value === selected.value){
            return null;
        }
        return(
            <div 
            key={option.value} 
            className="item"
            onClick={()=>onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })

    return (
    <div ref={ref} className="ui form">
        <div className="field">
            <label className="label">{label}</label>
            <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open? 'visible active':''}`}>
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${open?'visible transition':''}`}>
                    {renderedOptions}
                </div>
            </div>
        </div>
    </div>)
}

export default Dropdown