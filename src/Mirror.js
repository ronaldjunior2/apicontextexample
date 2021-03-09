import {useCount} from './context/Count'
export default function Mirror(){
    const {count} = useCount();
    return(<div>Mirror:{count}</div>)
}