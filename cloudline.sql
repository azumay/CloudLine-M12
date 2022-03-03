SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


--
-- Base de datos: cloudline
--
CREATE DATABASE IF NOT EXISTS cloudline DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE cloudline;


-- --------------------------------------------------------

--
-- Estructura de tabla CLIENTE
--

DROP TABLE IF EXISTS 'cliente';

CREATE TABLE IF NOT EXISTS cliente (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(75) NOT NULL,
  apellidos varchar(155)  NOT NULL,
  telefono varchar(9) NOT NULL,
  ciudad varchar(75) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




-- --------------------------------------------------------

--
-- Estructura de tabla EMPLEADO
--

DROP TABLE IF EXISTS 'empleado';

CREATE TABLE IF NOT EXISTS cola (
  id int(11) NOT NULL ,
  id_centro int(11) NOT NULL ,
  nombre varchar(75)  NOT NULL,
  apellido varchar(75)  NOT NULL,
  especialidad varchar(75)  NOT NULL,
  
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla CLIENTE
--

DROP TABLE IF EXISTS 'cola';

CREATE TABLE IF NOT EXISTS cola (
  id_servicio int(11) NOT NULL AUTO_INCREMENT,
  hora_llegada time NOT NULL,
  nombre varchar(75)  NOT NULL,
  
  PRIMARY KEY (id_servicio)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- Claves foráneas