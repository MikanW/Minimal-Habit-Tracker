export const enum HabitOption {
  checkbox,
  count,
  heatmap
}

export const enum HabitUnit {
  min,
  hour,
  times,
  characters,
  custom
}

export interface HabitInfo {
  name: string;
  id: string;
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
  }

  // set Name of a habit
  public setName = ( newName: string ) => {
    this.info.name = newName;
  }

  public printInfo = () => {
    console.log(this.info);
  }

}