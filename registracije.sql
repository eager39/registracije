-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Gostitelj: 127.0.0.1
-- Čas nastanka: 06. jan 2019 ob 23.23
-- Različica strežnika: 10.1.9-MariaDB
-- Različica PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
  `regst` varchar(15) COLLATE utf32_slovenian_ci NOT NULL,
  `regdo` varchar(50) COLLATE utf32_slovenian_ci NOT NULL,
  `seen` int(11) NOT NULL,
  `opombe` text COLLATE utf32_slovenian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_slovenian_ci;

--
-- Odloži podatke za tabelo `avto`
--

INSERT INTO `avto` (`id`, `avto`, `regst`, `regdo`, `seen`, `opombe`) VALUES
(82, 'avto', '123', '1547028000000', 0, ''),
(83, 'avto', '123', '1547028000000', 0, ''),
(85, 'avto', '123', '1547028000000', 0, ''),
(86, 'avto', '123', '1547028000000', 0, ''),
(87, 'avto', '123', '1547028000000', 0, ''),
(88, 'avto', '123', '1546941600000', 0, ''),
(89, 'Eager', 'Eager', '1547114400000', 1, ''),
(90, 'olaf', 'olaf', '1548324000000', 0, ''),
(91, 'qwe', 'qwe', '1548928800000', 0, 'qwe'),
(92, 'avto11111111', '159753', '1549533600000', 0, ''),
(93, 'Tvoja mate™', '69', '1484301600000', 0, '™'),
(94, 'Tvoja mate™', '69', '1704103200000', 0, '™'),
(95, '1', '1', '1547805600000', 0, '12'),
(96, '????', '????', '1548410400000', 0, '????'),
(97, '☺', '☺', '1548842400000', 0, '☺'),
(98, '☻', '☻', '1548928800000', 0, '☻'),
(99, '♥', '♥', '1548928800000', 0, '♥'),
(100, '$$$', '♥', '1548928800000', 0, '♥'),
(101, '<p>POG</p>', '123', '1546941600000', 0, '');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
