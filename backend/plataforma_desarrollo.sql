-- Verificar y crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS plataforma_desarrollo;

-- Seleccionar la base de datos
USE plataforma_desarrollo;

-- Estructura de la base de datos y tablas
-- Aquí va el resto del volcado de datos que ya tienes
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Estructura de tabla para la tabla `services`
CREATE TABLE IF NOT EXISTS `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Combo` tinyint(1) DEFAULT NULL,
  `terapia` varchar(100) DEFAULT NULL,
  `tiempo` varchar(50) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `precioLista` decimal(10,2) DEFAULT NULL,
  `precioEfectivo` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcado de datos para la tabla `services`
INSERT IGNORE INTO `services` (`id`, `Combo`, `terapia`, `tiempo`, `descripcion`, `precioLista`, `precioEfectivo`) VALUES
(1, 0, 'Shiatsu', '60 minutos', 'Shiatsu es una forma de trabajo corporal basada en técnicas de masaje japonesas que utiliza presión con los dedos.', 22000.00, 18000.00),
(2, 0, 'Digitopuntura', '45 minutos', 'Digitopuntura utiliza la presión en puntos específicos del cuerpo para aliviar el dolor y mejorar la salud.', 19500.00, 16500.00),
-- Agrega el resto de los datos aquí

-- Estructura de tabla para la tabla `turnos`
CREATE TABLE IF NOT EXISTS `turnos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `terapeuta_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `estado` enum('pendiente','confirmado','cancelado') DEFAULT 'pendiente',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_terapeuta_fecha_hora` (`terapeuta_id`,`fecha`,`hora`),
  KEY `usuario_id` (`usuario_id`),
  KEY `service_id` (`service_id`),
  CONSTRAINT `turnos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`),
  CONSTRAINT `turnos_ibfk_2` FOREIGN KEY (`terapeuta_id`) REFERENCES `users` (`id`),
  CONSTRAINT `turnos_ibfk_3` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcado de datos para la tabla `turnos`
INSERT IGNORE INTO `turnos` (`id`, `usuario_id`, `terapeuta_id`, `service_id`, `fecha`, `hora`, `estado`) VALUES
(3, 7, 2, 5, '2024-08-02', '09:00:00', 'confirmado'),
-- Agrega el resto de los datos aquí

-- Estructura de tabla para la tabla `users`
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userType` varchar(50) DEFAULT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcado de datos para la tabla `users`
INSERT IGNORE INTO `users` (`id`, `userType`, `firstName`, `lastName`, `email`, `password`) VALUES
(1, 'Paciente', 'Juan', 'Perez', 'paciente1@example.com', '$2b$10$LVUK26EPbBECnHpdQgONa.7b5H7E9.Ra1FjjbVYEpA88Iss/dBzem'),
-- Agrega el resto de los datos aquí

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
