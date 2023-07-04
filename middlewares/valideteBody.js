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
  } else if (
    error &&
    baseUrl === "/api/contacts" &&
    path === "/:contactId/favorite" &&
    method === "PATCH"
  ) {
    next(HttpError(400, "Missing field favorite"));
  } else if (
    error &&
    baseUrl === "/users" &&
    path === "/" &&
    method === "PATCH"
  ) {
    next(HttpError(400, "Missing field subscription"));
  } else if (
    error &&
    baseUrl === "/users" &&
    path === "/verify" &&
    method === "POST"
  ) {
    next(HttpError(400, "Missing required field email"));
  } else if (error) {
    next(HttpError(400, "Missing required name field"));
  }
  next();
};

module.exports = validateBody;
