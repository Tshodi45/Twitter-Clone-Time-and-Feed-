import { after } from "node:test";
import { sequelize } from "../src/models";

beforeAll(async () => {
    await sequelize.sync({ force: true});
});

after(async () => {
    await sequelize.close();
});