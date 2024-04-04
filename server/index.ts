import { createExpressApp } from "remix-express-vite-plugin/express";
import compression from "compression";
import morgan from "morgan";
// you can import modules from your app directory and use in your express app
import { sayHello } from "#app/hello";

declare module "@remix-run/node" {
  interface AppLoadContext {
    hello: () => string;
  }
}

export default createExpressApp({
  configure: (app) => {
    // setup additional express middleware here
    app.use(compression());
    app.disable("x-powered-by");
    app.use(morgan("tiny"));
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getLoadContext: async (req, res) => {
    // custom load context should match the AppLoadContext interface defined above
    return { hello: sayHello };
  },
});
