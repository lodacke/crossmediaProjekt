
export const main = document.querySelector("main");
export const body = document.querySelector("body");

export const dialog = document.querySelector("dialog")

export const globalHolder = {
  levels: JSON.parse(localStorage.getItem('levels')) || {},
  get: function (level) {
    return JSON.parse(localStorage.getItem(level));
  },
  set: function (level, data) {
    localStorage.setItem(level, JSON.stringify(data));
    this.levels[level] = data;
    localStorage.setItem('levels', JSON.stringify(this.levels));
  },
  push: function (level, value) {
    let levelData = this.get(level) || [];
    levelData.push(value);
    this.set(level, levelData);
  },
  reset: function () {
    localStorage.removeItem('levels');
    localStorage.removeItem('startTime');
    this.levels = {};
    localStorage.setItem('levels', JSON.stringify(this.levels));

  }
};
