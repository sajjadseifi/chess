import { Place } from '../types/index';
import { IPiece } from './index';
import { IPieceProps } from './piece.model';
export interface State {
  player: number;
  deadPiece: IPiece;
  deadPlace: Place;
  killerPiece: IPiece;
  killerPlace: Place;
}

export interface IHistoryOperational {
  add(player: number, killerPiece: IPiece, deadPiece: IPiece): void;
  prev(): void;
}

export type IHistory = IHistoryOperational;

export class History implements IHistory {
  private states: State[];
  private currentindexState: number;
  private currentState: State | null;
  constructor() {
    this.states = [];
    this.currentState = null;
    this.currentindexState = -1;
  }
  add(player: number, killerPiece: IPieceProps, deadPiece: IPieceProps): void {
    throw new Error('Method not implemented.');
  }
  prev(): void {
    throw new Error('Method not implemented.');
  }
}
