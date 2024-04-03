import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const dburl = process.env.DB_CONNECTION;
    if (!dburl) {
      throw new Error("Error en la conección ");
    }
    await mongoose.connect(dburl);
    console.log("Db online");
  } catch(error) {
    console.log(error);
    console.log("Error en la base de datos");
  }
};
