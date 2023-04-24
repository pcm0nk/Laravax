import {
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  h,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  withCtx
} from "./chunk-B7UOCPZH.js";
import "./chunk-RSJERJUL.js";

// node_modules/tailvue/dist/tailvue.es.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var themes = [
  {
    name: "white",
    primary: "border border-gray-300 shadow-sm font-medium rounded text-gray-700 bg-white",
    dark: "dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:dark:bg-gray-600 dark:ring-offset-gray-800",
    active: "hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    disabled: ""
  },
  {
    name: "dark",
    primary: "border border-gray-600 shadow-sm font-medium rounded text-gray-400 bg-gray-700",
    active: "hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ring-offset-gray-800",
    disabled: ""
  },
  {
    name: "white-left",
    primary: "border border-gray-300 shadow-sm font-medium rounded-l-md text-gray-700 bg-white",
    dark: "dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:dark:bg-gray-500 dark:ring-offset-gray-800",
    active: "hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
    disabled: ""
  },
  {
    name: "white-mid",
    primary: "-ml-px relative inline-flex items-center border border-gray-300 shadow-sm font-medium text-gray-700 bg-white",
    dark: "dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:dark:bg-gray-500 dark:ring-offset-gray-800",
    active: "hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
    disabled: ""
  },
  {
    name: "white-right",
    primary: "-ml-px border border-gray-300 shadow-sm font-medium rounded-r-md text-gray-700 bg-white",
    dark: "dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:dark:bg-gray-500 dark:ring-offset-gray-800",
    active: "hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
    disabled: ""
  },
  {
    name: "text",
    primary: "text-gray-700",
    active: "hover:text-gray-500 hover:bg-gray-100 focus:outline-none active:text-gray-800 active:bg-gray-50"
  },
  {
    name: "indigo",
    primary: "border border-transparent font-medium rounded shadow-sm text-white bg-indigo-600",
    active: "hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    disabled: ""
  },
  {
    name: "indigo-light",
    primary: "text-indigo-700 bg-indigo-100",
    active: "hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 active:bg-indigo-200",
    disabled: ""
  },
  {
    name: "indigo-dark",
    primary: "text-indigo-200 bg-indigo-900 rounded shadow-sm ",
    active: "hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 active:bg-indigo-800",
    disabled: ""
  },
  {
    name: "red",
    primary: "border border-transparent font-medium rounded shadow-sm text-white bg-red-600",
    active: "hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:shadow-outline-red active:bg-red-700",
    disabled: ""
  },
  {
    name: "yellow",
    primary: "border border-transparent font-medium rounded shadow-sm text-white bg-yellow-600",
    active: "hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:shadow-outline-yellow active:bg-yellow-700",
    disabled: ""
  },
  {
    name: "green",
    primary: "border border-transparent font-medium rounded shadow-sm text-white bg-green-600",
    active: "hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:shadow-outline-green active:bg-green-700",
    disabled: ""
  },
  {
    name: "emerald",
    primary: "border border-transparent font-medium rounded shadow-sm text-white bg-emerald-600",
    active: "hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:shadow-outline-emerald active:bg-emerald-700",
    disabled: ""
  },
  {
    name: "teal",
    primary: "border border-transparent font-medium rounded shadow-sm text-white bg-teal-600",
    active: "hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:shadow-outline-teal active:bg-teal-700",
    disabled: ""
  },
  {
    name: "blue",
    primary: "border border-transparent font-medium rounded shadow-sm text-white bg-blue-600",
    active: "hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:shadow-outline-blue active:bg-blue-700",
    disabled: ""
  },
  {
    name: "light-blue",
    primary: "border border-transparent font-medium rounded shadow-sm text-white bg-light-blue-600",
    active: "hover:bg-light-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 focus:shadow-outline-light-blue active:bg-light-blue-700",
    disabled: ""
  },
  {
    name: "cyan",
    primary: "border border-transparent font-medium rounded shadow-sm text-white bg-cyan-600",
    active: "hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:shadow-outline-cyan active:bg-cyan-700",
    disabled: ""
  },
  {
    name: "purple",
    primary: "border border-transparent font-medium rounded shadow-sm text-white bg-purple-600",
    active: "hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:shadow-outline-purple active:bg-purple-700",
    disabled: ""
  },
  {
    name: "pink",
    primary: "border border-transparent font-medium rounded shadow-sm text-white bg-pink-600",
    active: "hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:shadow-outline-pink active:bg-pink-700",
    disabled: ""
  }
];
var _hoisted_1$5 = {
  key: 0,
  class: "absolute top-0 right-0 -mr-1 -mt-1 z-10"
};
var _hoisted_2$5 = { class: "flex w-3 h-3 relative" };
var _sfc_main$6 = defineComponent({
  props: {
    alwaysClick: Boolean,
    customTheme: Object,
    theme: String,
    state: {
      type: String,
      default: "active"
    },
    size: {
      type: String,
      default: "m"
    },
    ping: Boolean,
    pingColor: {
      type: String,
      default: "bg-indigo-500"
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const isActive = computed(() => props.state === "active");
    const isDisabled = computed(() => props.state === "disabled");
    const cursor = computed(() => isActive.value ? "cursor-pointer" : isDisabled.value ? "cursor-not-allowed" : "cursor-wait");
    const sizes = {
      "xs": "px-2.5 py-1.5 text-xs leading-4",
      "s": "px-3 py-2 text-sm leading-4",
      "m": "px-4 py-2 text-sm leading-5",
      "l": "px-4 py-2 text-base leading-6",
      "xl": "px-6 py-3 text-base leading-6"
    };
    const currentTheme = computed(() => {
      if (props.customTheme)
        return props.customTheme;
      if (props.theme && themes.find(({ name }) => name === props.theme))
        return themes.find(({ name }) => name === props.theme);
      return themes.find(({ name }) => name === "white");
    });
    function click() {
      if (isActive)
        emit("click");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["relative inline-flex items-center", [sizes[__props.size], unref(currentTheme).primary, unref(currentTheme).dark, unref(cursor), unref(isActive) ? unref(currentTheme).active : unref(currentTheme).disabled]]),
        onClick: click
      }, [
        renderSlot(_ctx.$slots, "default"),
        __props.ping ? (openBlock(), createElementBlock("span", _hoisted_1$5, [
          createBaseVNode("span", _hoisted_2$5, [
            createBaseVNode("span", {
              class: normalizeClass(["animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", __props.pingColor])
            }, null, 2),
            createBaseVNode("span", {
              class: normalizeClass(["relative inline-flex rounded-full h-3 w-3", __props.pingColor])
            }, null, 2)
          ])
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var matchName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
var iconDefaults = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16,
  rotate: 0,
  vFlip: false,
  hFlip: false
});
function fullIcon(data) {
  return __spreadValues(__spreadValues({}, iconDefaults), data);
}
var stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIcon(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIcon(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIcon(result, allowSimpleName) ? null : result;
  }
  return null;
};
var validateIcon = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchName)) && icon.name.match(matchName));
};
function mergeIconData(icon, alias) {
  const result = __spreadValues({}, icon);
  for (const key in iconDefaults) {
    const prop = key;
    if (alias[prop] !== void 0) {
      const value = alias[prop];
      if (result[prop] === void 0) {
        result[prop] = value;
        continue;
      }
      switch (prop) {
        case "rotate":
          result[prop] = (result[prop] + value) % 4;
          break;
        case "hFlip":
        case "vFlip":
          result[prop] = value !== result[prop];
          break;
        default:
          result[prop] = value;
      }
    }
  }
  return result;
}
function getIconData$1(data, name, full = false) {
  function getIcon(name2, iteration) {
    if (data.icons[name2] !== void 0) {
      return Object.assign({}, data.icons[name2]);
    }
    if (iteration > 5) {
      return null;
    }
    const aliases = data.aliases;
    if (aliases && aliases[name2] !== void 0) {
      const item = aliases[name2];
      const result2 = getIcon(item.parent, iteration + 1);
      if (result2) {
        return mergeIconData(result2, item);
      }
      return result2;
    }
    const chars = data.chars;
    if (!iteration && chars && chars[name2] !== void 0) {
      return getIcon(chars[name2], iteration + 1);
    }
    return null;
  }
  const result = getIcon(name, 0);
  if (result) {
    for (const key in iconDefaults) {
      if (result[key] === void 0 && data[key] !== void 0) {
        result[key] = data[key];
      }
    }
  }
  return result && full ? fullIcon(result) : result;
}
function isVariation(item) {
  for (const key in iconDefaults) {
    if (item[key] !== void 0) {
      return true;
    }
  }
  return false;
}
function parseIconSet(data, callback, options) {
  options = options || {};
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const icons = data.icons;
  Object.keys(icons).forEach((name) => {
    const iconData = getIconData$1(data, name, true);
    if (iconData) {
      callback(name, iconData);
      names.push(name);
    }
  });
  const parseAliases = options.aliases || "all";
  if (parseAliases !== "none" && typeof data.aliases === "object") {
    const aliases = data.aliases;
    Object.keys(aliases).forEach((name) => {
      if (parseAliases === "variations" && isVariation(aliases[name])) {
        return;
      }
      const iconData = getIconData$1(data, name, true);
      if (iconData) {
        callback(name, iconData);
        names.push(name);
      }
    });
  }
  return names;
}
var optionalProperties = {
  provider: "string",
  aliases: "object",
  not_found: "object"
};
for (const prop in iconDefaults) {
  optionalProperties[prop] = typeof iconDefaults[prop];
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  for (const prop in optionalProperties) {
    if (obj[prop] !== void 0 && typeof obj[prop] !== optionalProperties[prop]) {
      return null;
    }
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (!name.match(matchName) || typeof icon.body !== "string") {
      return null;
    }
    for (const prop in iconDefaults) {
      if (icon[prop] !== void 0 && typeof icon[prop] !== typeof iconDefaults[prop]) {
        return null;
      }
    }
  }
  const aliases = data.aliases;
  if (aliases) {
    for (const name in aliases) {
      const icon = aliases[name];
      const parent = icon.parent;
      if (!name.match(matchName) || typeof parent !== "string" || !icons[parent] && !aliases[parent]) {
        return null;
      }
      for (const prop in iconDefaults) {
        if (icon[prop] !== void 0 && typeof icon[prop] !== typeof iconDefaults[prop]) {
          return null;
        }
      }
    }
  }
  return data;
}
var storageVersion = 1;
var storage$1 = /* @__PURE__ */ Object.create(null);
try {
  const w = window || self;
  if (w && w._iconifyStorage.version === storageVersion) {
    storage$1 = w._iconifyStorage.storage;
  }
} catch (err) {
}
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ Object.create(null)
  };
}
function getStorage(provider, prefix) {
  if (storage$1[provider] === void 0) {
    storage$1[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerStorage = storage$1[provider];
  if (providerStorage[prefix] === void 0) {
    providerStorage[prefix] = newStorage(provider, prefix);
  }
  return providerStorage[prefix];
}
function addIconSet(storage2, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  const t = Date.now();
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing[name] = t;
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = Object.freeze(fullIcon(icon));
      return true;
    }
  } catch (err) {
  }
  return false;
}
function getIconFromStorage(storage2, name) {
  const value = storage2.icons[name];
  return value === void 0 ? null : value;
}
var simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  return icon ? getIconFromStorage(getStorage(icon.provider, icon.prefix), icon.name) : null;
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  return addIconToStorage(storage2, icon.name, data);
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = typeof data.provider === "string" ? data.provider : "";
  }
  if (simpleNames && provider === "" && (typeof data.prefix !== "string" || data.prefix === "")) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (icon && addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  if (typeof data.prefix !== "string" || !validateIcon({
    provider,
    prefix: data.prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, data.prefix);
  return !!addIconSet(storage2, data);
}
var defaults = Object.freeze({
  inline: false,
  width: null,
  height: null,
  hAlign: "center",
  vAlign: "middle",
  slice: false,
  hFlip: false,
  vFlip: false,
  rotate: 0
});
function mergeCustomisations(defaults2, item) {
  const result = {};
  for (const key in defaults2) {
    const attr = key;
    result[attr] = defaults2[attr];
    if (item[attr] === void 0) {
      continue;
    }
    const value = item[attr];
    switch (attr) {
      case "inline":
      case "slice":
        if (typeof value === "boolean") {
          result[attr] = value;
        }
        break;
      case "hFlip":
      case "vFlip":
        if (value === true) {
          result[attr] = !result[attr];
        }
        break;
      case "hAlign":
      case "vAlign":
        if (typeof value === "string" && value !== "") {
          result[attr] = value;
        }
        break;
      case "width":
      case "height":
        if (typeof value === "string" && value !== "" || typeof value === "number" && value || value === null) {
          result[attr] = value;
        }
        break;
      case "rotate":
        if (typeof value === "number") {
          result[attr] += value;
        }
        break;
    }
  }
  return result;
}
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision === void 0 ? 100 : precision;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function preserveAspectRatio(props) {
  let result = "";
  switch (props.hAlign) {
    case "left":
      result += "xMin";
      break;
    case "right":
      result += "xMax";
      break;
    default:
      result += "xMid";
  }
  switch (props.vAlign) {
    case "top":
      result += "YMin";
      break;
    case "bottom":
      result += "YMax";
      break;
    default:
      result += "YMid";
  }
  result += props.slice ? " slice" : " meet";
  return result;
}
function iconToSVG(icon, customisations) {
  const box = {
    left: icon.left,
    top: icon.top,
    width: icon.width,
    height: icon.height
  };
  let body = icon.body;
  [icon, customisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push("translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")");
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push("translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")");
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift("rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")");
        break;
      case 2:
        transformations.unshift("rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")");
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift("rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")");
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== 0 || box.top !== 0) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = '<g transform="' + transformations.join(" ") + '">' + body + "</g>";
    }
  });
  let width, height;
  if (customisations.width === null && customisations.height === null) {
    height = "1em";
    width = calculateSize(height, box.width / box.height);
  } else if (customisations.width !== null && customisations.height !== null) {
    width = customisations.width;
    height = customisations.height;
  } else if (customisations.height !== null) {
    height = customisations.height;
    width = calculateSize(height, box.width / box.height);
  } else {
    width = customisations.width;
    height = calculateSize(width, box.height / box.width);
  }
  if (width === "auto") {
    width = box.width;
  }
  if (height === "auto") {
    height = box.height;
  }
  width = typeof width === "string" ? width : width.toString() + "";
  height = typeof height === "string" ? height : height.toString() + "";
  const result = {
    attributes: {
      width,
      height,
      preserveAspectRatio: preserveAspectRatio(customisations),
      viewBox: box.left.toString() + " " + box.top.toString() + " " + box.width.toString() + " " + box.height.toString()
    },
    body
  };
  if (customisations.inline) {
    result.inline = true;
  }
  return result;
}
var regex = /\sid="(\S+)"/g;
var randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
var counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"), "$1" + newID + "$3");
  });
  return body;
}
var storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function getAPIModule(provider) {
  return storage[provider] || storage[""];
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    resources,
    path: source.path === void 0 ? "/" : source.path,
    maxURL: source.maxURL ? source.maxURL : 500,
    rotate: source.rotate ? source.rotate : 750,
    timeout: source.timeout ? source.timeout : 5e3,
    random: source.random === true,
    index: source.index ? source.index : 0,
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
var configStorage = /* @__PURE__ */ Object.create(null);
var fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
var fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config2 = createAPIConfig(customConfig);
  if (config2 === null) {
    return false;
  }
  configStorage[provider] = config2;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
var mergeParams = (base, params) => {
  let result = base, hasParams = result.indexOf("?") !== -1;
  function paramToString(value) {
    switch (typeof value) {
      case "boolean":
        return value ? "true" : "false";
      case "number":
        return encodeURIComponent(value);
      case "string":
        return encodeURIComponent(value);
      default:
        throw new Error("Invalid parameter");
    }
  }
  Object.keys(params).forEach((key) => {
    let value;
    try {
      value = paramToString(params[key]);
    } catch (err) {
      return;
    }
    result += (hasParams ? "&" : "?") + encodeURIComponent(key) + "=" + value;
    hasParams = true;
  });
  return result;
};
var maxLengthCache = {};
var pathCache = {};
var detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
  return null;
};
var fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config2 = getAPIConfig(provider);
  if (!config2) {
    return 0;
  }
  let result;
  if (!config2.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config2.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = mergeParams(prefix + ".json", {
      icons: ""
    });
    result = config2.maxURL - maxHostLength - config2.path.length - url.length;
  }
  const cacheKey = provider + ":" + prefix;
  pathCache[provider] = config2.path;
  maxLengthCache[cacheKey] = result;
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
var prepare = (provider, prefix, icons) => {
  const results = [];
  let maxLength = maxLengthCache[prefix];
  if (maxLength === void 0) {
    maxLength = calculateMaxLength(provider, prefix);
  }
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    if (pathCache[provider] === void 0) {
      const config2 = getAPIConfig(provider);
      if (!config2) {
        return "/";
      }
      pathCache[provider] = config2.path;
    }
    return pathCache[provider];
  }
  return "/";
}
var send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      path += mergeParams(prefix + ".json", {
        icons: iconsList
      });
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        callback("next", defaultError);
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
var fetchAPIModule = {
  prepare,
  send
};
function sortIcons(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage2 = /* @__PURE__ */ Object.create(null);
  icons.sort((a, b) => {
    if (a.provider !== b.provider) {
      return a.provider.localeCompare(b.provider);
    }
    if (a.prefix !== b.prefix) {
      return a.prefix.localeCompare(b.prefix);
    }
    return a.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    if (storage2[provider] === void 0) {
      storage2[provider] = /* @__PURE__ */ Object.create(null);
    }
    const providerStorage = storage2[provider];
    if (providerStorage[prefix] === void 0) {
      providerStorage[prefix] = getStorage(provider, prefix);
    }
    const localStorage = providerStorage[prefix];
    let list;
    if (localStorage.icons[name] !== void 0) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing[name] !== void 0) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}
var callbacks = /* @__PURE__ */ Object.create(null);
var pendingUpdates = /* @__PURE__ */ Object.create(null);
function removeCallback(sources, id) {
  sources.forEach((source) => {
    const provider = source.provider;
    if (callbacks[provider] === void 0) {
      return;
    }
    const providerCallbacks = callbacks[provider];
    const prefix = source.prefix;
    const items = providerCallbacks[prefix];
    if (items) {
      providerCallbacks[prefix] = items.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks(provider, prefix) {
  if (pendingUpdates[provider] === void 0) {
    pendingUpdates[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerPendingUpdates = pendingUpdates[provider];
  if (!providerPendingUpdates[prefix]) {
    providerPendingUpdates[prefix] = true;
    setTimeout(() => {
      providerPendingUpdates[prefix] = false;
      if (callbacks[provider] === void 0 || callbacks[provider][prefix] === void 0) {
        return;
      }
      const items = callbacks[provider][prefix].slice(0);
      if (!items.length) {
        return;
      }
      const storage2 = getStorage(provider, prefix);
      let hasPending = false;
      items.forEach((item) => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage2.icons[name] !== void 0) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage2.missing[name] !== void 0) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([
              {
                provider,
                prefix
              }
            ], item.id);
          }
          item.callback(icons.loaded.slice(0), icons.missing.slice(0), icons.pending.slice(0), item.abort);
        }
      });
    });
  }
}
var idCounter = 0;
function storeCallback(callback, icons, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback,
    abort
  };
  pendingSources.forEach((source) => {
    const provider = source.provider;
    const prefix = source.prefix;
    if (callbacks[provider] === void 0) {
      callbacks[provider] = /* @__PURE__ */ Object.create(null);
    }
    const providerCallbacks = callbacks[provider];
    if (providerCallbacks[prefix] === void 0) {
      providerCallbacks[prefix] = [];
    }
    providerCallbacks[prefix].push(item);
  });
  return abort;
}
function listToIcons(list, validate = true, simpleNames2 = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon(item, false, simpleNames2) : item;
    if (!validate || validateIcon(icon, simpleNames2)) {
      result.push({
        provider: icon.provider,
        prefix: icon.prefix,
        name: icon.name
      });
    }
  });
  return result;
}
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};
function sendQuery(config2, payload, query, done) {
  const resourcesCount = config2.resources.length;
  const startIndex = config2.random ? Math.floor(Math.random() * resourcesCount) : config2.index;
  let resources;
  if (config2.random) {
    let list = config2.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config2.resources.slice(startIndex).concat(config2.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function subscribe(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue.length,
      subscribe,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback) => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function moduleResponse(item, response, data) {
    const isError = response !== "success";
    queue = queue.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config2.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data;
      if (!queue.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config2.random) {
      const index = config2.resources.indexOf(item.resource);
      if (index !== -1 && index !== config2.index) {
        config2.index = index;
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback) => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config2.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data) => {
        moduleResponse(item, status2, data);
      }
    };
    queue.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config2.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}
function setConfig(config2) {
  if (typeof config2 !== "object" || typeof config2.resources !== "object" || !(config2.resources instanceof Array) || !config2.resources.length) {
    throw new Error("Invalid Reduncancy configuration");
  }
  const newConfig = /* @__PURE__ */ Object.create(null);
  let key;
  for (key in defaultConfig) {
    if (config2[key] !== void 0) {
      newConfig[key] = config2[key];
    } else {
      newConfig[key] = defaultConfig[key];
    }
  }
  return newConfig;
}
function initRedundancy(cfg) {
  const config2 = setConfig(cfg);
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(config2, payload, queryCallback, (data, error) => {
      cleanup();
      if (doneCallback) {
        doneCallback(data, error);
      }
    });
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    const result = queries.find((value) => {
      return callback(value);
    });
    return result !== void 0 ? result : null;
  }
  const instance = {
    query,
    find,
    setIndex: (index) => {
      config2.index = index;
    },
    getIndex: () => config2.index,
    cleanup
  };
  return instance;
}
function emptyCallback$1() {
}
var redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(provider) {
  if (redundancyCache[provider] === void 0) {
    const config2 = getAPIConfig(provider);
    if (!config2) {
      return;
    }
    const redundancy = initRedundancy(config2);
    const cachedReundancy = {
      config: config2,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
  let redundancy;
  let send2;
  if (typeof target === "string") {
    const api = getAPIModule(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    send2 = api.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config2 = createAPIConfig(target);
    if (config2) {
      redundancy = initRedundancy(config2);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule(moduleKey);
      if (api) {
        send2 = api.send;
      }
    }
  }
  if (!redundancy || !send2) {
    callback(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send2, callback)().abort;
}
var cache = {};
function emptyCallback() {
}
var pendingIcons = /* @__PURE__ */ Object.create(null);
var iconsToLoad = /* @__PURE__ */ Object.create(null);
var loaderFlags = /* @__PURE__ */ Object.create(null);
var queueFlags = /* @__PURE__ */ Object.create(null);
function loadedNewIcons(provider, prefix) {
  if (loaderFlags[provider] === void 0) {
    loaderFlags[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerLoaderFlags = loaderFlags[provider];
  if (!providerLoaderFlags[prefix]) {
    providerLoaderFlags[prefix] = true;
    setTimeout(() => {
      providerLoaderFlags[prefix] = false;
      updateCallbacks(provider, prefix);
    });
  }
}
var errorsCache = /* @__PURE__ */ Object.create(null);
function loadNewIcons(provider, prefix, icons) {
  function err() {
    const key = (provider === "" ? "" : "@" + provider + ":") + prefix;
    const time = Math.floor(Date.now() / 6e4);
    if (errorsCache[key] < time) {
      errorsCache[key] = time;
      console.error('Unable to retrieve icons for "' + key + '" because API is not configured properly.');
    }
  }
  if (iconsToLoad[provider] === void 0) {
    iconsToLoad[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerIconsToLoad = iconsToLoad[provider];
  if (queueFlags[provider] === void 0) {
    queueFlags[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerQueueFlags = queueFlags[provider];
  if (pendingIcons[provider] === void 0) {
    pendingIcons[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerPendingIcons = pendingIcons[provider];
  if (providerIconsToLoad[prefix] === void 0) {
    providerIconsToLoad[prefix] = icons;
  } else {
    providerIconsToLoad[prefix] = providerIconsToLoad[prefix].concat(icons).sort();
  }
  if (!providerQueueFlags[prefix]) {
    providerQueueFlags[prefix] = true;
    setTimeout(() => {
      providerQueueFlags[prefix] = false;
      const icons2 = providerIconsToLoad[prefix];
      delete providerIconsToLoad[prefix];
      const api = getAPIModule(provider);
      if (!api) {
        err();
        return;
      }
      const params = api.prepare(provider, prefix, icons2);
      params.forEach((item) => {
        sendAPIQuery(provider, item, (data, error) => {
          const storage2 = getStorage(provider, prefix);
          if (typeof data !== "object") {
            if (error !== 404) {
              return;
            }
            const t = Date.now();
            item.icons.forEach((name) => {
              storage2.missing[name] = t;
            });
          } else {
            try {
              const parsed = addIconSet(storage2, data);
              if (!parsed.length) {
                return;
              }
              const pending = providerPendingIcons[prefix];
              parsed.forEach((name) => {
                delete pending[name];
              });
              if (cache.store) {
                cache.store(provider, data);
              }
            } catch (err2) {
              console.error(err2);
            }
          }
          loadedNewIcons(provider, prefix);
        });
      });
    });
  }
}
var loadIcons = (icons, callback) => {
  const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(sortedIcons.loaded, sortedIcons.missing, sortedIcons.pending, emptyCallback);
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */ Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const provider = icon.provider;
    const prefix = icon.prefix;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push({
      provider,
      prefix
    });
    if (pendingIcons[provider] === void 0) {
      pendingIcons[provider] = /* @__PURE__ */ Object.create(null);
    }
    const providerPendingIcons = pendingIcons[provider];
    if (providerPendingIcons[prefix] === void 0) {
      providerPendingIcons[prefix] = /* @__PURE__ */ Object.create(null);
    }
    if (newIcons[provider] === void 0) {
      newIcons[provider] = /* @__PURE__ */ Object.create(null);
    }
    const providerNewIcons = newIcons[provider];
    if (providerNewIcons[prefix] === void 0) {
      providerNewIcons[prefix] = [];
    }
  });
  const time = Date.now();
  sortedIcons.pending.forEach((icon) => {
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const pendingQueue = pendingIcons[provider][prefix];
    if (pendingQueue[name] === void 0) {
      pendingQueue[name] = time;
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((source) => {
    const provider = source.provider;
    const prefix = source.prefix;
    if (newIcons[provider][prefix].length) {
      loadNewIcons(provider, prefix, newIcons[provider][prefix]);
    }
  });
  return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
var cacheVersion = "iconify2";
var cachePrefix = "iconify";
var countKey = cachePrefix + "-count";
var versionKey = cachePrefix + "-version";
var hour = 36e5;
var cacheExpiration = 168;
var config = {
  local: true,
  session: true
};
var loaded = false;
var count = {
  local: 0,
  session: 0
};
var emptyList = {
  local: [],
  session: []
};
var _window = typeof window === "undefined" ? {} : window;
function getGlobal(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  config[key] = false;
  return null;
}
function setCount(storage2, key, value) {
  try {
    storage2.setItem(countKey, value.toString());
    count[key] = value;
    return true;
  } catch (err) {
    return false;
  }
}
function getCount(storage2) {
  const count2 = storage2.getItem(countKey);
  if (count2) {
    const total = parseInt(count2);
    return total ? total : 0;
  }
  return 0;
}
function initCache(storage2, key) {
  try {
    storage2.setItem(versionKey, cacheVersion);
  } catch (err) {
  }
  setCount(storage2, key, 0);
}
function destroyCache(storage2) {
  try {
    const total = getCount(storage2);
    for (let i = 0; i < total; i++) {
      storage2.removeItem(cachePrefix + i.toString());
    }
  } catch (err) {
  }
}
var loadCache = () => {
  if (loaded) {
    return;
  }
  loaded = true;
  const minTime = Math.floor(Date.now() / hour) - cacheExpiration;
  function load(key) {
    const func = getGlobal(key);
    if (!func) {
      return;
    }
    const getItem = (index) => {
      const name = cachePrefix + index.toString();
      const item = func.getItem(name);
      if (typeof item !== "string") {
        return false;
      }
      let valid = true;
      try {
        const data = JSON.parse(item);
        if (typeof data !== "object" || typeof data.cached !== "number" || data.cached < minTime || typeof data.provider !== "string" || typeof data.data !== "object" || typeof data.data.prefix !== "string") {
          valid = false;
        } else {
          const provider = data.provider;
          const prefix = data.data.prefix;
          const storage2 = getStorage(provider, prefix);
          valid = addIconSet(storage2, data.data).length > 0;
        }
      } catch (err) {
        valid = false;
      }
      if (!valid) {
        func.removeItem(name);
      }
      return valid;
    };
    try {
      const version = func.getItem(versionKey);
      if (version !== cacheVersion) {
        if (version) {
          destroyCache(func);
        }
        initCache(func, key);
        return;
      }
      let total = getCount(func);
      for (let i = total - 1; i >= 0; i--) {
        if (!getItem(i)) {
          if (i === total - 1) {
            total--;
          } else {
            emptyList[key].push(i);
          }
        }
      }
      setCount(func, key, total);
    } catch (err) {
    }
  }
  for (const key in config) {
    load(key);
  }
};
var storeCache = (provider, data) => {
  if (!loaded) {
    loadCache();
  }
  function store(key) {
    if (!config[key]) {
      return false;
    }
    const func = getGlobal(key);
    if (!func) {
      return false;
    }
    let index = emptyList[key].shift();
    if (index === void 0) {
      index = count[key];
      if (!setCount(func, key, index + 1)) {
        return false;
      }
    }
    try {
      const item = {
        cached: Math.floor(Date.now() / hour),
        provider,
        data
      };
      func.setItem(cachePrefix + index.toString(), JSON.stringify(item));
    } catch (err) {
      return false;
    }
    return true;
  }
  if (!Object.keys(data.icons).length) {
    return;
  }
  if (data.not_found) {
    data = Object.assign({}, data);
    delete data.not_found;
  }
  if (!store("local")) {
    store("session");
  }
};
var separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function alignmentFromString(custom, align) {
  align.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "left":
      case "center":
      case "right":
        custom.hAlign = value;
        break;
      case "top":
      case "middle":
      case "bottom":
        custom.vAlign = value;
        break;
      case "slice":
      case "crop":
        custom.slice = true;
        break;
      case "meet":
        custom.slice = false;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
var svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
var customisationAliases = {};
["horizontal", "vertical"].forEach((prefix) => {
  ["Align", "Flip"].forEach((suffix) => {
    const attr = prefix.slice(0, 1) + suffix;
    const value = {
      attr,
      boolean: suffix === "Flip"
    };
    customisationAliases[prefix + "-" + suffix.toLowerCase()] = value;
    customisationAliases[prefix.slice(0, 1) + "-" + suffix.toLowerCase()] = value;
    customisationAliases[prefix + suffix] = value;
  });
});
var render = (icon, props) => {
  const customisations = mergeCustomisations(defaults, props);
  const componentProps = __spreadValues({}, svgDefaults);
  let style = typeof props.style === "object" && !(props.style instanceof Array) ? __spreadValues({}, props.style) : {};
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      case "icon":
      case "style":
      case "onLoad":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      case "align":
        if (typeof value === "string") {
          alignmentFromString(customisations, value);
        }
        break;
      case "color":
        style.color = value;
        break;
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default:
        if (customisationAliases[key] !== void 0) {
          if (customisationAliases[key].boolean && (value === true || value === "true" || value === 1)) {
            customisations[customisationAliases[key].attr] = true;
          } else if (!customisationAliases[key].boolean && typeof value === "string" && value !== "") {
            customisations[customisationAliases[key].attr] = value;
          }
        } else if (defaults[key] === void 0) {
          componentProps[key] = value;
        }
    }
  }
  const item = iconToSVG(icon, customisations);
  for (let key in item.attributes) {
    componentProps[key] = item.attributes[key];
  }
  if (item.inline && style.verticalAlign === void 0 && style["vertical-align"] === void 0) {
    style.verticalAlign = "-0.125em";
  }
  let localCounter = 0;
  let id = props.id;
  if (typeof id === "string") {
    id = id.replace(/-/g, "_");
  }
  componentProps["innerHTML"] = replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifyVue");
  if (Object.keys(style).length > 0) {
    componentProps["style"] = style;
  }
  return h("svg", componentProps);
};
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  cache.store = storeCache;
  loadCache();
  const _window2 = window;
  if (_window2.IconifyPreload !== void 0) {
    const preload = _window2.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload === "object" && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach((item) => {
        try {
          if (typeof item !== "object" || item === null || item instanceof Array || typeof item.icons !== "object" || typeof item.prefix !== "string" || !addCollection(item)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  if (_window2.IconifyProviders !== void 0) {
    const providers = _window2.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
var emptyIcon = fullIcon({
  body: ""
});
var Icon = defineComponent({
  inheritAttrs: false,
  data() {
    return {
      iconMounted: false,
      counter: 0
    };
  },
  mounted() {
    this._name = "";
    this._loadingIcon = null;
    this.iconMounted = true;
  },
  unmounted() {
    this.abortLoading();
  },
  methods: {
    abortLoading() {
      if (this._loadingIcon) {
        this._loadingIcon.abort();
        this._loadingIcon = null;
      }
    },
    getIcon(icon, onload) {
      if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
        this._name = "";
        this.abortLoading();
        return {
          data: fullIcon(icon)
        };
      }
      let iconName;
      if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) {
        this.abortLoading();
        return null;
      }
      const data = getIconData(iconName);
      if (data === null) {
        if (!this._loadingIcon || this._loadingIcon.name !== icon) {
          this.abortLoading();
          this._name = "";
          this._loadingIcon = {
            name: icon,
            abort: loadIcons([iconName], () => {
              this.counter++;
            })
          };
        }
        return null;
      }
      this.abortLoading();
      if (this._name !== icon) {
        this._name = icon;
        if (onload) {
          onload(icon);
        }
      }
      const classes = ["iconify"];
      if (iconName.prefix !== "") {
        classes.push("iconify--" + iconName.prefix);
      }
      if (iconName.provider !== "") {
        classes.push("iconify--" + iconName.provider);
      }
      return { data, classes };
    }
  },
  render() {
    this.counter;
    const props = this.$attrs;
    const icon = this.iconMounted ? this.getIcon(props.icon, props.onLoad) : null;
    if (!icon) {
      return render(emptyIcon, props);
    }
    let newProps = props;
    if (icon.classes) {
      newProps = __spreadProps(__spreadValues({}, props), {
        class: (typeof props["class"] === "string" ? props["class"] + " " : "") + icon.classes.join(" ")
      });
    }
    return render(icon.data, newProps);
  }
});
var _hoisted_1$4 = {
  class: "fixed z-10 inset-0 overflow-y-auto",
  id: "ModalBase"
};
var _hoisted_2$4 = { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" };
var _hoisted_3$3 = createBaseVNode("div", { class: "absolute inset-0 bg-black opacity-75" }, null, -1);
var _hoisted_4$3 = { class: "fixed top-0 right-0 p-3" };
var _hoisted_5$3 = { class: "p-3 cursor-pointer rounded-full transition ease-in-out duration-150 hover:bg-gray-800" };
var _hoisted_6$2 = createBaseVNode("span", { class: "hidden sm:inline-block sm:align-middle sm:h-screen" }, " ", -1);
var _sfc_main$5 = defineComponent({
  props: {
    destroyed: {
      type: Function,
      required: false,
      default: () => {
      }
    },
    innerClass: {
      type: String,
      required: false,
      default: ""
    },
    maxWidth: {
      type: String,
      required: false,
      default: "sm:max-w-lg"
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const active = ref(false);
    onMounted(() => active.value = true);
    async function destroy() {
      active.value = false;
      setTimeout(() => props.destroyed(), 200);
    }
    expose({ destroy });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          createVNode(Transition, {
            "enter-active-class": "ease-out duration-300",
            "enter-from-class": "opacity-0",
            "enter-to-class": "opacity-100",
            "leave-active-class": "ease-in duration-200",
            "leave-class": "opacity-100",
            "leave-to-class": "opacity-0"
          }, {
            default: withCtx(() => [
              active.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "fixed inset-0 transition-opacity",
                onClick: destroy
              }, [
                _hoisted_3$3,
                createBaseVNode("div", _hoisted_4$3, [
                  createBaseVNode("div", _hoisted_5$3, [
                    createVNode(unref(Icon), {
                      icon: "mdi-close",
                      class: "w-6 h-6 text-gray-200 dark:text-gray-400"
                    })
                  ])
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          _hoisted_6$2,
          createVNode(Transition, {
            "enter-active-class": "ease-out duration-300",
            "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
            "leave-active-class": "ease-in duration-200",
            "leave-class": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            default: withCtx(() => [
              active.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6", [__props.innerClass, __props.maxWidth]]),
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline"
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)) : createCommentVNode("", true)
            ]),
            _: 3
          })
        ])
      ]);
    };
  }
});
function removeElement(el) {
  if (!el)
    return;
  el.parentNode.remove();
}
function spawn(id, props, Component, classes) {
  var _a;
  const el = document.createElement("div");
  if (classes)
    classes.forEach((c) => el.classList.add(c));
  return createApp(defineComponent(Component), props).mount((_a = document == null ? void 0 : document.getElementById(id)) == null ? void 0 : _a.appendChild(el));
}
var _hoisted_1$3 = { class: "sm:flex sm:items-center" };
var _hoisted_2$3 = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" };
var _hoisted_3$2 = {
  key: 0,
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-300 mb-1",
  id: "modal-headline"
};
var _hoisted_4$2 = ["innerHTML"];
var _hoisted_5$2 = {
  key: 0,
  class: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"
};
var _sfc_main$4 = defineComponent({
  props: {
    type: {
      type: String,
      required: false,
      default: "info"
    },
    title: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    body: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    primary: [Boolean, Object],
    secondary: [Boolean, Object]
  },
  setup(__props) {
    const props = __props;
    const active = ref(false);
    const primaryRef = ref(null);
    const modalBaseRef = ref(null);
    const typeColors = {
      success: "bg-green-100 dark:bg-green-900",
      info: "bg-blue-100 dark:bg-blue-900",
      danger: "bg-red-100 dark:bg-red-900",
      warning: "bg-yellow-100 dark:bg-yellow-900"
    };
    onMounted(() => {
      active.value = true;
      setTimeout(() => {
        var _a;
        if (props.primary && primaryRef && primaryRef.value)
          (_a = primaryRef == null ? void 0 : primaryRef.value) == null ? void 0 : _a.$el.focus();
      }, 200);
    });
    async function action(type) {
      var _a;
      if (modalBaseRef) {
        (_a = modalBaseRef == null ? void 0 : modalBaseRef.value) == null ? void 0 : _a.destroy();
      }
      if (type === "primary" && props.primary)
        props.primary.action();
      if (type === "secondary" && props.secondary)
        props.secondary.action();
    }
    async function destroy() {
      var _a;
      active.value = false;
      removeElement((_a = modalBaseRef == null ? void 0 : modalBaseRef.value) == null ? void 0 : _a.$el);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$5, {
        ref_key: "modalBaseRef",
        ref: modalBaseRef,
        active: active.value,
        destroyed: destroy
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            createBaseVNode("div", {
              class: normalizeClass([typeColors[__props.type], "mx-auto flex-shrink-0 self-start flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10"])
            }, [
              __props.type === "success" ? (openBlock(), createBlock(unref(Icon), {
                key: 0,
                icon: "mdi-check",
                class: "h-5 w-5 text-green-500"
              })) : createCommentVNode("", true),
              __props.type === "info" ? (openBlock(), createBlock(unref(Icon), {
                key: 1,
                icon: "bi-info-lg",
                class: "h-5 w-5 text-blue-500"
              })) : createCommentVNode("", true),
              __props.type === "danger" ? (openBlock(), createBlock(unref(Icon), {
                key: 2,
                icon: "mdi-exclamation-thick",
                class: "h-5 w-5 text-red-500"
              })) : createCommentVNode("", true),
              __props.type === "warning" ? (openBlock(), createBlock(unref(Icon), {
                key: 3,
                icon: "mdi-exclamation-thick",
                class: "h-5 w-5 text-yellow-500"
              })) : createCommentVNode("", true)
            ], 2),
            createBaseVNode("div", _hoisted_2$3, [
              __props.title ? (openBlock(), createElementBlock("h3", _hoisted_3$2, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
              __props.body ? (openBlock(), createElementBlock("p", {
                key: 1,
                class: "text-sm leading-5",
                innerHTML: __props.body
              }, null, 8, _hoisted_4$2)) : createCommentVNode("", true)
            ])
          ]),
          __props.primary ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
            __props.primary ? (openBlock(), createBlock(_sfc_main$6, {
              key: 0,
              ref_key: "primaryRef",
              ref: primaryRef,
              class: "flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto",
              theme: __props.primary.theme,
              onClick: _cache[0] || (_cache[0] = ($event) => action("primary"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.primary.label), 1)
              ]),
              _: 1
            }, 8, ["theme"])) : createCommentVNode("", true),
            __props.secondary ? (openBlock(), createBlock(_sfc_main$6, {
              key: 1,
              class: "mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto",
              theme: __props.secondary.theme,
              onClick: _cache[1] || (_cache[1] = ($event) => action("secondary"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.secondary.label), 1)
              ]),
              _: 1
            }, 8, ["theme"])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["active"]);
    };
  }
});
function useModal() {
  const modals = document.createElement("div");
  modals.classList.add("z-30");
  modals.setAttribute("id", "modals");
  document.body.appendChild(modals);
  return {
    show(props) {
      if (typeof props === "string")
        props = { title: props };
      return spawn("modals", props, _sfc_main$4);
    }
  };
}
var _hoisted_1$2 = {
  key: 0,
  class: "border-2 border-green-200 rounded-full w-6 h-6 flex items-center justify-center"
};
var _hoisted_2$2 = {
  key: 1,
  class: "border-2 border-blue-200 rounded-full w-6 h-6 flex items-center justify-center"
};
var _hoisted_3$1 = {
  key: 2,
  class: "border-2 border-yellow-200 rounded-full w-6 h-6 flex items-center justify-center"
};
var _hoisted_4$1 = {
  key: 3,
  class: "border-2 border-red-200 rounded-full w-6 h-6 flex items-center justify-center"
};
var _hoisted_5$1 = {
  key: 4,
  class: "rounded-full w-6 h-6 flex items-center justify-center"
};
var _hoisted_6$1 = {
  key: 5,
  class: "rounded-full w-6 h-6 flex items-center justify-center"
};
var _sfc_main$3 = defineComponent({
  props: {
    type: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return props.type === "success" ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(Icon), {
          icon: "mdi-check",
          class: "h-4 w-4 text-green-400"
        })
      ])) : props.type === "info" ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
        createVNode(unref(Icon), {
          icon: "bi-info-lg",
          class: "h-4 w-4 text-blue-400"
        })
      ])) : props.type === "warning" ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
        createVNode(unref(Icon), {
          icon: "mdi-exclamation-thick",
          class: "h-4 w-4 text-yellow-400"
        })
      ])) : props.type === "danger" ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
        createVNode(unref(Icon), {
          icon: "mdi-exclamation-thick",
          class: "h-4 w-4 text-red-400"
        })
      ])) : props.type === "denied" ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
        createVNode(unref(Icon), {
          icon: "mdi-cancel",
          class: "h-4 w-4 text-red-400"
        })
      ])) : (openBlock(), createElementBlock("div", _hoisted_6$1, [
        createVNode(unref(Icon), {
          icon: __props.type,
          class: "h-4 w-4 text-red-400"
        }, null, 8, ["icon"])
      ]));
    };
  }
});
var _hoisted_1$1 = { class: "ml-4 flex-shrink-0 flex" };
var _hoisted_2$1 = createBaseVNode("span", { class: "sr-only" }, "Close", -1);
var _sfc_main$2 = defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    function close() {
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("button", {
          onClick: close,
          class: "rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, [
          _hoisted_2$1,
          createVNode(unref(Icon), {
            icon: "mdi-close-thick",
            class: "w-4 h-4"
          })
        ])
      ]);
    };
  }
});
var _sfc_main$1 = defineComponent({
  props: { style: String },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "absolute left-0 bottom-0 right-0 h-1 rounded bg-gray-200 dark:bg-gray-600",
        style: normalizeStyle(props.style)
      }, null, 4);
    };
  }
});
var _hoisted_1 = { class: "rounded-lg shadow-xs overflow-hidden z-100" };
var _hoisted_2 = { class: "p-4" };
var _hoisted_3 = { class: "flex items-start" };
var _hoisted_4 = {
  key: 0,
  class: "flex-shrink-0"
};
var _hoisted_5 = { class: "ml-3 w-0 flex-1 pt-0.5" };
var _hoisted_6 = {
  key: 0,
  class: "text-sm leading-5 font-medium"
};
var _hoisted_7 = ["innerHTML"];
var _hoisted_8 = { class: "ml-4 flex-shrink-0 flex mt-0.5" };
var _hoisted_9 = { class: "flex rounded-lg shadow-xs divide-x divide-gray-200 dark:divide-gray-600" };
var _hoisted_10 = { class: "w-0 flex-1 flex items-start p-4" };
var _hoisted_11 = {
  key: 0,
  class: "flex-shrink-0 mr-4"
};
var _hoisted_12 = { class: "w-full" };
var _hoisted_13 = {
  key: 0,
  class: "text-sm leading-5 font-medium text-gray-900 dark:text-gray-300"
};
var _hoisted_14 = ["innerHTML"];
var _hoisted_15 = { class: "flex" };
var _hoisted_16 = { class: "flex flex-col divide-y divide-gray-200 dark:divide-gray-600" };
var _hoisted_17 = { class: "h-0 flex-1 flex" };
var _hoisted_18 = { class: "h-0 flex-1 flex" };
var _hoisted_19 = { class: "rounded-lg shadow-xs overflow-hidden" };
var _hoisted_20 = { class: "p-4" };
var _hoisted_21 = { class: "flex items-center" };
var _hoisted_22 = {
  key: 0,
  class: "flex-shrink-0 mr-4"
};
var _hoisted_23 = { class: "w-0 flex-1 flex justify-between" };
var _hoisted_24 = ["innerHTML"];
var _hoisted_25 = { class: "ml-4 flex-shrink-0 flex" };
var _sfc_main = defineComponent({
  props: {
    title: String,
    icon: {
      type: [Boolean, String],
      required: false,
      default: void 0
    },
    message: {
      type: String
    },
    type: {
      type: String,
      required: false,
      default: "info"
    },
    progress: {
      type: Boolean,
      required: false,
      default: true
    },
    timeout: {
      type: Number,
      required: false,
      default: 2
    },
    primary: Object,
    secondary: Object,
    wide: Boolean
  },
  setup(__props) {
    const props = __props;
    const toastRef = ref(void 0);
    const active = ref(false);
    let interval = void 0;
    const timeLeft = ref(0);
    const speed = 100;
    const instance = getCurrentInstance();
    const type = computed(() => typeof props.icon === "string" ? props.icon : props.type);
    const timeLeftPercent = computed(() => Math.round(timeLeft.value * 100 / (props.timeout * 1e3) * 100 / 100));
    const progressStyle = computed(() => `width: ${timeLeftPercent.value}%; transition: width 0.1s linear`);
    onMounted(() => {
      active.value = true;
      if (props.timeout > 0) {
        timeLeft.value = props.timeout * 1e3;
        interval = setInterval(() => updateTime(), speed);
      }
    });
    function updateTime() {
      timeLeft.value -= speed;
      if (timeLeft.value === 0)
        destroy();
    }
    function destroy(instant = false) {
      clearInterval(interval);
      if (instant) {
        active.value = false;
        setTimeout(() => removeElement(toastRef == null ? void 0 : toastRef.value), 100);
        setTimeout(() => instance == null ? void 0 : instance.appContext.app.unmount(), 100);
      } else {
        setTimeout(() => active.value = false, 100);
        setTimeout(() => removeElement(toastRef == null ? void 0 : toastRef.value), 200);
        setTimeout(() => instance == null ? void 0 : instance.appContext.app.unmount(), 200);
      }
    }
    function primaryAction() {
      if (props.primary)
        props.primary.action();
      destroy();
    }
    function secondaryAction() {
      if (props.secondary)
        props.secondary.action();
      destroy();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "toastRef",
        ref: toastRef
      }, [
        createVNode(Transition, {
          "enter-active-class": "transform ease-out duration-300 transition",
          "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
          "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
          "leave-active-class": "transform ease-in duration-100 transition",
          "leave-from-class": "translate-y-0 opacity-100 sm:translate-y-0 sm:translate-x-0",
          "leave-to-class": "translate-y-1 opacity-0 sm:translate-y-0 sm:translate-x-1"
        }, {
          default: withCtx(() => [
            active.value && !__props.primary ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([{ "max-w-sm": !__props.wide, "max-w-3xl": __props.wide }, "relative w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"])
            }, [
              __props.progress && __props.timeout ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                style: normalizeStyle(unref(progressStyle))
              }, null, 8, ["style"])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, [
                    props.icon !== false ? (openBlock(), createElementBlock("div", _hoisted_4, [
                      createVNode(_sfc_main$3, { type: unref(type) }, null, 8, ["type"])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_5, [
                      __props.title ? (openBlock(), createElementBlock("p", _hoisted_6, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                      createBaseVNode("p", {
                        class: normalizeClass([{ "mt-1": __props.title }, "text-sm leading-5"]),
                        innerHTML: __props.message
                      }, null, 10, _hoisted_7)
                    ]),
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(_sfc_main$2, {
                        onClose: _cache[0] || (_cache[0] = ($event) => destroy(true))
                      })
                    ])
                  ])
                ])
              ])
            ], 2)) : active.value && __props.primary && __props.secondary ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass([{ "max-w-sm": !__props.wide, "max-w-3xl": __props.wide }, "relative w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"])
            }, [
              __props.progress && __props.timeout ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                style: normalizeStyle(unref(progressStyle))
              }, null, 8, ["style"])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  props.icon !== false ? (openBlock(), createElementBlock("div", _hoisted_11, [
                    createVNode(_sfc_main$3, { type: unref(type) }, null, 8, ["type"])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_12, [
                    __props.title ? (openBlock(), createElementBlock("p", _hoisted_13, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                    createBaseVNode("p", {
                      class: normalizeClass([{ "mt-1": __props.title }, "text-sm leading-5 text-gray-500"]),
                      innerHTML: __props.message
                    }, null, 10, _hoisted_14)
                  ])
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("button", {
                        class: "w-full border border-transparent rounded-none rounded-tr-lg px-4 py-3 flex items-center justify-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-500 focus:outline-none focus:z-10 focus:ring-2 focus:ring-gray-500",
                        onClick: primaryAction
                      }, toDisplayString(__props.primary.label), 1)
                    ]),
                    createBaseVNode("div", _hoisted_18, [
                      createBaseVNode("button", {
                        class: "w-full border border-transparent rounded-none rounded-br-lg px-4 py-3 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500",
                        onClick: secondaryAction
                      }, toDisplayString(__props.secondary.label), 1)
                    ])
                  ])
                ])
              ])
            ], 2)) : active.value && __props.primary && !__props.secondary ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass([{ "max-w-sm": !__props.wide, "max-w-3xl": __props.wide }, "relative w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"])
            }, [
              __props.progress && __props.timeout ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                style: normalizeStyle(unref(progressStyle))
              }, null, 8, ["style"])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createBaseVNode("div", _hoisted_21, [
                    props.icon !== false ? (openBlock(), createElementBlock("div", _hoisted_22, [
                      createVNode(_sfc_main$3, { type: unref(type) }, null, 8, ["type"])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_23, [
                      createBaseVNode("p", {
                        class: "w-0 flex-1 text-sm leading-5",
                        innerHTML: __props.message
                      }, null, 8, _hoisted_24),
                      createBaseVNode("button", {
                        type: "button",
                        class: "ml-3 flex-shrink-0 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                        onClick: primaryAction
                      }, toDisplayString(__props.primary.label), 1)
                    ]),
                    createBaseVNode("div", _hoisted_25, [
                      createBaseVNode("button", {
                        class: "inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150",
                        onClick: destroy
                      }, [
                        createVNode(_sfc_main$2, {
                          onClose: _cache[1] || (_cache[1] = ($event) => destroy(true))
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ], 2)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 512);
    };
  }
});
var outerClasses = [
  "z-40",
  "fixed",
  "inset-0",
  "flex",
  "sm:items-start",
  "px-4",
  "py-6",
  "pointer-events-none",
  "sm:p-6"
];
var innerClasses = [
  "w-full",
  "flex",
  "flex-col-reverse",
  "items-center",
  "sm:items-end",
  "sm:justify-end"
];
var elClasses = ["w-full", "max-w-sm", "mt-4"];
function useToast() {
  const outer = document.createElement("div");
  outerClasses.forEach((c) => outer.classList.add(c));
  outer.setAttribute("aria-alive", "assertive");
  const inner = document.createElement("div");
  innerClasses.forEach((c) => inner.classList.add(c));
  inner.setAttribute("id", "toasts");
  outer.appendChild(inner);
  document.body.appendChild(outer);
  return {
    show(props) {
      if (typeof props === "string")
        props = { message: props };
      if (props === void 0)
        return;
      return spawn("toasts", props, _sfc_main, elClasses);
    },
    success(message) {
      return spawn("toasts", { type: "success", message }, _sfc_main, elClasses);
    },
    info(message) {
      return spawn("toasts", { type: "info", message }, _sfc_main, elClasses);
    },
    danger(message) {
      return spawn("toasts", { type: "danger", message, timeout: 20 }, _sfc_main, elClasses);
    },
    warning(message) {
      return spawn("toasts", { type: "warning", message, timeout: 10 }, _sfc_main, elClasses);
    },
    denied(message) {
      return spawn("toasts", { type: "denied", message, timeout: 10 }, _sfc_main, elClasses);
    }
  };
}
var install = (app) => {
  app.component("PushButton", _sfc_main$6);
  app.component("ModalBase", _sfc_main$5);
};
export {
  _sfc_main$5 as ModalBase,
  _sfc_main$6 as PushButton,
  install,
  useModal,
  useToast
};
//# sourceMappingURL=tailvue.js.map
