import { MyDatePicker } from './MyDatePicker';
import { useState } from 'react';

import { Pages } from './types'
import Dataview from './Dataview';
import AllHabits from './AllHabits';

//import DataViewerWithType from './DataViewer';


const PageView = (props: { type: string }) => {

	let page = <p>Hello</p>;

	if (props.type == Pages.today) {
		page = <p>Today!</p>;
	}
	else if (props.type == Pages.habit) {
		page = <AllHabits />;
	}
	else if (props.type == Pages.settings) {
		page = <p>Settings!</p>;
	}
	else {
		//page = <DataView type={pageView} />;
		page = <Dataview type={props.type}/>
	}

	return (
		<div className="page">
			{page}
		</div>
	);

};

export default PageView;