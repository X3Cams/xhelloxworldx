<div class="container-fluid">
	<script type="text/javascript">
	var React = require('/node_modules/react');
	var InfiniteGrid = require('/node_modules/react-infinite-grid');

	var Example = React.createClass({
		render: function() {
			return(
				<div className="example">
					This is {this.props.index}
				</div>
			);
		},
	});

	var items = [];
	for (var i = 0; i <= 100000; i++) {
		items.push(<Example index={i} key={"example-" + i} />);
	}

	React.render(<InfiniteGrid wrapperHeight={400} entries={items} />, document.getElementById('grid'));

	</script>
	<div id="grid"></div>
</div>
