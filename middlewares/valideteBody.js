const { HttpError } = require("../helpers");

const validateBody = (schema) => async (req, res, next) => {
  const {
    route: { path },
    method,
    baseUrl,
  } = req;
  const { error } = schema.validate(req.body);

  if (error && path === "/:contactId" && method === "PUT") {
    next(HttpError(400, "Missing fields"));
  }
  if (
    error &&
    baseUrl === "/api/contacts" &&
    path === "/:contactId/favorite" &&
    method === "PATCH"
  ) {
    next(HttpError(400, "Missing field favorite"));
  }
  if (error && baseUrl === "/users" && path === "/" && method === "PATCH") {
    next(HttpError(400, "Missing field subscription"));
  }
  if (error) {
    next(HttpError(400, "Missing required name field"));
  }
  next();
};

module.exports = validateBody;
