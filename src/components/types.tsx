export const Pages = Object.freeze({
	today: "Today",
	habit: "Habit",
	dataview: Object.freeze(
		{
			dailyView: "day",
			weeklyView: "week",
			monthlyView: "month",
			yearlyView: "year"
		},
	),
	settings: "Settings"
});

export interface CheckPoint {
	createdAt: any;
	note: string;
	time: string;
	uuid: string;
	value: number;
};