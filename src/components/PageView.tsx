import { Pages } from './types'
import Dataview from './Dataview';
import AllHabits from './AllHabits';
import Today from './Today/Today';



const PageView = (props: { type: string }) => {

	let page = <p>Hello</p>;

	if (props.type == Pages.today) {
		page = <Today />;
	}
	else if (props.type == Pages.habit) {
		page = <AllHabits type={''} />;
	}
	else if (props.type == Pages.settings) {
		page = <p>Settings coming soon!</p>;
	}
	else {
		page = <Dataview type={props.type}/>
	}

	return (
		<div className="page">
			{page}
		</div>
	);

};

export default PageView;