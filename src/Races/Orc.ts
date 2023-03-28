import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _instances: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    if (!this._instances) {
      this._instances = 1;
      return this._instances;
    }
    this._instances += 1;
    return this._instances;
  }
}

export default Orc;