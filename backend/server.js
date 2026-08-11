const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


// =========================================================
// CONEXIÓN CON LA BASE DE DATOS SOFINV
// =========================================================

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});


// =========================================================
// VERIFICAR CONEXIÓN CON MYSQL
// =========================================================

conexion.connect((error) => {

    if (error) {

        console.error(
            "Error al conectar con MySQL:",
            error.message
        );

        return;
    }

    console.log("Conexión exitosa con MySQL");

});


// =========================================================
// RUTA PRINCIPAL
// =========================================================

app.get("/", (req, res) => {

    res.json({
        mensaje: "API SOFINV funcionando correctamente"
    });

});


// =========================================================
// CONSULTAR USUARIOS
// =========================================================

app.get("/usuarios", (req, res) => {

    const consulta = `
        SELECT id, nombre, correo, usuario
        FROM usuarios
    `;

    conexion.query(
        consulta,
        (error, resultados) => {

            if (error) {

                return res.status(500).json({
                    mensaje: "Error al consultar los usuarios",
                    error: error.message
                });

            }

            res.json(resultados);

        }
    );

});


// =========================================================
// REGISTRAR USUARIO
// =========================================================

app.post("/usuarios", (req, res) => {

    const {
        nombre,
        correo,
        usuario,
        contrasena
    } = req.body;


    // Verificar campos obligatorios

    if (
        !nombre ||
        !correo ||
        !usuario ||
        !contrasena
    ) {

        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });

    }


    const consulta = `
        INSERT INTO usuarios
        (nombre, correo, usuario, contrasena)
        VALUES (?, ?, ?, ?)
    `;


    conexion.query(
        consulta,
        [
            nombre,
            correo,
            usuario,
            contrasena
        ],
        (error, resultado) => {

            if (error) {

                // Usuario o correo duplicado

                if (error.code === "ER_DUP_ENTRY") {

                    return res.status(409).json({
                        mensaje:
                            "El correo o el usuario ya se encuentra registrado"
                    });

                }


                console.error(
                    "Error al registrar usuario:",
                    error.message
                );


                return res.status(500).json({
                    mensaje:
                        "No fue posible registrar el usuario",
                    error: error.message
                });

            }


            res.status(201).json({

                mensaje:
                    "Usuario registrado correctamente",

                id: resultado.insertId

            });

        }
    );

});


// =========================================================
// INICIAR SESIÓN
// =========================================================

app.post("/login", (req, res) => {

    const {
        correo,
        contrasena
    } = req.body;


    // Verificar campos obligatorios

    if (!correo || !contrasena) {

        return res.status(400).json({
            mensaje:
                "Correo y contraseña son obligatorios"
        });

    }


    const consulta = `
        SELECT id, nombre, correo, usuario
        FROM usuarios
        WHERE correo = ? AND contrasena = ?
    `;


    conexion.query(
        consulta,
        [
            correo,
            contrasena
        ],
        (error, resultados) => {

            if (error) {

                console.error(
                    "Error al iniciar sesión:",
                    error.message
                );


                return res.status(500).json({
                    mensaje:
                        "Error al iniciar sesión"
                });

            }


            // Usuario no encontrado

            if (resultados.length === 0) {

                return res.status(401).json({
                    mensaje:
                        "Usuario o contraseña incorrectos"
                });

            }


            // Inicio de sesión correcto

            res.json({

                mensaje:
                    "Inicio de sesión exitoso",

                usuario:
                    resultados[0]

            });

        }
    );

});


// =========================================================
// CONSULTAR PRODUCTOS
// =========================================================

app.get("/productos", (req, res) => {

    const consulta = "SELECT * FROM productos";


    conexion.query(
        consulta,
        (error, resultados) => {

            if (error) {

                return res.status(500).json({
                    mensaje:
                        "Error al consultar los productos",
                    error: error.message
                });

            }

            res.json(resultados);

        }
    );

});

// =========================================================
// Registrar producto
// =========================================================

app.post("/productos", (req, res) => {

    const { codigo, nombre, cantidad, descripcion } = req.body;

    // Verificar campos obligatorios
    if (
        !codigo ||
        !nombre ||
        cantidad === undefined ||
        cantidad === "" ||
        !descripcion
    ) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios."
        });
    }

    const consulta = `
        INSERT INTO productos
        (codigo, nombre, cantidad, descripcion)
        VALUES (?, ?, ?, ?)
    `;

    conexion.query(
        consulta,
        [codigo, nombre, cantidad, descripcion],
        (error, resultado) => {

            if (error) {

                console.error(
                    "Error al registrar producto:",
                    error.message
                );

                // Código duplicado
                if (error.code === "ER_DUP_ENTRY") {

                    return res.status(409).json({
                        mensaje: "El código del producto ya se encuentra registrado."
                    });

                }

                return res.status(500).json({
                    mensaje: "No fue posible registrar el producto.",
                    error: error.message
                });
            }

            return res.status(201).json({
                mensaje: "Producto registrado correctamente.",
                id: resultado.insertId
            });

        }
    );

});

// =========================================================
// Eliminar producto
// =========================================================

app.delete("/productos/:id", (req, res) => {

    const { id } = req.params;

    const consulta = `
        DELETE FROM productos
        WHERE id = ?
    `;

    conexion.query(
        consulta,
        [id],
        (error, resultado) => {

            if (error) {

                console.error(
                    "Error al eliminar producto:",
                    error.message
                );

                return res.status(500).json({
                    mensaje: "No fue posible eliminar el producto.",
                    error: error.message
                });

            }

            if (resultado.affectedRows === 0) {

                return res.status(404).json({
                    mensaje: "El producto no fue encontrado."
                });

            }

            return res.json({
                mensaje: "Producto eliminado correctamente."
            });

        }
    );

});

// =========================================================
// INICIAR SERVIDOR
// =========================================================

const puerto = process.env.PORT || 3001;


app.listen(
    puerto,
    () => {

        console.log(
            `Servidor SOFINV ejecutándose en http://localhost:${puerto}`
        );

    }
);