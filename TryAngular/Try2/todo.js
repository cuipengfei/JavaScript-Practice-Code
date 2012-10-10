function TodoController($scope) {
	$scope.todos = [{
		text: 'item1',
		done: true
	}, {
		text: 'item2',
		done: false
	}];

	$scope.addTodo = function() {
		$scope.todos.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = '';
	};

	$scope.remaining = function() {
		return getRemainingToDoItems().length;
	};

	$scope.archive = function() {
		$scope.todos = getRemainingToDoItems;
	};

	function getRemainingToDoItems() {
		return $scope.todos.filter(function(item) {
			return !item.done
		});
	}
}
