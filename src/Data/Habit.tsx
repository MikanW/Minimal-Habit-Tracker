import uuid from 'react-uuid'

export const enum HabitOption {
  checkbox,
  count,
  heatmap,
}

export const enum HabitUnit {
  min,
  hour,
  times,
  characters,
  custom
}



export interface HabitInfo {
  id?: string;
  name: string;
  mainColor: any;
  useHeatMap: boolean;
  option: HabitOption;
  unit: HabitUnit;
  costomUnit?: string;
}

export class Habit {
  public info: HabitInfo;

  // get init info of a new habit
  constructor( info : HabitInfo ){
    this.info = info;    
    this.info.id = uuid();
  }

  // set Name of a habit
  public setName = ( newName: string ) => {
    this.info.name = newName;
  }

  public printInfo = () => {
    console.log(this.info);
  }

}

export function addHabit() {
  const info : HabitInfo = {};

  info.name = "dammyHabit";
  info.mainColor = "Red";
  info.useHeatMap = true;
  info.option = HabitOption.checkbox;
  info.unit = HabitUnit.min;

  const newHabit = new Habit(info);

  newHabit.printInfo();

  return;
}