-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-08-2024 a las 03:03:01
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `plataforma_desarrollo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `Combo` tinyint(1) DEFAULT NULL,
  `terapia` varchar(100) DEFAULT NULL,
  `tiempo` varchar(50) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `precioLista` decimal(10,2) DEFAULT NULL,
  `precioEfectivo` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `services`
--

INSERT INTO `services` (`id`, `Combo`, `terapia`, `tiempo`, `descripcion`, `precioLista`, `precioEfectivo`) VALUES
(1, 0, 'Shiatsu', '60 minutos', 'Shiatsu es una forma de trabajo corporal basada en técnicas de masaje japonesas que utiliza presión con los dedos.', 22000.00, 18000.00),
(2, 0, 'Digitopuntura', '45 minutos', 'Digitopuntura utiliza la presión en puntos específicos del cuerpo para aliviar el dolor y mejorar la salud.', 19500.00, 16500.00),
(3, 0, 'Reflexiología', '30 minutos', 'Reflexiología es una terapia que aplica presión en puntos de los pies, manos y orejas para promover la curación en otras partes del cuerpo.', 16500.00, 14000.00),
(4, 0, 'Cupping', '30 minutos', 'Cupping es una terapia que utiliza ventosas para mejorar la circulación y aliviar el dolor muscular.', 16500.00, 14000.00),
(5, 0, 'Moxibustión', '30 minutos', 'Moxibustión es una terapia tradicional china que consiste en quemar artemisa cerca de la piel para estimular la curación.', 16500.00, 14000.00),
(6, 1, 'Shiatsu + Reflexiología', '90 minutos', 'Combinación de Shiatsu y Reflexiología para una experiencia de curación completa que alivia la tensión muscular y mejora la circulación.', 29000.00, 24000.00),
(7, 1, 'Shiatsu + Cupping', '90 minutos', 'Combinación de Shiatsu y Cupping para una profunda relajación muscular y mejora de la circulación sanguínea.', 29000.00, 24000.00),
(8, 1, 'Shiatsu + Moxibustión', '90 minutos', 'Combinación de Shiatsu y Moxibustión para un tratamiento holístico que alivia el estrés y promueve la curación.', 29000.00, 24000.00),
(9, 1, 'Digitopuntura + Reflexiología', '75 minutos', 'Combinación de Digitopuntura y Reflexiología para un alivio integral del dolor y mejora de la salud general.', 25000.00, 21000.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `terapeuta_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `estado` enum('pendiente','confirmado','cancelado') DEFAULT 'pendiente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id`, `usuario_id`, `terapeuta_id`, `service_id`, `fecha`, `hora`, `estado`) VALUES
(3, 7, 2, 5, '2024-08-02', '09:00:00', 'confirmado'),
(4, 1, 2, 1, '2024-12-01', '11:00:00', 'confirmado'),
(8, 1, 2, 1, '2024-10-01', '13:00:00', 'confirmado'),
(9, 1, 2, 1, '2024-10-01', '11:00:00', 'confirmado'),
(10, 1, 2, 1, '2024-08-05', '09:00:00', 'pendiente'),
(11, 4, 8, 2, '2024-08-05', '10:30:00', 'confirmado'),
(12, 7, 10, 3, '2024-08-06', '12:00:00', 'pendiente'),
(13, 1, 2, 4, '2024-08-07', '15:30:00', 'pendiente'),
(14, 5, 8, 5, '2024-08-08', '09:00:00', 'confirmado'),
(15, 6, 10, 1, '2024-08-09', '14:00:00', 'confirmado'),
(16, 2, 8, 2, '2024-08-12', '11:00:00', 'confirmado'),
(17, 3, 9, 3, '2024-08-13', '13:30:00', 'pendiente'),
(19, 7, 2, 5, '2024-08-15', '19:00:00', 'pendiente'),
(23, 5, 8, 4, '2024-08-10', '15:00:00', 'confirmado'),
(24, 6, 9, 5, '2024-08-17', '09:00:00', 'pendiente'),
(29, 1, 25, 7, '2024-08-03', '05:29:00', 'pendiente'),
(36, 1, 10, 3, '2024-10-02', '14:00:00', 'confirmado'),
(40, 1, 10, 3, '2024-10-02', '15:30:00', 'pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userType` varchar(50) DEFAULT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `userType`, `firstName`, `lastName`, `email`, `password`) VALUES
(1, 'Paciente', 'Juan', 'Perez', 'paciente1@example.com', '$2b$10$LVUK26EPbBECnHpdQgONa.7b5H7E9.Ra1FjjbVYEpA88Iss/dBzem'),
(2, 'Masajista', 'Analia', 'Lopez', 'masajista1@example.com', '$2b$10$54zemoU97jYgURIIEREydewAIzTzl55ZT731xr0VBDd43.K8EPghK'),
(3, 'Administrador', 'Carlitos', 'Garcia', 'administrador@example.com', '$2b$10$BXII1X14GjmHi1I0M6X/U.Zb1FdKpYLeAXRkvrM7iLqUJUQ/U66Yq'),
(4, 'Paciente', 'Maria', 'Rodriguez', 'paciente2@example.com', '$2b$10$cNdepTDi04gl/on5KbbjP.jx7YR5viDFUwEBg4p3blkRx6v6agGsK'),
(5, 'Administrador', 'Seba', 'Naka', 'seba@mail.com', '$2b$10$mkBPq9rGJ32Bo/FAbSsYYeYYWNenisJ6qvdzIMYic8mapFJYKKOtG'),
(6, 'Administrador', 'Lucia', 'Gomez', 'admin2@example.com', '$2b$10$Rd2ShkmJq1ENI.OMQBAxzej7DIoQbcjIRwNEEA8296QZ81CNbozTG'),
(7, 'Paciente', 'Luis', 'Hernandez', 'paciente3@example.com', '$2b$10$HAgbn6nIMrb0LBSumQ1NNOmJsnJqxh4bVDPl0N.C5BNrpJVYDNiuq'),
(8, 'Masajista', 'Elena', 'Diaz', 'masajista3@example.com', '$2b$10$dTrsggEs0ahk0mq2efwfvOdB9EJMbXdyDukOTh05Jdr39dcATtXEe'),
(9, 'Administrador\n', 'Alan', 'Naka', 'alan@mail.com', '$2b$10$iY45ziCWYo47BCXDPfxXsuL9CxB4Hvro3MnjNY1UojaX.5Ep9rN4K'),
(10, 'Masajista\n', 'Fernando', 'Gaitan', 'fer@mail.com', '$2b$10$VUNxHXyYNF6AvODDCm4UWeAeVFV6uHX5VOPB5AB21KY/c/LOXV86m'),
(24, 'Masajista', 'Lucas', 'Higa', 'lucas@mail.com', '$2b$10$EenzGE4dOvc8NTBvsc0wYuJXMyGdPN.WCU.0TS1GqSbJjsPwGVQkG'),
(25, 'Masajista', 'Diego', 'Gibo', 'diego@mail.com', '$2b$10$9paqtURYMmxeIG3/olTXL.bID.gC4jxQZRK6fHMhSD0566z0Uzu3e'),
(26, 'Masajista', 'Nico', 'Gun', 'Nico@mail.com', '$2b$10$IrR7VVuIP3b2qdG1UJeUCukzucyVRXFM3NnJDiYpkIhbUOc2m5TrG');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_terapeuta_fecha_hora` (`terapeuta_id`,`fecha`,`hora`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `service_id` (`service_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD CONSTRAINT `turnos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `turnos_ibfk_2` FOREIGN KEY (`terapeuta_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `turnos_ibfk_3` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
