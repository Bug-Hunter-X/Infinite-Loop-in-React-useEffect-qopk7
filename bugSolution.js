```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    // Correct logic: effect runs on updateCount change only
    console.log("Effect runs!"); 
    //Perform your side effects here
  }, [updateCount]);

  const incrementCount = () => {
    setUpdateCount(updateCount+1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```