<div class="container-fluid">

		<script type="text/javascript">
		import React, { Component } from 'react';
		import isEqualWith from 'lodash.isequalwith';
		import {
		  SpringGrid,
		  CSSGrid,
		  makeResponsive,
		  measureItems,
		  layout as layouts,
		  enterExitStyle as enterExitStyles
		} from '../../../src/index';

		export default class extends Component {

		  constructor(props) {
		    super(props);
		    this.state = this.createGrid(props);
		  }

		  componentWillReceiveProps(nextProps) {
		    if (!isEqualWith(nextProps, this.props, (a, b, key) => {
		      if (key === 'children') return true;
		    })) {
		      this.setState(this.createGrid(nextProps));
		    }
		  }

		  createGrid = ({ useCSS, measured, responsive }) => {
		    let Grid = useCSS ? CSSGrid : SpringGrid;

		    if (measured) {
		      Grid = measureItems(Grid);
		    }

		    if (responsive) {
		      Grid = makeResponsive(Grid, {
		        maxWidth: 1920,
		        minPadding: 100
		      });
		    }

		    return { Grid };
		  };

		  render() {
		    const { children, useCSS, responsive, layout, enterExitStyle,
		      duration, easing, stiffness, damping, gutters, columns, ...rest } = this.props;

		    const { Grid } = this.state;

		    const gridLayout = layouts[layout];
		    const gridEnterExitStyle = enterExitStyles[enterExitStyle];

		    return (
		      <Grid
		        {...rest}
		        className="grid"
		        component="ul"
		        columns={!responsive ? columns : null}
		        columnWidth={150}
		        gutterWidth={gutters}
		        gutterHeight={gutters}
		        layout={gridLayout}
		        enter={gridEnterExitStyle.enter}
		        entered={gridEnterExitStyle.entered}
		        exit={gridEnterExitStyle.exit}
		        perspective={600}
		        duration={useCSS ? duration : null}
		        easing={useCSS ? easing : null}
		        springConfig={!useCSS && stiffness && damping ?
		          { stiffness, damping } : null}
		      >
		        {children}
		      </Grid>
		    );
		  }

		}
</script>
</div>
<div id="image_modal" class="modal imodal fade" role="dialog">
	<div class="modal-dialog">
    	<!-- Modal content-->
    	<div class="modal-content">
      		<div class="modal-header">
        		<button type="button" class="close" data-dismiss="modal">&times;</button>
        		<h4 class="modal-title"></h4>
      		</div>
	  		<div class="modal-body">
		  		<span class="model-img"></span>
					<ul>
						<li class="model-username"></li>
						<li class="model-displayname"></li>
						<li class="model-age"></li>
						<li class="model-gender"></li>
						<li class="model-subject"></li>
						<li class="model-duration"></li>
						<li class="model-hd"></li>
						<li class="model-lang"></li>
						<li class="model-show"></li>
					 </ul>
      			</div>
      			<div class="modal-footer">
        			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</div>
