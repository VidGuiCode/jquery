DROP TABLE IF EXISTS buecher;

CREATE TABLE buecher (
  isbn BIGINT NOT NULL,
  titel VARCHAR(100) NOT NULL,
  autor VARCHAR(50) NOT NULL,
  bild VARCHAR(50) NOT NULL,
  PRIMARY KEY (isbn)
);

-- Bücher:
INSERT INTO buecher (isbn, titel, autor, bild) VALUES ('3836256649', 'jQuery 3: Das umfassende Handbuch',                                               'Frank Bongers',    'jquery.jpg');
INSERT INTO buecher (isbn, titel, autor, bild) VALUES ('3836238381', 'JavaScript: Das umfassende Handbuch für Einsteiger, Fortgeschrittene und Profis', 'Philip Ackermann', 'javascript.jpg');
INSERT INTO buecher (isbn, titel, autor, bild) VALUES ('3836240823', 'PHP 7 und MySQL: Von den Grundlagen bis zur professionellen Programmierung',      'Christian Wenz',   'php.jpg');
INSERT INTO buecher (isbn, titel, autor, bild) VALUES ('3836241587', 'HTML5 und CSS3: Das umfassende Handbuch zum Lernen und Nachschlagen',             'Jürgen Wolf',      'html.jpg');
INSERT INTO buecher (isbn, titel, autor, bild) VALUES ('3836245787', 'Responsive Webdesign: Konzepte, Techniken, Praxisbeispiele',                      'Andrea Ertel',     'responsive.jpg');
