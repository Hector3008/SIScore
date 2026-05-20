import express from "express";
import jwt from "jsonwebtoken";
import userMongoScheema from "../dao/mongo/user.mongo.scheema.js";

const authRouter = express.Router();

authRouter.get("/login", (req, res) => res.render("login.handlebars"));

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userMongoScheema.findOne({ email, activo: true });

  if (!user || !(await user.verificarPassword(password))) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  const token = jwt.sign(
    {
      id: user._id,
      nombre: user.nombre,
      rol: user.rol,
      permissions: user.permissions,
      paginaPrincipal: user.paginaPrincipal, // 👈
    },
    process.env.JWT_SECRET,
    { expiresIn: "8h" },
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 8 * 60 * 60 * 1000,
  });

  res.status(200).json({ ok: true, paginaPrincipal: user.paginaPrincipal }); // 👈
});

authRouter.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/auth/login");
});

export default authRouter;
