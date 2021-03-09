
import {useCount} from './context/Count'

export default function Counter() {
  const {count, setCount} = useCount();

  return (
    <div>
      <spa>
        <b>Count:{count}</b>
      </spa>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}
