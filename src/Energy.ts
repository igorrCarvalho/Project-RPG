export type EnergyType = 'stamina' | 'mana';

export default interface IEnergy {
  type_: EnergyType;
  amount: number;
}