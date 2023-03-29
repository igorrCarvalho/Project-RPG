import IEnergy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: IEnergy;

  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}