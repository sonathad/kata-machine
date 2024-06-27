type Node<T> = {
    value: T,
    next?: Node<T>
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const curr: Node<T> = { value: item };
        this.length++;
        if (!this.head) {
            this.head = curr;
            return;
        }

        curr.next = this.head;
        this.head = curr;
    }

    pop(): T | undefined {
        if (!this.head) return;
        this.length--;

        const curr = this.head;
        this.head = this.head.next;
        curr.next = undefined;

        return curr.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
