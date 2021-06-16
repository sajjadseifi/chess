import { IPiece } from './index';

export interface IGameProperty {
  player1: number;
  player2: number;
}

export interface IGameOperational {
  attackers(piece: IPiece): IPiece[];
  beadsAttacked(piece: IPiece): IPiece[];
  isAttacked(piece: IPiece): boolean;
}

export class Game implements IGameProperty, IGameOperational {
  player1: number;
  player2: number;
  constructor() {
    this.player1 = 1;
    this.player2 = 2;
  }
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
