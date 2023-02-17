import { Avatar } from "antd";

interface userInfo {
	userName: string;
	photoUrl: string;
}


const Greeting = (props: userInfo) => {
	const { userName, photoUrl } = props;
	
	return (
		<div className="userInfo">
			<Avatar size='large' src={<img src={photoUrl} alt="avatar" />} />
			<h2 className="greeting">{userName}'s Habit Tracker</h2>
		</div>
	);
};

export default Greeting;