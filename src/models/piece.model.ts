import { Place } from '../types/index';

export interface IPieceProps {
  id: string;
  name: string;
  row: number;
  col: number;
}
export interface IPieceAction {
  freeSeats(): Place[][];
  abilityToAttack(piece: IPieceProps): boolean;
}
export type IPiece = IPieceProps & IPieceProps;

export class Piece implements IPieceProps, IPieceAction {
  row: number;
  col: number;
  constructor(public id: string, public name: string) {
    this.row = 0;
    this.col = 0;
  }
  freeSeats(): Place[][] {
    throw new Error('Method not implemented.');
  }
  abilityToAttack(piece: IPieceProps): boolean {
    throw new Error('Method not implemented.');
  }
}
