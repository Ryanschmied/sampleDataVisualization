-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (x86_64)
--
-- Host: localhost    Database: nanoleaf_coding_challenge
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fulfillments`
--

DROP TABLE IF EXISTS `fulfillments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fulfillments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `salesOrderId` varchar(255) DEFAULT NULL,
  `num` int DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `trackingNumber` varchar(255) DEFAULT NULL,
  `deliveryDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `saleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `saleId` (`saleId`),
  CONSTRAINT `fulfillments_ibfk_1` FOREIGN KEY (`saleId`) REFERENCES `sales` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fulfillments`
--

LOCK TABLES `fulfillments` WRITE;
/*!40000 ALTER TABLE `fulfillments` DISABLE KEYS */;
INSERT INTO `fulfillments` VALUES (1,'SO-EU-0000053',0,'Amsterdam','NL','UPS','1Z1234567890112','2020-07-23 16:41:10','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(2,'SO-EU-0000054',0,'Marseilles','FR','Dekker',NULL,'2020-07-29 16:22:18','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(3,'SO-EU-0000054',1,'Marseilles','FR','UPS','1Z1234567890223','2020-07-26 16:50:38','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(4,'SO-EU-0000055',0,'Berlin','DE','Dekker',NULL,'2020-08-05 17:31:04','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(5,'SO-EU-77922EU',0,'Barcelona','ES','UPS','1Z1234567890684','2020-08-23 16:05:17','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(6,'SO-UK-27126UK',0,'Thames-Upon-Perth','GB','UPS','1Z1234567890992','2020-09-23 18:05:17','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(7,'SO-CA-0000098',0,'Vernon','CA','CanadaPost-Expedited','4003499811234','2020-09-30 01:05:17','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL);
/*!40000 ALTER TABLE `fulfillments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lineItems`
--

DROP TABLE IF EXISTS `lineItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lineItems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `salesOrderId` varchar(255) DEFAULT NULL,
  `productSku` varchar(255) DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `saleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `saleId` (`saleId`),
  CONSTRAINT `lineitems_ibfk_1` FOREIGN KEY (`saleId`) REFERENCES `sales` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lineItems`
--

LOCK TABLES `lineItems` WRITE;
/*!40000 ALTER TABLE `lineItems` DISABLE KEYS */;
INSERT INTO `lineItems` VALUES (1,'SO-EU-0000053','WIDGET001',4,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(2,'SO-EU-0000054','PL-WIDGET001',1,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(3,'SO-EU-0000054','MC-WIDGET001',10,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(4,'SO-EU-0000055','PL-WIDGET001',4,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(5,'SO-EU-77922EU','WIDGET001',4,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(6,'SO-UK-27126UK','WIDGET001',4,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(7,'SO-CA-0000098','WIDGET001',1,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(8,'SO-CA-0000098','WIDGET003',1,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL);
/*!40000 ALTER TABLE `lineItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marketings`
--

DROP TABLE IF EXISTS `marketings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marketings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `weekNum` varchar(255) DEFAULT NULL,
  `dateCreated` datetime DEFAULT NULL,
  `webVisitors` int DEFAULT NULL,
  `prClippings` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marketings`
--

LOCK TABLES `marketings` WRITE;
/*!40000 ALTER TABLE `marketings` DISABLE KEYS */;
INSERT INTO `marketings` VALUES (1,'week1','2020-01-03 05:00:00',20000,1,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(2,'week2','2020-01-10 05:00:00',50000,3,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(3,'week3','2020-01-17 05:00:00',40000,0,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(4,'week4','2020-01-24 05:00:00',20000,0,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(5,'week5','2020-01-31 05:00:00',80000,8,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(6,'week6','2020-01-31 05:00:00',80000,8,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(7,'week7','2020-02-07 05:00:00',50000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(8,'week8','2020-02-14 05:00:00',50000,3,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(9,'week9','2020-02-21 05:00:00',90000,7,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(10,'week10','2020-02-28 05:00:00',50000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(11,'week11','2020-03-07 05:00:00',60000,3,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(12,'week12','2020-03-14 05:00:00',20000,0,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(13,'week13','2020-03-21 05:00:00',50000,0,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(14,'week14','2020-03-28 05:00:00',40000,0,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(15,'week15','2020-04-04 05:00:00',50000,1,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(16,'week16','2020-04-11 05:00:00',60000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(17,'week17','2020-04-18 05:00:00',80000,3,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(18,'week18','2020-04-25 05:00:00',50000,3,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(19,'week19','2020-05-02 05:00:00',60000,15,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(20,'week20','2020-05-09 05:00:00',120000,8,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(21,'week21','2020-05-16 05:00:00',150000,12,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(22,'week22','2020-05-23 05:00:00',100000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(23,'week23','2020-05-30 05:00:00',70000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(24,'week24','2020-06-06 05:00:00',60000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(25,'week25','2020-06-13 05:00:00',70000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(26,'week26','2020-06-20 05:00:00',80000,3,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(27,'week27','2020-06-27 05:00:00',60000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(28,'week28','2020-07-04 05:00:00',60000,1,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(29,'week29','2020-07-11 05:00:00',100000,5,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(30,'week30','2020-07-18 05:00:00',70000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(31,'week31','2020-07-25 05:00:00',60000,3,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(32,'week32','2020-08-08 05:00:00',90000,11,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(33,'week33','2020-08-15 05:00:00',140000,12,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(34,'week34','2020-08-22 05:00:00',160000,10,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(35,'week35','2020-08-29 05:00:00',70000,3,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(36,'week36','2020-09-05 05:00:00',60000,6,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(37,'week37','2020-09-12 05:00:00',70000,4,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(38,'week38','2020-09-19 05:00:00',100000,8,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(39,'week39','2020-09-26 05:00:00',70000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(40,'week40','2020-10-03 05:00:00',60000,0,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(41,'week41','2020-10-10 05:00:00',35000,0,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(42,'week42','2020-10-17 05:00:00',50000,1,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(43,'week43','2020-10-24 05:00:00',60000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(44,'week44','2020-10-31 05:00:00',60000,1,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(45,'week45','2020-11-07 05:00:00',70000,1,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(46,'week46','2020-11-14 05:00:00',100000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(47,'week47','2020-11-21 05:00:00',80000,3,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(48,'week48','2020-11-28 05:00:00',450000,8,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(49,'week49','2020-12-05 05:00:00',800000,15,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(50,'week50','2020-12-12 05:00:00',300000,1,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(51,'week51','2020-12-19 05:00:00',150000,2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(52,'week52','2020-12-26 05:00:00',130000,0,'2023-02-13 07:02:33','2023-02-13 07:02:33');
/*!40000 ALTER TABLE `marketings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `measurements`
--

DROP TABLE IF EXISTS `measurements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `measurements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productSku` varchar(255) DEFAULT NULL,
  `lmm` double DEFAULT NULL,
  `wmm` double DEFAULT NULL,
  `hmm` double DEFAULT NULL,
  `gwg` double DEFAULT NULL,
  `nwg` double DEFAULT NULL,
  `cbm` double DEFAULT NULL,
  `lin` double DEFAULT NULL,
  `win` double DEFAULT NULL,
  `hin` double DEFAULT NULL,
  `gwlb` double DEFAULT NULL,
  `nwlb` double DEFAULT NULL,
  `cbft` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `packDatumId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `packDatumId` (`packDatumId`),
  CONSTRAINT `measurements_ibfk_1` FOREIGN KEY (`packDatumId`) REFERENCES `packData` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `measurements`
--

LOCK TABLES `measurements` WRITE;
/*!40000 ALTER TABLE `measurements` DISABLE KEYS */;
INSERT INTO `measurements` VALUES (1,'WIDGET003',100,100,100,1000,860,0.001,3.93701,3.93701,3.93701,2.20462,1.89598,0.035,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(2,'IN-WIDGET003',100,100,300,2780,2580,0.003,3.93701,3.93701,11.81103,6.128851,5.687926,0.106,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(3,'MC-WIDGET003',200,200,300,11520,11120,0.012,7.87402,7.87402,11.81103,25.397253,24.515404,0.424,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(4,'PL-WIDGET003',12000,10000,10000,1152000,1112000,1.2,47.2441,39.3701,39.3701,2539.72526,2451.540355,42.378,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(5,'WIDGET001',200,200,200,1500,1400,0.125,7.87402,7.87402,7.87402,3.30693,3.08647,0.283,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(6,'MC-WIDGET001',400,400,400,12500,11200,0.064,15.748,15.748,15.748,27.557783,24.691773,2.26,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(7,'PL-WIDGET001',12000,10000,10000,226000,201600,1.2,47.2441,39.3701,39.3701,2539.72526,2451.540355,42.378,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL);
/*!40000 ALTER TABLE `measurements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packData`
--

DROP TABLE IF EXISTS `packData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packData` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productSku` varchar(255) DEFAULT NULL,
  `packType` varchar(255) DEFAULT NULL,
  `components` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productSku` (`productSku`),
  CONSTRAINT `packdata_ibfk_1` FOREIGN KEY (`productSku`) REFERENCES `products` (`productSku`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packData`
--

LOCK TABLES `packData` WRITE;
/*!40000 ALTER TABLE `packData` DISABLE KEYS */;
INSERT INTO `packData` VALUES (1,'WIDGET003','single','COMP001::1,COMP002::3','2023-02-13 07:02:33','2023-02-13 07:02:33'),(2,'IN-WIDGET003','inner','WIDGET003::3','2023-02-13 07:02:33','2023-02-13 07:02:33'),(3,'MC-WIDGET003','master','IN-WIDGET003::4','2023-02-13 07:02:33','2023-02-13 07:02:33'),(4,'PL-WIDGET003','pallet','MC-WIDGET003::100','2023-02-13 07:02:33','2023-02-13 07:02:33'),(5,'WIDGET001','single','COMP022::30','2023-02-13 07:02:33','2023-02-13 07:02:33'),(6,'MC-WIDGET001','master','WIDGET001::8','2023-02-13 07:02:33','2023-02-13 07:02:33'),(7,'PL-WIDGET001','pallet','MC-WIDGET001::18','2023-02-13 07:02:33','2023-02-13 07:02:33');
/*!40000 ALTER TABLE `packData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `salesOrderId` varchar(255) DEFAULT NULL,
  `num` int DEFAULT NULL,
  `paymentType` varchar(255) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `paymentDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `saleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `saleId` (`saleId`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`saleId`) REFERENCES `sales` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,'SO-EU-0000053',0,'creditcard',1121.97,'2020-07-22 14:14:08','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(2,'SO-EU-0000053',0,'creditcard',1121.97,'2020-07-22 14:14:08','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(3,'SO-EU-0000054',0,'creditcard',5007.91,'2020-07-26 10:10:03','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(4,'SO-EU-0000054',1,'wirepayment',45071.22,'2020-08-26 13:22:01','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(5,'SO-EU-0000054',0,'creditcard',5007.91,'2020-07-26 10:10:03','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(6,'SO-EU-0000054',1,'wirepayment',45071.22,'2020-08-26 13:22:01','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(7,'SO-EU-77922EU',0,'creditcard',1121.97,'2020-08-22 14:14:08','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(8,'SO-EU-77922EU',0,'creditcard',1121.97,'2020-08-22 14:14:08','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(9,'SO-UK-27126UK',0,'creditcard',1159.96,'2020-09-22 15:14:29','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(10,'SO-UK-27126UK',0,'creditcard',1159.96,'2020-09-22 15:14:29','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(11,'SO-CA-0000098',0,'creditcard',644.08,'2020-09-28 16:14:33','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(12,'SO-CA-0000098',0,'creditcard',644.08,'2020-09-28 16:14:33','2023-02-13 07:02:33','2023-02-13 07:02:33',NULL);
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `priceData`
--

DROP TABLE IF EXISTS `priceData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `priceData` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productSku` varchar(255) DEFAULT NULL,
  `buyBomUsd` double DEFAULT NULL,
  `buyCanadaUsd` double DEFAULT NULL,
  `buyFranceUsd` double DEFAULT NULL,
  `buyHongKongUsd` double DEFAULT NULL,
  `sellCad` double DEFAULT NULL,
  `sellUsd` double DEFAULT NULL,
  `sellGbp` double DEFAULT NULL,
  `sellEur` double DEFAULT NULL,
  `sellAud` double DEFAULT NULL,
  `sellNzd` double DEFAULT NULL,
  `sellSgd` double DEFAULT NULL,
  `sellHkd` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productSku` (`productSku`),
  CONSTRAINT `pricedata_ibfk_1` FOREIGN KEY (`productSku`) REFERENCES `products` (`productSku`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `priceData`
--

LOCK TABLES `priceData` WRITE;
/*!40000 ALTER TABLE `priceData` DISABLE KEYS */;
INSERT INTO `priceData` VALUES (1,'WIDGET003',16,17.12,17.12,17.12,69.99,59.99,NULL,NULL,NULL,NULL,NULL,469.99,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(2,'IN-WIDGET003',48,51.36,51.36,51.36,92.36,71.94,NULL,NULL,NULL,NULL,NULL,557.76,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(3,'MC-WIDGET003',192,205.44,205.44,205.44,369.86,287.62,NULL,NULL,NULL,NULL,NULL,2230.02,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(4,'PL-WIDGET003',19200,20544,20544,20544,36968,28761.6,NULL,NULL,NULL,NULL,NULL,222993,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(5,'WIDGET001',180,192.6,192.6,192.6,499.99,389.99,NULL,329.99,619.99,659.99,519.99,2999.99,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(6,'MC-WIDGET001',1440,1540.8,1540.8,1540.8,2772,2157.12,NULL,1788.4,3396.13,3616.43,2873.53,16726.2,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(7,'PL-WIDGET001',25920,28512,27734.4,27734.4,49904.67,38828.16,NULL,32195.15,61123.6,65093.34,51726.87,301032.78,'2023-02-13 07:02:33','2023-02-13 07:02:33');
/*!40000 ALTER TABLE `priceData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `productSku` varchar(255) NOT NULL,
  `barcode` varchar(255) DEFAULT NULL,
  `parentSku` varchar(255) DEFAULT NULL,
  `regionCode` varchar(255) DEFAULT NULL,
  `itemType` varchar(255) DEFAULT NULL,
  `supplier` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `variantName` varchar(255) DEFAULT NULL,
  `shortDesc` varchar(255) DEFAULT NULL,
  `stockLink` varchar(255) DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`productSku`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('IN-WIDGET003','80012345678902','WIDGET003','3','Starter','Nanogrid Limited','Nanoleaf','Inner Pack: WIDGETA Starter Kit','Inner pack of WIDGETA Starter Kit, includes 3x WIDGET003. For sale in Canada and the United States only. Not for direct to consumer sale.','','2020-10-04 19:33:04','2023-02-13 07:02:33','2023-02-13 07:02:33'),('MC-WIDGET001','80012345678906','WIDGET001','1','Expansion','Nanogrid Limited','Nanoleaf','Master Case: WIDGETA Expansion Pack','Master Case of WIDGETA Expansion Pack, includes 8x WIDGET001. For sale in all regions. Not for direct to consumer sale.','','2020-08-28 18:48:19','2023-02-13 07:02:33','2023-02-13 07:02:33'),('MC-WIDGET003','80012345678903','WIDGET003','3','Starter','Nanogrid Limited','Nanoleaf','Master Case: WIDGETA Starter Kit','Master case of WIDGETA Starter Kit, includes 12x WIDGET003. For sale in Canada and the United States only. Not for direct to consumer sale.','','2020-10-04 19:42:11','2023-02-13 07:02:33','2023-02-13 07:02:33'),('PL-WIDGET001','80012345678907','WIDGET001','1','Expansion','Nanogrid Limited','Nanoleaf','Pallet: WIDGETA Expansion Pack','Pallet of WIDGETA Expansion Pack, includes 144x WIDGET001. For sale in all regions. Not for direct to consumer sale.','','2020-12-15 04:50:22','2023-02-13 07:02:33','2023-02-13 07:02:33'),('PL-WIDGET003','80012345678904','WIDGET003','3','Starter','Nanogrid Limited','Nanoleaf','Pallet: WIDGETA Starter Kit','Pallet of WIDGETA Starter Kit, includes 1200x WIDGET003. For sale in Canada and the United States only. Not for direct to consumer sale.','','2020-10-04 19:42:11','2023-02-13 07:02:33','2023-02-13 07:02:33'),('WIDGET001','80012345678905','','1','Expansion','Nanogrid Limited','Nanoleaf','Awesome WIDGETA Expansion Pack','WIDGETA Expansion Pack. For sale in all regions.','products/nanoleaf-widget-one-expansion-pack/','2020-10-05 14:02:44','2023-02-13 07:02:33','2023-02-13 07:02:33'),('WIDGET003','80012345678901','','3','Starter','Nanogrid Limited','Nanoleaf','Awesome WIDGETA Starter Kit','Inner Case of WIDGETA Starter Kit. For sale in Canada and the United States only.','products/nanoleaf-widget-one-starter-kit/','2020-10-04 19:13:19','2023-02-13 07:02:33','2023-02-13 07:02:33');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `salesOrderId` varchar(255) DEFAULT NULL,
  `dateCreated` datetime DEFAULT NULL,
  `salesChannel` varchar(255) DEFAULT NULL,
  `isoCurrency` varchar(255) DEFAULT NULL,
  `subtotal` double DEFAULT NULL,
  `discountAmt` double DEFAULT NULL,
  `shipping` double DEFAULT NULL,
  `taxType` varchar(255) DEFAULT NULL,
  `total` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,'SO-EU-0000053','2020-07-22 14:13:19','projectsales','EUR',1319.96,197.99,0,'incl',1121.97,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(2,'SO-EU-0000054','2020-07-26 10:09:22','retail','EUR',50079.13,0,0,'exempt',50079.13,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(3,'SO-EU-0000055','2020-08-01 10:15:22','retail','EUR',128780.6,0,0,'exempt',128780.6,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(4,'SO-EU-77922EU','2020-08-22 14:13:19','nanoleafshopeu','EUR',1319.96,197.99,0,'incl',1121.97,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(5,'SO-UK-27126UK','2020-09-22 15:14:17','nanoleafshopuk','GBP',1159.96,0,0,'incl',1159.96,'2023-02-13 07:02:33','2023-02-13 07:02:33'),(6,'SO-CA-0000098','2020-09-28 16:14:17','nanoleafshopcanada','CAD',569.98,0,0,'excl',644.08,'2023-02-13 07:02:33','2023-02-13 07:02:33');
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxes`
--

DROP TABLE IF EXISTS `taxes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taxes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `salesOrderId` varchar(255) DEFAULT NULL,
  `taxType` varchar(255) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `saleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `saleId` (`saleId`),
  CONSTRAINT `taxes_ibfk_1` FOREIGN KEY (`saleId`) REFERENCES `sales` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxes`
--

LOCK TABLES `taxes` WRITE;
/*!40000 ALTER TABLE `taxes` DISABLE KEYS */;
INSERT INTO `taxes` VALUES (1,'SO-EU-0000053','21% VAT',194.72,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(2,'SO-EU-0000054','20% VAT',0,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(3,'SO-EU-0000055','20% VAT',0,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(4,'SO-EU-77922EU','21% VAT',194.72,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(5,'SO-UK-27126UK','20% VAT',193.33,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(6,'SO-CA-0000098','GST',28.5,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL),(7,'SO-CA-0000098','PST-BC',45.6,'2023-02-13 07:02:33','2023-02-13 07:02:33',NULL);
/*!40000 ALTER TABLE `taxes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-13  2:06:56
