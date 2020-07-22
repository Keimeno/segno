import { test } from '../index.ts';

Deno.test('should validate alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    valid: ['abc123', 'ABC11'],
    invalid: ['abc ', 'foo!!', 'ÄBC', 'FÜübar', 'Jön'],
  });
});

Deno.test('should validate defined english aliases', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['en-GB'],
    valid: ['abc123', 'ABC11'],
    invalid: ['abc ', 'foo!!', 'ÄBC', 'FÜübar', 'Jön'],
  });
});

Deno.test('should validate bulgarian alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['bg-BG'],
    valid: ['абв1', '4АБ5В6', 'жаба', 'яГоДа2', 'йЮя', '123'],
    invalid: [' ', '789  ', 'hello000'],
  });
});

Deno.test('should validate czech alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['cs-CZ'],
    valid: ['řiť123', 'KŮŇ11'],
    invalid: ['řiď ', 'blé!!'],
  });
});

Deno.test('should validate slovak alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['sk-SK'],
    valid: [
      '1môj',
      '2ľúbím',
      '3mäkčeň',
      '4stĹp',
      '5vŕba',
      '6ňorimberk',
      '7ťava',
      '8žanéta',
      '9Ďábelské',
      '10ódy',
    ],
    invalid: ['1moj!', '你好世界', '  Привет мир  '],
  });
});

Deno.test('should validate danish alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['da-DK'],
    valid: ['ÆØÅ123', 'Ære321', '321Øre', '123Åre'],
    invalid: ['äbc123', 'ÄBC11', ''],
  });
});

Deno.test('should validate dutch alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['nl-NL'],
    valid: ['Kán123', 'één354', 'v4óór', 'nú234', 'hé54él'],
    invalid: ['1äca ', 'ab3cß', 'Øre'],
  });
});

Deno.test('should validate german alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['de-DE'],
    valid: ['äbc123', 'ÄBC11'],
    invalid: ['äca ', 'föö!!'],
  });
});

Deno.test('should validate hungarian alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['hu-HU'],
    valid: ['0árvíztűrőtükörfúrógép123', '0ÁRVÍZTŰRŐTÜKÖRFÚRÓGÉP123'],
    invalid: ['1időúr!', 'äbc1', '  fäö  ', 'Heiß!', ''],
  });
});

Deno.test('should validate portuguese alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['pt-PT'],
    valid: ['palíndromo', '2órgão', 'qwértyúão9', 'àäãcë4üïÄÏÜ'],
    invalid: ['!abc', 'Heiß', 'Øre', 'æøå', ''],
  });
});

Deno.test('should validate italian alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['it-IT'],
    valid: [
      '123àéèìîóòù',
      '123correnti',
      'DEFINIZIONE321',
      'compil123azione',
      'met23ró',
      'pès56ca',
      'PÉS45CA',
      'gen45î',
    ],
    invalid: ['äbc123', 'ÄBC11', 'æøå', ''],
  });
});

Deno.test('should validate spanish alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['es-ES'],
    valid: ['ábcó123', 'ÁBCÓ11'],
    invalid: ['äca ', 'abcß', 'föö!!'],
  });
});

Deno.test('should validate Vietnamese alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['vi-VN'],
    valid: ['Thầy3', '3Gà'],
    invalid: ['toang!', 'Cậu Vàng'],
  });
});

Deno.test('should validate arabic alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['ar'],
    valid: ['أبت123', 'أبتَُِ١٢٣'],
    invalid: ['äca ', 'abcß', 'föö!!'],
  });
});

Deno.test('should validate farsi alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['fa-IR'],
    valid: ['پارسی۱۲۳', '۱۴۵۶', 'مژگان9'],
    invalid: ['äca ', 'abcßة', 'föö!!', '٤٥٦'],
  });
});

Deno.test('should validate kurdish alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['ku-IQ'],
    valid: ['ئؤڤگێ١٢٣'],
    invalid: ['äca ', 'abcß', 'föö!!'],
  });
});

Deno.test('should validate defined arabic aliases', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['ar-SY'],
    valid: ['أبت123', 'أبتَُِ١٢٣'],
    invalid: ['abc ', 'foo!!', 'ÄBC', 'FÜübar', 'Jön'],
  });
});

Deno.test('should validate norwegian alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['nb-NO'],
    valid: ['ÆØÅ123', 'Ære321', '321Øre', '123Åre'],
    invalid: ['äbc123', 'ÄBC11', ''],
  });
});

Deno.test('should validate polish alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['pl-PL'],
    valid: [
      'kre123ską',
      'zam21knięte',
      'zw23ykłe',
      '123',
      'prz23yjęły',
      'świ23ęty',
      'Poz1322wól',
    ],
    invalid: ['12řiď ', 'blé!!', 'föö!2!'],
  });
});

Deno.test('should validate serbian cyrillic alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['sr-RS'],
    valid: ['ШћжЂљЕ123', 'ЧПСТ132ЋЏ'],
    invalid: ['řiď ', 'blé!!', 'föö!!'],
  });
});

Deno.test('should validate serbian latin alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['sr-RS@latin'],
    valid: ['ŠAabčšđćž123', 'ŠATRO11Ćčđš'],
    invalid: ['řiď ', 'blé!!', 'föö!!'],
  });
});

Deno.test('should validate swedish alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['sv-SE'],
    valid: ['religiös13', 'st23jäla', 'västgöte123', '123Åre'],
    invalid: ['AİıÖöÇçŞşĞğÜüZ', 'foo!!', ''],
  });
});

Deno.test('should validate turkish alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['tr-TR'],
    valid: ['AİıÖöÇçŞşĞğÜüZ123'],
    invalid: ['AİıÖöÇçŞşĞğÜüZ ', 'foo!!', 'ÄBC'],
  });
});

Deno.test('should validate urkrainian alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['uk-UA'],
    valid: ['АБВГҐДЕЄЖЗИIЇЙКЛМНОПРСТУФХЦШЩЬЮЯ123'],
    invalid: ['éeoc ', 'foo!!', 'ÄBC', 'ЫыЪъЭэ'],
  });
});

Deno.test('should validate greek alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['el-GR'],
    valid: [
      'αβγδεζηθικλμνξοπρςστυφχψω',
      'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
      '20θ',
      '1234568960',
    ],
    invalid: [
      '0AİıÖöÇçŞşĞğÜüZ1',
      '  AİıÖöÇçŞşĞğÜüZ  ',
      'ÄBC',
      'Heiß',
      'ЫыЪъЭэ',
      'jαckγ',
    ],
  });
});

Deno.test('should validate Hebrew alphanumeric strings', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['he'],
    valid: ['אבג123', 'שלום11'],
    invalid: ['אבג ', 'לא!!', 'abc', '  foo  '],
  });
});

Deno.test('should error on invalid locale', () => {
  test({
    validator: 'isAlphanumeric',
    args: ['is-NOT'],
    error: ['1234568960', 'abc123'],
  });
});
