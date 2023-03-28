import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _instances: number;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    if (!this._instances) {
      this._instances = 1;
      return this._instances;
    }
    this._instances += 1;
    return this._instances;
  }
}

export default Necromancer;