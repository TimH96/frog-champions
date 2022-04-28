// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"modules/speedruncom/constants/celeste.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GAME_ID = 'o1y9j9v6';
exports.GAME_ID = GAME_ID;
var GAME_NAME = 'Celeste';
exports.GAME_NAME = GAME_NAME;
},{}],"modules/speedruncom/wrapper.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var _this = this;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var celeste_1 = require("./constants/celeste");

var HREF = 'www.speedrun.com';
var API_VERSION = 'v1';

var getBasePath = function getBasePath() {
  return "https://" + HREF + "/api/" + API_VERSION;
};

var fetchLevelBoard = function fetchLevelBoard(level, category) {
  return __awaiter(_this, void 0, Promise, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch(getBasePath() + "/leaderboards/" + celeste_1.GAME_ID + "/level/" + level.id + "/" + category.id)];

        case 1:
          return [2
          /*return*/
          , _a.sent().json()];
      }
    });
  });
};

exports.fetchLevelBoard = fetchLevelBoard;

var fetchLevels = function fetchLevels() {
  return __awaiter(_this, void 0, Promise, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch(getBasePath() + "/games/" + celeste_1.GAME_ID + "/levels")];

        case 1:
          return [4
          /*yield*/
          , _a.sent().json()];

        case 2:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

exports.fetchLevels = fetchLevels;

var fetchLevelCategories = function fetchLevelCategories(level) {
  return __awaiter(_this, void 0, Promise, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch(getBasePath() + "/levels/" + level.id + "/categories")];

        case 1:
          return [4
          /*yield*/
          , _a.sent().json()];

        case 2:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

exports.fetchLevelCategories = fetchLevelCategories;

var fetchLevelVariables = function fetchLevelVariables(level) {
  return __awaiter(_this, void 0, Promise, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch(getBasePath() + "/levels/" + level.id + "/variables")];

        case 1:
          return [4
          /*yield*/
          , _a.sent().json()];

        case 2:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

exports.fetchLevelVariables = fetchLevelVariables;

var fetchUser = function fetchUser(user) {
  return __awaiter(_this, void 0, Promise, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch(getBasePath() + "/users/" + user)];

        case 1:
          return [4
          /*yield*/
          , _a.sent().json()];

        case 2:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

exports.fetchUser = fetchUser;
},{"./constants/celeste":"modules/speedruncom/constants/celeste.ts"}],"modules/speedruncom/get-data.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var _this = this;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var wrapper_1 = require("./wrapper");

var getRawLeaderboardData = function getRawLeaderboardData() {
  return __awaiter(_this, void 0, Promise, function () {
    var levels, categories, grid, variables;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , wrapper_1.fetchLevels()];

        case 1:
          levels = _a.sent();
          return [4
          /*yield*/
          , wrapper_1.fetchLevelCategories(levels.data[0])];

        case 2:
          categories = _a.sent();
          return [4
          /*yield*/
          , Promise.all(categories.data.map(function (cat) {
            return Promise.all(levels.data.map(function (lvl) {
              return wrapper_1.fetchLevelBoard(lvl, cat);
            }));
          }))];

        case 3:
          grid = _a.sent();
          return [4
          /*yield*/
          , Promise.all(levels.data.map(function (lvl) {
            return wrapper_1.fetchLevelVariables(lvl);
          }))];

        case 4:
          variables = _a.sent();
          return [2
          /*return*/
          , {
            categories: categories,
            levels: levels,
            grid: grid,
            variables: variables
          }];
      }
    });
  });
};

exports.getRawLeaderboardData = getRawLeaderboardData;
},{"./wrapper":"modules/speedruncom/wrapper.ts"}],"modules/speedruncom/constants/subcategories.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var COLLECTIBLES_VARIABLE_NAME = 'Full Clear / ARB / HC';
exports.COLLECTIBLES_VARIABLE_NAME = COLLECTIBLES_VARIABLE_NAME;
var FC_RUN_VALUE = 'Full Clear';
exports.FC_RUN_VALUE = FC_RUN_VALUE;
},{}],"modules/speedruncom/grid-transformation.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var subcategories_1 = require("./constants/subcategories");
/** returns a gridTransformationFunction, using the given callback function in grid.map */


var getGridMapTransformation = function getGridMapTransformation(func) {
  return function (grid) {
    return grid.map(function (levelColumn, i) {
      return func(levelColumn, i);
    });
  };
};

exports.getGridMapTransformation = getGridMapTransformation;
/** remove Collectibles category from the grid entirely */

var removeCollectiblesCategory = function removeCollectiblesCategory(grid) {
  return grid.filter(function (_, i) {
    return i !== 1;
  });
};

exports.removeCollectiblesCategory = removeCollectiblesCategory;

var getFilterFullClearRuns = function getFilterFullClearRuns(variables) {
  var callback = function callback(levelColumn, i) {
    if (i === 1
    /* only filter runs in the collectibles column */
    ) {
      return levelColumn.map(function (level, i) {
        // find the 2 relevant IDs based on variable name and run value label
        var variable = variables[i].find(function (x) {
          return x.name === subcategories_1.COLLECTIBLES_VARIABLE_NAME;
        });
        var value = Object.entries(variable.values.values).find(function (_a) {
          var _key = _a[0],
              val = _a[1];
          return val.label === subcategories_1.FC_RUN_VALUE;
        }); // throw out if run is of not of given subcategory

        level.runs = level.runs.filter(function (run) {
          return run.run.values[variable.id] === value[0];
        });
        return level;
      });
    }

    return levelColumn;
  };

  return function (grid) {
    return getGridMapTransformation(callback)(grid);
  };
};

exports.getFilterFullClearRuns = getFilterFullClearRuns;

var removeFarewellObsoletes = function removeFarewellObsoletes(grid) {
  var callback = function callback(levelColumn, i) {
    if (i === 0) {
      return levelColumn;
    }

    return levelColumn.filter(function (_, i) {
      return i !== 8;
    });
  };

  return getGridMapTransformation(callback)(grid);
};

exports.removeFarewellObsoletes = removeFarewellObsoletes;
},{"./constants/subcategories":"modules/speedruncom/constants/subcategories.ts"}],"modules/rankings/scoring.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var eliteScoring = function eliteScoring(run) {
  if (run.place === 1) {
    return 100;
  }

  if (run.place === 2) {
    return 97;
  }

  return Math.max(0, 98 - run.place);
};

exports.eliteScoring = eliteScoring;
},{}],"modules/rankings/models/Player.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var wrapper_1 = require("../../speedruncom/wrapper");

var scoring_1 = require("../scoring");

var Player =
/** @class */
function () {
  function Player(id, gridDimensions) {
    this._name = undefined;
    this.id = id;
    this.timesPage = gridDimensions.map(function (colSize) {
      return new Array(colSize);
    });
    this._pointsPerColumn = gridDimensions.map(function (_) {
      return 0;
    });
  }
  /** register run r in the grid at position i, j */


  Player.prototype.registerRun = function (r, i, j) {
    this.timesPage[i][j] = r;
  };

  Player.prototype.getPointsOfColumn = function (col) {
    if (this._pointsPerColumn[col]) {
      return this._pointsPerColumn[col];
    }

    var val = this.timesPage[col].reduce(function (sum, r) {
      return sum + Player.scoringFn(r);
    }, 0);
    this._pointsPerColumn[col] = val;
    return val;
  };

  Object.defineProperty(Player.prototype, "totalPoints", {
    get: function get() {
      var _this = this;

      return this._pointsPerColumn.reduce(function (sum, _, i) {
        return sum + _this.getPointsOfColumn(i);
      }, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Player.prototype, "name", {
    /**
     * this getter should be used with caution, preferably when absolutely certain that the name of
     * a player is already loaded
     *
     * otherwise use the async version getName
     */
    get: function get() {
      var _this = this;

      if (this._name) {
        return this._name;
      }

      wrapper_1.fetchUser(this.id).then(function (val) {
        var n = val.data.names.international;
        _this._name = n;
        return n;
      });
      return '';
    },
    enumerable: true,
    configurable: true
  });

  Player.prototype.getName = function () {
    return __awaiter(this, void 0, void 0, function () {
      var n;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (this._name) {
              return [2
              /*return*/
              , this._name];
            }

            return [4
            /*yield*/
            , wrapper_1.fetchUser(this.id)];

          case 1:
            return [4
            /*yield*/
            , _a.sent().data.names.international];

          case 2:
            n = _a.sent();
            this._name = n;
            return [2
            /*return*/
            , n];
        }
      });
    });
  };

  Player.scoringFn = scoring_1.eliteScoring;
  return Player;
}();

exports.default = Player;
},{"../../speedruncom/wrapper":"modules/speedruncom/wrapper.ts","../scoring":"modules/rankings/scoring.ts"}],"modules/rankings/build-map.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var _this = this;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Player_1 = __importDefault(require("./models/Player"));

var buildPlayerMap = function buildPlayerMap(grid) {
  return __awaiter(_this, void 0, Promise, function () {
    var pMap, gridDimensions;
    return __generator(this, function (_a) {
      pMap = new Map();
      gridDimensions = grid.map(function (col) {
        return col.length;
      });
      grid.forEach(function (levelColumn, i) {
        return levelColumn.forEach(function (board, j) {
          return board.runs.forEach(function (r) {
            var p = r.run.players[0];
            p.id && (pMap.has(p.id) || pMap.set(p.id, new Player_1.default(p.id, gridDimensions)));
            var pl = pMap.get(p.id);
            pl.registerRun(r, i, j);
          });
        });
      });
      return [2
      /*return*/
      , pMap];
    });
  });
};

exports.default = buildPlayerMap;
},{"./models/Player":"modules/rankings/models/Player.ts"}],"app/main.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var _this = this;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var get_data_1 = require("../modules/speedruncom/get-data");

var grid_transformation_1 = require("../modules/speedruncom/grid-transformation");

var build_map_1 = __importDefault(require("../modules/rankings/build-map"));

var main = function main() {
  return __awaiter(_this, void 0, void 0, function () {
    var pMap, arr;

    var _this = this;

    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , function () {
            return __awaiter(_this, void 0, void 0, function () {
              var raw, variables, grid, transformations;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , get_data_1.getRawLeaderboardData() // remove .data ApiResponse
                    ];

                  case 1:
                    raw = _a.sent();
                    variables = raw.variables.map(function (variable) {
                      return variable.data;
                    });
                    grid = raw.grid.map(function (categoryRow) {
                      return categoryRow.map(function (levelBoard) {
                        return levelBoard.data;
                      });
                    });
                    transformations = [grid_transformation_1.removeFarewellObsoletes, grid_transformation_1.getFilterFullClearRuns(variables), grid_transformation_1.removeCollectiblesCategory];
                    transformations.forEach(function (tFunc) {
                      grid = tFunc(grid);
                    });
                    return [4
                    /*yield*/
                    , build_map_1.default(grid)];

                  case 2:
                    // build and return player map
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }() // testing script
          ];

        case 1:
          pMap = _a.sent();
          arr = Array.from(pMap.values()).sort(function (a, b) {
            return b.totalPoints - a.totalPoints;
          }).slice(0, 50);
          return [4
          /*yield*/
          , Promise.all(arr.map(function (p) {
            return __awaiter(_this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , p.getName()];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }))];

        case 2:
          _a.sent();

          arr.forEach(function (p) {
            return console.log({
              name: p.name,
              score: p.totalPoints,
              id: p.id
            });
          });
          return [2
          /*return*/
          ];
      }
    });
  });
};

exports.default = main;
},{"../modules/speedruncom/get-data":"modules/speedruncom/get-data.ts","../modules/speedruncom/grid-transformation":"modules/speedruncom/grid-transformation.ts","../modules/rankings/build-map":"modules/rankings/build-map.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var main_1 = __importDefault(require("./app/main"));

main_1.default();
},{"./app/main":"app/main.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62018" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map