-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Gostitelj: 127.0.0.1
-- Čas nastanka: 04. jan 2019 ob 15.48
-- Različica strežnika: 10.1.37-MariaDB
-- Različica PHP: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Zbirka podatkov: `registracije`
--

-- --------------------------------------------------------

--
-- Struktura tabele `avto`
--

CREATE TABLE `avto` (
  `id` int(11) NOT NULL,
  `avto` varchar(15) COLLATE utf32_slovenian_ci NOT NULL,
  `regst` varchar(10) COLLATE utf32_slovenian_ci NOT NULL,
  `regdo` varchar(50) COLLATE utf32_slovenian_ci NOT NULL,
  `seen` int(11) NOT NULL,
  `opombe` text COLLATE utf32_slovenian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_slovenian_ci;

--
-- Odloži podatke za tabelo `avto`
--

INSERT INTO `avto` (`id`, `avto`, `regst`, `regdo`, `seen`, `opombe`) VALUES
(4, 'avto', 'msk2514', '1546589782000', 1, 'avto'),
(5, 'drugi', '123124', '1556957782000', 0, 'avto'),
(7, 'avto', 'r2342', '1547762400', 0, 'qweqwe'),
(8, 'avto', 'w23423', '15475896000', 0, 'avto'),
(9, 'avto', 'w23423', '154758960000', 0, ''),
(10, 'avto', 'w23423', '1547589600000', 0, ''),
(11, 'avto', '1234234', '1547676000000', 0, '');

--
-- Indeksi zavrženih tabel
--

--
-- Indeksi tabele `avto`
--
ALTER TABLE `avto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT zavrženih tabel
--

--
-- AUTO_INCREMENT tabele `avto`
--
ALTER TABLE `avto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
