import { IPiece } from './index';

export interface IChess {
  pieces: IPiece[][];
  width: number;
  height: number;
  reset: () => void;
}
export class Chess implements IChess {
  pieces: IPiece[][] = [];
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
    this.initial();
  }

  private initial = () => {
    this.pieces = new Array(this.height);
    for (let i = 0; i < this.pieces.length; i++) this.pieces[i] = new Array(this.width);
  };
  reset = () => {
    this.initial();
  };
  setPieces = (pieces_set: IPiece[][]) => {
    this.pieces = pieces_set;
  };
}
