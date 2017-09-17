'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactDOM = ReactDOM;
var render = _ReactDOM.render;

var Card = function Card(props) {
  return React.createElement(
    'div',
    { className: 'buffer' },
    React.createElement(
      'div',
      { className: 'card ' + (props.active || props.matched ? 'active' : ''), onClick: props.handleClick.bind(undefined, props.index) },
      React.createElement(
        'div',
        { className: 'flipper' },
        React.createElement(
          'div',
          { className: 'front' },
          React.createElement(
            'span',
            null,
            ''
          )
        ),
        React.createElement(
          'div',
          { className: 'back', onClick: function onClick(e) {
              e.stopPropagation();
            } },
          React.createElement('img', { src: props.item.url },)
        )
      )
    )
  );
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      items: [{
        "id": 1,
       "url": "images/Maggie_Simpson.png"
      }, {
        "id": 2,
        "url": "images/Bart_Simpson_200px.png"
      }, {
        "id": 3,
        "url": "images/Homer_Simpson_2006.png"
      }, {
        "id": 4,
        "url": "images/Krusty_The_Clown.png"
      }, {
        "id": 5,
        "url": "images/Lisa_Simpson-0.png"
      }, {
        "id": 6,
        "url": "images/MargeSimpson.png"
      }, {
        "id": 7,
        "url": "images/Milhouse_Van_Houten_2.png"
      }, {
        "id": 8,
        "url": "images/Montgomery_Burns.png"
      }],
      activeItems: [],
      matchedItems: []
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  App.prototype.handleClick = function handleClick(index) {
    var _state = this.state;
    var activeItems = _state.activeItems;
    var matchedItems = _state.matchedItems;
    var items = _state.items;

    if (activeItems.length >= 2) {
      activeItems.length = 0;
      activeItems.push(index);
    } else {
      activeItems.push(index);
      if (_.hasIn(items[activeItems[0]], 'id') && _.hasIn(items[activeItems[1]], 'id')) {
        if (items[activeItems[0]].id == items[activeItems[1]].id) {
          matchedItems.push(items[activeItems[0]].id);
        }
      }
    }
    this.setState({
      activeItems: activeItems
    });
  };

  App.prototype.componentWillMount = function componentWillMount() {
    var items = this.state.items;

    this.setState({
      items: _.shuffle(items.concat(items.slice(0)))
    });
  };

  App.prototype.render = function render() {
    var _this2 = this;

    var _state2 = this.state;
    var activeItems = _state2.activeItems;
    var matchedItems = _state2.matchedItems;
    var items = _state2.items;

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'container' },
        items.map(function (item, i) {
          return React.createElement(Card, {
            key: i,
            index: i,
            item: item,
            active: activeItems.indexOf(i) != -1 ? true : false,
            matched: matchedItems.indexOf(item.id) != -1 ? true : false,
            handleClick: _this2.handleClick });
        })
      )
    );
  };

  return App;
}(React.Component);

render(React.createElement(App, null), document.querySelector('.outlet'));