import express from "express";
import jwt from "jsonwebtoken";
import userMongoScheema from "../dao/mongo/user.mongo.scheema.js";

const authRouter = express.Router();

authRouter.get("/login", (req, res) => res.render("login.handlebars"));

authRouter.post("/login", async (req, res) => {

  const { email, password } = req.body;
  const user = await userMongoScheema.findOne({ email, activo: true });

  if (!user || !(await user.verificarPassword(password))) {
    //console.warn("❌ Credenciales inválidas para:", email);
    return res.status(401).json({ error: "Credenciales incorrectas" }); // ← JSON
  }

  const token = jwt.sign(
    { id: user._id, nombre: user.nombre, rol: user.rol, permissions: user.permissions },
    process.env.JWT_SECRET,
    { expiresIn: "8h" },
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 8 * 60 * 60 * 1000,
  });

  //console.log("✅ Login OK:", user.email, "| Rol:", user.rol);
  res.status(200).json({ ok: true }); // ← JSON, el frontend redirige
});
authRouter.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/auth/login");
});

export default authRouter;
