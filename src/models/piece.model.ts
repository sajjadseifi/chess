export interface IPiece {
  id: string;
  name: string;
  row: number;
  col: number;
}

export class Piece implements IPiece {
  row: number;
  col: number;
  constructor(public id: string, public name: string) {
    this.row = 0;
    this.col = 0;
  }
}
