const path = require("path");

// Инициализируем модель с именем файла, в котором она находится
module.exports = mongoose => {
  const schema = require("../shemas/BlogPost")(mongoose);
  return mongoose.model(path.basename(module.filename, ".js"), schema);
};
