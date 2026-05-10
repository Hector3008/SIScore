import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.redirect("/auth/login");
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.clearCookie("token");
    res.redirect("/auth/login");
  }
}

function checkRole(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user?.rol)) {
      return res.status(403).render("error", { mensaje: "Acceso denegado" });
    }
    next();
  };
}
function checkPermission(...permission) {
  return (req, res, next) => {
    const userPermissions = req.user.permissions;

    const hasAccess =
      userPermissions.includes("all") ||
      permission.some((p) => userPermissions.includes(p));

    if (!hasAccess) {
      return res.status(403).render("error", { mensaje: "Acceso denegado" });
    }
    next();
  };
}
export { verifyToken, checkRole, checkPermission };
