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
})({"../../modules/speedruncom/constants/celeste.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GAME_ID = 'o1y9j9v6';
exports.GAME_ID = GAME_ID;
var GAME_NAME = 'Celeste';
exports.GAME_NAME = GAME_NAME;
var COLLECTIBLES_VARIABLE_NAME = 'Full Clear / ARB / HC';
exports.COLLECTIBLES_VARIABLE_NAME = COLLECTIBLES_VARIABLE_NAME;
var FC_RUN_VALUE = 'Full Clear';
exports.FC_RUN_VALUE = FC_RUN_VALUE;
var Categories;

(function (Categories) {
  Categories["A_SIDES"] = "Clear";
  Categories["COLLECTIBLES"] = "Collectibles";
  Categories["B_SIDES"] = "B-Side";
  Categories["C_SIDES"] = "C-Side";
})(Categories || (Categories = {}));

exports.Categories = Categories;
var ChapterNames;

(function (ChapterNames) {
  ChapterNames["C1"] = "Forsaken City";
  ChapterNames["C2"] = "Old Site";
  ChapterNames["C3"] = "Celestial Resort";
  ChapterNames["C4"] = "Golden Ridge";
  ChapterNames["C5"] = "Mirror Temple";
  ChapterNames["C6"] = "Reflection";
  ChapterNames["C7"] = "The Summit";
  ChapterNames["C8"] = "Core";
  ChapterNames["C9"] = "Farewell";
})(ChapterNames || (ChapterNames = {}));

exports.ChapterNames = ChapterNames;
},{}],"../../modules/speedruncom/wrapper.ts":[function(require,module,exports) {
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

var fetchLevelBoardWithVariable = function fetchLevelBoardWithVariable(level, category, varId, val) {
  return __awaiter(_this, void 0, Promise, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch(getBasePath() + "/leaderboards/" + celeste_1.GAME_ID + "/level/" + level.id + "/" + category.id + "?var-" + varId + "=" + val)];

        case 1:
          return [2
          /*return*/
          , _a.sent().json()];
      }
    });
  });
};

exports.fetchLevelBoardWithVariable = fetchLevelBoardWithVariable;

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
},{"./constants/celeste":"../../modules/speedruncom/constants/celeste.ts"}],"../../modules/speedruncom/get-data.ts":[function(require,module,exports) {
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

var celeste_1 = require("./constants/celeste");

var getRawLeaderboardData = function getRawLeaderboardData() {
  return __awaiter(_this, void 0, Promise, function () {
    var levels, categories, variables, grid;
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
          , Promise.all(levels.data.map(function (lvl) {
            return wrapper_1.fetchLevelVariables(lvl);
          }))];

        case 3:
          variables = _a.sent();
          return [4
          /*yield*/
          , Promise.all(categories.data.map(function (cat) {
            return Promise.all(levels.data.map(function (lvl, i) {
              if (cat.name === celeste_1.Categories.COLLECTIBLES && lvl.name !== celeste_1.ChapterNames.C9) {
                // find the 2 relevant IDs based on variable name and run value label
                var variable = variables[i].data.find(function (x) {
                  return x.name === celeste_1.COLLECTIBLES_VARIABLE_NAME;
                });
                var value = Object.entries(variable.values.values).find(function (_a) {
                  var _key = _a[0],
                      val = _a[1];
                  return val.label === celeste_1.FC_RUN_VALUE;
                });
                return wrapper_1.fetchLevelBoardWithVariable(lvl, cat, variable.id, value[0]);
              }

              return wrapper_1.fetchLevelBoard(lvl, cat);
            }));
          }))];

        case 4:
          grid = _a.sent();
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
},{"./wrapper":"../../modules/speedruncom/wrapper.ts","./constants/celeste":"../../modules/speedruncom/constants/celeste.ts"}],"../../modules/speedruncom/grid-transformation.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** returns a gridTransformationFunction, using the given callback function in grid.map */

var getGridMapTransformation = function getGridMapTransformation(func) {
  return function (grid) {
    return grid.map(function (levelColumn, i) {
      return func(levelColumn, i);
    });
  };
};

exports.getGridMapTransformation = getGridMapTransformation;

var removeColumn = function removeColumn(grid, col) {
  return grid.filter(function (_, i) {
    return i !== col;
  });
};

exports.removeColumn = removeColumn;

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
},{}],"../../modules/rankings/scoring.ts":[function(require,module,exports) {
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
},{}],"../../modules/rankings/models/Player.ts":[function(require,module,exports) {
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
      var n, _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (this._name) {
              return [2
              /*return*/
              , this._name];
            }

            _b.label = 1;

          case 1:
            _b.trys.push([1, 4,, 5]);

            return [4
            /*yield*/
            , wrapper_1.fetchUser(this.id)];

          case 2:
            return [4
            /*yield*/
            , _b.sent().data.names.international];

          case 3:
            n = _b.sent();
            this._name = n;
            return [3
            /*break*/
            , 5];

          case 4:
            _a = _b.sent();
            this._name = "UNLOADED: " + this.id;
            return [3
            /*break*/
            , 5];

          case 5:
            return [2
            /*return*/
            , this._name];
        }
      });
    });
  };

  Player.scoringFn = scoring_1.eliteScoring;
  return Player;
}();

exports.default = Player;
},{"../../speedruncom/wrapper":"../../modules/speedruncom/wrapper.ts","../scoring":"../../modules/rankings/scoring.ts"}],"../../modules/rankings/build-map.ts":[function(require,module,exports) {
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
            var p = r.run.players[0]; // skip players without id (deleted users)

            if (p.id) {
              pMap.has(p.id) || pMap.set(p.id, new Player_1.default(p.id, gridDimensions));
              var pl = pMap.get(p.id);
              pl.registerRun(r, i, j);
            }
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
},{"./models/Player":"../../modules/rankings/models/Player.ts"}],"../../modules/rankings/get-map.ts":[function(require,module,exports) {
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

var get_data_1 = require("../speedruncom/get-data");

var grid_transformation_1 = require("../speedruncom/grid-transformation");

var build_map_1 = __importDefault(require("./build-map"));

var getPlayerMap = function getPlayerMap() {
  return __awaiter(_this, void 0, void 0, function () {
    var raw, grid, transformations;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , get_data_1.getRawLeaderboardData()];

        case 1:
          raw = _a.sent();
          grid = raw.grid.map(function (categoryRow) {
            return categoryRow.map(function (levelBoard) {
              return levelBoard.data;
            });
          });
          transformations = [grid_transformation_1.removeFarewellObsoletes];
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
};

exports.default = getPlayerMap;
},{"../speedruncom/get-data":"../../modules/speedruncom/get-data.ts","../speedruncom/grid-transformation":"../../modules/speedruncom/grid-transformation.ts","./build-map":"../../modules/rankings/build-map.ts"}],"../ui/util/html-helper.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var htmlToElement = function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
};

exports.default = htmlToElement;
},{}],"../models/TableSelection.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-unused-vars */

var TableSelection;

(function (TableSelection) {
  TableSelection["TOTAL"] = "Total";
  TableSelection["A_SIDES"] = "A-Sides";
  TableSelection["COLLECTIBLES"] = "Collectibles";
  TableSelection["B_SIDES"] = "B-Sides";
  TableSelection["C_SIDES"] = "C-Sides";
})(TableSelection || (TableSelection = {}));

exports.default = TableSelection;
},{}],"../ui/util/time-helper.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var removeLeadingZeroes = function removeLeadingZeroes(s) {
  var arr = s.split('');
  var out = s.split('');

  for (var i = 0; i < arr.length; i++) {
    var char = arr[i];

    if (char === '0' || char === ':') {
      out.shift();
    } else {
      return out.join('');
    }
  }

  return s;
};

exports.removeLeadingZeroes = removeLeadingZeroes;

var toHHMMSS = function toHHMMSS(time) {
  var secNum = parseInt(time, 10);
  var hours = Math.floor(secNum / 3600);
  var minutes = Math.floor((secNum - hours * 3600) / 60);
  var seconds = secNum - hours * 3600 - minutes * 60;
  var raw = [hours, minutes, seconds].map(function (e) {
    return String(e).padStart(2, '0');
  }).join(':');
  return removeLeadingZeroes(raw);
};

exports.toHHMMSS = toHHMMSS;
},{}],"../ui/components/subtexts.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getMiniText = function getMiniText(content) {
  var x = document.createElement('span');
  x.classList.add('mini-text');
  x.innerHTML = content;
  return x;
};

exports.getMiniText = getMiniText;

var getMiniTextString = function getMiniTextString(content) {
  var x = document.createElement('span');
  x.classList.add('mini-text');
  x.innerHTML = content;
  return "<span class=\"mini-text\">" + content + "</span>";
};

var getPts = function getPts(asString) {
  if (asString === void 0) {
    asString = false;
  }

  return asString ? getMiniTextString('pts') : getMiniText('pts');
};

exports.getPts = getPts;

var getMs = function getMs(ms, asString) {
  if (asString === void 0) {
    asString = false;
  }

  return asString ? getMiniTextString(ms) : getMiniText(ms);
};

exports.getMs = getMs;

var getOrdinal = function getOrdinal(n, asString) {
  if (asString === void 0) {
    asString = false;
  } // taken from https://stackoverflow.com/a/39466341


  var nth = function nth(x) {
    return ['st', 'nd', 'rd'][((x + 90) % 100 - 10) % 10 - 1] || 'th';
  };

  var ordinal = nth(n);
  return asString ? getMiniTextString(ordinal) : getMiniText(ordinal);
};

exports.getOrdinal = getOrdinal;
},{}],"../ui/components/player-table.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Player_1 = __importDefault(require("../../../modules/rankings/models/Player"));

var celeste_1 = require("../../../modules/speedruncom/constants/celeste");

var TableSelection_1 = __importDefault(require("../../models/TableSelection"));

var html_helper_1 = __importDefault(require("../util/html-helper"));

var time_helper_1 = require("../util/time-helper");

var subtexts_1 = require("./subtexts");

var getRunElement = function getRunElement(r) {
  if (!r) {
    return html_helper_1.default("\n      <td class=\"hover-highlight\">\n        <div class=\"player-table-run\">\n          <span>---------</span>\n          <span>---------</span>\n        </div>\n      </td>\n    ");
  }

  var timeSplit = String(r.run.times.primary_t).split('.');
  var withoutMs = timeSplit[0];
  var onlyMs = timeSplit.length === 2 ? timeSplit[1].padEnd(3, '0') : '000';
  var ele = html_helper_1.default("\n    <td class=\"hover-highlight\">\n      <div class=\"player-table-run\">\n        <span>" + time_helper_1.toHHMMSS(withoutMs) + "." + subtexts_1.getMs(onlyMs, true) + "</span>\n        <div><span>" + r.place + subtexts_1.getOrdinal(r.place, true) + "</span> / <span>" + Player_1.default.scoringFn(r) + " " + subtexts_1.getPts(true) + "</span></div>\n      </div>\n    </td>\n  ");
  ele.addEventListener('click', function () {
    window.open(r.run.weblink);
  });
  return ele;
};

var getTableElement = function getTableElement(elements) {
  var ele = document.createElement('tr');
  elements.forEach(function (e) {
    return ele.appendChild(e);
  });
  return ele;
};

var getTableHeader = function getTableHeader(str) {
  var x = str.map(function (e) {
    return "<th>" + e + "</th>";
  }).join('');
  return html_helper_1.default("<tr>" + x + "</tr>");
};

var getPlayerTable = function getPlayerTable(s) {
  var p = s.player;
  var t = document.createElement('table');
  t.classList.add('player-table');
  var head = getTableHeader(['Stage', TableSelection_1.default.A_SIDES, TableSelection_1.default.COLLECTIBLES, TableSelection_1.default.B_SIDES, TableSelection_1.default.C_SIDES]);
  t.appendChild(head);
  var chapters = [celeste_1.ChapterNames.C1, celeste_1.ChapterNames.C2, celeste_1.ChapterNames.C3, celeste_1.ChapterNames.C4, celeste_1.ChapterNames.C5, celeste_1.ChapterNames.C6, celeste_1.ChapterNames.C7, celeste_1.ChapterNames.C8, celeste_1.ChapterNames.C9];
  var tableRows = chapters.map(function (chapter, i) {
    var runElements;

    if (chapter === celeste_1.ChapterNames.C9) {
      runElements = [p.timesPage[0][i]].map(function (r) {
        return getRunElement(r);
      });
    } else {
      runElements = [p.timesPage[0][i], p.timesPage[1][i], p.timesPage[2][i], p.timesPage[3][i]].map(function (r) {
        return getRunElement(r);
      });
    }

    var x = [html_helper_1.default("<td class=\"bold player-table-chapter\">" + chapter + "</td>")].concat(runElements);
    return getTableElement(x.map(function (e) {
      return e;
    }));
  });
  tableRows.forEach(function (e) {
    return t.appendChild(e);
  });
  var pointsPerCol = getTableHeader(['Totals'].concat([p.getPointsOfColumn(0), p.getPointsOfColumn(1), p.getPointsOfColumn(2), p.getPointsOfColumn(3)].map(function (e) {
    return String(e) + " points";
  })));
  t.appendChild(pointsPerCol);
  return t;
};

exports.default = getPlayerTable;
},{"../../../modules/rankings/models/Player":"../../modules/rankings/models/Player.ts","../../../modules/speedruncom/constants/celeste":"../../modules/speedruncom/constants/celeste.ts","../../models/TableSelection":"../models/TableSelection.ts","../util/html-helper":"../ui/util/html-helper.ts","../util/time-helper":"../ui/util/time-helper.ts","./subtexts":"../ui/components/subtexts.ts"}],"../ui/components/total-points-count.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getTotalPointsCount = function getTotalPointsCount(s) {
  var x = document.createElement('span');
  x.classList.add('center');
  x.classList.add('total-points');
  x.innerHTML = "Total: " + s.player.totalPoints;
  return x;
};

exports.default = getTotalPointsCount;
},{}],"../ui/components/player-page.ts":[function(require,module,exports) {
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

var html_helper_1 = __importDefault(require("../util/html-helper"));

var player_table_1 = __importDefault(require("./player-table"));

var total_points_count_1 = __importDefault(require("./total-points-count"));

var renderPlayerPage = function renderPlayerPage(state, id) {
  return __awaiter(_this, void 0, Promise, function () {
    var container, reset, name;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          container = document.getElementById(id);

          reset = function reset() {
            container.innerHTML = '';
          };

          reset();
          if (!!state.player) return [3
          /*break*/
          , 1];
          container.appendChild(html_helper_1.default("\n      <h1>Oops, something went wrong!</h1>\n    "));
          return [3
          /*break*/
          , 3];

        case 1:
          return [4
          /*yield*/
          , state.player.getName()];

        case 2:
          name = _a.sent();
          container.appendChild(html_helper_1.default("<h1>" + name + "</h1>"));
          container.appendChild(player_table_1.default(state));
          container.appendChild(total_points_count_1.default(state));
          _a.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

exports.default = renderPlayerPage;
},{"../util/html-helper":"../ui/util/html-helper.ts","./player-table":"../ui/components/player-table.ts","./total-points-count":"../ui/components/total-points-count.ts"}],"player.ts":[function(require,module,exports) {
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

var get_map_1 = __importDefault(require("../../modules/rankings/get-map"));

var player_page_1 = __importDefault(require("../ui/components/player-page"));

var wrapper_1 = require("../../modules/speedruncom/wrapper");

var main = function main() {
  return __awaiter(_this, void 0, void 0, function () {
    var CONTAINER, render, abort, playerParam, id, _a, pMap;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          CONTAINER = 'player-container';

          render = function render(s) {
            return player_page_1.default(s, CONTAINER);
          };

          abort = function abort() {
            return render({
              player: null
            });
          };

          playerParam = new URLSearchParams(window.location.search).get('player');

          if (!playerParam) {
            return [2
            /*return*/
            , abort()];
          }

          _b.label = 1;

        case 1:
          _b.trys.push([1, 4,, 5]);

          return [4
          /*yield*/
          , wrapper_1.fetchUser(playerParam)];

        case 2:
          return [4
          /*yield*/
          , _b.sent().data.id];

        case 3:
          id = _b.sent();
          return [3
          /*break*/
          , 5];

        case 4:
          _a = _b.sent();
          return [2
          /*return*/
          , abort()];

        case 5:
          return [4
          /*yield*/
          , get_map_1.default()];

        case 6:
          pMap = _b.sent();

          if (!pMap.get(id)) {
            return [2
            /*return*/
            , abort()];
          }

          return [4
          /*yield*/
          , render({
            player: pMap.get(id)
          })];

        case 7:
          _b.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
};

main();
},{"../../modules/rankings/get-map":"../../modules/rankings/get-map.ts","../ui/components/player-page":"../ui/components/player-page.ts","../../modules/speedruncom/wrapper":"../../modules/speedruncom/wrapper.ts"}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55945" + '/');

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
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","player.ts"], null)
//# sourceMappingURL=/player.1a7f322d.js.map