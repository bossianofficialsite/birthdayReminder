
function birthdayCount() {
    const [count, setCount] = useState(0);

    setCount(function (previous) {
      return previous + 1;
    });
}