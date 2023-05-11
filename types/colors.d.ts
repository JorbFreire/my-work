type HexaLettersType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

type HexaColorValueType = Mapped<3 | 6 | 8>[number | HexaLetters]

declare type HexaColorStringType = `#${HexaColorValueType}`
