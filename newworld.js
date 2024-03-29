'use strict';

//============================constants for testing=============================

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bigdata = [{ "purch": null, "vendor": 42, "reserve": null, "sPrice": null, "preBid": null, "desc": "projectors fridge", "lotNum": 1 }, { "purch": null, "vendor": 381, "reserve": 40.09, "sPrice": 136.55, "preBid": 0.53, "desc": "one bobby", "lotNum": 2 }, { "purch": null, "vendor": 256, "reserve": null, "sPrice": null, "preBid": null, "desc": "complaints tea", "lotNum": 3 }, { "purch": null, "vendor": 733, "reserve": null, "sPrice": 103.67, "preBid": 1.66, "desc": "solely cindy", "lotNum": 4 }, { "purch": 156, "vendor": 911, "reserve": 22.03, "sPrice": 129.87, "preBid": 3.13, "desc": "committed compensation", "lotNum": 5 }, { "purch": 767, "vendor": 501, "reserve": 11.7, "sPrice": null, "preBid": 11.46, "desc": "reviewed it", "lotNum": 6 }, { "purch": null, "vendor": 799, "reserve": null, "sPrice": 74.69, "preBid": 3.62, "desc": "hc out", "lotNum": 7 }, { "purch": null, "vendor": 787, "reserve": 21.54, "sPrice": null, "preBid": 14.72, "desc": "pci liquid", "lotNum": 8 }, { "purch": null, "vendor": 340, "reserve": null, "sPrice": 24.02, "preBid": 16.54, "desc": "refine brunswick", "lotNum": 9 }, { "purch": null, "vendor": 90, "reserve": null, "sPrice": 74.44, "preBid": 13.63, "desc": "anxiety jazz", "lotNum": 10 }, { "purch": null, "vendor": 11, "reserve": 31.38, "sPrice": 20.34, "preBid": 13.92, "desc": "chosen enlargement", "lotNum": 11 }, { "purch": 558, "vendor": 452, "reserve": 32.26, "sPrice": 191.67, "preBid": null, "desc": "survivors salary", "lotNum": 12 }, { "purch": null, "vendor": 944, "reserve": null, "sPrice": null, "preBid": null, "desc": "education epic", "lotNum": 13 }, { "purch": null, "vendor": 495, "reserve": null, "sPrice": 190.96, "preBid": 6.03, "desc": "challenges naturals", "lotNum": 14 }, { "purch": null, "vendor": 781, "reserve": null, "sPrice": null, "preBid": 18.24, "desc": "for admin", "lotNum": 15 }, { "purch": 903, "vendor": 520, "reserve": 3.44, "sPrice": 108.55, "preBid": 9.39, "desc": "chassis behalf", "lotNum": 16 }, { "purch": 794, "vendor": 582, "reserve": 22.18, "sPrice": 134.35, "preBid": 0.77, "desc": "verzeichnis document", "lotNum": 17 }, { "purch": 203, "vendor": 821, "reserve": null, "sPrice": null, "preBid": null, "desc": "forecasts eliminate", "lotNum": 18 }, { "purch": null, "vendor": 323, "reserve": 27.23, "sPrice": null, "preBid": 8.48, "desc": "eve retained", "lotNum": 19 }, { "purch": null, "vendor": 394, "reserve": 1.02, "sPrice": 13.15, "preBid": 12.87, "desc": "blair highways", "lotNum": 20 }, { "purch": null, "vendor": 144, "reserve": null, "sPrice": null, "preBid": 1.47, "desc": "confused franklin", "lotNum": 21 }, { "purch": null, "vendor": 205, "reserve": null, "sPrice": null, "preBid": 11.94, "desc": "libraries xbox", "lotNum": 22 }, { "purch": 620, "vendor": 27, "reserve": null, "sPrice": 179.56, "preBid": null, "desc": "length upskirt", "lotNum": 23 }, { "purch": 148, "vendor": 591, "reserve": 35.79, "sPrice": 115.96, "preBid": 8.6, "desc": "were consolidation", "lotNum": 24 }, { "purch": null, "vendor": 244, "reserve": 31.72, "sPrice": null, "preBid": null, "desc": "msn rows", "lotNum": 25 }, { "purch": null, "vendor": 962, "reserve": null, "sPrice": 64.28, "preBid": null, "desc": "hottest gas", "lotNum": 26 }, { "purch": 529, "vendor": 70, "reserve": null, "sPrice": null, "preBid": null, "desc": "airline tribute", "lotNum": 27 }, { "purch": 534, "vendor": 669, "reserve": null, "sPrice": 37.37, "preBid": 19.59, "desc": "cafe symbol", "lotNum": 28 }, { "purch": null, "vendor": 323, "reserve": 7.57, "sPrice": null, "preBid": null, "desc": "aimed recovered", "lotNum": 29 }, { "purch": 242, "vendor": 7, "reserve": 41.61, "sPrice": null, "preBid": 14.45, "desc": "diff lunch", "lotNum": 30 }, { "purch": null, "vendor": 860, "reserve": null, "sPrice": 163.17, "preBid": null, "desc": "exterior masturbating", "lotNum": 31 }, { "purch": null, "vendor": 426, "reserve": null, "sPrice": null, "preBid": 14.29, "desc": "four blah", "lotNum": 32 }, { "purch": 966, "vendor": 351, "reserve": 0.59, "sPrice": null, "preBid": 18.96, "desc": "adam correspondence", "lotNum": 33 }, { "purch": 979, "vendor": 938, "reserve": 12.65, "sPrice": null, "preBid": 2.28, "desc": "rj madonna", "lotNum": 34 }, { "purch": null, "vendor": 449, "reserve": null, "sPrice": 46.54, "preBid": 5.61, "desc": "literally suitable", "lotNum": 35 }, { "purch": 610, "vendor": 122, "reserve": null, "sPrice": null, "preBid": 6.21, "desc": "bandwidth interface", "lotNum": 36 }, { "purch": 759, "vendor": 394, "reserve": 41.44, "sPrice": null, "preBid": 19.19, "desc": "not halloween", "lotNum": 37 }, { "purch": null, "vendor": 755, "reserve": 10.45, "sPrice": null, "preBid": null, "desc": "notices soccer", "lotNum": 38 }, { "purch": null, "vendor": 448, "reserve": null, "sPrice": 59.96, "preBid": null, "desc": "probability centers", "lotNum": 39 }, { "purch": null, "vendor": 442, "reserve": null, "sPrice": null, "preBid": null, "desc": "catherine christians", "lotNum": 40 }, { "purch": null, "vendor": 298, "reserve": 24.97, "sPrice": null, "preBid": null, "desc": "johnson imports", "lotNum": 41 }, { "purch": 951, "vendor": 654, "reserve": 9.98, "sPrice": null, "preBid": null, "desc": "victory relevance", "lotNum": 42 }, { "purch": null, "vendor": 82, "reserve": null, "sPrice": null, "preBid": null, "desc": "beam kay", "lotNum": 43 }, { "purch": null, "vendor": 663, "reserve": null, "sPrice": null, "preBid": 11.98, "desc": "modifications despite", "lotNum": 44 }, { "purch": 905, "vendor": 747, "reserve": 0.86, "sPrice": null, "preBid": null, "desc": "ascii consistency", "lotNum": 45 }, { "purch": 247, "vendor": 963, "reserve": 21.4, "sPrice": 144.19, "preBid": 17.58, "desc": "robot also", "lotNum": 46 }, { "purch": null, "vendor": 662, "reserve": null, "sPrice": 49.67, "preBid": null, "desc": "peaceful mary", "lotNum": 47 }, { "purch": null, "vendor": 337, "reserve": null, "sPrice": null, "preBid": 8.57, "desc": "rs talks", "lotNum": 48 }, { "purch": 860, "vendor": 166, "reserve": null, "sPrice": null, "preBid": 17.16, "desc": "science auto", "lotNum": 49 }, { "purch": null, "vendor": 888, "reserve": 46.23, "sPrice": 154.6, "preBid": null, "desc": "supports disclose", "lotNum": 50 }, { "purch": null, "vendor": 443, "reserve": 31.88, "sPrice": null, "preBid": null, "desc": "nutrition offerings", "lotNum": 51 }, { "purch": null, "vendor": 943, "reserve": 30.24, "sPrice": null, "preBid": 16.78, "desc": "nose subscription", "lotNum": 52 }, { "purch": 121, "vendor": 247, "reserve": 5.24, "sPrice": 177.6, "preBid": null, "desc": "violin detail", "lotNum": 53 }, { "purch": null, "vendor": 121, "reserve": null, "sPrice": 181.43, "preBid": 3.38, "desc": "slide resulted", "lotNum": 54 }, { "purch": 393, "vendor": 222, "reserve": 4.68, "sPrice": null, "preBid": 14.44, "desc": "exclusively allowing", "lotNum": 55 }, { "purch": null, "vendor": 55, "reserve": 5.37, "sPrice": 192.74, "preBid": 17.83, "desc": "gcc brings", "lotNum": 56 }, { "purch": null, "vendor": 217, "reserve": null, "sPrice": null, "preBid": null, "desc": "zope spiritual", "lotNum": 57 }, { "purch": 234, "vendor": 774, "reserve": 47.23, "sPrice": null, "preBid": null, "desc": "usd slut", "lotNum": 58 }, { "purch": null, "vendor": 401, "reserve": null, "sPrice": 66.92, "preBid": null, "desc": "proper contributions", "lotNum": 59 }, { "purch": null, "vendor": 696, "reserve": 1.1, "sPrice": 113.98, "preBid": 19.46, "desc": "supported cite", "lotNum": 60 }, { "purch": 128, "vendor": 629, "reserve": null, "sPrice": null, "preBid": 15.48, "desc": "documents stopping", "lotNum": 61 }, { "purch": 739, "vendor": 468, "reserve": 38.29, "sPrice": null, "preBid": 8.41, "desc": "still seo", "lotNum": 62 }, { "purch": null, "vendor": 90, "reserve": 39.54, "sPrice": null, "preBid": 11.64, "desc": "kyle shine", "lotNum": 63 }, { "purch": null, "vendor": 982, "reserve": null, "sPrice": null, "preBid": null, "desc": "elementary everywhere", "lotNum": 64 }, { "purch": 425, "vendor": 270, "reserve": null, "sPrice": null, "preBid": null, "desc": "strange captain", "lotNum": 65 }, { "purch": null, "vendor": 561, "reserve": null, "sPrice": null, "preBid": 12.31, "desc": "resident arnold", "lotNum": 66 }, { "purch": null, "vendor": 758, "reserve": 36.71, "sPrice": 138.12, "preBid": 19.27, "desc": "judge simple", "lotNum": 67 }, { "purch": 871, "vendor": 370, "reserve": 31.53, "sPrice": null, "preBid": 3.11, "desc": "eh worker", "lotNum": 68 }, { "purch": null, "vendor": 391, "reserve": null, "sPrice": 94.14, "preBid": null, "desc": "ar stories", "lotNum": 69 }, { "purch": 472, "vendor": 774, "reserve": null, "sPrice": 165.82, "preBid": 10.88, "desc": "beam blogging", "lotNum": 70 }, { "purch": null, "vendor": 447, "reserve": 21.09, "sPrice": 45.13, "preBid": 18.33, "desc": "immigration photographer", "lotNum": 71 }, { "purch": 675, "vendor": 469, "reserve": null, "sPrice": 14.65, "preBid": 18.55, "desc": "sue muze", "lotNum": 72 }, { "purch": null, "vendor": 831, "reserve": 36.18, "sPrice": 79.45, "preBid": null, "desc": "embedded surrey", "lotNum": 73 }, { "purch": null, "vendor": 706, "reserve": null, "sPrice": null, "preBid": 3.0e-2, "desc": "throwing effect", "lotNum": 74 }, { "purch": null, "vendor": 415, "reserve": 7.03, "sPrice": null, "preBid": null, "desc": "eh folks", "lotNum": 75 }, { "purch": 917, "vendor": 626, "reserve": 49.3, "sPrice": null, "preBid": 13.81, "desc": "rational shot", "lotNum": 76 }, { "purch": null, "vendor": 815, "reserve": 15.48, "sPrice": 53.86, "preBid": 0.56, "desc": "which header", "lotNum": 77 }, { "purch": 8, "vendor": 999, "reserve": null, "sPrice": 28.2, "preBid": 3.17, "desc": "massachusetts excess", "lotNum": 78 }, { "purch": 169, "vendor": 539, "reserve": 44.4, "sPrice": 32.43, "preBid": null, "desc": "believed unix", "lotNum": 79 }, { "purch": 73, "vendor": 918, "reserve": null, "sPrice": null, "preBid": null, "desc": "mug tried", "lotNum": 80 }, { "purch": null, "vendor": 687, "reserve": null, "sPrice": 191.9, "preBid": 7.71, "desc": "quad trailer", "lotNum": 81 }, { "purch": null, "vendor": 273, "reserve": null, "sPrice": null, "preBid": null, "desc": "amazon road", "lotNum": 82 }, { "purch": 895, "vendor": 418, "reserve": null, "sPrice": null, "preBid": null, "desc": "ruling ibm", "lotNum": 83 }, { "purch": 946, "vendor": 292, "reserve": null, "sPrice": 94.45, "preBid": null, "desc": "structures gift", "lotNum": 84 }, { "purch": 469, "vendor": 371, "reserve": 25.64, "sPrice": 78.3, "preBid": null, "desc": "athens wherever", "lotNum": 85 }, { "purch": null, "vendor": 962, "reserve": null, "sPrice": null, "preBid": 2.8, "desc": "intention rat", "lotNum": 86 }, { "purch": null, "vendor": 302, "reserve": null, "sPrice": 49.69, "preBid": null, "desc": "ohio sg", "lotNum": 87 }, { "purch": 923, "vendor": 311, "reserve": 31.11, "sPrice": null, "preBid": null, "desc": "creatures specialized", "lotNum": 88 }, { "purch": 850, "vendor": 364, "reserve": 15.92, "sPrice": 123.24, "preBid": 12.71, "desc": "venice acdbentity", "lotNum": 89 }, { "purch": 322, "vendor": 713, "reserve": 23.25, "sPrice": 173.27, "preBid": 12.95, "desc": "buildings walked", "lotNum": 90 }, { "purch": 223, "vendor": 144, "reserve": 28.31, "sPrice": null, "preBid": 10.46, "desc": "candles console", "lotNum": 91 }, { "purch": null, "vendor": 711, "reserve": null, "sPrice": null, "preBid": 7.43, "desc": "together home", "lotNum": 92 }, { "purch": 722, "vendor": 488, "reserve": 4.46, "sPrice": 11.84, "preBid": null, "desc": "switch stocks", "lotNum": 93 }, { "purch": 869, "vendor": 721, "reserve": 43.68, "sPrice": 139.89, "preBid": 13.32, "desc": "differ jack", "lotNum": 94 }, { "purch": null, "vendor": 121, "reserve": 45.17, "sPrice": 114.09, "preBid": null, "desc": "budapest greetings", "lotNum": 95 }, { "purch": 284, "vendor": 868, "reserve": null, "sPrice": 122.45, "preBid": 15.1, "desc": "starting machinery", "lotNum": 96 }, { "purch": null, "vendor": 864, "reserve": null, "sPrice": 114.85, "preBid": null, "desc": "sewing fu", "lotNum": 97 }, { "purch": 538, "vendor": 884, "reserve": null, "sPrice": 58.33, "preBid": null, "desc": "indexed handjob", "lotNum": 98 }, { "purch": 180, "vendor": 49, "reserve": null, "sPrice": 177.93, "preBid": null, "desc": "ruled greene", "lotNum": 99 }, { "purch": 697, "vendor": 846, "reserve": 49.78, "sPrice": 125.4, "preBid": 9.63, "desc": "eligible technological", "lotNum": 100 }];

var dbJSON = {
  "columns": [{ "name": "Age", "type": "Int", "nullable": false }, { "name": "IsHappy", "type": "Bool", "nullable": true }, { "name": "Message", "type": "String", "nullable": true }],
  "data": [[4, null, "hello"], [16, true, null]]

  //===============================react components===============================

};
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      data: bigdata
    };
    _this.renderEditable = _this.renderEditable.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "renderEditable",
    value: function renderEditable(cellInfo) {
      var _this2 = this;

      return React.createElement("div", {
        style: { height: 16 },
        contentEditable: true,
        suppressContentEditableWarning: true,
        onBlur: function onBlur(e) {
          var data = [].concat(_toConsumableArray(_this2.state.data));

          if (data[cellInfo.index][cellInfo.column.id] !== e.target.innerHTML) {
            console.log("Old value: " + data[cellInfo.index][cellInfo.column.id]);
            console.log("New value: " + e.target.innerHTML);
          }

          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          _this2.setState({ data: data });
        },
        dangerouslySetInnerHTML: {
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "New World"
        ),
        React.createElement(ReactTable, {
          data: data,
          columns: [{
            Header: 'Lot Number',
            accessor: 'lotNum',
            //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            Cell: this.renderEditable
          }, {
            Header: 'Vendor',
            accessor: 'vendor',
            //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            Cell: this.renderEditable
          }, {
            Header: 'Item Description',
            accessor: 'desc', // String-based value accessors!
            Cell: this.renderEditable
          }, {
            Header: 'Reserve',
            accessor: 'reserve',
            //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            Cell: this.renderEditable
          }, {
            Header: 'Pre-sale Bids',
            accessor: 'preBid',
            //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            Cell: this.renderEditable
          }, {
            Header: 'Purchaser',
            accessor: 'purch',
            //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            Cell: this.renderEditable
          }, {
            Header: 'Sale Price',
            accessor: 'sPrice',
            //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            Cell: this.renderEditable
          }],
          className: "-striped -highlight",
          showPagination: false,
          defaultPageSize: 100,
          filterable: true,
          style: {
            height: "800px" // This will force the table body to overflow and scroll, since there is not enough room
          }
        })
      );
    }
  }]);

  return App;
}(React.Component);

var App2 = function (_React$Component2) {
  _inherits(App2, _React$Component2);

  function App2() {
    _classCallCheck(this, App2);

    var _this3 = _possibleConstructorReturn(this, (App2.__proto__ || Object.getPrototypeOf(App2)).call(this));

    _this3.state = {
      data: dbJSON
    };
    return _this3;
  }

  _createClass(App2, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        JSON.stringify(this.state.data)
      );
    }
  }]);

  return App2;
}(React.Component);

////////////////////////////////////////////////////////////////////////////////

// class App3 extends React.Component {
//   constructor(){
//     super();
//   }
//   render(){
//     return(<Cell/>);
//   }
// }

var Cell = function (_React$Component3) {
  _inherits(Cell, _React$Component3);

  function Cell(props) {
    _classCallCheck(this, Cell);

    var _this4 = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this));

    _this4.state = {
      value: props.value,
      confirmed: props.confirmed
    };
    return _this4;
  }

  _createClass(Cell, [{
    key: "render",
    value: function render() {
      var comp = void 0;
      if (this.state.confirmed) {
        comp = React.createElement(
          "div",
          null,
          React.createElement(
            "b",
            null,
            this.state.value
          )
        );
      } else {
        comp = React.createElement(
          "div",
          { contentEditable: true, suppressContentEditableWarning: true },
          React.createElement(
            "i",
            { style: { color: "red" } },
            this.state.value
          )
        );
      }
      return comp;
    }
  }]);

  return Cell;
}(React.Component);

////////////////////////////////////////////////////////////////////////////////

var exampleObject = [{ pk: 1, name: "James", age: 23, grapes: true }, { pk: 2, name: "Nathan", age: 24, grapes: false }, { pk: 4, name: "Edie", age: 22, grapes: true }];

function PureTable(props) {
  var headerNames = Object.keys(props.grid[0]);
  var grid = props.grid.map(function (x) {
    return Object.values(x);
  });

  return React.createElement(
    "div",
    { className: "divTable minimalistBlack" },
    React.createElement(PureHead, { headerNames: headerNames }),
    React.createElement(PureBody, { grid: grid })
  );
}

function PureHead(props) {
  return React.createElement(
    "div",
    { className: "divTableHeading" },
    React.createElement(PureRow, { row: props.headerNames, isHeader: true })
  );
}

function PureBody(props) {
  //make rows
  var rows = [];
  for (var i = 0; i < props.grid.length; i++) {
    rows.push(React.createElement(PureRow, { key: i, row: props.grid[i], isHeader: false }));
  }

  return React.createElement(
    "div",
    { className: "divTableBody" },
    rows
  );
}

function PureRow(props) {
  //make cells
  var cells = [];
  for (var i = 0; i < props.row.length; i++) {
    if (props.isHeader) {
      cells.push(React.createElement(PureHeader, { key: i, headerName: props.row[i] }));
    } else {
      cells.push(React.createElement(PureCell, { key: i, cellValue: props.row[i] }));
    }
  }

  return React.createElement(
    "div",
    { className: "divTableRow" },
    cells
  );
}

function PureHeader(props) {
  return React.createElement(
    "div",
    { className: "divTableHead" },
    props.headerName.toString()
  );
}

function PureCell(props) {
  return React.createElement(
    "div",
    { className: "divTableCell", contentEditable: true, suppressContentEditableWarning: true },
    props.cellValue.toString()
  );
}

//===========single render call to render the app component=====================

//render the above app in the react entry point in the html file
var domContainer = document.querySelector('#newworld_entry');
//ReactDOM.render(<TestButton/>, domContainer);
ReactDOM.render(React.createElement(PureTable, { grid: exampleObject }), domContainer);

//=============================graveyard========================================