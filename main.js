import {App} from "./src/core/routing/InitialConnect.mjs";
import { DataSource, Provider } from "./src/core/database/DataSource.js";

new DataSource(Provider.MONGODB, "mongodb://127.0.0.1:27017").connectDatabase();
App.connect();

