export interface IStack<T> {
  push(t: T): void;
  pop(): T;
  shift(): T;
  unShift(t: T): void;
  undo(): T;
  redo(): T;
  toArray(): T[];
  empty(): boolean;
  clear(): void;
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
  private top: INode<T> | undefined | null;
  private back: INode<T> | undefined | null;
  private goast: INode<T> | undefined | null;
  private marker: INode<T> | undefined | null;
  constructor() {
    this.top = undefined;
    this.back = undefined;
    this.goast = undefined;
  }

  public get length(): number {
    if (this.goast == undefined) this.goast = this.top;
    if (!this.goast) return 0;

    this.goast = this.goast.getNext();

    return this.length + 1;
  }
  private getNode(node?: INode<T>) {
    if (node == undefined) throw new Error('Stack Is Empty');

    return node.get();
  }
  get first() {
    return this.getNode(this.top!);
  }
  get last() {
    return this.getNode(this.back!);
  }
  get current() {
    return this.getNode(this.marker!);
  }
  push(t: T): void {
    const node = new Node<T>(t);
    if (this.empty()) {
      this.top = node;
      this.back = node;
      return;
    }
    node.setNext(this.top!);
    this.top!.setPrev(node);
    this.top = node;
  }
  pop(): T {
    if (this.empty()) this.emptyError();

    const data: T = this.top!.get();

    this.top = this.top!.getNext();

    if (this.empty()) {
      this.back = null;
    }
    return data;
  }
  unShift(t: T): void {
    const node = new Node<T>(t);
    if (this.back == undefined || this.back == null) {
      this.top = node;
      this.back = node;
      return;
    }
    node.setPrev(this.back);
    this.back.setNext(node);
    this.back = node;
  }
  shift(): T {
    if (this.empty()) this.emptyError();

    const data: T = this.back!.get();

    this.back = this.back!.getPrev();
    if (this.empty()) {
      this.top = null;
    }
    return data;
  }

  undo(): T {
    throw new Error('Method not implemented.');
  }
  redo(): T {
    throw new Error('Method not implemented.');
  }
  toArray(): T[] {
    const size = this.length;
    if (size == 0) return [];

    const arr = new Array<T>(size);

    let marker = this.top;
    for (let index = 0; index < size; index++) {
      arr[index] = marker!.get();
      marker = marker!.getNext();
    }

    return arr;
  }
  clear(): void {
    this.top = null;
    this.back = null;
    this.goast = null;
  }
  empty(): boolean {
    return this.top == null || this.top == undefined || this.back == null || this.back == undefined;
  }
  private emptyError(): void {
    throw new Error('Size of Stack is 0');
  }
}
