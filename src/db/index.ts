import fs from "fs";

const filePath: string = __dirname + "/data.txt";

export const getDataValues = (): Promise<string | void> => {
  return new Promise((resolve) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      resolve(err ? null : data);
    });
  });
};

export const writeDataValues = (data: string): void => {
  fs.open(filePath, "w+", (err, fd) => {
    if (err) {
      console.error(`${filePath} ${err.code === "ENOENT" ? "does not exist" : "is read-only"}`);
    } else {
      console.log(`${filePath} exists, and it is writable`);
      fs.writeFile(filePath, data, function (err) {
        if (err) {
          console.log("Error occurred", err);
        }

        console.log("File write successfull");
      });
      fs.close(fd);
    }
  });
};
