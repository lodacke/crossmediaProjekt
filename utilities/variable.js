
export const main = document.querySelector("main");
export const body = document.querySelector("body");

export const dialog = document.querySelector("dialog")

export const globalHolder = {
  levels: JSON.parse(localStorage.getItem('levels')) || {},
  get: function (level) {
    return this.levels[level]; 
  },
  set: function (level, data) {
    this.levels[level] = data; 
    localStorage.setItem('levels', JSON.stringify(this.levels));
  },
  push: function (level, value) {
    let levelData = this.get(level) || [];
    levelData.push(value);
    this.set(level, levelData);

    if (level === "levelOne" && ["Alex", "Anette", "Fredde", "Mickan", "Ove"].every(name => levelData.includes(name))) {
      this.levels[`${level}_check`] = true; 
      this.levels[`${level}_completed`] = true; 
      localStorage.setItem('levels', JSON.stringify(this.levels));
    }
    if (level === "levelTwo" && ["manifest", "Ludde", "imgFindMyIphone", "imgMeeting", "imgMap", "imgDiary"].every(name => levelData.includes(name))) {
      this.levels[`${level}_check`] = true;
      this.levels[`${level}_completed`] = true; 
      localStorage.setItem('levels', JSON.stringify(this.levels));
    }
  },
  reset: function () {
    localStorage.removeItem('levels');
    localStorage.removeItem('startTime');
  },

  removeItem: function (key) {
    if (this.levels.hasOwnProperty(key)) {
      delete this.levels[key];
      localStorage.setItem('levels', JSON.stringify(this.levels));
    }
  }
};
