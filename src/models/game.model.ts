import { IPiece } from './index';

export interface IGame {
  attackers(piece: IPiece): IPiece[];
  beadsAttacked(piece: IPiece): IPiece[];
  isAttacked(piece: IPiece): boolean;
}

export class Game {
  beadsAttacked(piece: IPiece) {
    return [];
  }
  attackers(piece: IPiece): IPiece[] {
    return [];
  }
  isAttacked = (piece: IPiece) => {
    return false;
  };
}
