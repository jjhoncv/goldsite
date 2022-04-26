CREATE DATABASE IF NOT EXISTS goldsite;

USE goldsite;

CREATE TABLE IF NOT EXISTS users(
    id int(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO users VALUE ("","jhonnatan", "123456", "jjhoncv@gmail.com");

CREATE TABLE IF NOT EXISTS products (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(200) NOT NULL,
  code varchar(200) NOT NULL,
  price FLOAT(10,2) NOT NULL,
  description varchar(200) NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO products VALUE ("","Celular Samsumg 5G 256 RAM", "45688", "4599.00", "Celular ultima generación para su uso");
INSERT INTO products VALUE ("", "Cypress Avenue  Belfair Oregon", "ca40227984ae", "1386.04", "Commodo labore nisi Lorem consectetur amet excepteur ea tempor veniam ipsum et occaecat elit deserunt. Occaecat incididunt adipisicing labore ullamco deserunt voluptate velit magna laboris. Do sunt eiusmod cillum cupidatat ut irure ut. Velit tempor pariatur aliquip anim.\r\n ");
INSERT INTO products VALUE ("", "Voorhies Avenue  Roland Georgia", "e326b6ed85ed", "2966.44", "Ea excepteur elit cillum cupidatat. Nulla proident quis exercitation mollit laborum consectetur tempor sunt. Aute elit reprehenderit sunt nulla nisi in eu ex voluptate ea Lorem pariatur.\r\n ");
INSERT INTO products VALUE ("", "Woodbine Street  Colton Virgin Islands","651c0cdef6f7", "3380.56", "Sint et culpa ad ullamco. Et aute voluptate nostrud consectetur veniam occaecat anim. Tempor duis cillum ullamco Lorem cupidatat consectetur veniam non magna excepteur.\r\n ");
INSERT INTO products VALUE ("", "Chestnut Avenue  Ahwahnee Palau", "8eb1f0855f2a", "2926.47", "Exercitation enim aliqua cupidatat labore anim sint aliqua veniam pariatur laborum. Voluptate velit ullamco anim in excepteur in exercitation magna cillum. Voluptate magna voluptate cupidatat voluptate anim laborum occaecat.\r\n ");
INSERT INTO products VALUE ("", "Duryea Place  Lisco Minnesota", "279437913d47", "1894.62", "Sit fugiat veniam aute in quis sit occaecat veniam. Labore excepteur aliquip tempor irure non laborum consequat tempor anim pariatur aliquip aliqua officia veniam. Dolor ad laboris ex ullamco ea.\r\n ");
INSERT INTO products VALUE ("", "Hoyts Lane  Terlingua Utah", "d396425b4261", "3345.76", "Et pariatur cillum eu fugiat Lorem irure nisi ut Lorem labore enim esse. Aliquip incididunt sint eu dolor culpa et incididunt sunt nulla nulla culpa. Anim aliquip sunt sint consectetur culpa irure dolor laborum minim incididunt enim velit eu exercitation. Deserunt sint in consectetur est sunt Lorem ullamco nostrud.\r\n ");
INSERT INTO products VALUE ("", "Melba Court  Lithium Iowa", "abf962f09600", "2830.55", "Esse culpa veniam cillum veniam non quis. Sunt Lorem non commodo proident in veniam nulla culpa esse occaecat pariatur consectetur aliquip exercitation. Exercitation duis reprehenderit quis sit incididunt veniam pariatur ipsum reprehenderit est nostrud ea duis minim. Adipisicing adipisicing nisi aute ut irure officia. Laborum ea dolore ad amet deserunt. Id nulla aute ullamco est fugiat quis eu ut velit officia minim esse esse.\r\n ");
INSERT INTO products VALUE ("", "Ryerson Street  Gadsden North" ,"ebd866d30ce9", "2091.74", "Pariatur aute magna excepteur pariatur officia do fugiat tempor exercitation deserunt reprehenderit laborum. Ipsum dolore nostrud consectetur et amet proident eiusmod esse ad laboris veniam occaecat qui duis. Ex proident sint nulla exercitation eu. Ullamco sint consequat aliqua cillum cupidatat mollit fugiat exercitation nisi ut.\r\n ");
INSERT INTO products VALUE ("", "Granite Street  Beyerville Hawaii", "750517e9fa9c", "1280.54", "Exercitation quis ullamco et deserunt quis adipisicing labore anim. Exercitation occaecat Lorem est proident quis consequat pariatur. Exercitation elit tempor laborum in est fugiat in eiusmod elit sint reprehenderit ipsum nostrud quis. Tempor laboris velit ex excepteur et duis et sit.\r\n ");
INSERT INTO products VALUE ("", "Carroll Street  Ola New Mexico","2be7a8b0ecf1", "3608.82", "Nisi eiusmod deserunt tempor laborum et dolore occaecat ea ea pariatur sunt sunt occaecat. Sint proident culpa ex aliqua sit laborum sint elit. Tempor anim aute ad id incididunt id esse.\r\n ");
INSERT INTO products VALUE ("", "Seagate Terrace  Bainbridge Idaho", "71ce4bb02909", "3795.12", "Deserunt laboris quis sit ut deserunt pariatur eu duis adipisicing in anim. Culpa quis reprehenderit velit ea nulla elit nisi minim mollit eiusmod aliquip mollit. Et laboris deserunt sint ex quis dolor labore. Tempor deserunt qui ullamco exercitation consectetur mollit amet aliqua anim. Occaecat pariatur aliquip eiusmod id elit dolore proident in aliquip ad nostrud. Voluptate duis culpa enim adipisicing aute sunt commodo cillum consectetur.\r\n ");
INSERT INTO products VALUE ("", "Merit Court  Basye Tennessee", "9d56b8c888b6", "3111.28", "Ex minim cillum Lorem ex irure sint. Anim non tempor minim ipsum commodo et sunt proident ad. Proident aute cupidatat id consequat ipsum nulla.\r\n ");
INSERT INTO products VALUE ("", "Madoc Avenue  Lopezo American Samoa","aa8cc9c40246", "3778.27", "Cillum proident consequat qui eiusmod et veniam anim ea duis consectetur velit. Cillum consequat do mollit cillum amet duis eu eu duis voluptate. Esse fugiat pariatur et tempor aliquip nisi eu pariatur fugiat exercitation laboris.\r\n ");
INSERT INTO products VALUE ("", "Waldane Court  Coyote Federated States Of Micronesia", "154836ed0de8", "2849.54", "Officia amet culpa id enim in culpa incididunt qui adipisicing duis sint cupidatat aute. Aute cillum duis nostrud amet do commodo qui exercitation occaecat. Cupidatat sit nostrud quis elit ullamco aliqua.\r\n ");