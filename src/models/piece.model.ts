import { PieceType } from '../types/piece.type';

export interface IPiece {
  id: string;
  name: string;
  // type: PieceType;
  row: number;
  col: number;
}

export class Piece implements IPiece {
  row: number = 0;
  col: number = 0;
  constructor(public id: string, public name: string) {}
}
