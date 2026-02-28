const SCANNER_SPECS = {"E4": [{"name": "ОБЩИЕ ХАРАКТЕРИСТИКИ", "rows": [{"k": "Производитель / серия", "v": "OEM (не Zebra)"}, {"k": "Тип", "v": "2D имиджер"}, {"k": "Технология декодирования", "v": "Встроенный декодер"}]}, {"name": "МЕХАНИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Габариты (Ш × Г × В)", "v": "23.6 × 9.0 × 6.8 мм"}, {"k": "Вес", "v": "2.04 ± 0.2 г"}]}, {"name": "ОПТИКА", "rows": [{"k": "Сенсор (разрешение)", "v": "1280 × 800 пикс."}, {"k": "Поле зрения (диаг. / гор. / верт.)", "v": "D 48.7° / H 42° / V 26.8°"}, {"k": "Подсветка", "v": "Тёпло-жёлтый LED"}, {"k": "Прицел (аимер)", "v": "650нм лазер, красный «+»"}]}, {"name": "ДАЛЬНОСТЬ СЧИТЫВАНИЯ (типовые значения)", "rows": [{"k": "Code 39, 3 mil", "v": "6.75 – 18 см"}, {"k": "Code 39, 5 mil", "v": "7.8 – 24.4 см"}, {"k": "Code 39, 20 mil", "v": "10.5 – 44.7 см"}, {"k": "Code 128, 15 mil", "v": "7.3 – 35.8 см"}, {"k": "QR Code, 15 mil", "v": "5.2 – 30 см"}, {"k": "EAN-13 (13k)", "v": "3.9 – 35.7 см"}, {"k": "Data Matrix, 10 mil", "v": "6.2 – 25.3 см"}, {"k": "Максимальная дальность", "v": "~44.7 см (20mil C39)"}]}, {"name": "УГЛЫ СКАНИРОВАНИЯ", "rows": [{"k": "Roll / Pitch / Skew", "v": "Roll 360° / Pitch ±60° / Skew ±60°"}, {"k": "Мин. контраст печати", "v": "20%"}, {"k": "Мин. разрешение (1D)", "v": "≥ 3 mil"}]}, {"name": "ИНТЕРФЕЙС", "rows": [{"k": "Интерфейс подключения", "v": "MIPI (25-pin ZIF)"}, {"k": "Режимы сканирования", "v": "—"}]}, {"name": "ЭЛЕКТРИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Напряжение питания", "v": "VCC: 3–5 В (typ 3.3В)"}, {"k": "Ток (рабочий)", "v": "IVCC flash: до 800мА\nIVDDD: typ 70мА"}, {"k": "Ток (ожидание)", "v": "—"}]}, {"name": "УСЛОВИЯ ЭКСПЛУАТАЦИИ", "rows": [{"k": "Рабочая температура", "v": "-30 ~ +60 °C"}, {"k": "Температура хранения", "v": "-40 ~ +70 °C"}, {"k": "Влажность", "v": "95% RH (без конденсата)"}, {"k": "Внешняя освещённость", "v": "0 – 100 000 Лк"}]}, {"name": "СЕРТИФИКАТЫ И ГАРАНТИЯ", "rows": [{"k": "Сертификаты", "v": "Class 2 IEC 60825-1:2014"}, {"k": "Гарантия", "v": "—"}]}, {"name": "ПОДДЕРЖИВАЕМЫЕ СИМВОЛИКИ", "rows": [{"k": "1D коды", "v": "UPC-A/E, EAN-8/13, Code 11/32/39/93/128, Codabar, GS1-128, GS1 DataBar, ITF25, Matrix25, IATA25, Industrial25, HK25, MSI"}, {"k": "2D коды", "v": "DOT code, PDF417, MicroPDF, QR, MicroQR, Data Matrix, Aztec, Maxicode, Han Xin, Grid Matrix"}]}], "E5": [{"name": "ОБЩИЕ ХАРАКТЕРИСТИКИ", "rows": [{"k": "Производитель / серия", "v": "OEM (не Zebra)"}, {"k": "Тип", "v": "2D имиджер"}, {"k": "Технология декодирования", "v": "Встроенный декодер"}]}, {"name": "МЕХАНИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Габариты (Ш × Г × В)", "v": "23.6 × 8.05 × 8.0 мм"}, {"k": "Вес", "v": "2.28 ± 0.2 г"}]}, {"name": "ОПТИКА", "rows": [{"k": "Сенсор (разрешение)", "v": "1280 × 1080 пикс."}, {"k": "Поле зрения (диаг. / гор. / верт.)", "v": "D 58.9° / H 48.2° / V 36.9°"}, {"k": "Подсветка", "v": "Тёпло-белый LED"}, {"k": "Прицел (аимер)", "v": "650нм лазер, красный «+»"}]}, {"name": "ДАЛЬНОСТЬ СЧИТЫВАНИЯ (типовые значения)", "rows": [{"k": "Code 39, 3 mil", "v": "3.6 – 17.7 см"}, {"k": "Code 39, 5 mil", "v": "3.7 – 27.3 см"}, {"k": "Code 39, 20 mil", "v": "8.9 – 101.6 см"}, {"k": "Code 128, 15 mil", "v": "5.9 – 80 см"}, {"k": "QR Code, 15 mil", "v": "3.0 – 48 см"}, {"k": "EAN-13 (13k)", "v": "3.8 – 58.8 см"}, {"k": "Data Matrix, 10 mil", "v": "3.3 – 27.8 см"}, {"k": "Максимальная дальность", "v": "~101.6 см (20mil C39)"}]}, {"name": "УГЛЫ СКАНИРОВАНИЯ", "rows": [{"k": "Roll / Pitch / Skew", "v": "Roll 360° / Pitch ±60° / Skew ±60°"}, {"k": "Мин. контраст печати", "v": "20%"}, {"k": "Мин. разрешение (1D)", "v": "≥ 3 mil"}]}, {"name": "ИНТЕРФЕЙС", "rows": [{"k": "Интерфейс подключения", "v": "MIPI (25-pin ZIF)"}, {"k": "Режимы сканирования", "v": "—"}]}, {"name": "ЭЛЕКТРИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Напряжение питания", "v": "VCC: 3–5.3 В (typ 3.3В)"}, {"k": "Ток (рабочий)", "v": "IVCC flash: до 550мА\nIVDDD: typ 57.4мА"}, {"k": "Ток (ожидание)", "v": "—"}]}, {"name": "УСЛОВИЯ ЭКСПЛУАТАЦИИ", "rows": [{"k": "Рабочая температура", "v": "-30 ~ +60 °C"}, {"k": "Температура хранения", "v": "-40 ~ +70 °C"}, {"k": "Влажность", "v": "95% RH (без конденсата)"}, {"k": "Внешняя освещённость", "v": "0 – 100 000 Лк"}]}, {"name": "СЕРТИФИКАТЫ И ГАРАНТИЯ", "rows": [{"k": "Сертификаты", "v": "Class 2 IEC 60825-1:2014"}, {"k": "Гарантия", "v": "—"}]}, {"name": "ПОДДЕРЖИВАЕМЫЕ СИМВОЛИКИ", "rows": [{"k": "1D коды", "v": "То же, что E4Y-SR"}, {"k": "2D коды", "v": "То же, что E4Y-SR"}]}], "E4770": [{"name": "ОБЩИЕ ХАРАКТЕРИСТИКИ", "rows": [{"k": "Производитель / серия", "v": "OEM (не Zebra)"}, {"k": "Тип", "v": "2D имиджер"}, {"k": "Технология декодирования", "v": "Встроенный декодер"}]}, {"name": "МЕХАНИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Габариты (Ш × Г × В)", "v": "21.5 × 10.3 × 8.0 мм"}, {"k": "Вес", "v": "2 г"}]}, {"name": "ОПТИКА", "rows": [{"k": "Сенсор (разрешение)", "v": "1280 × 800 пикс."}, {"k": "Поле зрения (диаг. / гор. / верт.)", "v": "D 48° / H 42° / V 30°"}, {"k": "Подсветка", "v": "Белый LED"}, {"k": "Прицел (аимер)", "v": "650нм лазер"}]}, {"name": "ДАЛЬНОСТЬ СЧИТЫВАНИЯ (типовые значения)", "rows": [{"k": "Code 39, 3 mil", "v": "55 – 200 мм (4.17mil)"}, {"k": "Code 39, 5 mil", "v": "—"}, {"k": "Code 39, 20 mil", "v": "—"}, {"k": "Code 128, 15 mil", "v": "100 – 490 мм (14.17mil)"}, {"k": "QR Code, 15 mil", "v": "40 – 660 мм (34.17mil)"}, {"k": "EAN-13 (13k)", "v": "—"}, {"k": "Data Matrix, 10 mil", "v": "—"}, {"k": "Максимальная дальность", "v": "660 мм (QR 34.17mil)"}]}, {"name": "УГЛЫ СКАНИРОВАНИЯ", "rows": [{"k": "Roll / Pitch / Skew", "v": "Roll 360° / Pitch ±55° / Skew ±55°"}, {"k": "Мин. контраст печати", "v": "20%"}, {"k": "Мин. разрешение (1D)", "v": "≥ 3 mil (1D), ≥ 5 mil (2D)"}]}, {"name": "ИНТЕРФЕЙС", "rows": [{"k": "Интерфейс подключения", "v": "UART, USB Serial, USB KBW; FFC 12-pin 0.5 Pitch"}, {"k": "Режимы сканирования", "v": "Trigger / Command / Sense"}]}, {"name": "ЭЛЕКТРИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Напряжение питания", "v": "3.3В ± 0.3В"}, {"k": "Ток (рабочий)", "v": "< 190мА"}, {"k": "Ток (ожидание)", "v": "< 10мА"}]}, {"name": "УСЛОВИЯ ЭКСПЛУАТАЦИИ", "rows": [{"k": "Рабочая температура", "v": "-30 ~ +70 °C"}, {"k": "Температура хранения", "v": "-40 ~ +80 °C"}, {"k": "Влажность", "v": "5–95% (без конденсата)"}, {"k": "Внешняя освещённость", "v": "до 100 000 Лк"}]}, {"name": "СЕРТИФИКАТЫ И ГАРАНТИЯ", "rows": [{"k": "Сертификаты", "v": "CE, RoHS, IEC62471, FDA"}, {"k": "Гарантия", "v": "2 года"}]}, {"name": "ПОДДЕРЖИВАЕМЫЕ СИМВОЛИКИ", "rows": [{"k": "1D коды", "v": "UPC-A/E, EAN-8/13, ISBN, Code 128, GS1128, ISBT128, Code39, Code93, Code11, I2of5, Industrial25, Matrix25, Std25, Codabar, MSI, GS1 DataBar"}, {"k": "2D коды", "v": "QR, Micro QR, Data Matrix, PDF417, Aztec, Hanxin"}]}], "SE4107": [{"name": "ОБЩИЕ ХАРАКТЕРИСТИКИ", "rows": [{"k": "Производитель / серия", "v": "Zebra OEM"}, {"k": "Тип", "v": "Decoded 2D имиджер"}, {"k": "Технология декодирования", "v": "PRZM + аппаратный декодер"}]}, {"name": "МЕХАНИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Габариты (Ш × Г × В)", "v": "Компактный (данные у производителя)"}, {"k": "Вес", "v": "—"}]}, {"name": "ОПТИКА", "rows": [{"k": "Сенсор (разрешение)", "v": "Megapixel"}, {"k": "Поле зрения (диаг. / гор. / верт.)", "v": "—"}, {"k": "Подсветка", "v": "Зелёный LED"}, {"k": "Прицел (аимер)", "v": "Зелёный LED-точка"}]}, {"name": "ДАЛЬНОСТЬ СЧИТЫВАНИЯ (типовые значения)", "rows": [{"k": "Code 39, 3 mil", "v": "—"}, {"k": "Code 39, 5 mil", "v": "—"}, {"k": "Code 39, 20 mil", "v": "—"}, {"k": "Code 128, 15 mil", "v": "—"}, {"k": "QR Code, 15 mil", "v": "—"}, {"k": "EAN-13 (13k)", "v": "—"}, {"k": "Data Matrix, 10 mil", "v": "—"}, {"k": "Максимальная дальность", "v": "до 50.8 см"}]}, {"name": "УГЛЫ СКАНИРОВАНИЯ", "rows": [{"k": "Roll / Pitch / Skew", "v": "—"}, {"k": "Мин. контраст печати", "v": "—"}, {"k": "Мин. разрешение (1D)", "v": "—"}]}, {"name": "ИНТЕРФЕЙС", "rows": [{"k": "Интерфейс подключения", "v": "Serial, USB, SSI"}, {"k": "Режимы сканирования", "v": "—"}]}, {"name": "ЭЛЕКТРИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Напряжение питания", "v": "—"}, {"k": "Ток (рабочий)", "v": "—"}, {"k": "Ток (ожидание)", "v": "—"}]}, {"name": "УСЛОВИЯ ЭКСПЛУАТАЦИИ", "rows": [{"k": "Рабочая температура", "v": "—"}, {"k": "Температура хранения", "v": "—"}, {"k": "Влажность", "v": "—"}, {"k": "Внешняя освещённость", "v": "—"}]}, {"name": "СЕРТИФИКАТЫ И ГАРАНТИЯ", "rows": [{"k": "Сертификаты", "v": "—"}, {"k": "Гарантия", "v": "—"}]}, {"name": "ПОДДЕРЖИВАЕМЫЕ СИМВОЛИКИ", "rows": [{"k": "1D коды", "v": "1D, 2D, PDF417, OCR, Digimarc, DotCode"}, {"k": "2D коды", "v": "—"}]}], "SE4710": [{"name": "ОБЩИЕ ХАРАКТЕРИСТИКИ", "rows": [{"k": "Производитель / серия", "v": "Zebra OEM"}, {"k": "Тип", "v": "2D имиджер"}, {"k": "Технология декодирования", "v": "PRZM (программный / PL5000)"}]}, {"name": "МЕХАНИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Габариты (Ш × Г × В)", "v": "Сверхкомпактный"}, {"k": "Вес", "v": "—"}]}, {"name": "ОПТИКА", "rows": [{"k": "Сенсор (разрешение)", "v": "VGA (~752×480)"}, {"k": "Поле зрения (диаг. / гор. / верт.)", "v": "—"}, {"k": "Подсветка", "v": "Белый / красный LED"}, {"k": "Прицел (аимер)", "v": "Красный лазер / LED"}]}, {"name": "ДАЛЬНОСТЬ СЧИТЫВАНИЯ (типовые значения)", "rows": [{"k": "Code 39, 3 mil", "v": "—"}, {"k": "Code 39, 5 mil", "v": "—"}, {"k": "Code 39, 20 mil", "v": "—"}, {"k": "Code 128, 15 mil", "v": "—"}, {"k": "QR Code, 15 mil", "v": "—"}, {"k": "EAN-13 (13k)", "v": "—"}, {"k": "Data Matrix, 10 mil", "v": "—"}, {"k": "Максимальная дальность", "v": "Ближний–средний"}]}, {"name": "УГЛЫ СКАНИРОВАНИЯ", "rows": [{"k": "Roll / Pitch / Skew", "v": "—"}, {"k": "Мин. контраст печати", "v": "—"}, {"k": "Мин. разрешение (1D)", "v": "—"}]}, {"name": "ИНТЕРФЕЙС", "rows": [{"k": "Интерфейс подключения", "v": "Параллельный, MIPI"}, {"k": "Режимы сканирования", "v": "—"}]}, {"name": "ЭЛЕКТРИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Напряжение питания", "v": "3.3В"}, {"k": "Ток (рабочий)", "v": "—"}, {"k": "Ток (ожидание)", "v": "—"}]}, {"name": "УСЛОВИЯ ЭКСПЛУАТАЦИИ", "rows": [{"k": "Рабочая температура", "v": "—"}, {"k": "Температура хранения", "v": "—"}, {"k": "Влажность", "v": "—"}, {"k": "Внешняя освещённость", "v": "—"}]}, {"name": "СЕРТИФИКАТЫ И ГАРАНТИЯ", "rows": [{"k": "Сертификаты", "v": "—"}, {"k": "Гарантия", "v": "—"}]}, {"name": "ПОДДЕРЖИВАЕМЫЕ СИМВОЛИКИ", "rows": [{"k": "1D коды", "v": "1D, 2D"}, {"k": "2D коды", "v": "—"}]}], "SE4750": [{"name": "ОБЩИЕ ХАРАКТЕРИСТИКИ", "rows": [{"k": "Производитель / серия", "v": "Zebra OEM"}, {"k": "Тип", "v": "Megapixel 2D имиджер"}, {"k": "Технология декодирования", "v": "PRZM (программный / PL5000)"}]}, {"name": "МЕХАНИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Габариты (Ш × Г × В)", "v": "Компактный"}, {"k": "Вес", "v": "—"}]}, {"name": "ОПТИКА", "rows": [{"k": "Сенсор (разрешение)", "v": "Megapixel"}, {"k": "Поле зрения (диаг. / гор. / верт.)", "v": "—"}, {"k": "Подсветка", "v": "Белый / красный LED"}, {"k": "Прицел (аимер)", "v": "Лазер или LED"}]}, {"name": "ДАЛЬНОСТЬ СЧИТЫВАНИЯ (типовые значения)", "rows": [{"k": "Code 39, 3 mil", "v": "—"}, {"k": "Code 39, 5 mil", "v": "—"}, {"k": "Code 39, 20 mil", "v": "—"}, {"k": "Code 128, 15 mil", "v": "—"}, {"k": "QR Code, 15 mil", "v": "—"}, {"k": "EAN-13 (13k)", "v": "—"}, {"k": "Data Matrix, 10 mil", "v": "—"}, {"k": "Максимальная дальность", "v": "+30% vs предш."}]}, {"name": "УГЛЫ СКАНИРОВАНИЯ", "rows": [{"k": "Roll / Pitch / Skew", "v": "—"}, {"k": "Мин. контраст печати", "v": "—"}, {"k": "Мин. разрешение (1D)", "v": "—"}]}, {"name": "ИНТЕРФЕЙС", "rows": [{"k": "Интерфейс подключения", "v": "MIPI"}, {"k": "Режимы сканирования", "v": "—"}]}, {"name": "ЭЛЕКТРИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Напряжение питания", "v": "3.3В"}, {"k": "Ток (рабочий)", "v": "—"}, {"k": "Ток (ожидание)", "v": "—"}]}, {"name": "УСЛОВИЯ ЭКСПЛУАТАЦИИ", "rows": [{"k": "Рабочая температура", "v": "—"}, {"k": "Температура хранения", "v": "—"}, {"k": "Влажность", "v": "—"}, {"k": "Внешняя освещённость", "v": "—"}]}, {"name": "СЕРТИФИКАТЫ И ГАРАНТИЯ", "rows": [{"k": "Сертификаты", "v": "—"}, {"k": "Гарантия", "v": "—"}]}, {"name": "ПОДДЕРЖИВАЕМЫЕ СИМВОЛИКИ", "rows": [{"k": "1D коды", "v": "1D, 2D, документы"}, {"k": "2D коды", "v": "—"}]}], "SE4770": [{"name": "ОБЩИЕ ХАРАКТЕРИСТИКИ", "rows": [{"k": "Производитель / серия", "v": "Zebra OEM"}, {"k": "Тип", "v": "Megapixel 2D имиджер"}, {"k": "Технология декодирования", "v": "PRZM (программный / PL5000)"}]}, {"name": "МЕХАНИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Габариты (Ш × Г × В)", "v": "Компактный"}, {"k": "Вес", "v": "—"}]}, {"name": "ОПТИКА", "rows": [{"k": "Сенсор (разрешение)", "v": "Megapixel"}, {"k": "Поле зрения (диаг. / гор. / верт.)", "v": "—"}, {"k": "Подсветка", "v": "Белый / красный LED"}, {"k": "Прицел (аимер)", "v": "Красный лазер (SE4770)"}]}, {"name": "ДАЛЬНОСТЬ СЧИТЫВАНИЯ (типовые значения)", "rows": [{"k": "Code 39, 3 mil", "v": "—"}, {"k": "Code 39, 5 mil", "v": "—"}, {"k": "Code 39, 20 mil", "v": "—"}, {"k": "Code 128, 15 mil", "v": "—"}, {"k": "QR Code, 15 mil", "v": "—"}, {"k": "EAN-13 (13k)", "v": "—"}, {"k": "Data Matrix, 10 mil", "v": "—"}, {"k": "Максимальная дальность", "v": "+30% vs предш."}]}, {"name": "УГЛЫ СКАНИРОВАНИЯ", "rows": [{"k": "Roll / Pitch / Skew", "v": "—"}, {"k": "Мин. контраст печати", "v": "—"}, {"k": "Мин. разрешение (1D)", "v": "—"}]}, {"name": "ИНТЕРФЕЙС", "rows": [{"k": "Интерфейс подключения", "v": "MIPI"}, {"k": "Режимы сканирования", "v": "—"}]}, {"name": "ЭЛЕКТРИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Напряжение питания", "v": "3.3В"}, {"k": "Ток (рабочий)", "v": "—"}, {"k": "Ток (ожидание)", "v": "—"}]}, {"name": "УСЛОВИЯ ЭКСПЛУАТАЦИИ", "rows": [{"k": "Рабочая температура", "v": "—"}, {"k": "Температура хранения", "v": "—"}, {"k": "Влажность", "v": "—"}, {"k": "Внешняя освещённость", "v": "—"}]}, {"name": "СЕРТИФИКАТЫ И ГАРАНТИЯ", "rows": [{"k": "Сертификаты", "v": "—"}, {"k": "Гарантия", "v": "—"}]}, {"name": "ПОДДЕРЖИВАЕМЫЕ СИМВОЛИКИ", "rows": [{"k": "1D коды", "v": "1D, 2D, документы"}, {"k": "2D коды", "v": "—"}]}], "SE5500": [{"name": "ОБЩИЕ ХАРАКТЕРИСТИКИ", "rows": [{"k": "Производитель / серия", "v": "Zebra OEM"}, {"k": "Тип", "v": "Advanced Range 2D (IntelliFocus™)"}, {"k": "Технология декодирования", "v": "PRZM + IntelliFocus™ (SW)"}]}, {"name": "МЕХАНИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Габариты (Ш × Г × В)", "v": "Стандартный"}, {"k": "Вес", "v": "—"}]}, {"name": "ОПТИКА", "rows": [{"k": "Сенсор (разрешение)", "v": "2668×1520 (1MP+4MP)"}, {"k": "Поле зрения (диаг. / гор. / верт.)", "v": "—"}, {"k": "Подсветка", "v": "Белый LED"}, {"k": "Прицел (аимер)", "v": "Зелёный лазер (7× ярче красного)"}]}, {"name": "ДАЛЬНОСТЬ СЧИТЫВАНИЯ (типовые значения)", "rows": [{"k": "Code 39, 3 mil", "v": "—"}, {"k": "Code 39, 5 mil", "v": "—"}, {"k": "Code 39, 20 mil", "v": "—"}, {"k": "Code 128, 15 mil", "v": "—"}, {"k": "QR Code, 15 mil", "v": "—"}, {"k": "EAN-13 (13k)", "v": "—"}, {"k": "Data Matrix, 10 mil", "v": "—"}, {"k": "Максимальная дальность", "v": "до ~12.2 м (40 фут.)"}]}, {"name": "УГЛЫ СКАНИРОВАНИЯ", "rows": [{"k": "Roll / Pitch / Skew", "v": "—"}, {"k": "Мин. контраст печати", "v": "—"}, {"k": "Мин. разрешение (1D)", "v": "—"}]}, {"name": "ИНТЕРФЕЙС", "rows": [{"k": "Интерфейс подключения", "v": "MIPI"}, {"k": "Режимы сканирования", "v": "—"}]}, {"name": "ЭЛЕКТРИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Напряжение питания", "v": "—"}, {"k": "Ток (рабочий)", "v": "—"}, {"k": "Ток (ожидание)", "v": "—"}]}, {"name": "УСЛОВИЯ ЭКСПЛУАТАЦИИ", "rows": [{"k": "Рабочая температура", "v": "—"}, {"k": "Температура хранения", "v": "—"}, {"k": "Влажность", "v": "—"}, {"k": "Внешняя освещённость", "v": "—"}]}, {"name": "СЕРТИФИКАТЫ И ГАРАНТИЯ", "rows": [{"k": "Сертификаты", "v": "—"}, {"k": "Гарантия", "v": "—"}]}, {"name": "ПОДДЕРЖИВАЕМЫЕ СИМВОЛИКИ", "rows": [{"k": "1D коды", "v": "1D, 2D"}, {"k": "2D коды", "v": "—"}]}], "SE5800": [{"name": "ОБЩИЕ ХАРАКТЕРИСТИКИ", "rows": [{"k": "Производитель / серия", "v": "Zebra OEM"}, {"k": "Тип", "v": "Extended Range 2D (IntelliFocus™)"}, {"k": "Технология декодирования", "v": "PRZM + IntelliFocus™ (SW)"}]}, {"name": "МЕХАНИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Габариты (Ш × Г × В)", "v": "Стандартный"}, {"k": "Вес", "v": "—"}]}, {"name": "ОПТИКА", "rows": [{"k": "Сенсор (разрешение)", "v": "Высокое"}, {"k": "Поле зрения (диаг. / гор. / верт.)", "v": "—"}, {"k": "Подсветка", "v": "Белый LED"}, {"k": "Прицел (аимер)", "v": "Зелёный лазер"}]}, {"name": "ДАЛЬНОСТЬ СЧИТЫВАНИЯ (типовые значения)", "rows": [{"k": "Code 39, 3 mil", "v": "—"}, {"k": "Code 39, 5 mil", "v": "—"}, {"k": "Code 39, 20 mil", "v": "—"}, {"k": "Code 128, 15 mil", "v": "—"}, {"k": "QR Code, 15 mil", "v": "—"}, {"k": "EAN-13 (13k)", "v": "—"}, {"k": "Data Matrix, 10 mil", "v": "—"}, {"k": "Максимальная дальность", "v": "до ~32 м (105 фут.)"}]}, {"name": "УГЛЫ СКАНИРОВАНИЯ", "rows": [{"k": "Roll / Pitch / Skew", "v": "—"}, {"k": "Мин. контраст печати", "v": "—"}, {"k": "Мин. разрешение (1D)", "v": "—"}]}, {"name": "ИНТЕРФЕЙС", "rows": [{"k": "Интерфейс подключения", "v": "MIPI"}, {"k": "Режимы сканирования", "v": "—"}]}, {"name": "ЭЛЕКТРИЧЕСКИЕ ПАРАМЕТРЫ", "rows": [{"k": "Напряжение питания", "v": "—"}, {"k": "Ток (рабочий)", "v": "—"}, {"k": "Ток (ожидание)", "v": "—"}]}, {"name": "УСЛОВИЯ ЭКСПЛУАТАЦИИ", "rows": [{"k": "Рабочая температура", "v": "—"}, {"k": "Температура хранения", "v": "—"}, {"k": "Влажность", "v": "—"}, {"k": "Внешняя освещённость", "v": "—"}]}, {"name": "СЕРТИФИКАТЫ И ГАРАНТИЯ", "rows": [{"k": "Сертификаты", "v": "—"}, {"k": "Гарантия", "v": "—"}]}, {"name": "ПОДДЕРЖИВАЕМЫЕ СИМВОЛИКИ", "rows": [{"k": "1D коды", "v": "1D, 2D"}, {"k": "2D коды", "v": "—"}]}]};

// ═══════════════════════════════════════════════════
//  SCANNER TOOLTIP
// ═══════════════════════════════════════════════════
(function() {
  // Create tooltip element
  const tip = document.createElement('div');
  tip.id = 'scanner-tip';
  tip.style.cssText = `
    position:fixed;z-index:9999;background:#0D0E1A;color:#fff;
    border-radius:12px;padding:14px 16px;max-width:320px;
    box-shadow:0 8px 32px rgba(0,0,0,.4);pointer-events:none;
    opacity:0;transition:opacity .15s;font-size:13px;line-height:1.5;
    border:1px solid rgba(255,255,255,.1);
  `;
  document.body.appendChild(tip);

  function buildTipHTML(scannerKey) {
    const sections = SCANNER_SPECS[scannerKey];
    if (!sections) return null;
    // Show only key specs: first section + range
    const keyRows = [];
    for (const sec of sections) {
      for (const {k, v} of sec.rows) {
        if (/тип|дальность|диапазон|разреш|поле зрен|производ|подсветка|скорость/i.test(k)) {
          keyRows.push({k, v});
        }
      }
    }
    if (!keyRows.length) return null;
    const rows = keyRows.slice(0, 7).map(({k, v}) =>
      `<div style="display:flex;gap:8px;margin-bottom:4px">
        <span style="color:rgba(255,255,255,.55);min-width:110px;flex-shrink:0">${k}</span>
        <span style="color:#fff;font-weight:500">${v}</span>
       </div>`
    ).join('');
    return `<div style="font-weight:700;margin-bottom:8px;color:#60A5FA">${scannerKey}</div>${rows}`;
  }

  function attachScannerTooltips() {
    const selects = document.querySelectorAll('select');
    selects.forEach(sel => {
      // Check if this select has scanner options
      const hasScanner = Array.from(sel.options).some(o => SCANNER_SPECS[o.value]);
      if (!hasScanner) return;

      sel.addEventListener('mousemove', e => {
        // Get hovered option value - works on desktop
        const rect = sel.getBoundingClientRect();
        const optH = rect.height / sel.size || 20;
        const idx = Math.floor((e.clientY - rect.top) / optH);
        const opt = sel.options[idx];
        if (!opt) { tip.style.opacity = '0'; return; }
        const html = buildTipHTML(opt.value);
        if (!html) { tip.style.opacity = '0'; return; }
        tip.innerHTML = html;
        tip.style.opacity = '1';
        // Position
        const x = Math.min(e.clientX + 16, window.innerWidth - 340);
        const y = Math.min(e.clientY + 8, window.innerHeight - 250);
        tip.style.left = x + 'px';
        tip.style.top = y + 'px';
      });

      sel.addEventListener('mouseleave', () => { tip.style.opacity = '0'; });

      // Also show on change (selected option)
      sel.addEventListener('change', () => {
        const html = buildTipHTML(sel.value);
        if (!html) return;
        tip.innerHTML = html;
        tip.style.opacity = '1';
        const rect = sel.getBoundingClientRect();
        tip.style.left = (rect.right + 12) + 'px';
        tip.style.top = rect.top + 'px';
        setTimeout(() => { tip.style.opacity = '0'; }, 4000);
      });
    });
  }

  // Attach after DOM ready + re-attach when filters render
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachScannerTooltips);
  } else {
    attachScannerTooltips();
  }
  // Re-attach after data loads (selects may be dynamic)
  const origAttach = window._scannerTipAttached;
  if (!origAttach) {
    window._scannerTipAttached = true;
    const observer = new MutationObserver(() => attachScannerTooltips());
    observer.observe(document.body, {childList: true, subtree: true});
  }
})();
const _G='https://docs.google.com/spreadsheets/d/e/';
const SKU_DB_URL=_G+'2PACX-1vR2GvJKzfM_1TpRMMUSsCOROF-K9pOgmA-UX5lUDTeJapd7yCFMHmqwtZyYIKR9YQUUL3ereK2fGMnY/pub?gid=28434089&single=true&output=csv';
const COMPATIBILITY_URL=_G+'2PACX-1vSFj4FKxoiPlU3PBLAjS4DBiZqMNt9t9qwhCok1plZV3z-MY2zi-W9sv7VJe425ZA11xM0LQj-ZumU0/pub?gid=1433027441&single=true&output=csv';
const ACCESSORIES_DB_URL=_G+'2PACX-1vSj0_uLezu0CFWUzuiOGpIbQGy8WbZPHkmcQ4nSd4uxkFwdEwLFNLy4HMelwq4OHFGjIsyJ-7X3i45p/pub?gid=497705392&single=true&output=csv';

const MODEL_ACCESSORY_GUIDES={"UL20":"1U5-CtR3NgoYYX8BhIVtLKct3izRtOpcd","US20":"1gX9N3pisgDcCSXnwVujc3R1h_PZarAg_","US30":"1zQFA6LmqCByy9_8jLnmAoJ67qg_rSIUv","WD10":"1mrXORiOo15ZWc19Rp0m3Kao18Ck2_M20","SL20":"1Jdz0qXd2fykqG9NAE4rUMKVC4p4ZwiEW","SL20K":"1de97PSr63tfSZ4UtpOxIGJk5YZ9RKho_","UL30":"1hv6Ysq-m3NWlTD_nBZwzJz-xhIdULkVT","WR10":"1HssPM-W__901Z0Y8rqOuJ-SQ3T_R2Ppb","WR15":"1IPJCHD06lSwfylIgDNPQLfz-L6DlVRQh","PC10":"10hlmt-LNI4Tgr_8agPWuNg5v7BACLSmo","SM20":"1oxrWPw99i46Ox28mE1JfzekjhvcaGE74","SM30":"198heiEFFvLSnjI7iI-UYJX3qdvyRfGiE"};
const MODEL_IMAGES={"UL20":"1fuh2rw6N1hcOvQDsW4UG3-tRXDRR_rFa","US20":"1G31XpGZox3V-tl3XaKI5eSe9eDQvZsga","US30":"14ZFc_ozui8-c2EpovKrkr4HR50UU7trt","WD10":"1EAg2x1TBc8qbLKrKuxYr6hFk8xokSLz-","SL20":"1ws5eODWFsDLS0IxoloohfjauwxgwFI56","SL20K":"1zNXzv0YTF2wSC5kKF-AQHQI3eELdnsJ5","WR10":"1K1n6YwZIQ69RveINoe--ofu6uacSZRZZ","WR15":"1K1n6YwZIQ69RveINoe--ofu6uacSZRZZ","UL30":"1LelgpAwqfUWm_gmYLM1rDa5c1sAISMOY","PC10":"1gwVf1HK78cFr_TtFQ1sWqVXVtRwxjVnI","SM20":"1EwxyUNoRn7bFUpC6D5LSLWN9_0MfCNTN","SM24":"1A5D3b9ctDxIrobzT5N2fooXkQaIziKh8","SM30":"1d0DSVbbzmY7zASSA4UsGwZUrdozIeQKl"};
const MODEL_IMAGES_EXTRA={"UL20":["1gLYxreLtD9AkfvndyeqGaqbiFtxuZjSP","1BFmu-dVDgW3FPO_aR0O3zMaIlq6V2s2t","1NYvsa3F2OLAlPwTct2CCP5KyESXnERQR"],"US20":["1n6hiqMyHy_RE4-CSaumg-_K1lO1yvBe1","1ETEOLoUNdzW7iMuk6Yv_180wF_88gHS7","18ZvmS4F85iIUloospf20tXEqtp--xfhY"],"US30":["1n6hiqMyHy_RE4-CSaumg-_K1lO1yvBe1","1ETEOLoUNdzW7iMuk6Yv_180wF_88gHS7","18ZvmS4F85iIUloospf20tXEqtp--xfhY"],"WD10":["1prPx-Cb-rcS2SxX5uwhlzBY76rgMejge","1HYMzI5KKGI33SQEl6P8hA4p337QKCBhZ","1IXlOfRbNkg-JMydJs6zQTtSXspWAMoHE"],"SL20":["1AZpf17xqh3CCa6jZPV4zRwB98vL7sJiL","15soDCZRB62wUDP5ywb9dqlZ9nF0iv1mp","1I3m81HCb1euyggg7nyCg4mWWsGfiAPW3"],"SL20K":["1w5STYnCeFLReyH7dN2KaEBYqXYG2D_iK","1sqQ1RzBh3IC-n9OYl11e0QrYbsGMGnj3"],"WR10":["1hxLYbYlQnaXTAMmhRqOoCjhz5cg2LmWO"],"UL30":["1gLYxreLtD9AkfvndyeqGaqbiFtxuZjSP","1BFmu-dVDgW3FPO_aR0O3zMaIlq6V2s2t","1NYvsa3F2OLAlPwTct2CCP5KyESXnERQR"],"PC10":["1fKmaLVo2V0j8JZggsrFKlazFurXxh1nM","1H5e931Sp1oEnyhRJ9B05TBGkOwme6VLH"],"SM20":["1U2GDZx9qqILPPofChPrnA0HmnMxv0FXE","1II7p7-hoK0DW7EMNHDFcFXAP8i2eIhIT"],"SM24":["1-0RtPc1QKxa-lAa3lYGzc359nOCci3Lf","1llVsu9gU0RpjoqATpROU7-4fgBCwz8Sx"],"SM30":["1gWWv_htF6mD3syhthdx3sExxieAw-oXJ","1wAIfYpYIMBwkHPfMdjiZqYqImPS2y93E"]};
const MODEL_SPECS={"UL20":"1bEVDlss599nYY2Mp25XMiRHxjtXqIB8x","US20":"1fE2jJYWopEC5KqN2oW8A5KkONDYHqB5j","US30":"1Bug-zPHYQG5OtoeOLTl2kJc-gtqWtYCJ","WD10":"1eCFtT1WKGLoNilcH8vZWHaQAy-EvagoN","SL20":"1XoWB0897GSgHzcdP6NpewUN2es3wQ9-U","SL20K":"1xV6QJ8MkniQKa-AjZ-WTtum22B2QKK7T","UL30":"19UtWLcrD6Ytlx0MKHTJ1H_XTgs-zYgom","WR10":"1zqtUX_RYaFcPbzOhqQS9r6dzPk_39v0G","WR15":"1PN_HYju31dJ5awYqcETj5ajTieCFo4Ns","PC10":"1faz0APguyXqYbJMfeREnOTXp68d16_NM","SM20":"1w2qYp2p4WRgOfQ2fdCGHlD2PO_s2l8NL","SM24":"1EP5BeOX1cXFCdvcA5Y7s9o1iQe1QEpgH","SM30":"1dX8plGJYW37-TdPZhApIIAeqm1FSe4P_"};
const CATEGORY_MODELS={'all':null,'ultra-rugged':['UL20','UL30'],'rugged':['SM20','SM24','SM30','US20','US30'],'light-mobile':['SL20K','SL20'],'wearable':['WR10','WD10'],'kiosk':['PC10']};
const IP_RATINGS={'US20':'IP65','SM20':'IP65','SM24':'IP65','SL20':'IP67','WD10':'IP65','US30':'IP65','SM30':'IP68','SL20K':'IP65','WR10':'IP65','UL20':'IP68','UL30':'IP68'};
const ENTERPRISE_MODELS=['UL20','UL30','US20','US30','SM20','SM24','SM30'];
let SKU_DB=[],ACCESSORIES_DB=[],COMPATIBILITY_MAP={},dataLoaded=false,currentLanguage='ru',comparisonList=[],isSearchingBySKU=false,currentSelection=null,finalSpecificationList=[],currentSKUBase=null,currentSKUPrice=0,currentCategory='all';
const $=id=>document.getElementById(id),$$=t=>document.createElement(t),$f=()=>document.createDocumentFragment();

let SKUMAP={},ACCMAP={};
const _P="https://lh3.googleusercontent.com/d/",_D="https://drive.google.com/file/d/";
const ACC_PHOTOS={"UL20-04BC-C00":"1jObD6_7skfeofGBxH1lV0GrALK7mm5Eu","UL20-2CRD-CU0":"1aO85A-Yv04mz7EBfZCbS80UXb3MaSe2K","UL20-2CRD-EU0":"1QqxrxPmbGz1pYI2f-hERfNj1W1Mn4vuz","UL20-8CRD-C00":"1dkucyovsbaZerPnYDQnAnOr7IL1mhujx","UL20-8CRD-E00":"1dkucyovsbaZerPnYDQnAnOr7IL1mhujx","UL20-BATT-F67":"1hHKcvlRuBkrl5QigQWf1g9WGdH-gPOMO","UL20-BATT-F67-S10":"1hHKcvlRuBkrl5QigQWf1g9WGdH-gPOMO","UL20-BATT-S67":"17xDcW6zXZR_u4lzibX7Z24tOEI4EaJMm","UL20-BATT-S67-S10":"17xDcW6zXZR_u4lzibX7Z24tOEI4EaJMm","UL20-BOOT-01":"1Jtz7LcKAmWRrtQh8VyJsmB1W7IHaijpa","UL20-CABL-UCA":"1MtDNjZ6PSxCnNFrpTJeYZ2HSyLrLlWSM","UL20-CASE-FHH":"1f4zga3eAfh44kZVLdBqZx2-JunkHJP2h","UL20-CASE-FSH":"1zWzgoMJRT9ZdVvxqt3rIefVh8jjA56g-","UL20-CPAK-FCRD-SQ":"1VXWY8ErLizkPoPrfb18C_tvUPY9-Oq2O","UL20-CPAK-FCRD-UB":"1VPxIselZWzHF6K1ANPueXTgauWoqH1S_","UL20-CPAK-VCRD":"1u6JEWoBq4k_5Mwu_Nk4fuoPQUkiZNftf","UL20-PWSP-2EU":"1uzvBay4QY2mHDSA5ZkopSJgq9nHY84VH","UL20-PWSP-8EU":"1nxWmH-HGIMGeXxDnVuC2FKg5XnbdlYH1","UL20-SCPR":"1I37TQjwxc-D2vIgZGdsHV9kpGOfVN5eE","UL20-STRP-S10":"12PUdRZfe-8V4O0khUk-qwXxs39HuBA5c","UL20-STRP-S50":"12PUdRZfe-8V4O0khUk-qwXxs39HuBA5c","UL20-STYL":"1CGizB5h0zSlBFQNJgQsmsWtiNmboA1Bf","UL20-TRIG-S00":"12joO71Ni32fdhDi_LrEb5r0Z3ke9sUVF","UL20-VCRD-CU0":"1aoHNlmdLmMALI8pExQBn8HH_2kZMf7WW","US20-04BC-C00":"1iU7RlDMHeUnYqNitSzrfkBfpccK5px9H","US20-20BC-C00":"175mE2uZFplMdWu3qE_YIsYEP7iGtYPNl","US20-2CRD-CU0":"1GyPGtX6-Lyo-4eEM3J4HKufAtq323vzL","US20-2CRD-EC0":"1GyPGtX6-Lyo-4eEM3J4HKufAtq323vzL","US20-5CRD-C00":"1pQUT6LK0Vmu_2UwdBQLCK5yX1DZ-rAjK","US20-5CRD-C00-MT":"1nWqOdyH-3FoHrWJWxwBO1pkjoQpbcLxy","US20-5CRD-E00":"1pQUT6LK0Vmu_2UwdBQLCK5yX1DZ-rAjK","US20-5CRD-E00-MT":"1nWqOdyH-3FoHrWJWxwBO1pkjoQpbcLxy","US20-BATT-E67":"1aigg9KEVbXvaUIHzL71sCfEhbJApiWoi","US20-BATT-E67-S10":"1aigg9KEVbXvaUIHzL71sCfEhbJApiWoi","US20-BOOT-01":"1g8Lfy0jeglLu2_CUhCXSJl7l5-PJCFn2","US20-CASE-FHH":"1NOCAO5StqjHXrI525jpVt17woMljMelh","US20-CASE-FSH":"1E74XGMID6rbEf52GrF4pFZvyVW94lfld","US20-PWSP-5EU":"1IK7heDLBBLnquj21JsbuIc8gQesf9Wm4","US20-PWSP-U00":"1_Urk9Ae9X15-L4WKK3n9EExFrsw0_iw3","US20-SCPR":"1I37TQjwxc-D2vIgZGdsHV9kpGOfVN5eE","US20-STRP-E10":"1EB9f-dLUmgu-9szzg3cfPAlkGofdLHrI","US20-STRP-S10":"1EB9f-dLUmgu-9szzg3cfPAlkGofdLHrI","US20-STRP-S50":"1EB9f-dLUmgu-9szzg3cfPAlkGofdLHrI","US20-STRP-T10":"1FylOrBmFhOAxvHfgwGk3ghpP6N_d7O92","US20-STRP-T50":"1FylOrBmFhOAxvHfgwGk3ghpP6N_d7O92","US20-TRIG-S00":"1sbJfBE_yY91f4e2O5J1IPlTeCn6Tuuw8"
,"WD10-03BC-C00":"1GLbVcilCdHOZXRr0okeqkDN-2JO0oQOa","WD10-06BC-C00":"1YESsUueqbZsCSEsltwxGdBMSI_oxoQDM","WD10-12BC-C00":"1AkyfpBJiAlj1TU5E2zxfnLAd2qZQL5M4","WD10-18BC-C00":"1MXXUK9bmwpt8u-c9Az8YodNyM-kpg0bi","WD10-BATT-S33":"1qYXk5HlVKvFzcWtuxkVhs6xqVZto4fF3","WD10-BOOT-01":"1SizsLB_JfY3g1_uSkMVA0GUZF4AR75Wr","WD10-CABL-UCA":"1n1riDBndrGmm8_ROMfVwIQx_T_IVYUMc","WD10-KEYP":"1gCMWwy4gNepxBTu5VHR2XZS1TJf2RAbs","WD10-PWSP-1EU":"1DLAD16HnRNABKKdfwPzQkuLTp01PkOXJ","WD10-PWSP-4EU":"1DLAD16HnRNABKKdfwPzQkuLTp01PkOXJ","WD10-PWSP-8EU":"1UkeWLam32GxnGvUsaFH0-1MjIkIVfeUj","WD10-PWSP-CEU":"1HOGEwhpPjIIkBBgaDrRE0fduCXxZejWa","WD10-SCPR":"1hPFrV1eclvOOBOlHXF32OeqsWeD6FwRi","WD10-WEWM-UA0":"1odP_9R7Riq3ACCfAWghrOMSukoVjZVGl","WD10-WEWM-UA1":"1la_7VZDlKQmpJFbSo3x12zHjlrt8CAj0","WD10-WEWM-UA2":"1EGh6hPgvFqXPGMrmsZ2woS9xmptcU57a","WD10-WEWM-UB0":"1wv8FlDAhaEIc7LA2ZbIKU3uLDvIamDYW","WD10-WWMS-UA0":"1z319MWwUrv4mw-GMbKtvX_7-3x7W3jLw","WD10-WWMS-UA1":"1z319MWwUrv4mw-GMbKtvX_7-3x7W3jLw","WD10-WWMS-UA2":"1z319MWwUrv4mw-GMbKtvX_7-3x7W3jLw","SL20-1CRD-C00":"1nXvbapWSpCAsS67Dp_fBY7vw32-T1jDp","SL20-2CRD-CC0":"1QvlnLJvd5C2hR9AUIdxcW7Cy7r_8CB_8","SL20-2CRD-EC0":"1QvlnLJvd5C2hR9AUIdxcW7Cy7r_8CB_8","SL20-8CRD-C00":"1tK3YR4MsJG18Rt7BkyWwV8ohtjFcv80n","SL20-8CRD-E00":"1tK3YR4MsJG18Rt7BkyWwV8ohtjFcv80n","SL20-BATT-E50":"1Npkyc-H1PlfNwXdpNO6-tGHqT2Tt7QOn","SL20-BOOT-01":"1IGYau5dTtXFQ5PT39ZqFtlznZlZQSq84","SL20-BTDO-EHF":"1eU9GZBAtfMcgbdpg62yGFOmvHSHkV9l1","SL20-PWSP-2EU":"1DLAD16HnRNABKKdfwPzQkuLTp01PkOXJ","SL20-PWSP-CEU":"1HOGEwhpPjIIkBBgaDrRE0fduCXxZejWa","SL20-SCPR":"1nNS_2DWvAPizz4N26FMFDQgnScjxftt9","SL20-STRP-S10":"1d3inDhXQXk007LfhO7Y5HV7F3ZnZthiZ","SL20-STRP-S50":"1d3inDhXQXk007LfhO7Y5HV7F3ZnZthiZ","SL20-TRIG-S00":"1v2iVHWLZPf-FXn5wwmMMT0A1kjpdirNM","SL20-VCRD-C01":"1Q7XMKNybNx_srmNzk3gk8pujJyvlOwHU","SL2K-1CRD-C00":"1_61Uvz2l39QKn8eF_k2NQlYeAtRPhimN","SL2K-2CRD-C00":"1MOy-S5uIjl2nL3f72l84-h9RamVDpfVt","SL2K-2CRD-CC0":"1MOy-S5uIjl2nL3f72l84-h9RamVDpfVt","SL2K-2CRD-EC0":"1MOy-S5uIjl2nL3f72l84-h9RamVDpfVt","SL2K-8CRD-C00":"12AVWzECs6SKM58rkL5Nj17g4K3yMLckb","SL2K-8CRD-E00":"12AVWzECs6SKM58rkL5Nj17g4K3yMLckb","SL2K-BATT-S52":"12cE54lDFIX4I1DMRVSXAbMNEPjhW-x6P","SL2K-BOOT-01":"1vkzzFHgpVGaj0wHj7Z8dXvNHcRWOejkt","SL2K-PWSP-2EU":"15yeDjeEiG8Se5JkByl5rqDppBrrPzn_8","SL2K-SCPR":"1M7Pnuhp_rxdrjNV9e1pp_OZfLVJD3T6T","SL2K-STRP-S10":"1y0GMz9KsOWo49ZpBV9pB58HvpkLJac4O","SL2K-STRP-S50":"1y0GMz9KsOWo49ZpBV9pB58HvpkLJac4O","SL2K-TRIG-S00":"1Wlmk9iwyznKsgYCg-vD8wp4-G0GG-T59","UNIV-PWSP-8EU":"1NHJIz6m0M-ABvQTKDCs-lTb0kJmRHPEY","WR10-03BC-U00":"1a3uOMLCGbrdv7VOGMvWmllWlBS649kUy","WR10-08BC-C00":"1_gSwnVlJbalPswEWjMinlXYwFMhpBkPz","WR10-08BC-U00":"1_gSwnVlJbalPswEWjMinlXYwFMhpBkPz","WR10-16BC-C00":"1HAv8gbfSolpz9_AnSK34yQHBn7r1x9Ou","WR10-24BC-C00":"13VN74pib73077ldc6wsyeGn7Zu5qK7Wh","WR10-32BC-C00":"1uF8f2pZBe3SQ2KtjqcRubbHF0kzMlU0D","WR10-32BC-U00":"1uF8f2pZBe3SQ2KtjqcRubbHF0kzMlU0D","WR10-BATT-S10":"1B37bBOGPjA3ozIYivNIBYH4vs4cO4KlH","WR10-CABL-UCA":"1n1riDBndrGmm8_ROMfVwIQx_T_IVYUMc","WR10-PWSP-1EU":"1DLAD16HnRNABKKdfwPzQkuLTp01PkOXJ","WR10-PWSP-4EU":"1DLAD16HnRNABKKdfwPzQkuLTp01PkOXJ","WR10-PWSP-CEU":"1HOGEwhpPjIIkBBgaDrRE0fduCXxZejWa","WR10-STRP-N01":"1a0PkOlrLMfr5LyZrlCpoG62u-TNEdsRR","WR10-STRP-W01":"1QzsHWObcgWupy-OLfTIq9cjp0qqNfsKt","WR10-TRIG-S00":"1aeuMod42dazqX1NAMG87FNmEJB8r9PjW","PC10-BRKT-MET":"1kxyVPE2uzf5oEV-xKdBOxdTeasPmQaj-","PC10-PWSP-A00-8EU":"1oUK-YH5corAQersn3lgVWpfn-dLoONnH","PC10-PWSP-POE-8EU":"1Qqc09sYFlJ3UsCs9SBz8mBqqwRLF181U","SM30-PWSP-CEU":"1Ws5519kG7XgrjmlXx2j4wi-zPMgVpX4U","SM30-1CRD-C00":"1xPLCG61nA2XUULfy9SCQmVa2opa-GBKQ","SM30-2CRD-C00":"127pvcOcLJEV2wsBJh6wKzJm6j0NyRwJ6","SM30-PWSP-2EU":"1vi9eAAa3mbEGMBY1TlxNlHSGqfwrf1Ru","SM30-04BC-C00":"1Ob4qolljq50dgPw-9gY5eN_VPBZwVH8H","SM30-TRIG-S00":"1UaHNM2rLkmbBCrgPogwtgbBisqdwuVRw","SM30-BATT-S50":"1IsTb5tbDtVm0UmHsrnEfcqeXilKN9icE","SM30-SCPR":"1maa3z3l70Uzb6c0bwSuRtDn6OUQMilW4","SM30-BOOT-01":"1YsKeIxACz9kfqzEXu-u0p7-VTpI8hYvj","SM30-STRP-S10":"1SZlwKTBhfQjVAvlNez-1JSvYljsR7EQQ","SM30-STRP-S50":"1SZlwKTBhfQjVAvlNez-1JSvYljsR7EQQ", "UNIV-BTCH-CLP":"15a6OiWJIhQ3Mq0oX5gtGOiMikdU0_Xk4","UNIV-BTCH-BRG":"1werP4XwXrMB9OED4FeyOxOj4FGC4AMEe"
};
const ACC_REQUIRED={"UL20-04BC-C00::UL20":"UL20-PWSP-2EU","UL20-2CRD-CU0::UL20":"UL20-PWSP-2EU","UL20-2CRD-EU0::UL20":"UL20-PWSP-2EU","UL20-8CRD-C00::UL20":"UL20-PWSP-8EU","UL20-8CRD-E00::UL20":"UL20-PWSP-8EU","UL20-04BC-C00::UL30":"UL20-PWSP-2XX","UL20-2CRD-EU0::UL30":"UL20-PWSP-2XX","UL20-8CRD-E00::UL30":"UL20-PWSP-8XX","US20-04BC-C00::US20":"US20-PWSP-2EU","US20-20BC-C00::US20":"US20-PWSP-5EU","US20-2CRD-CU0::US20":"US20-PWSP-2EU","US20-2CRD-EC0::US20":"US20-PWSP-2EU","US20-5CRD-C00::US20":"US20-PWSP-2EU","US20-5CRD-C00-MT::US20":"US20-PWSP-2EU","US20-5CRD-E00::US20":"US20-PWSP-2EU","US20-5CRD-E00-MT::US20":"US20-PWSP-2EU"
,"WD10-03BC-C00::WD10":"WD10-PWSP-1EU","WD10-06BC-C00::WD10":"WD10-PWSP-4EU","WD10-12BC-C00::WD10":"WD10-PWSP-4EU","WD10-18BC-C00::WD10":"WD10-PWSP-8EU","SL20-1CRD-C00::SL20":"SL20-PWSP-2EU","SL20-2CRD-CC0::SL20":"SL20-PWSP-2EU","SL20-2CRD-EC0::SL20":"SL20-PWSP-2EU","SL20-8CRD-C00::SL20":"UNIV-PWSP-8EU","SL20-8CRD-E00::SL20":"UNIV-PWSP-8EU","SL2K-1CRD-C00::SL20K":"SL2K-PWSP-2EU","SL2K-2CRD-C00::SL20K":"SL2K-PWSP-2EU","SL2K-2CRD-CC0::SL20K":"SL2K-PWSP-2EU","SL2K-2CRD-EC0::SL20K":"SL2K-PWSP-2EU","SL2K-8CRD-C00::SL20K":"UNIV-PWSP-8EU","SL2K-8CRD-E00::SL20K":"UNIV-PWSP-8EU","WR10-03BC-U00::WR10":"WR10-PWSP-1EU","WR10-08BC-C00::WR10":"WR10-PWSP-4EU","WR10-08BC-U00::WR10":"WR10-PWSP-4EU","WR10-16BC-C00::WR10":"WR10-PWSP-4EU","WR10-24BC-C00::WR10":"WR10-PWSP-4EU","WR10-32BC-C00::WR10":"WR10-PWSP-4EU","WR10-32BC-U00::WR10":"WR10-PWSP-4EU","SM30-1CRD-C00::SM30":"SM30-PWSP-2EU","SM30-2CRD-C00::SM30":"SM30-PWSP-2EU"
};
const T={ru:{badge_android_ready:"Android 14 Ready",badge_enterprise:"Enterprise",badge_4g:"4G/LTE",badge_frozen:"Frozen",all_models:"Все модели",model:"Модель",android:"Android",scanner:"Сканер",loading_data_message:"Загрузка данных…",data_loaded_message:"Загружено {count} SKU",data_error_message:"Ошибка загрузки",no_results_found:"Ничего не найдено. Сбросьте фильтры.",comparison_note:"Различия выделены жёлтым.",clear_comparison:"Очистить сравнение",filters:"Фильтры",results_heading:"Результаты подбора",search_placeholder:"Поиск по SKU устройства или аксессуара…",btn_search:"Найти",btn_clear_filters:"Сбросить фильтры",spec_title:"Спецификация",add_to_spec:"+ В спецификацию",all_android:"Любая версия",all_scanners:"Любой сканер",all_memory:"Любая память",all_buttons:"Любое кол-во",all_handle:"Любой тип",lte_any:"Не важно",lte_yes:"Есть LTE",lte_no:"Нет LTE",btn_dont_know:"Я не знаю, что выбрать",btn_how_to_read:"Как читать SKU",btn_select_acc:"Выбрать аксессуары",btn_acc_guide:"Гид по аксессуарам",btn_spec:"Спецификация",btn_add_compare:"Добавить к сравнению",decode_label:"Расшифровка",filter_memory:"Память",filter_buttons:"Кнопки",filter_handle:"Рукоятка",filter_android:"Android",filter_model:"Модель",filter_scanner:"Сканер",filter_frozen:"Морозостойкость",all_devices:"Все устройства",distributors:"Дистрибьюторы:",btn_site:"Сайт",btn_warranty:"Гарантия",btn_tech_docs:"Tech Docs",btn_service:"Сервис",configurator_subtitle:"Конфигуратор подбора",frozen_yes:"Морозостойкий",frozen_no:"Не морозостойкий",spec_final:"Финальная спецификация",spec_sku:"Артикул (SKU)",spec_name:"Наименование",spec_qty:"Кол-во",spec_price:"Цена ($)",spec_total_col:"Итого, $",spec_total:"Итоговая стоимость:",btn_print:"Печать",btn_cancel:"Отмена",btn_add_manual:"Добавить артикул вручную",btn_add_to_spec:"Добавить в спецификацию",btn_add_short:"Добавить",btn_compare_short:"Сравнить",acc_for_sku:"Аксессуары для SKU:",btn_download_sku:"Скачать руководство по SKU",sku_guide_desc:"Руководство по артикулам M3 MOBILE.",btn_download_hint:"Скачать:",service_centers:"Наши сервисные центры",comparison_title_modal:"Сравнение SKU",btn_add_manual_short:"Добавить вручную"},en:{badge_android_ready:"Android 14 Ready",badge_enterprise:"Enterprise",badge_4g:"4G/LTE",badge_frozen:"Frozen",all_models:"All Models",model:"Model",android:"Android",scanner:"Scanner",loading_data_message:"Loading…",data_loaded_message:"Loaded {count} SKUs",data_error_message:"Load error",no_results_found:"No results. Reset filters.",comparison_note:"Differences highlighted.",clear_comparison:"Clear Comparison",filters:"Filters",results_heading:"Search Results",search_placeholder:"Search by SKU (device or accessory)…",btn_search:"Search",btn_clear_filters:"Reset Filters",add_to_spec:"+ Add to Spec",all_android:"Any Version",all_scanners:"Any Scanner",all_memory:"Any Memory",all_buttons:"Any Count",all_handle:"Any Type",lte_any:"Any",lte_yes:"Has LTE",lte_no:"No LTE",btn_dont_know:"I don't know what to choose",btn_how_to_read:"How to read SKU",btn_select_acc:"Select Accessories",btn_acc_guide:"Accessories Guide",btn_spec:"Specification",btn_add_compare:"Add to Comparison",decode_label:"Decoded",filter_memory:"Memory",filter_buttons:"Buttons",filter_handle:"Handle",filter_android:"Android",filter_model:"Model",filter_scanner:"Scanner",filter_frozen:"Freeze-proof",all_devices:"All Devices",distributors:"Distributors:",btn_site:"Website",btn_warranty:"Warranty",btn_tech_docs:"Tech Docs",btn_service:"Service",configurator_subtitle:"Product Configurator",frozen_yes:"Freeze-proof",frozen_no:"Not freeze-proof",spec_total:"Total cost:",btn_print:"Print",btn_cancel:"Cancel",btn_add_manual:"Add SKU manually",btn_add_to_spec:"Add to Specification",btn_add_short:"Add",btn_compare_short:"Compare",acc_for_sku:"Accessories for SKU:",sku_guide_desc:"M3 MOBILE product SKU guide.",comparison_title_modal:"SKU Comparison",btn_add_manual_short:"Add manually"},ko:{badge_android_ready:"Android 14 Ready",badge_enterprise:"Enterprise",badge_4g:"4G/LTE",badge_frozen:"Frozen",all_models:"모든 모델",model:"모델",android:"Android",scanner:"스캐너",loading_data_message:"로드 중…",data_loaded_message:"{count}개 SKU 로드됨",data_error_message:"로드 오류",no_results_found:"결과 없음. 필터를 초기화하세요.",comparison_note:"차이점은 노란색으로 표시됩니다.",clear_comparison:"비교 지우기",filters:"필터",results_heading:"선택 결과",search_placeholder:"SKU 검색 (기기 또는 액세서리)…",btn_search:"검색",btn_clear_filters:"필터 초기화",add_to_spec:"사양에 추가",all_android:"모든 버전",all_scanners:"모든 스캐너",all_memory:"모든 메모리",all_buttons:"모든 수량",all_handle:"모든 유형",lte_any:"상관없음",lte_yes:"LTE 있음",lte_no:"LTE 없음",btn_dont_know:"무엇을 선택할지 모르겠습니다",btn_how_to_read:"SKU 읽는 방법",btn_select_acc:"액세서리 선택",btn_acc_guide:"액세서리 가이드",btn_spec:"사양",btn_add_compare:"비교에 추가",decode_label:"해석",filter_memory:"메모리",filter_buttons:"버튼",filter_handle:"핸들",filter_android:"Android",filter_model:"모델",filter_scanner:"스캐너",filter_frozen:"방한",all_devices:"모든 기기",distributors:"유통업체:",btn_site:"웹사이트",btn_warranty:"보증",btn_tech_docs:"Tech Docs",btn_service:"서비스",configurator_subtitle:"제품 구성기",frozen_yes:"방한",frozen_no:"비방한",spec_total:"총 비용:",btn_print:"인쇄",btn_cancel:"취소",btn_add_manual:"SKU 수동 추가",btn_add_to_spec:"사양에 추가",btn_add_short:"추가",btn_compare_short:"비교",acc_for_sku:"SKU 액세서리:",sku_guide_desc:"M3 MOBILE SKU 가이드.",comparison_title_modal:"SKU 비교",btn_add_manual_short:"수동 추가"}};
function t(key){return(T[currentLanguage]&&T[currentLanguage][key])||key;}
function csvToJson(csv){const lines=csv.split('\n').filter(l=>l.trim()!=='');if(lines.length<2)return[];const headers=lines[0].split(',').map(h=>h.trim().toLowerCase());const result=[];lines.slice(1).forEach(lineStr=>{const matches=lineStr.match(/(?:"([^"]*(?:""[^"]*)*)"|((?:[^,]|\r)*))(,|$)/g);if(!matches)return;const fields=matches.map(m=>{m=m.replace(/,$/,'');if(m.startsWith('"')&&m.endsWith('"'))m=m.slice(1,-1).replace(/""/g,'"');return m.trim();});const obj={};headers.forEach((h,j)=>{let v=(fields[j]||'').trim();if(h==='price'){obj[h]=parseFloat(v.replace(/\s/g,'').replace(',','.'))||0;}else if(['lte','frost','handle','model','sku','accessory_sku'].includes(h)){obj[h]=v.toUpperCase();}else{obj[h]=v;}});if(obj.sku||obj.model)result.push(obj);});return result;}
function getDriveThumbnail(url,sz='w200'){if(!url)return'https://placehold.co/200x160';if(/^[a-zA-Z0-9_-]+$/.test(url))return _P+url+'='+sz;const m=url.match(/\/d\/([a-zA-Z0-9_-]+)/);return m?_P+m[1]+'='+sz:'https://placehold.co/200x160';}
async function loadData(){try{setStatus(t('loading_data_message'));
const fetchCSV=async(url)=>{
try{
const r=await fetch(url,{cache:'no-store',redirect:'follow'});
const text=await r.text();
const clean=text.replace(/^﻿/,'').trim();
if(clean.startsWith('<')||clean.length<10)return '';
return clean;
}catch(e){return '';}
};
const[skuText,accText,compText]=await Promise.all([fetchCSV(SKU_DB_URL),fetchCSV(ACCESSORIES_DB_URL),fetchCSV(COMPATIBILITY_URL)]);
if(!skuText){setStatus('Ошибка загрузки данных. Проверьте подключение к интернету.');return;}
SKU_DB=csvToJson(skuText).filter(s=>s.sku);
const rawAcc=csvToJson(accText).filter(a=>a.sku);
const accSeenLoad=new Set();
ACCESSORIES_DB=rawAcc.filter(a=>{const k=a.sku.toUpperCase();if(accSeenLoad.has(k))return false;accSeenLoad.add(k);return true;});
SKUMAP={};SKU_DB.forEach(s=>{SKUMAP[s.sku.toUpperCase()]=s;});
ACCMAP={};ACCESSORIES_DB.forEach(a=>{ACCMAP[a.sku.toUpperCase()]=a;});
const compList=compText?csvToJson(compText):[];COMPATIBILITY_MAP={};compList.forEach(item=>{const model=(item.model||'').trim().toUpperCase();const accSku=(item.accessory_sku||'').trim().toUpperCase();if(model&&accSku){if(!COMPATIBILITY_MAP[model])COMPATIBILITY_MAP[model]=new Set();COMPATIBILITY_MAP[model].add(accSku);}});for(const k in COMPATIBILITY_MAP)COMPATIBILITY_MAP[k]=Array.from(COMPATIBILITY_MAP[k]);dataLoaded=true;setStatus(t('data_loaded_message').replace('{count}',SKU_DB.length));initFilters();filterSKU();}catch(err){console.error(err);setStatus(t('data_error_message'));}}
function setStatus(msg){$('search-status').innerHTML=msg;}
const FILTER_CHAIN=['android','scanner','memory','buttons','handle','lte','frost'];
function initFilters(){updateModelOptions();FILTER_CHAIN.forEach(f=>{if(f!=='lte'&&f!=='frost')updateSelectOptions(f+'-select',f,SKU_DB,'');});}
function filterSKU(){if(!dataLoaded)return;const vals={model:$('model-select').value,android:$('android-select').value,scanner:$('scanner-select').value,memory:$('memory-select').value,buttons:$('buttons-select').value,handle:$('handle-select').value,lte:$('lte-select').value,frost:$('frost-select').value};let result=SKU_DB.filter(sku=>{for(const[k,v]of Object.entries(vals))if(v&&sku[k]!==v)return false;return true;});if(currentCategory!=='all'){const allowed=CATEGORY_MODELS[currentCategory]||[];result=result.filter(s=>allowed.includes(s.model));}renderResults(result);$('results-count').textContent=`${result.length} SKU`;if(!isSearchingBySKU)$('accessorySelection').style.display='none';}
function filterByCategory(cat,btn){currentCategory=cat;document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');updateModelOptions();filterSKU();}
function updateAndroidOptions(){const m=$('model-select').value;resetDependentFilters('android');const data=m?SKU_DB.filter(s=>s.model===m):SKU_DB;updateSelectOptions('android-select','android',data,'');}
function updateScannerOptions(){const m=$('model-select').value,a=$('android-select').value;resetDependentFilters('scanner');let d=SKU_DB;if(m)d=d.filter(s=>s.model===m);if(a)d=d.filter(s=>s.android===a);updateSelectOptions('scanner-select','scanner',d,'');}
function updateMemoryOptions(){const m=$('model-select').value,a=$('android-select').value,sc=$('scanner-select').value;resetDependentFilters('memory');let d=SKU_DB;if(m)d=d.filter(s=>s.model===m);if(a)d=d.filter(s=>s.android===a);if(sc)d=d.filter(s=>s.scanner===sc);updateSelectOptions('memory-select','memory',d,'');}
function updateButtonsOptions(){const m=$('model-select').value,a=$('android-select').value,sc=$('scanner-select').value,mem=$('memory-select').value;resetDependentFilters('buttons');let d=SKU_DB;if(m)d=d.filter(s=>s.model===m);if(a)d=d.filter(s=>s.android===a);if(sc)d=d.filter(s=>s.scanner===sc);if(mem)d=d.filter(s=>s.memory===mem);updateSelectOptions('buttons-select','buttons',d,'');}
function updateHandleOptions(){const m=$('model-select').value,a=$('android-select').value,sc=$('scanner-select').value,mem=$('memory-select').value,btn=$('buttons-select').value;resetDependentFilters('handle');let d=SKU_DB;if(m)d=d.filter(s=>s.model===m);if(a)d=d.filter(s=>s.android===a);if(sc)d=d.filter(s=>s.scanner===sc);if(mem)d=d.filter(s=>s.memory===mem);if(btn)d=d.filter(s=>s.buttons===btn);updateSelectOptions('handle-select','handle',d,'');}
function updateLteOptions(){const m=$('model-select').value,a=$('android-select').value,sc=$('scanner-select').value,mem=$('memory-select').value,btn=$('buttons-select').value,hnd=$('handle-select').value;resetDependentFilters('lte');let d=SKU_DB;if(m)d=d.filter(s=>s.model===m);if(a)d=d.filter(s=>s.android===a);if(sc)d=d.filter(s=>s.scanner===sc);if(mem)d=d.filter(s=>s.memory===mem);if(btn)d=d.filter(s=>s.buttons===btn);if(hnd)d=d.filter(s=>s.handle===hnd);const lteSel=$('lte-select');
const lteCur=lteSel.value;
const lteVals=Array.from(new Set(d.map(s=>s.lte).filter(Boolean))).sort();
lteSel.innerHTML='';
const lo=$$('option');lo.value='';lo.dataset.i18n='lte_any';lo.text=t('lte_any');lteSel.appendChild(lo);
if(lteVals.includes('YES')){const o=$$('option');o.value='YES';o.dataset.i18n='lte_yes';o.text=t('lte_yes');lteSel.appendChild(o);}
if(lteVals.includes('NO')){const o=$$('option');o.value='NO';o.dataset.i18n='lte_no';o.text=t('lte_no');lteSel.appendChild(o);}
lteSel.value=lteVals.includes(lteCur)?lteCur:'';}
function updateFrostOptions(){const m=$('model-select').value,a=$('android-select').value,sc=$('scanner-select').value,mem=$('memory-select').value,btn=$('buttons-select').value,hnd=$('handle-select').value,lte=$('lte-select').value;resetDependentFilters('frost');let d=SKU_DB;if(m)d=d.filter(s=>s.model===m);if(a)d=d.filter(s=>s.android===a);if(sc)d=d.filter(s=>s.scanner===sc);if(mem)d=d.filter(s=>s.memory===mem);if(btn)d=d.filter(s=>s.buttons===btn);if(hnd)d=d.filter(s=>s.handle===hnd);if(lte)d=d.filter(s=>s.lte===lte);const frostSel=$('frost-select');
const frostCur=frostSel.value;
const frostVals=Array.from(new Set(d.map(s=>s.frost).filter(Boolean))).sort();
frostSel.innerHTML='';
const fo=$$('option');fo.value='';fo.dataset.i18n='lte_any';fo.text=t('lte_any');frostSel.appendChild(fo);
if(frostVals.includes('YES')){const o=$$('option');o.value='YES';o.dataset.i18n='frozen_yes';o.text=t('frozen_yes');frostSel.appendChild(o);}
if(frostVals.includes('NO')){const o=$$('option');o.value='NO';o.dataset.i18n='frozen_no';o.text=t('frozen_no');frostSel.appendChild(o);}
frostSel.value=frostVals.includes(frostCur)?frostCur:'';}
function resetDependentFilters(startFrom){const idx=FILTER_CHAIN.indexOf(startFrom);if(idx===-1)return;FILTER_CHAIN.slice(idx).forEach(f=>{const sel=$(f+'-select');if(sel){sel.value='';if(f!=='lte'&&f!=='frost')updateSelectOptions(`${f}-select`,f,SKU_DB,'');}})}
function updateSelectOptions(selectId,prop,data,currentVal){const sel=$(selectId);if(!sel)return;const firstVal=sel.options[0]?sel.options[0].value:'';const firstKey=sel.options[0]?sel.options[0].dataset.i18n:'';const vals=Array.from(new Set(data.map(s=>s[prop]).filter(Boolean))).sort();sel.innerHTML='';const newFirst=$$('option');newFirst.value=firstVal;if(firstKey){newFirst.dataset.i18n=firstKey;newFirst.text=t(firstKey);}sel.appendChild(newFirst);vals.forEach(v=>{const o=$$('option');o.value=v;o.textContent=v;sel.appendChild(o);});sel.value=(currentVal&&vals.includes(currentVal))?currentVal:'';}
function updateModelOptions(){if(!dataLoaded)return;const sel=$('model-select');const allModels=Array.from(new Set(SKU_DB.map(s=>s.model))).sort();const allowed=CATEGORY_MODELS[currentCategory];const modelsToShow=allowed?allModels.filter(m=>allowed.includes(m)):allModels;const cur=sel.value;sel.innerHTML=`<option value="" data-i18n="all_models">${t('all_models')}</option>`;modelsToShow.forEach(m=>{const o=$$('option');o.value=m;o.textContent=m;sel.appendChild(o);});if(cur&&modelsToShow.includes(cur))sel.value=cur;}
function resetFilters(){['model','android','scanner','memory','buttons','handle','lte','frost'].forEach(f=>$(f+'-select').value='');currentCategory='all';document.querySelectorAll('.cat-btn').forEach((b,i)=>b.classList.toggle('active',i===0));updateModelOptions();filterSKU();}
function searchBySKU(){
const q=$('sku-search').value.trim().toUpperCase();
if(!q){isSearchingBySKU=false;filterSKU();return;}
isSearchingBySKU=true;
const skuResults=SKU_DB.filter(s=>s.sku.toUpperCase().includes(q));
const accSeen=new Set();
const accResults=ACCESSORIES_DB.filter(a=>{
const key=a.sku.toUpperCase();
if(!key.includes(q)&&!(a.description||'').toUpperCase().includes(q))return false;
if(accSeen.has(key))return false;
accSeen.add(key);
return true;
});
const container=$('results-container');
const countEl=$('results-count');
if(!skuResults.length&&!accResults.length){
container.innerHTML=`<div class="no-results"><p>Ничего не найдено по запросу «${q}». Сбросьте фильтры или попробуйте другой артикул.</p></div>`;
countEl.textContent='0 результатов';
return;
}
const total=skuResults.length+accResults.length;
countEl.textContent=`${total} результат(ов)`;
let modeClass='search-mode-indicator';
let modeText='';
if(skuResults.length&&accResults.length){
modeClass+=' mixed-mode';
modeText=`Найдено: ${skuResults.length} SKU устройств+${accResults.length} аксессуаров`;
} else if(accResults.length){
modeClass+=' acc-mode';
modeText=`Найдено аксессуаров: ${accResults.length}`;
} else {
modeText=`Найдено SKU: ${skuResults.length}`;
}
const frag=$f();
const indicator=$$('div');
indicator.className=modeClass;
indicator.innerHTML=`${modeText}<button class="btn-clear-search" title="Сбросить поиск" onclick="clearSearch()">✕</button>`;
frag.appendChild(indicator);
if(skuResults.length){
const sep=$$('div');
sep.style.cssText='font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--slate);margin-bottom:10px;margin-top:4px;';
sep.textContent='Устройства';
frag.appendChild(sep);
renderResultCards(skuResults,frag);
}
if(accResults.length){
const sep2=$$('div');
sep2.style.cssText='font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--slate);margin-bottom:10px;margin-top:'+(skuResults.length?'20px':'4px')+';';
sep2.textContent='Аксессуары';
frag.appendChild(sep2);
renderAccessoryCards(accResults,frag,q);
}
container.innerHTML='';
container.appendChild(frag);
$('accessorySelection').style.display='none';
}
function clearSearch(){
$('sku-search').value='';
isSearchingBySKU=false;
filterSKU();
}
function getCompatibleModels(accSku){
const upper=accSku.toUpperCase();
return Object.entries(COMPATIBILITY_MAP)
.filter(([,list])=>list.includes(upper))
.map(([model])=>model);
}
function renderAccessoryCards(list,frag,query){
list.forEach(acc=>{
const compatModels=getCompatibleModels(acc.sku);
const photoUrl=ACC_PHOTOS[acc.sku]||ACC_PHOTOS[acc.sku.toUpperCase()]||'';
const requiredSet=new Set();
compatModels.forEach(m=>{const r=ACC_REQUIRED[acc.sku+'::'+m];if(r)requiredSet.add(r);});
const card=$$('div');
card.className='acc-result-card';
card.innerHTML=
'<div class="card-inner">'+
'<div class="card-top">'+
'<div class="card-meta">'+
'<div class="acc-tag"><svg style="width:12px;height:12px;stroke:currentColor;fill:none;stroke-width:2;" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>Аксессуар</div>'+
'<div class="acc-result-sku">'+acc.sku+'</div>'+
'<div class="acc-result-desc">'+(acc.description||'—')+'</div>'+
(compatModels.length?'<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--slate);margin:8px 0 5px;">Совместимые модели:</div><div class="acc-compatible-models">'+compatModels.map(m=>'<span class="acc-compat-badge">'+m+'</span>').join('')+'</div>':'')+
(requiredSet.size?'<div class="acc-required-badge" style="margin-top:8px;">&#9888; Необходимо докупить: <strong>'+ [...requiredSet].join(', ')+'</strong></div>':'')+
'</div>'+
'<div class="gallery-slot-acc"></div>'+
'</div>'+
'<div style="font-size:22px;font-weight:700;color:var(--purple);margin:10px 0 8px;">'+(acc.price?acc.price.toLocaleString('ru-RU')+' $':'По запросу')+'</div>'+
'<div class="card-actions" style="margin-top:0;"></div>'+
'</div>';
const gallerySlot=card.querySelector('.gallery-slot-acc');
if(photoUrl){
const galleryDiv=$$('div');
galleryDiv.className='card-gallery';
const img=$$('img');
img.className='gallery-main';
img.src=getDriveThumbnail(photoUrl);
img.alt=acc.sku;
img.addEventListener('click',()=>openLightbox(getDriveThumbnail(photoUrl,'w800')));
galleryDiv.appendChild(img);
gallerySlot.replaceWith(galleryDiv);
} else {
gallerySlot.remove();
}
const actionsDiv=card.querySelector('.card-actions');
const btnAdd=$$('button');
btnAdd.className='btn-action btn-primary';
btnAdd.style.cssText='flex:1;justify-content:center;width:100%;';
btnAdd.textContent=t('add_to_spec');
btnAdd.addEventListener('click',()=>addAccessoryDirectToSpec(acc.sku));
actionsDiv.appendChild(btnAdd);
frag.appendChild(card);
});
}
function addAccessoryDirectToSpec(accSku){
const acc=ACCMAP[accSku.toUpperCase()]||ACCESSORIES_DB.find(a=>a.sku.toUpperCase()===accSku.toUpperCase());
if(!acc){showToast('Аксессуар не найден');return;}
finalSpecificationList.push({type:'Accessory',sku:acc.sku,name:acc.description||'—',price:acc.price||0,qty:1});
renderFinalSpecification();
showToast(`${acc.sku} добавлен в спецификацию`);
}
function getBadges(sku){const badges=[];if(parseFloat(sku.android)>=13)badges.push({cls:'android-ready',text:t('badge_android_ready')});if(ENTERPRISE_MODELS.includes(sku.model))badges.push({cls:'enterprise',text:t('badge_enterprise')});const ip=IP_RATINGS[sku.model];if(ip)badges.push({cls:'ip-badge',text:ip});if(sku.lte==='YES')badges.push({cls:'lte',text:t('badge_4g')});if(sku.frost==='YES')badges.push({cls:'frozen',text:t('badge_frozen')});if(sku.model==='SM24')badges.push({cls:'new-coming',text:'★ NEW — Coming Soon'});return badges;}
function renderResults(list){const container=$('results-container');if(!list.length){container.innerHTML=`<div class="no-results"><p>${t('no_results_found')}</p></div>`;return;}container.innerHTML='';const frag=$f();renderResultCards(list,frag);container.appendChild(frag);}
function renderResultCards(list,frag){list.forEach((sku,idx)=>{
const cardId='card-'+idx+'-'+sku.sku;
const mainImg=getDriveThumbnail(MODEL_IMAGES[sku.model],'w400');
const extraImgs=MODEL_IMAGES_EXTRA[sku.model]||[];
const allImgs=[MODEL_IMAGES[sku.model],...extraImgs].filter(Boolean);
const card=$$('div');
card.className='result-card';
card.id=cardId;
const badges=getBadges(sku);
const badgeHtml=badges.map(b=>'<span class="badge '+b.cls+'">'+b.text+'</span>').join('');
const priceHtml=sku.price?'<div class="sku-price">'+sku.price.toLocaleString('ru-RU')+' $</div>':'<div class="sku-price no-price">Цена по запросу</div>';
const descHtml=sku.description?'<div class="sku-desc-box">'+sku.description+'</div>':'';
card.innerHTML=
'<div class="card-inner">'+
'<div class="card-top">'+
'<div class="card-meta">'+
'<div class="sku-code">'+sku.sku+'</div>'+
priceHtml+
descHtml+
'</div>'+
'<div class="gallery-slot"></div>'+
'</div>'+
'<div class="badge-row">'+badgeHtml+'</div>'+
'<div class="card-actions"></div>'+
'</div>';
const galleryDiv=$$('div');
galleryDiv.className='card-gallery';
const mainImgEl=$$('img');
mainImgEl.className='gallery-main';
mainImgEl.src=mainImg;
mainImgEl.alt=sku.model;
mainImgEl.addEventListener('click',()=>openLightbox(mainImgEl.src));
galleryDiv.appendChild(mainImgEl);
if(allImgs.length>1){
const thumbsDiv=$$('div');
thumbsDiv.className='gallery-thumbs';
allImgs.forEach((u,i)=>{
const thumb=$$('img');
thumb.className='gallery-thumb'+(i===0?' active':'');
thumb.src=getDriveThumbnail(u,'w80');
const bigSrc=getDriveThumbnail(u,'w400');
thumb.addEventListener('click',()=>{
mainImgEl.src=bigSrc;
thumbsDiv.querySelectorAll('.gallery-thumb').forEach(t=>t.classList.remove('active'));
thumb.classList.add('active');
});
thumbsDiv.appendChild(thumb);
});
galleryDiv.appendChild(thumbsDiv);
}
card.querySelector('.gallery-slot').replaceWith(galleryDiv);
const actionsDiv=card.querySelector('.card-actions');
const inCompare=comparisonList.includes(sku.sku);
const btnPrimary=$$('button');
btnPrimary.className='btn-action btn-primary';
btnPrimary.textContent=t('btn_select_acc');
btnPrimary.addEventListener('click',()=>showAccessorySelection(sku.sku));
actionsDiv.appendChild(btnPrimary);
if(MODEL_ACCESSORY_GUIDES[sku.model]){
const btnAcc=$$('button');
btnAcc.className='btn-action btn-outline';
btnAcc.textContent=t('btn_acc_guide');
btnAcc.style.color='var(--coral)';
btnAcc.addEventListener('click',()=>window.open(_D+MODEL_ACCESSORY_GUIDES[sku.model]+'/view','_blank'));
actionsDiv.appendChild(btnAcc);
}
if(MODEL_SPECS[sku.model]){
const btnSpec=$$('button');
btnSpec.className='btn-action btn-outline';
btnSpec.textContent=t('btn_spec')+' ('+sku.model+')';
btnSpec.style.color='var(--coral)';
btnSpec.addEventListener('click',()=>window.open(_D+MODEL_SPECS[sku.model]+'/view','_blank'));
actionsDiv.appendChild(btnSpec);
}
const btnCmp=$$('button');
btnCmp.className='btn-action btn-compare'+(inCompare?' in-compare':'');
btnCmp.textContent=inCompare?'✓ '+t('btn_add_compare'):t('btn_add_compare');
btnCmp.addEventListener('click',()=>toggleComparison(sku.sku));
actionsDiv.appendChild(btnCmp);
const decodePanel=$$('div');
decodePanel.className='sku-decode-panel';
card.querySelector('.card-inner').appendChild(decodePanel);
renderDecodePanel(sku.sku, decodePanel);
frag.appendChild(card);
});}
function renderDecodePanel(skuCode, panel){
const sku=skuCode.trim().toUpperCase();
let res={blocks:[],warning:'',tags:[]};
if(sku.startsWith('WR15')) res=decodeSKU_WR('WR15',sku);
else if(sku.startsWith('WR10')) res=decodeSKU_WR('WR10',sku);
else if(sku.startsWith('WD1')) res=decodeSKU_WD10(sku);
else if(sku.startsWith('SL20K')||sku.startsWith('L2K')) res=decodeSKU_SL20K(sku);
else if(sku.startsWith('SL20')) res=decodeSKU_SL20(sku);
else if(sku.startsWith('PC10')) res=decodeSKU_PC10(sku);
else if(sku.startsWith('SM24')) res=decodeSKU_SM24(sku);
else if(sku.startsWith('SM30')) res=decodeSKU_SM30(sku);
else if(sku.startsWith('SM2')) res=decodeSKU_SM20(sku);
else if(sku.startsWith('US20')||sku.startsWith('S20')) res=decodeSKU_US20(sku);
else if(sku.startsWith('US30')) res=decodeSKU_US30(sku);
else if(sku.match(/^U20/)) res=decodeSKU_UL20(sku);
else if(sku.match(/^U30/)) res=decodeSKU_UL30(sku);
const {blocks,warning,tags}=res;
const decodeStr=blocks.filter(b=>b&&b.value&&b.value!=='—').map(b=>b.value).join(' · ');
let html='';
if(tags&&tags.length){
html+='<div class="decode-tags">';
for(const t of tags) html+=`<span class="decode-tag ${t.cls||''}">${t.label}</span>`;
html+='</div>';
}
if(warning) html+=`<div class="decode-warn">⚠️ ${warning}</div>`;
html+='<div class="decode-blocks">';
for(const b of blocks){
if(!b||!b.value) continue;
html+=`<div class="decode-block ${b.cls||''}">
<div class="decode-block-letter">${b.letter||b.value}</div>
<div class="decode-block-label">${b.label}</div>
<div class="decode-block-value">${b.value}</div>
</div>`;
}
html+='</div>';
if(decodeStr) html+=`<div class="decode-string-row"><strong>${t('decode_label')}:</strong> ${decodeStr}</div>`;
panel.innerHTML=html;
}
function _b(letter,label,value,cls){return {letter,label,value:value||'—',cls:cls||''};}
function _net(c){return c==='0'?'NO':c?'Yes':'—';}
function decodeSKU_UL30(sku){
const p=sku.split('-'),p1=p[0]||'',p2=p[1]||'',p3=p[2]||'';
const variant=p1[3]||'';
const frozen=variant==='F';
const net=p1[4]||'',wifi=p1[5]||'';
const ver=p2[0]||'',scan=p2[1]||'',cam=p2[2]||'',lcd=p2[3]||'',kp=p2[4]||'',bat=p2[5]||'';
const tags=[{label:'Android 14 Ready'},{label:'Enterprise'},{label:'IP68'}];
if(frozen) tags.push({label:'Frozen',cls:'frozen'});
const blocks=[
_b('UL30','Model', frozen?'UL30 Frozen':'UL30 Standard', 'is-model'+(frozen?' is-frozen':'')),
_b(net,'LTE', _net(net)),
_b(wifi||'—','Wi-Fi', wifi==='E'?'Wi-Fi 6':'Wi-Fi', wifi==='E'?'is-wifi6':''),
_b(ver,'OS Version', {'U':'Android 14'}[ver]||ver),
_b(scan,'Scanner', {'2':'SE4770','L':'SE5800 LR'}[scan]||scan),
_b(cam,'Camera', {'R':'Rear only','F':'Front+Rear','N':'No Camera'}[cam]||cam),
_b(lcd,'LCD', {'F':'FHD','H':'HD'}[lcd]||lcd),
_b(kp,'Keypad', {'R':'28 Key','X':'38 Key','E':'55 Key','S':'35 Key'}[kp]||kp),
_b(bat,'Battery', {'S':'6700mAh'}[bat]||bat),
p3?_b(p3,'Special',{'HF':'HF (HF/NFC)','TH':'Integrated Trigger'}[p3]||p3,'is-special'):null,
];
return {blocks,warning:'',tags};
}
function decodeSKU_UL20(sku){
const p=sku.split('-'),p1=p[0]||'',p2=p[1]||'',p3=p[2]||'';
const variant=p1[3]||'';
const frozen=variant==='F';
const net=p1[4]||'',wifi=p1[5]||'';
const ver=p2[0]||'',scan=p2[1]||'',cam=p2[2]||'',lcd=p2[3]||'',kp=p2[4]||'',bat=p2[5]||'';
const tags=[{label:'Enterprise'},{label:'IP67'}];
if(frozen) tags.push({label:'Frozen',cls:'frozen'});
const blocks=[
_b('UL20','Model', frozen?'UL20 Frozen':'UL20 Standard', 'is-model'+(frozen?' is-frozen':'')),
_b(net,'LTE', _net(net)),
_b(wifi||'—','Wi-Fi', wifi==='E'?'Wi-Fi 6':'Wi-Fi', wifi==='E'?'is-wifi6':''),
_b(ver,'OS Version', {'P':'Android 9','Q':'Android 10'}[ver]||ver),
_b(scan,'Scanner', {'2':'SE4750','I':'SE5800 ER'}[scan]||scan),
_b(cam,'Camera', {'R':'Rear only','F':'Front+Rear','N':'No Camera'}[cam]||cam),
_b(lcd,'LCD', {'F':'FHD','H':'HD'}[lcd]||lcd),
_b(kp,'Keypad', {'R':'28 Key','X':'38 Key','E':'55 Key','S':'35 Key'}[kp]||kp),
_b(bat,'Battery', {'S':'6700mAh'}[bat]||bat),
p3?_b(p3,'Special',{'HF':'HF (HF/NFC)','TH':'Integrated Trigger'}[p3]||p3,'is-special'):null,
];
return {blocks,warning:'',tags};
}
function decodeSKU_US20(sku){
const p=sku.split('-'),p1=p[0]||'',p2=p[1]||'',p3=p[2]||'';
const isShort=p1.startsWith('S20')&&!p1.startsWith('US');
const vi=isShort?3:4;
const lte=p1[vi]==='X';
const net=p1[vi+1]||'',wifi=p1[vi+2]||'',ver=p2[0]||'',scan=p2[1]||'',cam=p2[2]||'',lcd=p2[3]||'',kp=p2[4]||'',bat=p2[5]||'';
const warn=(scan==='9'||scan==='C')?'Нельзя установить ручку из-за угла сканера 45°':'';
const tags=[{label:'Android 14 Ready'},{label:'Enterprise'},{label:'IP67'}];
if(lte) tags.push({label:'LTE',cls:'lte'});
const blocks=[
_b('US20','Model', lte?'US20 LTE':'US20 Standard', 'is-model'+(lte?' is-lte':'')),
_b(net,'LTE', _net(net), lte?'is-lte':''),
_b(wifi||'—','Wi-Fi',wifi==='E'?'Wi-Fi 6':'Wi-Fi',wifi==='E'?'is-wifi6':''),
_b(ver,'OS Version',{'U':'Android 14','Q':'Android 14'}[ver]||ver),
_b(scan,'Scanner',{'B':'SE4770 0°','9':'SE4770 45°','F':'SE5500','C':'SE4710 45°'}[scan]||scan),
_b(cam,'Camera',{'R':'Rear only','F':'Front+Rear','N':'No Camera'}[cam]||cam),
_b(lcd,'LCD',{'F':'FHD','H':'HD'}[lcd]||lcd),
_b(kp,'Keypad',{'R':'30 Key','S':'42 Key','E':'55 Key'}[kp]||kp),
_b(bat,'Battery',{'E':'6700mAh'}[bat]||bat),
p3?_b(p3,'Special',{'HF':'HF (HF/NFC)','TH':'Integrated Trigger'}[p3]||p3,'is-special'):null,
];
return {blocks,warning:warn,tags};
}
function decodeSKU_US30(sku){
const p=sku.split('-'),p1=p[0]||'',p2=p[1]||'',p3=p[2]||'';
const net=p1[4]||'',wifi=p1[5]||'';
const ver=p2[0]||'',scan=p2[1]||'',cam=p2[2]||'',lcd=p2[3]||'',kp=p2[4]||'',bat=p2[5]||'';
const blocks=[
_b('US30','Model','US30','is-model'),
_b(net||'—','LTE',{'0':'NO','3':'Yes (3G)','4':'Yes (4G)'}[net]||net),
_b(wifi||'—','Wi-Fi',wifi==='E'?'Wi-Fi 6E':'Wi-Fi',wifi==='E'?'is-wifi6':''),
_b(ver,'OS Version',{'T':'Android 13','U':'Android 14'}[ver]||ver),
_b(scan,'Scanner',{'2':'SE4770 0°','L':'SE5800 LR','F':'SE5500'}[scan]||scan),
_b(cam,'Camera',{'F':'Front only','R':'Rear only','N':'No Camera'}[cam]||cam),
_b(lcd,'LCD',{'W':'WVGA','F':'FHD','H':'HD'}[lcd]||lcd),
_b(kp||'—','Keypad',{'R':'30 Key','S':'42 Key','E':'55 Key','A':'30 Key','X':'38 Key'}[kp]||kp),
_b(bat,'Battery',{'E':'6700mAh'}[bat]||bat),
p3?_b(p3,'Special',{'HF':'HF (HF/NFC)','TH':'Integrated Trigger'}[p3]||p3,'is-special'):null,
];
return {blocks,warning:'',tags:[]};
}
function decodeSKU_SM20(sku){
const p=sku.split('-'),p1=p[0]||'',p2=p[1]||'',p3=p[2]||'';
const frozen=p1[2]==='F'||p1[3]==='F';
const net=p1[4]||'',wifi=p1[5]||'',ver=p2[0]||'',scan=p2[1]||'',cam=p2[2]||'',lcd=p2[3]||'',kp=p2[4]||'',bat=p2[5]||'';
const tags=[{label:'Enterprise'}];
if(frozen) tags.push({label:'Frozen',cls:'frozen'});
const blocks=[
_b('SM20','Model','SM20','is-model'),
_b(net,'LTE',_net(net)),
_b(wifi||'—','Wi-Fi',wifi==='E'?'Wi-Fi 6':'Wi-Fi',wifi==='E'?'is-wifi6':''),
_b(ver,'OS Version',{'S':'Android 12','R':'Android 11'}[ver]||ver),
_b(scan,'Scanner',{'2':'SE4710'}[scan]||scan),
_b(cam,'Camera',{'R':'Rear only','F':'Front+Rear','N':'No Camera'}[cam]||cam),
_b(lcd,'LCD',{'F':'FHD','H':'HD'}[lcd]||lcd),
_b(kp||'—','Keypad',{'S':'4'}[kp]||kp||'—'),
_b(bat,'Battery',{'S':'4100mAh','E':'6150mAh'}[bat]||bat),
p3?_b(p3,'Special',{'HF':'HF (HF/NFC)','TH':'Integrated Trigger'}[p3]||p3,'is-special'):null,
];
return {blocks,warning:'',tags};
}
function decodeSKU_SM24(sku){
const p=sku.split('-'),p1=p[0]||'',p2=p[1]||'',p3=p[2]||'';
const net=p1[4]||'',wifi=p1[5]||'',ver=p2[0]||'',scan=p2[1]||'',cam=p2[2]||'',lcd=p2[3]||'',kp=p2[4]||'',bat=p2[5]||'';
const blocks=[
_b('SM24','Model','SM24','is-model'),
_b(net,'LTE',_net(net)),
_b(wifi||'—','Wi-Fi',wifi==='E'?'Wi-Fi 6E':'Wi-Fi',wifi==='E'?'is-wifi6':''),
_b(ver,'OS Version',{'W':'Android 16','U':'Android 14'}[ver]||ver),
_b(scan,'Scanner',{'2':'CM60E'}[scan]||scan),
_b(cam,'Camera',{'R':'Rear only','F':'Front+Rear'}[cam]||cam),
_b(lcd,'LCD',{'F':'FHD','H':'HD'}[lcd]||lcd),
_b(kp||'—','Keypad',{'S':'—'}[kp]||kp||'—'),
_b(bat,'Battery',{'S':'4000mAh'}[bat]||bat),
p3?_b(p3,'Special',{'HF':'HF (HF/NFC)','TH':'Integrated Trigger'}[p3]||p3,'is-special'):null,
];
return {blocks,warning:'',tags:[]};
}
function decodeSKU_SM30(sku){
const p=sku.split('-'),p1=p[0]||'',p2=p[1]||'',p3=p[2]||'';
const net=p1[4]||'',wifi=p1[5]||'',ver=p2[0]||'',scan=p2[1]||'',cam=p2[2]||'',lcd=p2[3]||'',kp=p2[4]||'',bat=p2[5]||'';
const blocks=[
_b('SM30','Model','SM30','is-model'),
_b(net,'LTE',_net(net)),
_b(wifi||'—','Wi-Fi',wifi==='E'?'Wi-Fi 6E':'Wi-Fi',wifi==='E'?'is-wifi6':''),
_b(ver,'OS Version',{'W':'Android 16','U':'Android 14'}[ver]||ver),
_b(scan,'Scanner',{'2':'SE4770'}[scan]||scan),
_b(cam,'Camera',{'R':'Rear only','F':'Front+Rear'}[cam]||cam),
_b(lcd,'LCD',{'F':'FHD','H':'HD'}[lcd]||lcd),
_b(kp||'—','Keypad',{'S':'4'}[kp]||kp||'—'),
_b(bat,'Battery',{'S':'5000mAh'}[bat]||bat),
p3?_b(p3,'Special',{'HF':'HF (HF/NFC)','TH':'Integrated Trigger'}[p3]||p3,'is-special'):null,
];
return {blocks,warning:'',tags:[]};
}
function decodeSKU_SL20(sku){
const p=sku.split('-'),p1=p[0]||'',p2=p[1]||'',p3=p[2]||'';
const net=p1[4]||'',wifi=p1[5]||'';
const ver=p2[0]||'',scan=p2[1]||'',cam=p2[2]||'',lcd=p2[3]||'',kp=p2[4]||'',bat=p2[5]||'';
const camMap={'F':'Front only','R':'Rear only','B':'Front+Rear','N':'No Camera','C':'Rear Camera'};
const blocks=[
_b('SL20','Model','SL20','is-model'),
_b(net||'—','LTE',{'0':'NO','3':'Yes (3G)','4':'Yes (4G)','C':'Yes (4G)'}[net]||net),
wifi?_b(wifi,'Wi-Fi',wifi==='E'?'Wi-Fi 6':'Wi-Fi',wifi==='E'?'is-wifi6':''):null,
_b(ver,'OS Version',{'T':'Android 14'}[ver]||ver),
_b(scan,'Scanner',{'J':'E5','2':'SE4710'}[scan]||scan),
_b(cam,'Camera',camMap[cam]||cam),
_b(lcd,'LCD',{'F':'FHD','H':'HD'}[lcd]||lcd),
_b(kp,'Keypad',{'S':'—'}[kp]||kp),
_b(bat,'Battery',{'E':'5000mAh'}[bat]||bat),
p3?_b(p3,'Special',{'HF':'HF (HF/NFC)','TH':'Integrated Trigger'}[p3]||p3,'is-special'):null,
];
return {blocks,warning:'',tags:[]};
}
function decodeSKU_SL20K(sku){
const p=sku.split('-'),p1=p[0]||'',p2=p[1]||'',p3=p[2]||'';
const isL2K=p1.startsWith('L2K');
const net=isL2K?p1[4]||'':p1[5]||'';
const wifi=isL2K?p1[5]||'':p1[6]||'';
const lte=isL2K&&p1[3]==='X';
const ver=p2[0]||'',scan=p2[1]||'',cam=p2[2]||'',lcd=p2[3]||'',kp=p2[4]||'',bat=p2[5]||'';
const blocks=[
_b('SL20K','Model', lte?'SL20K LTE':'SL20K', 'is-model'+(lte?' is-lte':'')),
_b(net||'—','LTE',{'0':'NO','3':'Yes (3G)','4':'Yes (4G)'}[net]||net),
wifi?_b(wifi||'—','Wi-Fi',wifi==='E'?'Wi-Fi 6':'Wi-Fi',wifi==='E'?'is-wifi6':''):null,
_b(ver,'OS Version',{'T':'Android 13'}[ver]||ver),
_b(scan,'Scanner',{'E':'E4','2':'SE4710'}[scan]||scan),
_b(cam,'Camera',{'F':'Front only','R':'Rear only','B':'Front+Rear','N':'No Camera'}[cam]||cam),
_b(lcd,'LCD',{'W':'WVGA','F':'FHD','H':'HD'}[lcd]||lcd),
_b(kp,'Keypad',{'A':'30 Key'}[kp]||kp),
_b(bat,'Battery',{'S':'5200mAh'}[bat]||bat),
p3?_b(p3,'Special',{'HF':'HF (HF/NFC)','TH':'Integrated Trigger'}[p3]||p3,'is-special'):null,
];
return {blocks,warning:'',tags:[]};
}
function decodeSKU_PC10(sku){
const p=sku.split('-'),p2=p[1]||'',p3=p[2]||'';
const ver=p2[0]||'',scan=p2[1]||'',cam=p2[2]||'',lcd=p2[3]||'',kp=p2[4]||'',bat=p2[5]||'';
const blocks=[
_b('PC10','Model','PC10','is-model'),
_b(ver,'OS Version',{'T':'Android 14'}[ver]||ver),
_b(scan,'Scanner',{'2':'SE4710'}[scan]||scan),
_b(cam,'Camera',{'F':'Front only','R':'Rear only','B':'Front+Rear','N':'No Camera'}[cam]||cam),
_b(lcd,'LCD',{'F':'FHD','H':'HD'}[lcd]||lcd),
_b(kp,'Keypad',{'S':'—'}[kp]||kp),
_b(bat,'Battery',{'0':'—'}[bat]||bat),
p3?_b(p3,'Special',{'HF':'HF (HF/NFC)','TH':'Integrated Trigger'}[p3]||p3,'is-special'):null,
];
return {blocks,warning:'',tags:[]};
}
function decodeSKU_WD10(sku){
const p=sku.split('-'),p1=p[0]||'',p2=p[1]||'',p3=p[2]||'';
const lte=p1[3]==='X';
const net=p1[4]||'',wifi=p1[5]||'';
const ver=p2[0]||'',scan=p2[1]||'',cam=p2[2]||'',lcd=p2[3]||'',kp=p2[4]||'',bat=p2[5]||'';
const blocks=[
_b('WD10','Model',lte?'WD10 LTE':'WD10 Standard','is-model'+(lte?' is-lte':'')),
_b(net||'—','LTE',{'0':'NO','3':'Yes (3G)','4':'Yes (4G)'}[net]||net,lte?'is-lte':''),
_b(wifi||'—','Wi-Fi',wifi==='E'?'Wi-Fi 6E':'Wi-Fi',wifi==='E'?'is-wifi6':''),
_b(ver,'OS Version',{'T':'Android 13'}[ver]||ver),
_b(scan,'Scanner',{'S':'No Scanner'}[scan]||scan),
_b(cam,'Camera',{'F':'Front only','R':'Rear only','N':'No Camera'}[cam]||cam),
_b(lcd,'LCD',{'W':'WVGA','F':'FHD','H':'HD'}[lcd]||lcd),
_b(kp||'—','Keypad',{'S':'5 Keys'}[kp]||kp),
_b(bat,'Battery',{'S':'3350mAh'}[bat]||bat),
p3?_b(p3,'Special',{'HF':'HF (HF/NFC)','TH':'Integrated Trigger'}[p3]||p3,'is-special'):null,
];
return {blocks,warning:'',tags:lte?[{label:'LTE',cls:'lte'}]:[]};
}
function decodeSKU_WR(model,sku){
const parts=sku.split('-');
let digits='';
for(const part of parts){const ui=part.indexOf('U');if(ui>=0){digits=part.slice(ui+1);break;}}
const scan=digits[0]||'',opts=digits[1]||'';
const blocks=[
_b(model,'Model',model,'is-model'),
_b(scan,'Scanner',{'1':'SE4101','2':'SE5500','3':'E4770'}[scan]||scan),
_b(opts,'Options',{'2':'Wrist Strap+USB-C'}[opts]||'—'),
_b('1000','Battery','1000mAh'),
];
return {blocks,warning:'',tags:[]};
}
function showAccessorySelection(skuCode){
const sku=SKUMAP[skuCode.toUpperCase()]||SKU_DB.find(s=>s.sku.toUpperCase()===skuCode.toUpperCase());
const panel=$('accessorySelection');
if(!sku){panel.style.display='none';return;}
const modelCode=sku.model.toUpperCase();
const compAccs=COMPATIBILITY_MAP[modelCode]||[];
currentSKUBase=sku;currentSKUPrice=sku.price||0;
currentSelection={baseSku:skuCode,accessories:[]};
$('selectedSKUCode').textContent=skuCode;
$('currentSKUDetails').textContent=t('model')+': '+(sku.model||'—')+' | '+t('android')+': '+(sku.android||'—')+' | '+t('scanner')+': '+(sku.scanner||'—');
const listDiv=$('accessoriesList');
listDiv.innerHTML='';
if(!compAccs.length){
listDiv.innerHTML='<p style="text-align:center;color:var(--coral);font-weight:600;padding:20px 0;">Для модели '+modelCode+' нет совместимых аксессуаров.</p>';
} else {
const accFrag=$f();
compAccs.forEach(accSku=>{
const acc=ACCMAP[accSku]||ACCESSORIES_DB.find(a=>a.sku.toUpperCase()===accSku);
if(!acc)return;
const requiredKey=acc.sku+'::'+modelCode;
const accModelPrefix=acc.sku.split('-')[0];
const requiredSku=ACC_REQUIRED[requiredKey]||ACC_REQUIRED[acc.sku+'::'+accModelPrefix]||null;
const el=$$('div');
el.className='acc-item';
const cb=$$('input');
cb.type='checkbox';
cb.className='acc-checkbox';
cb.addEventListener('change',function(){
el.classList.toggle('checked',this.checked);
updateAccessorySelection(accSku,this.checked);
});
const infoEl=$$('div');
infoEl.className='acc-info';
infoEl.style.flex='1';
const skuEl=$$('div');
skuEl.className='acc-sku-code';
skuEl.textContent=acc.sku;
const descEl=$$('div');
descEl.className='acc-desc';
descEl.textContent=acc.description||'Нет описания';
infoEl.appendChild(skuEl);
infoEl.appendChild(descEl);
if(requiredSku){
const badge=$$('div');
badge.className='acc-required-badge';
badge.innerHTML='&#9888; Необходимо докупить: <strong>'+requiredSku+'</strong>';
infoEl.appendChild(badge);
}
const priceEl=$$('div');
priceEl.className='acc-price';
priceEl.textContent=acc.price?acc.price.toLocaleString('ru-RU')+' $':'—';
el.appendChild(cb);
el.appendChild(infoEl);
el.appendChild(priceEl);
el.addEventListener('click',e=>{
if(e.target.type==='checkbox')return;
cb.checked=!cb.checked;
cb.dispatchEvent(new Event('change'));
});
accFrag.appendChild(el);
});
listDiv.appendChild(accFrag);
}
panel.style.display='block';
updateTotalPrice();
panel.scrollIntoView({behavior:'smooth',block:'nearest'});
$('btn-float-addspec').classList.add('visible');
}
function updateAccessorySelection(accSku,isChecked){if(!currentSelection)return;const i=currentSelection.accessories.indexOf(accSku);if(isChecked&&i===-1)currentSelection.accessories.push(accSku);else if(!isChecked&&i>-1)currentSelection.accessories.splice(i,1);updateTotalPrice();}
function updateTotalPrice(){const accTotal=(currentSelection?.accessories||[]).reduce((sum,sk)=>{const a=ACCMAP[sk]||ACCESSORIES_DB.find(x=>x.sku.toUpperCase()===sk);return sum+(a?a.price||0:0);},0);$('finalConfigurationPrice').textContent=(currentSKUPrice+accTotal).toLocaleString('ru-RU')+' $';}
function addSKUToSpecification(){if(!currentSelection||!currentSKUBase)return;const name=currentSKUBase.description||`${currentSKUBase.model||'?'} / ${currentSKUBase.android||'?'} / ${currentSKUBase.scanner||'?'}`;finalSpecificationList.push({type:'Base SKU',sku:currentSKUBase.sku,name,price:currentSKUBase.price||0,qty:1});currentSelection.accessories.forEach(sk=>{const a=ACCMAP[sk]||ACCESSORIES_DB.find(x=>x.sku.toUpperCase()===sk);if(a)finalSpecificationList.push({type:'Accessory',sku:a.sku,name:a.description||'—',price:a.price||0,qty:1});});renderFinalSpecification();$('accessorySelection').style.display='none';$('btn-float-addspec').classList.remove('visible');currentSelection=null;currentSKUBase=null;showToast('Конфигурация добавлена в спецификацию');}
function addManualSKU(){const sku=$('manual-sku').value.trim();const name=$('manual-name').value.trim();const price=parseFloat($('manual-price').value)||0;if(!sku){showToast('Введите SKU');return;}finalSpecificationList.push({type:'Manual',sku,name:name||'—',price,qty:1});renderFinalSpecification();closeModal('manual-sku-modal');$('manual-sku').value='';$('manual-name').value='';$('manual-price').value='';showToast('Добавлено в спецификацию');}
function updateQty(idx,val){finalSpecificationList[idx].qty=Math.max(1,parseInt(val)||1);renderFinalSpecification();}
function removeSpecRow(idx){finalSpecificationList.splice(idx,1);renderFinalSpecification();}
function renderFinalSpecification(){const tbody=$('specTableBody');const section=$('finalConfiguration');tbody.innerHTML='';let total=0;finalSpecificationList.forEach((item,idx)=>{const subtotal=(item.price||0)*(item.qty||1);total+=subtotal;const tr=$$('tr');if(item.type==='Accessory')tr.className='acc-row';tr.innerHTML=`<td><span class="tag-${item.type==='Accessory'?'acc':'base'}">${item.type==='Base SKU'?'Base':item.type==='Manual'?'Manual':'Acc'}</span></td><td style="font-family:'DM Mono',monospace;font-size:13px;">${item.sku}</td><td>${item.name}</td><td><input type="number" class="qty-input" value="${item.qty||1}" min="1" onchange="updateQty(${idx},this.value)"></td><td>${(item.price||0).toLocaleString('ru-RU')} $</td><td style="font-weight:600;">${subtotal.toLocaleString('ru-RU')} $</td><td><button class="remove-row-btn" onclick="removeSpecRow(${idx})">×</button></td>`;tbody.appendChild(tr);});const totRow=$$('tr');totRow.className='spec-total-row';totRow.innerHTML=`<td colspan="5" style="text-align:right;">Итого:</td><td class="spec-grand-total">${total.toLocaleString('ru-RU')} $</td><td></td>`;tbody.appendChild(totRow);const count=finalSpecificationList.filter(i=>i.type!=='Accessory').length;section.style.display=finalSpecificationList.length?'block':'none';$('spec-count').textContent=count;$('btn-float-spec').classList.toggle('visible',finalSpecificationList.length>0);}
function clearSpecification(){if(!confirm('Очистить всю спецификацию?'))return;finalSpecificationList=[];renderFinalSpecification();showToast('Спецификация очищена');}
function printSpec(){const win=window.open('','_blank');const rows=finalSpecificationList.map(item=>{const sub=(item.price||0)*(item.qty||1);return`<tr><td>${item.type}</td><td>${item.sku}</td><td>${item.name}</td><td>${item.qty||1}</td><td>${(item.price||0).toLocaleString('ru-RU')} $</td><td>${sub.toLocaleString('ru-RU')} $</td></tr>`;}).join('');const total=finalSpecificationList.reduce((s,i)=>s+(i.price||0)*(i.qty||1),0);win.document.write(`<!DOCTYPE html><html><head><title>M3 MOBILE Specification</title><style>body{font-family:Arial,sans-serif;padding:30px}h1{color:#1E2171}table{width:100%;border-collapse:collapse;margin-top:20px}th{background:#1E2171;color:#fff;padding:10px;text-align:left}td{padding:9px 10px;border-bottom:1px solid #ddd}.total{font-weight:700;font-size:18px;color:#FF644A}</style></head><body><h1>M3 MOBILE — Спецификация</h1><p>Дата: ${new Date().toLocaleDateString('ru-RU')}</p><table><thead><tr><th>Тип</th><th>SKU</th><th>Наименование</th><th>Кол-во</th><th>Цена</th><th>Итого</th></tr></thead><tbody>${rows}<tr><td colspan="5" style="text-align:right;font-weight:700">Итого:</td><td class="total">${total.toLocaleString('ru-RU')} $</td></tr></tbody></table></body></html>`);win.document.close();win.print();}
function exportToCSV(){if(!finalSpecificationList.length){showToast('Нет данных для экспорта');return;}const esc=v=>`"${String(v).replace(/"/g,'""')}"`;let csv='Тип;SKU;Наименование;Кол-во;Цена ($);Итого ($)\n';let total=0;finalSpecificationList.forEach(item=>{const sub=(item.price||0)*(item.qty||1);total+=sub;csv+=[esc(item.type),esc(item.sku),esc(item.name),item.qty||1,item.price||0,sub].join(';')+'\n';});csv+=`\n;;Итого;;;${total}`;const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});const a=$$('a');a.href=URL.createObjectURL(blob);a.download=`M3_Specification_${new Date().toISOString().slice(0,10)}.csv`;a.click();}
function scrollToSpec(){$('finalConfiguration').scrollIntoView({behavior:'smooth'});}
function toggleComparison(skuCode){const i=comparisonList.indexOf(skuCode);if(i>-1)comparisonList.splice(i,1);else{if(comparisonList.length>=4){showToast('Максимум 4 SKU');return;}comparisonList.push(skuCode);}$('comparison-count').textContent=comparisonList.length;$('btn-float-compare').classList.toggle('visible',comparisonList.length>0);filterSKU();}
function showComparison(){if(comparisonList.length<2){showToast('Выберите минимум 2 SKU');return;}const skus=comparisonList.map(c=>SKU_DB.find(s=>s.sku===c)).filter(Boolean);const props=Object.keys(skus[0]).filter(k=>!['sku','price','description'].includes(k));let html=`<p style="color:var(--slate);font-size:13px;margin-bottom:14px;">${t('comparison_note')}</p><div class="compare-table-wrap"><table class="compare-table"><thead><tr><th>Характеристика</th>${skus.map(s=>`<th>${s.sku}</th>`).join('')}</tr></thead><tbody>`;props.forEach(p=>{const vals=skus.map(s=>s[p]||'—');const allSame=new Set(vals).size<=1;html+=`<tr><td class="prop-name">${p}</td>${vals.map(v=>`<td class="${allSame?'':'diff'}">${v}</td>`).join('')}</tr>`;});const prices=skus.map(s=>(s.price||0).toLocaleString('ru-RU')+' $');html+=`<tr><td class="prop-name">Цена</td>${prices.map((p,i)=>`<td class="${new Set(prices).size<=1?'':'diff'}" style="font-weight:700;">${p}</td>`).join('')}</tr></tbody></table></div><div style="display:flex;justify-content:flex-end;margin-top:16px;"><button class="btn-action btn-primary" onclick="comparisonList=[];$('btn-float-compare').classList.remove('visible');closeModal('comparison-modal');$('comparison-count').textContent=0;filterSKU();">${t('clear_comparison')}</button></div>`;$('comparison-body').innerHTML=html;showModal('comparison-modal');}
function showModal(id){$(id).classList.add('open');document.body.style.overflow='hidden';}
function closeModal(id){$(id).classList.remove('open');document.body.style.overflow='';}
function closeModalOnBackdrop(e,el){if(e.target===el)closeModal(el.id);}
function openAddManualSKUModal(){showModal('manual-sku-modal');}
let toastTimer;
function showToast(msg){const el=$('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2800);}
function applyTranslations(){
document.querySelectorAll('[data-i18n]:not(option)').forEach(el=>{
el.textContent=t(el.dataset.i18n);
});
document.querySelectorAll('select').forEach(sel=>{
const cur=sel.value;
Array.from(sel.options).forEach(opt=>{
if(opt.dataset.i18n){opt.text=t(opt.dataset.i18n);}
});
// Force visual refresh: swap to dummy value and back
const dummy=$$('option');dummy.value='__dummy__';
sel.appendChild(dummy);
sel.value='__dummy__';
sel.removeChild(dummy);
sel.value=cur;
});
document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
el.placeholder=t(el.dataset.i18nPlaceholder);
});
document.querySelectorAll('.lang').forEach(btn=>{
btn.classList.toggle('active', btn.textContent.toLowerCase()===currentLanguage);
});
}
function changeLanguage(lang){currentLanguage=lang;if(dataLoaded){setStatus(t('data_loaded_message').replace('{count}',SKU_DB.length));updateModelOptions();filterSKU();}applyTranslations();}
window.addEventListener('scroll',()=>$('back-to-top').classList.toggle('visible',window.scrollY>320));
function openLightbox(src){$('lightbox-img').src=src;$('lightbox').classList.add('open');document.body.style.overflow='hidden';}
function closeLightbox(){$('lightbox').classList.remove('open');document.body.style.overflow='';}
function debounce(fn,delay){let timer;return(...args)=>{clearTimeout(timer);timer=setTimeout(()=>fn(...args),delay);};}
document.addEventListener('DOMContentLoaded',()=>{
const bodyObserver=new MutationObserver(muts=>{muts.forEach(m=>{m.addedNodes.forEach(n=>{const allowed=['app-shell','toast','lightbox','floating-group'];const isAllowed=n.id&&allowed.includes(n.id)||n.className&&allowed.some(a=>n.className.includes(a));if(!isAllowed&&n.parentNode===document.body){try{document.body.removeChild(n);}catch(e){}}});});});
bodyObserver.observe(document.body,{childList:true,subtree:false});
loadData();
applyTranslations();
const searchInput=$('sku-search');
searchInput.addEventListener('input',debounce(()=>{if(dataLoaded) searchBySKU();},300));
searchInput.addEventListener('keydown',e=>{
    if(e.key==='Enter') searchBySKU();
    if(e.key==='Escape'&&searchInput.value) clearSearch();
  });
document.addEventListener('keydown',e=>{
    if(e.key==='Escape') closeLightbox();
  });
});

const TREOLAN_API = 'https://treolanapi-production.up.railway.app';
let treolanData = [];
let treolanLoaded = false;

function openTreolanModal() {
  document.getElementById('treolan-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  if (!treolanLoaded) loadTreolanData();
}

function closeTreolanModal() {
  document.getElementById('treolan-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeTreolanOnBackdrop(e) {
  if (e.target === document.getElementById('treolan-modal')) closeTreolanModal();
}

async function loadTreolanData() {
  const body = document.getElementById('treolan-body');
  body.innerHTML = '<div class="treolan-loading">⏳ Загружаем склад Treolan...</div>';
  document.getElementById('treolan-updated').textContent = 'Загрузка...';
  try {
    const res = await fetch(TREOLAN_API + '/api/catalog');
    if (!res.ok) throw new Error('Ошибка ' + res.status);
    const json = await res.json();
    treolanData = json.items || [];
    treolanLoaded = true;
    const updated = json.updated ? new Date(json.updated).toLocaleString('ru-RU') : '';
    document.getElementById('treolan-updated').textContent = `Обновлено: ${updated} · ${treolanData.length} позиций`;
    document.getElementById('treolan-footer-info').textContent = `Всего: ${treolanData.length} позиций`;
    filterTreolanTable();
  } catch (e) {
    body.innerHTML = `<div class="treolan-error">❌ ${e.message}</div>`;
    document.getElementById('treolan-updated').textContent = 'Ошибка загрузки';
  }
}

function filterTreolanTable() {
  const q = document.getElementById('treolan-search').value.toLowerCase();
  const avail = document.getElementById('treolan-avail-filter').value;
  let filtered = treolanData.filter(item => {
    if (q && !(item.articul||'').toLowerCase().includes(q) && !(item.name||'').toLowerCase().includes(q)) return false;
    if (avail === 'avail' && item.stock <= 0) return false;
    if (avail === 'transit' && item.transit <= 0) return false;
    if (avail === 'none' && (item.stock > 0 || item.transit > 0)) return false;
    return true;
  });
  document.getElementById('treolan-stats').textContent = `Показано: ${filtered.length}`;
  const rows = filtered.map(item => `<tr>
    <td><div class="t-articul">${item.articul}</div></td>
    <td><div class="t-name">${item.name||'—'}</div></td>
    <td>${item.stock > 0 ? '<span class="t-badge-avail">В наличии</span>' : '<span class="t-badge-noavail">Нет</span>'}</td>
    <td><span class="t-stock${item.stock<=0?' zero':''}">${item.stock>=999?'много':item.stock}</span></td>
    <td><span class="t-transit${item.transit<=0?' zero':''}">${item.transit>=999?'много':(item.transit||'—')}</span>${item.transitDate?`<div class="t-date">${item.transitDate}</div>`:''}</td>
  </tr>`).join('');
  document.getElementById('treolan-body').innerHTML = rows.length
    ? `<table class="treolan-table"><thead><tr><th>Артикул</th><th>Наименование</th><th>Наличие</th><th>Склад</th><th>Транзит</th></tr></thead><tbody>${rows}</tbody></table>`
    : '<div class="treolan-loading">???? Ничего не найдено</div>';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTreolanModal(); });

// ═══════════════════════════════════════════════════
//  OCS STOCK MODAL
// ═══════════════════════════════════════════════════
const OCS_API = 'https://ocs-api-production-de1e.up.railway.app';
let ocsData = [];
let ocsLoaded = false;

function openOcsModal() {
  document.getElementById('ocs-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  if (!ocsLoaded) loadOcsData();
}

function closeOcsModal() {
  document.getElementById('ocs-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeOcsOnBackdrop(e) {
  if (e.target === document.getElementById('ocs-modal')) closeOcsModal();
}

async function loadOcsData() {
  const body = document.getElementById('ocs-body');
  body.innerHTML = '<div class="treolan-loading">⏳ Загружаем склад OCS...</div>';
  document.getElementById('ocs-updated').textContent = 'Загрузка...';
  try {
    const res = await fetch(OCS_API + '/api/m3');
    if (!res.ok) throw new Error('Ошибка ' + res.status);
    const json = await res.json();
    ocsData = json.items || [];
    ocsLoaded = true;
    const updated = new Date().toLocaleString('ru-RU');
    document.getElementById('ocs-updated').textContent = `Обновлено: ${updated} · ${ocsData.length} позиций`;
    document.getElementById('ocs-footer-info').textContent = `Всего: ${ocsData.length} позиций`;
    filterOcsTable();
  } catch (e) {
    body.innerHTML = `<div class="treolan-error">❌ ${e.message}</div>`;
    document.getElementById('ocs-updated').textContent = 'Ошибка загрузки';
  }
}

function filterOcsTable() {
  const q = document.getElementById('ocs-search').value.toLowerCase();
  const avail = document.getElementById('ocs-avail-filter').value;

  let filtered = ocsData.filter(item => {
    const articul = (item.partNumber || item.itemId || '').toLowerCase();
    const name = (item.itemNameRus || item.itemName || '').toLowerCase();
    if (q && !articul.includes(q) && !name.includes(q)) return false;

    const stockQty = (item.stock || []).reduce((s, l) => s + (l.quantity || 0), 0);
    const transitQty = (item.transit || []).reduce((s, l) => s + (l.quantity || 0), 0);

    if (avail === 'avail' && stockQty <= 0) return false;
    if (avail === 'transit' && transitQty <= 0) return false;
    if (avail === 'none' && (stockQty > 0 || transitQty > 0)) return false;
    return true;
  });

  document.getElementById('ocs-stats').textContent = `Показано: ${filtered.length}`;

  const rows = filtered.map(item => {
    const stockQty = (item.stock || []).reduce((s, l) => s + (l.quantity || 0), 0);
    const transitQty = (item.transit || []).reduce((s, l) => s + (l.quantity || 0), 0);
    const transitDate = (item.transit || []).map(l => l.deliveryDate).filter(Boolean)[0] || '';
    const name = item.itemNameRus || item.itemName || '---';
    const articul = item.partNumber || item.itemId || '---';
    return `<tr>
      <td><div class="t-articul">${articul}</div></td>
      <td><div class="t-name">${name}</div></td>
      <td>${stockQty > 0 ? '<span class="t-badge-avail">В наличии</span>' : '<span class="t-badge-noavail">Нет</span>'}</td>
      <td><span class="t-stock${stockQty <= 0 ? ' zero' : ''}">${stockQty >= 999 ? 'много' : stockQty}</span></td>
      <td><span class="t-transit${transitQty <= 0 ? ' zero' : ''}">${transitQty >= 999 ? 'много' : (transitQty || '---')}</span>${transitDate ? `<div class="t-date">${transitDate}</div>` : ''}</td>
    </tr>`;
  }).join('');

  document.getElementById('ocs-body').innerHTML = rows.length
    ? `<table class="treolan-table"><thead><tr><th>Артикул</th><th>Наименование</th><th>Наличие</th><th>Склад</th><th>Транзит</th></tr></thead><tbody>${rows}</tbody></table>`
    : '<div class="treolan-loading">😶 Ничего не найдено</div>';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOcsModal();
});


// ═══════════════════════════════════════════════════
//  М3 STOCK MODAL
// ═══════════════════════════════════════════════════
const M3_STOCK_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTapyh4HL6l3S7RzTA0k4ZpT6laCs7R67b3hVmh2dXuuCOuPYx9VztyGMiNHxC2fwK-KPlfZouVsVY/pub?output=csv';
let m3StockData = [];
let m3StockLoaded = false;

function openM3StockModal() {
  document.getElementById('m3stock-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  if (!m3StockLoaded) loadM3StockData();
}

function closeM3StockModal() {
  document.getElementById('m3stock-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeM3StockOnBackdrop(e) {
  if (e.target === document.getElementById('m3stock-modal')) closeM3StockModal();
}

async function loadM3StockData() {
  const body = document.getElementById('m3stock-body');
  body.innerHTML = '<div class="treolan-loading">⏳ Загружаем склад M3...</div>';
  document.getElementById('m3stock-updated').textContent = 'Загрузка...';
  try {
    const res = await fetch(M3_STOCK_CSV);
    if (!res.ok) throw new Error('Ошибка ' + res.status);
    const text = await res.text();
    const rows = text.trim().split('\n');
    const headers = rows[0].split(',').map(h => h.trim().replace(/^"|"$/g, '').toLowerCase());
    
    m3StockData = rows.slice(1).map(row => {
      // Handle quoted fields with commas
      const fields = [];
      let current = '';
      let inQuotes = false;
      for (const char of row) {
        if (char === '"') { inQuotes = !inQuotes; }
        else if (char === ',' && !inQuotes) { fields.push(current.trim()); current = ''; }
        else { current += char; }
      }
      fields.push(current.trim());
      
      const obj = {};
      headers.forEach((h, i) => obj[h] = (fields[i] || '').replace(/^"|"$/g, ''));
      return obj;
    }).filter(row => Object.values(row).some(v => v));

    m3StockLoaded = true;
    const updated = new Date().toLocaleString('ru-RU');
    document.getElementById('m3stock-updated').textContent = `Обновлено: ${updated} · ${m3StockData.length} позиций`;
    document.getElementById('m3stock-footer-info').textContent = `Всего: ${m3StockData.length} позиций`;
    
    // Store headers for dynamic rendering
    window._m3StockHeaders = headers;
    filterM3StockTable();
  } catch (e) {
    body.innerHTML = `<div class="treolan-error">❌ ${e.message}</div>`;
    document.getElementById('m3stock-updated').textContent = 'Ошибка загрузки';
  }
}

function filterM3StockTable() {
  const q = document.getElementById('m3stock-search').value.toLowerCase();
  const avail = document.getElementById('m3stock-avail-filter').value;
  const headers = window._m3StockHeaders || [];
  
  // Detect key columns by common names
  const articulKey = headers.find(h => /артикул|sku|artic|part/i.test(h)) || headers[0];
  const nameKey = headers.find(h => /наимен|name|назван/i.test(h)) || headers[1];
  const stockKey = headers.find(h => /остат|склад|stock|наличи|кол/i.test(h)) || headers[2];

  let filtered = m3StockData.filter(item => {
    const articul = (item[articulKey] || '').toLowerCase();
    const name = (item[nameKey] || '').toLowerCase();
    if (q && !articul.includes(q) && !name.includes(q)) return false;
    
    const qty = parseInt(item[stockKey]) || 0;
    if (avail === 'avail' && qty <= 0) return false;
    if (avail === 'none' && qty > 0) return false;
    return true;
  });

  document.getElementById('m3stock-stats').textContent = `Показано: ${filtered.length}`;

  if (!filtered.length) {
    document.getElementById('m3stock-body').innerHTML = '<div class="treolan-loading">😶 Ничего не найдено</div>';
    return;
  }

  // Build table with all columns
  const thead = headers.map(h => `<th>${h}</th>`).join('');
  const tbody = filtered.map(item => {
    const cells = headers.map(h => {
      const val = item[h] || '';
      const num = parseInt(val);
      if (h === stockKey && !isNaN(num)) {
        return `<td><span class="t-stock${num <= 0 ? ' zero' : ''}">${num >= 999 ? 'много' : num}</span></td>`;
      }
      if (h === articulKey) return `<td><div class="t-articul">${val}</div></td>`;
      if (h === nameKey) return `<td><div class="t-name">${val}</div></td>`;
      return `<td>${val}</td>`;
    }).join('');
    return `<tr>${cells}</tr>`;
  }).join('');

  document.getElementById('m3stock-body').innerHTML = 
    `<table class="treolan-table"><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table>`;
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeM3StockModal(); closeOcsModal(); }
});


// ═══════════════════════════════════════════════════
//  EXCEL EXPORT
// ═══════════════════════════════════════════════════
function exportToExcel(data, headers, filename) {
  if (!data || !data.length) return;

  // Build CSV with BOM for correct encoding in Excel
  const bom = '\uFEFF';
  const sep = ';';
  const headerRow = headers.map(h => `"${h}"`).join(sep);
  const rows = data.map(row =>
    headers.map(h => {
      const val = String(row[h] !== undefined ? row[h] : '').replace(/"/g, '""');
      return `"${val}"`;
    }).join(sep)
  );
  const csv = bom + [headerRow, ...rows].join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename + '_' + new Date().toISOString().slice(0,10) + '.csv';
  a.click();
  URL.revokeObjectURL(url);
}

function exportTreolan() {
  const headers = ['Артикул', 'Наименование', 'Наличие', 'Склад', 'Транзит', 'Дата транзита'];
  const rows = treolanData.map(item => ({
    'Артикул': item.articul || '',
    'Наименование': item.name || '',
    'Наличие': item.stock > 0 ? 'В наличии' : 'Нет',
    'Склад': item.stock >= 999 ? 'много' : (item.stock || 0),
    'Транзит': item.transit >= 999 ? 'много' : (item.transit || 0),
    'Дата транзита': item.transitDate || '',
  }));
  exportToExcel(rows, headers, 'Сток_Treolan_M3Mobile');
}

function exportOcs() {
  const headers = ['Артикул', 'Наименование', 'Наличие', 'Склад', 'Транзит', 'Дата транзита'];
  const rows = ocsData.map(item => {
    const stockQty = (item.stock || []).reduce((s, l) => s + (l.quantity || 0), 0);
    const transitQty = (item.transit || []).reduce((s, l) => s + (l.quantity || 0), 0);
    const transitDate = (item.transit || []).map(l => l.deliveryDate).filter(Boolean)[0] || '';
    return {
      'Артикул': item.partNumber || item.itemId || '',
      'Наименование': item.itemNameRus || item.itemName || '',
      'Наличие': stockQty > 0 ? 'В наличии' : 'Нет',
      'Склад': stockQty >= 999 ? 'много' : stockQty,
      'Транзит': transitQty >= 999 ? 'много' : transitQty,
      'Дата транзита': transitDate,
    };
  });
  exportToExcel(rows, headers, 'Сток_OCS_M3Mobile');
}

function exportM3Stock() {
  const headers = window._m3StockHeaders || [];
  exportToExcel(m3StockData, headers, 'Сток_M3Mobile');
}
