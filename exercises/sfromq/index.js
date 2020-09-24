const Queue = require('./queue');

class Stack {
    constructor() {
        this.first = new Queue();
        this.second = new Queue();
    }

    push(record) {
        if(!this.first.peek()) {
            this.first.add(record);
        } else { 
            while(this.first.peek()) {
                this.second.add(this.first.remove());
            }
            this.first.add(record);
            while(this.second.peek()) {
                this.first.add(this.second.remove())
            }
        }
    }

    pop() {
        return this.first.remove();
    }

    peek() {
        return this.first.peek();
    }
}

module.exports = Stack;