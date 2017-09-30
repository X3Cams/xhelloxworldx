<?php

//echo file_get_contents('https://chaturbate.com/affiliates/in/?track=default&tour=x1Rd&campaign=KZ7tX&c=15&p=1');
?>
<div class="container">
	<script type="text/javascript">
	import React, { Component }from 'node_modules/react';
import { RadioGroup, Radio }from 'node_modules/react-radio-group';
import Sliderfrom 'node_modules/rc-slider';
import shufflefrom 'node_modules/lodash.shuffle';
import camelCasefrom 'node_modules/lodash/lodash.camelcase';
import Gridfrom 'node_modules/Grid';
import { easings }from 'node_modules/react-stonecutter/src/index';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const ipsum = `Who controls the British crown?
Who keeps the metric system down?
Who keeps Atlantis off the maps?
Who keeps the Martians under wraps?
Who holds back the electric car?
Who makes Steve Guttenberg a star?
Who robs cavefish of their sight?
Who rigs every Oscar night?`.split('\n');

const layouts = ['Pinterest', 'Simple'];
const enterExitStyles = ['Simple', 'Skew', 'Newspaper',
  'Fold Up', 'From Center', 'From Left to Right', 'From Top', 'From Bottom'];

export default class extends Component {

  static defaultProps = {
    minItems: 10
  };

  constructor(props) {
    super(props);

    this.state = {
      data: this.generateData(),
      useCSS: false,
      responsive: false,
      layout: camelCase(layouts[0]),
      enterExitStyle: camelCase(enterExitStyles[0]),
      duration: 800,
      stiffness: 60,
      damping: 14,
      columns: 5,
      gutters: 5,
      easing: easings.cubicOut
    };
  }

  handleShuffle = () => {
    this.setState({
      data: this.generateData()
    });
  };

  generateData = () => shuffle(alphabet)
    .slice(0, this.props.minItems +
      Math.floor(Math.random() * (26 - this.props.minItems)))
    .sort();

  render() {
    const { data, ...gridProps } = this.state;
    const { useCSS, layout, enterExitStyle, responsive, columns, gutters,
      stiffness, damping, duration, easing } = this.state;

    const itemHeight = layout === 'simple' ? 190 : null;

    const items = data.map((letter) => {
      const contentIndex = letter.charCodeAt(0) % 6;
      const content = ipsum.slice(contentIndex, Math.floor(contentIndex * 1.5) + 1);

      return (
        <li
          key={letter}
          className="grid-item"
          style={{
            width: 150,
            height: itemHeight
          }}
        >
          <h3>{letter.toUpperCase()}</h3>
          {content.map((p, i) => <p key={i}>{p}</p>)}
          <p>{'We do! We do!'}</p>
        </li>
      );
    });

    return (
      <div>
        <div className="controls">
          <RadioGroup
            className="radio-group"
            name="useCSS"
            selectedValue={useCSS ? 'css' : 'spring'}
            onChange={value => this.setState({ useCSS: value === 'css' })}
          >
            <label><Radio value="spring" />React Motion</label>
            <label><Radio value="css" />CSS Transitions</label>
            <a href="https://github.com/dantrain/react-stonecutter">
              <img
                className="github-stars-badge"
                src="https://img.shields.io/github/stars/dantrain/react-stonecutter.svg?style=social&label=Star"
                alt="GitHub stars"
              />
            </a>
          </RadioGroup>
          <label>{'Layout '}
            <select
              value={layout}
              onChange={ev => this.setState({ layout: ev.target.value })}
            >
              {layouts.map(name =>
                <option value={camelCase(name)} key={name}>{name}</option>)}
            </select>
          </label>
          <label>{'Enter/Exit Style '}
            <select
              value={enterExitStyle}
              onChange={ev => this.setState({ enterExitStyle: ev.target.value })}
            >
              {enterExitStyles.map(name =>
                <option value={camelCase(name)} key={name}>{name}</option>)}
            </select>
          </label>
          <label>{'Easing '}
            <select
              value={easing}
              onChange={ev => this.setState({ easing: ev.target.value })}
              disabled={!useCSS}
            >
              {Object.keys(easings).map(name =>
                <option value={easings[name]} key={name}>{name}</option>)}
            </select>
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              checked={responsive}
              onChange={ev => this.setState({ responsive: ev.target.checked })}
            />Responsive
          </label>
          <div className="slider">{'Columns '}
            <div className="slider-container">
              <Slider
                value={columns}
                onChange={val => this.setState({ columns: val })}
                min={1}
                max={8}
                disabled={responsive}
              />
            </div>
          </div>
          <div className="slider">{'Gutters '}
            <div className="slider-container">
              <Slider
                value={gutters}
                onChange={val => this.setState({ gutters: val })}
                min={0}
                max={20}
                tipFormatter={val => `${val}px`}
              />
            </div>
          </div>
          <div className="slider">{'Stiffness '}
            <div className="slider-container">
              <Slider
                value={stiffness}
                onChange={val => this.setState({ stiffness: val })}
                min={0}
                max={300}
                disabled={useCSS}
              />
            </div>
          </div>
          <div className="slider">{'Damping '}
            <div className="slider-container">
              <Slider
                value={damping}
                onChange={val => this.setState({ damping: val })}
                min={0}
                max={40}
                disabled={useCSS}
              />
            </div>
          </div>
          <div className="slider">{'Duration '}
            <div className="slider-container">
              <Slider
                value={duration}
                onChange={val => this.setState({ duration: val })}
                min={100}
                max={2000}
                step={10}
                disabled={!useCSS}
                tipFormatter={val => `${val}ms`}
              />
            </div>
          </div>
          <button
            onClick={this.handleShuffle}
          >Randomize children</button>
        </div>
        <Grid
          itemHeight={itemHeight}
          measured={layout !== 'simple'}
          {...gridProps}
        >
          {items}
        </Grid>
      </div>
    );
  }
}

			ReactDOM.render(<reactStoneCutter />, document.getElementById('app2'));


	</script>
	<div id="app2">
</div>
<?php
// echo 'const rooms = \'';
// 	foreach($cams as $a => $b) {
// 		if($a == 0) {
// 			echo '['. 0;
// 		}elseif($a > 0){
// 			echo ', '.$a;
// 		}else{
// 			echo '];';
// 		}
// 	}
// 	echo '\';';
// 	echo '.split(\'\\n\');';
// 	echo 'const models = \'';
// 	foreach($xcams as $x => $y) {
// 		if($y->gender == 'f' && $y->age < 32 && $x < 15){
// 			if($x == 0) {
// 				echo '[';
// 			}elseif($x > 0){
// 				echo ', '.$y->image_url_360x270;
// 			}else{
// 				echo '];';
// 			}
// 	}
// 	echo '\';';
//	echo '.split(\'\\n\');';

	//echo '.split(\'\\n\');';
	?>
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
