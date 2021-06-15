import { NEG_ONE, POS_ONE, ZERO } from './binary.type';

//posiiton
export type PivotDirection = { x: ZERO; y: ZERO };
export type North = { x: ZERO; y: NEG_ONE };
export type South = { x: ZERO; y: POS_ONE };
export type West = { x: NEG_ONE; y: ZERO };
export type East = { x: POS_ONE; y: ZERO };
export type NorthWest = { x: NEG_ONE; y: NEG_ONE };
export type NorthEast = { x: POS_ONE; y: NEG_ONE };
export type SouthWest = { x: NEG_ONE; y: POS_ONE };
export type SouthEast = { x: POS_ONE; y: POS_ONE };
