import { test } from '../index.ts';

Deno.test('should validate alpha strings', () => {
  test({
    validator: 'isAlpha',
    valid: ['abc', 'ABC', 'FoObar'],
    invalid: ['abc1', '  foo  ', '', 'ÄBC', 'FÜübar', 'Jön', 'Heiß'],
  });
});

Deno.test('should validate bulgarian alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['bg-BG'],
    valid: ['абв', 'АБВ', 'жаба', 'яГоДа'],
    invalid: ['abc1', '  foo  ', '', 'ЁЧПС', '_аз_обичам_обувки_', 'ехо!'],
  });
});

Deno.test('should validate czech alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['cs-CZ'],
    valid: ['žluťoučký', 'KŮŇ', 'Pěl', 'Ďábelské', 'ódy'],
    invalid: ['ábc1', '  fůj  ', ''],
  });
});

Deno.test('should validate slovak alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['sk-SK'],
    valid: [
      'môj',
      'ľúbím',
      'mäkčeň',
      'stĹp',
      'vŕba',
      'ňorimberk',
      'ťava',
      'žanéta',
      'Ďábelské',
      'ódy',
    ],
    invalid: ['1moj', '你好世界', '  Привет мир  ', 'مرحبا العا '],
  });
});

Deno.test('should validate danish alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['da-DK'],
    valid: ['aøå', 'Ære', 'Øre', 'Åre'],
    invalid: ['äbc123', 'ÄBC11', ''],
  });
});

Deno.test('should validate dutch alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['nl-NL'],
    valid: ['Kán', 'één', 'vóór', 'nú', 'héél'],
    invalid: ['äca ', 'abcß', 'Øre'],
  });
});

Deno.test('should validate german alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['de-DE'],
    valid: ['äbc', 'ÄBC', 'FöÖbär', 'Heiß'],
    invalid: ['äbc1', '  föö  ', ''],
  });
});

Deno.test('should validate hungarian alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['hu-HU'],
    valid: ['árvíztűrőtükörfúrógép', 'ÁRVÍZTŰRŐTÜKÖRFÚRÓGÉP'],
    invalid: ['äbc1', '  fäö  ', 'Heiß', ''],
  });
});

Deno.test('should validate portuguese alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['pt-PT'],
    valid: ['palíndromo', 'órgão', 'qwértyúão', 'àäãcëüïÄÏÜ'],
    invalid: ['12abc', 'Heiß', 'Øre', 'æøå', ''],
  });
});

Deno.test('should validate italian alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['it-IT'],
    valid: [
      'àéèìîóòù',
      'correnti',
      'DEFINIZIONE',
      'compilazione',
      'metró',
      'pèsca',
      'PÉSCA',
      'genî',
    ],
    invalid: ['äbc123', 'ÄBC11', 'æøå', ''],
  });
});

Deno.test('should validate Vietnamese alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['vi-VN'],
    valid: ['thiến', 'nghiêng', 'xin', 'chào', 'thế', 'giới'],
    invalid: ['thầy3', 'Ba gà', ''],
  });
});

Deno.test('should validate arabic alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['ar'],
    valid: ['أبت', 'اَبِتَثّجً'],
    invalid: [
      '١٢٣أبت',
      '١٢٣',
      'abc1',
      '  foo  ',
      '',
      'ÄBC',
      'FÜübar',
      'Jön',
      'Heiß',
    ],
  });
});

Deno.test('should validate farsi alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['fa-IR'],
    valid: ['پدر', 'مادر', 'برادر', 'خواهر'],
    invalid: [
      'فارسی۱۲۳',
      '۱۶۴',
      'abc1',
      '  foo  ',
      '',
      'ÄBC',
      'FÜübar',
      'Jön',
      'Heiß',
    ],
  });
});

Deno.test('should validate kurdish alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['ku-IQ'],
    valid: ['ئؤڤگێ', 'کوردستان'],
    invalid: [
      'ئؤڤگێ١٢٣',
      '١٢٣',
      'abc1',
      '  foo  ',
      '',
      'ÄBC',
      'FÜübar',
      'Jön',
      'Heiß',
    ],
  });
});

Deno.test('should validate norwegian alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['nb-NO'],
    valid: ['aøå', 'Ære', 'Øre', 'Åre'],
    invalid: ['äbc123', 'ÄBC11', ''],
  });
});

Deno.test('should validate polish alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['pl-PL'],
    valid: [
      'kreską',
      'zamknięte',
      'zwykłe',
      'kropką',
      'przyjęły',
      'święty',
      'Pozwól',
    ],
    invalid: ['12řiď ', 'blé!!', 'föö!2!'],
  });
});

Deno.test('should validate serbian cyrillic alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['sr-RS'],
    valid: ['ШћжЂљЕ', 'ЧПСТЋЏ'],
    invalid: ['řiď ', 'blé33!!', 'föö!!'],
  });
});

Deno.test('should validate serbian latin alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['sr-RS@latin'],
    valid: ['ŠAabčšđćž', 'ŠATROĆčđš'],
    invalid: ['12řiď ', 'blé!!', 'föö!2!'],
  });
});

Deno.test('should validate spanish alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['es-ES'],
    valid: ['ábcó', 'ÁBCÓ', 'dormís', 'volvés', 'español'],
    invalid: ['äca ', 'abcß', 'föö!!'],
  });
});

Deno.test('should validate swedish alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['sv-SE'],
    valid: ['religiös', 'stjäla', 'västgöte', 'Åre'],
    invalid: ['AİıÖöÇçŞşĞğÜüZ', 'religiös23', ''],
  });
});

Deno.test('should validate defined arabic locales alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['ar-SY'],
    valid: ['أبت', 'اَبِتَثّجً'],
    invalid: [
      '١٢٣أبت',
      '١٢٣',
      'abc1',
      '  foo  ',
      '',
      'ÄBC',
      'FÜübar',
      'Jön',
      'Heiß',
    ],
  });
});

Deno.test('should validate turkish alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['tr-TR'],
    valid: ['AİıÖöÇçŞşĞğÜüZ'],
    invalid: [
      '0AİıÖöÇçŞşĞğÜüZ1',
      '  AİıÖöÇçŞşĞğÜüZ  ',
      'abc1',
      '  foo  ',
      '',
      'ÄBC',
      'Heiß',
    ],
  });
});

Deno.test('should validate urkrainian alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['uk-UA'],
    valid: ['АБВГҐДЕЄЖЗИIЇЙКЛМНОПРСТУФХЦШЩЬЮЯ'],
    invalid: [
      '0AİıÖöÇçŞşĞğÜüZ1',
      '  AİıÖöÇçŞşĞğÜüZ  ',
      'abc1',
      '  foo  ',
      '',
      'ÄBC',
      'Heiß',
      'ЫыЪъЭэ',
    ],
  });
});

Deno.test('should validate greek alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['el-GR'],
    valid: [
      'αβγδεζηθικλμνξοπρςστυφχψω',
      'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
      'άέήίΰϊϋόύώ',
      'ΆΈΉΊΪΫΎΏ',
    ],
    invalid: [
      '0AİıÖöÇçŞşĞğÜüZ1',
      '  AİıÖöÇçŞşĞğÜüZ  ',
      'ÄBC',
      'Heiß',
      'ЫыЪъЭэ',
      '120',
      'jαckγ',
    ],
  });
});

Deno.test('should validate Hebrew alpha strings', () => {
  test({
    validator: 'isAlpha',
    args: ['he'],
    valid: ['בדיקה', 'שלום'],
    invalid: ['בדיקה123', '  foo  ', 'abc1', ''],
  });
});

Deno.test('should error on invalid locale', () => {
  test({
    validator: 'isAlpha',
    args: ['is-NOT'],
    error: ['abc', 'ABC'],
  });
});
