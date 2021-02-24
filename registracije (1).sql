-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Gostitelj: localhost
-- Čas nastanka: 24. feb 2021 ob 09.35
-- Različica strežnika: 10.0.21-MariaDB-log
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
  `regst` varchar(10) COLLATE utf32_slovenian_ci NOT NULL,
  `regdo` varchar(50) COLLATE utf32_slovenian_ci NOT NULL,
  `seen` int(11) NOT NULL,
  `opombe` text COLLATE utf32_slovenian_ci NOT NULL,
  `gume` varchar(10) COLLATE utf32_slovenian_ci NOT NULL,
  `prikazi` int(3) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_slovenian_ci;

--
-- Odloži podatke za tabelo `avto`
--

INSERT INTO `avto` (`id`, `avto`, `regst`, `regdo`, `seen`, `opombe`, `gume`, `prikazi`) VALUES
(16, 'VOLVO', 'MB SETR 08', '1632038400000', 0, '', '', 1),
(17, 'VOLVO', 'MB SETR 06', '1644228000000', 0, '', '', 1),
(18, 'MILENA', 'MB EB-999', '1645005600000', 0, '', '', 1),
(19, 'FAYMONVILLE', 'MB SETR 21', '1642413600000', 0, '', '', 1),
(20, 'OSEBNI VOLVO ', 'MB ZD 200', '1642932000000', 0, '', '', 1),
(21, 'VOLVO', 'MB SETR 02', '1642932000000', 0, '', '', 1),
(22, 'VOLVO', 'MB SETR 11', '1643623200000', 0, '', '', 1),
(23, 'VOLVO', 'MB SETR 12', '1644400800000', 0, '', '', 1),
(24, 'VOLVO', 'MB SETR 09', '1643623200000', 0, '', '', 1),
(25, 'BROSHUIS', '12 SETR MB', '1644746400000', 0, '', '', 1),
(26, 'CADDY ', 'MB CADY 1', '1644832800000', 0, '', '', 1),
(27, 'CADDY ', 'MB CADY 2', '1644832800000', 0, '', '', 1),
(28, 'MAX TREILER', 'MB SETR 24', '1641031200000', 0, 'Prikolica je prodana', '', 1),
(29, 'FAYMONVILLE', 'MB SETR 41', '1644660000000', 0, '', '', 1),
(30, 'VOLVO', 'MB SETR 01', '1645524000000', 0, '', '', 1),
(31, 'VOLVO', 'MB SETR 10', '1615888800000', 0, '', '', 1),
(32, 'VOLVO', 'MB SETR 04', '1646215200000', 0, '', '', 1),
(33, 'SCHWARZMULLER', 'MB SETR 27', '1615111200000', 0, '', '', 1),
(34, 'FAYMONVILLE', '06 SETR MB', '1622534400000', 0, '', '', 1),
(35, 'NOOTEBOOM', 'MB SETR 23', '1646820000000', 0, '', '', 1),
(36, 'LENHARD ', '15 SETR MB', '1646906400000', 0, '', '', 1),
(37, 'VOLVO', 'MB SETR 03', '1647770400000', 0, '', '', 1),
(38, 'VOLVO', 'MB SETR 07', '1646128800000', 0, '', '', 1),
(39, 'VOLVO', 'MB SETR 05', '1616407200000', 0, '', '', 1),
(40, 'RICO', 'MB SETR 31', '1555315200000', 1, '', '', 0),
(41, 'KIA ', 'MB UT 961', '1556265600000', 1, '', '', 0),
(42, 'FAYMONVILLE', 'MB SETR 16', '1620720000000', 0, '', '', 1),
(43, 'JAN', 'brez', '1623744000000', 0, '', '', 1),
(44, 'SANJA', 'MB ZA 500', '1625126400000', 0, '', '', 1),
(45, 'SCHMITZ', 'MB SETR 29', '1645956000000', 0, '', '', 1),
(46, 'AVTO', 'MB SETR 33', '1530432000000', 0, '', '', 0),
(47, 'CADDY ', 'MB CADDY 3', '1625385600000', 0, '', '', 1),
(48, 'BROSHUIS', 'MB SETR 18', '1634112000000', 0, '', '', 1),
(49, 'BROSHUIS', '05 SETR MB', '1626249600000', 0, '', '', 1),
(50, 'BROSHUIS', '02 SETR MB', '1626336000000', 0, '', '', 1),
(51, 'NOOTEBOOM', '07 SETR MB', '1626940800000', 0, '', '', 1),
(52, 'SCHMITZ', 'MB SETR 30', '1645956000000', 0, '', '', 1),
(53, 'KOEGEL', 'MB SETR 32', '1629619200000', 0, 'Prikolica je prodana', '', 1),
(54, 'FAYMONVILLE', '10 SETR MB', '1629619200000', 0, '', '', 1),
(55, 'CADDY ', 'MB CADY 05', '1630483200000', 0, '', '', 1),
(56, 'FAYMONVILLE', '11 SETR MB', '1635494400000', 0, '', '', 1),
(57, 'FAYMONVILLE', 'MB SETR 19', '1636365600000', 0, 'Prikolica je prodana', '', 1),
(58, 'NOOTEBOOM', '03 SETR MB', '1636711200000', 0, '', '', 1),
(59, 'RENDERS', '01 SETR MB', '1542880800000', 0, '', '', 0),
(60, 'SCHMITZ', '14 SETR MB', '1636538400000', 0, '', '', 1),
(61, 'CADDY', 'MB CADY 4', '1623312000000', 0, '', '', 1),
(82, 'KOEGEL', 'MB SETR 28', '1644746400000', 0, '', '', 1),
(83, 'SCHWARZMUELLER ', 'MB SETR 26', '1636884000000', 0, '', '', 1),
(84, 'VOLVO MARJAN', 'MB BP 044', '1643277600000', 0, '', '', 1),
(85, 'AVTOPRIKOLICA', 'MB CADY 1,', '1718870400000', 0, '', '', 1),
(86, 'RENAULT BA', 'MB PA 400', '1643882400000', 0, '', '', 1),
(87, 'NOOTEBOOM', '08/09 SETR', '1615543200000', 0, '', '', 1),
(88, 'vespa', 'MB 01 MJ', '1618905600000', 0, 'ni', '', 1),
(89, 'SCHWARZMULLER', 'MB SETR 25', '1641636000000', 0, '', '', 1),
(90, 'Max Trailer', 'MB SETR 24', '1641549600000', 0, '', '', 1),
(91, 'SCHMITZ', 'MB SETR 31', '1640858400000', 0, '', '', 1);

-- --------------------------------------------------------

--
-- Struktura tabele `avto1`
--

CREATE TABLE `avto1` (
  `id` int(11) NOT NULL,
  `avto` varchar(15) COLLATE utf32_slovenian_ci NOT NULL,
  `regst` varchar(10) COLLATE utf32_slovenian_ci NOT NULL,
  `regdo` varchar(50) COLLATE utf32_slovenian_ci NOT NULL,
  `seen` int(11) NOT NULL,
  `opombe` text COLLATE utf32_slovenian_ci NOT NULL,
  `gume` varchar(10) COLLATE utf32_slovenian_ci NOT NULL,
  `prikazi` int(3) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_slovenian_ci;

--
-- Odloži podatke za tabelo `avto1`
--

INSERT INTO `avto1` (`id`, `avto`, `regst`, `regdo`, `seen`, `opombe`, `gume`, `prikazi`) VALUES
(1, 'a1', '', '', 0, '', '', 1);

--
-- Sprožilci `avto1`
--
DELIMITER $$
CREATE TRIGGER `avto_before_update` BEFORE UPDATE ON `avto1` FOR EACH ROW INSERT INTO avto_history select * from avto1 where id = NEW.id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktura tabele `avto_history`
--

CREATE TABLE `avto_history` (
  `id` int(11) NOT NULL,
  `id_avto` int(11) NOT NULL,
  `event` enum('update','delete','','') COLLATE utf32_slovenian_ci NOT NULL,
  `date_changed` datetime NOT NULL,
  `avto` varchar(15) COLLATE utf32_slovenian_ci NOT NULL,
  `regst` varchar(10) COLLATE utf32_slovenian_ci NOT NULL,
  `regdo` varchar(50) COLLATE utf32_slovenian_ci NOT NULL,
  `seen` int(11) NOT NULL,
  `opombe` text COLLATE utf32_slovenian_ci NOT NULL,
  `gume` varchar(10) COLLATE utf32_slovenian_ci NOT NULL,
  `prikazi` int(3) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_slovenian_ci;

--
-- Indeksi zavrženih tabel
--

--
-- Indeksi tabele `avto`
--
ALTER TABLE `avto`
  ADD PRIMARY KEY (`id`);

--
-- Indeksi tabele `avto1`
--
ALTER TABLE `avto1`
  ADD PRIMARY KEY (`id`);

--
-- Indeksi tabele `avto_history`
--
ALTER TABLE `avto_history`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT zavrženih tabel
--

--
-- AUTO_INCREMENT tabele `avto`
--
ALTER TABLE `avto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;
--
-- AUTO_INCREMENT tabele `avto1`
--
ALTER TABLE `avto1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT tabele `avto_history`
--
ALTER TABLE `avto_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
