const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos SQLite
const db = new sqlite3.Database('./portfolio.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initDb();
    }
});

// Inicializar la base de datos
function initDb() {
    db.run(`CREATE TABLE IF NOT EXISTS visits (
        count INTEGER
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        message TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Inicializar el contador de visitas si no existe
    db.get("SELECT count FROM visits", (err, row) => {
        if (err || !row) {
            db.run("INSERT INTO visits (count) VALUES (0)");
        }
    });
}

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para obtener el número de visitas
app.get('/api/visits', (req, res) => {
    db.get("SELECT count FROM visits", (err, row) => {
        if (err) {
            console.error('Error al obtener visitas:', err.message);
            res.status(500).json({ error: err.message });
            return;
        }
        console.log('Visitas obtenidas:', row ? row.count : 0);
        res.json({ visits: row ? row.count : 0 });
    });
});

// Ruta para incrementar el número de visitas
app.post('/api/visits', (req, res) => {
    db.run("UPDATE visits SET count = count + 1", function(err) {
        if (err) {
            console.error('Error al incrementar visitas:', err.message);
            res.status(500).json({ error: err.message });
            return;
        }
        db.get("SELECT count FROM visits", (err, row) => {
            if (err) {
                console.error('Error al obtener visitas después de incrementar:', err.message);
                res.status(500).json({ error: err.message });
                return;
            }
            console.log('Visitas incrementadas a:', row.count);
            res.json({ visits: row.count });
        });
    });
});

// Ruta para manejar el formulario de contacto
app.post('/api/contact', (req, res) => {
    console.log('Recibida solicitud POST en /api/contact');
    console.log('Cuerpo de la solicitud:', req.body);
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        console.error('Datos del formulario incompletos');
        res.status(400).json({ success: false, message: 'Por favor, complete todos los campos' });
        return;
    }
    
    db.run(`INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`,
        [name, email, message],
        function(err) {
            if (err) {
                console.error('Error al guardar mensaje:', err.message);
                res.status(500).json({ success: false, message: 'Error al guardar el mensaje' });
                return;
            }
            console.log('Mensaje guardado con ID:', this.lastID);
            res.json({ success: true, message: 'Mensaje recibido y guardado' });
        }
    );
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Cerrar la conexión de la base de datos cuando se cierra la aplicación
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Closed the database connection.');
        process.exit(0);
    });
});