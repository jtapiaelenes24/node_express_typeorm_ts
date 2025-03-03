import app from "./app";
import { AppDataSource } from "./db/connection";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("DB succesfully connected.");
    app.listen(6500, () => {
      console.log("Active server.");
    });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}

main();
