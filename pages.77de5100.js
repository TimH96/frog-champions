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
})({"../states/AppState.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rankingCriteria = void 0;
var rankingCriteria;

(function (rankingCriteria) {
  rankingCriteria[rankingCriteria["point"] = 0] = "point";
  rankingCriteria[rankingCriteria["average"] = 1] = "average";
})(rankingCriteria = exports.rankingCriteria || (exports.rankingCriteria = {}));

;
},{}],"../models/AppEvent.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-unused-vars */

var AppEvent;

(function (AppEvent) {
  AppEvent["UPDATE_STATE"] = "updateState";
})(AppEvent || (AppEvent = {}));

exports.default = AppEvent;
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
},{}],"../../modules/speedruncom/constants/celeste.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChapterNames = exports.Categories = exports.CORE_FC_RUN_VALUE = exports.CORE_FC_VARIABLE_NAME = exports.ARB_RUN_VALUE = exports.FC_RUN_VALUE = exports.COLLECTIBLES_VARIABLE_NAME = exports.GAME_NAME = exports.GAME_ID = void 0;
var GAME_ID = 'o1y9j9v6';
exports.GAME_ID = GAME_ID;
var GAME_NAME = 'Celeste';
exports.GAME_NAME = GAME_NAME;
var COLLECTIBLES_VARIABLE_NAME = 'Full Clear / ARB / HC';
exports.COLLECTIBLES_VARIABLE_NAME = COLLECTIBLES_VARIABLE_NAME;
var FC_RUN_VALUE = 'Full Clear';
exports.FC_RUN_VALUE = FC_RUN_VALUE;
var ARB_RUN_VALUE = 'All Red Berries';
exports.ARB_RUN_VALUE = ARB_RUN_VALUE;
var CORE_FC_VARIABLE_NAME = 'Full Clear';
exports.CORE_FC_VARIABLE_NAME = CORE_FC_VARIABLE_NAME;
var CORE_FC_RUN_VALUE = 'Yes';
exports.CORE_FC_RUN_VALUE = CORE_FC_RUN_VALUE;
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
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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
exports.fetchUser = exports.fetchLevelVariables = exports.fetchLevelCategories = exports.fetchLevels = exports.fetchLevelBoardWithVariables = exports.fetchLevelBoard = void 0;

var celeste_1 = require("./constants/celeste");

var HREF = 'www.speedrun.com';
var API_VERSION = 'v1';

var getBasePath = function getBasePath() {
  return "https://" + HREF + "/api/" + API_VERSION;
};

var fetchLevelBoard = function fetchLevelBoard(level, category) {
  return __awaiter(void 0, void 0, Promise, function () {
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

var fetchLevelBoardWithVariables = function fetchLevelBoardWithVariables(level, category, variables) {
  return __awaiter(void 0, void 0, Promise, function () {
    var variableString;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          variableString = variables.map(function (x) {
            return "var-" + x.variableId + "=" + x.valueId;
          }).join('&');
          return [4
          /*yield*/
          , fetch(getBasePath() + "/leaderboards/" + celeste_1.GAME_ID + "/level/" + level.id + "/" + category.id + "?" + variableString)];

        case 1:
          return [2
          /*return*/
          , _a.sent().json()];
      }
    });
  });
};

exports.fetchLevelBoardWithVariables = fetchLevelBoardWithVariables;

var fetchLevels = function fetchLevels() {
  return __awaiter(void 0, void 0, Promise, function () {
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
  return __awaiter(void 0, void 0, Promise, function () {
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
  return __awaiter(void 0, void 0, Promise, function () {
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
  return __awaiter(void 0, void 0, Promise, function () {
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
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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
exports.getRawLeaderboardData = void 0;

var wrapper_1 = require("./wrapper");

var celeste_1 = require("./constants/celeste");

var getRawLeaderboardData = function getRawLeaderboardData() {
  return __awaiter(void 0, void 0, Promise, function () {
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
              if (cat.name === celeste_1.Categories.COLLECTIBLES) {
                if (lvl.name === celeste_1.ChapterNames.C9) return wrapper_1.fetchLevelBoard(lvl, cat);
                var catVars_1 = variables[i];
                var queryVars = [];

                var findVariable = function findVariable(varName, valLabel) {
                  // find the 2 relevant IDs based on variable name and run value label
                  var variable = catVars_1.data.find(function (x) {
                    return x.name === varName;
                  });
                  var value = Object.entries(variable.values.values).find(function (_a) {
                    var _ = _a[0],
                        val = _a[1];
                    return val.label === valLabel;
                  });
                  return {
                    variableId: variable.id,
                    valueId: value[0]
                  };
                }; // Core has a very different FC leaderboard structure, with ARB as category label and a FC run var


                var isCore = lvl.name === celeste_1.ChapterNames.C8;
                queryVars.push(findVariable(celeste_1.COLLECTIBLES_VARIABLE_NAME, isCore ? celeste_1.ARB_RUN_VALUE : celeste_1.FC_RUN_VALUE));

                if (isCore) {
                  queryVars.push(findVariable(celeste_1.CORE_FC_VARIABLE_NAME, celeste_1.CORE_FC_RUN_VALUE));
                }

                return wrapper_1.fetchLevelBoardWithVariables(lvl, cat, queryVars);
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
exports.removeFarewellObsoletes = exports.removeColumn = exports.getGridMapTransformation = void 0;
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
},{}],"../../modules/rankings/models/Player.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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

function GetAverageStatistics(scores) {
  var count = scores.length;
  if (count === 0) return [0, 0, 0];
  var sum = scores.reduce(function (a, b) {
    return a + b;
  }, 0);
  if (count === 1) return [1, sum, sum];
  var ssum = scores.reduce(function (a, b) {
    return a + b * b;
  }, 0);
  var avg = sum / count;
  var tdev = ssum - avg * avg * count;
  var sdev = Math.sqrt(tdev / (count - 1));
  var cbound = 2 * sdev / Math.sqrt(count);
  return [count, avg, cbound];
}

var Player =
/** @class */
function () {
  function Player(id, gridDimensions) {
    this._totalAvgScore = null;
    this._name = undefined;
    this.id = id;
    this.timesPage = gridDimensions.map(function (colSize) {
      return new Array(colSize).fill(null);
    });
    this._pointsPerColumn = gridDimensions.map(function (_) {
      return 0;
    });
    this._avgScorePerColumn = gridDimensions.map(function (_) {
      return null;
    });
  }
  /** register run r in the grid at position i, j */


  Player.prototype.registerRun = function (r, s, i, j) {
    var x = {
      place: r.place,
      run: r.run,
      score: s
    };
    this.timesPage[i][j] = x;
  };

  Player.prototype.getPointsOfColumn = function (col) {
    if (this._pointsPerColumn[col]) {
      return this._pointsPerColumn[col];
    }

    var val = this.timesPage[col].filter(function (x) {
      return x != null;
    }).reduce(function (sum, r) {
      return sum + r.score;
    }, 0);
    this._pointsPerColumn[col] = val;
    return val;
  };

  Player.prototype.getAvgScoreOfColumn = function (col) {
    if (this._avgScorePerColumn[col] === null) {
      var list = this.timesPage[col].filter(function (x) {
        return x != null;
      }).map(function (r) {
        return r.score;
      });
      this._avgScorePerColumn[col] = GetAverageStatistics(list);
    }

    return this._avgScorePerColumn[col];
  };

  Player.prototype.getAvgScore = function () {
    if (this._totalAvgScore === null) {
      var list = this.timesPage.map(function (r) {
        return r.filter(function (x) {
          return x != null;
        }).map(function (x) {
          return x.score;
        });
      }).reduce(function (a, b) {
        return a.concat(b);
      }, []);
      this._totalAvgScore = GetAverageStatistics(list);
    }

    return this._totalAvgScore;
  };

  Object.defineProperty(Player.prototype, "totalPoints", {
    get: function get() {
      var _this = this;

      return this._pointsPerColumn.reduce(function (sum, _, i) {
        return sum + _this.getPointsOfColumn(i);
      }, 0);
    },
    enumerable: false,
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
    enumerable: false,
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

  return Player;
}();

exports.default = Player;
},{"../../speedruncom/wrapper":"../../modules/speedruncom/wrapper.ts"}],"../../modules/rankings/scoring.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPercentScoreFn = exports.eliteScoring = void 0;

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

var getPercentScoreFn = function getPercentScoreFn(wrTime) {
  return function (r) {
    var t = r.run.times.primary_t;
    return Math.max(0, Math.round((1 - Math.log((Math.E - 1) * (t / wrTime - 1) + 1)) * 1000));
  };
};

exports.getPercentScoreFn = getPercentScoreFn;
},{}],"../../modules/rankings/build-map.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Player_1 = __importDefault(require("./models/Player"));

var scoring_1 = require("./scoring");

var buildPlayerMap = function buildPlayerMap(grid) {
  return __awaiter(void 0, void 0, Promise, function () {
    var pMap, gridDimensions;
    return __generator(this, function (_a) {
      pMap = new Map();
      gridDimensions = grid.map(function (col) {
        return col.length;
      });
      grid.forEach(function (levelColumn, i) {
        return levelColumn.forEach(function (board, j) {
          var fn = scoring_1.getPercentScoreFn(board.runs[0].run.times.primary_t);
          board.runs.forEach(function (r) {
            var p = r.run.players[0]; // skip players without id (deleted users)

            if (p.id) {
              pMap.has(p.id) || pMap.set(p.id, new Player_1.default(p.id, gridDimensions));
              var pl = pMap.get(p.id);
              pl.registerRun(r, fn(r), i, j);
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
},{"./models/Player":"../../modules/rankings/models/Player.ts","./scoring":"../../modules/rankings/scoring.ts"}],"../../modules/rankings/get-map.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var get_data_1 = require("../speedruncom/get-data");

var grid_transformation_1 = require("../speedruncom/grid-transformation");

var build_map_1 = __importDefault(require("./build-map"));

var getPlayerMap = function getPlayerMap() {
  return __awaiter(void 0, void 0, void 0, function () {
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
},{"../speedruncom/get-data":"../../modules/speedruncom/get-data.ts","../speedruncom/grid-transformation":"../../modules/speedruncom/grid-transformation.ts","./build-map":"../../modules/rankings/build-map.ts"}],"../ui/util/points-getter.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAverageGetter = exports.getPointsGetter = void 0;

var TableSelection_1 = __importDefault(require("../../models/TableSelection"));

function getPointsGetter(sel) {
  switch (sel) {
    case TableSelection_1.default.TOTAL:
      return function (p) {
        return p.totalPoints;
      };

    case TableSelection_1.default.A_SIDES:
      return function (p) {
        return p.getPointsOfColumn(0);
      };

    case TableSelection_1.default.COLLECTIBLES:
      return function (p) {
        return p.getPointsOfColumn(1);
      };

    case TableSelection_1.default.B_SIDES:
      return function (p) {
        return p.getPointsOfColumn(2);
      };

    case TableSelection_1.default.C_SIDES:
      return function (p) {
        return p.getPointsOfColumn(3);
      };

    default:
      return function (p) {
        return p.totalPoints;
      };
  }
}

exports.getPointsGetter = getPointsGetter;

function getAverageGetter(sel) {
  switch (sel) {
    case TableSelection_1.default.TOTAL:
      return function (p) {
        return p.getAvgScore();
      };

    case TableSelection_1.default.A_SIDES:
      return function (p) {
        return p.getAvgScoreOfColumn(0);
      };

    case TableSelection_1.default.COLLECTIBLES:
      return function (p) {
        return p.getAvgScoreOfColumn(1);
      };

    case TableSelection_1.default.B_SIDES:
      return function (p) {
        return p.getAvgScoreOfColumn(2);
      };

    case TableSelection_1.default.C_SIDES:
      return function (p) {
        return p.getAvgScoreOfColumn(3);
      };

    default:
      return function (p) {
        return p.getAvgScore();
      };
  }
}

exports.getAverageGetter = getAverageGetter;
},{"../../models/TableSelection":"../models/TableSelection.ts"}],"../ui/util/array-helper.ts":[function(require,module,exports) {
"use strict";
/**
 * collection of functions to help transform the player array based on user input
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSorterFunction = void 0;

var AppState_1 = require("../../states/AppState");

var points_getter_1 = require("./points-getter");

var getSorterFunction = function getSorterFunction(s) {
  if (s.rankingCriteria === AppState_1.rankingCriteria.point) {
    var getter_1 = points_getter_1.getPointsGetter(s.tableSelection);
    return function (a, b) {
      return getter_1(b) - getter_1(a);
    };
  } else {
    var getter_2 = points_getter_1.getAverageGetter(s.tableSelection);
    return function (a, b) {
      var as = getter_2(a);
      var bs = getter_2(b);
      if (!as[0] || !bs[0]) return bs[0] - as[0];
      return bs[1] - bs[2] - (as[1] - as[2]);
    };
  }
};

exports.getSorterFunction = getSorterFunction;
},{"../../states/AppState":"../states/AppState.ts","./points-getter":"../ui/util/points-getter.ts"}],"../ui/components/control-buttons.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AppEvent_1 = __importDefault(require("../../models/AppEvent"));

var TableSelection_1 = __importDefault(require("../../models/TableSelection"));

var getCallback = function getCallback(s, type) {
  return function () {
    s.tableSelection = type;
    document.dispatchEvent(new CustomEvent(AppEvent_1.default.UPDATE_STATE, {
      detail: s
    }));
  };
};

var getButton = function getButton(s, type) {
  var btn = document.createElement('button');
  btn.innerHTML = type;
  btn.disabled = type === s.tableSelection;
  btn.addEventListener('click', getCallback(s, type));
  return btn;
};

var getControlButtons = function getControlButtons(s) {
  var l = document.createElement('li');
  l.classList.add('control-buttons');
  var selections = [TableSelection_1.default.TOTAL, TableSelection_1.default.A_SIDES, TableSelection_1.default.COLLECTIBLES, TableSelection_1.default.B_SIDES, TableSelection_1.default.C_SIDES];

  for (var _i = 0, selections_1 = selections; _i < selections_1.length; _i++) {
    var type = selections_1[_i];
    l.appendChild(getButton(s, type));
  }

  return l;
};

exports.default = getControlButtons;
},{"../../models/AppEvent":"../models/AppEvent.ts","../../models/TableSelection":"../models/TableSelection.ts"}],"../ui/util/html-helper.ts":[function(require,module,exports) {
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
},{}],"../ui/components/subtexts.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrdinal = exports.getMs = exports.getPts = exports.getMiniText = void 0;

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
},{}],"../ui/components/leaderboard-table.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AppState_1 = require("../../states/AppState");

var AppEvent_1 = __importDefault(require("../../models/AppEvent"));

var html_helper_1 = __importDefault(require("../util/html-helper"));

var points_getter_1 = require("../util/points-getter");

var subtexts_1 = require("./subtexts");

var getTableElement = function getTableElement(place, player, points, average) {
  var ele = html_helper_1.default("\n    <tr class=\"hover-highlight\">\n      <td class=\"bold\">" + place + "</td>\n      <td>" + player.name + "</td>\n      <td>" + points + " " + subtexts_1.getPts(true) + "</td>\n      <td><div class=\"averageCell\"><span class=\"count\"><span>" + average[0] + "</span></span>" + average[1].toFixed(2) + "<span class=\"confidenceBound\">" + average[2].toFixed(2) + "</span></div></td>\n    </tr>\n  ");
  ele.addEventListener('click', function () {
    window.open("./player.html?player=" + player.id, '_blank').focus();
  });
  return ele;
};

var getTableHeader = function getTableHeader(str) {
  var header = document.createElement('tr');

  for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var i = str_1[_i];
    var th = document.createElement('th');
    if (i[1] != null) i[1](th);
    th.innerHTML = "<div>" + i[0] + "</div>";
    header.appendChild(th);
  }

  return header;
};

function setRankingCriteria(s, crit) {
  return function (el) {
    console.log('Crit:', s.rankingCriteria, crit);

    if (crit === s.rankingCriteria) {
      el.classList.add('criteriaSel');
    }

    el.addEventListener('click', function () {
      s.rankingCriteria = crit;
      document.dispatchEvent(new CustomEvent(AppEvent_1.default.UPDATE_STATE, {
        detail: s
      }));
    });
  };
}

var getLeaderboardTable = function getLeaderboardTable(s, arr) {
  var t = document.createElement('table');
  var getter = points_getter_1.getPointsGetter(s.tableSelection);
  var getter2 = points_getter_1.getAverageGetter(s.tableSelection);
  t.classList.add('leaderboard-table');
  var head = getTableHeader([['Place', null], ['Name', null], ['Points', setRankingCriteria(s, AppState_1.rankingCriteria.point)], ['Average', setRankingCriteria(s, AppState_1.rankingCriteria.average)]]);
  t.appendChild(head);
  arr.forEach(function (p, i) {
    return t.appendChild(getTableElement(i + 1, p, getter(p), getter2(p)));
  });
  return t;
};

exports.default = getLeaderboardTable;
},{"../../states/AppState":"../states/AppState.ts","../../models/AppEvent":"../models/AppEvent.ts","../util/html-helper":"../ui/util/html-helper.ts","../util/points-getter":"../ui/util/points-getter.ts","./subtexts":"../ui/components/subtexts.ts"}],"../ui/components/load-more-button.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AppEvent_1 = __importDefault(require("../../models/AppEvent"));

var getLoadMoreButton = function getLoadMoreButton(s, max) {
  if (s.tableState >= max) {
    return document.createElement('div');
  }

  var d = document.createElement('div');
  d.classList.add('center');
  var btn = document.createElement('button');
  btn.innerHTML = 'Load 50 more ...';
  btn.addEventListener('click', function () {
    s.tableState = s.tableState + 50;
    document.dispatchEvent(new CustomEvent(AppEvent_1.default.UPDATE_STATE, {
      detail: s
    }));
  });
  d.appendChild(btn);
  return d;
};

exports.default = getLoadMoreButton;
},{"../../models/AppEvent":"../models/AppEvent.ts"}],"../ui/components/loader.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getLoader = function getLoader() {
  var _a;

  var x = document.createElement('div');

  (_a = x.classList).add.apply(_a, ['loader', 'center']);

  x.innerHTML = 'Loading ...';
  return x;
};

exports.default = getLoader;
},{}],"../ui/components/main-page.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var array_helper_1 = require("../util/array-helper");

var control_buttons_1 = __importDefault(require("./control-buttons"));

var leaderboard_table_1 = __importDefault(require("./leaderboard-table"));

var load_more_button_1 = __importDefault(require("./load-more-button"));

var loader_1 = __importDefault(require("./loader"));

var renderMainPage = function renderMainPage(state, container) {
  return __awaiter(void 0, void 0, Promise, function () {
    var reset, arr;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          reset = function reset() {
            container.innerHTML = '';
          };

          reset(); // add loader as arranging array might include loading player names

          container.appendChild(loader_1.default());
          arr = Array.from(state.players.values()).sort(array_helper_1.getSorterFunction(state)).slice(0, state.tableState); // load all names

          return [4
          /*yield*/
          , Promise.all(arr.map(function (p) {
            return __awaiter(void 0, void 0, void 0, function () {
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
          })) // remove loader again
          ];

        case 1:
          // load all names
          _a.sent(); // remove loader again


          reset(); // render dynamic container based on state

          container.appendChild(control_buttons_1.default(state));
          container.appendChild(leaderboard_table_1.default(state, arr));
          container.appendChild(load_more_button_1.default(state, state.players.size));
          return [2
          /*return*/
          ];
      }
    });
  });
};

exports.default = renderMainPage;
},{"../util/array-helper":"../ui/util/array-helper.ts","./control-buttons":"../ui/components/control-buttons.ts","./leaderboard-table":"../ui/components/leaderboard-table.ts","./load-more-button":"../ui/components/load-more-button.ts","./loader":"../ui/components/loader.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AppState_1 = require("../states/AppState");

var AppEvent_1 = __importDefault(require("../models/AppEvent"));

var TableSelection_1 = __importDefault(require("../models/TableSelection"));

var get_map_1 = __importDefault(require("../../modules/rankings/get-map"));

var main_page_1 = __importDefault(require("../ui/components/main-page"));

var loader_1 = __importDefault(require("../ui/components/loader"));

var main = function main() {
  return __awaiter(void 0, void 0, void 0, function () {
    var CONTAINER, pMap, initialState;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          CONTAINER = document.getElementById('dynamic-container');
          CONTAINER.appendChild(loader_1.default());
          return [4
          /*yield*/
          , get_map_1.default()];

        case 1:
          pMap = _a.sent();
          initialState = {
            players: pMap,
            tableSelection: TableSelection_1.default.TOTAL,
            tableState: 100,
            rankingCriteria: AppState_1.rankingCriteria.point
          };
          document.addEventListener(AppEvent_1.default.UPDATE_STATE, function (e) {
            main_page_1.default(e.detail, CONTAINER); // eslint-disable-next-line no-undef
          });
          return [4
          /*yield*/
          , main_page_1.default(initialState, CONTAINER)];

        case 2:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
};

main();
},{"../states/AppState":"../states/AppState.ts","../models/AppEvent":"../models/AppEvent.ts","../models/TableSelection":"../models/TableSelection.ts","../../modules/rankings/get-map":"../../modules/rankings/get-map.ts","../ui/components/main-page":"../ui/components/main-page.ts","../ui/components/loader":"../ui/components/loader.ts"}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61369" + '/');

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
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/pages.77de5100.js.map