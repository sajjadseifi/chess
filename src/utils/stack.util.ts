export interface IStack<T> {
  push(t: T): void;
  pop(): T;
  shift(): T;
  unShift(t: T): void;
  undo(): T;
  redo(): T;
  toArray(): T[];
  first: T;
  last: T;
  current: T;
  length: number;
}
export interface INode<T> {
  setNext(node: INode<T>): void;
  getNext(): INode<T> | undefined;
  setPrev(node: INode<T>): void;
  getPrev(): INode<T> | undefined;
  set(data: T): void;
  get(): T;
}

export class Node<T> implements INode<T> {
  private prev: INode<T> | undefined;
  private next: INode<T> | undefined;
  private data: T;
  constructor(data: T, next?: INode<T>, prev?: INode<T>) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
  setNext(node: INode<T>): void {
    this.next = node;
  }
  getNext(): INode<T> | undefined {
    return this.next;
  }
  setPrev(prev: INode<T>): void {
    this.prev = prev;
  }
  getPrev(): INode<T> | undefined {
    return this.prev;
  }
  set(data: T): void {
    this.data = data;
  }
  get(): T {
    return this.data;
  }
}
export class Stack<T> implements IStack<T> {
  private top: INode<T> | undefined;
  private back: INode<T> | undefined;
  private goast: INode<T> | undefined;
  constructor() {
    this.top = undefined;
    this.back = undefined;
    this.goast = undefined;
  }
  public get length(): number {
    if (this.goast == undefined) this.goast = this.top;
    if (!this.goast) return 0;

    this.goast = this.goast.getPrev();

    return this.length + 1;
  }
  private getNode(node: INode<T> | undefined) {
    if (node == undefined) throw new Error('Stack Is Empty');

    return node.get();
  }
  get first() {
    return this.getNode(this.top);
  }
  get last() {
    return this.getNode(this.back);
  }
  get current() {
    return this.getNode(this.goast);
  }

  push(t: T): void {
    throw new Error('Method not implemented.');
  }
  pop(): T {
    throw new Error('Method not implemented.');
  }
  shift(): T {
    throw new Error('Method not implemented.');
  }
  unShift(t: T): void {
    throw new Error('Method not implemented.');
  }
  undo(): T {
    throw new Error('Method not implemented.');
  }
  redo(): T {
    throw new Error('Method not implemented.');
  }
  toArray(): T[] {
    throw new Error('Method not implemented.');
  }
}
