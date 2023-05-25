import OriginalSelect from 'react-select';

export default function Select({options, ...restProps}: any){
    return(
        <OriginalSelect options={options}/>
    )
}

