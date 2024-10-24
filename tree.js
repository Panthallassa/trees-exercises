/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues() {
		if (!this.root) return 0;

		let totalSum = 0;
		const toVisitStack = [this.root];

		// using depth-first search
		while (toVisitStack.length) {
			const currentNode = toVisitStack.pop();
			totalSum += currentNode.val;

			for (let child of currentNode.children) {
				toVisitStack.push(child);
			}
		}

		return totalSum;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		if (!this.root) return 0;

		let evenCount = 0;
		const toVisitStack = [this.root];

		// using depth-first search
		while (toVisitStack.length) {
			const currentNode = toVisitStack.pop();
			if (currentNode.val % 2 === 0) evenCount++;

			for (let child of currentNode.children) {
				toVisitStack.push(child);
			}
		}

		return evenCount;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */

	numGreater(lowerBound) {
		if (!this.root) return 0;

		let count = 0;
		const toVisitStack = [this.root];

		// using depth-first search
		while (toVisitStack.length) {
			const currentNode = toVisitStack.pop();
			if (currentNode.val > lowerBound) count++;

			for (let child of currentNode.children) {
				toVisitStack.push(child);
			}
		}

		return count;
	}
}

module.exports = { Tree, TreeNode };
