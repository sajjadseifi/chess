import { ISouthWest, INorthEast, ISouthEast, INorthWest } from './index';
import { ElepentType } from '../types/index';
import { IPiece, Piece } from './piece.model';

type IElepentMone = ISouthWest & INorthEast & ISouthEast & INorthWest;
export interface IElepent extends IElepentMone {}

export class Elepent extends Piece implements IElepent {
  constructor(id: string) {
    super(id, 'Elepent');
  }
  moveSW = () => {};
  moveNE = () => {};
  moveSE = () => {};
  moveNW = () => {};
}
