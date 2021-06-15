import { ISouthWest, INorthEast, ISouthEast, INorthWest } from './index';
import { Piece } from './piece.model';

type IElepentMoVe = ISouthWest & INorthEast & ISouthEast & INorthWest;
export type IElepent = IElepentMoVe;

export class Elepent extends Piece implements IElepent {
  constructor(id: string) {
    super(id, 'Elepent');
  }
  moveSW = () => {
    return;
  };
  moveNE = () => {
    return;
  };
  moveSE = () => {
    return;
  };
  moveNW = () => {
    return;
  };
}
