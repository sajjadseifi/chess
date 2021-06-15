import { PieceType } from '../types/piece.type'

export interface IPiece {
  id: string
  name: string
  type: PieceType
  row?: number
  col?: number
}

export class Piece implements IPiece {
  constructor(public id: string, public name: string, public type: PieceType) {}
}
