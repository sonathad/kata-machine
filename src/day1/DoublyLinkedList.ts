type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item };

        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            // NOTE: could just return
            throw new Error("oh no!");
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        const curr = this.getAt(idx) as Node<T>;

        const node: Node<T> = { value: item };

        // NOTE: Performing the insertion
        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        // for typescript's sake
        if (node.prev) {
            node.prev.next = node;
        }
    }

    append(item: T): void {
        const curr: Node<T> = { value: item };
        this.length++;
        if (!this.head) {
            this.head = this.tail = curr;
            return;
        }

        curr.prev = this.tail;
        if (this.tail) {
            this.tail.next = curr;
            this.tail = curr;
        }
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) break;
            curr = curr.next;
        }

        if (!curr) {
            return;
        }

        return this.removeNode(curr);
    }

    get(idx: number): T | undefined {
        const node = this.getAt(idx);
        return node?.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return;
        }


        return this.removeNode(node);
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;
        return node.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        return curr;
    }
}
