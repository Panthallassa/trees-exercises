/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
	 * the length of the shortest path from the root to a leaf. */

	minDepth() {
		if (!this.root) return 0;

		const toVisitQueue = [[this.root, 1]];

		// breadth-first search
		while (toVisitQueue.length) {
			const [currentNode, depth] = toVisitQueue.shift();

			// If it's a leaf node return the depth
			if (!currentNode.left && !currentNode.right) {
				return depth;
			}

			if (currentNode.left)
				toVisitQueue.push([currentNode.left, depth + 1]);
			if (currentNode.right)
				toVisitQueue.push([currentNode.right, depth + 1]);
		}
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
	 * the length of the longest path from the root to a leaf. */

	maxDepth() {
		if (!this.root) return 0;

		const toVisitQueue = [[this.root, 1]]; // [node, depth]
		let maxDepth = 0;

		// breadth-first search
		while (toVisitQueue.length) {
			const [currentNode, depth] = toVisitQueue.shift();
			maxDepth = Math.max(maxDepth, depth);

			if (currentNode.left)
				toVisitQueue.push([currentNode.left, depth + 1]);
			if (currentNode.right)
				toVisitQueue.push([currentNode.right, depth + 1]);
		}

		return maxDepth;
	}

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
	 * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum() {
		if (!this.root) return 0;

		let maxSum = -Infinity;

		// breadth-first search
		function maxPathSum(node) {
			if (!node) return 0;

			const leftSum = Math.max(maxPathSum(node.left), 0);
			const rightSum = Math.max(maxPathSum(node.right), 0);

			const localMax = node.val + leftSum + rightSum;
			maxSum = Math.max(maxSum, localMax);

			return node.val + Math.max(leftSum, rightSum);
		}

		maxPathSum(this.root);
		return maxSum;
	}

	/** nextLarger(x): return the smallest value in the tree
	 * that is larger than x. */
	nextLarger(x) {
		if (!this.root) return null;

		let nextLargerValue = null;
		const toVisitQueue = [this.root];

		// breadth-first search
		while (toVisitQueue.length) {
			const currentNode = toVisitQueue.shift();

			if (currentNode.val > x) {
				if (
					nextLargerValue === null ||
					currentNode.val < nextLargerValue
				) {
					nextLargerValue = currentNode.val;
				}
			}

			if (currentNode.left)
				toVisitQueue.push(currentNode.left);
			if (currentNode.right)
				toVisitQueue.push(currentNode.right);
		}

		return nextLargerValue;
	}
}

module.exports = { BinaryTree, BinaryTreeNode };
