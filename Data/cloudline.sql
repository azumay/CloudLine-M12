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
  id int NOT NULL AUTO_INCREMENT,
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

CREATE TABLE IF NOT EXISTS empleado (
  id int NOT NULL ,
  id_centro int(11) NOT NULL ,
  nombre varchar(75)  NOT NULL,
  apellido varchar(75)  NOT NULL,
  especialidad varchar(75)  NOT NULL,
  
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla COLA
--

DROP TABLE IF EXISTS 'cola';

CREATE TABLE IF NOT EXISTS cola (
  id_servicio int NOT NULL AUTO_INCREMENT,
  id_cliente int NOT NULL,
  nombre varchar(75)  NOT NULL,
  
  PRIMARY KEY (id_servicio)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla CENTRO
--

DROP TABLE IF EXISTS 'centro';

CREATE TABLE IF NOT EXISTS centro (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(75)  NOT NULL,
  direccion varchar(155)  NOT NULL,
  telefono varchar(9) NOT NULL,
  ciudad varchar(75) NOT NULL,

  PRIMARY KEY (id_servicio)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla AGENDA
--

DROP TABLE IF EXISTS 'agenda';

CREATE TABLE IF NOT EXISTS agenda (
  id int NOT NULL AUTO_INCREMENT,
  hora time NOT NULL,
  dia date NOT NULL,
  
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla SERVICIO
--

DROP TABLE IF EXISTS 'servicio';

CREATE TABLE IF NOT EXISTS servicio (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(75) NOT NULL,
  
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------

--
-- Claves foráneas
--

alter table empleado
	add constraint fk_empleado_centro
	foreign key (id_centro) references centro(id)
	on delete restrict on update cascade;
    
alter table agenda
	add constraint fk_agenda_centro
    foreign key (id) references agenda(id)
    on delete restrict on update cascade;

alter table cola
	add constraint fk_cola_cliente
    foreign key (id_cliente) references cliente(id)
    on delete restrict on update cascade;
  add constraint fk_cola_servicio
    foreign key (id_servicio) references servicio(id)
    on delete restrict on update cascade;
