
const Greeting = (props: { userName: string }) =>{
    return (
    <div>
        <h2>{props.userName}'s Habit Tracker</h2>
    </div>
    );
};

export default Greeting;