-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 01, 2017 at 04:11 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webap1_eval_aufgabe1`
--

-- --------------------------------------------------------

--
-- Table structure for table `lotto`
--

CREATE TABLE `lotto` (
  `id` int(11) NOT NULL,
  `ziehung` int(11) NOT NULL,
  `lottozahl` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lotto`
--

INSERT INTO `lotto` (`id`, `ziehung`, `lottozahl`) VALUES
(1, 1, 4),
(2, 1, 12),
(3, 1, 14),
(4, 1, 28),
(5, 1, 9),
(6, 1, 2),
(7, 2, 36),
(8, 2, 35),
(9, 2, 33),
(10, 2, 28),
(11, 2, 1),
(12, 2, 32),
(13, 3, 48),
(14, 3, 21),
(15, 3, 33),
(16, 3, 24),
(17, 3, 22),
(18, 3, 5),
(19, 4, 4),
(20, 4, 25),
(21, 4, 17),
(22, 4, 42),
(23, 4, 49),
(24, 4, 38),
(25, 5, 27),
(26, 5, 26),
(27, 5, 31),
(28, 5, 30),
(29, 5, 24),
(30, 5, 29),
(31, 6, 26),
(32, 6, 4),
(33, 6, 24),
(34, 6, 7),
(35, 6, 19),
(36, 6, 27),
(37, 7, 3),
(38, 7, 39),
(39, 7, 31),
(40, 7, 34),
(41, 7, 30),
(42, 7, 42),
(43, 8, 37),
(44, 8, 27),
(45, 8, 15),
(46, 8, 41),
(47, 8, 15),
(48, 8, 23),
(49, 9, 9),
(50, 9, 4),
(51, 9, 40),
(52, 9, 45),
(53, 9, 33);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lotto`
--
ALTER TABLE `lotto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lotto`
--
ALTER TABLE `lotto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
