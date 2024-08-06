import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

// Configuración de multer para manejar archivos subidos
export default {
  storage: multer.diskStorage({
    // Definir el destino donde se almacenarán los archivos subidos
    destination: path.resolve(__dirname, '..', '..', 'uploads'),

    // Función para definir el nombre del archivo subido
    filename(request, file, callback) {
      // Generar un hash aleatorio para evitar conflictos de nombres
      const hash = crypto.randomBytes(6).toString('hex');

      // Construir el nombre del archivo final
      const fileName = `${hash}-${file.originalname}`;

      // Pasar el nombre del archivo a multer
      callback(null, fileName);
    }
  }),
};
