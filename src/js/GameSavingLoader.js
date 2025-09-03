import read from "./reader";
import json from "./parser";  

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      resolve(read());
    }).then((data) => {
        return json(data);
    }).then((value) => {
        return JSON.parse(value);
    })
}
}