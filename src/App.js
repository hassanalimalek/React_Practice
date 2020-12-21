import React,{useState} from 'react';
import Accordion from './components/Accordion.js'
import Search from './components/Search.js'
import Dropdown from './components/Dropdown.js'
import Translate from './components/Translate.js'

const Items = [
    {title:'Abc',
    content :"Alphabet"},
    {title:'Abcdef',
    content :"Alphabetnoino"}

]

const options = [
    {
        label:'The color red',
        value:'red'
    },
    {
        label:'The color green',
        value:'green'
    },
    {
        label:'A shade of Blue',
        value:'blue'
    }
]

const App = ()=>{
    const [selection,setSelection] = useState(options[0])
    return(
        <div>
            {/* <Accordion items={Items}/> */}
            {/* <Search/> */}
            {/* <Dropdown 
            selected={selection}
            onSelectedChange={setSelection}
            options={options}/> */}
            <Translate></Translate>
        </div>
        )
}

export default App